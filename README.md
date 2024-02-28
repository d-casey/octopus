<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend code test

This is the most fun I have had writing code in a long time! Overall I am pleased with the submission and look forward to talking about next steps in the next stage! 

After reading the requirements and planning out how to make the design come to life, I made some decisions as to how I would approach this task. As we spoke about in the interview stage, I have not used Next.js in either of my previous roles, and so I have decided to stick with client-side React code in order to demonstrate how I would currently complete this task.

I have then taken this opportunity to read up on Next.js and have added a section of thoughts and suggestions for Next.js steps (pun intended) for us to discuss. The aim being to showcase that I can understand it at a high level in a short space of time.

The decisions I made from the start were as follows:

- Stick to client side React components and data fetching
    - so as to not spend too much time learning Next.js for the purpose of this task.
- Stick to using the `global.css` file for styling. 
    - I have extensive experience with styled components but anticipated being able to make this design work with not much CSS code.
- Keep it as one level of prop passing between parent and child components
    - by fetching the data at the page level, and passing it into components for the specific page sections
    - Keeps it quite neat and concise!
- Write a custom hook for the data fetching
    - and just mock this for the tests
    - Ideally I wanted to not touch the tests at all and make them pass out of the box, which I have done!
- Keep testing at the page level
    - not at individual pure components that just display data
    - instead have test ids for the core sections and ensure they display when data loads in the page level test
    - and make sure the error and loading states are tested for
    - this was the testing strategy at my previous company. Integration tests for page level interactions, and unit tests for specific units/util functions, but no need to test simple React components.

## Thoughts on the submission

Overall I really enjoyed doing this task. I would say it took me approximately 5 hours in total. This time includes reading up on Next.js to see if I should encorporate it into this submission and to gain a base level understanding of it. The breakdown was as follows:

1. Spike out Next.js (timeboxed to 1 hour)
2. Break design into logical chunks conceptually (drew it on paper)
3. Decide how to fetch the data (the Next.js docs advised [SWR](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-route-handlers##%20Getting%20started))
4. Implement the data fetching custom hook and console.log the data out to check it worked
5. Implement the mobile design using flexbox and the provided assets and style variables. Passing in the fetched data, ensuring everything was correctly typed
6. Implement the UI functionality. I have broken this into a pure component that calls the state setting functions of the parent. 
7. Mock the data fetching hook at the top of the test file and see those tests pass!
8. Add my own additional tests at the page level

## Thoughts on Next.js steps

So from my initial spike into Next.js I gained a good conceptual understanding of its usage. Some thoughts moving forward:

- Move the data fetching to the server and cache it with react cache. 
- Make the product ID dynamic with a URL variable. This will allow the data fetching and client component for the product page to be moved to the server.
- My current components for `description`, `specifications`, and `footer` can live exclusively as server components as they just display the fetched data.
- Keep the `<ProductUI />` as a client component with the use of `use client;`. This would allow the state updating and quantity and basket functionality to be updateable.

## Getting started

After cloning this repo please run the below commands to install and run.

```sh
cd client && yarn
```

## Start the app

```sh
yarn dev
```

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the client directory.

```sh
cd client && yarn test
```

## Demo

https://github.com/d-casey/octopus/assets/34679538/007c7e2c-4b36-48d5-8761-8a25c3112166



