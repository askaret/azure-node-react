const sql = require("mssql");

const config = {
    user: 'beerman',
    password: '',
    server: 'localhost\\KJELLER2019',
    database: 'BouvetBeertastingDbFromAzure',
    port: 51394
};

export function execute(queryString) {
    if (queryString === undefined)
        return null;

    sql.connect(config).then(pool => {
        return pool.request()
            .query(queryString);
    }).then(result => {
         console.table(result.recordset);
         return result.recordset;
    }).catch(err => {
        console.log(err)
    });    
}
