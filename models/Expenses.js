const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    Id: {
        type: Number,
        unique: true,
    },
    Amount: {
        type: String,
    },
    Description: {
        type: String,
    },
    Created_At: {
        type: Date,
        default: Date.now,
    },
    Updated_At: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update the `Updated_At` field and auto-increment the `Id` before saving
expenseSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const latestDocument = await this.constructor.findOne({}, {}, { sort: { Id: -1 } });
            this.Id = latestDocument ? latestDocument.Id + 1 : 1;
            this.Updated_At = new Date();
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
