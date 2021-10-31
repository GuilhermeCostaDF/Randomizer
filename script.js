const listDisplay = document.getElementById('listDisplay');
const addButton = document.getElementById('addButton');
const randomizeButton = document.getElementById('randomButton');
const resetDisplayButton = document.getElementById('resetButton');
const arrayNames = [];
let shuffledArray=[];

const addNameOnList = () => {
    let name = document.getElementById('nameInput');
    
    if(name.value.length != 0){
        arrayNames.push(name.value);
        let item = document.createElement('option');
        for(let pos in arrayNames){
            pos++;
            item.text= `${pos}. ${name.value} `;
            listDisplay.appendChild(item);
        }
        name.value ='';
        name.focus();
    }else{
        alert("Digite um nome!");
        name.value ='';
        name.focus();
    }
}

const showArray = () => {

    //função para embaralhar o array
    shuffledArray = arrayNames.sort((a,b) => 0.5 - Math.random());

    if(shuffledArray.length==0 || shuffledArray.length < 2){
        alert('Impossível de embaralhar!');
    }else{
        clearDisplay();
        //Laço para mostrar a nova ordem no display
        for(let i = 0; i< shuffledArray.length; i++ ){ 
            let item = document.createElement('option');
            item.text= `${i+1}. ${shuffledArray[i]} `;  
            listDisplay.appendChild(item);  
        }
    }
}

const enterPressed = (event) => {
    if(event.keyCode === 13) addNameOnList();
}

const clearDisplay = () => {
    //Laço para limpar o display 
    for(i=listDisplay.length - 1; i>= 0; i--){
        listDisplay.remove(i);
    }
}

const resetDisplay = () => {
    for(i=listDisplay.length - 1; i>= 0; i--){
        listDisplay.remove(i);
    }

    shuffledArray.length =0;
    arrayNames.length =0;
}

randomizeButton.addEventListener('click', showArray);
addButton.addEventListener('click', addNameOnList);
document.addEventListener('keydown',  enterPressed);
resetDisplayButton.addEventListener('click',resetDisplay);