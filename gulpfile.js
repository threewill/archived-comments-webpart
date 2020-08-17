'use strict';

const build = require('@microsoft/sp-build-web');
const path = require('path');

function srcPath(subdir) {
    return path.join(__dirname, "lib", subdir);
}

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        generatedConfiguration.resolve.alias = {
            topic: srcPath('webparts/topic')
        }
        return generatedConfiguration;
    }
});

build.initialize(require('gulp'));
