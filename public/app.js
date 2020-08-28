document.getElementById('addBurger').addEventListener('click', event => {
    event.preventDefault()

    axios.post('/api/burgers', {
        burger_name: document.getElementById('burger').Value,
        devoured: false
    })
        .then(({ data }) => {
            let burgerElem = document.createElement('li')
            burgerElem.className = 'list-group-item'
            burgerElem.innerHTML = `
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1"> ${document.getElementById('burger').Value} </h5>
            </div>
            `
            document.getElementById('notDevoured').append(burgerElem)
            
            document.getElementById('burger').value = ''
        })
        .catch(err => console.log(err))
})



