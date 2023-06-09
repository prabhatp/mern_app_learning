const asyncHandler = require('express-async-handler');

// @desc Get goals
///@route GET /api/goals
// @acess Private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Get Goals"})
})

// @desc Set goal
///@route POST /api/goals
// @acess Private
const setGoal = asyncHandler(async(req, res) => {
    // console.log(req.body);
    if (!req.body.text) {
        // res.status(400).json({message: "Please add a text field"});
        throw new Error('Please add a text field');
    }
    res.status(200).json({message: "Set Goals"})
})

// @desc Update goal
///@route PUT /api/goals/:id
// @acess Private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc Delete goal
///@route DELETE /api/goals/:id
// @acess Private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}