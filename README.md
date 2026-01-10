## How to run

First of all [clone the project](https://github.com/filipecheverrya/fake-store-frontend.git). After that enter in the root of the project and install all dependencies with `npm install`. If you want to run the project locally you can run `npm run dev` but if you want to see the project as it's on production run `npm run build && npm run start`.

## Technical decisions

I have decided to use Next JS to manipulate the SEO tags, for the easy handler for page creation and fetch data manipulation. Tailwind it's been used too for classes and style. For the few icons that have in this project I use the Heroicon that is recomended in the Tailwind documentation.
Above all those things what mostly took my time to finish the project was a problem with the FakeStoreAPI that prevent me from fetch the data on production env. It's returning 403 in every route that it's called and probably this is related with permissions, rule from firewall or missing authentication.
The solution was implement a fallback with a mock that I have saved on the project.

## Trade-offs

In the baggining the idea was inspired in the carroussel from Mercado Livre on the home page. Because of that I have spend some time installing and styling the [swiper components](https://swiperjs.com/). After create a few filters I have seen that this library was gonna make the work double I remove that feature.

## Improvement points

- Add a "search by words" on the filter
- Change the useContext to Redux
- Add private routes and authentication for users
- Refactor the `services/fake-api.ts`
- Identify what is the problem with FakeStoreAPI that return 403 on Vercel envoirment

# Next JS

In the baggining the idea was inspired in the carroussel from Mercado Livre on the home page. Because of that I have spend some time installing and styling the [swiper components](https://swiperjs.com/). After create a few filters I have seen that this library was gonna make the work double I remove that feature.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
