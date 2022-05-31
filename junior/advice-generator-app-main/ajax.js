const d = document,
$btnChangeAdvice = d.querySelector("button")
const advice = () =>{
    const $adviceId = d.querySelector(".advice-id"),
    $adviceText = d.querySelector(".advice-text"),
    xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', e =>{
    if( xhr.readyState !== 4) return

    if(xhr.status >= 200 && xhr.status < 300){
        let json = JSON.parse(xhr.responseText)
        $adviceId.innerHTML = `ADVICE # ${json.slip.id}`
        $adviceText.innerHTML = `"${json.slip.advice}"`
    }
    else{
        let message = xhr.statusText || "Ocurrio un error"
        $adviceText.innerHTML = `Error ${xhr.status}: ${message}`
    }
})
xhr.open("GET","https://api.adviceslip.com/advice")
xhr.send()
}
advice()
$btnChangeAdvice.addEventListener('click', e =>{

    advice()
})