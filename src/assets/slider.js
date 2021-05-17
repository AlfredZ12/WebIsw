
let contador = 0;
let tamañoWidth = 1360;
window.addEventListener("resize", function(){
    tamañoWidth = 1360;
});


function slidesnext(){
    if(contador<document.querySelectorAll('.slider-move').length -1){
    contador++;
    document.querySelector('.slider-contenedor').style.transform = 'translate('+ (- tamañoWidth * contador) + 'px)';
    document.querySelector('.slider-contenedor').style.transition = 'transform 1s';
    console.log(contador);
  

    if(contador === document.querySelectorAll('.slider-move').length){
        contador=2;
            document.querySelector('.slider-contenedor').style.transform = 'translate('+(document.querySelectorAll('.slider-move').length)+')';
            document.querySelector('.slider-contenedor').style.transition = 'transform 0s';
        
    }}
}

function slidesback(){
    if(contador>0){
    contador--;
    document.querySelector('.slider-contenedor').style.transform = 'translate('+ (- tamañoWidth * contador) + 'px)';
    document.querySelector('.slider-contenedor').style.transition = 'transform 1s';
    console.log(contador);
    if(contador ===0){
        document.querySelector('.slider-contenedor').style.transform = 'translate(0)';
        document.querySelector('.slider-contenedor').style.transition = 'transform 1s';
        contador=0;
    }}
}