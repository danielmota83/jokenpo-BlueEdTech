console.clear();
const prompt = require('prompt-sync')();

console.log(
    'Este é o JOKENPÔ! \nO Jokenpô é o popular jogo do "pedra, papel e tesoura".\nA premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.',
);
console.log();
console.log('Pedra ganha da tesoura, mas perde para o papel;');
console.log('Tesoura ganha do papel, mas perde para a pedra;');
console.log('Papel ganha da pedra, mas perde para a tesoura.');
console.log();

let nomeUsuario = prompt(
    'Para começar a jogar, por favor, digite o seu nome: ',
);

inicio: while (true) {
    let numeroDeRodadas = 0;
    let empate = 0;
    let usuario = 0;
    let computador = 0;

    while (true) {
        numeroDeRodadas = +prompt(
            'Digite o numero de rodadas que você deseja jogar:  ',
        );
        if (isNaN(numeroDeRodadas)) {
            console.log('Entrada inválida, por favor digite apenas números');
        } else {
            break;
        }
    }

    let escolhaDoUsuario = '';

    for (let rodadas = 1; rodadas <= numeroDeRodadas; rodadas++) {
        while (true) {
            escolhaDoUsuario = prompt(
                'Pedra, papel ou tesoura? ',
            ).toLowerCase();
            if (
                escolhaDoUsuario !== 'pedra' &&
                escolhaDoUsuario !== 'papel' &&
                escolhaDoUsuario !== 'tesoura'
            ) {
                console.log(
                    'Você pode escolher apenas entre as opções "pedra", "papel" ou "tesoura"',
                );
                console.log('Mas não se preocupe, apenas responda novamente');
            } else {
                console.log();
                console.log(`A sua escolha foi ${escolhaDoUsuario}`);
                break;
            }
        }

        const opcoes = ['pedra', 'papel', 'tesoura'];
        let escolhaDoComputador = opcoes[Math.floor(Math.random() * 3)];
        console.log(
            `E a escolha do computador foi ${escolhaDoComputador}, logo: `,
        );

        if (escolhaDoUsuario == escolhaDoComputador) {
            empate++;
            console.log(`O resultado da rodada ${rodadas} é: empate!`);
        } else if (
            (escolhaDoUsuario == 'pedra' && escolhaDoComputador == 'tesoura') ||
            (escolhaDoUsuario == 'papel' && escolhaDoComputador == 'pedra') ||
            (escolhaDoUsuario == 'tesoura' && escolhaDoComputador == 'papel')
        ) {
            usuario++;
            console.log(`O resultado da rodada ${rodadas} é: usuário ganhou!`);
        } else {
            computador++;
            console.log(
                `O resultado da rodada ${rodadas} é: computador ganhou!`,
            );
        }
        console.log();
        console.log(
            `Fim desta rodada, pressione enter para jogar novamente, caso tenha mais rodadas para jogar, ou para mostrar o resultado final.`,
        );
        prompt();
        console.log();
    }

    console.log('O resultado do jogo foi:');
    console.log(
        `${empate} Empates, ${computador} vitórias do computador e ${usuario} vitórias de ${nomeUsuario}`,
    );
    if (computador == usuario) {
        console.log('Você e o computador tiveram o mesmo número de vitórias.');
    } else if (usuario > computador) {
        console.log('Parabéns, você foi o grande vencedor :)');
    } else {
        console.log('O computador foi o grande vencedor :(');
    }

    while (true) {
        let jogarNovamente = prompt(
            'Então, me conta aí, deseja jogar novamente? ',
        ).toLowerCase();
        if (jogarNovamente !== 'sim' && jogarNovamente !== 'nao') {
            console.log(
                'Acho que nem precisava de validação, mas você deve responder apenas "sim" ou "nao"',
            );
            console.log('Bora tentar novamente!');
        } else if (jogarNovamente == 'sim') {
            continue inicio;
        } else {
            break inicio;
        }
    }
}
