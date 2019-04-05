const express = require("express");
const router = express.Router();

// Load in controller
const controllers = require("../controllers/controllers");

// Define routes
router.get('/', controllers.index.hello);
router.get('/todos', controllers.index.get);

// Export routes
module.exports = router;