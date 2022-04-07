# The Budget

<<<<<<< HEAD
## Operations
user/signup
user/signin
user/[id]/budget
user/[id]/budget/active
user/[id]/transaction
user/[id]/transaction/create
user/[id]/transaction/expense
user/[id]/transaction/expense/create
user/[id]/transaction/income
user/[id]/transaction/income/create
budget/
budget/[id]/active
budget/create



# Next.js + Tailwind CSS
=======
## model
user\
budget\
entry
## operations
user/create\
user/read\
user/update\
user/delete\
user/[id]/budget/create\
user/[id]/budget/read\
user/[id]/budget/update\
user/[id]/budget/delete\
user/[id]/budget/[id]/entry/create\
user/[id]/budget/[id]/entry/read\
user/[id]/budget/[id]/entry/update\
user/[id]/budget/[id]/entry/delete
## tests


# Next.js + Tailwind CSS Example
>>>>>>> 1dbccba8342bea8f46554281f3df24f15ee314c4

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).