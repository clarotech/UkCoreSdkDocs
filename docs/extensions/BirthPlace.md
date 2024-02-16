---
custom_edit_url: null
---

# BirthPlace

The SDK supports this FHIR R4 extension for the [Patient](/docs/resources/res-patient) resource.

  
## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionBirthPlace;

```
## HasBirthPlace

To test whether the extension has been applied to a [Patient](/docs/resources/res-patient) resource, the `HasBirthPlace` method can be used.  
This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsBirthSex = pat.HasBirthPlace();
```

## SetBirthPlace

To set the birthplace for a [Patient](/docs/resources/res-patient), the `SetBirthPlace` method can be used.  
This accepts an `Address` datatype.

``` csharp
using Hl7.Fhir.Model;

Patient pat = new Patient();

Address birthCountry = new Address() { Country = "Scotland" };
pat.SetBirthPlace(birthCountry);
```

## GetBirthPlace

To retrieve the birthplace from a [Patient](/docs/resources/res-patient) resource, the `GetBirthPlace` method can be used.  
This will return a `null` if no data is available.

``` csharp
using Hl7.Fhir.Model;

Address place = pat.GetBirthPlace();
```

