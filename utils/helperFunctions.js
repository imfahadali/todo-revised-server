const jwt = require("jsonwebtoken");

exports.generateAccessToken = async ({ email, id }) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: "2h",
  });
};
