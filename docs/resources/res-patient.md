---
custom_edit_url: null
---

# Patient Resource

The SDK supports the following features relevant to the `Patient` resource.

## Extensions (from UK Core)

- [Extension-UKCore-BirthSex](/docs/extensions/BirthSex)
- [Extension-UKCore-ContactPreference](/docs/extensions/ContactPreference)
- [Extension-UKCore-DeathNotificationStatus](/docs/extensions/MedicationTradeFamily)
- [Extension-UKCore-EthnicCategory](/docs/extensions/EthnicCategory)
- [Extension-UKCore-ResidentialStatus](/docs/extensions/ResidentialStatus)
- [Extension-UKCore-BirthSex](/docs/extensions/MedicationTradeFamily)

## Extensions (from FHIR R4)
- [patient-birthPlace](/docs/extensions/BirthSex)
- [patient-cadavericDonor](/docs/extensions/BirthSex)
- [patient-interpreterRequired](/docs/extensions/InterpreterRequired)
  
## Identifiers

### NHS Number

The system defined for NHS numbers within UK Core is ```https://fhir.nhs.uk/Id/nhs-number```


This is defined within the SDK as ```UkCoreUris.SystemNhsNumber```

As such, an NHS Number identifier can be defined in the following way:
``` csharp
using FhirUkCore.Enums;
using Hl7.Fhir.Model;

Identifier id01 = new Identifier(UkCoreUris.SystemNhsNumber, "1234567890");

Patient pat = new Patient();
pat.Identifier.Add(id01);
```

### SetNHSNumber

UK Core states that there can only be one **Patient** identifier set using an NHS number.  
As such, this can be reduced to the following, allowing the identifier to be set directly.

```csharp
using FhirUkCore.ExtensionMethods;
using Hl7.Fhir.Model;

pat.SetNhsNumber("4857773456");
```

### SetNHSNumber with Verification Status

The UK Core defines the `https://fhir.hl7.org.uk/StructureDefinition/Extension-UKCore-NHSNumberVerificationStatus` extension for the NHS Number verification status. The verification number is a code, which differs for England and Wales.

For England, the enumeration type  `UKCoreNHSNumberVerificationStatusEngland` is provided to cater for the values within `https://fhir.hl7.org.uk/CodeSystem/UKCore-NHSNumberVerificationStatusEngland`  
For Wales, the enumeration type  `UKCoreNHSNumberVerificationStatusWales` is provided to cater for the values within `https://fhir.hl7.org.uk/CodeSystem/UKCore-NHSNumberVerificationStatusWales`

The `SetNhsNumber` method can be passed the enum to create the extension
```csharp
using FhirUkCore.ExtensionMethods;
using FhirUkCore.Enums;

// for England
pat.SetNhsNumber("4857773456",UKCoreNHSNumberVerificationStatusEngland.TracePostponed);

// for Wales
pat.SetNhsNumber("4857773456",UKCoreNHSNumberVerificationStatusWales.NumberPresentAndTraced);
```

### GetNHSNumber

A similar approach can be used to return the NHS number from a **Patient** resource.  
If no NHS Number identifier is set, then NULL is returned.  
If multiple NHS Number identifiers exist, then the first is returned.

```csharp
using FhirUkCore.ExtensionMethods;
using Hl7.Fhir.Model;

Identifier nhsId = pat.GetNhsNumber();
```

### HasNhsNumber

To check for the presence of an NHS Number identifier, a boolean can be returned using the following.

```csharp
using FhirUkCore.ExtensionMethods;
using Hl7.Fhir.Model;

Boolean nhsSet = pat.HasNhsNumber();
```

### HasNhsNumberVerificationStatus

To check for the presence of an NHS Number Verification Status, a boolean can be returned using the following.

```csharp
using FhirUkCore.ExtensionMethods;
using Hl7.Fhir.Model;

Boolean nhsVerificationSet = pat.HasNhsNumberVerificationStatus();
```