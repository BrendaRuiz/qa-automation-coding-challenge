/// <reference types="Cypress" />

export default class SearchPage{
/* Selectors */
    constructor(){
        this.inputName       = 'input#username',
        this.submitBtn       = 'button.submit',
        this.repoContainer   = '.repo-list-container>ul>li.repo-row',
        this.repoDescription = 'li>p.repo-description'
        this.messageArea     = 'p.repo-amount'
    }

    /* Functions */
    userNameInput(text) {
        return cy.get(this.inputName).first().type(text)
    }

    clickSubmitBtn() {
        cy.get(this.submitBtn)
        .should('exist')
        .click()
    }
    foundReposMessage(){
        return cy.get(this.messageArea)
    }

    verifyReposList() {
       cy.get(this.repoContainer).each(($button) => {
        cy.wrap($button).should('have.length.at.least', 1).as('name')
        cy.get(this.repoDescription)
        .should('not.be.empty').as('description')
      })
    }

}

//module.exports = new SearchPage();