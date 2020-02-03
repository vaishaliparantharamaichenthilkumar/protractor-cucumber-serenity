import {by, element} from "protractor";

export default class Login {

    loginButton() {
        return element(by.className("btn bg-dark text-white"));
    }

}
