//const cypress = require("cypress");
descrive('requesting the function calls from the site ', function (){

    it('reponse header request from the site', function(){

    cy.request('https://www.jsonplaceholder.cypress.io/comments').as('c')
    cy.get('@c').should((response) => {

    expect(response.body).to.have.length(100)
    expect(response).to.have.property('headers')
})
})
})
