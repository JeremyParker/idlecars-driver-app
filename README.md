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

### License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
