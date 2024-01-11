[![CircleCI](https://circleci.com/gh/dcycle/docker-typescript.svg?style=svg)](https://circleci.com/gh/dcycle/docker-typescript)

Check or compile Typescript.

For example, if you are using the approach described in [Using Typescript without compilation, by Pascal Schilp, dev.to, Mar 26, 2023](https://dev.to/thepassle/using-typescript-without-compilation-3ko4) and [Type Safe JavaScript with JSDoc, by TruckJS, Medium, Sep. 4, 2018](https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76), you might have annotated your JavaScript with JSDoc. If you want to check it on the command line, you might run:

    docker run --rm \
      -v "$(pwd)"/example01:/code \
      dcycle/typescript:1 --noEmit --checkJs .


See [this project on the Docker Hub](https://hub.docker.com/r/dcycle/typescript/).

More resources
-----

 * [tsc CLI options, TypeScript website](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
