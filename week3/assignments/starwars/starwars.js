// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'


function getFromSWAPI(queryType, itemID) {
    type = queryType
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        console.log(data);
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}



function fetchData(){
    let queryType = document.getElementById('queryType').value;
    console.log(queryType);
    let itemID = document.getElementById('itemID').value;
    console.log(itemID);

    getFromSWAPI(queryType, itemID);
}

var type, id

function updateInfo(data){
    if(type === "people"){
        document.getElementById('dataLabel1').innerText = 'Person Name:'
        document.getElementById('dataValue1').innerText = data.name
        document.getElementById('dataLabel2').innerText = 'Height: '
        document.getElementById('dataValue2').innerText = data.height
    }
    else if(type === "planets"){
        document.getElementById('dataLabel1').textContent = 'Planet Name:'
        document.getElementById('dataValue1').textContent = data.name
        document.getElementById('dataLabel2').textContent = 'Climate: '
        document.getElementById('dataValue2').textContent = data.climate
    }
    else if(type === 'starships'){
        document.getElementById('dataLabel1').textContent = 'Starship Name:'
        document.getElementById('dataValue1').textContent = data.name
        document.getElementById('dataLabel2').textContent = 'Model: '
        document.getElementById('dataValue2').textContent = data.model
    }
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.