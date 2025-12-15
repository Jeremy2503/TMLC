const { createTheme } = require("@mui/material/styles")

//Colour Varilables
const backgroundColour = "rgba(0, 0, 0, 1)"
const primaryColour = "#E63946"
const textColour = "#F1FAEE"
const secondaryColour = "#457B9D"
const highlightColour = "#A8DADC"

//theme
let lighttheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: backgroundColour,
            card: backgroundColour
        },
        primary: {
            main: primaryColour
        },
        secondary: {
            main: secondaryColour
        },
        tertiary: {
            main: highlightColour
        },
        icon: {
            main: textColour
        },
        text: {
            main: textColour
        },
        error: {
            main: "#D80027"
        }
    }
})

const backgroundColourdark = "#F1FAEE"
const primaryColourdark = "#E63946"
const textColourdark = "rgba(255, 255, 255, 1)"
const secondaryColourdark = "#457B9D"
const highlightColourdark = "#A8DADC"

let darktheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: backgroundColourdark,
            card: backgroundColourdark
        },
        primary: {
            main: primaryColourdark
        },
        secondary: {
            main: secondaryColourdark
        },
        tertiary: {
            main: highlightColourdark
        },
        icon: {
            main: textColourdark
        },
        text: {
            main: textColourdark
        },
        error: {
            main: "#D80027"
        }
    }
})


export { lighttheme, darktheme };