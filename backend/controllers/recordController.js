const Record = require('../models/Record');

exports.createRecord = async (req, res, next) => {
  try {
    const record = await Record.create({
      ...req.body,
      userId: req.user.id
    });

    res.status(201).json(record);
  } catch (err) {
    next(err);
  }
};

exports.getRecords = async (req, res, next) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    const query = { userId: req.user.id };

    if (type) query.type = type;
    if (category) query.category = category;

    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const records = await Record.find(query);

    res.json(records);
  } catch (err) {
    next(err);
  }
};