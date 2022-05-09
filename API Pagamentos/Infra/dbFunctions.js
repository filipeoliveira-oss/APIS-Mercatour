import { firebase, db } from "./configDB.js";
import { collection, addDoc, doc, updateDoc} from "firebase/firestore";

export function getDate(){
    var today = new Date();

    var date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`
    
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return `${date}  ${time}`
}


// Funcao para inserir novo pagamento
export async function PaymentAdd() {
    const date = getDate()
    try {
        const docRef =  addDoc(collection(db, 'pagamentos'), 
           
            {
                pagamento: 'pendente', 
                dataPedido: date,
                dataPagamento: null
            }
        )
    } catch (e) {
        console.log('error: ', e)
    }
}


// Funcao para cancelar pagamento
export async function CancelPayment(id) {
    const date = getDate()
    try {

        const toUpdate =  doc(db, "pagamentos", `${id}`);

        updateDoc(toUpdate, {
            pagamento: 'cancelado',
            dataPagamento: date
        })

    } catch (e) {
        console.log('error: ', e)
    }
}


export async function ConcludePayment(id) {
    const date = getDate()
    try {

        const toUpdate =  doc(db, "pagamentos", `${id}`);

        updateDoc(toUpdate, {
            pagamento: 'Concluído',
            dataPagamento: date
        })

    } catch (e) {
        console.log('error: ', e)
    }
}