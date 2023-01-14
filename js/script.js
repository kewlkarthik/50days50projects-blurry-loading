const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load=0
let int = setInterval(blurring, 30) //set to load function every 30 ms

function blurring(){
    load++

    if(load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1,0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (n, i_min, i_max, o_min, o_max) =>{
    return ((n - i_min)*(o_max - o_min)) / (i_max - i_min) + o_min
}