# Nuxt Alias Issue

This repository demonstrates an issue with Nuxt's alias resolution when using a custom module.

## Reproduction Steps

1. Clone the repository
2. `npm install`
4. `npm run build`
4. `npm run dev`
5. Observe the alias resolution issue in the console

```
 ERROR  [unhandledRejection] Package import specifier "#my-session-store" is not defined in package /Users/frederikprijck/Development/my-module-monorepo/examples/example-nuxt-web/package.json imported from /Users/frederikprijck/Development/my-module-monorepo/examples/example-nuxt-web/.nuxt/dev/index.mjs

    at new NodeError (node:internal/errors:406:5)
    at importNotDefined (node:internal/modules/esm/resolve:257:10)
    at packageImportsResolve (node:internal/modules/esm/resolve:678:9)
    at moduleResolve (node:internal/modules/esm/resolve:832:16)
    at defaultResolve (node:internal/modules/esm/resolve:1043:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:383:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:352:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:228:38)
    at ModuleLoader.import (node:internal/modules/esm/loader:315:34)
    at importModuleDynamically (node:internal/modules/esm/translators:109:35)
```


