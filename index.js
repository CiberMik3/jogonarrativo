/**
 * Jogo narrativo
 */

const prompt = require('prompt-sync')()
const colors = require('colors')

let opcao, jogador, resposta
let espada = 0


function mostrarMenu() {
    console.clear()
    console.log("─╔══╗───╔══╗╔╗──╔╗╔╗╔══╗───╔══╗─╔══╗───╔══╗─╔═══╗╔══╗╔═══╗╔══╗╔══╗─".cyan)
    console.log("─║╔╗║───╚╗╔╝║║──║║║║║╔╗║───║╔╗╚╗║╔╗║───║╔╗╚╗║╔═╗║║╔╗║║╔══╝║╔╗║║╔╗║─".cyan)
    console.log("─║╚╝║────║║─║║──║╚╝║║╚╝║───║║╚╗║║║║║───║║╚╗║║╚═╝║║╚╝║║║╔═╗║╚╝║║║║║─".cyan)
    console.log("─║╔╗║────║║─║║──║╔╗║║╔╗║───║║─║║║║║║───║║─║║║╔╗╔╝║╔╗║║║╚╗║║╔╗║║║║║─".cyan)
    console.log("─║║║║───╔╝╚╗║╚═╗║║║║║║║║───║╚═╝║║╚╝║───║╚═╝║║║║║─║║║║║╚═╝║║║║║║╚╝║─".cyan)
    console.log("─╚╝╚╝───╚══╝╚══╝╚╝╚╝╚╝╚╝───╚═══╝╚══╝───╚═══╝╚╝╚╝─╚╝╚╝╚═══╝╚╝╚╝╚══╝─".cyan)
    console.log("                        1. Começar o jogo")
    console.log("                           2. Manual")
    console.log("                            3. Sair")
}

function comprimentacao() {
    console.clear()
    console.log(`Em um mundo cheio de aventuras e magica havia um aventureiro chamado ${jogador}`)
    console.log(`Ele estava navegando em seu barco a procura de aventuras`)
    prompt(`Precione [ENTER] para continuar`.bgWhite)
}

//====================================================================================================
// ROTEIROS!!!!!

//- - - COMEÇO - - -
function historiaInicial() {
    console.clear()
    console.log(`Em uma noite tranquila ${jogador} estava em seu barco descansando sem nenhuma preocupação.`)
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
    console.log("Quando abriu os olhos, o aventureiro estava deitado na areia. Seu corpo doía, sua cabeça girava… e seu barco havia desaparecido.")
    console.log("")
    console.log("Ao se levantar, percebeu algo estranho.")
    console.log("E, no fundo de sua mente, uma sensação inquietante surgia:")
    console.log("Ele não estava ali por acaso.")
    console.log()
    prompt(`Precione [ENTER] para continuar`.bgWhite)



}

//- - - BEIRA DA PRAIA - - -

function roteitoEscolha1() {
    console.clear()
    console.log(`Ao chegar na ilha, ${jogador} olha ao seu redor e não vê nada além de areia e uma imensa floresta em sua frente.`)
    console.log("Você decide então juntar recursos para a sua sobrevivência.")
    console.log()
    prompt(`Precione [ENTER] para continuar`.bgWhite)
}

//- - - A FLORESTA NEVOADA - - -

function roteiroescolha2() {
    console.clear()
    console.log(`Após descobrir que a barreira invisível o impede de fugir da ilha, ${jogador} começa a explorar a praia em busca de respostas. Enquanto caminha próximo da floresta, ele vê uma sombra correndo rapidamente entre as árvores.`)
    console.log("Sem pensar muito, decide seguir a figura misteriosa.")
    console.log()
    console.log("Quanto mais avança, mais a floresta fica escura e coberta por uma névoa densa. Sons estranhos ecoam entre as árvores, e em certos momentos parece que algo o observa na escuridão.")
    console.log()
    console.log(`Logo ${jogador} percebe que está perdido.`)
    console.log()
    console.log("A única pista para sair dali é um rio que corta a floresta.")
    console.log("Se errar o caminho muitas vezes, a névoa o consumirá para sempre.".red)
    console.log()
    console.log(`Após escapar da floresta, ${jogador} encontra uma tocha antiga, pegadas gigantes queimadas no chão e um mapa apontando para uma montanha distante. Ao longe, um rugido monstruoso ecoa pela ilha.`)
    console.log()
    prompt(`Precione [ENTER] para continuar`.bgWhite)
}

//- - - A CAVERNA SOMBRIA - - - 

function roteiroEscolha3() {
    console.clear()
    console.log(`Depois de atravessar a Floresta da Névoa, ${jogador} finalmente encontra uma abertura entre as rochas. A entrada da caverna é enorme, escura e fria, como se estivesse “respirando” lentamente.`)
    console.log()
    console.log("O vento que sai de dentro dela traz um cheiro de queimado e algo antigo, como cinzas e metal. O silêncio ao redor fica pesado demais, como se a própria ilha estivesse prendendo a respiração.")
    console.log()
    console.log(`Diante da entrada, ${jogador} sente que algo o observa lá dentro.`)
    console.log()
    prompt(`Precione [ENTER] para continuar`.bgWhite)
}

//- - - LAR DO DRAGÃO - - -
function roteiroescolha4() {

}
//- - - BATALHA - - - 
function roteiroescolha5() {
    console.log(`Ao atravessar a CAVERNA SOMBRIA, ${jogador} sente o ar ficar mais quente e pesado. As paredes começam a brilhar com veias de luz dourada, como se a própria montanha estivesse viva. Cada passo ecoa por um salão gigantesco escondido no coração da ilha.`)
    console.log("No centro desse enorme salão subterrâneo, existe um lago de lava cristalina e ruínas antigas cobertas por símbolos desconhecidos. O silêncio é absoluto… até que ele é quebrado por um som que parece rasgar o próprio ar.")
    console.log("Um rugido triplo ecoa pela caverna.")
    console.log("Das sombras, surge um dragão celestial de três cabeças, com escamas brilhando como estrelas e olhos que parecem conter tempestades inteiras. O chão treme enquanto suas asas se abrem, bloqueando toda a saída.")
    console.log(`${jogador} agora tem três escolhas:`)
    prompt(`Precione [ENTER] para continuar`.bgWhite)
}
//- - - FINALBOM - - -
function roteiroFinalBom() {
    prompt(`Precione [ENTER] para continuar`.bgWhite)
}
//- - - FINALRUIM - - -
function roteiroFinalRuim() {
    prompt(`Precione [ENTER] para continuar`.bgWhite)
}

function parabens() {
    console.log(`${jogador} apos matar o dragão o jogador foge da caberna e entra em sua jangada`)
    console.log("ele pega a sua jangada e tenta seguir em frente")
    console.log("ao navegar ele percebe que as barreiras nao exitem mais e fica super animado")
    console.log("ele segue em frente... pronto para a proxima aventira")
    prompt(`Precione [ENTER] para continuar`.bgWhite)
}

function agradecimento() {
    console.log("OBRIGADO POR JOGAR")
    console.log()
    console.log("~Mike de oliveira")
}
//====================================================================================================
// FUNÇÕES


// CABANA
function construiuCabana() {
    console.log("Voce entrou na cabana e se deitou")
    console.log("aos poucos pegando no sono ate cair no sono")
}

// BAU
function abrirBau() {
    console.log("Depois de abrir o bau voce voltou e se deitou perto de uma arvore, caindo no sono")
}


// MENU DO JOGO
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
                console.log("Este é um jogo narrativo com o tema de aventura, onde o jogo lhe dara opções e você tera que escolher uma ate chegar ao final")
                console.log("boa sorte hehe")
                prompt("Pressione [ENTER] para voltar.".bgWhite)
                // volta pro menu (loop continua)
                break

            case 3:
                console.clear()
                console.log("OK! Até a próxima")
                process.exit()

            default:
                console.clear()
                console.log("Opção incorreta".bgRed)
                prompt(`Precione [ENTER] para voltar`.bgWhite)
                break
        }
    }
}

// ESCOLHAS =BEIRA DA PRAIA=
function primeiraEscolha() {
    let executando1 = true
    let tentativas = 0
    let barreiraaa = 0
    while (executando1) {

        console.clear()
        console.log(`O que ${jogador} deveria fazer agora?`)
        console.log()
        console.log("[1] Usar alguns dos recursos para construir uma jangada e tentar sair da ilha")
        console.log("[2] Usar os recursos para construir uma cabana para passar a noite")
        console.log("[3] Explorar mais")
        let opcao1 = Number(prompt("Escolha uma opção: "))



        switch (opcao1) {
            case 1:
                if (barreiraaa >= 1) {


                    console.clear()
                    console.log("\nVocê tenta mais uma vez, mais sua jangada bate na barreira e quebra")
                    console.log("Ela afunda e você morre afogado...")
                    console.log("\n=== GAME OVER ===")

                    process.exit()
            }
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
                console.log("Uma barreira.")
                console.log("Impossível de atravessar.")
                console.log("No momento do contato, uma voz profunda e distorcida ecoa ao redor:")
                console.log("Derrote-o... para conquistar sua liberdade...".bgBlue)
                console.log("O silêncio retorna imediatamente.")
                console.log(`O coração de ${jogador} dispara.`)
                console.log("Sem entender o que acabou de acontecer, ele retorna lentamente para a ilha.")
                prompt("Pressione [ENTER] para voltar.".bgWhite)
                barreiraaa++
                continue
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

            if (tentativas >= 1) {


                    console.clear()
                    console.log("\nVocê tenta explorar novamente mais acaba caindo em uma armadilha")
                    console.log("um buraco fundo do qual você nao consegue mais sair...")
                    console.log("\n=== GAME OVER ===")

                    process.exit()
            }
                console.clear()
                console.log(`Decidido a entender melhor a ilha, ${jogador} começa a explorar a enorme floresta diante da praia.`)
                console.log("À medida que avança entre as árvores, o som das ondas vai desaparecendo lentamente, substituído apenas pelo vento e pelo barulho das folhas sob seus pés.")
                console.log("Depois de caminhar por algum tempo, algo chama sua atenção no meio da mata.")
                console.log("Entre raízes e pedras cobertas de musgo, havia um baú de prata parcialmente enterrado no chão.")
                console.log("Mesmo coberto pela sujeira e pelo tempo, o objeto ainda brilhava intensamente sempre que a luz do sol atravessava as árvores.")
                console.log(`${jogador} se aproxima devagar, observando os detalhes gravados na superfície metálica do baú.`)
                console.log("Ele parecia antigo...")
                console.log("mas também importante.")
                console.log("E então voce abre esse bau e encontra A ESPADA DE OURO SAGRADA".bgYellow)
                espada = 1
                console.log("")
                prompt("Pressione [ENTER] para continuar.".bgWhite)

                tentativas++

                }

        }
    }


// ESCOLHAS =FLORESTA NEVOADA=
function segundaEscolha() {
    let desafioCompleto = false
    let tentativas = 0

    console.clear()

    console.log("=== FLORESTA DA NÉVOA ===")
    console.log("Uma névoa densa cobre toda a floresta.")
    console.log("Você quase não consegue enxergar alguns metros à frente.")
    console.log("Enquanto anda, sons estranhos ecoam entre as árvores...\n")

    while (!desafioCompleto) {

        console.log(`O que ${jogador} deveria fazer agora?`)
        console.log()
        console.log("[1] Ir pela esquerda")
        console.log("[2] Ir pela direita")
        console.log("[3] Seguir o rio")

        let escolha = prompt(">> ")

        switch (escolha) {

            case "1":

                console.clear()

                console.log("Você segue pela esquerda.")
                console.log("Os sons ficam mais altos...")
                console.log("Depois de alguns minutos, percebe que voltou ao mesmo lugar.")

                tentativas++

                console.log(`\nTentativas erradas: ${tentativas}/3`)

                if (tentativas >= 3) {

                    console.log("\nA névoa consome completamente sua visão.")
                    console.log("Você se perde na floresta para sempre...")
                    console.log("\n=== GAME OVER ===")

                    process.exit()
                }

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break


            case "2":

                console.clear()

                console.log("Você segue pela direita.")
                console.log("A névoa fica ainda mais densa.")
                console.log("Algo se move entre as árvores.")
                console.log("Você corre assustado e tropeça em raízes.")

                tentativas++

                console.log(`\nTentativas erradas: ${tentativas}/3`)

                if (tentativas >= 3) {

                    console.log("\nA névoa consome completamente sua visão.")
                    console.log("Você se perde na floresta para sempre...")
                    console.log("\n=== GAME OVER ===")

                    process.exit()
                }

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break


            case "3":

                console.clear()

                console.log("Você decide seguir o som da água.")
                console.log("O rio guia você para fora da parte mais densa da floresta.")
                console.log("Após alguns minutos de caminhada...")
                console.log("Você encontra uma tocha antiga e um mapa incompleto da ilha.")

                console.log("\nVocê conseguiu atravessar a Floresta da Névoa!")

                desafioCompleto = true

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break


            default:

                console.clear()

                console.log("Escolha inválida.")

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break
        }
    }

    console.log("Você segue em direção às ruínas antigas da ilha...")

}

// ESCOLHAS =A CAVERNA SOMBRIA=
function terceiraEscolha() {
    let desafioCompleto = false
    let tentativas = 0

    console.clear()

    console.log("=== A CAVERNA SOMBRIA ===".bgBlack)
    console.log("Você está diante da entrada de uma caverna enorme e escura.")
    console.log("Um vento frio sai de dentro dela, como um suspiro profundo.")
    console.log("A escuridão parece te observar...\n")

    while (!desafioCompleto) {

        console.log(`O que ${jogador} deveria fazer agora?`)
        console.log()
        console.log("[1] Dar meia volta")
        console.log("[2] Procurar outro caminho ao redor")
        console.log("[3] Entrar na CAVERNA SOMBRIA")

        let escolha = prompt(">> ")

        switch (escolha) {

            case "1":

                console.clear()

                console.log("Você tenta voltar pelo caminho que veio...")
                console.log("Mas a trilha já não parece a mesma.")
                console.log("A floresta ao redor parece ter mudado.")

                tentativas++

                console.log(`\nTentativas: ${tentativas}/3`)

                if (tentativas >= 3) {
                    console.log("\nA ilha não permite sua fuga.")
                    console.log("A névoa te engole completamente...")
                    console.log("\n=== GAME OVER ===")
                    process.exit()
                }

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break


            case "2":

                console.clear()

                console.log("Você tenta contornar a entrada da caverna...")
                console.log("Mas encontra apenas pedras e um caminho bloqueado.")
                console.log("O ar fica cada vez mais pesado.")

                tentativas++

                console.log(`\nTentativas: ${tentativas}/3`)

                if (tentativas >= 3) {
                    console.log("\nA ilha não permite sua fuga.")
                    console.log("A névoa te engole completamente...")
                    console.log("\n=== GAME OVER ===")
                    process.exit()
                }

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break


            case "3":

                console.clear()

                console.log("Você respira fundo...")
                console.log("E decide entrar na CAVERNA SOMBRIA.")
                console.log("A escuridão te engole por completo.")
                console.log("Lá dentro, algo se move no silêncio...")

                console.log("\nVocê avançou para o próximo desafio!")

                desafioCompleto = true

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break


            default:

                console.clear()

                console.log("Escolha inválida.")

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break
        }
    }

    console.log("Você adentra cada vez mais fundo na CAVERNA SOMBRIA...")
}

// ESCOLHAS =LAR DO DRAGÃO=
function quartaEscolha() {

    let desafioCompleto = false
    let tentativas = 0
    let preocurar = 0

    console.clear()

    console.log("=== O LAR DO DRAGÃO ===".bgRed)
    console.log("Você entra no coração da caverna...")
    console.log("O ar fica quente e pesado.")
    console.log("Um rugido triplo ecoa pela escuridão...\n")

    while (!desafioCompleto) {

        console.log("\nO dragão celestial de 3 cabeças surge diante de você!")
        console.log("O que você faz?")
        console.log("[1] Fugir")
        console.log("[2] Lutar")
        console.log("[3] Procurar por algo")

        let escolha = prompt(">> ")

        switch (escolha) {

            case "1":

                console.clear()

                console.log("Você tenta fugir...")
                console.log("Mas o dragão bloqueia a saída com suas asas gigantes.")
                console.log("Não há escapatória.")

                tentativas++

                console.log(`\nTentativas: ${tentativas}/2`)

                if (tentativas >= 2) {
                    console.log("\nO dragão não demonstra piedade...")
                    console.log("Você é consumido pelas chamas celestiais.")
                    console.log("\n=== GAME OVER ===")
                    process.exit()
                }

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break


            case "2":

                console.clear()

                if (espada === 0) {

                    console.log("Você tenta lutar com as mãos vazias...")
                    console.log("O dragão reage instantaneamente.")
                    console.log("Um rugido destrói tudo ao seu redor.")

                    console.log("\nVocê não tinha chance nenhuma...")
                    console.log("\n=== GAME OVER ===")

                    process.exit()

                } else {

                    console.log("Você puxa sua espada!")
                    console.log("O brilho da lâmina reflete a luz da caverna.")
                    console.log("Você desvia de um ataque e acerta o dragão!")

                    console.log("\nO dragão fica ATORDOADO!")
                    console.log("Agora ele está vulnerável...")

                    desafioCompleto = true
                }

                prompt("\nPressione ENTER para continuar...")

                if (preocurar >= 3) {
                    console.log("\nVocê tenta procurar novamente mais o dragão percebe.")
                    console.log("Ele se infurece e lança uma rajada de fogo que te queima até a morte...")
                    console.log("\n=== GAME OVER ===")
                    process.exit()
                }

                console.clear()

                break


            case "3":

                console.clear()

                if (espada === 0) {

                    console.log("Você procura ao redor da caverna...")
                    console.log("Entre os escombros, você encontra um ARCO MÁGICO!")
                    console.log("Ele brilha com energia celestial.")

                    console.log("\nVocê agora tem uma nova arma!")
                    espada = 1 // (tratando como 1 para simplificar o sistema)

                } else {

                    console.log("Você procura ao redor...")
                    console.log("Mas não encontra nada útil.")
                    console.log("A caverna parece vazia, como se já tivesse sido saqueada.")
                }

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break


            default:

                console.clear()

                console.log("Escolha inválida.")

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break
        }
    }

    console.log("O dragão cambaleia...")
    console.log("A batalha ainda não terminou...")
}

//derrotar o dragao
function quintaescolha() {

    let desafioCompleto = false
    let tentativas = 0

    console.clear()

    console.log("=== O DRAGÃO CELESTIAL DE 3 CABEÇAS ===".red)
    console.log("A criatura desperta completamente.")
    console.log("O chão treme. O ar queima. Não há saída fácil...\n")

    while (!desafioCompleto) {

        console.log("\nO dragão te encara com fúria absoluta.")
        console.log("O que você faz?")
        console.log("[1] Fugir")
        console.log("[2] Atacar")

        let escolha = prompt(">> ")

        switch (escolha) {

            case "1":

                console.clear()

                console.log("Você tenta fugir desesperadamente...")
                console.log("Mas escorrega no chão da caverna.")
                console.log("O som alerta o dragão imediatamente.")

                console.log("\nEm um único rugido, tudo acaba.")
                console.log("\n=== GAME OVER ===")

                process.exit()


            case "2":

                console.clear()

                console.log("Você decide encarar o dragão!")
                console.log("As três cabeças atacam ao mesmo tempo...")
                console.log("Você desvia no último instante e encontra uma abertura.")

                console.log("\nVocê acerta um ponto vital entre as escamas!")

                console.log("O dragão grita e começa a cair...")
                console.log("A ilha inteira treme enquanto ele desaba.")

                console.log("\nVocê derrotou o Dragão Celestial!")

                console.log("Uma passagem se abre no céu da caverna...")
                console.log("Você e Jan conseguem escapar da ilha.")

                console.log("\n=== FINAL: ESCAPE DA ILHA ===")

                desafioCompleto = true

               
                console.clear()

                break


            default:

                console.clear()

                console.log("Escolha inválida.")

                tentativas++

                if (tentativas >= 3) {
                    console.log("\nO dragão perde a paciência...")
                    console.log("Você é destruído sem piedade.")
                    console.log("\n=== GAME OVER ===")
                    process.exit()
                }

                prompt("\nPressione ENTER para continuar...")
                console.clear()

                break
        }
    }

}

//batalha
function batalhaDragao() {

    console.clear()

    console.log("=== O DRAGÃO CELESTIAL DE 3 CABEÇAS ===")
    console.log("O monstro te encara com olhos cósmicos.")
    console.log("O chão treme a cada movimento.\n")

    console.log("O que você faz?")
    console.log("[1] Fugir")
    console.log("[2] Atacar")

    let escolha = prompt(">> ")

    switch (escolha) {

        case "1":

            console.clear()

            console.log("Você tenta fugir desesperadamente...")
            console.log("Mas escorrega no chão irregular da caverna.")
            console.log("O barulho chama a atenção do dragão...")

            console.log("\nEle te percebe imediatamente.")

            fimDeJogo(false)

            break


        case "2":

            console.clear()

            console.log("Você avança contra o dragão!")
            console.log("O rugido dele ecoa pela caverna inteira.")
            console.log("Você desvia de um ataque e encontra uma abertura...")

            console.log("\nVocê acerta um ponto vital entre as escamas!")

            fimDeJogo(true)

            break


        default:

            console.clear()

            console.log("Escolha inválida.")

            prompt("\nPressione ENTER para tentar novamente...")
            batalhaDragao()
    }
}

//ganhar ou perder
function fimDeJogo(vitoria) {

    console.clear()

    if (vitoria) {

        console.log("🏆 VOCÊ VENCEU!")
        console.log("O dragão cai derrotado diante de você.")
        console.log("A ilha começa a ruir, e uma saída se abre no céu.")
        console.log("Você consegue fugir da ilha com a sua jangada.")

        console.log("\n=== FINAL: A ESCAPE ===")
    } else {

        console.log("💀 VOCÊ FALHOU COMO AVENTUREIRO")
        console.log("O dragão consome sua última esperança.")
        console.log("A ilha engole sua história para sempre.")

        console.log("\n=== GAME OVER ===")
    }

    process.exit()
}

//====================================================================================================
//Executar funções
comprimentacao()

historiaInicial()

primeiraEscolha()

roteiroescolha2()
segundaEscolha()

roteiroEscolha3()
terceiraEscolha()

roteiroescolha4()
quartaEscolha()

quintaescolha()
batalhaDragao()
fimDeJogo()
parabens()
