const d = document,
    $options = d.querySelector(".options")
d.addEventListener('click', e =>{
    if(e.target.matches('.share-btn') || e.target.matches(`${'.share-btn'} *`)){
        $options.classList.toggle('show')
    }
    else{
        $options.classList.remove('show')
    }
})