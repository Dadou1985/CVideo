function byId(n) {
    return document.getElementById(n)
}

function toggle(a, b, c){
    let show = byId(a)
    show.addEventListener("click", function(){
        let txt2= byId(b)
        txt2.classList.toggle(c)
    })
}

/*-----------------New Script--------------------------*/

document.addEventListener("DOMContentLoaded", function(event){
    console.log("loaded")
    
    const story = byId("video")
    const home = byId("home")
    const bio = byId("profil")
    const pro = byId("pro")
    const academic = byId("academic")
    const hobby = byId("hobby")
    const landingPage = byId("box")
    const menu = byId("menu")
    const slide = byId("slide")
    const info = byId("info")
    const detail = byId("detail")
    const resume = byId("resume")
    const hamburger = byId("hamburger")
    const study = setTimeout(function(){
        detail.innerHTML = "<h3>Certificat de Compétence en Droit des Affaires<br/>2016/2018</h3><br/><i>Ce cursus juridique m’a fourni les connaissances juridiques qui répondent aux demandes du personnel administratif des entreprises et des collaborateurs des cabinets des professions libérales juridiques et judiciaires. J’ai notamment pu être formé RGPD et, plus largement, au droit touchant aux nouvelles technologies.</i>"
    }, 23000)

    home.addEventListener("click", function(){
        landingPage.style.opacity = 1
        landingPage.style.transition = "opacity 1s"
        resume.style.zIndex = 0
        story.src = ""
        home.style.display = "none"
        hamburger.style.display = "flex"
    })
    
    bio.addEventListener("click", function(){
        story.src = "../video/profil.mp4"
        story.play()
        home.style.display = "flex"
        resume.style.zIndex = 5
        landingPage.style.opacity = 0
        landingPage.style.transition = "opacity 2s"
        hamburger.style.display = "none"
        menu.classList.toggle("switch")
        info.innerText = "INFOS"
        detail.innerHTML = "<b>Nom</b> : Simba<br/><b>Prenom</b> : David<br/><b>Age</b> : 34 ans<br/><b>Domiciliation</b> : Elancourt(78)<br/><b>tél</b> : 06.59.87.28.84<br/><b>E-mail</b> : david.simba1985@gmail.com<br/><b>Linkedin</b> : www.linkedin.com/in/david-simba-961316140<br/><b>Permis B<br/>Véhiculé</b>"
    })

    pro.addEventListener("click", function(){
        story.src = "../video/professionnel.mp4"
        story.play()
        home.style.display = "flex"
        resume.style.zIndex = 5
        landingPage.style.opacity = 0
        landingPage.style.transition = "opacity 2s"
        hamburger.style.display = "none"
        menu.classList.toggle("switch")
        info.innerText = "PARCOURS"
        detail.innerHTML = "<h3>Réceptionniste chez Accor 2012/2020</h3><br/><i>Opérant de nuit, j’avais la responsabilité de veiller au bien-être et à la sécurité des clients présents dans l’établissement. En contact permanent avec ces derniers, j’ai su développer au fil des années un sens du relationnel grâce à un service clientèle irréprochable.</i>"
        /*setTimeout(function(){
            detail.innerHTML = "<h1>Juriste chez<br/>Indemniflight 2017/2018</h1><br/><i>En charge du pôle contentieux, j’avais pour mission principale de définir des process afin que l’équipe des développeurs puisse concevoir les outils permettant l’automatisation du traitement et du classement des dossiers litigieux."
        }, 20000)*/
    })

    academic.addEventListener("click", function(){
        story.src = "../video/academic.mp4"
        story.play()
        home.style.display = "flex"
        resume.style.zIndex = 5
        landingPage.style.opacity = 0
        landingPage.style.transition = "opacity 2s"
        hamburger.style.display = "none"
        menu.classList.toggle("switch")
        info.innerText = "ETUDES"
        detail.innerHTML = "<h3>Préparation au titre RNCP Développeur Web et Web Mobile depuis Nov.2019</h3><i>Cette formation a pour objectif de nous apprendre à développer la partie front-end et back-end d’une application web ou web mobile en intégrant les recommandations de sécurité.</i>"
        study()
        if(story.src !== "../video/academic.mp4"){
            clearTimeout(study)
        }
    })

    hobby.addEventListener("click", function(){
        story.src = "../video/hobby2.mp4"
        story.play()
        home.style.display = "flex"
        resume.style.zIndex = 5
        landingPage.style.opacity = 0
        landingPage.style.transition = "opacity 2s"
        hamburger.style.display = "none"
        menu.classList.toggle("switch")
        info.innerText = "LOISIRS"
        detail.innerHTML = "<div class=\"fontXL\"><img src=\"../img/netflix.png\" class=\"percent20 hpercent15\"><b>Serie Addict</b></div><div class=\"fontXL\"><img src=\"../img/foot.png\" class=\"percent20 hpercent15\"><b>Football Indoor</b></div><div class=\"fontXL\"><img src=\"../img/boxe.png\" class=\"percent20 hpercent15\"><b>Boxing Bag Workout</b></div><div class=\"fontXL\"><img src=\"../img/fl.png\" class=\"percent20 hpercent15\"><b>Musique assistée par ordinateur</b></div>"
    })

    story.onended = function(){
        landingPage.style.opacity = 1
        landingPage.style.transition = "opacity 1s"
        resume.style.zIndex = 0
        home.style.display = "none"
        hamburger.style.display = "flex"
    }

    toggle("hamburger", "menu", "switch")
    toggle("resume", "slide", "switch")

    function callMenu(){
        if(menu.style.display == "switch"){
            slide.style.filter = "blur(5px)"
        }
    }

    callMenu()
    
    const logo = [{
            nom: "html",
            url: "../img/rubix/html.png"
        }, {
            nom: "agile",
            url: "../img/rubix/agile.png"
        }, {
            nom: "ajax",
            url: "../img/rubix/ajax.png"
        }, {
            nom: "bootstrap",
            url: "../img/rubix/bootstrap.png"
        }, {
            nom: "css",
            url: "../img/rubix/css2.png"
        }, {
            nom: "git",
            url: "../img/rubix/git.png"
        }, {
            nom: "jquery",
            url: "../img/rubix/jquery.png"
        }, {
            nom: "js",
            url: "../img/rubix/js_logo.png"
        }, {
            nom: "symfony",
            url: "../img/rubix/symfony.png"
        }, {
            nom: "php",
            url: "../img/rubix/php.png"
        }, {
            nom: "opquast",
                url: "../img/rubix/opquast.png"
        }, {
            nom: "photoshop",
            url: "../img/rubix/photoshop.png"
    }]
    
        setInterval(function(){
            let i = Math.floor(Math.random() * 11)
            let langage = byId("logo")
            langage.src = logo[i].url
        }, 5000)
    
})