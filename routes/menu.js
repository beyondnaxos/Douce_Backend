module.exports = app => {
 
    const menu = require("./../controllers/menu.js");
    const db = require('../models');
    var router = require("express").Router();

  
    
    
    // Retrieve all Tutorials
    router.get("/epilation", menu.epilation);
    router.get("/makeup", menu.makeup);
    router.get("/visage", menu.visage);
    router.get("/mgs", menu.mgs);
    router.get("/mains", menu.mains);
    router.get("/pieds", menu.pieds);
  
    
  
    app.use('/api/menu', router);
  };