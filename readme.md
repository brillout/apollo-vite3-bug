Bug reproduction.

```bash
git clone git@github.com:brillout/apollo-vite3-bug
cd apollo-vite3-bug/
pnpm install
pnpm run prod
```

Same as single line (copy-paste me):

```shell
git clone git@github.com:brillout/apollo-vite3-bug && cd apollo-vite3-bug/ && pnpm install && pnpm run prod
```

Go to [localhost:3000](http://localhost:3000) Observe in the terminal:

```
Server running at http://localhost:3000
file:///home/romuuu/tmp/apollo-vite3-bug/dist/server/assets/_default.page.server.eeb1b5cf.js:6
import { DefaultApolloClient } from "@vue/apollo-composable";
         ^^^^^^^^^^^^^^^^^^^
SyntaxError: Named export 'DefaultApolloClient' not found. The requested module '@vue/apollo-composable' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '@vue/apollo-composable';
const { DefaultApolloClient } = pkg;
```

If we follow the suggested workaround `git cherry-pick d49d7` ([d49d7](https://github.com/brillout/apollo-vite3-bug/commit/d49d7672798257740953edab5340cea6b0061023)) we then get:

```
# Let's try again
$ pnpm run prod

> vite build

vite v3.0.2 building for production...
✓ 338 modules transformed.
'default' is not exported by node_modules/.pnpm/@vue+apollo-composable@4.0.0-alpha.19_evl73agsd2l2vqwzmhm3tuflgi/node_modules/@vue/apollo-composable/dist/index.esm.js, imported by renderer/app.js
file: /home/romuuu/tmp/apollo-vite3-bug/renderer/app.js:5:7
3: import { setPageContext } from './usePageContext'
4: export { createApp }
5: import pkg from '@vue/apollo-composable'
          ^
6: const { DefaultApolloClient } = pkg
error during build:
Error: 'default' is not exported by node_modules/.pnpm/@vue+apollo-composable@4.0.0-alpha.19_evl73agsd2l2vqwzmhm3tuflgi/node_modules/@vue/apollo-composable/dist/index.esm.js, imported by renderer/app.js
    at error (file:///home/romuuu/tmp/apollo-vite3-bug/node_modules/.pnpm/rollup@2.77.0/node_modules/rollup/dist/es/shared/rollup.js:1858:30)
```
