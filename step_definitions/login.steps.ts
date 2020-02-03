import {browser} from "protractor";
import {config} from "../config/config";
import Login from "../pages/Login";

const { Given } = require("cucumber");
const { When } = require("cucumber");
const { Then } = require("cucumber");

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const login:Login = new Login();

Given('launch the trader directory url', async() => {
    await browser.get(config.baseUrl);
});

When(/^login button should be displayed$/, async() => {
    await expect(login.loginButton().isPresent()).to.eventually.be.true;

});
Then(/^click the login button$/, async() => {
    await login.loginButton().click();
});
