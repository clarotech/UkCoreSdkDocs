---
---

# DeathNotification

The SDK supports the **Death Notification** extension for the [Patient](/docs/resources/res-patient) resource.

The **Death Notification** extension is a complex extension and has two components:
- deathNotificationStatus (mandatory)
- systemEffectiveDate (optional)
  
Each of these components is managed separately by the SDK. Setting a child component will automatically set the parent extension.

## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionDeathNotificationStatus;
```

## HasDeathNotification

To test whether either of the components of the extension has been applied to a **Patient** resource, the `HasDeathNotification` method can be used.  This returns a boolean. 
``` csharp
using Hl7.Fhir.Model;

Boolean existsDeathNotification = pat.HasDeathNotification();
```

## HasDeathNotificationDate
To test whether the optional `systemEffectiveDate` component of the extension has been applied to a **Patient** resource, the `HasDeathNotificationDate` method can be used.  This returns a boolean. 
``` csharp
using Hl7.Fhir.Model;

Boolean existsDeathNotificationDate = pat.HasDeathNotificationDate();
```


## SetDeathNotification

The **deathNotificationStatus** within the extension is a **CodeableConcept** bound to the **UKCoreDeathNotificationStatus** ValueSet.  The binding strength is **Extensible** so codes outside of the ValueSet can be used.

The enumeration type  `UKCoreDeathNotificationStatus` is provided to set the death notification statis using the defined codes from the UK Core.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();
pat.SetDeathNotification(UKCoreDeathNotificationStatus.Formal);
```

If a value outside of the ValueSet is to be used, then a **CodeableConcept** can be used.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();

CodeableConcept cc = new CodeableConcept();
cc.Coding.Add(new Coding("http://acme.codes", "ex01", "example"));

pat.SetDeathNotification(cc);
```
If the optional `systemEffectiveDate` component of the extension is also required to be set, this can be passed as a second **FhirDateTime** parameter in the method.

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();
var deathDateTime = FhirDateTime.Now();

pat.SetDeathNotification(UKCoreDeathNotificationStatus.Formal,deathDateTime);

CodeableConcept cc = new CodeableConcept();
cc.Coding.Add(new Coding("http://acme.codes", "ex01", "example"));

pat.SetDeathNotification(cc,deathDateTime);
```
## GetDeathNotification

To retrieve the **Death Notification**  the `GetDeathNotification` method can be used. 

This will either return a **CodeableConcept** for the death status and a **FhirDateTime** for the effective date.  
Any components that have not been set will return a **null**.

``` csharp
(CodeableConcept status, FhirDateTime effectDateTime) = pat.GetDeathNotificationStatus();
```