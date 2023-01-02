const dbInit = require("../dbInit");
var employeeList = async function listEmployees() {
    try {

        console.log("Reading rows from the Table...");
        var resultSet = await dbInit.get().request().query(`SELECT EmpName as name, 
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
            console.log("%s\t%s\t%s\t%s\t%s", row.name, row.surname,row.phone,row.address, row.id);
        });
        // close connection only when we're certain application is finished
    } catch (err) {
        console.error(err.message);
    }
}

