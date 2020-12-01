const selectCities = document.querySelector('#cities');


fetch("https://api.hh.ru/areas/16")
  .then(response => response.json())
  .then(json =>  {
      const newArr = [] 
      json.areas.forEach(element => {
        newArr.push(element.name)
      });
      selectCities.innerHTML = newArr.map(item => 
      `<option value=${item}>${item}</option>`).join('');
      json.areas[1].areas.forEach(element => {
          newArr.push(element.name)
      });
      selectCities.innerHTML = newArr.map(item => 
        `<option value=${item}>${item}</option>`).join('');
        
      json.areas[3].areas.forEach(element => {
          newArr.push(element.name)
      });
      selectCities.innerHTML = newArr.map(item => 
        `<option value=${item}>${item}</option>`).join('');
       
      json.areas[5].areas.forEach(element => {
          newArr.push(element.name)
      });
      selectCities.innerHTML = newArr.map(item => 
        `<option value=${item}>${item}</option>`).join('');
      json.areas[6].areas.forEach(element => {
          newArr.push(element.name)
      });
      selectCities.innerHTML = newArr.map(item => 
        `<option value=${item}>${item}</option>`).join('');
      json.areas[9].areas.forEach(element => {
          newArr.push(element.name)
      });
      selectCities.innerHTML = newArr.map(item => 
        `<option value=${item}>${item}</option>`).join('');
      json.areas[11].areas.forEach(element => {
          newArr.push(element.name)
      });
      selectCities.innerHTML = newArr.map(item => 
        `<option value=${item}>${item}</option>`).join('');  
    
});

      
const api = {
    key: "de68b0392ab9d2b6c38dfd49641e76be",
    base: "https://api.openweathermap.org/data/2.5/"
}

const newCities = document.getElementById('cities');
const btn = document.getElementById('btn');



btn.onclick = setQuery

function setQuery() {
        getResults(cities.value);
    }


function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.textContent = `${weather.name}, ${weather.sys.country}`;
    
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    




}




