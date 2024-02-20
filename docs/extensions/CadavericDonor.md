---
---

# CadavericDonor

The SDK supports this FHIR R4 extension for the [Patient](/docs/resources/res-patient) resource.

  
## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionCadavericDonor;
```
## HasCadavericDonor

To test whether the extension has been applied to a **Patient** resource, the `HasCadavericDonor` method can be used. This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsCadavericDonor = pat.HasCadavericDonor();
```

## SetCadavericDonor

The extension holds a boolean denoting the cadaveric donor status. This can be set via the `SetCadavericDonor` method

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();
pat.SetCadavericDonor(true);
```

## GetCadavericDonor

To retrieve the **CadavericDonor** information from a **Patient** resource, the `GetSetCadavericDonor` method can be used.  
This will return a `null` if no data is available.
``` csharp
using Hl7.Fhir.Model;

Boolean interpreterReqd = pat.GetCadavericDonor();
```