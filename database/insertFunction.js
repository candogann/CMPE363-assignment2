const dbInit = require('../dbInit');

async function insertEmployee(employee, poolConnection) { 
    try {
        var insertString = `INSERT INTO [dbo].[tblEmployee] ("EmpName","EmpSurname","EmpAddress","EmpPhone") VALUES ('${employee.name}','${employee.surname}','${employee.address}','${employee.phone}');`;
        console.log(insertString)
        await dbInit.get().request().query(insertString);

    } catch (err) {
        console.error(err.message);
    }
}