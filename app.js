// Lateral Menu

let menu__visible = false;
let menu = document.getElementById("nav");
function showHideMenu(){
    if(menu__visible==false){ // si esta oculto
        menu.style.display = 'block';
        menu__visible = true;        
    }else{
        menu.style.display = 'none';
        menu__visible = false;
        
    }
}

// I hide the menu once I select an option
let links = document.querySelectorAll('nav a');
for(let x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = 'none';
        menu__visible = false;
    }
}

// create progress bars for a particular bar identified by its id
function createBar(id_bar){
    for(i=0; i<=20; i++){
        let div = document.createElement('div');
        div.className = 'e';
        id_bar.appendChild(div);
        
    }    
}

// I select all the general bars to later manipulate them
let html = document.getElementById('html');
createBar(html);
let javascript = document.getElementById('javascript');
createBar(javascript);
let typescript = document.getElementById('typescript');
createBar(typescript);
let react = document.getElementById('react');
createBar(react);
let redux = document.getElementById('redux');
createBar(redux);
let node = document.getElementById('node');
createBar(node);
let bootstrap = document.getElementById('bootstrap');
createBar(bootstrap);
let coreldraw = document.getElementById('coreldraw');
createBar(coreldraw);

//Now I am going to save the amount of bars that are going to be painted for each skill
//for that I use an array, each position belongs to an element
//start at -1 because it doesn't have any painted on startup

let counters = [-1,-1,-1,-1,-1,-1,-1,-1];
// I am going to use this variable as a flag to know if the animation has already been executed
let intro = false;

// function that applies the animations of the skills
function effectSkills(){
    let skills = document.getElementById('skills');
    let distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300 && intro==false){
        intro = true;
        const intervalHtml = setInterval(function(){
            paintBar(html, 17, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            paintBar(javascript, 14, 1, intervalJavascript);
        },100);
        const intervalTypescript = setInterval(function(){
            paintBar(typescript, 14, 2, intervalTypescript);
        },100);
        const intervalReact = setInterval(function(){
            paintBar(react, 16, 3, intervalReact);
        },100);
        const intervalRedux = setInterval(function(){
            paintBar(redux, 16, 4, intervalRedux);
        },100); 
        const intervalNode = setInterval(function(){
            paintBar(node, 16, 5, intervalNode);
        },100);
        const intervalBootstrap = setInterval(function(){
            paintBar(bootstrap, 17, 6, intervalBootstrap);
        },100);
        const intervalCoreldraw = setInterval(function(){
            paintBar(coreldraw, 16, 7, intervalCoreldraw);
        },100);         
    }
}

// I fill a particular bar with the indicated value
function paintBar(id_bar, amount, index, interval){
    counters[index]++;
    x = counters[index];
    if(x < amount){
        let elements = id_bar.getElementsByClassName('e');
        elements[x].style.backgroundColor = 'rgba(138,221,45,0.4)';        
    }else{
        clearInterval(interval)
    }
}

// I detect the scrolling of the mouse to apply the animation of the bar
window.onscroll = function(){
    effectSkills();
}