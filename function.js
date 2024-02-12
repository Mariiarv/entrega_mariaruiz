let boton= document.getElementById('botonmenu')

boton.addEventListener('click', cambiarcolores)

function cambiarcolores(){
    document.documentElement.style.setProperty('--sideBGColor','orange')
    document.documentElement.style.setProperty('--themeColor','yellow')
    document.documentElement.style.setProperty('--iconBGColor','light-grey')
    document.documentElement.style.setProperty('--textColor','black')
    document.documentElement.style.setProperty('--bgColor', 'pink')
}

