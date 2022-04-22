const d = document,
    $form = d.querySelector("form"),
    $result = d.querySelector('.result'),
    $cardThanks = d.querySelector('.card-thanks'),
    $cardReview = d.querySelector('.card-review'),
    $optionOne = d.getElementById('one'),
    $optionTwo = d.getElementById('two'),
    $optionthree = d.getElementById('three'),
    $optionFour = d.getElementById('four'),
    $optionFive = d.getElementById('five');

let ratingValue    
d.addEventListener('click',e =>{
    if(e.target.matches("label[for=one]")){
        $optionOne.parentElement.classList.add('active')
        $optionTwo.parentElement.classList.remove('active')
        $optionthree.parentElement.classList.remove('active')
        $optionFour.parentElement.classList.remove('active')
        $optionFive.parentElement.classList.remove('active')
    }
    if(e.target.matches("label[for=two]")){
        $optionOne.parentElement.classList.remove('active')
        $optionTwo.parentElement.classList.add('active')
        $optionthree.parentElement.classList.remove('active')
        $optionFour.parentElement.classList.remove('active')
        $optionFive.parentElement.classList.remove('active')
    }
    if(e.target.matches("label[for=three]")){
        $optionOne.parentElement.classList.remove('active')
        $optionTwo.parentElement.classList.remove('active')
        $optionthree.parentElement.classList.add('active')
        $optionFour.parentElement.classList.remove('active')
        $optionFive.parentElement.classList.remove('active')
    }
    if(e.target.matches("label[for=four]")){
        $optionOne.parentElement.classList.remove('active')
        $optionTwo.parentElement.classList.remove('active')
        $optionthree.parentElement.classList.remove('active')
        $optionFour.parentElement.classList.add('active')
        $optionFive.parentElement.classList.remove('active')
    }
    if(e.target.matches("label[for=five]")){
        $optionOne.parentElement.classList.remove('active')
        $optionTwo.parentElement.classList.remove('active')
        $optionthree.parentElement.classList.remove('active')
        $optionFour.parentElement.classList.remove('active')
        $optionFive.parentElement.classList.add ('active')
    }
})
$form.addEventListener("submit", e =>{
    e.preventDefault()
    if($optionOne.checked == true){
        ratingValue = $optionOne.value
        $cardThanks.classList.add("show")
        $cardReview.classList.add("hidden")
    }
    if($optionTwo.checked == true){
        ratingValue = $optionTwo.value
        $cardThanks.classList.add("show")
        $cardReview.classList.add("hidden")    
    }
    if($optionthree.checked == true){
        ratingValue = $optionthree.value
        $cardThanks.classList.add("show")
        $cardReview.classList.add("hidden")    
    }
    if($optionFour.checked == true){
        ratingValue = $optionFour.value
        $cardThanks.classList.add("show")
        $cardReview.classList.add("hidden")    
    }
    if($optionFive.checked == true){
        ratingValue = $optionFive.value
        $cardThanks.classList.add("show")
        $cardReview.classList.add("hidden")    
    }

    $result.textContent = `You selected ${ratingValue} out of 5`
},{once: true})

