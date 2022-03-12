(() => {
    const xhr = new XMLHttpRequest(),
        d = document,
        $currentTimeWork = d.querySelector(".work .current-time"),
        $previousTimeWork = d.querySelector(".work .previous-time"),
        $currentTimePlay = d.querySelector(".play .current-time"),
        $previousTimePlay = d.querySelector(".play .previous-time"),
        $currentTimeStudy = d.querySelector(".study .current-time"),
        $previousTimeStudy = d.querySelector(".study .previous-time"),
        $currentTimeExercise = d.querySelector(".exercise .current-time"),
        $previousTimeExercise = d.querySelector(".exercise .previous-time"),
        $currentTimeSocial = d.querySelector(".social .current-time"),
        $previousTimeSocial = d.querySelector(".social .previous-time"),
        $currentTimeSelfCare = d.querySelector(".self-care .current-time"),
        $previousTimeSelfCare = d.querySelector(".self-care .previous-time"),
        $daily = d.querySelector(".daily"),
        $weekly = d.querySelector(".weekly"),
        $monthly = d.querySelector(".monthly")
    let timeWorkDay = '',
        previousTimeWorkDay = '',
        timePlayDay = '',
        previousTimePlayDay = ''
        timeStudyDay = '',
        previousTimeStudyDay = '',
        timeStudyDay = '',
        previousTimeStudyDay = '',
        timeExerciseDay = '',
        previousTimeExerciseDay = '',
        timeSocialDay = '',
        previousTimeSocialDay = '',
        timeSelfCareDay = '',
        previousTimeSelfCareDay = '',
        timeWorkWeek = '',
        previousTimeWorkWeek = '',
        timePlayWeek = '',
        previousTimePlayWeek = ''
        timeStudyWeek = '',
        previousTimeStudyWeek = '',
        timeStudyWeek = '',
        previousTimeStudyWeek = '',
        timeExerciseWeek = '',
        previousTimeExerciseWeek = '',
        timeSocialWeek = '',
        previousTimeSocialWeek = '',
        timeSelfCareWeek = '',
        previousTimeSelfCareWeek = '',
        timeWorkMonth = '',
        previousTimeWorkMonth = '',
        timePlayMonth = '',
        previousTimePlayMonth = ''
        timeStudyMonth = '',
        previousTimeStudyMonth = '',
        timeStudyMonth = '',
        previousTimeStudyMonth = '',
        timeExerciseMonth = '',
        previousTimeExerciseMonth = '',
        timeSocialMonth = '',
        previousTimeSocialMonth = '',
        timeSelfCareMonth = '',
        previousTimeSelfCareMonth = ''
    
    xhr.addEventListener('readystatechange', e =>{
        if(xhr.readyState !== 4) return

        if(xhr.status >= 200 && xhr.status < 300){

            let json = JSON.parse(xhr.responseText)
            json.forEach(el => {
                if(el.title === "Work"){
                    timeWorkDay = `${el.timeframes.daily.current}hrs`
                    previousTimeWorkDay = `Yesterday - ${el.timeframes.daily.previous}hrs`
                    timeWorkWeek = `${el.timeframes.weekly.current}hrs`
                    previousTimeWorkWeek = `Last Week - ${el.timeframes.weekly.previous}hrs`
                    timeWorkMonth = `${el.timeframes.monthly.current}hrs`
                    previousTimeWorkMonth = `Last Month - ${el.timeframes.monthly.previous}hrs`
                }
                if(el.title === "Play"){
                    timePlayDay = `${el.timeframes.daily.current}hrs`
                    previousTimePlayDay = `Yesterday - ${el.timeframes.daily.previous}hrs`
                    timePlayWeek = `${el.timeframes.weekly.current}hrs`
                    previousTimePlayWeek = `Last Week - ${el.timeframes.weekly.previous}hrs`
                    timePlayMonth = `${el.timeframes.monthly.current}hrs`
                    previousTimePlayMonth = `Last Month - ${el.timeframes.monthly.previous}hrs`
                }
                if(el.title === "Study"){
                    timeStudyDay = `${el.timeframes.daily.current}hrs`
                    previousTimeStudyDay = `Yesterday - ${el.timeframes.daily.previous}hrs`
                    timeStudyWeek = `${el.timeframes.weekly.current}hrs`
                    previousTimeStudyWeek = `Last Week - ${el.timeframes.weekly.previous}hrs`
                    timeStudyMonth = `${el.timeframes.monthly.current}hrs`
                    previousTimeStudyMonth = `Last Month - ${el.timeframes.monthly.previous}hrs`
                }
                if(el.title === "Exercise"){
                    timeExerciseDay = `${el.timeframes.daily.current}hrs`
                    previousTimeExerciseDay = `Yesterday - ${el.timeframes.daily.previous}hrs`
                    timeExerciseWeek = `${el.timeframes.weekly.current}hrs`
                    previousTimeExerciseWeek = `Last Week - ${el.timeframes.weekly.previous}hrs`
                    timeExerciseMonth = `${el.timeframes.monthly.current}hrs`
                    previousTimeExerciseMonth = `Last Month - ${el.timeframes.monthly.previous}hrs`
                }
                if(el.title === "Social"){
                    timeSocialDay = `${el.timeframes.daily.current}hrs`
                    previousTimeSocialDay = `Yesterday - ${el.timeframes.daily.previous}hrs`
                    timeSocialWeek = `${el.timeframes.weekly.current}hrs`
                    previousTimeSocialWeek = `Last Week - ${el.timeframes.weekly.previous}hrs`
                    timeSocialMonth = `${el.timeframes.monthly.current}hrs`
                    previousTimeSocialMonth = `Last Month - ${el.timeframes.monthly.previous}hrs`
                }
                if(el.title === "Self Care"){
                    timeSelfCareDay = `${el.timeframes.daily.current}hrs`
                    previousTimeSelfCareDay = `Yesterday - ${el.timeframes.daily.previous}hrs`
                    timeSelfCareWeek = `${el.timeframes.weekly.current}hrs`
                    previousTimeSelfCareWeek = `Last Week - ${el.timeframes.weekly.previous}hrs`
                    timeSelfCareMonth = `${el.timeframes.monthly.current}hrs`
                    previousTimeSelfCareMonth = `Last Month - ${el.timeframes.monthly.previous}hrs`
                }
            })
            
            d.querySelector('.timeframes').addEventListener("click", e =>{
                if(e.target.matches(".daily")){
                    $daily.classList.add("active")
                    $weekly.classList.remove("active")
                    $monthly.classList.remove("active")
                    $currentTimeWork.textContent = timeWorkDay
                    $previousTimeWork.textContent = previousTimeWorkDay
                    $currentTimePlay.textContent = timePlayDay
                    $previousTimePlay.textContent = previousTimePlayDay
                    $currentTimeStudy.textContent = timeStudyDay
                    $previousTimeStudy.textContent = previousTimeStudyDay
                    $currentTimeExercise.textContent = timeExerciseDay
                    $previousTimeExercise.textContent = previousTimeExerciseDay
                    $currentTimeSocial.textContent = timeSocialDay
                    $previousTimeSocial.textContent = previousTimeSocialDay
                    $currentTimeSelfCare.textContent = timeSelfCareDay
                    $previousTimeSelfCare.textContent = previousTimeSelfCareDay
                }
                if(e.target.matches(".weekly")){
                    $weekly.classList.add("active")
                    $daily.classList.remove("active")
                    $monthly.classList.remove("active")
                    $currentTimeWork.textContent = timeWorkWeek
                    $previousTimeWork.textContent = previousTimeWorkWeek
                    $currentTimePlay.textContent = timePlayWeek
                    $previousTimePlay.textContent = previousTimePlayWeek
                    $currentTimeStudy.textContent = timeStudyWeek
                    $previousTimeStudy.textContent = previousTimeStudyWeek
                    $currentTimeExercise.textContent = timeExerciseWeek
                    $previousTimeExercise.textContent = previousTimeExerciseWeek
                    $currentTimeSocial.textContent = timeSocialWeek
                    $previousTimeSocial.textContent = previousTimeSocialWeek
                    $currentTimeSelfCare.textContent = timeSelfCareWeek
                    $previousTimeSelfCare.textContent = previousTimeSelfCareWeek
                }
                if(e.target.matches(".monthly")){
                    $daily.classList.remove("active")
                    $weekly.classList.remove("active")
                    $monthly.classList.add("active")
                    $currentTimeWork.textContent = timeWorkMonth
                    $previousTimeWork.textContent = previousTimeWorkMonth
                    $currentTimePlay.textContent = timePlayMonth
                    $previousTimePlay.textContent = previousTimePlayMonth
                    $currentTimeStudy.textContent = timeStudyMonth
                    $previousTimeStudy.textContent = previousTimeStudyMonth
                    $currentTimeExercise.textContent = timeExerciseMonth
                    $previousTimeExercise.textContent = previousTimeExerciseMonth
                    $currentTimeSocial.textContent = timeSocialMonth
                    $previousTimeSocial.textContent = previousTimeSocialMonth
                    $currentTimeSelfCare.textContent = timeSelfCareMonth
                    $previousTimeSelfCare.textContent = previousTimeSelfCareMonth
                }
            })
                   
        }else{
            let message = xhr.statusText || "Ocurrio un error"
        }
    })

    xhr.open('GET','./data.json')
    xhr.send()
})();