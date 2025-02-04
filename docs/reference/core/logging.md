# core::logging

Provides basic logging. In KSP all log messages will appear in the debug console as well as the `KSP.log` file.


## Functions


### debug

```rust
pub sync fn debug ( message : string ) -> Unit
```

Write a debug-level `message`.


Parameters

Name | Type | Optional | Description
--- | --- | --- | ---
message | string |  | 

### error

```rust
pub sync fn error ( message : string ) -> Unit
```

Write an error-level `message`.


Parameters

Name | Type | Optional | Description
--- | --- | --- | ---
message | string |  | 

### info

```rust
pub sync fn info ( message : string ) -> Unit
```

Write an info-level `message`.


Parameters

Name | Type | Optional | Description
--- | --- | --- | ---
message | string |  | 

### warning

```rust
pub sync fn warning ( message : string ) -> Unit
```

Write a warning-level `message`.


Parameters

Name | Type | Optional | Description
--- | --- | --- | ---
message | string |  | 
