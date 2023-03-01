In the next Js we can use route without code by just arranging the files in pages folder.

`index.js` is the main root file for the folder and other file will be route for the current root folder/file. that's how nextjs works.

Dynamic routes name inside the `[...].js`.(like eventId,id,etc.)

For use those dynamic route's value in page we should use useRouter built in hook from next.js from './next/..'.

Getting the dynamic route key in react-router by the `usePramas()` hook but in next js get the route key using `useRouter()` hook and that hook has a property called
`query` which contains the dynamic route id.

For reach the route by button or else there are `Link` component which default anchor but for single page application. {Do not make this mistake - Link component in nextJS is different from reactJs and imported from `'./next/link'` and that not have `href` props instead of `to` props}

Wrap the `_app.js` component for navigation in next js is by the rootlayout component.

## Static site generation & Server side rendering 

This two function `getStaticProps()` and `getServerSideProps()` run not on the client side.

This is what next-js feature that we can write server side and client side both in the same folder.

Both returns a object and in this object we can set the `props` which in future data we will use inside the our current component.

Don't forget to export this both function.

## `useRouter` hook

`useRouter()` contains many properties used for redirect the route path.

## Static site generation

Pre-render at build time.

Static site generation pre-render data at only once if re-validate is not set. else we can set the re-validate which pre-render data after every seconds which is specified in the re-validatate.

For static site generation there are `getStaticProps()` method which also take the `context` parameter(Also can be a `async` function)

Note :- In static site generation for dynamic route we have to specify for the which path `getStaticProps()` pre-render.
This getStaticPaths returns also object which contains paths and fallback properties. Paths specify the for which dynamic id `getStaticProps()` pre-render.

## Server side Rendering

Server side rendering pre-renders the page for every incoming request.

For Server side rendering `getServerSide()` contains `context` parameter which have properies `req` and `res` which is the request and response for those particular request.

## api folder

This api folder contains the code which is not show to the client and run at the server. 

## Set Meta data in Next.js for the SEO

Next.js Provides the set meta data in the react component which is used for SEO.

Set the meta data in the next.js application using `Head` component which have child component like `title`,`meta` etc. and which we can set.

## Mongodb database for server side

Install package with `npm install mongodb` 

For connection to the mongodb server import `MongoClient` from MongoDb  and use that...

Don't forget to close the connection with `close()` method

Send the response using the `res.status(___).json({___})`.

explore...

