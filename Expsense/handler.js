 
const ExpenseService  = require('./service.js'); // Import the ExpenseService

class Expenses {
 
  async CreateExpense(req, res, next) {
    try {
      const resp = await ExpenseService.createExpense(req.body);
      res.send(resp);
    } catch (error) {
      console.error('Error while creating expense:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async GetExpenses(req, res, next) {
    try {
      const expenses = await ExpenseService.getAllExpenses();
      res.json(expenses);
    } catch (error) {
      console.error('Error while getting expenses:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async UpdateExpense(req, res, next) {
    try {
      const { id } = req.params;
      let query={
        Id:parseInt(id)
      }
      const resp = await ExpenseService.updateExpense(query, req.body);
      res.send(resp);
    } catch (error) {
      console.error('Error while updating expense:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async DeleteExpense(req, res, next) {
    try {
      const { id } = req.params;
       let query={
        Id:parseInt(id)
      }
      const resp = await ExpenseService.deleteExpense(query);
      res.send(resp);
    } catch (error) {
      console.error('Error while deleting expense:', error);
      res.status(500).json({ error: error.message });
    }
  }

    async GetExpenseById(req, res, next) {
    try {
      const { id } = req.params;
       let query={
        Id:parseInt(id)
      }
      const expense = await ExpenseService.getExpenseById(query);

      if (!expense) {
        res.status(404).json({ message: 'Expense not found' });
        return;
      }

      res.json(expense);
    } catch (error) {
      console.error('Error while getting expense by ID:', error);
      res.status(500).json({ error: error.message });
    }
  }
 
}

module.exports = Expenses;
