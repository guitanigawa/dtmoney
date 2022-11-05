import { useState } from "react"

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import NewTransactionModal from "./components/NewTransactionModal"
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";
import TransactionsProvider from "./hooks/useTransactions";

Modal.setAppElement("#root")


export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () =>{ 
      setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () =>{ 
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle/>
      
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      
      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

    </TransactionsProvider>
  )
}

