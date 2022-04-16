const express = require('express');
const router = express.Router();

const dbK = require("./config/db");

router.use(express.json());


//le as conferencias
router.get("/", async (req, res) => {
    try {
        const times = await dbK("times").orderBy("id");
        res.status(200).json(times);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }

});
//
router.get("/times", async (req, res) => {
    try {
        const times = await dbK("times as t")
            .select("t.id", "nome", "cores", "cidade", "ano_criacao").innerJoin("conferencias", "conferencia_id", "conferencias.id")
        res.status(200).json(times);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
//adicionar itens na tabela OK
router.post("/", async (req, res) => {

    const { nome, cores, cidade, ano_criacao, conferencia_id } = req.body;

    if (!nome || !cores || !cidade || !ano_criacao) {
        res.status(400).json({ msg: "Falta inserir dados, revise !" })
        return;
    }
    try {
        const novo = await dbK("times").insert({ nome, cores, cidade, ano_criacao,conferencia_id });

        res.status(201).json({ id: novo[0] });

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
//alterar dados da tabela OK
router.put("/:id", async (req, res) => {
    const id = req.params.id;

    const { nome, cores, cidade, ano_criacao } = req.body;

    try {

        await dbK("times").update({ nome, cores, cidade, ano_criacao }).where("id", id);

        res.status(200).json();
    } catch (error) {

        res.status(400).json({ msg: error.message });

    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await dbK("times").del().where({ id });
        res.status(200).json();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

//listagem por ordem OK
router.get("/:campo", async (req, res) => {
    
    const campo = req.params.campo;
    try {
        
        const times = await dbK("times").select("nome","cores", "cidade", "ano_criacao").orderBy(campo)
        res.status(200).json(times);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
})


//filtragem OK 
router.get("/filtro/:keyword", async (req, res) => {
    const { keyword } = req.params;
    try {
        const times = await dbK("times").select("nome", "cores", "cidade", "ano_criacao").innerJoin('conferencias', 'conferencia_id', 'conferencias.id')
            .where("nome", "like", `%${keyword}%`)
            .orWhere("cores", "like", `%${keyword}%`)
            .orWhere("cidade", "like", `%${keyword}%`)
            .orWhere("ano_criacao", "like", `%${keyword}%`)
        res.status(200).json(times);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }

});


module.exports = router;