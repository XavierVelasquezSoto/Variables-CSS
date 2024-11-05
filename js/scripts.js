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

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    rootStyles.setProperty("--bg-color", "rgb"+ "(" + r +"," + g +"," + b +")")
}


const bgColorHexa = () => {

    let hexa = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]
    let hexaRandom = ""

        for ( let i = 0; i < 6; i++ )
            {
                hexaRandom += hexa[Math.floor(Math.random() * hexa.length)]
            }      

    rootStyles.setProperty("--bg-color", "#" + hexaRandom)
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
