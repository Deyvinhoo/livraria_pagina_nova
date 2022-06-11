'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
      title: 'Por que dormimos II',
      edition_year: 2000,
      author:'Deyvinhoo',
      pages:100,
      stock: 3,
      },
      {
        title: 'Por que dormimos III',
        edition_year: 2000,
        author:'Deyvinhoo',
        pages:100,
        stock: 3,
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
