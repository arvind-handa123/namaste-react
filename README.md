# Namaste React

# Command to run project in dev mode
- npm run start  OR  npm start

# Command to build project for production ready
- npm run build

# Parcel
- It create Dev build file of our application
- Also create local server
- Hot Module Replaccement (Automatically refresh page for new changes to reflect)
- Internally it is using file watching algorithm which was written in C++ language
- Faster builds because of caching mechanism
- It also perform the image optimization
- During production build it also perform file minification(File)
- Budle all required files for build
- Also compress our files, to make build size smaller (Remove whitespace, minify files)
- parcel does not doing all thigs by itself, it is taking help of different 
  library internally
- Consistence Hashing
- It also does code splitting
- Differencial bundling - To support older browser, different buddle for different 
  types of app
- Perform Diagnostick - Display error message in proper format
- Give option to host app on HTTPS
- Tree Shaking Algo - It will remove unused code 
- It create different budle for DEV and PROD environment
- Read more details : https://parceljs.org/

# Browsers List

- https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
- https://github.com/browserslist/browserslist#query-composition
