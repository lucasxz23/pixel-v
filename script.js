let menu = document.getElementById("menu")Add commentMore actions
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

//Função que vai abrir e fechar o menu 
function abreFechaMenu() {

    //Se o menu está fechado 
    if (menu.classList.contains("menu-fechado")) {
        //Abrir o menu
        menu.classList.remove("menu-fechado")

        //Mostra icone X
        iconeX.style.display = "inline"

        //Esconder o icone Barras
        iconeBarras.style.display = "none"
    }
    //Senão
    else {
        //Fechar o menu
        menu.classList.add("menu-fechado")

        //Esconder icone x
        iconeX.style.display = "none"

        //Mostrar icone barras
        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //Mostrar icone X
    iconeX.style.display = "inline"

    //Esconder icone barras
    iconeBarras.style.display = "none"
}