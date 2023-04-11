
# Code-to-image

Ever wondered how to make those *beautiful* images you see online of people's code? Don't worry, I have the solution for you.

First, install this package using `npm i code-to-image`
Then, install the dependencies `npm i puppeteer`

Now, import the function `generateImage` into your project:
```ts
import { generateImage } from "code-to-image"
```
And begin using it!

```ts
generateImage(code, lines);
```

This function will return a buffer which you can later use to create an image. 

Pay attention to the type of the variables!
```ts
code = String; //The code you want to be shown in the image itself.
lines = Boolean; //Specify if you want the number of the lines to be shown or not.
```

That's it, enjoy!
