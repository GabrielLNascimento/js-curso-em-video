var num = window.document.getElementById('txtn')
var tabela = window.document.getElementById('seltab')
var valores = []
var res = document.getElementById('analise')

function isNum(n) {
    // Essa função vai verificar se o valor (n) está entre 1 e 100 => retorna em true...
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isLis(n, l) {
    // Ela verifica se o valor 'n' está presente na lista 'l'
    // verifica atravez do '-1' => -1 aparece quando o elemento não está na lista
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function clicar() {
     // Vai chamar as duas funções (isNum) e (isLis) esprando um 'true' como resposta
     // (!inLis) o ponto de exclamação => significa negação, eu não quero q o valor esteja na lista
    if(isNum(num.value) && !isLis(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} adicionado`
        tabela.appendChild(item)
        res.innerHTML = ' '
    } else {
        window.alert('[ERRO] favor, verifique os seus dados!!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('[ERRO] favor, verifique os seus dados!!')
    } else {
        add = valores.length


        res.innerHTML = ''
        res.innerText += `Possuem ${add} elementos nesta lista!`
        
        maior = -1
        let soma = 0
        
        for(let pos = 0; pos < valores.length; pos = pos + 1) {
            soma += valores[pos]
            valores.sort((a, b) => a - b)
            maior = maior + 1
        }

        let media = soma / add
        res.innerHTML += `<br>O número maior é: ${valores[maior]}`
        res.innerHTML += `<br>O número menor é: ${valores[0]}`
        res.innerHTML += `<br>A soma dos números é: ${soma}`
        res.innerHTML += `<br>A média desses números é: ${media}`
        
    }

    
}