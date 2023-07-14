const matchService = require("../service/matchService");
const matches = require("../data/Matches");

const getAllMatches = (req,res) =>{
    if (matches.length != 0) {
      res.status(200).send({
        message: "match details found",
        data: matches,
      });
    } else {
      res.status(400).send({
        message: "match details not found",
        data: [],
      });
    }
}

const getMatchByDate=(req,res)=>{
  //date in YYYY-MM-DD format
  const { date } = req.params;

  const matchesForDate = matches.filter((match) => match.date == date);
  if (matchesForDate != 0) {
    res.status(200).send({
      message: "match details found for given date",
      data: matches,
    });
  } else {
    res.status(400).send({
      message: "match details not found for given date",
      data: [],
    });
  }
}

const todayMatch=(req,res)=>{
  //date in YYYY-MM-DD format
  const today = matchService.getToday()
  const todaysMatch = matches.filter((match) => match.date == today);
  if (todaysMatch != 0) {
    res.status(200).send({
      message: "match details found for today",
      data: matches,
    });
  } else {
    res.status(400).send({
      message: "match details not found for today",
      data: null,
    });
  }
}



const addNewMatch = (req,res) =>{
  const newMatch = req.body
  console.log(newMatch);

  // if (!newMatch.id || !newMatch.date || !newMatch.team1 || !newMatch.teams2)
  // {
  //   return res.status(400).json({
  //     message:"All felids are required"
  //   })
  // }
  matches.push(newMatch)
  return res.status(200).json({
    message:"new match added"
  })
}

const updateMatch = (req,res) =>{
  const updateMatch = req.body;
  var updatedMatch={}
  matches.map((match)=>{
    if(match.id == updateMatch.id)
    {
      match.date = updateMatch.date? updateMatch.date : match.date;
      match.result = updateMatch.result? updateMatch.result : match.result;
      updatedMatch = match;
    }
  })
  
  res.status(200).send({
    message:"Match Updated",
    data:updatedMatch
  })

}

const cancelMatch = (req,res)=>{
  const {id} = req.params
  const newMatchList = matches.filter((match)=>match.id!=id)
  matches=newMatchList

  res.status(200).send({
    message:"Match list updated",
    data:matches
  })
}

module.exports = {
  getAllMatches,
  getMatchByDate,
  todayMatch,
  addNewMatch,
  updateMatch,
  cancelMatch
};