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

## Gulps

- `gulp` - builds current `src/` to `dist/`, watches/builds `src/*.js`, and nodemons `index.js`
- `gulp build` - builds current `src/` to `dist/` and exits
- `gulp watch` - builds current `src/` to `dist/` and watches/builds `src/*.js`
- `gulp nodemon` - nodemons `index.js`

The app comes with `config` by default so you can use `NODE_ENV=xxx` to set up your environment
