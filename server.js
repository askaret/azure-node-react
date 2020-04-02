const express = require('express');
const compression = require('compression');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
console.log(process.env.NODE_ENV);
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const sql = require("mssql");

const config = {
    user: '',
    password: '',
    server: 'localhost\\KJELLER2019',
    database: 'BouvetBeertastingDbFromAzure',
};

//const sql = require('mssql')


sql.connect(config, function (err) {
    let sqlRequest = new sql.Request();
    let sqlQuery = 'SELECT * from Beer';
    sqlRequest.query(sqlQuery, function (err, data){

        if(err) console.log(err);

        //console.log(data);
        console.log(data.recordset);
        console.table(data.recordset);
        console.log(data.recordset[0]);

        sql.close();
    });
});

app.prepare()
    .then(() => {
      
        const server = express();
        server.use(compression());

        // var config = {
        //     userName: 'beerman',
        //     password: '',
        //     server: 'KJELLER',          
        //     options: {
        //       database: 'BouvetBeertastingDbFromAzure',
        //       instancename: 'KJELLER19'
        //     }
        //   };
        
        // sql.connect(config).then(pool => {
        //     return pool.request()
        //     .query('select * from Beer');
        // }).then(result => {
        //     //console.table(result)    
        // }).catch(err => {
        //   console.log(err)
        // });
        
        server.get('*', (req, res) => {
            return handle(req, res);
        });
        
        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });