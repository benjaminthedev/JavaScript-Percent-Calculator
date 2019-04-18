console.log('Welcome to Percent Calculator In JavaScript');

let form = document.getElementById('xIsWhatPercentOfY');   

let numField1 = document.getElementById('numField1');
let numField2 = document.getElementById('numField2');
let resultField = document.getElementById('resultField');

form.addEventListener('submit', function(event){    
    //Form Validation
    if(!numField1.value || !numField2.value){
        alert('🤔Please add some data🤔');
    } else{
        let x = parseFloat(numField1.value);
        let y = parseFloat(numField2.value);
        //Calculate
        let result = x / y;
        let percent = result * 100;
        //Output
        resultField.innerText = `Answer ${result}%`;
        event.preventDefault();
    }
});