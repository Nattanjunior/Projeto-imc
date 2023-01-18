var botao = document.getElementById('botao')
botao.addEventListener('click', clicar)
function clicar(){
    var c1 = document.getElementById('inome')
    var c2 = document.getElementById('ialtura')
    var c3 = document.getElementById('ipeso')
    var res = document.getElementById('res')
    var nome = (c1.value)
    var altura = Number(c2.value)
    var peso = Number(c3.value)
    var div = peso / (altura * altura).toFixed(1)
    if (nome !== '' && altura !== '' && peso !== '') {
        if (div <= 17 ) {
            res.innerHTML = `${nome} , seu IMC é ${div} você está muito abaixo do peso!`            
        } else if( div > 17 && div < 18) {
            res.innerHTML = `${nome}  seu IMC é ${div} , você está abaixo do peso!`
        } else if(div >= 18 && div <= 25){
            res.innerHTML = `${nome}  seu IMC é ${div} , peso normal!`
        }else if (div > 25 && div <= 30){
            res.innerHTML = `${nome} seu IMC é ${div} , acima do peso!`
        }else if(div > 30 && div <= 35){
            res.innerHTML = `${nome} seu IMC é ${div} , Obesidade I`
        }else if(div > 35 && div <= 40){
            res.innerHTML = `${nome} seu IMC é ${div} , Obesidade II (severa)`
        }else if(div > 40){
            res.innerHTML = `${nome} seu IMC é ${div} , Obesidade III (mórbida)`
        }
    }else{
        res.innerHTML = 'Preencha todos os campos'
    }
}