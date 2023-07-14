const { getTopScoreAndWicket } = require("../controller/teamController");
const teams = require("../data/Teams");

let teamService =  {

    getAllTeamAndPlayers: (req,res)=>{
        if(teams!=0){
            res.status(200).send({
                message: "team details found",
                data:teams
            });
        }
        else{
            res.status(400).send({
                message: "team details not found",
                data:null
            })
        }
    },

    getAllPlayersbyTeam: (req,res)=>{
        const { id } = req.params;
        let resTeam = teams.filter((team)=>team.id == id);
        if(resTeam!=0){
            res.status(200).send({
                message: "team player details found",
                data:resTeam
            });
        }
        else{
            res.status(400).send({
                message: "team player details not found",
                data:null
            })
        }
    },
    getTopScoreAndWicket: (req,res) =>{
        let topRes = [];
        for(let i=0;i<teams.length;i++){
            let players = teams[i].players;
            let topScorer=0;
            let topWickets= 0;
            for(let j=0;j<players.length;j++){
                if(topScorer<players[j].score){
                    topScorer = players[j].score
                }
                if(topWickets<players[j].wickets){
                    topWickets = players[j].wickets
                }
            }
            let topScorerList = players.filter(player=>player.score===topScorer);
            let topWicketTakerList = players.filter(player=>player.wickets===topWickets);
            topRes.push(
                {
                    "Team Id":teams[i].id,
                    "Team Name":teams[i].name,
                    "TopScorer":topScorerList,
                    "TopWicketTaker":topWicketTakerList,
                }
            )

        }

        res.send({
            message:"top scorer and wicket takers found",
            data:topRes
        });

    }
}

module.exports = teamService;