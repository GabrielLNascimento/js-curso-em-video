function carregar(){
var msg = window.document.getElementById('caixamsg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()



msg.innerHTML = `Neste Exato momento são ${hora} horas!!`

if (hora >= 0 && hora < 12){
    img.src = 'img/manha.jpeg'
    document.body.style.backgroundColor = '#F4C170'
} else {
    if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.jpeg'
        document.body.style.backgroundColor = '#CBA67E'
    } else {
        img.src = 'img/noite.jpeg'
        document.body.style.backgroundColor = '#1C273A'
        
    }
}

}