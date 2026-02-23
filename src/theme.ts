import { createTheme } from "@mui/material";

const theme=createTheme({
    palette:{
        mode:'dark',
        error:{
            main:'#ff1744'
        },
        primary:{
            main:'#1976d2',
        },
    },
    typography:{
        fontFamily:"Inter Roboto san-serif",
    },
})

export default theme