**Install dependencies**

```yarn add```

**Create environment variables**

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
NAMESPACE=translation                           # Locize  namespace
TARGET_ENV=testing                              # Env var used for app parameters 
LANGUAGES=test                                  # (Optional) if you want to set the langues codes instead of the app 
                                                  looking them up in the locize server
```

**Run dev**

```yarn run dev```

**Run test**

```yarn run test```