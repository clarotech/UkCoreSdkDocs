---
---

# BirthTime

The SDK supports this FHIR R4 extension for recording a patient's time of birth as an extension on `Patient.birthDate` within the [Patient](/docs/resources/res-patient) resource.

  
## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionBirthTime;
```
## HasBirthTime

To test whether the extension has been applied to a [Patient](/docs/resources/res-patient) resource, the `HasBirthPlace` method can be used.  
This returns a boolean.

A value of `false` will be returned either if the `Patient.birthDate` has not been set or the extension is not present.

``` csharp
using Hl7.Fhir.Model;

Boolean existsBirthSex = pat.HasBirthPlace();
```

## SetBirthTime

The `SetBirthTime` method must be passed a `DateTimeOffset` containing the full date and time of birth.  
This will set both `Patient.birthDate` and the `birthTime` extension.

``` csharp
using Hl7.Fhir.Model;

Patient pat = new Patient();

var dt1 = new DateTimeOffset(2010, 04, 10, 11, 23, 13, TimeSpan.FromHours(3));
pat.SetBirthTime(dt1);
```

## GetBirthTime

To retrieve the patient's time of birth from a [Patient](/docs/resources/res-patient) resource, the `GetBirthTime` method can be used.  
This will return a `null` if no data is available.

``` csharp
using Hl7.Fhir.Model;

DateTimeOffset timeOfBirth = pat.GetBirthTime();
```

