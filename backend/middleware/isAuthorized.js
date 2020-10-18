const isAuthorized = (req, res, next) => {
  if (req.user) {
    console.log('User is logged in.');
    next();
  } else {
    console.log('User is not logged in.');
    res.redirect(`${process.env.CLIENT_URI}/`);
  }
};

module.exports = isAuthorized;
