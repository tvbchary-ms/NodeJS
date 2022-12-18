#### This folder contains information about different npm packages such as:

* nodemon - Monitors for the change in a given file - When changes it runs the file again
* date-fns - Date and Time functions
* uuid - Creates a unique id each time

##### Notes:
1. npm package version format __xx.yy.zz__, where __xx__ is the major version, __yy__ is the minor version, __zz__ is the patch. E.g. __"uuid" :"^9.0.0"__
2. __^__ before version number allows to update __yy__ and __zz__. E.g. **"uuid" :"^9.0.0"**
3. __~__ before version number allows only patch updates __zz__. E.g. **"uuid" :"~9.0.0"**
4. To __INSTALL__ a specific version of npm package you have to mention it using '__@__' symbol. E.g. $ **npm i uuid@9.0.0** , only **package name** installs latest version
5. To __UNINSTALL__ a package from npm use anyone of the commands **uninstall** (or) **un** (or) **rm** (or) __remove__. E.g. __$ npm rm nodemon__