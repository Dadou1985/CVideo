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
    
    const bio = byId("profil")
    bio.addEventListener("click", function(){
        const startVideo = byId("video")
        startVideo.play()
    })

    toggle("hamburger", "menu", "switch")
    
    
})