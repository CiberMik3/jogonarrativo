/**
 * Jogo narrativo
 */

const prompt = require('prompt-sync')()
const colors = require('colors')

let opcao, jogador, resposta


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
    console.log(`Ele estava navegando pelos mares a procura de aventuras`)
}

//============================================================
//JOGO
function historiaInicial(){
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
    prompt(`Precione [ENTER] para continuar`)
    console.log()

}

function desafio1(){
    console.log("texto teste")
}


iniciarJogo()
function iniciarJogo() {
    
        mostrarMenu()
        opcao = Number(prompt("Escolha uma opção: "))
        switch (opcao) {
            case 1:
                console.log("Antes de começarmos informe seu nome abaixo.")
                jogador = prompt(">>")
                return
            case 2:
                console.clear()
                console.log("Este e um jogo narrativo com o tema de aventura........")
                prompt("Precione [ENTER] para voltar.")
                break
            case 3:
                console.log("OK! Até a proxima".bgGreen)
                return

            default:
                console.log("Opção incorreta".red)

                break
        }
        iniciarJogo()
    } while (true);


if (opcao === 3 || opcao === 2) {
    iniciarJogo()
} else {
    comprimentacao()
    prompt(`Precione [ENTER] para continuar`)
}

historiaInicial()

desafio1()

