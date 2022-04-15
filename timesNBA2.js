const express = require('express');
const router = express.Router();

const dbK = require("./config/db");

router.use(express.json());


//le as conferencias
router.get("/", async(req, res) =>{
    try {
        const times = await dbK("times").orderBy("nome");
        res.status(200).json(times);
    }catch(error) {
        res.status(400).json({msg:error.message});
    }

});

router.get("/times", async (req, res) => {
    try {
        const times = await dbK("times as t")
            .select("t.id","nome", "cores", "cidade", "ano_criacao")
            .innerJoin("conferencia_lado", "conferencia_lado", "conferencias.lado");
            res.status(200).json(times);
    }   catch (error) {
        res.status(400).json({msg : error.message});
    }
});

router.post ("/", async (req, res) => {

    const {nome, cores, cidade, ano_criacao} = req.body;

    if(!nome || !cores || !cidade || !ano_criacao){
        res.status(400).json({msg : "Falta inserir dados, revise !"})
        return;
    }
    try {
        const novo = await dbK("times").insert({nome, cores, cidade, ano_criacao});

        res.status(201).json({ id : novo[0]});

    } catch (error) {
        res.status(400).json({msg: error.message});
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;

    const {nome, cores, cidade, ano_criacao} = req.body;

    try {

        await dbK("times").update({nome, cores, cidade, ano_criacao}).where("id", id);
       
        res.status(200).json();
    } catch (error){

        res.status(400).json({msg: error.message});

    }
});

router.delete("/:id", async (req,res) => {
    const { id } = req.params;
    try {
        await dbK ("times").del().where({ id });
        res.status(200).json();
    } catch (error) {
        res.status(400).json({msg :error.message});
    }
});


router.get("/pesq-campos/:keyword", async (req, res) => {
    const {keyword} = req.params;
    try {
        const times = await dbK("times").select("nome", "cores", "cidade", "ano_criacao") 
            .where("nome", "like", `%${keyword}%`)
            res.status(200).json(times);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
});

router.put("/altera-ano/:ano_criacao/:nome", async (req, res) =>{
    const {ano_criacao, nome} = req.params;
    try{
        await dbK("times").update({ano_criacao: dbK.raw(`${ano_criacao}`)}).where({nome});
        res.status(200).json();
    } catch (error) {
        res.status(400).json({msg : error.message});
    }
});

router.get("/ordem/:campo", async (req , res) => {
    const campo = req.params.campo;
    try {
        const times = await dbK("times").orderBy(campo)
        res.status(200).json(times);
    } catch (error){
        res.status(400).json({msg: error.message});
    }
})


module.exports = router;