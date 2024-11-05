const rootStyles = document.documentElement.style

const lineRedElement = document.getElementById("lineRed")
const h1Element = document.getElementById("h1")

const buttonRGBElement = document.getElementById("buttonRGB")
const buttonHexaElement = document.getElementById("buttonHexa")

const trackingElement = document.getElementById("trackingMouse")


const updateLineRed = () => {
    
    rootStyles.setProperty("--lineRed-width", window.scrollY + "%")
    rootStyles.setProperty("--lineRed-height",  window.scrollY + "%")     
        
}


const xTextMoved = () => {

    h1Element.textContent = `Te has desplazado ${window.scrollY} px`
  
}


const bgColorRGB = () => {
    let rgb = "rgb(180, 50, 64)"
    const randomRGB = Math.floor(Math.random() * rgb)
    rootStyles.setProperty("--bg-color", randomRGB + px)
}
const bgColorHexa = () => {
    const randomHexa = Math.floor(Math.random() * bgColorHexa)   
    rootStyles.setProperty("--bg-color", randomHexa)
}

/* const tracking = () => {
    trackingElement = trackingElement
} */

lineRedElement.addEventListener("scroll", updateLineRed)
window.addEventListener("scroll", xTextMoved)
buttonRGBElement.addEventListener("click", bgColorRGB)
buttonHexaElement.addEventListener("click", bgColorHexa)
/* trackingElement.addEventListener("mousemove", tracking) */





/* const xScroll = () => {
    let resultDimension = ""

    if ( xScroll === 0)
        {
            resultDimension = document.body.scrollHeight * 0
        }
        else if ( xScroll === 100 )
            {
               resultDimension = (100 * document.body.scrollHeight) / window.innerHeight
            }

            lineRedElement.textContent = resultDimension

} */


















/* const ev = (event) => {
    console.log(event.rrr)
}

document.addEventListener("scroll", (ev) => {
    console.log(ev)
})
 */
