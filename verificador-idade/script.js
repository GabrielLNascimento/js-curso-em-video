function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique seus dados!!')
    }else {
        var msex = document.getElementsByName('sexoName')
        var idade = ano - Number(fAno.value)
        var genero = ' '
        var img = document.getElementById('foto')
        

        if (msex[0].checked) {
            genero = 'Homem'
            if (idade < 10){
                img.setAttribute('src', 'criancaM.jpeg')
            } else if (idade < 20){
                img.setAttribute('src', 'adolescenteM.jpg')
            } else if (idade < 60){
                img.setAttribute('src', 'homem.jpg')
            } else if (idade >= 60){
                img.setAttribute('src', 'velhoM.jpg')
            }
        } else if (msex[1].checked) {
            genero = 'Mulher'
            if (idade < 10){
                img.setAttribute('src', 'criancaF.jpg')
            } else if (idade < 20){
                img.setAttribute('src', 'adolescenteF.jpg')
            } else if (idade < 60){
                img.setAttribute('src', 'mulher.jpg')
            } else if (idade >= 60){
                img.setAttribute('src', 'velhaF.jpg')
            }
        }
       
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!!`
        
        
    }
    
}