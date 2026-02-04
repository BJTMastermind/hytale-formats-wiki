# Fluid format

Fluid data is in **Big Endian** byte order.

## Binary structure

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| PaletteType | 1 | The palette type.<br>May be: 0 = `Empty`, 1 = `Half Byte`, 2 = `Byte`, or 3 = `Short` |
| FluidCount | 2 | Number of fluids in the palette |
| FluidPalette | *FluidCount* | The fluids in the palette. See below |
| Fluids | 32768 of *PaletteType* | The fluids as palette indexes. (Low-nibble-first packing) |
| HasFluidLevelData | 1 (boolean) | `true` if theres any fluid level data. |
| FluidLevels | 16384 | The fluids level data values. (High-nibble-first packing) |

</div>

**FluidPalette**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| InternalId | 1 | The index within the palette. |
| FluidIdLength | 2 | The length of the fluid id |
| FluidId | *FluidIdLength* | The fluid id |
| Count | 2 | How many of this fluid exist in this section |

</div>
