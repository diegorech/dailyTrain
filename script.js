

let introCanvas = document.querySelector(".intro"); 


let aboutBtn = document.querySelector("#aboutBtn").addEventListener('click', () => {
    if ( introCanvas.classList.contains('showAbout')) {
        introCanvas.classList.add('hideAbout')
        introCanvas.classList.remove('showAbout')
    } else {
        introCanvas.classList.add('showAbout')
        introCanvas.classList.remove('hideAbout')
        
    }
    

   return console.log(introCanvas.classList)
})