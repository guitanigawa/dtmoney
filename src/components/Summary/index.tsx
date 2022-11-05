import { Container, Block, TotalBlock } from "./styles";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

import { useTransactions } from "../../hooks/useTransactions";

export default function Summary(){
    const { transactions } = useTransactions()

    // const [incomes, setIncomes] = useState(0)
    // const [outcomes, setOutcomes] = useState(0)
    // const [total, setTotal] = useState(0)

    // useEffect(() => {
    //     // console.log(transactions)

    //     setIncomes(0)
    //     setOutcomes(0)
    //     setTotal(0)

    //     transactions.forEach(transaction=>{

    //         console.log(transaction)
            // if(transaction.type === "deposit"){
            //     console.log(incomes)
            //     setIncomes(incomes + transaction.value)
            //     console.log(incomes)
            //     setTotal(total + transaction.value)
            // }else{
            //     setOutcomes(outcomes + transaction.value)
            //     setTotal(total - transaction.value)
            // }
    //     })
    // }, [transactions])

    const summary = transactions.reduce((acc, transaction)=>{
        if(transaction.type === "deposit"){
            acc.deposits += transaction.value
            acc.total += transaction.value
        }else{
            acc.withdraws += transaction.value
            acc.total -= transaction.value
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return(
        <Container>
            <Block>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="incomeImg" />                       
                </header>

                <strong>
                    {
                        new Intl.NumberFormat("pt-BR", 
                        {
                            style: "currency",
                            currency: "BRL"
                        })
                            .format(summary.deposits)
                    }
                </strong>
            </Block>
            
            <Block>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="outcomeImg" />                       
                </header>

                <strong>
                    {
                        new Intl.NumberFormat("pt-BR", 
                        {
                            style: "currency",
                            currency: "BRL"
                        })
                            .format(summary.withdraws)
                    }
                </strong>
            </Block>
            
            <TotalBlock bgColor={summary.total}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="totalImg"/>                 
                </header>

                <strong>
                    {
                        new Intl.NumberFormat("pt-BR", 
                        {
                            style: "currency",
                            currency: "BRL"
                        })
                            .format(summary.total)
                    }
                </strong>
            </TotalBlock>
        </Container>
    )


}