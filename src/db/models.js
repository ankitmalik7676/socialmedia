const Sequelize = require('sequelize')

const db = new Sequelize ({
    dialect :  'mysql',
    database: 'cbsocialmediadb',
    username: 'nsocialuser',
    password: 'cbsocialpass'
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