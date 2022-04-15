/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('conferencias').del()
  await knex('conferencias').insert([
    {id: 1, 
      lado: 'oeste',
      time: 'Golden State Warrios'},
    {id: 2, 
      lado: 'leste',
      time: 'Chicago Bulls'},
    {id: 3, 
      lado: 'leste',
      time: 'Brooklyn Nets'},
    {id: 4, 
      lado: 'leste',
      time: 'Miami Heat'},
    {id: 5, 
      lado: 'oeste',
      time: 'Golden State Warrios'},
    {id: 6, 
      lado: 'oeste',
      time: 'Phoenix Suns'},

  ]);
}
