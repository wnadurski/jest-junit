const stripAnsi = require('strip-ansi');
const {replaceVars, getDateString, getTimeString} = require('./utils');

module.exports = function (report, appDirectory, options) {
    // Generate a single XML file for all jest tests
    let totalTests = 0;
    let failures = 0;
    let notRun = 0;

    let now = new Date();
    let dateString = getDateString(now);
    let timeString = getTimeString(now);

    let jsonResults = {
        'test-results': [
            {
                '_attr': {
                    'name': options.suiteName,
                    'date': dateString,
                    'time': timeString
                }
            }
        ]
    };

    // Iterate through outer testResults (test suites)
    report.testResults.forEach((suite) => {
        // Skip empty test suites
        if (suite.testResults.length <= 0) {
            return;
        }

        // Add <testsuite /> properties
        let testSuite = {
            'test-suite': [{
                _attr: {
                    name: options.usePathForSuiteName === "true" ?
                        suite.testFilePath.replace(appDirectory, '') :
                        suite.testResults[0].ancestorTitles[0],
                    executed: true,
                    time: (suite.perfStats.end - suite.perfStats.start) / 1000
                }
            }]
        };

        testSuiteResults = {
            'results': []
        }

        testSuite[`test-suite`].push(testSuiteResults);

        // Iterate through test cases
        suite.testResults.forEach((testCase) => {
            const classname = testCase.ancestorTitles.join(options.ancestorSeparator);
            const title = testCase.title;
            totalTests += 1;

            let testCaseNode = {
                'test-case': [{
                    _attr: {
                        name: replaceVars(options.titleTemplate, classname, title),
                        time: testCase.duration / 1000,
                        executed: false,
                        success: false,
                    }
                }]
            };

            if (testCase.status === 'passed') {
                testCaseNode["test-case"][0]._attr.executed = true;
                testCaseNode["test-case"][0]._attr.success = true;
            }

            // Write out all failure messages as <failure> tags
            // Nested underneath <testcase> tag
            if (testCase.status === 'failed') {
                failures += 1;
                testCaseNode["test-case"][0]._attr.success = false;
                testCaseNode["test-case"][0]._attr.executed = true;
                testCase.failureMessages.forEach((failure) => {
                    testCaseNode['test-case'].push({
                        'failure': [
                            {_attr: {}},
                            {message: stripAnsi(failure)}
                        ]
                    });
                })
            }

            // Write out a <skipped> tag if test is skipped
            // Nested underneath <testcase> tag
            if (testCase.status === 'pending') {
                notRun +=1;
                testCaseNode["test-case"][0]._attr.executed = false;
                testCaseNode["test-case"][0]._attr.success = true;
            }

            testSuiteResults.results.push(testCaseNode);
        });

        jsonResults['test-results'].push(testSuite);
    });

    jsonResults['test-results'][0]._attr.total = totalTests;
    jsonResults['test-results'][0]._attr.failures = failures;
    jsonResults['test-results'][0]._attr['not-run'] = notRun;

    return jsonResults;
};
