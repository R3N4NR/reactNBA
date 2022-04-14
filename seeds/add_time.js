exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, 
      nome: 'Los Angeles Lakers',
      cidade: 'Los Angeles',
      cores: "Dourado e Roxo",
      ano_criacao: "1947"
    },
    {id: 2, 
      nome: 'Chicago Bulls',
      cidade: 'Chicago',
      cores: "Preto e Vermelho",
      ano_criacao: "1947"
    },
    {id: 3, 
      nome: 'Memphis Grizzlies',
      cidade: 'Memphis',
      cores: "Azul e Branco",
      ano_criacao: "1947"
    },
    {id: 4, 
      nome: 'Brooklyn Nets',
      cidade: 'Nova York',
      cores: "Laranja e Azul",
      ano_criacao: "1947"
    },
    {id: 5, 
      nome: 'Boston Celtics',
      cidade: 'Boston',
      cores: "Verde e Branco",
      ano_criacao: "1947"
    }
    

  ]);
};
