const d = document,
$btnChangeAdvice = d.querySelector("button");

const advice = () =>{
    const $adviceId = d.querySelector(".advice-id"),
    $adviceText = d.querySelector(".advice-text");
    fetch("https://api.adviceslip.com/advice")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
        $adviceId.innerHTML =  `ADVICE # ${json.slip.id}` 
        $adviceText.innerHTML = `"${json.slip.advice}"`
    })
    .catch((err) => {
        let message = err.statusText || "Ocurrio un error"
        $adviceText.innerHTML = `Error ${err.status}: ${message}`
    })
}   
advice()

$btnChangeAdvice.addEventListener('click', e =>{
    advice()
})