import styled from "styled-components"

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem

`

export const Block = styled.div`
    padding: 1.5rem 2rem;
    background: var(--shape);
    border-radius: 0.25rem;
    color: var(--text-title);

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem
    }   
`

interface TotalBlockProps{
    bgColor: number
}

const colors = {
    green: "#33CC95",
    red: "#E62E4D"
}

export const TotalBlock = styled(Block)`
    background: ${(props: TotalBlockProps)=>{
        if(props.bgColor === 0){
            return "gray"
        }else if(props.bgColor > 0){
            return colors.green
        }else{
            return colors.red
        }
    }};
    color: var(--shape)
`