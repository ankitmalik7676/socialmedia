const express = require ('express');

const { db } = require ('./db/models.js');

const app = express()


db.sync().then(() => {
    app.listen(2020,() => {
        console.log('server started on http://localhost:2020')
     })
    
}).catch ((err) => {
    console.error(new Error ('Could not start database'))
    console.error(err)
})
