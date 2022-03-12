(() => {
    const xhr = new XMLHttpRequest(),
        d = document,
        mapActivities = {
            'work': {
                currentTime: d.querySelector(".work .current-time"),
                previousTime: d.querySelector(".work .previous-time")
            },
            'study': {
                currentTime: d.querySelector(".study .current-time"),
                previousTime: d.querySelector(".study .previous-time")
            },
            'play': {
                currentTime: d.querySelector(".play .current-time"),
                previousTime: d.querySelector(".play .previous-time")
            },
            'exercise': {
                currentTime: d.querySelector(".exercise .current-time"),
                previousTime: d.querySelector(".exercise .previous-time")
            },
            'social': {
                currentTime: d.querySelector(".social .current-time"),
                previousTime: d.querySelector(".social .previous-time")
            },
            'selfcare': {
                currentTime: d.querySelector(".self-care .current-time"),
                previousTime: d.querySelector(".self-care .previous-time")
            }
        },
        data = {},
        mapTarget = {
            'Daily': 'daily',
            'Weekly': 'weekly',
            'Monthly': 'monthly'    
        };

    xhr.addEventListener('readystatechange', e =>{
        if(xhr.readyState !== 4) return

        if(xhr.status >= 200 && xhr.status < 300){

            let json = JSON.parse(xhr.responseText);
            var mapActivies = {
                 'Work' : 'work',
                 'Play' : 'play',
                 'Study' : 'study',
                 'Exercise' : 'exercise',
                 'Social' : 'social',
                 'Self Care' : 'selfcare'
            };
            

            json.forEach(el => {
                data[mapActivies[el.title]] = {
                    "daily": {
                      "current": `${el.timeframes.daily.current}hrs`,
                      "previous": `Yesterday - ${el.timeframes.daily.previous}hrs`
                    },
                    "weekly": {
                      "current": `${el.timeframes.weekly.current}hrs`,
                      "previous": `Last Week - ${el.timeframes.weekly.previous}hrs`
                    },
                    "monthly": {
                      "current": `${el.timeframes.monthly.current}hrs`,
                      "previous": `Last Month - ${el.timeframes.monthly.previous}hrs`
                    }
                };
            });
            // console.log('data', data);
            
            d.querySelector('.timeframes').addEventListener("click", e => {
                // console.log('e.currentTarget', e.currentTarget);
                // var random = Math.floor(Math.random() * 20);
                // console.log(`hiciste click en cualquier parte ${random}`);
                // map (mapear)
                // dominio (activity : 'work' | 'study' | 'play')
                // rango {'work' : {currentTime, previousTime}})
                // rango {'study' : {currentTime, previousTime}})
                e.currentTarget.querySelectorAll(':scope > p').forEach(el => el.classList.remove('active'));
                e.target.classList.add('active');

                if(!e.target.matches(".daily") && !e.target.matches(".weekly") && !e.target.matches(".monthly")) {
                    return;
                }

                for (var activity in mapActivities) {
                    // console.log('data[activity][mapTarget[e.target.textContent]].current', data[activity][mapTarget[e.target.textContent]].current);
                    // console.log('data[activity][mapTarget[e.target.textContent]].previous', data[activity][mapTarget[e.target.textContent]].previous);
                    // console.log('map[activity].currentTime', map[activity].currentTime);
                    // console.log('map[activity].previousTime', map[activity].previousTime);
                    mapActivities[activity].currentTime.textContent = data[activity][mapTarget[e.target.textContent]].current;
                    mapActivities[activity].previousTime.textContent = data[activity][mapTarget[e.target.textContent]].previous;
                }
            })
                   
        }else{
            let message = xhr.statusText || "Ocurrio un error"
        }
    })

    xhr.open('GET','./data.json')
    xhr.send()
})();