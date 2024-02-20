---
---

# ContactRank

The SDK supports the **Contact Rank** extension on the `Patient.ContactComponent` type used in the `Patient.contact` collection within the [Patient](/docs/resources/res-patient) resource.

  
## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionContactRank;
```
## HasContactRank

To test whether the extension has been applied to a `Patient.ContactComponent` type, the `HasContactRank` method can be used.  
This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsContactRank = pat.contact[0];
```

## SetContactRank

To set the **Contact Rank** for a `Patient.ContactComponent` type, the `SetContactRank` method can be used.  
The actual rank to be applied must be specified using a FHIR **PositiveInt** datatype.

``` csharp
 var testContact = new Patient.ContactComponent()
 {
     Name = new HumanName()
     { Text = "A Test Name" }
 };

 testContact.SetContactRank(new PositiveInt(2));
```

## GetContactRank

To retrieve the **Contact Rank** from a `Patient.ContactComponent` type, the `GetContactRank` method can be used.  
This will return a **Contact Rank** as a **PositiveInt** datatype. If the extension has not been set a **null** will be returned.


``` csharp
using Hl7.Fhir.Model;

Code sex = pat.GetBirthSex();
```

