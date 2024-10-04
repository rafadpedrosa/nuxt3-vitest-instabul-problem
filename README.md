# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## How to see the error/problem happening?
```bash
npx vitest --coverage
```

Look at the GetAsync and RandomNumber components. They’re simple, with working code inside comments. However, even with the code commented, if you try to run the tests, they will fail.

In my opinion, this issue causes significant confusion, making it difficult to test the code and reducing confidence in the libraries/frameworks. If a company relies on testing as part of its workflow, it could face major setbacks because of this.


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
