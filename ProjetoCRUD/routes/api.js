const express = require("express"); //instancia do express

const router = express.Router(); //modulariza as rotas

const db = require('../db'); //conecta com o banco de dados

//Criar as Rotas:
//cadastrar usuário:
//POST --> INSERT

router.post('/cadastrar', (req,res)=>{
    const {nome, email} = req.body;

    db.query("insert into users(nome,email) values (?, ?)", [nome, email], 
        (err, result) =>{
            if(err) return res.status(500).send(err);
            res.status(201).json({id:result.insertId, nome, email}); 
        }
    );
});

//editar usuário


//listar todos os usuários

router.get("/listar", (req, res)=>{
    db.query("select * from users", (err, results)=>{
        if(err) return res.status(500).send(err);
        res.json(results);         
    });
});

//excluir o usuário

//Quando já sabe o id do usuário que deeja excluir:
/*router.delete("/apagar", (req, res)=>{
    db.query("delete from users where id=2", (err, results)=>{
        if(err) return res.status(500).send(err);
        res.json(results); 
    });
});*/

//Quando NÃO sabe o id do usuário que deseja excluir:
router.delete("/:id", (req, res)=>{
    const {id} = req.params;
    db.query("delete from users where id= ?",[id], (err, results)=>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});
module.exports = router;