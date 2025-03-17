// cy.get('[data-test=""]')

describe('Navigation on small screens', () => {
	beforeEach(() => {
		cy.viewport('iphone-xr')
	})
	it('toggles and excludes path on home', () => {
		cy.visit('/')
		cy.get('[data-test="cart-button"]')
		cy.get('[data-test="hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').contains('Close').should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Home').should('not.be.visible')
		cy.get('[data-test="nav-mobile"]')
			.contains('Keyboards')
			.should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Keycaps').should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Deskmats').should('be.visible')
		cy.get('[data-test="close-hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').should('not.exist')
	})

	it('toggles and excludes path on keyboards', () => {
		cy.visit('/keyboards')
		cy.get('[data-test="cart-button"]')
		cy.get('[data-test="hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').contains('Close').should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Home').should('be.visible')
		cy.get('[data-test="nav-mobile"]')
			.contains('Keyboards')
			.should('not.be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Keycaps').should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Deskmats').should('be.visible')
		cy.get('[data-test="close-hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').should('not.exist')
	})

	it('toggles and excludes path on keycaps', () => {
		cy.visit('/keycaps')
		cy.get('[data-test="cart-button"]')
		cy.get('[data-test="hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').contains('Close').should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Home').should('be.visible')
		cy.get('[data-test="nav-mobile"]')
			.contains('Keyboards')
			.should('be.visible')
		cy.get('[data-test="nav-mobile"]')
			.contains('Keycaps')
			.should('not.be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Deskmats').should('be.visible')
		cy.get('[data-test="close-hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').should('not.exist')
	})

	it('toggles and excludes path on deskmats', () => {
		cy.visit('/deskmats')
		cy.get('[data-test="cart-button"]')
		cy.get('[data-test="hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').contains('Close').should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Home').should('be.visible')
		cy.get('[data-test="nav-mobile"]')
			.contains('Keyboards')
			.should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Keycaps').should('be.visible')
		cy.get('[data-test="nav-mobile"]')
			.contains('Deskmats')
			.should('not.be.visible')
		cy.get('[data-test="close-hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').should('not.exist')
	})

	it('toggles and is non dynamic on checkout', () => {
		cy.visit('/checkout')
		cy.get('[data-test="cart-button"]')
		cy.get('[data-test="hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').contains('Close').should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Home').should('be.visible')
		cy.get('[data-test="nav-mobile"]')
			.contains('Keyboards')
			.should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Keycaps').should('be.visible')
		cy.get('[data-test="nav-mobile"]').contains('Deskmats').should('be.visible')
		cy.get('[data-test="close-hamburger"]').click()
		cy.get('[data-test="nav-mobile"]').should('not.exist')
	})
})

describe('Desktop: Cart', () => {
	beforeEach(() => {
		cy.viewport('macbook-11')
	})
	it('bubble invisible on empty cart', () => {
		cy.visit('/')
		cy.get('[data-test="cart-bubble"]').should('not.be.visible')
	})
	it('bubble visible and incrementing when adding items', () => {
		cy.visit('/')
		cy.get('[data-test="nav-keyboards"]').click()
		cy.get('[data-test="quick-add-keyboards-0"]').click().click()
		cy.get('[data-test="quick-add-keyboards-2"]').click()
		cy.get('[data-test="cart-bubble"]').contains(3)
		cy.get('[data-test="nav-deskmats"]').click()
		cy.get('[data-test="quick-add-deskmats-0"]').click().click()
		cy.get('[data-test="cart-bubble"]').contains(5)
	})
	it('toggles on icon button and close button', () => {
		cy.visit('/')
		cy.get('[data-test="cart-modal"]').should('not.be.visible')
		cy.get('[data-test="cart-button"]').click()
		cy.get('[data-test="cart-modal"]').should('be.visible')
		cy.get('[data-test="cart-close-button"]').click()
		cy.get('[data-test="cart-modal"]').should('not.be.visible')
	})
	it('bubble invisible when deleting all items', () => {
		cy.visit('/keyboards')
		cy.get('[data-test="quick-add-keyboards-0"]').click().click()
		cy.get('[data-test="quick-add-keyboards-2"]').click()
		cy.get('[data-test="cart-button"]').click()
		cy.get('[data-test="cart-delete-all"]').click()
		cy.get('[data-test="cart-close-button"]').click()
		cy.get('[data-test="cart-bubble"]').should('not.be.visible')
	})
})
