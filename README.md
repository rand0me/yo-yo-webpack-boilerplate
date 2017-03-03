yo-yo-webpack-boilerplate
====================
[yo-yo], [webpack], [yarn], [standard], [standard-version], [commitizen] minimalist boilerplate
----------------------------------------------------------------------------------------------

## Getting Started
```
git clone --depth=1 https://github.com/rand0me/yo-yo-webpack-boilerplate my-project-name
cd my-project-name
rm -rf .git
git init
```

## Developing
```
yarn start
```
or
```
npm start
```

## Building
```
yarn build
```
or
```
npm run build
```

## Production build
```
NODE_ENV=production yarn build -- --optimize-minimize
```
or
```
npm run build --production -- --optimize-minimize
```

## Linting
```
yarn lint
```
or
```
npm run lint
```

## Fixing lint erros
```
yarn fix
```
or
```
npm run fix
```

[yo-yo]: https://github.com/maxogden/yo-yo
[webpack]: https://webpack.js.org/
[yarn]: https://yarnpkg.com/en/
[standard]: http://standardjs.com/
[standard-version]: https://github.com/conventional-changelog/standard-version
[commitizen]: https://github.com/commitizen/cz-cli