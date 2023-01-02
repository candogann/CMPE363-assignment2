const db = require('../dbInit');

async function deleteEmployee(employee,poolConnection) {
    try {
        
        var deleteString = `DELETE FROM [dbo].[tblEmployee] WHERE Empname='${employee.name}' `;
        console.log(deleteString)
        await db.get().request().query(deleteString);


        
    } catch (err) {
        console.error(err.message);
    }
}