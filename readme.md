# ES6 App Template

> Yeah, this really should be a Yeoman generator & there probably already is one, but I like doing these sort of things from scratch.

## Directory structure

```
config/
dist/
src/
  index.js
  bar.js
gulpfile.js
index.js
package.json
readme.md
```

## Workflow

- Open a terminal with pwd == this
- If you just want to convert the code once (build), run `gulp nowatch`
- Else, while developing, just run `gulp`
- Edit your `src/*.js` files
- When you save them, gulp will auto-convert them and save them in `dist/`
- If you add folders to `src/`, you'll need to add their path to the `gulpfile.js` `sources[]` so that gulp can watch them
- If appropriate, run `node ./` or `nodemon ./` to test your app

The app comes with `config` by default so you can use `NODE_ENV=xxx` to set up your environment
