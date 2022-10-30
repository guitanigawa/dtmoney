import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export default function TransactionsTable(){
    useEffect(()=>{
        api.get("/transactions")
            .then(res=>console.log(res.data))

    }, [])


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>b</th>
                        <th>b</th>
                        <th>b</th>
                        <th>b</th>
                        
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )  
}