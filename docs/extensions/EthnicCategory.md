---
---

# EthnicCategory

The SDK supports the **Ethnic Category** extension for the [Patient](/docs/resources/res-patient) resource.

  
## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionEthnicCategory;
```
## HasEthnicCategory

To test whether the extension has been applied to a **Patient** resource, the `HasEthnicCategory` method can be used. This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsEthnicCategory = pat.HasEthnicCategory();
```

## SetEthnicCategory

The **EthnicCategory** is a **CodeableConcept** bound to the **UKCoreEthnicCategory** ValueSet. The binding strength is **Preferred** so codes outside of the ValueSet can be used.

The following CodeSystem URIs are included within the SDK for convenience.  
```
UkCoreUris.SystemEthnicCategoryEngland
UkCoreUris.SystemEthnicCategoryWales
```


``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();

CodeableConcept cc = new CodeableConcept();
cc.Coding.Add(new Coding(UkCoreUris.SystemEthnicCategoryWales, "H", "Indian"));

pat.SetEthnicCategory(cc);
```

## GetEthnicCategory

To retrieve the **EthnicCategory**  information from a **Patient** resource, the `GetEthnicCategory` method can be used.  
This will return a `null` if no data is available.
``` csharp
using Hl7.Fhir.Model;

CodeableConcept ethnicCategory = pat.GetEthnicCategory();
```

