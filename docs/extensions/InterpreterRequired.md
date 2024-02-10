---
---

# InterpreterRequired

The SDK supports this FHIR R4 extension via the methods below.

  
## URL Definition

``` csharp
using FhirUkCore.Uris;

String extensionUrl = UkCoreUris.ExtensionInterpreterRequired;

```
## HasInterpreterRequired

To test whether the extension has been applied to a **Patient** resource, the `HasInterpreterRequired` method can be used. This returns a boolean.
``` csharp
using Hl7.Fhir.Model;

Boolean existsHasInterpreterRequired = pat.HasInterpreterRequired();
```

## SetInterpreterRequired

The extension holds a boolean denoting the requirement for an interpreter. This can be set via the `SetInterpreterRequired` method

``` csharp
using Hl7.Fhir.Model;

var pat = new Patient();
pat.SetInterpreterRequired(true);

```

## GetInterpreterRequired

To retrieve the **InterpreterRequired** information from a **Patient** resource, the `GetInterpreterRequired` method can be used.  
This will return a `null` if no data is available.
``` csharp
using Hl7.Fhir.Model;

Boolean interpreterReqd = pat.GetInterpreterRequired();
```

