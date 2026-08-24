function maximize() {
	if (document.fullscreenElement) {
		document.exitFullscreen();
	} else {
		document.documentElement.requestFullscreen();
	}
}

window.addEventListener("load", function () {
    setInterval(() => {
        var progressbar = document.getElementById("loading_webpage_progressbar")
        if(progressbar.style.width === "100%"){
            
        } else {
            progressbar.style.width = Number(progressbar.style.width.replace("%", "")) + 10 + '%'
        }
    }, 100);

    setTimeout(() => {
        document.getElementById('loading_screen').classList.add("hidden")
        document.getElementById('start_prompt').classList.remove("hidden")
    }, 2000);

    // setTimeout(() => {
    //     document.body.style.backgroundImage = "url('/media/tile6.png')"
    // }, 5000);
});

function error_sound(){
    document.getElementById("error_sound").play()
}

function shutdown(){
    //document.getElementById("music").pause()

    const shutdownSound = document.getElementById("shutdown")
    shutdownSound.addEventListener("ended", () => {
        window.location.href = ('/shutdown')
    }, { once: true })
    shutdownSound.play()

    const fade = document.createElement("div")
    fade.style.position = "fixed"
    fade.style.inset = "0"
    fade.style.backgroundColor = "black"
    fade.style.opacity = "0"
    fade.style.zIndex = "2147483647"
    fade.style.pointerEvents = "all"
    fade.style.transition = "opacity 1.5s ease-in"
    document.body.appendChild(fade)

    // Force the initial state to render before starting the fade.
    fade.offsetWidth
    fade.style.opacity = "1"
}

function start(){
   setTimeout(() => {
        document.getElementById("start_prompt").classList.add("hidden")
   }, 250);

   setTimeout(() => {
        document.body.style.backgroundImage = "url('/media/tile6.png')"
        document.getElementById("startup").play()
   }, 1500);

   setTimeout(() => {
        document.getElementById("all_windows").classList.remove("hidden")
        document.getElementById("taskbar").classList.remove("hidden")
        document.getElementById("taskbar").style.opacity = 100
   }, 3000);

//    setTimeout(() => {
//         document.getElementById("music").play()
//    }, 9000);
}