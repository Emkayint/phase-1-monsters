let url = "http://localhost:3000/"

let page = 1;

function monsters(page){
    fetch(`${url}monsters/?_limit=50&_page=${page}`)
    .then(res => res.json())
    // .then( res => console.log(res))
    .then( monsters => {
        for(let monster of monsters){
           let monster_container = document.getElementById("monster-container") 
           let container = document.createElement('div')
           container.innerHTML = `
           <h1> ${monster.name}</h1>
           <p> ${monster.age} </p>
           <p> ${monster.description} </p>
           `
           monster_container.appendChild(container)
        }
    })
}


document.addEventListener('DOMContentLoaded', (e) => {
    monsters(page)
    let myForm = document.querySelector('form')

    myForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let monsterName = document.getElementById('Name')
        let monsterAge = document.getElementById('age')
        let monsterDescr = document.getElementById('Description')

        // post
        console.log(monsterAge.value)

        fetch(`${url}monsters`, {
            method : "POST",
            headers : {
                "Content-type" : "application/json",
                Accept: 'application/json'
            },
            body : JSON.stringify({
                name : monsterName.value,
                age : monsterAge.value,
                description : monsterDescr.value
            })
        })
        .then( res => res.json())
        .then( data => console.log(data))

    
        
    })
})

let pageUp = () => {
    page++;
    monsters(page)
}

let pageDown = () => {
    if(page > 1){
        page --;
        monsters(page)
    }
}

let btnUp = document.getElementById('back')
let btnDown = document.getElementById('forward')

btnUp.addEventListener('click', pageUp)
btnDown.addEventListener('click', pageDown)
