var title = document.createElement('title')
title.innerHTML = "Fetch-restcountries"
document.head.append(title)


var rcountries = fetch('https://restcountries.eu/rest/v2/all')
var cityName;

rcountries
	.then(function(data1)  {
		return data1.json()
	})
	.then(function(datajson) {
		
		
        var n=0
		var column = 3
		var nrows = Math.ceil(datajson.length / column)
        
		for (let i = 0; i < nrows; i++) {
			let row = document.createElement('div')
			row.setAttribute('class','row')
			
			for (let j = 0; j < column; j++) {
				let col = document.createElement('div')
				col.setAttribute('class','col-lg-4')
				

				var card = document.createElement('div')
				card.setAttribute('class','card')
				
				
				col.appendChild(card)

				var cheader = document.createElement('h4')
				cheader.classList.add('card-header','text-center')
				cheader.innerHTML = datajson[n].name
				card.appendChild(cheader)

				var cardBody = document.createElement('div')
				cardBody.classList.add('card-body', 'card-bg', 'text-center')
				card.appendChild(cardBody)

				var flag = document.createElement('img')
				flag.src = datajson[n].flag
				flag.classList.add('card-img-top')
				cardBody.appendChild(flag)

				var capital = document.createElement('div')
				capital.classList.add('h5')
				capital.setAttribute('id','ctl')
				capital.innerHTML = 'Capital: ' + datajson[n].capital
				cityName=datajson[n].capital;
				console.log(cityName);

				cardBody.append(capital)

				var conti = document.createElement('div')
				conti.classList.add('h5')
				conti.innerHTML = 'Continent: ' + datajson[n].region
				cardBody.append(conti)
				
               
				
				
				var weather= document.createElement('input')
                weather.setAttribute('type','button')  
				weather.setAttribute('class','btn btn-primary')
				weather.setAttribute('value','Click for weather info')
				weather.setAttribute('id',''+ cityName)
				weather.setAttribute('onclick',"showweather(this)")
				cardBody.append(weather)
				
				n++
                row.appendChild(col)
				
            }
            
			document.body.append(row)
        }
    
    })
	function showweather (cityName){
		var two=cityName.id;
		//alert(cityName.id);
		
		var one ="https://api.openweathermap.org/data/2.5/weather?q="
		var three="&appid=99da1bd70152f88c7d354fc078d53455"

		fetch(one+two+three)
		.then(function (response)
		{
			return response.json()
		})
		.then(function(result)
		{
			console.log(result)
			window.alert("CURRENT WHEATHER DESCRIPTION: "+result.weather[0].description)
		}) 
	
	}