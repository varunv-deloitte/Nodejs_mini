const express = require("express");
const router = express.Router();
const matchController = require("../controller/matchController");

router.get('/',matchController.getAllMatches);
router.get('/today',matchController.getMatchByDate);
router.post('/add',matchController.addNewMatch);
router.put('/update',matchController.updateMatch);
router.get('/matchbydate/:date',matchController.getMatchByDate);
router.delete('/cancel/:id',matchController.cancelMatch)


module.exports = router;