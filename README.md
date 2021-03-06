# Locize Cache Server

This is [Fastify](https://www.fastify.io/) server app intended to use as a proxy cache between Locize and your app
which fetches the languages keys between a given or it has endpoints to update manually.

## Install dependencies

`yarn add`

## Create environment variables

This are the variables used to build the locize urls and run the app:

`https://api.locize.app/{projectId}/{version}/{language}/{namespace}`

[Locize docs](https://docs.locize.com/integration/api)

```
LOCIZE_KEY=a1s2d3-a1s2d3-a1s2d3-a1s2d3-a1s2d3   # locize config
PROJECT_ID=a1s2d3-a1s2d3-a1s2d3-a1s2d3-a1s2d3   # locize config
PORT=3000                                       # Where to run the app
SELF_UPDATE=false                               # Let the locize app update itself every {SELF_UPDATE_RATE} seconds
SELF_UPDATE_RATE=3600                           # Seconds between self update runs
VERSION=latest                                  # Locize version
NAMESPACE=translation                           # Locize namespace
CACHE_CLIENT=JSON                               # Cache client to be used (JSON | REDIS)
TARGET_ENV=testing                              # Env var used for app parameters
LANGUAGES=test                                  # (Optional) if you want to set the langues codes instead of the app
                                                  looking them up in the locize server
```

## Run dev

`yarn run dev`

## Routes

- **GET /language/:language**
- **POST /refresh/:key**
- **GET /cache/:key**
- **POST /language/:language**
- **GET /**
- **GET /swagger**

## Run tests

`yarn run test`
