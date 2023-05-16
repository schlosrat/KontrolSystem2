import { Expression, Node, ValidationError } from ".";
import { TO2Type, UNKNOWN_TYPE } from "./to2-type";
import { InputPosition, WithPosition } from "../../parser";
import { BlockContext } from "./context";
import { SemanticToken } from "../../syntax-token";
import { Position } from "vscode-languageserver-textdocument";
import { CompletionItem, CompletionItemKind } from "vscode-languageserver";

export class FieldGet extends Expression {
  private allFieldNames?: string[];
  private allMethodNames?: string[];

  constructor(
    public readonly target: Expression,
    public readonly fieldName: WithPosition<string>,
    start: InputPosition,
    end: InputPosition
  ) {
    super(start, end);
  }

  public resultType(context: BlockContext): TO2Type {
    const targetType = this.target
      .resultType(context)
      .realizedType(context.module);

    return targetType.findField(this.fieldName.value) ?? UNKNOWN_TYPE;
  }

  public reduceNode<T>(
    combine: (previousValue: T, node: Node) => T,
    initialValue: T
  ): T {
    return this.target.reduceNode(combine, combine(initialValue, this));
  }

  public validateBlock(context: BlockContext): ValidationError[] {
    const errors: ValidationError[] = [];

    errors.push(...this.target.validateBlock(context));

    const targetType = this.target
      .resultType(context)
      .realizedType(context.module);
    const fieldType = targetType
      .findField(this.fieldName.value)
      ?.realizedType(context.module);
    if (!fieldType) {
      errors.push({
        status:
          this.target.resultType(context) === UNKNOWN_TYPE ? "warn" : "error",
        message: `Undefined field ${this.fieldName.value} for type ${
          this.target.resultType(context).name
        }`,
        range: this.fieldName.range,
      });
      this.allFieldNames = targetType.allFieldNames();
      this.allMethodNames = targetType.allMethodNames();
    } else {
      this.documentation = [
        this.fieldName.range.with(
          `Field \`${targetType.name}.${this.fieldName.value} : ${fieldType.name}\``
        ),
      ];
      if (fieldType.description)
        this.documentation.push(
          this.fieldName.range.with(fieldType.description)
        );
    }

    return errors;
  }

  public collectSemanticTokens(semanticTokens: SemanticToken[]): void {
    this.target.collectSemanticTokens(semanticTokens);
    semanticTokens.push(this.range.semanticToken("property"));
  }

  public completionsAt(position: Position): CompletionItem[] {
    if (this.fieldName.range.contains(position)) {
      return [
        ...(this.allFieldNames?.map((name) => ({
          kind: CompletionItemKind.Field,
          label: name,
        })) ?? []),
        ...(this.allMethodNames?.map((name) => ({
          kind: CompletionItemKind.Method,
          label: name,
        })) ?? []),
      ];
    }
    return [];
  }
}
