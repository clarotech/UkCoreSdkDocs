---
---

# ResidentialStatus

The SDK supports this extension via the methods below.

  
## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionResidentialStatus;
```
## HasResidentialStatus

To test whether the extension has been applied to a **Patient** resource, the `HasResidentialStatus` method can be used. This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsResidentialStatus = pat.HasResidentialStatus();
```

## SetResidentialStatus

The **ResidentialStatus** is a **CodeableConcept** bound to the **UKCoreResidentialStatus** ValueSet. The binding strength is **Extensible** so codes outside of the ValueSet can be used.

The enumeration type ```UKCoreResidentialStatus``` is provided to set the residential status using the defined codes from the UK Core.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();

pat.SetResidentialStatus(UKCoreResidentialStatus.UkResident);
```

If a value outside of the ValueSet is to be used, then a **CodeableConcept** can be used.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();

CodeableConcept cc = new CodeableConcept();
cc.Coding.Add(new Coding("http://acme.codes", "ex01", "example"));

pat.SetResidentialStatus(cc);
```

## GetResidentialStatus

To retrieve the **ResidentialStatus**  information from a **Patient** resource, the `GetResidentialStatus` method can be used.  
This will return a `null` if no data is available.
``` csharp
using Hl7.Fhir.Model;

CodeableConcept resStatus = pat.GetResidentialStatus();
```

