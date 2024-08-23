# hounter

This project setup includes HTML, JavaScript, and Sass with Gulp for task automation.

## Steps to Set Up the Project

### 1. Create Project Directory

Create a new directory for your project:

```bash
mkdir my-project
cd my-project
```

### 2. Set up HTML file and directory structure

Create a index.html

```bash
mkdir -p src/js src/scss dist
```

### 3. Install dependencies and sass

```bash
npm init -y
npm install sass --save-dev
```

### 4. compile sass to css (add script to package.json)

```
"scripts": {
    "sass": "sass --watch src/scss:dist"
}
```

### 5. Build with gulp

```bash
npm install --save-dev gulp gulp-sass
```

### 6. Create gulpfile.js

Add all the configurations

### 7. Add Gulp scripts to package.json

```
"scripts": {
    "sass": "gulp sass",
    "watch": "gulp watch"
}
```

First run npm run sass.

Then run npm run watch so gulp will be watching for changes in the scss files

### 8. Install extra dependencies

```bash
npm install gulp gulp-sass sass gulp-postcss autoprefixer cssnano gulp-babel @babel/core @babel/preset-env gulp-terser browser-sync --save-dev
```

- gulp: The main Gulp package.
- gulp-sass: A Gulp plugin to compile Sass to CSS.
- sass: The Sass compiler.
- gulp-postcss: A Gulp plugin to apply PostCSS plugins.
- autoprefixer: A PostCSS plugin to add vendor prefixes to CSS.
- cssnano: A PostCSS plugin to minify CSS.
- gulp-babel: A Gulp plugin to transpile JavaScript using Babel.
- @babel/core: The core Babel library.
- @babel/preset-env: A Babel preset to compile ES6+ to ES5.
- gulp-terser: A Gulp plugin to minify JavaScript.
- browser-sync: A tool to synchronize browser testing.
