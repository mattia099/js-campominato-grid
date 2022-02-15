
const buttonPlay = document.getElementById('play');
const selectDifficult = document.getElementById('difficult');
const grid = document.querySelector('.grid');

buttonPlay.addEventListener('click', function(){
    reset();
    switch (selectDifficult.value){
        case 'easy':
            console.log(selectDifficult.value);
            boxGenerator(100,10);
            break;

        case 'medium':
            console.log(selectDifficult.value);
            boxGenerator(81,9);
            break;
        
        case 'crazy':
            console.log(selectDifficult.value);
            boxGenerator(49,7);
            break;    
    }

})

function boxGenerator(nBox , nCol){
    for(let i=0; i<nBox; i++){
        var box = document.createElement('div');
        box.classList.add('square');
        box.append(i+1);
        box.style.width = `calc(100% / ${nCol})`;
        grid.appendChild(box); 
    }
}

function reset(){ grid.innerHTML = '';}

grid.addEventListener('click', function(event){
    event.target.style.background = 'blue';
    event.target.style.color = 'white';
})



