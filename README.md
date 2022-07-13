# ryan-leung.com

## Stack

1. Next.js
1. TailwindCSS
1. Playwright
1. Contentful

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contentful 

### Export

```bash
contentful login 
contentful export --space-id <space_id> --content-file contentful_export/<date> 
```

### Gen Types

```bash
yarn add --global cf-content-types-generator

yarn ts_gen
```

## Tests

Install playwright
```bash
npx playwright install
```

## Deployed on Vercel

This website is deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), from the creators of Next.js.

