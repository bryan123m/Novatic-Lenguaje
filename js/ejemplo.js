function mostraralerta(){
    alert("Hizo click");
}

function hacerclick(){
    document.getElementsByClassName('p')[0].onclick=mostraralerta;
}

window.onload=hacerclick;