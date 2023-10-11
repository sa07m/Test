const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')




router.post('/createTable', controller.createTable);

router.get('/tables', controller.listTables);

router.get('/table/:tableName', controller.showTableData);

module.exports = router