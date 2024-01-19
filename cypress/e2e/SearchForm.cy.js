import React from 'react';
import ReactDOM from 'react-dom';
import Search from './page object/Search'



describe('Get Github Repos', () => {
  const search = new Search()
  beforeEach(function() {
    cy.visit('/')
    cy.fixture('users').then(function (fData) {
      this.data = fData;
    })
  });
  

    it('Verify the user can interact with the Search Form', function (){
      search.userNameInput().type(this.data.username).should('be.visible')
      search.clickSubmitBtn()
      search.foundReposMessage().should('include.text', this.data.body).and('be.visible')
    })

    it('Verify the repo information displays when making a search', function (){
      search.userNameInput().type(this.data.username)
      search.clickSubmitBtn()
      search.verifyReposList()
      search.getMessageSuccess().should('be.visible')
    })
  })