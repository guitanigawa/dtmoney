import { useState } from "react"
import { Container, Content } from "./styles"
import Modal from "react-modal"

import logoImg from "../../assets/logo.svg"

export default function Header(){
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){ 
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){ 
        setIsNewTransactionModalOpen(false)
    }



    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logoImg"/>
                
                <button 
                    type="button" 
                    onClick={handleOpenNewTransactionModal}
                >
                    Nova transação
                </button>


                <Modal 
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h1>oi</h1>
                </Modal>
            </Content>
        </Container>

    )

}