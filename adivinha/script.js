let resposta = Math.floor(Math.random() * 101) 
let btn = document.getElementById('recomecar')
btn.style.display = 'none'

let msg = document.getElementById('demo')
let numero = document.getElementById('input_number')

function recomecar(){
    msg.textContent = ''
    numero.value = ''
    resposta = -1
    resposta = Math.floor(Math.random() * 101)
    btn.style.display = 'none'
}


function checar(){
    let tentativa = parseInt(document.getElementById('input_number').value)

    if (isNaN(tentativa) || tentativa < 0 || tentativa > 100){
        window.alert('Digite um número valido entre 0 e 100');
    } else {
        if(tentativa == resposta){
            msg.textContent = resposta + ' => Parabéns... Você acertouuu!!'
            btn.style.display = 'inline'
        } else{
            if (tentativa > resposta){
                msg.textContent = tentativa + ' => Tente um valor mais baixo...'
                numero.value = ''
            } else {
                if (tentativa < resposta){
                    msg.textContent = tentativa + ' => Tente um valor mais alto...'
                    numero.value = ''
                }
            }
        }

    }
    
}

