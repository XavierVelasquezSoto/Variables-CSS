const rootStyles = document.documentElement.style
const lineRedElement = document.getElementById("lineRed")

const h1Element = document.getElementById("h1")
const buttonRGBElement = document.getElementById("buttonRGB")
const buttonHexaElement = document.getElementById("buttonHexa")

const trackingElement = document.getElementById("trackingMouse")


const updateLineRed = () => {
    const totalScroll = document.body.scrollHeight - window.innerHeight;
    const userScroll = Math.floor(window.scrollY);
    const finalWidth = ( userScroll * 100 ) / totalScroll;

   rootStyles.setProperty("--lineRed-width", finalWidth + "%")
   
   h1Element.textContent = `Te has desplazado ${userScroll} px` 
   //se puede eliminar y añadir en la funcion de abajo, pero este caso para mover
}


/* const xTextMoved = () => {
    const userScroll = Math.floor(window.scrollY);

    h1Element.textContent = `Te has desplazado ${userScroll} px`
    //En este caso es valido
} */


const bgColorRGB = () => {

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    rootStyles.setProperty("--bg-color", "rgb"+ "(" + r +"," + g +"," + b +")")
}


const bgColorHexa = () => {

    //const hexaCharacters = "0123456789ABCDEF"
    let hexa = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]
    let hexaRandom = ""

        for ( let i = 0; i < 6; i++ )
            {
                hexaRandom += hexa[Math.floor(Math.random() * hexa.length)]
            }      

    rootStyles.setProperty("--bg-color", "#" + hexaRandom)
}




const trackingMouse = event => {
    rootStyles.setProperty("--position-x", event.x + "px")
    rootStyles.setProperty("--position-y", event.y + "px")
}

document.addEventListener("scroll", updateLineRed)
/* window.addEventListener("scroll", xTextMoved) */
buttonRGBElement.addEventListener("click", bgColorRGB)
buttonHexaElement.addEventListener("click", bgColorHexa)
document.addEventListener("mousemove", trackingMouse)





/* const test = () => {
    console.log(window.scrollY)
    console.log(document.body.scrollHeight)
}

document.addEventListener("scroll", test) */


/* 
total scroll - 100%
userScroll - ? (regla de 3) */


/* const ev = (event) => {
    console.log(event.rrr)
}

document.addEventListener("scroll", (ev) => {
    console.log(ev)
})
 */
