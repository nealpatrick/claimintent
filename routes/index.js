var express = require('express');
var router = express.Router();

// Require wkhtmltopdf (Webkit HTML to PDF)
var wkhtmltopdf = require('wkhtmltopdf');

// Require MongoDB driver, assert
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
   
/* GET home page */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Claim Intent' });
});

/* POST a new record */
router.post('/record', function(req, res, next) {
   // Add a record to the database
   // Connect to MongoDB Server
   var dbUrl = 'mongodb://localhost:27017/claimintentdb'
   mongoClient.connect(dbUrl, function(err, db){
      assert.equal(null, err);
      console.log("Connected correctly to server.");
      db.close();
   });

//  Parse data from body to 
   
/*  Testing PDFKit functionality  */
//  Require PDFKit
//  var PDFdoc = require('pdfkit');
//  var doc = new PDFdoc;
//  var clmtfirst = req.body.clmtfirst;
//  var stream = fs.createWriteStream('/generated/' + clmtfirst +'.pdf');
//  doc.pipe(stream);
//  doc.text(clmtfirst);
//  res.set('Content-Type', "application/pdf");
//  var buff = new Buffer();
//  res.send(buff);
//  doc.end();

/* Testing wkhtmltopdf functionality */
   
   
//  console.log('File saved.');
   res.redirect('/');
});

module.exports = router;