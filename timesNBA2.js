const express = require ('express');

const router = express.Router();

const dbK = require ("./config/db");

router.use(express.json());

router.get("/", async(req,res) => {
    try{
        const timesNBA = await dbK("times").orderBy("id");
        res.status(200).json(timesNBA);
    } catch (error) {
        res.status(400).json({ msg: error.message});
    }
});


router.post("/", async (req, res) => {
    const {nome, cores, cidade, ano_criacao } = req.body;
    if (!nome || ! cidade || !cores || !ano_criacao)
    {
        res.status(400).json({msg: "Estão faltando informações verificar validade das informações !" });
        return;
    }
    try{
        const novo = await dbK("times").insert({nome,cores, cidade, ano_criacao});
        res.status(201).json({ id: novo[0] }); 
    }
    catch (error) {
        res.status(400).json({msg:error.message});
    }
});

module.exports = router;