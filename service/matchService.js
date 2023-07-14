const match = require("../data/Matches");

let matchService = {
  getToday: () => {
    let ts = Date.now();
    let date_time = new Date(ts);
    let date = date_time.getDate();
    let month = date_time.getMonth() + 1;
    let year = date_time.getFullYear();
    
    const dateToday = String(year+"-"+month+"-"+date)
    return dateToday;
  },
};

module.exports = matchService;
