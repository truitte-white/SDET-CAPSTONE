exports.APILoginPage = class APILoginPage {

    constructor(page) {
        
        this.page = page
        this.Email_textbox = page.getByPlaceholder('Email')
        this.password_textbox = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Submit' })
    }

    async gotoApiPage(){
        await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/')
    }   
    
    async myLogin() {
        await this.Email_textbox.fill('truitte.white@rfsmart.com')
        await this.password_textbox.fill('testing123')
        await this.login_button.click()
    }
}


