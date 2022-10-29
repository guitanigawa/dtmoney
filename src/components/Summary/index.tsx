import { Container, Block } from "./styles";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"


export default function Summary(){
    return(
        <Container>
            <Block>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="incomeImg" />                       
                </header>

                <strong>R$$1000,00</strong>
            </Block>
            
            <Block>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="outcomeImg" />                       
                </header>

                <strong>-R$500,00</strong>
            </Block>
            
            <Block>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="totalImg"/>                 
                </header>

                <strong>R$500,00</strong>
            </Block>
        </Container>
    )


}