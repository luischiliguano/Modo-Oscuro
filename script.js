let temaSeleccionado = 'claro';
document.getElementById('boton').addEventListener('click', function(){
    if(temaSeleccionado === 'claro'){
        document.body.classList.replace('temaClaro', 'temaOscuro');
        temaSeleccionado = 'oscuro';
    }
    else{
        document.body.classList.replace('temaOscuro', 'temaClaro');
        temaSeleccionado = 'claro';
    }
});