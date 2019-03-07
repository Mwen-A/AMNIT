# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Git branches

Run `$ git checkout -b branch-name` to create a branch with name 'branch-name' and switch the development to that branch.

This is shorhand to:

```
$ git branch branch-name
$ git checkout branch-name
```

- Run `$ git branch` to check the branches and to see which branch you are currently working with.
- Run `$ git checkout branch-name` to switch the development to that branch.

Example:

```
$ git checkout -b home-page-who  // It will create a branch called called home-page-who and switch to that branch

// Start working on that file and then commit the files.
$ git status  // It will check for the changes made to the files.
$ git add .  // It will stage all the changed files to be commited. You can use a filename instead of the period.

  $ git commit -m 'feat: Made something great in the home-page'  // It will commit the files with the message 'feat....'.
    or
  $ git commit  // It will open your code editor to write a more descriptive message.
  
// Commit the changes to the master branch.
$ git checkout master  // It will switch the development to the master branch.
$ git pull origin master  // It will fetch any changes made to the remote repository.
$ git merge home-page-who  // It will merge the commits made to the master branch. Please check the detailed tutorial if you have any problems or face a merge conflict.
$ git push origin master  // It will send the commits made to the remote repository.

// If you are done with the home-page-who branch you can delete it.
$ git branch -d home-page-who  // It will delete the branch called home-page-who.
```

For detailed tutorial check: [Git - Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
