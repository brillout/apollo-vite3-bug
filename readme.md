Bug reproduction.

```bash
git clone git@github.com:brillout/apollo-vite3-bug
cd apollo-vite3-bug/
pnpm install
pnpm run build
```

Same as single line (copy-paste me):

```shell
git clone git@github.com:brillout/apollo-vite3-bug && cd apollo-vite3-bug/ && pnpm install && pnpm run build
```

Observe in the terminal:

```
~/tmp/apollo-vite3-bug (main u=) p build

> @ build /home/romuuu/tmp/apollo-vite3-bug
> npm run build


> build
> vite build

vite v3.0.2 building for production...
✓ 169 modules transformed.
[vite]: Rollup failed to resolve import "react" from "node_modules/.pnpm/@apollo+client@3.6.9_graphql@16.5.0/node_modules/@apollo/client/react/context/ApolloConsumer.js".
```
