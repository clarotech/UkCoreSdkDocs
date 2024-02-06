---
custom_edit_url: null
---

# BirthSex

The SDK supports the BirthSex extension for the [Patient](/docs/resources/res-patient) resource.

  
## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionBirthSex;

```
## HasBirthSex

To test whether the extension has been applied to a **Patient** resource, the `HasBirthSex` method can be used.  
This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsBirthSex = pat.HasBirthSex();
```

## SetBirthSex

To set the birth sex for a **Patient**, the `SetBirthSex` method can be used.  
This is used with the enum `UKCoreBirthSex`.

``` csharp
using Hl7.Fhir.Model;

Patient pat = new Patient();

pat.SetBirthSex(UKCoreBirthSex.Female);

```

## GetBirthSex

To retrieve the birth sex from a **Patient** resource, the `GetBirthSex` method can be used.  
This will return a `null` if no data is available.
``` csharp
using Hl7.Fhir.Model;

Code sex = pat.GetBirthSex();
```

