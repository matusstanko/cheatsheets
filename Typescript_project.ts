
// Create typescript project

// Create folder
mkdir 'name_of_folder'
touch 'name_of_folder'/'filename.ts'

// Installing typescript locally inside of project

//Install packages locally: Create package.json
npm init --yes
//In package.json we’ll see typescript installed under devDependencies.


//Install typescript as dev dependency: This creates node_modeles and package-lock.json
npm install --save-dev typescript


/*
To run the instance of typescript installed as a dependency of our project, we’ll need to add a script to package.json. Under the scripts key in package.json, add the following "tsc" command:
{
  // ...
  "scripts": {
    "tsc": "tsc",
    // ...
  },
  // ...
}


By adding this "tsc" script, the npm command will find and run the instance of tsc installed in node_modules.
*/

// Generate tsconfig.json file

npm run tsc -- --init
/*
Here’s what this command accomplishes:

npm run tsc: This runs the "tsc" script in package.json, which runs the instance of tsc installed as a dependency of our project.
--: This allows us to pass flags to the "tsc" script in package.json.
--init: This is TypeScript CLI’s initialization flag, which will produce a tsconfig.json file.
*/


// Running typesscript
npm run tsc

 // Running typesscript automatically (auto restart after changing ts file)
 npm run tsc -- --watch 




 // Configurations: in tsconfig.js (high level)

 //basic configuration
 npm install --save-dev @tsconfig/recommended
 