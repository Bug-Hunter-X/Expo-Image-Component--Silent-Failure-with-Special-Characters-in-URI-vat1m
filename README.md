# Expo Image Component: Silent Failure with Special Characters in URI

This repository demonstrates a bug in the Expo `Image` component where images with special characters (spaces, accented characters, etc.) in their URIs fail to load silently.  The issue is that there's no error message provided, making debugging difficult.

## Bug Description
The Expo `Image` component fails to display images when the URI contains special characters. The image doesn't load, and no error is logged to the console. This makes it challenging to identify and resolve the problem.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install`.
3. Run the app on an Expo Go or a simulator.
4. Observe that the image with special characters fails to load.

## Solution
The solution involves properly encoding the URI before passing it to the `Image` component. This ensures that special characters are handled correctly by the underlying image loading mechanism.

This repository includes a solution file (`bugSolution.js`) demonstrating the use of `encodeURIComponent` to handle URIs with special characters.