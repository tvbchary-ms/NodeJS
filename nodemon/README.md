#### This folder contains information about different npm packages such as:

* nodemon - Monitors for the change in a given file - When changes it runs the file again
* date-fns - Date and Time functions
* uuid - Creates a unique id each time

##### Notes:
1. npm package version format xx.yy.zz, where xx is the major version, yy is the minor version, zz is the patch. E.g. "uuid" :"^9.0.0"
2. ^ before version number allows to update yy and zz. E.g. "uuid" :"^9.0.0"
3. ~ before version number allows only patch updates zz. E.g. "uuid" :"~9.0.0"
4. To INSTALL a specific version of npm package you have to mention it using '@' symbol. E.g. $ npm i uuid@9.0.0 , only uuid installs latest version
5. To UNINSTALL a package from npm use anyone of the commands uninstall (or) un (or) rm (or) remove. E.g. $ npm rm nodemon