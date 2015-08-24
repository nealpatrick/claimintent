var express = require('express');
var router = express.Router();

// Require MongoDB Driver
var MongoClient = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Claim Intent' });
});

/* POST a new record */
router.post('/records', function(req, res, next) {
    /* create variables for database here */
    console.log(req.body.clmtfirst);
    console.log(req.body.clmtmiddle);
    console.log(req.body.clmtlast);
    console.log(req.body.clmtaddr);
    console.log(req.body.clmtcity);
    console.log(req.body.clmtstate);
    console.log(req.body.clmtzip);
    console.log(req.body.clmthomephn);
    console.log(req.body.clmtbusphn);
    console.log(req.body.clmtage);
    console.log(req.body.clmtssn);
    console.log(req.body.clmtmarstat);
    console.log(req.body.clmtspouse);
    console.log(req.body.incdate);
    console.log(req.body.inctime);
    console.log(req.body.incloc);
    console.log(req.body.incdesc);
    console.log(req.body.propdam);
    console.log(req.body.hasins);
    console.log(req.body.insclaimfiled);
    console.log(req.body.insco);
    console.log(req.body.inspolnum);
    console.log(req.body.insstart);
    console.log(req.body.insend);
    console.log(req.body.estdam);
    console.log(req.body.wit1name);
    console.log(req.body.wit2name);
    console.log(req.body.wit3name);
    console.log(req.body.injname);
    console.log(req.body.injaddr);
    console.log(req.body.injdesc);
    console.log(req.body.doctor);
    console.log(req.body.hosp);
    console.log(req.body.hospaddr);
    console.log(req.body.occ);
    console.log(req.body.employer);
    console.log(req.body.timelost);
    console.log(req.body.timeloststart);
    console.log(req.body.timelostend);
    console.log(req.body.salwk);
    console.log(req.body.salhr);
    console.log(req.body.increp);
    console.log(req.body.increpto);
    console.log(req.body.increpdate);
    
    res.redirect('/');
});

module.exports = router;