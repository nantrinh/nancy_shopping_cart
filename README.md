# Shopping Cart App

## Setup
1. `yarn install` in top-level directory
2. `yarn start` in top-level directory

## Running the app
While in the app directory, run `yarn start` to start the live server. The command line will display the address you need to visit. The live server will watch for changes to files in the `src` directory and reload the page when they're changed.

## Viewing Static Version of the App
While developing the app, you can take a look at the static pages that you'll eventually convert into a dynamic application. To do so, visit `/ui` in the browser. You are also encouraged to read and reuse the markup, classes and ids used in these static files in your components. They're located in the `/public/ui` folder.

## Developing the app

The starting point of the application is the `/src/index.js` file. That's where the root component of the application - `Shop` - is rendered to the DOM. You can add new components to the `/src/components` folder and new test files to the `src/tests` folder.

For the initial application data, you can start with the following list of products:

```js
[
  {
    id: 1,
    title: 'Amazon Kindle E-reader',
    quantity: 5,
    price: 79.99
  },
  {
    id: 2,
    title: 'Apple 10.5-Inch iPad Pro',
    quantity: 3,
    price: 649.99
  },
  {
    id: 3,
    title: 'Yamaha Portable Keyboard',
    quantity: 2,
    price: 155.99
  },
  {
    id: 4,
    title: 'Tinker, Tailor, Soldier, Spy - A John le Carre Novel',
    quantity: 12,
    price: 13.74
  }
]
```
