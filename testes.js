const prompt = require('prompt-sync')()

function cavernaSombria() {

    let desafioCompleto = false
    let tentativas = 0

    console.clear()

    console.log("=== A CAVERNA SOMBRIA ===")
    console.log("Você está diante da entrada de uma caverna enorme e escura.")
    console.log("Um vento frio sai de dentro dela, como um suspiro profundo.")
    console.log("A escuridão parece te observar...\n")

    while (!desafioCompleto) {

        console.log("\nO que você faz?")
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

cavernaSombria()