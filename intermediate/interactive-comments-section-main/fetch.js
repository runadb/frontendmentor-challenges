const d = document

const comments = () =>{
    fetch("./data.json")
    .then((res) => (res.ok ? res.json() : Promise.reject(res) ))
    .then((json) => {
        console.log(json.currentUser)
    })
    .catch((err) =>{
        let message = err.statusText || "Ocurrio un error"
        console.log(message)
    })
}

comments()