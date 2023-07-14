const express = require("express");
const router = express.Router();
const teamController = require("../controller/teamController")

router.get('/all',teamController.getAllTeamAndPlayers);
router.get('/top',teamController.getTopScoreAndWicket);
router.get('/:id',teamController.getAllPlayersbyTeam);
module.exports = router;