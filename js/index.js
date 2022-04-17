let url = "http://localhost:3000/"

let page = 1;

function monsters(){
    fetch(`${url}+monsters/?_limit=50&_page=${page}`)
    .then(res => res.json())
    .then( monsters => {
        for(let monster in monster){
           let monster_container = document.getElementById("monster-container") 
           monster_container.innerHTML = `
           <h1> ${monster.name}</h1>
           <p> ${monster.age} </p>
           <p> ${monster.description} </p>
           `
        }
    })
}


document.addEventListener('DOMContent', (e) => {
    e.preventDefault()

    let monsterName = document.getElementById('Name')
    let monsterAge = document.getElementById('age')
    let monsterDescr = document.getElementById('descrption')

    // post

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
})