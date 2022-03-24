const d = document,
    $slide_items = d.querySelectorAll(".slide-item")

d.addEventListener("click", e =>{
    if(e.target.matches(".btn-prev  *") || e.target.matches(".btn-next  *")){
        $slide_items.forEach(el =>{
            el.classList.toggle("active")
        })
    }
})