---
---

# Location Resource

The SDK supports the following features relevant to the **Location** profile as defined with the UK Core.

## Extensions

No extensions are defined for the **Location**  resource within UK Core.

## Identifiers

### ODS Site Code

The system defined for ODS site codes within UK Core is ```https://fhir.nhs.uk/Id/ods-site-code```


This is defined within the SDK as ```UkCoreUris.SystemOdsSiteCode```

As such, an ODS site code identifier can be defined in the following way:
``` csharp
using FhirUkCore.Enums;
using Hl7.Fhir.Model;

Identifier id01 = new Identifier(UkCoreUris.SystemOdsSiteCode, "ABC123");

Location loc = new Location();
loc.Identifier.Add(id01);
```

### SetOdsSiteCode

UK Core states that there can only be one identifier set using an ODS site code.  
As such, this can be reduced to the following, allowing the identifier to be set directly.

```csharp  title="SetOdsSiteCode()"
using FhirUkCore.ExtensionMethods;
using Hl7.Fhir.Model;

Location loc = new Location();
loc.SetOdsSiteCode("ABC123");
```
### GetOdsSiteCode

A similar approach can be used to return the ODS site code from a location resource.  
If no ODS site code identifier is set, then NULL is returned.  
If multiple ODS site code identifiers exist, then the first is returned.

```csharp  title="GetOdsSiteCode()"
using FhirUkCore.ExtensionMethods;
using Hl7.Fhir.Model;

Identifier id01 = loc.GetOdsSiteCode();
```

### HasOdsSiteCode

If the intention is just to check for the presence of an identifier, then a boolean can be returned using the following.

```csharp  title="HasOdsSiteCode()"
using FhirUkCore.ExtensionMethods;
using Hl7.Fhir.Model;

Boolean idSet = loc.HasOdsSiteCode();
```