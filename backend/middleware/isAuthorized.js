const isAuthorized = (req, res, next) => {
  if (req.user) {
    console.log('User is logged in.');
    next();
  } else {
    console.log('User is not logged in.');
    res.send(401);
  }
};

module.exports = isAuthorized;
