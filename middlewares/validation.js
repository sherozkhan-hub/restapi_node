const validation = (req, res, next) => {
  const {
    id,
    name,
    age,
    number,
    email,
    password,
    address,
    gender,
    university,
    isAuthenticated,
    isAuthorized,
  } = req.body;
  if (
    (!name || typeof name == "string") &&
    (!age || typeof age == "number") &&
    (!number || typeof number == "number") &&
    (!email || email.includes("@") || email.endsWith(".com")) &&
    (!password || typeof password == "string") &&
    (!address || typeof address == "string") &&
    (!gender || typeof gender == "string") &&
    (!university || typeof university == "string") &&
    (!isAuthenticated || typeof isAuthenticated == "boolean") &&
    (!isAuthorized || typeof isAuthorized == "boolean")
  ) {
    next();
  } else {
    res.status(403).json({ message: "User is not validated" });
  }
};

module.exports = { validation };
