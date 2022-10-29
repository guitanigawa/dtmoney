import logoImg from "../../assets/logo.svg"
import { Container, Content} from "./styles"

export default function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logoImg"/>
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>

    )

}