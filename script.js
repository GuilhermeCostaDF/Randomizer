const listDisplay = document.getElementById('listDisplay');
const addButton = document.getElementById('addButton');
const randomizeButton = document.getElementById('randomButton');
const arrayNames = [];

const addNameOnList = () => {
    let name = document.getElementById('nameInput');
    
    if(name.value.length != 0){
        arrayNames.push(name.value);
        let item = document.createElement('option');
        for(let pos in arrayNames){
            pos++;
            item.text= `${pos}. ${name.value} `;
        }
        listDisplay.appendChild(item);
        name.value ='';
        name.focus();
    }

    
    else{
        alert("Digite um nome!");
        name.value ='';
        name.focus();
    }
}

const showArray = () => {

    //função para embaralhar o array
    const shuffledArray = arrayNames.sort((a,b) => 0.5 - Math.random());
    
    //Laço para limpar o display 
    for(i=listDisplay.length - 1; i>= 0; i--){
        listDisplay.remove(i);
    }

        //Laço para mostrar a nova ordem no display
        for(let i = 0; i< shuffledArray.length; i++ ){ 
            let item = document.createElement('option');
            item.text= `${i+1}. ${shuffledArray[i]} `;  
            listDisplay.appendChild(item);  
        }
}

randomizeButton.addEventListener('click', showArray);
addButton.addEventListener('click', addNameOnList);