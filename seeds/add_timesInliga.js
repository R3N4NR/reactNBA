
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('times').del()
  await knex('times').insert([
    {
      nome: 'Golden State Warriors',
      cores:'Azul e Amarelo',
      cidade: 'San Francisco',
      ano_criacao:'1946',
      conferencia_id: '2'
    },
      
    {
      nome: 'Chicago Bulls',
      cores:'Vermelho e Preto',
      cidade: 'Chicago',
      ano_criacao:'1966',
      conferencia_id: '1'
      },
    {nome: 'Brooklyn Nets',
    cores:'Branco e Preto',
      cidade: 'Nova York',
      ano_criacao:'1967',
      conferencia_id: '1'
      }

  ]);
}
