const express = require("express");
const router = express.Router();
const Expenses = require("./handler.js");
const expenses = new Expenses();
router.post("/expenses/create", expenses.CreateExpense );
router.put("/expenses/update/:id", expenses.UpdateExpense );
router.delete("/expenses/delete/:id", expenses.DeleteExpense);
router.get("/expenses", expenses.GetExpenses);
router.get("/expenses/:id", expenses.GetExpenseById)

module.exports = router;