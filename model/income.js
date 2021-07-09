const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({

    email:{
        type:String,
        
        required:[true,'Email required']
    },
    month: {
        type: String,
        required:[true,'Date required']
    },
    income: {
        type: String,
        required:[true,'Income required']
    },
    text:{
		type: String,
		required: [true,'Expense required']
	},
	amount:{
		type: String,
		required: [true,'Total required']
	}
})

// //create income user details schema
// const IncomeUserDetailSchema = new Schema({

//     email: String,
//     details: [IncomeSchemaDetail]

// });

// //create income schema
// const IncomeSchema = new Schema({
//     user: [IncomeUserDetailSchema]
// });

const Income = mongoose.model('Income',IncomeSchema);

module.exports = Income;