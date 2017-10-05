'use strict';

const xml = require('xml');
const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path');

const builderJUnit = require('./utils/builderJUnit');
const builderNUnit = require('./utils/builderNUnit');
const getOptions = require('./utils/getOptions');

/*
  At the end of ALL of the test suites this method is called
  It's responsible for generating a single jest-tests-report.xml file which
  Represents the status of the test runs

  Expected input and workflow documentation here:
  https://facebook.github.io/jest/docs/configuration.html#testresultsprocessor-string

  Intended output (junit XML) documentation here:
  http://help.catchsoftware.com/display/ET/JUnit+Format
*/
const mapReportStyle = {
    "junit": builderJUnit,
    "nunit": builderNUnit
}

module.exports = (report) => {
    const options = getOptions.options();

    const builder = mapReportStyle[options.reportStyle.toLowerCase()];
    if(!builder) {
        throw `Unknow report style '${options.reportStyle}'`;
    }

    const jsonResults = builder(report, fs.realpathSync(process.cwd()), options);

    // Ensure output path exists
    mkdirp.sync(path.dirname(options.output));

    // Write data to files
    fs.writeFileSync(options.output, xml(jsonResults, {indent: '  '}));

    // Jest 18 compatibility
    return report;
};
