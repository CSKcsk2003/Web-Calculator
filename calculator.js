let Screen = document.getElementById('Screen');
let buttons = document.querySelectorAll('button');
let screenValue='';
for (item of buttons){
item.addEventListener('click',(e)=>{
    buttonText = e.target.innerText;
    console.log(screenValue);
    if(buttonText =='X'){
        buttonText = ('*');
        Screen.value += buttonText;
        screenValue = Screen.value;
    }    
    else if(buttonText == '='){
        Screen.value = eval(screenValue)
    }
    else if(buttonText == 'AC'){
        screenValue = '';
        Screen.value = screenValue;
        
    }
    else{
        Screen.value += buttonText;
        screenValue = Screen.value;
    }
})
}
