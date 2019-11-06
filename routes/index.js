var express = require('express');
var router = express.Router();
const usAgencyModel = require("../model/usagency");
/* GET home page. */
router.get('/', async function(req, res, next) {
  const UsAgencyData =  await usAgencyModel.getAll();
  console.log(UsAgencyData)
  res.render('template', {
    locals: {
      title: 'Government Agencies',
      data: UsAgencyData
    },
    partials: {
      partial: 'partial-single'

    }

    });
});

module.exports = router;
