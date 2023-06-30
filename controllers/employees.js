const { default: mongoose } = require('mongoose');
const Employee = require('../models/employee');

module.exports = {
  show: showPage, 
  index: indexPage,
  new: newPage,
  edit: editPage,
  create: createEmployee,
  update: updateEmployee,
  delete: deleteEmployee
}

// ========================= GET FUNCTIONS ======================//

async function indexPage(req, res) {
  try {
    const employees = await Employee.find({})
    res.render('index', { 
      employees
    })
  } catch {
    console.log('error')
  }
  
}
async function showPage(req, res,){
  try {
    const employee = await Employee.findById(req.params.id)
    res.render('show', {
      employee
    })
  } catch {
    console.log('error')
  }
}

function newPage(req, res){
  res.render('new')
}

async function editPage(req, res){
  try {
    const employee = await Employee.findById(req.params.id)
    res.render('edit', {
      employee
    })
  } catch {
    console.log('error')
  }
}

//============================= ACTIONS FUNCTIONS =========================//


async function createEmployee(req, res){
  try {
    await Employee.create(req.body)
    res.redirect('/employees')
  } catch {
    console.log('error')
  }
}

async function updateEmployee(req, res){
  try {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/employees/' + req.params.id)
  } catch {
    console.log('error')
  }
}

async function deleteEmployee(req, res){
  try{
    await Employee.findByIdAndRemove(req.params.id)
    res.redirect('/employees')
  } catch{
    console.log('error')
  }
}