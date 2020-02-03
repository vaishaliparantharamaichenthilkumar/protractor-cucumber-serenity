import {browser, Config} from "protractor";
import {Reporter} from "../support/reporter";

const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    allScriptsTimeout: 30000,

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    //baseUrl: "https://www.google.com",
    baseUrl: "http://company-poc-develop.hyperionic.io/",


    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false).then();
        browser.manage().window().maximize().then();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: [
            './node_modules/cucumber-pretty',
            './node_modules/cucumber-pretty:reports/summary.txt',
            'json:./reports/json/cucumber_report.json'
        ],
        require: ["../../typeScript/step_definitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@Regression",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
