var dbInit = require("../dbInit");

var listEmployees = async function() {
    try {
        console.log("Reading rows from the Table...");
        db = await dbInit.get()
        var resultSet = await db.request().query(`SELECT EmpName as name, 
        EmpSurname as surname,
        EmpPhone as phone,
        EmpAddress as address,
        EmpID as id
        FROM [dbo].[tblEmployee]`);

        //var idResults = await poolConnection.request().query(`SELECT id from [dbo].[tblEmployee]`)

        //console.log(idResults)

        console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        
        console.log("%s\t", columns.substring(0, columns.length +5 ));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
           // console.log("%s\t%s\t%s\t%s\t%s", row.name, row.surname,row.phone,row.address, row.id);
        })

        var tempObj = [];

        await resultSet.recordset.forEach(row => {
            var rsElements = {};
            rsElements['name'] = row.name;
            rsElements['surname'] = row.surname;
            rsElements['phone'] = row.phone;
            rsElements['address'] = row.address;
            rsElements['id'] = row.id;
            tempObj.push(rsElements);
        })

        var jsonf = await JSON.stringify(tempObj,undefined,2)
        return jsonf
        // close connection only when we're certain application is finished
    } catch (err) {
        console.error(err.message);
    }
}

async function insertEmployee(employee) { 
    try {
        var insertString = `INSERT INTO [dbo].[tblEmployee] ("EmpName","EmpSurname","EmpAddress","EmpPhone") VALUES ('${employee.name}','${employee.surname}','${employee.address}','${employee.phone}');`;
        console.log(insertString)
        var db = await dbInit.get();
        await db.request().query(insertString);

    } catch (err) {
        console.error(err.message);
    }
}

async function deleteEmployee(employee) {
    try {
        
        var deleteString = `DELETE FROM [dbo].[tblEmployee] WHERE Empname='${employee.name}' `;
        console.log(deleteString)
        var db = await dbInit.get();
        var x = await db.request().query(deleteString);


        
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = {
    listEmployees: listEmployees,
    insertEmployee: insertEmployee,
    deleteEmployee: deleteEmployee
}