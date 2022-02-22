import { Selector, t } from 'testcafe';


class login{

constructor()
{
    this.username = Selector('#login-form-email');
    this.password = Selector('#login-form-password');
    this.submit = Selector('.btn');
}

async typeUsername(name)
{
    await t
    .typeText(this.username,name);
}

async typePassword(name)
{
    await t
    .typeText(this.password,name);
}

async clickLogin()
{
    await t
    .click(this.submit);
}

}

export default new login();