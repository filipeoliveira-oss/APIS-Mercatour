import { GetProducts, ProductsAdd, UpdateProduct, DeleteProduct } from './Infra/dbFunctions.js'
import express from 'express'
const app = express()

app.use(express.json())


app.get('/products/list', async function (req, res) {

    const ProductsList = await GetProducts()
    res.json({
        mensagem: 'Lista de produtos cadastrados',
        ProductsList
    })

})

app.post('/products/create', async function (req, res) {
    const produto = req.body

    const novoProduto = await ProductsAdd(produto)

    res.json({
        mensagem: 'Novo produto cadastrado com sucesso',
        produto
    })
})

app.put('/products/update/:id', async function (req, res) {
    const update = req.body
    const id = req.params.id

    const productUpdate = await UpdateProduct(update, id)

    res.json({
        mensagem: 'Produto alterado com sucesso'
    })

})

app.delete('/products/delete/:id', async function (req, res) {
    const id = req.params.id

    const deleteProduct = await DeleteProduct(id)

    res.json({
        mensagem: "Produto deletado"
    })
})

app.listen(3000)
