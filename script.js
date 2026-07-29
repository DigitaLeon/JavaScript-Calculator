const display = document.getElementById('display');
const displayVal = document.getElementById('display').value;
const btnButton = document.querySelector('.btn');
const darkModeBtn = document.getElementById('dark-mode-btn');

//toggle Dark Mode
function toggleDarkMode(){
    document.body.classList.toggle('dark-theme');
    console.log("Dark Mode Activated");
}


function appendToDisplay(val){
    display.value += val;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.substring(0, display.value.length - 1);
}

function calculateResult(){
    let result = eval(display.value);
    display.value = result;
    console.log(result);
}


//Keyboard event handling
document.addEventListener('keydown', (event) =>{
   if(event.key === "Backspace"){
        deleteLast();
    }
    
    if(event.key === 'Enter'){
        calculateResult();
    }
    
    if(!isNaN(event.key)){
        appendToDisplay(event.key);
    }
    
    if("+-*/.".includes(event.key)){
        appendToDisplay(event.key);
    }
    
    if(event.key === "Delete"){
        clearDisplay();
    }
});