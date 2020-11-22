const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token") || req.query.token;
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_TOKEN_KEY || "PrivateKey"
    );
    req.user = decoded;

    next();
  } catch (err) {
    console.warn("fail in the auto");
    res.status(400).json({ error: "Invalid token" });
  }
};
