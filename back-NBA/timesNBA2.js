const express = require('express');
const router = express.Router();
const cors = require('cors')
const dbK = require("./config/db");

router.use(express.json());

router.use(cors())

//le as conferencias
router.get("/", async (req, res) => {
    try {
        const times = await dbK("times").orderBy("times.id")
        res.status(200).json(times);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }

});
//
router.get("/times", async (req, res) => {
    try {
        const times = await dbK("times as t")
            .select("t.id", "nome", "cores", "cidade", "ano_criacao")
        res.status(200).json(times);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
//adicionar itens na tabela OK
router.post("/", async (req, res) => {

    const { nome, cores, foto ,cidade, ano_criacao } = req.body;

    if (!nome || !cores || !foto || !cidade || !ano_criacao) {
        res.status(400).json({ msg: "Falta inserir dados, revise !" })
        return;
    }
    try {
        const novo = await dbK("times").insert({ nome, cores, foto, cidade, ano_criacao});

        res.status(201).json({ id: novo[0] });

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
//alterar dados da tabela OK
router.put("/:id", async (req, res) => {
    const id = req.params.id;

    const { nome, cores, foto, cidade, ano_criacao } = req.body;

    try {

        await dbK("times").update({ nome, cores, foto, cidade, ano_criacao }).where("id", id);

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


router.get("ordem/:campo", async (req, res) => {
    
    const campo = req.params.campo;
    try {
        
        const times = await dbK("times").select("nome","cores", "foto", "cidade", "ano_criacao").orderBy(campo)
        res.status(200).json(times);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
})


//filtragem OK 
router.get("/filtro/:keyword", async (req, res) => {
    const { keyword } = req.params;
    try {
        const times = await dbK("times").select("id","nome", "cores", "foto","cidade", "ano_criacao")
            .where("id", "like", `%${keyword}%`)
            .orWhere("nome", "like", `%${keyword}%`)
            .orWhere("cores", "like", `%${keyword}%`)
            .orWhere("foto", "like", `%${keyword}%`)
            .orWhere("cidade", "like", `%${keyword}%`)
            .orWhere("ano_criacao", "like", `%${keyword}%`)
        res.status(200).json(times);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }

});

router.get("/ano", async(req,res) => {
    try {
        
        const timesDoANo = await dbK("times")
        .select("ano_criacao").count({ total: "nome"}).groupBy("ano_criacao");
        res.status(200).json(timesDoANo);
      } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
      }
})


router.get("/resumo", async(req,res) => {
    try {
        // métodos que podem ser utilizados para obter dados estatísticos da tabela
    const consulta = await dbK("times")
    .count({ num: "*" })
    .max({ maior: "ano_criacao" })
    .min({ menor: "ano_criacao" });

  const { num, maior, menor } = consulta[0];
  res.status(200).json({ num, maior, menor });
} catch (error) {
  res.status(400).json({ msg: error.message }); // retorna status de erro e msg
}

})

module.exports = router;