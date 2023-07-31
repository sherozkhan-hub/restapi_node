const authentication = (req, res, next) => {
  const { isAuthenticated } = req.body;
  if (!isAuthenticated) {
    res.status(403).json({ message: "User is not authenticated" });
  } else {
    console.log("authenticated");
    next();
  }
};

module.exports = { authentication };
