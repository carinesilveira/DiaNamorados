function fuja(){
    var btnNao = document.getElementById("nao") //Chamando o botão não
    var janelaLarg = window.innerWidth //largura maxima da pagina
    var janelaAlt = window.innerHeight //altura maxina da pagina
    var larXmax = janelaLarg - btnNao.offsetWidth //calculo para determinar o limite na tela (X=largura)
    var altYmax = janelaAlt - btnNao.offsetHeight
    var posicaoAleatoriaX = Math.floor(Math.random()*larXmax) //floor arredonda as posicoes, numero inteiro
    var posicaoAleatoriaY = Math.floor(Math.random()*altYmax)

    btnNao.style.left = posicaoAleatoriaX + "px"//estilizar o botão do lado esquerdo
    btnNao.style.top = posicaoAleatoriaY + "px"
}   
