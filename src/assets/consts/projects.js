import movies from '../img/movies1.png'
import movies1 from '../img/movies2.png'
import movies2 from '../img/movies3.png'
import movies3 from '../img/movies4.png'
import movies4 from '../img/movies5.png'

import jogodavelha from '../img/jogodavelha1.png'
import jogodavelha1 from '../img/jogodavelha2.png'
import jogodavelha2 from '../img/jogodavelha3.png'
import jogodavelha3 from '../img/jogodavelha4.png'

import spaceinvaders from '../img/spaceinvaders1.png'
import spaceinvaders1 from '../img/spaceinvaders2.png'
import spaceinvaders2 from '../img/spaceinvaders3.png'
import spaceinvaders3 from '../img/spaceinvaders4.png'

import socialFlux from '../img/socialflux.png'
import socialFlux1 from '../img/socialflux1.png'
import socialFlux2 from '../img/socialflux2.png'
import socialFlux3 from '../img/socialflux3.png'

const projects = [
    {
        id: 1,
        name: 'Movies PW',
        images: [movies, movies1, movies2, movies3, movies4],
        details: "Este projeto é um website frontend desenvolvido em React.js que funciona como um catálogo interativo de filmes e séries, utilizando a API e base de dados da TMDB para obter todas as informações atualizadas. O site permite que o usuário pesquise filmes e séries por título através de uma barra de pesquisa, exibindo os resultados com paginação para melhor navegação. Para a comunicação com a API, foi utilizado o pacote Axios. A navegação entre as páginas é controlada pelo React Router Dom, permitindo uma experiência dinâmica. Cada filme ou série possui uma página detalhada, que exibe informações como gênero, data de lançamento, avaliação, elenco completo e um espaço para a visualização do trailer oficial. O projeto entrega uma interface responsiva.O projeto foi meu primeiro utilizando React.Js com uma base de dados de terceiros.",
        technologies: "HTML, CSS, Javascript, React Js",
        urlCode: "https://github.com/petersonwilliam-dev/movies/tree/main",
        urlPage: "https://petersonwilliam-dev.github.io/movies/"
    },
    {
        id: 2,
        name: 'Jogo da velha',
        images: [jogodavelha, jogodavelha1, jogodavelha2, jogodavelha3],
        details: "Este projeto é um website que apresenta um jogo da velha, onde o jogador disputa contra um algoritmo programado com comandos simples em JavaScript. O jogo oferece duas opções de dificuldade: no modo fácil, a CPU faz jogadas aleatórias, enquanto no modo difícil, a CPU analisa as jogadas anteriores para identificar possíveis vitórias ou bloquear as jogadas do jogador. Desenvolvido em 2023, um mês antes de iniciar a faculdade, o projeto foi criado utilizando apenas HTML, CSS e JavaScript puro, sem a utilização de frameworks ou bibliotecas externas. A interface é simples e direta, proporcionando uma experiência de jogo agradável, enquanto os comandos lógicos garantem um desafio maior no modo difícil.",
        technologies: "HTML, CSS, Javascript",
        urlCode: "https://github.com/petersonwilliam-dev/jogo-da-velha",
        urlPage: "https://petersonwilliam-dev.github.io/jogo-da-velha/"
    },
    {
        id: 3,
        name: "Space Invaders",
        images: [spaceinvaders, spaceinvaders1, spaceinvaders2, spaceinvaders3],
        details: "Este projeto é um website baseado no clássico jogo Space Invaders, onde o jogador controla uma nave e deve disparar para destruir os aliens invasores. O jogo permite que o jogador escolha entre diferentes modelos de naves, proporcionando uma experiência personalizada. Os comandos, como mover a nave e disparar, são realizados por meio do teclado, garantindo uma jogabilidade simples e intuitiva. Desenvolvido no início de 2023, o projeto foi criado utilizando apenas HTML, CSS e JavaScript puro, sem o uso de frameworks ou bibliotecas externas. Por enquanto, o jogo só pode ser jogado em um computador, devido à necessidade dos comandos via teclado e ao tamanho da tela, que não é ideal para dispositivos móveis.",
        technologies: "HTML, CSS, Javascript",
        urlCode: "https://github.com/petersonwilliam-dev/space_invaders/tree/master",
        urlPage: "https://petersonwilliam-dev.github.io/space_invaders/"
    },
    {
        id: 4,
        name: "Social Flux",
        images: [socialFlux, socialFlux1, socialFlux2, socialFlux3],
        details: "Este projeto é um website de rede social inspirado na plataforma X, onde os usuários podem criar contas, publicar postagens com ou sem fotos, seguir outros perfis, curtir e comentar conteúdos. O sistema possui autenticação segura com JWT, uma barra de pesquisa para encontrar outros usuários, além de notificações que avisam quando alguém curte, comenta ou segue o usuário. Perfis privados contam com uma barra de solicitação de amizade, permitindo que o dono aceite ou recuse pedidos de seguidores. A plataforma também oferece um modo escuro para uma experiência visual mais confortável. No frontend, foi utilizado React.js com hooks personalizados para gerenciar requisições via Axios, enquanto o backend foi desenvolvido com Javalin, que cuida do tratamento e armazenamento dos dados, utilizando MySQL como banco de dados. A ideia surgiu durante as aulas de Programação Orientada a Objetos, com o desenvolvimento começando na segunda metade de 2024.",
        technologies: "HTML, CSS, Javascript, React Js, Java, MySQL",
        urlCode: "https://github.com/petersonwilliam-dev/social-flux",
        urlPage: "http://165.227.76.216/"
    }
]

export default projects