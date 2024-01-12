[![CircleCI](https://circleci.com/gh/dcycle/docker-typescript.svg?style=svg)](https://circleci.com/gh/dcycle/docker-typescript)

Check or compile Typescript.

For example, if you are using the approach described in [Using Typescript without compilation, by Pascal Schilp, dev.to, Mar 26, 2023](https://dev.to/thepassle/using-typescript-without-compilation-3ko4) and [Type Safe JavaScript with JSDoc, by TruckJS, Medium, Sep. 4, 2018](https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76), you might have annotated your JavaScript with JSDoc. If you want to check it on the command line, you might run:

    docker run --rm \
      -v "$(pwd)"/example01:/code \
      dcycle/typescript:1 --noEmit --checkJs .

If you want to test all files in a project, with the target of [es6 (version es6 of the JavaScript language)](https://www.w3schools.com/react/react_es6.asp) you can run:

    find ./app/code -name "*.js" -print0 | \
      xargs -0  docker run --rm -v "$(pwd)":/code \
      dcycle/typescript:1 \
      --noEmit --checkJs --target es6

See [this project on the Docker Hub](https://hub.docker.com/r/dcycle/typescript/).

Ignoring the next line
-----

To ignore a false positive use:

    // @ts-expect-error

More resources
-----

 * [tsc CLI options, TypeScript website](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
