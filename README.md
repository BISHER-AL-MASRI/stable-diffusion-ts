# stable-diffusion-es

This is an ES module for [Node.js](https://nodejs.org/en/) that provides uses Stable Diffusion to generate images from a given prompt using AI.

## Installation

```bash
npm install stable-diffusion-es
```

## Usage

```ts
import { generate } from "stable-diffusion-ts";
const prompt = "A black cat";

generate(prompt, (response) => {
  if (response.error) {
    console.log("There was an error generating the image.");
  } else {
    console.log("Image generated successfully!");
    console.log(`Image saved at: ${response.results}`);
  }
});

```

you can also pass a file path to save the image to.

```ts
import { generate } from "stable-diffusion-ts";
const prompt = "A black cat";

generate(prompt, (response) => {
  if (response.error) {
    console.log("There was an error generating the image.");
  } else {
    console.log("Image generated successfully!");
    console.log(`Image saved at: ${response.results}`);
  }
}, "path/to/save/image");
```

A trick to get better images is to add: 
```
{enhanced}
```
at the end of your prompt.
  

in your package.json file.

## Output

![A black cat](https://media.discordapp.net/attachments/1301965748025036915/1324491508434473060/image.png?ex=67785857&is=677706d7&hm=bfef4b28ef03aa4ea9a2e43c5bfcc090aa3ec9146bdcef551bc10c3c9821598c&=&format=webp&quality=lossless&width=525&height=525)



