//https://www.youtube.com/watch?v=rAec3mZFhF0&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=13

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

    async login(username, password) {
        await this.username_textbox.fill('standard_user')
        await this.password_textbox.fill('secret_sauce')
        await this.login_button.click()
    }

}