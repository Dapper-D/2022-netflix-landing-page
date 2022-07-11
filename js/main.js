const tabWords = document.querySelectorAll('.tab-word');
const tabContentWords = document.querySelectorAll('.tab-content-item');

//select tab content item

function selectItem(e){
    removeShow();
    
    //grab content item from the dom
    
    const tabContentWord = document.getElementById(`#${this.id}-content`);

    //add show class

    tabContentWord.classList.add('show');
}

function removeShow(){
    tabContentWords.forEach(item => item.classList.remove('show'))
}

//listen for tab click

tabWords.forEach(item=> item.addEventListener('click', selectItem));
