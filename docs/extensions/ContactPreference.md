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

To test whether any of the three components of the extension has been applied to a **Patient** resource, the `HasContactPreference` method can be used.  This returns a boolean. 
``` csharp
using Hl7.Fhir.Model;

Boolean existsContactPreference = pat.HasContactPreference();
```

## PreferredContactMethod

### HasPreferredContactMethod

To test whether the **PreferredContactMethod** component of the extension has been applied to a **Patient** resource, the `HasPreferredContactMethod` method can be used.  This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsPreferredContactMethod = pat.HasPreferredContactMethod();
```

### SetPreferredContactMethod

The **PreferredContactMethod** within the extension is a **CodeableConcept** bound to the the **UKCorePreferredContactMethod** ValueSet.  The binding strength is **Extensible** so codes outside of the ValueSet can be used.

The enumeration type  `UKCorePreferredContactMethod` is provided to set the contact method using the defined codes from the UK Core.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();
pat.SetContactPreferredContactMethod(UKCorePreferredContactMethod.Telephone);
```

If a value outside of the ValueSet is to be used, then a **CodeableConcept** can be used.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();

CodeableConcept cc = new CodeableConcept();
cc.Coding.Add(new Coding("http://acme.codes", "ex01", "example"));

pat.SetContactPreferredContactMethod(cc);

```

### GetPreferredContactMethod

To retrieve the preferred contact method the `GetPreferredContactMethod` method can be used. This will either return a **CodeableConcept** for the contact method, or a `null` if none is set.

``` csharp
using Hl7.Fhir.Model;

CodeableConcept contactMethod = pat.GetPreferredContactMethod();
```



## PreferredContactTimes

Within the **PreferredContactTimes** component of the extension, the contact times is polymorphic in that it can be expressed either as a **string** or a **timing**.
### HasPreferredContactTimes

To test whether the **PreferredContactTimes** component of the extension has been applied to a **Patient** resource, the `HasPreferredContactMethod` method can be used.  This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsPreferredContactTimes = pat.HasPreferredContactTimes();
```

If more specificity is required to determine the data type of the **PreferredContactTime** then testing for specific data types is possible.

``` csharp
using Hl7.Fhir.Model;

Boolean existsPreferredContactTimesString = pat.HasPreferredContactTimes<String>();
Boolean existsPreferredContactTimesTiming = pat.HasPreferredContactTimes<Timing>();
```

### SetPreferredContactTimes

The extension allows for the contact times to be set either using a String or a FHIR Timing data type.

``` csharp title="Set using a String value."
using Hl7.Fhir.Model;

const string testString = "Test Data Value";
var pat = new Patient();

pat.SetContactPreferencePreferredContactTimes(testString);
```
``` csharp title="Set using a Timing value."
using Hl7.Fhir.Model;

var pat = new Patient();
Timing testTiming = new Timing();
testTiming.Repeat = new Timing.RepeatComponent();
testTiming.Repeat.Count = 99;

pat.SetContactPreferencePreferredContactTimes(testTiming);
```

### GetPreferredContactTimes

When retrieving the **PreferredContactTime** the data type needs to be part of the request method.

``` csharp title="Retrieve using a String value."
using Hl7.Fhir.Model;

Timing prefTimes = pat.GetPreferredContactTimes<Timing>();
```
``` csharp title="Retrieve using a Timing value."
using Hl7.Fhir.Model;

Timing prefTimes = pat.GetPreferredContactTimes<Timing>();
```

## PreferredWrittenCommunicationFormat

### HasPreferredWrittenCommunicationFormat
To test whether the **PreferredWrittenCommunicationFormat** component of the extension has been applied to a **Patient** resource, the **HasPreferredWrittenCommunicationFormat** method can be used.    This returns a boolean. 
``` csharp
using Hl7.Fhir.Model;

Boolean existsPreferredWrittenCommunicationFormat = pat.HasPreferredWrittenCommunicationFormat();
```

### SetPreferredWrittenCommunicationFormat
The **PreferredWrittenCommunicationFormat** within the extension is a **CodeableConcept** bound to the the **UKCorePreferredWrittenCommunicationFormat** ValueSet.  
The binding strength is **Extensible** so codes outside of the ValueSet can be used.

The enumeration type  `UKCorePreferredWrittenCommunicationFormat` is provided to set the communication formats using the defined codes from the UK Core.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();
pat.SetPreferredWrittenCommunicationFormat(UKCorePreferredWrittenCommunicationFormat.Braille);
```

If a value outside of the ValueSet is to be used, then a **CodeableConcept** can be used.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();

CodeableConcept cc = new CodeableConcept();
cc.Coding.Add(new Coding("http://acme.codes", "ex01", "example"));

pat.SetPreferredWrittenCommunicationFormat(cc);

```

### GetPreferredWrittenCommunicationFormat

To retrieve the **PreferredWrittenCommunicationFormat** method the `GetPreferredWrittenCommunicationFormat` method can be used. This will either return a **CodeableConcept** for the contact method, or a `null` if none is set.

``` csharp
using Hl7.Fhir.Model;

CodeableConcept commFormat = pat.GetPreferredWrittenCommunicationFormat();
```