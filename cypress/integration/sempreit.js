const tokenvalue = '98901cab1ce0d1fe86fbb403e99c45c587105b5edb266ec5f4f96cb9faaf8e27';

it('Metodo GET na API', () => {
    cy.request({
        method: 'GET',
        url: 'https://simple-books-api.glitch.me'
        }).then(res => console.log (res))
});

it('Metodo GET /books', () => {
    cy.request({
        method: 'GET',
        url: 'https://simple-books-api.glitch.me/books'
    })
})

it('Metodo GET /books/:bookId', () => {
    cy.request({
        method: 'GET',
        url: 'https://simple-books-api.glitch.me/books/1'
    })
})

it ('Metodo POST para pegar o token', ()=> {
    cy.request({
        method: 'POST',
        url: 'https://simple-books-api.glitch.me/api-clients/',
        body:{
            "clientName": "Postman",
            "clientEmail": "oswaldooap4@gmail.com"
        },
        
    }).then(({body})=> {
        window.localStorage.setItem('authToken', body.token)
        console.log(body)  });
    
})

it('Metodo POST /books/:bookId', () => {
   
    cy.request({
        method: 'POST',
        url: 'https://simple-books-api.glitch.me/orders',
        headers: {
            Authorization: tokenvalue,
        },
        body:  {
            
            "bookId": 1,
            "customerName": "John"
    }
    })
})

it('Metodo GET /orders', () => {
    cy.request({
        method: 'GET',
        url: 'https://simple-books-api.glitch.me/orders',
        headers: {
            Authorization: tokenvalue,
        },
    }).then(res => console.log(res))
})

it('Metodo GET /orders/:orderId', () =>{
    cy.request({
        method: 'GET',
        url: 'https://simple-books-api.glitch.me/orders/:orderId',
        headers: {
            Authorization: tokenvalue,
        },

        body: {
            "id": 'Ubq5f8S9oJ44q1g5EwMoF',
        },
})
})

it('Metodo PATCH /orders/:orderId', () =>{
    cy.request({
        method: 'PATCH',
        url: 'https://simple-books-api.glitch.me/orders',
        headers: {
            Authorization: tokenvalue,
        },
        body: {
            "bookId": 1,
            "customerName": "John"
            
        }
    })
})

it('Medtodo DELETE /orders/Ubq5f8S9oJ44q1g5EwMoF', ()=> {
    cy.request({
        method: 'DELETE',
        url: 'https://simple-books-api.glitch.me/orders/Ubq5f8S9oJ44q1g5EwMoF',
        headers: {
            Authorization: tokenvalue,
        }
    })
})