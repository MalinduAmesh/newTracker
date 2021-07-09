const express = require('express')
const router = express.Router()
const Income = require('../model/income')


router.post('/addIncome', async (req, res) => {

	const income1= req.body.income;
	const expense2=req.body.expense;
	const incomeValue=parseInt(income1)
	const expenseValue=parseInt(expense2)
    // const total=incomeValue-expenseValue

	
	
	try {
		const income = new Income({

			
			email: req.body.email,
			month: req.body.month,
			income: req.body.income,
			text:req.body.text,
			amount:req.body.amount


		});
          
		// Solved Income
		// Income.income-Income.express
		await income.save().then((data) => {
			console.log(data);
			res.send(data);
		});
	} catch (error) {
		res.status(422).send(error.message);
	}
});

router.post('/getIncomeD', async (req, res) => {
	try {
		const { email } = req.body;
		const mail = await Income.find({ email })
        .then((data) => {
			console.log(data);
			res.send(data);
		});
	} catch (error) {
		res.status(422).send(error.message);
	}

	// try {
	// 	const income = new Income({
	// 		mail: req.body.mail
	// 	});
	// 	await income.findOne({ mail }).then((data) => {
	// 		console.log(data);
	// 		res.send(data);
	// 	});
	// } catch (error) {
	// 	res.status(422).send(error.message);
	// }
});

module.exports = router;