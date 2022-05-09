import {PaymentAdd, CancelPayment, ConcludePayment} from './Infra/dbFunctions.js'
import express from 'express'
const app = express()

app.use(express.json())


app.post('/paymente/create', function (req, res) {
    PaymentAdd()
    res.json({mensagem: 'Novo pagamento cadastrado'})
})

app.put('/payment/cancel/:id', async function (req, res) {
    const id = req.params.id

    const cancelPayment = await CancelPayment(id)

    res.json({
        mensagem: 'Pagamento cancelado com sucesso'
    })
})

app.put('/payment/conclude/:id', async function (req, res) {
    const id = req.params.id

    const cancelPayment = await ConcludePayment(id)

    res.json({
        mensagem: 'Pagamento efetivado com sucesso'
    })
})

app.listen(3000)