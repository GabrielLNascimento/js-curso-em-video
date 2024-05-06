function clicar() {
    var num = window.document.getElementById('txtTabuada')
    var tabela = window.document.getElementById('seltab')
    
    if (num.value.length == 0) {
        window.alert('[ERRO] favor digitar um número!!')
    } else {
        let c = Number(num.value)

        tabela.innerHTML = ' ' // vai limpar a tabela

        for(c = 1; c <= 10; c = c + 1) {
            let item = document.createElement('option')
            item.text = `${num.value} x ${c} = ${num.value*c}` // adiciona o texto
            tabela.appendChild(item)

            // appendChild => adicionar um elemento filho (elemento dentro do elemento)


        }
    }
    
    
}

