import styled from "styled-components"
import { darken, transparentize } from "polished"

export const Container = styled.form`
        h2{
            margin-bottom: 2rem;
            color: var(--text-title);
            font-size: 1.5rem
        }
        
        input{
            background: #E7E9EE;
            
            padding: 0 1.5rem;
            width: 100%;
            height: 4rem;
            
            border-radius: 0.25rem;
            border: 1px solid #d7d7d7;

            font-weight: 400;
            font-size: 1rem;

            &::placeholder{
                color: var(--text-body);
            }
            
            /* &:focus{
                outline: 1.5px solid gray;
            } */
            
            & + input{
                margin-top: 1rem
            }

        }


        button{
            &[type=submit]{
                padding: 0 1.5rem;
                width: 100%;
                height: 4rem;
                background: var(--green);
                text-align: center;
                color: var(--shape);
                margin-top: 1.5rem;
                font-size: 1rem;
                font-weight: 600;
            
                border-radius: 0.25rem;
                border: 0;

                transition: filter 0.2s;

                &:hover{
                    filter: brightness(0.9)
                }
            }            
        }
`

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    margin: 1rem 0;


`

interface RadioBoxProps{
    isActive: boolean,
    activeColor: "green" | "red"
}

const colors = {
    green: "#33CC95",
    red: "#E52E4D"
}

export const RadioBox = styled.button` 
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props: RadioBoxProps) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : "transparent"};
    
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    span{
        color: var(--text-title);
        font-size: 1rem;
        margin-left: 1rem;
    }

    img{
        height: 1.5rem
    }

    &:hover{
        border-color: ${darken(0.1, "#d7d7d7")}
    }


`
