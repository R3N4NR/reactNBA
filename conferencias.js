const express = require ('express');

const router = express.Router();

const dbK = require ("./config/db");

router.use(express.json());

router.get("/", async(req,res) => {
    try{
        const conferencias = await dbK("conferencias").orderBy("lado");
        res.status(200).json(conferencias);
    } catch (error) {
        res.status(400).json({ msg: error.message});
    }
});

router.delete("/:id", async (req,res) => {
    const {id } = req.params;
    try {
        await dbK ("conferencias").del().where({ id });
        res.status(200).json();
    } catch (error) {
        res.status(400).json({msg :error.message});
    }
});

router.post("/", async (req, res) => {
    const {lado, time } = req.body;
    if (!lado || !time)
    {
        res.status(400).json({msg: "Estão faltando informações verificar validade das informações !" });
        return;
    }
    try{
        const novo = await dbK("conferencias").insert({lado, time});
        res.status(201).json({ id: novo[0] }); 
    }
    catch (error) {
        res.status(400).json({msg:error.message});
    }
});

module.exports = router;