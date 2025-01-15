# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state variables within the dependency array. The `bug.js` file contains the erroneous code. The `bugSolution.js` provides the correct implementation.

## Bug Description
The `useEffect` hook is designed to perform side effects after a component renders. However, if the state update within the `useEffect` leads to rerenders, and those rerenders trigger the `useEffect` again, you end up with an infinite loop.  This example shows how to avoid this common mistake.  This can lead to application crashes or very poor performance.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the console of your browser.

## Solution
The solution demonstrates how to correctly use the `useEffect` hook, avoiding the infinite loop by not causing state changes which trigger re-renders.
