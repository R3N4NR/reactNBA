
const express = require('express');
const router = express.Router();
const dbKnex = require("../config/db"); 
module.exports = app => {

    const {existsError,notExists} = app.api.validacao;

    router.use(express.json());
//incluir

router.post ("/", async(req,res) => {
    const {nome, cidade,cores, ano_criacao} = req.body;
    try {
        // insert, faz a inserção na tabela produtos (e retorna o id do registro inserido)
        const novo = await dbKnex("fornecedores").insert({ nome, contato });
        res.status(201).json({ id: novo[0] }); // statusCode indica Create
      } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
      }
})
    // const save = async (req, res) => {
    //     const timeNBA = { ...req.body }

    //     if(req.params.id)
    //     timeNBA.id = req.params.id

    //     try{
    //         existsError(timeNBA.nome, 'Nome do time não informado');
    //         existsError(timeNBA.cores, 'Cores do time não informadas');
    //         existsError(timeNBA.cidade, 'Cidade do time não informada');
    //         existsError(timeNBA.ano_criacao, 'Ano de criação do time não informada');

        
    
    //     const timeFromDB = await app.db('times')
    //         .where({nome: timeNBA.nome}.first())
    //         if (!timeNBA.id){
    //         notExists(timeFromDB, 'Time cadastrado na liga')
    //         }
    //     } catch(msg) {
    //         return res.status(400).send(msg);
    //     }

    //     if(!timeNBA.id){
    //         app.db('times')
    //             .update(timeNBA)
    //             .where({id: timeNBA.id})
    //             .then( _ => res.status(204).send())
    //             .catch(err => res.status(500).send(err))

    //     } else {
    //         app.db('times')
    //             .insert(timeNBA)
    //             .then(_ => res.status(204).send())
    //             .catch (err => res.status(500).send(err))
    //     }
    // }
    //     const get = (req,res) => {
    //         app.db('times')
    //             .select('id', 'nome','cores', 'cidade', 'ano_criacao')
                
    //             .then(times => res.json(times))
    //             .catch(err => res.status(500).send(err))

    //         }

    // return {save,get}
    
}

module.exports = router;