window.addEventListener('load',()=>
{
    let lon;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description');
    let temperatureDegree=document.querySelector('.temperature-degree');
    let locationTimeZone=document.querySelector('.location-timezone');
    let temperatureSection=document.querySelector('.temperature');
    let temperatureSpan=document.querySelector('.degree');
    var fahrenheit=(temperatureDegree.textContent*9/5)+32;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position =>{
          lon=position.coords.longitude;
          lat=position.coords.latitude;
          var api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=634f4174d44d7dc42ca2fa50b0ca4f2f&units=metric`;
          
          fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data=>
                {
                locationTimeZone.textContent=data.name;
                temperatureDescription.textContent=data.weather[0].description;
                temperature=data.main.temp;
                temperatureDegree.textContent=temperature;
                var iconCode=data.weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                document.querySelector('.w-icon').src=iconurl;
                })

             temperatureSection.addEventListener('click',()=>{
                 if(temperatureSpan.textContent=='C'){
                     temperatureSpan.textContent='F';
                     temperatureDegree.textContent=fahrenheit;
                 }
                 else{
                     temperatureSpan.textContent='C';
                     temperatureDegree.textContent=temperature;
                 }
             })
           

        })
    }
    else{
        console.log('its an error');
    }
   

})
