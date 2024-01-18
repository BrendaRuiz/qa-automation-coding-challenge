import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../page object/Search'



describe('Get Github Repos', () => {
  const search = new Search()
  beforeEach(function() {
    cy.visit('/')
  });

    it('Verify the user can interact with the Search Form', () => {
      search.userNameInput('Test').should('be.visible')
      search.clickSubmitBtn()
      search.foundReposMessage().should('include.text', 'Found ').and('be.visible')
    })

    it('Verify the repo information displays when making a search', () => {
      search.userNameInput('Test')
      search.clickSubmitBtn()
      search.verifyReposList()
    })
  })