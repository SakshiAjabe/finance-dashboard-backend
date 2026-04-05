const Record = require('../models/Record');

exports.getSummary = async (req, res, next) => {
  try {
    const result = await Record.aggregate([
      { $match: { userId: req.user.id } },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" }
        }
      }
    ]);

    let income = 0, expense = 0;

    result.forEach(item => {
      if (item._id === "income") income = item.total;
      else expense = item.total;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense
    });
  } catch (err) {
    next(err);
  }
};