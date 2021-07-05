const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchemaDetail = new Schema({

    month:{
        type:Date,
        default:Date.now,
        required:[true,'Date required']
    },
    salary: {
        type: Number,
        default: 0
    },
    text: {
        type: String,
        required:[true,'Income required']
    },
})

//create income user details schema
const IncomeUserDetailSchema = new Schema({

    email: String,
    details: [IncomeSchemaDetail]

});

//create income schema
const IncomeSchema = new Schema({
    user: [IncomeUserDetailSchema]
});

const Income = mongoose.model('Income',IncomeSchema);

module.exports = Income;