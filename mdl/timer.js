const timer = (req, res, next) => {
    const date = new Date();
    const day = date.getDay();
    const time = date.getHours();
  
    if (day != 5 || day !=6 && time >= 9 && time <= 17) {
      next();
    } else {
      res
        .status(404)
        .send("web app is only available Monday through Friday, from 9am to 5pm");
    }
  };
  module.exports = timer;