const d = document,
    $membersTitle = d.querySelector(".accordion-title-members"),
    $membersBody = d.querySelector(".accordion-body-members"),
    $uploadTitle = d.querySelector(".accordion-title-upload"),
    $uploadBody = d.querySelector(".accordion-body-upload"),
    $passwordTitle = d.querySelector(".accordion-title-password"),
    $passwordBody = d.querySelector(".accordion-body-password"),
    $subscriptionTitle = d.querySelector(".accordion-title-subscription"),
    $subscriptionBody = d.querySelector(".accordion-body-subscription"),
    $supportTitle = d.querySelector(".accordion-title-support"),
    $supportBody = d.querySelector(".accordion-body-support")

d.addEventListener("click", e =>{
    if(e.target.matches(".accordion-title-members") || e.target.matches(`${'.accordion-title-members'} *`) ){
        $membersBody.classList.toggle("show")
        $membersTitle.classList.toggle("active")
    }
    if(e.target.matches(".accordion-title-upload") || e.target.matches(`${'.accordion-title-upload'} *`) ){
        $uploadBody.classList.toggle("show")
        $uploadTitle.classList.toggle("active")
    }
    if(e.target.matches(".accordion-title-password") || e.target.matches(`${'.accordion-title-password'} *`)){
        $passwordBody.classList.toggle("show")
        $passwordTitle.classList.toggle("active")
    }
    if(e.target.matches(".accordion-title-subscription") || e.target.matches(`${'.accordion-title-subscription'} *`)){
        $subscriptionBody.classList.toggle("show")
        $subscriptionTitle.classList.toggle("active")
    }
    if(e.target.matches(".accordion-title-support") || e.target.matches(`${'.accordion-title-support'} *`)){
        $supportBody.classList.toggle("show")
        $supportTitle.classList.toggle("active")
    }
 
})

