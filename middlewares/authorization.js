const authorization = (req, res, next) => {
  const { isAuthorized } = req.body;
  if (!isAuthorized) {
    res.status(403).json({ message: "User is not authorized" });
  } else {
    console.log("authorized");
    next();
  }
};

module.exports = { authorization };
