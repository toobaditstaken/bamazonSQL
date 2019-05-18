var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "flash116", 
    database: "bamazon_db"
});

function displayAll() {
    
    connection.query('SELECT * FROM Products', function(error, response) {
        if (error) { 
            console.log(error) 
        };
        
        var theDisplayTable = new Table({
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            colWidths: [10, 30, 18, 10, 14]
        });
        for (i = 0; i < response.length; i++) {
            theDisplayTable.push(
                [response[i].ItemID, response[i].ProductName, response[i].DepartmentName, response[i].Price, response[i].StockQuantity]
            );
        }
        console.log(theDisplayTable.toString());
        inquireForPurchase();
    });
};

function inquireForPurchase() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "What is the item number of the item you wish to purchase?"
        }, {
            name: 'Quantity',
            type: 'input',
            message: "How many would you like to buy?"
        },

    ]).then(function(answers) {
        var quantityDesired = answers.Quantity;
        var IDDesired = answers.ID;
        purchaseFromDatabase(IDDesired, quantityDesired);
    });

}