const btnNewuser=document.querySelector('.newuser')
let form=document.querySelector('.form')

form.addEventListener('submit',(e) => {
    e.preventDefault()
    fetch('http://localhost:3000/user',{
        method : 'POST',
        headers :{
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({
            name: e.target[0].value,
            sername: e.target[1].value
        })
    }).then((res)=>console.log(res))
    .catch((err)=>console.log(err))

})