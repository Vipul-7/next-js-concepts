In the next Js we can use route without code by just arranging the files in pages folder.

`index.js` is the main root file for the folder and other file will be route for the current root folder/file. that's how nextjs works.

Dynamic routes name inside the `[...].js`.(like eventId,id,etc.)

For use those dynamic route's value in page we should use useRouter built in hook from next.js from './next/..'.

Getting the dynamic route key in react-router by the `usePramas()` hook but in next js get the route key using `useRouter()` hook and that hook has a property called
`query` which contains the dynamic route id.

For reach the route by button or else there are `Link` component which default anchor but for single page application. {Do not make this mistake - Link component in nextJS is different from reactJs and imported from `'./next/link'` and that not have `href` props instead of `to` props}

Wrap the `_app.js` component for navigation in next js is by the rootlayout component.
