## <u>How to use both Tailwind and Bootstrap in the same project</u>

+ **Step 1:** Install Tailwind CSS by running the following commands in your terminal:
  ```
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
  ```
    * This will create a `tailwind.config.js` and `postcss.config.js` file in the root of your project.

+ **Step 2:** Add the following code to your `postcss.config.js` file:
  ```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
  ```
    * Allows you to use `tailwind` in your project.

+ **Step 3:** Add the following code to your `tailwind.config.js` file:
  ```js
    /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      './src/**/*',
      './-dark-mode/prefers-dark.js',
    ],
    darkMode: 'class',
    prefix: 'tw-',
    theme: {
      extend: {},
    },
    corePlugins: {
      preflight: false,
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  ```
    * **`IMPORTANT NOTE` - `prefix: '-tw',` and `corePlugins: { preflight: false, },` is the most key to avoiding conflicts with bootstrap classes. You just need to add `'tw-'` before the tailwind classes (`i.e. tw-bg-red-500 instead of bg-red-500`).**

+ **Step 4:** Create a new file called `index.css` or `styles.css` (or whatever you want to name it) in the root of your project and add the following code:
  ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  ```
    * Allows you to use `tailwind classes` in your project without conflicts with `bootstrap classes`.

+ **Step 5:** Add the following `<link>` tag withing your `<head>` tag to your `index.html` file:
  ```html
  <link href="./index.css" rel="stylesheet" />
  ```
+ Finally, in your `./src/assets/scss/main.scss` file with the rest of your `scss imported files`, add the following code so you can use both `tailwind` and `bootstrap` classes in your project without having to import them in each file:
  ```scss
    @import "/index.css";
  ```

+ **And you're ready to go!** 🪄
<br />
*You can now use both **`tailwind`** and **`bootstrap`** classes in your project without any conflicts. Follow the below steps if you are going to deploy your project to production so you can `minify` your `tailwind.css` file.*

+ **Step 6:** Add the following code to your `package.json` file:
  ```json
  "scripts": {
    "build": "postcss src/index.css -o public/build/tailwind.css",
    "watch": "postcss src/index.css -o public/build/tailwind.css --watch"
  }
  ```
    * This will allow you to build your `tailwind.css` file and watch for changes.

  

+ Sources:
  >- **Installing** `tailwind`: https://tailwindcss.com/docs/installation/using-postcss
  >- **Integrating** `tailwind` **with** `bootstrap`: https://developerwings.com/tailwind-and-bootstrap-together/