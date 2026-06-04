// === NAVTOP (src/components/NavTop.tsx) ===
// bg: #f0f0e0 | toggle: #e0e0e0 | shadow: #FF00FF | border: rgba(0,0,0,0.1)
// imagens: sol-lua em assets/images/

// === NAVBOTTOM (src/components/NavBottom.tsx) ===
// bg: white | border: #E85D04
// laranja-ativo: #E85D04 | cinza-inativo: #6B7B80

// === LAYOUT (app/_layout.tsx) ===
// bg: #FFEDD480

// === TEMA ESCURO (src/constants/colors.ts) ===
// bg: #12-12 | bg2: #1E1E1E | laranja: #FF5C00 | amarelo: #FFB800 | text1: #F5F5F5 | text2: #A0A0A0
// type Theme = {
//     bg: string;
    
// };


export type Theme ={
    colors:{
        background:{
            primary: string;
            primarySoft:string;
            secondary: string;
            elevated: string;
        };

    text:{
        primary:string;
        secondary:string;
        disabled:string;
    };
    details:{
        higlight:string;
        border:string;
    }
    cards:{
        zeBigode:string;
        zeBigode2:String;
        palcoPrincipal:string;
        show:{
            strong:string;
            mustard:string;
            soft:string;
            primary:string;
            gradiente:string;            
        }
    }

    }
}
export const lightTheme : Theme ={
    colors:{
        background:{ 
            primary:"#FFEDD4",
            primarySoft:"#FFEDD4CC",
            secondary:"#EDEAE6",
            elevated:"#FFFFFF"
        },
    text:{
        primary:"#1C1C1C",
        secondary:"#555555",
        disabled:"#9A9A9A"
    },
    details:{
        higlight:"#FFD6A5",
        border:"#F54900"
    },
    cards:{
        zeBigode:"#F54900",
        zeBigode2:"#b46d3b",
        palcoPrincipal:"#Ff6900",
        show:{
            strong:"#DC2F02",
            mustard:"#f58d05",
            soft:"#F48C06",
            primary:"#E85D04",
            gradiente:"#FAA307"

        }


    }
    }
    
}

export const darkTheme: Theme ={
    colors:{
        background:{
            primary:"#121212",
            primarySoft:"#121212CC",
            secondary:"#1E1E1E",
            elevated:"#2A2A2A"
        },
    text:{
        primary:"#FFFFFF",
        secondary:"#CCCCCC",
        disabled:"#777777"
    },
    details:{
        higlight:"#FFB703",
        border:"#F54900"
    },
    cards:{
        zeBigode:"#F54900",
        zeBigode2:"#b46d3b",
        palcoPrincipal:"#Ff6900",
        show:{
            strong:"#DC2F02",
            mustard:"#f58d05",
            soft:"#F48C06",
            primary:"#E85D04",
            gradiente:"#FAA307"

        }
    }
    }
    
}