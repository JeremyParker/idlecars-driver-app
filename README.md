# idlecars web client
An angularjs single page application

## Getting set up
install brew
Run `brew install node`
Run `npm install -g bower`
In the root directory of this project, run `npm install`
In the same directory run `bower install`
Run `npm install -g gulp`

### Running a dev server
`gulp serve`

### Running end-to-end tests
Run `gulp serve` to compile the latest client if you haven't run it recently. Then run `gulp protractor && gulp config:reset` to run the end-to-end tests.

### Build & Deploy
Use direnv and get `.envrc` from another developer
In the root dir of this project run `direnv allow`

TODO: make this deploy better

`gulp clean && gulp build --env=staging && gulp publish --env=staging && gulp config`

`gulp clean && gulp build --env=production && gulp publish --env=production && gulp config`
