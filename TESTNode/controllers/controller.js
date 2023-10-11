const UserModel = require('../models/model')
const express = require('express')

exports.createTable = async (req, res) => {
    console.log('in createtable controller')
  const fieldName = req.body.fieldName
  const fieldType = req.body.fieldType;
  console.log(fieldName+' '+fieldType)
  try {
    const data = await UserModel.create({ 
        fieldName:fieldName,
        fieldType:fieldType
    })
    .then(result=>{
      console.log(fieldName+' '+fieldType)
      res.json(result)
      //res.redirect('/tables')
    })    
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating table.');
  }
};

exports.listTables = async (req, res) => {
  try {
    const tables = await UserModel.findAll();
    res.json(tables);
  } catch (err) {
    console.error(err);
    //res.status(500).send('Error listing tables.');
  }
};

exports.showTableData = async (req, res) => {
  const tableName = req.params.tableName;
  try {
    const tableData = await UserModel.findAll({ where: { tableName } });
    res.render('displayData', { tableName, tableData });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching table data.');
  }
};
