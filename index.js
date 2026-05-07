/**
 * Jogo narrativo
 */

const prompt = require('prompt-sync')()
const colors = require('colors')

let opcao, jogador, resposta
let espada = 0


function mostrarMenu() {
    console.clear()
    console.log("─╔══╗───╔══╗╔╗──╔╗╔╗╔══╗───╔══╗─╔══╗───╔══╗─╔═══╗╔══╗╔═══╗╔══╗╔══╗─")
    console.log("─║╔╗║───╚╗╔╝║║──║║║║║╔╗║───║╔╗╚╗║╔╗║───║╔╗╚╗║╔═╗║║╔╗║║╔══╝║╔╗║║╔╗║─")
    console.log("─║╚╝║────║║─║║──║╚╝║║╚╝║───║║╚╗║║║║║───║║╚╗║║╚═╝║║╚╝║║║╔═╗║╚╝║║║║║─")
    console.log("─║╔╗║────║║─║║──║╔╗║║╔╗║───║║─║║║║║║───║║─║║║╔╗╔╝║╔╗║║║╚╗║║╔╗║║║║║─")
    console.log("─║║║║───╔╝╚╗║╚═╗║║║║║║║║───║╚═╝║║╚╝║───║╚═╝║║║║║─║║║║║╚═╝║║║║║║╚╝║─")
    console.log("─╚╝╚╝───╚══╝╚══╝╚╝╚╝╚╝╚╝───╚═══╝╚══╝───╚═══╝╚╝╚╝─╚╝╚╝╚═══╝╚╝╚╝╚══╝─")
    console.log("1. Começar o jogo")
    console.log("2. Manual")
    console.log("3. Sair")
}

function comprimentacao() {
    console.clear()
    console.log(`Em um mundo cheio de aventuras e magica havia um aventureiro chamado ${jogador}`)
    console.log(`Ele estava navegando em seu barco a procura de aventuras`)
    prompt(`Precione [ENTER] para continuar`.bgWhite)
}

//====================================================================================================
// ROTEIROS!!!!!
function historiaInicial() {
    console.clear()
    console.log(`Em uma noite tranquila ${jogador} estava em seu barco descansando sem enhuma preocipação.`)
    console.log("O mar estava inquieto naquela noite.")
    console.log("O aventureiro já havia enfrentado tempestades antes, mas aquela era diferente. O vento uivava como se estivesse vivo, e as ondas se erguiam como muralhas prontas para engolir o barco inteiro.")
    console.log("Relâmpagos rasgavam o céu, iluminando por breves segundos uma imensidão desconhecida. Foi nesse momento que ele percebeu… aquela não era uma tempestade comum.")
    console.log()
    console.log("A bússola girava sem controle.")
    console.log("O mapa já não fazia sentido.")
    console.log("E então, uma onda gigantesca atingiu o navio.")
    console.log()
    console.log("Madeira se partiu. Cordas se romperam. O mundo virou escuridão.")
    console.log("...")
    console.log("Silêncio")
    console.log("O som das ondas agora era distante.")
    console.log("Quando abriu os olhos, o aventureiro estava deitado na areia. Seu corpo doía, sua cabeça girava… e seu navio havia desaparecido.")
    console.log("")
    console.log("Ao se levantar, percebeu algo estranho.")
    console.log("Ao se levantar, percebeu algo estranho.")
    console.log("E, no fundo de sua mente, uma sensação inquietante surgia:")
    console.log("Ele não estava ali por acaso.")
    console.log()
    prompt(`Precione [ENTER] para continuar`.bgWhite)



}

function roteitoEscolha1() {
    console.clear()
    console.log(`Ao chegar na ilha, ${jogador} olha ao seu redor e não vê nada além de areia e uma imensa floresta em sua frente.`)
    console.log("Você decide então juntar recursos para a sua sobrevivência.")
    console.log()
    console.log("")
    console.log(`O que ${jogador} deveria fazer agora?`)
    console.log()
    console.log("1. Usar alguns dos recursos para construir uma jangada e tentar sair da ilha")
    console.log("2. Usar os recursos para construir uma cabana para passar a noite")
    console.log("3. Explorar mais")
    console.log()

}

function roteiroEscolha2(){
    console.log(`${jogador} acorda no meio da madrugada. Está tudo em silêncio, exceto pelo som distante das árvores se movendo.`)
    console.log("De repente, ele vê uma sombra estranha correndo rapidamente entre as árvores, como se estivesse fugindo ou tentando guiá-lo.")
    console.log(`Movido pela curiosidade, ${jogador} decide seguir a sombra pela floresta.`)
    console.log("Depois de caminhar por um tempo, ele chega a uma entrada de caverna escura e profunda. O ar ao redor é frio, e um som desconhecido vem de dentro dela.")
    console.log()
    console.log("Agora o jogador tera que fazer uma escolha muito importante")
    console.log("1. Entrar na caverna")
    console.log("2. Dar meia volta")
}
//====================================================================================================
// FUNÇÕES



function construiuCabana(){
    console.log("Voce entrou na cabana e se deitou")
    console.log("aos poucos pegando no sono ate cair no sono")
}


function abrirBau() {
    console.log("Depois de abrir o bau voce voltou e se deitou perto de uma arvore, caindo no sono")
}



iniciarJogo()
function iniciarJogo() {
    let executando = true

    while (executando) {
        mostrarMenu()
        let opcao = Number(prompt("Escolha uma opção: "))



        switch (opcao) {
            case 1:
                console.clear()
                console.log("Antes de começarmos informe seu nome abaixo.".bgBlack)
                jogador = prompt(">>")
                // sai do switch e continua o código normal
                executando = false
                break

            case 2:
                console.clear()
                console.log("Este é um jogo narrativo com o tema de aventura........")
                prompt("Pressione [ENTER] para voltar.".bgWhite)
                // volta pro menu (loop continua)
                break

            case 3:
                console.clear()
                console.log("OK! Até a próxima")
                prompt("Precione qualquer tecla para continuar. . .")
                break

            default:
                console.clear()
                console.log("Opção incorreta".bgRed)
                prompt(`Precione [ENTER] para voltar`.bgWhite)
                break
        }
    }
}

function primeiraEscolha() {
    let executando1 = true

    while (executando1) {
       roteitoEscolha1
        let opcao1 = Number(prompt("Escolha uma opção: "))



        switch (opcao1) {
            case 1:
                console.clear()
                console.log(`Depois de horas trabalhando com madeira, cipós e pedaços espalhados pela praia, ${jogador} finalmente consegue construir uma pequena jangada.`)
                console.log("Ela estava longe de ser perfeita.")
                console.log("As cordas pareciam frágeis, a madeira rangia a cada movimento e as ondas quase a desmontavam...")
                console.log("mas ainda era uma chance de escapar daquela ilha.")
                console.log(`Sem pensar duas vezes, ${jogador} empurra a jangada para o mar e começa a remar em direção ao horizonte.`)
                console.log("Por alguns instantes, tudo parecia dar certo.")
                console.log("Até que—")
                console.log("BANGGGG.")
                console.log("Algo invisível bloqueia o caminho.")
                console.log("A jangada é arremessada para trás enquanto pequenas ondas se espalham pelo impacto.")
                console.log(`Confuso, ${jogador} estende lentamente a mão e toca o vazio à sua frente.`)
                console.log("Uma barreira.")
                console.log("Transparente")
                console.log("Fria")
                console.log("Impossível de atravessar.")
                console.log("No momento do contato, uma voz profunda e distorcida ecoa ao redor:")
                console.log("Derrote-o... para conquistar sua liberdade...".bgBlue)
                console.log("O silêncio retorna imediatamente.")
                console.log(`O coração de ${jogador} dispara.`)
                console.log("Sem entender o que acabou de acontecer, ele retorna lentamente para a ilha.")
                prompt("Pressione [ENTER] para voltar.".bgWhite)
                break
            case 2:
                console.clear()
                console.log(`Percebendo que a noite estava se aproximando, ${jogador} decide usar os recursos coletados para construir uma pequena cabana.`)
                console.log("Com bastante esforço, ele reúne madeira, folhas e cipós encontrados pela praia e começa a montar um abrigo simples próximo à floresta.")
                console.log("O trabalho leva horas, mas antes do anoitecer a cabana finalmente fica pronta.")
                console.log("Ela não era grande nem muito confortável, porém seria suficiente para protegê-lo do vento frio durante a noite.")
                console.log(`Exausto após um longo dia, ${jogador} entra na cabana, se deita no chão improvisado e rapidamente pega no sono ao som das ondas do mar.`)
                console.log("Na manhã seguinte, os primeiros raios de sol atravessam as pequenas frestas da cabana.")
                console.log(`Depois de descansar pela primeira vez desde que chegou à ilha, ${jogador} acorda sentindo-se um pouco mais preparado para enfrentar o que vier pela frente.`)
                prompt("Pressione [ENTER] para continuar.".bgWhite)
                executando1 = false
                break
            case 3:
                console.clear()
                console.log(`Decidido a entender melhor a ilha, ${jogador} começa a explorar a enorme floresta diante da praia.`)
                console.log("À medida que avança entre as árvores, o som das ondas vai desaparecendo lentamente, substituído apenas pelo vento e pelo barulho das folhas sob seus pés.")
                console.log("Depois de caminhar por algum tempo, algo chama sua atenção no meio da mata.")
                console.log("Entre raízes e pedras cobertas de musgo, havia um baú de prata parcialmente enterrado no chão.")
                console.log("Mesmo coberto pela sujeira e pelo tempo, o objeto ainda brilhava intensamente sempre que a luz do sol atravessava as árvores.")
                console.log(`${jogador} se aproxima devagar, observando os detalhes gravados na superfície metálica do baú.`)
                console.log("Ele parecia antigo...")
                console.log("mas também importante.")
                console.log("E então voce abre esse bau e encontra uma espada de ouro")
                espada = 1
                prompt("Pressione [ENTER] para continuar.".bgWhite)

        }
    }
}

function segundaEscolha(){
      let executando = true

    while (executando2) {
        
        let opcao = Number(prompt("Escolha uma opção: "))



        switch (opcao2) {
            case 1:
                console.clear()
                console.log("Voce entrou na caverna e....")
                // sai do switch e continua o código normal
                executando = false
                break

            case 2:
                console.clear()
                console.log("VOce deu meia volta")
                console.log()
                console.log("Você perdeu a sua chance de escapar")
                console.log("e Ao dar meia volta você volta para a bera da praia e vive sobrevivendo")
                console.log("Ate o fim da sua vida")
                prompt("Pressione [ENTER] para voltar para a ultima situação.".bgRed)
                // volta pro menu (loop continua)
                break

            default:
                console.clear()
                console.log("Opção incorreta".bgRed)
                prompt(`Precione [ENTER] para voltar`.bgWhite)
                break
        }
    }
}

//====================================================================================================
//Executar funções
comprimentacao()

historiaInicial()

roteitoEscolha1()

primeiraEscolha()

