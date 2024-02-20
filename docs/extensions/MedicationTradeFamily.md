---
---

# MedicationTradeFamily

The SDK supports the **Trade Family** extension for the [Medication](/docs/resources/res-medication) resource.

  
## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionMedicationTradeFamily;
```
## HasTradeFamily

To test whether the extension has been applied to a **Medication** resource, the `HasTradeFamily` method can be used. This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsTradeFamily = med.HasTradeFamily();
```

## SetTradeFamily

To add the trade family information to a **Medication** resource, the `SetTradeFamily` method can be used.  

``` csharp
using Hl7.Fhir.Model;

var med = new Medication();

var test = new CodeableConcept()
{
    Text = "testdata"
};

med.SetTradeFamily(test);
```

## GetTradeFamily

To retrieve the trade family information from a **Medication** resource, the `GetTradeFamily` method can be used.  
This will return a `null` if no data is available.
``` csharp
using Hl7.Fhir.Model;

CodeableConcept tradeFamilyData = med.GetTradeFamily();
```

