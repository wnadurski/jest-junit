const report = {
    "numFailedTestSuites": 1,
    "numFailedTests": 1,
    "numPassedTestSuites": 1,
    "numPassedTests": 2,
    "numPendingTestSuites": 0,
    "numPendingTests": 1,
    "numRuntimeErrorTestSuites": 0,
    "numTotalTestSuites": 2,
    "numTotalTests": 4,
    "snapshot": {
        "added": 0,
        "didUpdate": false,
        "failure": false,
        "filesAdded": 0,
        "filesRemoved": 0,
        "filesUnmatched": 0,
        "filesUpdated": 0,
        "matched": 0,
        "total": 0,
        "unchecked": 0,
        "unmatched": 0,
        "updated": 0
    },
    "startTime": 1507194175210,
    "success": false,
    "testResults": [{
        "console": [],
        "failureMessage": "\u001b[1m\u001b[31m  \u001b[1m● \u001b[1mChannels serbice › should exist\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).toBe(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n    \n    Expected value to be (using ===):\n      \u001b[32m3\u001b[39m\n    Received:\n      \u001b[31m2\u001b[39m\n\u001b[2m      \u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[2m\u001b[0m\u001b[36msrc/__tests__/Channels/channelsService.test-skip.js\u001b[39m\u001b[0m\u001b[2m:4:19)\u001b[2m\u001b[22m\n",
        "numFailingTests": 1,
        "numPassingTests": 0,
        "numPendingTests": 1,
        "perfStats": {"end": 1507194177767, "start": 1507194177328},
        "snapshot": {"added": 0, "fileDeleted": false, "matched": 0, "unchecked": 0, "unmatched": 0, "updated": 0},
        "testFilePath": "C:\\OneDrive - OKE Poland\\Workspaces\\server\\server\\webVOD\\js\\app\\ServicesNew\\src\\__tests__\\Channels\\channelsService.test-skip.js",
        "testResults": [{
            "ancestorTitles": ["Channels serbice"],
            "duration": 0,
            "failureMessages": ["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).toBe(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m)\u001b[22m\n\nExpected value to be (using ===):\n  \u001b[32m3\u001b[39m\nReceived:\n  \u001b[31m2\u001b[39m\n    at Object.<anonymous> (C:\\OneDrive - OKE Poland\\Workspaces\\server\\server\\webVOD\\js\\app\\ServicesNew\\src\\__tests__\\Channels\\channelsService.test-skip.js:4:19)\n    at Object.asyncFn (C:\\OneDrive - OKE Poland\\Workspaces\\server\\server\\webVOD\\js\\app\\ServicesNew\\node_modules\\jest-jasmine2\\build\\jasmine_async.js:124:345)\n    at e (C:\\OneDrive - OKE Poland\\Workspaces\\server\\server\\webVOD\\js\\app\\ServicesNew\\node_modules\\jest-jasmine2\\build\\queue_runner.js:46:12)\n    at mapper (C:\\OneDrive - OKE Poland\\Workspaces\\server\\server\\webVOD\\js\\app\\ServicesNew\\node_modules\\jest-jasmine2\\build\\queue_runner.js:34:499)\n    at promise.then (C:\\OneDrive - OKE Poland\\Workspaces\\server\\server\\webVOD\\js\\app\\ServicesNew\\node_modules\\jest-jasmine2\\build\\queue_runner.js:74:39)"],
            "fullName": "Channels serbice should exist",
            "numPassingAsserts": 0,
            "status": "failed",
            "title": "should exist"
        }, {
            "ancestorTitles": ["Channels serbice"],
            "duration": 0,
            "failureMessages": [],
            "fullName": "Channels serbice Some skipped test",
            "numPassingAsserts": 0,
            "status": "pending",
            "title": "Some skipped test"
        }],
        "sourceMaps": {},
        "skipped": false
    }, {
        "console": [],
        "failureMessage": null,
        "numFailingTests": 0,
        "numPassingTests": 2,
        "numPendingTests": 0,
        "perfStats": {"end": 1507194180265, "start": 1507194177802},
        "snapshot": {"added": 0, "fileDeleted": false, "matched": 0, "unchecked": 0, "unmatched": 0, "updated": 0},
        "testFilePath": "C:\\OneDrive - OKE Poland\\Workspaces\\server\\server\\webVOD\\js\\app\\ServicesNew\\src\\__tests__\\Owners\\ownersService.test.js",
        "testResults": [{
            "ancestorTitles": [],
            "duration": 2342,
            "failureMessages": [],
            "fullName": "'getOwners' uses Gateway's method 'getOwners'",
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "'getOwners' uses Gateway's method 'getOwners'"
        }, {
            "ancestorTitles": [],
            "duration": 72,
            "failureMessages": [],
            "fullName": "'getOwner' uses Gateway's method 'getOwners'",
            "numPassingAsserts": 0,
            "status": "passed",
            "title": "'getOwner' uses Gateway's method 'getOwners'"
        }],
        "sourceMaps": {},
        "skipped": false
    }],
    "wasInterrupted": false
};


const dir = "C:\\OneDrive - OKE Poland\\Workspaces\\server\\server\\webVOD\\js\\app\\ServicesNew"
const options = {
    "suiteName": "jest tests",
    "output": "C:\\OneDrive - OKE Poland\\Workspaces\\server\\server\\webVOD\\js\\app\\ServicesNew\\jest-tests-report.xml",
    "classNameTemplate": "{classname} {title}",
    "titleTemplate": "{classname} {title}",
    "ancestorSeparator": " ",
    "usePathForSuiteName": "false",
    "reportStyle": "nunit"
}


const build = require("./utils/builderNUnit")

build(report, dir, options)