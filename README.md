# File system base routing

- Next.js uses file-system based routing, meaning you can use folders and files to define routes.

## page.js

- `page.js` files define routes (pages) in your application.
- Every folder inside the `app/` folder can have its own `page.js`.
- The root `page.js` (in the `app/` folder) defines the homepage (`/`).
- required to make a route publicly accessible
- Example:
  - Folder: `app/dashboard/settings/`
  - File: `page.js` (inside that folder)
  - URL: `/dashboard/settings`
  - Result: The code in `page.js` displays at that URL

## layout.js

- `layout.js` files define layouts for pages and can be nested.
- Every folder can have its own `layout.js` to define layouts for its pages and subfolders.
- The root `layout.js` (in the `app/` folder) wraps the entire application. (required) - It renders once for all pages.
- Example:
  ```
     <RootLayout>
         <Page />
     </RootLayout>
  ```

## What Next.js Can Do

- **Server-side routing:** Page loads from the server
- **Client-side routing:** Page loads in the browser

## Server Side Rendering

**What does rendering mean?**

Rendering = Converting code into HTML that shows on the screen.

**Server side rendering by default** means Next.js renders (converts code to HTML) on the server first, then sends the HTML to the browser.

## Server Component vs Client Component

|                       | Server Component  | Client Component  |
| --------------------- | ----------------- | ----------------- |
| **Where it runs**     | Server            | Browser           |
| **Can use useState?** | No                | Yes               |
| **Can use onClick?**  | No                | Yes               |
| **Can do routing?**   | Yes (server-side) | Yes (client-side) |
| **Can do rendering?** | Yes (server-side) | Yes (client-side) |

**By default:** Pages are Server Components

## Linking and Navigation

- browser events (onClick) and hooks (useEffect) doesn't work in Server Components (by default all components are server components)
- To use client-side navigation, you need to create a Client Component by adding "use client" at the top of the file.
- Example: See `app/components/CustomLink.js`
- The `useRouter hook` allows you to programmatically change routes from `Client Components`.
