const express = require('express');
const router = express.Router();

const dbK = require("./config/db");

router.use(express.json());


//le as conferencias
router.get("/", async(req, res) =>{
    try {
        const conferencias = await dbK("conferencias").orderBy("lado");
        res.status(200).json(conferencias);
    }catch(error) {
        res.status(400).json({msg:error.message});
    }

});

router.get("/conferencia", async (req, res) => {
    try {
        const conferencia = await dbK("conferencias as c")
            .select("c.id", "time", "lado")
            .innerJoin('time', "times_id", 'times.id');
            res.status(200).json(conferencia);
    }   catch (error) {
        res.status(400).json({msg : error.message});
    }
});

router.post ("/", async (req, res) => {

    const {lado, time} = req.body;

    if(!time || !lado){
        res.status(400).json({msg : "Falta inserir dados, revise !"})
        return;
    }
    try {
        const novo = await dbK("conferencias").insert({time,lado});

        res.status(201).json({ id : novo[0]});

    } catch (error) {
        res.status(400).json({msg: error.message});
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;

    const {lado, time} = req.body;

    try {

        await dbK("conferencias").update({lado, time}).where("id", id);
       
        res.status(200).json();
    } catch (error){

        res.status(400).json({msg: error.message});

    }
});

router.delete("/:time", async (req,res) => {
    const { id } = req.params;
    try {
        await dbK ("conferencias").del().where({ id });
        res.status(200).json();
    } catch (error) {
        res.status(400).json({msg :error.message});
    }
});
//qtd times por conferencia
router.get("/lados", async (req, res) => {
    // const { wordkey } = req.params;
    try{
        const numTimeConf = await dbK("conferencias").select("lado").count({ num: "id" }).groupBy("lado")
           
        res.status(200).json(numTimeConf);
    } catch (error) {
        res.status(400).json({ msg: error.message});
    }
});
//pesquisar por times
router.get("/pesq-times/:wordkey", async (req,res) => {
        const {wordkey} = req.params;
        try{
            const lados = await dbK("conferencias").select("lado")
            .where("time", "like", `%${wordkey}%`)
            res.status(200).json(lados);
        }catch (error) {
            res.status(400).json({ msg: error.message }); // retorna status de erro e msg
          }
})

module.exports = router;