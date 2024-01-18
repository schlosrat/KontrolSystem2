# ksp::science

Collection of types and functions to get information and manipulate in-game science experiments.


## Types


### Experiment

Represents an in-game science experiment.


#### Fields

Name | Type | Read-only | Description
--- | --- | --- | ---
condition_met | bool | R/O | 
crew_required | int | R/O | 
current_experiment_state | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | 
current_running_time | float | R/O | 
current_situation_is_valid | bool | R/O | 
definition | [ksp::science::ExperimentDefinition](/reference/ksp/science.md#experimentdefinition) | R/O | 
experiment_location | Option&lt;[ksp::science::ResearchLocation](/reference/ksp/science.md#researchlocation)> | R/O | 
has_enough_resources | bool | R/O | 
previous_experiment_state | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | 
region_required | bool | R/O | 
time_to_complete | float | R/O | 
valid_locations | [ksp::science::ResearchLocation](/reference/ksp/science.md#researchlocation)[] | R/O | 

#### Methods

##### cancel_experiment

```rust
experiment.cancel_experiment ( ) -> bool
```



##### pause_experiment

```rust
experiment.pause_experiment ( ) -> bool
```



##### run_experiment

```rust
experiment.run_experiment ( ) -> bool
```



### ExperimentDefinition

Represents definition of an in-game science experiment.


#### Fields

Name | Type | Read-only | Description
--- | --- | --- | ---
data_value | float | R/O | 
display_name | string | R/O | 
id | string | R/O | 
requires_eva | bool | R/O | 
sample_value | float | R/O | 
transmission_size | float | R/O | 

### ExperimentState

Science experiment state

#### Methods

##### to_string

```rust
experimentstate.to_string ( ) -> string
```

String representation of the number

### ExperimentStateConstants



#### Fields

Name | Type | Read-only | Description
--- | --- | --- | ---
ALREADYSTORED | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Experiment has already stored results
BLOCKED | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Experiment is blocked
INSUFFICIENTCREW | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Experiment requires more available crew members
INSUFFICIENTSTORAGE | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Not enough storage capacity for experiment
INVALIDLOCATION | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Location not valid
LOCATIONCHANGED | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Experiment location changed
NOCONTROL | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Experiment requires control of the vessel
NONE | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Unknown state
OUTOFRESOURCE | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Experiment ran out of resources
PAUSED | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Experiment is paused
READY | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Experiment is ready to run
RUNNING | [ksp::science::ExperimentState](/reference/ksp/science.md#experimentstate) | R/O | Experiment is running

#### Methods

##### from_string

```rust
experimentstateconstants.from_string ( value : string ) -> Option<ksp::science::ExperimentState>
```

Parse from string

### ResearchLocation

Represents a research location of a science experiment.


#### Fields

Name | Type | Read-only | Description
--- | --- | --- | ---
body_name | string | R/O | 
requires_region | bool | R/O | 
science_region | string | R/O | 
science_situation | [ksp::science::ScienceSituation](/reference/ksp/science.md#sciencesituation) | R/O | 

### ScienceExperimentType

Science experiment type

#### Methods

##### to_string

```rust
scienceexperimenttype.to_string ( ) -> string
```

String representation of the number

### ScienceExperimentTypeConstants



#### Fields

Name | Type | Read-only | Description
--- | --- | --- | ---
Both | [ksp::science::ScienceExperimentType](/reference/ksp/science.md#scienceexperimenttype) | R/O | Science experiment producing both sample and data
DataType | [ksp::science::ScienceExperimentType](/reference/ksp/science.md#scienceexperimenttype) | R/O | Science experiment producing data
SampleType | [ksp::science::ScienceExperimentType](/reference/ksp/science.md#scienceexperimenttype) | R/O | Science experiment producing sample

#### Methods

##### from_string

```rust
scienceexperimenttypeconstants.from_string ( value : string ) -> Option<ksp::science::ScienceExperimentType>
```

Parse from string

### ScienceSituation

Situation of a science experiment

#### Methods

##### to_string

```rust
sciencesituation.to_string ( ) -> string
```

String representation of the number

### ScienceSituationConstants



#### Fields

Name | Type | Read-only | Description
--- | --- | --- | ---
Atmosphere | [ksp::science::ScienceSituation](/reference/ksp/science.md#sciencesituation) | R/O | Experiment inside an atmosphere
HighOrbit | [ksp::science::ScienceSituation](/reference/ksp/science.md#sciencesituation) | R/O | Experiment in high orbit
Landed | [ksp::science::ScienceSituation](/reference/ksp/science.md#sciencesituation) | R/O | Experiment while landed
LowOrbit | [ksp::science::ScienceSituation](/reference/ksp/science.md#sciencesituation) | R/O | Experiment in low orbit
None | [ksp::science::ScienceSituation](/reference/ksp/science.md#sciencesituation) | R/O | No specific situation required
Splashed | [ksp::science::ScienceSituation](/reference/ksp/science.md#sciencesituation) | R/O | Experiment while splashed

#### Methods

##### from_string

```rust
sciencesituationconstants.from_string ( value : string ) -> Option<ksp::science::ScienceSituation>
```

Parse from string

## Constants

Name | Type | Description
--- | --- | ---
ExperimentState | ksp::science::ExperimentStateConstants | Science experiment state
ScienceExperimentType | ksp::science::ScienceExperimentTypeConstants | Science experiment type
ScienceSituation | ksp::science::ScienceSituationConstants | Situation of a science experiment

