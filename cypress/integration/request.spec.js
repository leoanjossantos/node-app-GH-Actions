describe('Abracadabra Simple Request > ', () => {

	it('OK, I can request my simple rest api', () => {
		cy.request('/')
			.should((response) => {
				expect(response.status).to.eq(200)
		        expect(response.body).to.have.property('ok').to.eq(true)
		        expect(response.body).to.have.property('text').to.eq('Abracadabra!')
    	})
	})
})