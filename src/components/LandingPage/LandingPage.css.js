import Styled from "styled-components";

export const Flex = Styled.div`
      margin-bottom: 56px;
      
      @media (min-width: 800px) {
            display: flex;
            margin: 0 63px;
            margin-bottom: 64px;
        }
}
`
export const D_H1 = Styled.h1`
       font-family: CentraNo2Book;
        font-size: 24px;
        line-height: 28px;
        display: none;
        margin-top: 64px;
        @media (min-width: 800px) {
                margin-bottom: 24px;
                display: block;
        }
`
export const D1_H1 = Styled.h1`
        margin-bottom: 24px;
         font-family: CentraNo2Book;
        font-size: 24px;
        line-height: 28px;
        display: block;
        @media (min-width: 800px) {
                margin-bottom: 24px;
                display: none;
        }
`
export const Section1 = Styled.div`
    display: none;
    div:last-of-type {
                margin-top:auto ;
        }
    div{
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        @media (min-width: 800px) {
              width: 41%;
              display: flex;
              flex-direction: column;
              
        }
       
`
export const Section2 = Styled.div`
div:first-of-type {
        margin-bottom: 56px;
        @media (min-width: 800px) { 
             margin-bottom: 56px;
        }
      }
      @media (min-width: 800px) {
             width: 59%;  
             margin-bottom: 56px;
        }
      

`
export const Section3 = Styled.div`
           margin: 0 18px;
           @media (min-width: 800px) {
                margin: 0px 0px;
                 
        }
          div:last-of-type {
            display: flex;
            gap: 10px;
            @media (min-width: 800px) {
              display: none; 
                 
        }

      
      }
`
export const D_BC1 = Styled.div`
        font-size: 16px;
        line-height: 20px;
        font-family: CentraNo2Light;
        @media (min-width: 800px) {
                margin-bottom: 24px;
                font-size: 20px;
                line-height: 24px;
        }
`
export const DFFL = Styled.h1`
       font-family: CentraNo2Book;
       font-size: 16px;
        line-height: 16px;
        @media (min-width: 800px) {
                margin-bottom: 16px;
        }
`
export const Input = Styled.input`
    
                margin-bottom: 16px;
                width: 100%;
                max-width: 270px;
                height: 36px;
                border: none;
                border-bottom: 1px solid;
                @media (min-width: 800px) {
                        max-width: 340px;
                        width: 100%;
        }
      
`
export const M_button = Styled.button`
           font-family: CentraNo2Book;
           border: 1px solid black;
            width: 200px;
            height: 50px;
            margin-bottom: 56px;
            background-color: white;
            @media (min-width: 800px) {
                margin-bottom: 56px;
        }
`
export const Icon = Styled.div`
           margin-left: auto;
           @media (min-width: 800px) {
                margin-bottom: 56px;
        }
`
export const IG = Styled.div`

        :hover {
                opacity:0.5;
                
        }
`
export const FB = Styled.div`
  :hover {
                opacity:0.5;
        }
`
