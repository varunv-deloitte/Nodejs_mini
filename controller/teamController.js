const teamService = require("../service/teamService");
const teams = require('../data/Teams')

function getAllTeamAndPlayers(req,res){
    if(teams.length!=0){
       return res.status(200).json({
            message: "team details found",
            data:teams
        });
    }
    else{
       return res.status(400).json({
            message: "team details not found",
            data:null
        })
    }
}

function getAllPlayersbyTeam(req,res){
    const { id } = req.params;
    let resTeam = teams.filter((team)=>team.id == id);
    if(resTeam.length!=0){
        return res.status(200).send({
            message: "team player details found",
            data:resTeam
        });
    }
    else{
        return res.status(400).send({
            message: "team player details not found",
            data:[]
        })
    }
}

function getTopScoreAndWicket(req,res){
    const topStats = {};

    // Loop through the teams array
    for (const team of teams) {
      const topScorer = team.players.reduce((prev, current) => {
        return prev.score > current.score ? prev : current;
      });
  
      const topWicketTaker = team.players.reduce((prev, current) => {
        return prev.wickets > current.wickets ? prev : current;
      });
  
      topStats[team.name] = { topScorer, topWicketTaker };
    }

    res.status(200).json({ topStats });
}

module.exports = {
    getAllTeamAndPlayers,
    getAllPlayersbyTeam,
    getTopScoreAndWicket
}