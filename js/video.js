function byId(n) {
    return document.getElementById(n)
}

document.addEventListener("DOMContentLoaded", function(event){
    const transition = byId("myVideo3")
    const barre = byId("slide")

    console.log("loaded")

    cvLoop()

    /*const presentation = byId("Bio")
        presentation.addEventListener("click", function(){
            let film = byId("myVideo")
            let film2 = byId("myVideo2")
            film2.play()
            film2.style.opacity = 1
            film.style.opacity = 0
            film2.style.transition = "opacity 4s"
            film.style.transition = "opacity 2s"
            barre.style.display = "none"
            film2.onended = function(){
                barre.style.display = "block"
                film2.style.opacity = 0
                film.style.opacity = 1
                film2.style.transition = "opacity 2s"
                film.style.transition = "opacity 4s"
            }
        })

        const presentation = byId("Bio")
        presentation.addEventListener("click", function(){
            let film = byId("myVideo")
            let film2 = byId("myVideo2")
            film2.play()
            film2.style.zIndex = 2
            film.style.zIndex = 1
            transition.style.display = "block"
                setTimeout(function(){
                transition.style.display = "none"
            },500)
            barre.style.display = "none"
            film2.onended = function(){
                barre.style.display = "block"
                film2.style.zIndex = 1
                film.style.zIndex = 2
                transition.style.display = "block"
                setTimeout(function(){
                transition.style.display = "none"
            },500)
            }
        })*/
})