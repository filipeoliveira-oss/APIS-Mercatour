import { firebase, db } from "./configDB.js";
import { collection, addDoc, doc, updateDoc, getDocs} from "firebase/firestore";

export function getDate(){
    var today = new Date();

    var date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`
    
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return `${date}  ${time}`
}

export async function getPayments(){
    var arr = [] 
    try{  
        const querySnapshot = await getDocs(collection(db, 'pagamentos'))
        .then(querySnapshot =>{querySnapshot.forEach((doc) =>{
            arr.push({
                id: doc.id,
                data: doc.data() 
            })
        })})
        
        return arr

    }catch(e){
        console.log('error: ', e)
    }
}


// Funcao para inserir novo pagamento
export async function PaymentAdd() {
    const date = getDate()
    try {
        const docRef =  addDoc(collection(db, 'pagamentos'), 
           
            {
                status_pagamento: 'pendente', 
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
            status_pagamento: 'cancelado',
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
            status_pagamento: 'Concluído',
            dataPagamento: date
        })

    } catch (e) {
        console.log('error: ', e)
    }
}