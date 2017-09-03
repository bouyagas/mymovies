function getPromisedData(query, info) {
    query.then((info) => {
      res.data = info;
      next();
    })
    .catch((error) => {
      next(error);
    });
}

module.exports = getPromisedData;

