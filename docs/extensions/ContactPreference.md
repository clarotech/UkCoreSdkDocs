---
custom_edit_url: null
---

# ContactPreference

The SDK supports the **Contact Preference** extension for the [Patient](/docs/resources/res-patient) resource.

The **Contact Preference** extension is a complex extension and has several components:
- PreferredContactMethod 
- PreferredContactTimes
- PreferredWrittenCommunicationFormat
  
Each of these components is managed separately by the SDK. Setting the child component will automatically set the parent extension.

## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionContactPreference;

```

## HasContactPreference

To test whether the extension has been applied to a **Patient** resource, the `HasContactPreference` method can be used.  
This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsContactPreference = pat.HasContactPreference();
```

## PreferredContactMethod

### SetPreferredContactMethod

The contact method with the extension is a **CodeableConcept** bound to the the **UKCorePreferredContactMethod** ValueSet.  
The binding strength is **Extensible** so codes outside of the ValueSet can be used.

An enumeration type is provided `UKCorePreferredContactMethod` to set the contact method using the defined codes.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();
pat.SetContactPreferenceContactMethod(UKCorePreferredContactMethod.Telephone);
```

If a value outside of the ValueSet is to be used, then the **CodeableConcept** can be used.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();

CodeableConcept cc = new CodeableConcept();
cc.Coding.Add(new Coding("http://acme.codes", "ex01", "example"));

pat.SetContactPreferenceContactMethod(cc);

```
### GetPreferredContactMethod

### HasPreferredContactMethod

To test whether the extension has been applied to a medication resource, the `HasTradeFamily` method can be used. This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsFamilyData = med.HasTradeFamily();
```

## PreferredContactTimes

### SetContactPreferencePreferredContactTimes

The extension allows for the contact times to be either  

``` csharp
using Hl7.Fhir.Model;

var med = new Medication();

var test = new CodeableConcept()
{
    Text = "testdata"
};

med.SetTradeFamily(test);
```

### GetTradeFamily

To retrieve the trade family information from a medication resource, the `GetTradeFamily` method can be used.  
This will return a `null` if no data is available.
``` csharp
using Hl7.Fhir.Model;

CodeableConcept tradeFamilyData = med.GetTradeFamily();
```


## PreferredWrittenCommunicationFormat

### HasPreferredWrittenCommunicationFormat