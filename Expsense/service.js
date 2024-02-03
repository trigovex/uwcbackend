const Expense = require('../models/Expenses.js'); // Assuming you have an Expense model

class ExpenseService {
  async createExpense(data) {
    try {
      const newExpense = new Expense(data);
      const savedExpense = await newExpense.save();
      return savedExpense;
    } catch (error) {
      throw error;
    }
  }

  async getAllExpenses() {
    try {
      const expenses = await Expense.find({}).maxTimeMS(30000);
      return expenses;
    } catch (error) {
      throw error;
    }
  }

  async updateExpense(expenseId, data) {
    try {
        
      const updatedExpense = await Expense.updateOne(expenseId, data, { new: true });
      return updatedExpense;
    } catch (error) {
      throw error;
    }
  }

  async deleteExpense(expenseId) {
    try {
      await Expense.deleteOne(expenseId);
      return { message: 'Expense deleted successfully' };
    } catch (error) {
      throw error;
    }
  }
   async getExpenseById(expenseId) {
    try {
      const expense = await Expense.findOne(expenseId);
      return expense;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ExpenseService();
