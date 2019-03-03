
# AmmIT - Web Development Team Website

# Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
	- [Toolset checks](#toolset-checks)
  - [Clone the repository](#clone-the-repository)
  - [Setting up the Front-End](#setting-up-the-front-end)
  - [Back-end (Laravel)](#laravel)
- [Authors](#authors)
- [Contribution](#contribution)

# Project Overview

AmmIT is a web application designed by Amnick ....

# Installation

## Toolset checks

Make sure you have `Node.js`, open up the terminal and run:

- `$ npm -v` -> You should see the npm version

- `$ node -v` -> You should see the node version

If you dont have Node installed then download and install node from the official [website](https://nodejs.org/)

You also need to have [git](https://git-scm.com/) installed in order to clone the project.

- `$ git --version` -> You should see the git version

[Back to top](#table-of-contents)

## Clone the repository

Open up the terminal and type:

- `$ git clone https://github.com/Mwen-A/AmnIT.git`

[Back to top](#table-of-contents)

## Setting up the Front-End

Open up the terminal and check if you have Angular installed.

- `$ ng --version` -> You should have **v. 7.1.2**

If you don't have Angular installed then type in:

- `$ npm i -g @angular/cli@7.1.2`

If you have different version type in:

- `$ npm uninstall -g @angular/cli`

- `$ npm i -g @angular/cli@7.1.2`

Then navigate to the frontend directory by typing:

- `$ cd AmnIT/frontend`

Make sure you are at the frontend directory by typing:

- `$ ls`

You should see this output: _angular.json  dist  e2e  node_modules  package.json  package-lock.json  README.md  src  tsconfig.json  tslint.json_

Type in the following command to install the depedencies and node modules:

- `$ npm install`

It takes a while to install, when it finishes you can check that everything works by serving a local server with:

- `$ ng serve -o` -> _-o_ Tells the terminal to open the browser to the web app.

Then you are all set and you can start modifying the application.

[Back to top](#table-of-contents)

## Laravel
- terminal: composer install
- create .env in root folder, copy and paste content from .env.example to .env
- terminal: php artisan key:generate

[Back to top](#table-of-contents)

# Authors

Check the [members](./members) folder.

[Back to top](#table-of-contents)

# Contribution

Only members of the [Amnick social enterprise](https://amnick.com) are able to contribute to this project.

[Back to top](#table-of-contents)
