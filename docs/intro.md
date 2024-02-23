---
sidebar_position: 1
---

# Overview

This SDK provides a NuGet package to simplify the development of **FHIR** based applications that need to use content from the **FHIR UK Core** published at : https://simplifier.net/guide/uk-core-implementation-guide?version=1.0.0

The SDK allows developers to create code that is aligned to the **FHIR Profiles** defined within the UK Core Package.
The feactures within the SDK include the following:

-   For each [resource profile](./resources/included-resources), create "helper" methods to create any NHS specific identifiers
-   For each [resource profile](./resources/included-resources), create simplified methods to
    -   create [extensions](./extensions/overview) based on supplied data
    -   retrieve data from [extensions](./extensions/overview)
    -   check for the existence of [extensions](./extensions/overview)
  
The SDK is published as a NuGet package and builds on top of the widely used **Hl7.Fhir.R4** package published at https://www.nuget.org/packages/Hl7.Fhir.R4

The [installation](./installation) details of this SDK are available [here](./installation)


