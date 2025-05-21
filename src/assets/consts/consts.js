const skills = [
    {
        name: 'HTML',
        urlImage: '/src/assets/img/skills/html.png',
        percentage: 90,
        hex: '#ff6d00'
    },
    {
        name: 'CSS',
        urlImage: '/src/assets/img/skills/css.png',
        percentage: 60,
        hex: '#0a84df'
    },
    {
        name: 'Javascript',
        urlImage: '/src/assets/img/skills/js.webp',
        percentage: 80,
        hex: '#fed700'
    },
    {
        name: 'Node Js',
        urlImage: '/src/assets/img/skills/node.png',
        percentage: 70,
        hex: '#4caf50'
    },
    {
        name: 'React Js',
        urlImage: '/src/assets/img/skills/react.webp',
        percentage: 75,
        hex: '#0a84df'
    },
    {
        name: 'Java',
        urlImage: '/src/assets/img/skills/java.png',
        percentage: 70,
        hex: '#ed2024'
    }
]

const projects = [
    {
        id: 1,
        name: 'Movies PW',
        images: ['/src/assets/img/projects/movies1.png', '/src/assets/img/projects/movies2.png', '/src/assets/img/projects/movies3.png', '/src/assets/img/projects/movies4.png', '/src/assets/img/projects/movies5.png'],
        details: "Este projeto é um website frontend desenvolvido em React.js que funciona como um catálogo interativo de filmes e séries, utilizando a API e base de dados da TMDB para obter todas as informações atualizadas. O site permite que o usuário pesquise filmes e séries por título através de uma barra de pesquisa, exibindo os resultados com paginação para melhor navegação. Para a comunicação com a API, foi utilizado o pacote Axios. A navegação entre as páginas é controlada pelo React Router Dom, permitindo uma experiência dinâmica. Cada filme ou série possui uma página detalhada, que exibe informações como gênero, data de lançamento, avaliação, elenco completo e um espaço para a visualização do trailer oficial. O projeto entrega uma interface responsiva.O projeto foi meu primeiro utilizando React.Js com uma base de dados de terceiros.",
        technologies: "HTML, CSS, Javascript, React Js",
        urlCode: "https://github.com/petersonwilliam-dev/movies/tree/main",
        urlPage: "https://petersonwilliam-dev.github.io/movies/"
    },
    {
        id: 2,
        name: 'Jogo da velha',
        images: ['/src/assets/img/projects/jogovelha1.png', '/src/assets/img/projects/jogovelha2.png', '/src/assets/img/projects/jogovelha3.png', '/src/assets/img/projects/jogovelha4.png'],
        details: "Este projeto é um website que apresenta um jogo da velha, onde o jogador disputa contra um algoritmo programado com comandos simples em JavaScript. O jogo oferece duas opções de dificuldade: no modo fácil, a CPU faz jogadas aleatórias, enquanto no modo difícil, a CPU analisa as jogadas anteriores para identificar possíveis vitórias ou bloquear as jogadas do jogador. Desenvolvido em 2023, um mês antes de iniciar a faculdade, o projeto foi criado utilizando apenas HTML, CSS e JavaScript puro, sem a utilização de frameworks ou bibliotecas externas. A interface é simples e direta, proporcionando uma experiência de jogo agradável, enquanto os comandos lógicos garantem um desafio maior no modo difícil.",
        technologies: "HTML, CSS, Javascript",
        urlCode: "https://github.com/petersonwilliam-dev/jogo-da-velha",
        urlPage: "https://petersonwilliam-dev.github.io/jogo-da-velha/"
    },
    {
        id: 3,
        name: "Space Invaders",
        images: ['/src/assets/img/projects/spaceinvaders1.png', '/src/assets/img/projects/spaceinvaders2.png', '/src/assets/img/projects/spaceinvaders3.png', '/src/assets/img/projects/spaceinvaders4.png'],
        details: "Este projeto é um website baseado no clássico jogo Space Invaders, onde o jogador controla uma nave e deve disparar para destruir os aliens invasores. O jogo permite que o jogador escolha entre diferentes modelos de naves, proporcionando uma experiência personalizada. Os comandos, como mover a nave e disparar, são realizados por meio do teclado, garantindo uma jogabilidade simples e intuitiva. Desenvolvido no início de 2023, o projeto foi criado utilizando apenas HTML, CSS e JavaScript puro, sem o uso de frameworks ou bibliotecas externas. Por enquanto, o jogo só pode ser jogado em um computador, devido à necessidade dos comandos via teclado e ao tamanho da tela, que não é ideal para dispositivos móveis.",
        technologies: "HTML, CSS, Javascript",
        urlCode: "https://github.com/petersonwilliam-dev/space_invaders/tree/master",
        urlPage: "https://petersonwilliam-dev.github.io/space_invaders/"
    },
    {
        id: 4,
        name: "Social Flux",
        images: ['/src/assets/img/projects/socialflux1.png', '/src/assets/img/projects/socialflux.png', '/src/assets/img/projects/socialflux2.png', '/src/assets/img/projects/socialflux3.png'],
        details: "Este projeto é um website de rede social inspirado na plataforma X, onde os usuários podem criar contas, publicar postagens com ou sem fotos, seguir outros perfis, curtir e comentar conteúdos. O sistema possui autenticação segura com JWT, uma barra de pesquisa para encontrar outros usuários, além de notificações que avisam quando alguém curte, comenta ou segue o usuário. Perfis privados contam com uma barra de solicitação de amizade, permitindo que o dono aceite ou recuse pedidos de seguidores. A plataforma também oferece um modo escuro para uma experiência visual mais confortável. No frontend, foi utilizado React.js com hooks personalizados para gerenciar requisições via Axios, enquanto o backend foi desenvolvido com Javalin, que cuida do tratamento e armazenamento dos dados, utilizando MySQL como banco de dados. A ideia surgiu durante as aulas de Programação Orientada a Objetos, com o desenvolvimento começando na segunda metade de 2024.",
        technologies: "HTML, CSS, Javascript, React Js, Java, MySQL",
        urlCode: "https://github.com/petersonwilliam-dev/social-flux",
        urlPage: "http://165.227.76.216/"
    }
]

export {skills, projects}