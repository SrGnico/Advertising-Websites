const body = document.body;

function changeTheme(x){
    body.className = `theme${x}`
};


const div = document.querySelectorAll('.texto');
const p = document.querySelectorAll('.texto-a-ocultar')
const ver = document.querySelectorAll('.vermas')

let toogle = true


function verMas(x) {
    if(toogle){
        div[x].style.height = '80svh'
        toogle = !toogle;
        p[x].style.opacity = '1';
        ver[x].innerHTML = "Ver menos <i class='bx bx-caret-up-circle' ></i>"
    }else{
        div[x].style.height = '50svh'
        toogle = !toogle;
        p[x].style.opacity = '0';
        ver[x].innerHTML = "Ver más <i class='bx bx-caret-down-circle' ></i>"
    }
}


let index = 1;

setInterval(showItems,5000, index);

function showItems(x){
    const items = document.querySelectorAll('.item');  
    
    
    if (index > items.length) {index = 1};

    for(let i = 0; i < items.length; i++){
        items[i].style.display = "none";
    }

    items[index-1].style.display = "flex";
    index++

}


