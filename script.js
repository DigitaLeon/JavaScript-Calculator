const display = document.getElementById('display');
const displayVal = document.getElementById('display').value;
const btnButton = document.querySelector('.btn');
const darkModeBtn = document.getElementById('dark-mode-btn');


if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-theme');
}

//toggle Dark Mode
function toggleDarkMode(){
    document.body.classList.toggle('dark-theme');
    
    //save preferences
    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('theme', 'dark');
    }else{
        localStorage.setItem('theme', 'light');
    }
}

//TODO: Save toggled mode to memory and recall it on side reload

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