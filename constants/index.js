'use strict';

const path = require('path');

module.exports = {
    ENVIRONMENT_CONFIG_MAP: {
        JEST_SUITE_NAME: 'suiteName',
        JEST_JUNIT_OUTPUT: 'output',
        JEST_JUNIT_CLASSNAME: 'classNameTemplate',
        JEST_JUNIT_TITLE: 'titleTemplate',
        JEST_JUNIT_ANCESTOR_SEPARATOR: 'ancestorSeparator',
        JEST_USE_PATH_FOR_SUITE_NAME: 'usePathForSuiteName',
        JEST_REPORT_STYLE: "reportStyle"
    },
    DEFAULT_OPTIONS: {
        suiteName: 'jest tests',
        output: path.join(process.cwd(), './jest-tests-report.xml'),
        classNameTemplate: '{classname} {title}',
        titleTemplate: '{classname} {title}',
        ancestorSeparator: ' ',
        usePathForSuiteName: 'false',
        reportStyle: "junit"
    },
    CLASSNAME_VAR: '{classname}',
    TITLE_VAR: '{title}',
};
