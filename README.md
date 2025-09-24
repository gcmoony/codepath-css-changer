# CodePath Course Page Color Changer

Wow, what a mouthful, huh?

## What is this?

A style overriding extension to allow a CodePath student to change some visual
aspects of the course website.

## Why?

Because it's the only thing in all of the course material and documentation that
doesn't have darkmode 😠

## How to use

🚧**It's currently in development**🚧 So far I have a basic override in the
`/static_demo` directory. To use it:

### Installing the Demo

1. Download all the files in `/static_demo`
2. Open a Chromium browser, then navigate to
   [chrome://extensions/](chrome://extensions/)
3. Enable **Developer Mode** on the top right
4. Click `Load unpacked`, and navigate to the directory where you saved the
   files
5. Enable the extension

### When you want to use it

1. Navigate to the course website
2. Click on the extension icon

## Other Boring Stuff

Extension development is new to me, so trying to figure out how to properly
build the application using Vite has been a challenge so far. What I would
eventually like out of this project is to be able to:

- Modify the theme at user's discretion to fit their desired look
- Save the theme to local storage
- _Maybe_ add ability to save themes and the ability to toggle between them.
  _Possibly_ even the ability to share themes
