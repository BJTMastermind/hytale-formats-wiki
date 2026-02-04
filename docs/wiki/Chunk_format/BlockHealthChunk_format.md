# BlockHealthChunk format

BlockHealthChunk data is in **Unknown** byte order.

## Binary structure

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| Version | 1 | The version of this format that this was saved with |
| HealthEntriesCount | 4 | The number of entries |
| HealthEntries | *HealthEntriesCount* | See blow |
| FragilityEntiresCount | 4 | The number of fragile entires |
| FragilityEntires | *FragilityEntiresCount* | See below |

</div>

**HealthEntries**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| X | 4 | The x position |
| Y | 4 | The y position |
| Z | 4 | The z position |
| Health | 4 (float) | The current health of the block |
| LastDamageGameTime | 8 | |

</div>

**FragilityEntires**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| X | 4 | The x position |
| Y | 4 | The y position |
| Z | 4 | The z position |
| DurationSeconds | 4 (float) | Unknown |

</div>
