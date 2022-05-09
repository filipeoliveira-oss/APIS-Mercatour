import { firebase, db } from "./configDB.js";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, queryEqual } from "firebase/firestore";


//Funcao de consulta de dados em uma collection
export async function GetProducts(){
    var arr = [] 
    try{  
        const querySnapshot = await getDocs(collection(db, 'produtos'))
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

// Funcao para insercao de dados
export async function ProductsAdd(produto) {
    try {
        const docRef = addDoc(collection(db, 'produtos'), 
            produto
        
        )
    } catch (e) {
        console.log('error: ', e)
    }
}


//Funcao para atualizar dados sem que seja reescrito todo o documento
export async function UpdateProduct(update,id) {
    try {

        const toUpdate = doc(db, "produtos", `${id}`);

        updateDoc(toUpdate,update)

    } catch (e) {
        console.log('error: ', e)
    }
}


// Funcao para deletar um document, eh necessario informar um ID para delecao
export async function DeleteProduct(id){
    try {
        deleteDoc(doc(db, 'produtos', `${id}`))
    }catch(e){
        console.log('error: ', e)
    }
}


