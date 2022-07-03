var black = false;

var projetos = [
    {
        nome: "Jogo da Nave",
        img: "img/jogoNave.png",
        descricao: "Jogo da nave com funcionalidade de movitação e disparo, feito com javascript",
        url: "https://petersonwilliam-dev.github.io/space-shooter/"
    },
    {
        nome: "Landing page",
        img: "img/landing.png",
        descricao: "Landing page desenvolvida através das tecnologias HTML, CSS e Javascript",
        url: "https://petersonwilliam-dev.github.io/landingpage/"
    },
    {
        nome: "Crud",
        img: "img/crud.png",
        descricao: "Crud simples feito com Laravel",
        url: "https://github.com/petersonwilliam-dev/crud-laravel/tree/master"
    }
]

function inicia() {
    document.querySelectorAll(".anima").forEach((e) => {
        e.classList.remove('anima')
    })
    blackMode();
    adicionaProjetos()
}

function adicionaProjetos() {
    let containerMain = document.getElementById("container-projetos");

    if (projetos.length > 0) {

        document.getElementById("tecnologias_utilizadas").innerHTML = "Tecnologias utilizadas: HTML5, CSS3, Javascript e PHP"

        for (let i = 0; i < projetos.length; i++) {

            let col = document.createElement("div")
            col.setAttribute("class", "col-12 col-md-6 col-lg-4")
        
            let project_container = document.createElement("div")
            project_container.setAttribute("class", "project-container")
        
            let title = document.createElement("h4")
            title.setAttribute("class", "text-center text-light bg-dark")
            title.innerHTML = projetos[i].nome;
        
            let project_body = document.createElement("div")
            project_body.setAttribute("class", "project-body")
        
            let img_project = document.createElement("img")
            img_project.setAttribute("src", projetos[i].img)
            img_project.setAttribute("alt", projetos[i].nome)
            img_project.setAttribute("class", "img-project")
        
            let textoparagrafo = document.createElement("p")
            textoparagrafo.setAttribute("class", "text-secondary")
            textoparagrafo.style.padding = "10px"
            textoparagrafo.innerHTML = projetos[i].descricao
        
            let text_center = document.createElement("div")
            text_center.setAttribute("class", "text-center")
        
            let button = document.createElement("a")
            button.setAttribute("class", "btn btn-primary")
            button.setAttribute("href", projetos[i].url)
            button.setAttribute("target", "_blank")
            if(i == 2) {
                button.setAttribute("data-bs-toggle", "modal")
                button.setAttribute("data-bs-target", "#exampleModal")
            }
            button.innerHTML = "Veja"
        
            text_center.appendChild(button)
        
            project_body.appendChild(img_project)
            project_body.appendChild(textoparagrafo)
            project_body.appendChild(text_center)
        
            project_container.appendChild(title)
            project_container.appendChild(project_body)
        
            col.appendChild(project_container)
        
            containerMain.appendChild(col)
    
        }

    } else {
        
        document.getElementById("tecnologias_utilizadas").innerHTML = "Não há projetos disponíveis para a amostra"
        
    }

    
}

function animaScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    const FotoPerfil = document.getElementById("perfilDev");
        if (FotoPerfil.offsetTop <= windowTop) {
            FotoPerfil.style.width = "300px";
        }
}

function blackMode() {
    if (localStorage.blackMode) {

        document.getElementById("moon").setAttribute("name", "moon")
        document.getElementsByTagName('body')[0].classList.add('dark')
        document.getElementById("intro").classList.remove("intro")
        document.getElementById("intro").classList.add("bg-escuro")
        document.querySelectorAll("p, hr").forEach((e) => {
            e.classList.add("text-light")
        })

    } else {
        document.getElementById("moon").setAttribute("name", "moon-outline")
        document.getElementsByTagName('body')[0].classList.remove('dark')
        document.getElementById("intro").classList.remove("bg-escuro")
        document.getElementById("intro").classList.add("intro")
        document.querySelectorAll("p").forEach((e) => {
            e.classList.remove("text-light")
        })
    }
}

function activeBlackMode() {
    if (!localStorage.blackMode) {
        localStorage.setItem("blackMode", "ativo")
        blackMode()
    } else {
        localStorage.removeItem("blackMode");
        blackMode()
    }
}

window.addEventListener("scroll", animaScroll)
window.addEventListener("load", inicia)