// send json data to the route
const sendJsonResp = (req, res, next) => {
  res.json(res.data || []);
  next();
};

module.exports = sendJsonResp;
