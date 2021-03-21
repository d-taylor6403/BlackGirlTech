const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'dannigirl',
        email: 'danni@gmail.com',
        password: 'password5666'
    },
    {
        username: 'bakerbae',
        email: 'bakerbae@gmail.com',
        password: 'password143'
    },
    {
        username: 'afrocoder',
        email: 'afrocoder@gmail.com',
        password: 'password5875'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;