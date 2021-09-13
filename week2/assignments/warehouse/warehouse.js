const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

// list of each part number and qty for check-off in the "detailsList" element
var partsList = document.getElementById('detailsList');

for(let x = 0; x < parts.length; x++){
    var div = document.createElement('div');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    div.appendChild(checkbox);

    partNumQTY = `${parts[x].partNbr}, ${parts[x].qty}`;

    partsList.appendChild(div);
    div.append(partNumQTY);
}


// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element
var specialpackages = document.getElementById('specialPackaging');
var listItems = document.createElement('ul');

for(let i = 0; i < parts.length; i++){
    if(parts[i].aisle === 'B3'){
        var list = document.createElement('li');
        list.append(parts[i].partNbr);
        listItems.appendChild(list);
        specialpackages.appendChild(listItems);
    }
}


// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
var hazardItems = document.getElementById('hazardousMaterials');
var listHazard = document.createElement('ul');

for(let i = 0; i < parts.length; i++){
    if(parts[i].aisle === 'J4'){
        var list2 = document.createElement('li');
        
        list2.append(parts[i].partNbr);
        listHazard.appendChild(list2);
        hazardItems.appendChild(listHazard); 
    }
}
var hazardSign = document.createElement('p');

hazardSign.innerText = 'PLEASE USE GLOVES!';
hazardItems.appendChild(hazardSign);


// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1
var smallItems = document.getElementById('smallItemsOnly');
var listSmallItems = document.createElement('ul');

for(let i = 0; i < parts.length; i++){
    if(parts[i].aisle === 'H1'){
        var list3 = document.createElement('li');
        
        list3.append(parts[i].partNbr);
        listSmallItems.appendChild(list3);
        smallItems.appendChild(listSmallItems);
    }
}
var smallSign = document.createElement('p');

smallSign.innerText = 'TAKE A BASKET';
smallItems.appendChild(smallSign);


// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element
var forkliftItems = document.getElementById('forkliftNeeded');
var listForklift = document.createElement('ul');

for(var i = 0; i < parts.length; i++){
    if(parts[i].aisle === 'S' && parts[i].aisle === 'T' && parts[i].aisle === 'U'){
        var list4 = document.createElement('li');

        list4.append(parts[i].partNbr);
        listForklift.appendChild(list4);
        forkliftItems.appendChild(listSmallItems);
    }
}
var forkliftSign = document.createElement('p');

forkliftSign.innerText = 'USE A FORKLIFT. TOO HEAVY FOR PERSONAL CARRY.'
forkliftItems.appendChild(forkliftSign);


// sum up the total number of parts and append that number to the text already in "totalItems" element
var total = parts.reduce(function(acc, currentValue){
    return acc + currentValue.qty
}, 0);

var number = document.createElement('p');
number.append(total);
//console.log(number);
document.getElementById('totalItems').append(number);