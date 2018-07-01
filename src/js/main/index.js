/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  const btn1 = document.getElementById('symbolBtn1');
  const btn2 = document.getElementById('symbolBtn2');

  if (event.target.matches('.symbol')) {
    const countrySymbols = document.getElementsByClassName('.symbol');
    const btn = document.getElementById('symbolBtn1');
    let selectedSymbol1 = event.target.innerText;
    let selectedSymbol2 = btn2.innerText;
    btn.innerHTML = selectedSymbol1;

    symbolValue(selectedSymbol1, selectedSymbol2);
  }
  if (event.target.matches('.symbol2')) {
    let selectedSymbol1 = btn1.innerText;
    let selectedSymbol2 = event.target.innerText;
    btn2.innerHTML = selectedSymbol2;
    symbolValue(selectedSymbol1, selectedSymbol2);
  }
}





function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}



const div = document.getElementById('myDropdown');
const div2 = document.getElementById('myDropdown2');

const symbolUrl = 'https://free.currencyconverterapi.com/api/v5/currencies';
let keys = [];
 fetch(symbolUrl)
 .then((resp) => resp.json())
 .then(function(data) {
   let currencies = data.results;
   for(let currency in currencies) {
     keys.push(currency);
   }
    return keys.map(function(key) {
     let a = createNode('a'),
     a2 = createNode('a'),
     span = createNode('span');
     span2 = createNode('span');
     a.setAttribute( 'class', 'symbol' );
     a2.classList.add('symbol2');
     span.innerHTML = `${key}`;
     span2.innerHTML = `${key}`;
     append(a, span);
     append(a2, span2);
     append(div, a);
     append(div2, a2);
   })
 })
 .catch(function(error) {
   console.log(error);
 });

 let textValue1 = document.getElementById('currencyValue1');
 let textValue2 = document.getElementById('currencyValue2');
 let value;

let symbolValue = (country1 = 'USD', country2 = 'NGN') => {
 const valueUrl = `https://free.currencyconverterapi.com/api/v5/convert?q=${country1}_${country2}&compact=ultra`;
 fetch(valueUrl)
  .then((resp) => resp.json())
  .then(function(data) {
    for (let key in data) {
       console.log(key);
       console.log(data[key]);
       value = data[key];
   }

   const valueReturned = [textValue2.value = value * textValue1.value,];
     return valueReturned;
  })
  .catch(function(error) {
    console.log(error);
  });
}

symbolValue();

function updateValue1(event) {
  if (event.type == 'change') {
  const valueText1 = textValue1.value;
  textValue2.value = value * valueText1;
  }
}

function updateValue2(event) {
  if (event.type == 'change') {
  const valueText2 = textValue2.value;
  textValue1.value = value / valueText2;
  }
}
