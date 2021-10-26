const Sequelize = require('sequelize')

const db = new Sequelize ({
    dialect :  'mysql',
    database: 'socialmediadb',
    username: 'socialmediauser',
    password: 'socialpass'
})

const Users = db.define ('user' , {

})

const Posts = db.define ('post' , {
    
})

const Comments = db.define ('comment' , {
    
})

module.exports = {
    db,
    Users,
    Posts, 
    Comments
}