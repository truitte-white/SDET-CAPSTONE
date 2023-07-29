exports.LoginPage = class LoginPage{

    constructor(page) {
        
        this.page = page
        this.username_textbox = page.getByPlaceholder('Username')
        this.password_textbox = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    async logingood() {
        await this.username_textbox.fill('standard_user')
        await this.password_textbox.fill('secret_sauce')
        await this.login_button.click()
    }

    async loginlocked() {
        await this.username_textbox.fill('locked_out_user')
        await this.password_textbox.fill('secret_sauce')
        await this.login_button.click()
    }

    async loginproblem() {
        await this.username_textbox.fill('problem_user')
        await this.password_textbox.fill('secret')
        await this.login_button.click()
    }

}