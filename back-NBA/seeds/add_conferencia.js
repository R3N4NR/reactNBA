
exports.seed = async function(knex) {
 
  await knex('conferencias').del()
  await knex('conferencias').insert([
    {
    lado:'leste'},
    { 
    lado: 'oeste'}
  ]);
};
