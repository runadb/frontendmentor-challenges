(() => {
    const xhr = new XMLHttpRequest(),
        d = document,
        $currentTime = d.querySelectorAll(".current-time"),
        $previousTime = d.querySelectorAll(".previous-time"),
        $daily = d.querySelector(".daily"),
        $weekly = d.querySelector(".weekly"),
        $monthly = d.querySelector(".monthly")
    let timeWork = '',
        previousTimeWork = '',
        timePlay = '',
        previousTimePlay = ''
        timeStudy = '',
        previousTimeStudy = '',
        timeStudy = '',
        previousTimeStudy = '',
        timeExercise = '',
        previousTimeExercise = '',
        timeSocial = '',
        previousTimeSocial = '',
        timeSelfCare = '',
        previousTimeSelfCare = ''
    
    xhr.addEventListener('readystatechange', e =>{
        if(xhr.readyState !== 4) return

        if(xhr.status >= 200 && xhr.status < 300){

            let json = JSON.parse(xhr.responseText)
            
            d.addEventListener("click", e =>{
                if(e.target.matches(".daily")){
                    $daily.classList.add("active")
                    $weekly.classList.remove("active")
                    $monthly.classList.remove("active")
                    json.forEach(el => {
                        if(el.title === "Work"){
                            timeWork = `${el.timeframes.daily.current}hrs`
                            previousTimeWork = `Yesterday - ${el.timeframes.daily.previous}hrs`
                        }
                        if(el.title === "Play"){
                            timePlay = `${el.timeframes.daily.current}hrs`
                            previousTimePlay = `Yesterday - ${el.timeframes.daily.previous}hrs`
                        }
                        if(el.title === "Study"){
                            timeStudy = `${el.timeframes.daily.current}hrs`
                            previousTimeStudy = `Yesterday - ${el.timeframes.daily.previous}hrs`
                        }
                        if(el.title === "Exercise"){
                            timeExercise = `${el.timeframes.daily.current}hrs`
                            previousTimeExercise = `Yesterday - ${el.timeframes.daily.previous}hrs`
                        }
                        if(el.title === "Social"){
                            timeSocial = `${el.timeframes.daily.current}hrs`
                            previousTimeSocial = `Yesterday - ${el.timeframes.daily.previous}hrs`
                        }
                        if(el.title === "Self Care"){
                            timeSelfCare = `${el.timeframes.daily.current}hrs`
                            previousTimeSelfCare = `Yesterday - ${el.timeframes.daily.previous}hrs`
                        }
                    })
                    $currentTime.forEach(el =>{
                        if(el.closest("div.work")){
                            el.textContent = timeWork
                        }
                        if(el.closest("div.play")){
                            el.textContent = timePlay
                        }
                        if(el.closest("div.study")){
                            el.textContent = timeStudy
                        }
                        if(el.closest("div.exercise")){
                            el.textContent = timeExercise
                        }
                        if(el.closest("div.social")){
                            el.textContent = timeSocial
                        }
                        if(el.closest("div.self-care")){
                            el.textContent = timeSelfCare
                        }
                    })
                    $previousTime.forEach(el =>{
                        if(el.closest("div.work")){
                            el.textContent = previousTimeWork
                        }
                        if(el.closest("div.play")){
                            el.textContent = previousTimePlay
                        }
                        if(el.closest("div.study")){
                            el.textContent = previousTimeStudy
                        }
                        if(el.closest("div.exercise")){
                            el.textContent = previousTimeExercise
                        }
                        if(el.closest("div.social")){
                            el.textContent = previousTimeSocial
                        }
                        if(el.closest("div.self-care")){
                            el.textContent = previousTimeSelfCare
                        }
                    })
                }
                if(e.target.matches(".weekly")){
                    $weekly.classList.add("active")
                    $daily.classList.remove("active")
                    $monthly.classList.remove("active")
                    json.forEach(el => {
                        if(el.title === "Work"){
                            timeWork = `${el.timeframes.weekly.current}hrs`
                            previousTimeWork = `Last Week - ${el.timeframes.weekly.previous}hrs`
                        }
                        if(el.title === "Play"){
                            timePlay = `${el.timeframes.weekly.current}hrs`
                            previousTimePlay = `Last Week - ${el.timeframes.weekly.previous}hrs`
                        }
                        if(el.title === "Study"){
                            timeStudy = `${el.timeframes.weekly.current}hrs`
                            previousTimeStudy = `Last Week - ${el.timeframes.weekly.previous}hrs`
                        }
                        if(el.title === "Exercise"){
                            timeExercise = `${el.timeframes.weekly.current}hrs`
                            previousTimeExercise = `Last Week - ${el.timeframes.weekly.previous}hrs`
                        }
                        if(el.title === "Social"){
                            timeSocial = `${el.timeframes.weekly.current}hrs`
                            previousTimeSocial = `Last Week - ${el.timeframes.weekly.previous}hrs`
                        }
                        if(el.title === "Self Care"){
                            timeSelfCare = `${el.timeframes.weekly.current}hrs`
                            previousTimeSelfCare = `Last Week - ${el.timeframes.weekly.previous}hrs`
                        }
                    })
                    $currentTime.forEach(el =>{
                        if(el.closest("div.work")){
                            el.textContent = timeWork
                        }
                        if(el.closest("div.play")){
                            el.textContent = timePlay
                        }
                        if(el.closest("div.study")){
                            el.textContent = timeStudy
                        }
                        if(el.closest("div.exercise")){
                            el.textContent = timeExercise
                        }
                        if(el.closest("div.social")){
                            el.textContent = timeSocial
                        }
                        if(el.closest("div.self-care")){
                            el.textContent = timeSelfCare
                        }
                    })
                    $previousTime.forEach(el =>{
                        if(el.closest("div.work")){
                            el.textContent = previousTimeWork
                        }
                        if(el.closest("div.play")){
                            el.textContent = previousTimePlay
                        }
                        if(el.closest("div.study")){
                            el.textContent = previousTimeStudy
                        }
                        if(el.closest("div.exercise")){
                            el.textContent = previousTimeExercise
                        }
                        if(el.closest("div.social")){
                            el.textContent = previousTimeSocial
                        }
                        if(el.closest("div.self-care")){
                            el.textContent = previousTimeSelfCare
                        }
                    })
                }
                if(e.target.matches(".monthly")){
                    $daily.classList.remove("active")
                    $weekly.classList.remove("active")
                    $monthly.classList.add("active")
                    json.forEach(el => {
                        if(el.title === "Work"){
                            timeWork = `${el.timeframes.monthly.current}hrs`
                            previousTimeWork = `Last Month - ${el.timeframes.monthly.previous}hrs`
                        }
                        if(el.title === "Play"){
                            timePlay = `${el.timeframes.monthly.current}hrs`
                            previousTimePlay = `Last Month - ${el.timeframes.monthly.previous}hrs`
                        }
                        if(el.title === "Study"){
                            timeStudy = `${el.timeframes.monthly.current}hrs`
                            previousTimeStudy = `Last Month - ${el.timeframes.monthly.previous}hrs`
                        }
                        if(el.title === "Exercise"){
                            timeExercise = `${el.timeframes.monthly.current}hrs`
                            previousTimeExercise = `Last Month - ${el.timeframes.monthly.previous}hrs`
                        }
                        if(el.title === "Social"){
                            timeSocial = `${el.timeframes.monthly.current}hrs`
                            previousTimeSocial = `Last Month - ${el.timeframes.monthly.previous}hrs`
                        }
                        if(el.title === "Self Care"){
                            timeSelfCare = `${el.timeframes.monthly.current}hrs`
                            previousTimeSelfCare = `Last Month - ${el.timeframes.monthly.previous}hrs`
                        }
                    })
                    $currentTime.forEach(el =>{
                        if(el.closest("div.work")){
                            el.textContent = timeWork
                        }
                        if(el.closest("div.play")){
                            el.textContent = timePlay
                        }
                        if(el.closest("div.study")){
                            el.textContent = timeStudy
                        }
                        if(el.closest("div.exercise")){
                            el.textContent = timeExercise
                        }
                        if(el.closest("div.social")){
                            el.textContent = timeSocial
                        }
                        if(el.closest("div.self-care")){
                            el.textContent = timeSelfCare
                        }
                    })
                    $previousTime.forEach(el =>{
                        if(el.closest("div.work")){
                            el.textContent = previousTimeWork
                        }
                        if(el.closest("div.play")){
                            el.textContent = previousTimePlay
                        }
                        if(el.closest("div.study")){
                            el.textContent = previousTimeStudy
                        }
                        if(el.closest("div.exercise")){
                            el.textContent = previousTimeExercise
                        }
                        if(el.closest("div.social")){
                            el.textContent = previousTimeSocial
                        }
                        if(el.closest("div.self-care")){
                            el.textContent = previousTimeSelfCare
                        }
                    })
                }
            })
                   
        }else{
            let message = xhr.statusText || "Ocurrio un error"
        }
    })

    xhr.open('GET','./data.json')
    xhr.send()
})();