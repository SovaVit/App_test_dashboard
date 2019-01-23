const { NotAcceptable } = require("rest-api-errors");
const { PASSWORD } = require("../../utilits/regexes");

const signUp = ({ User }) => (req, res, next) => {
  const { email, password, name } = req.body;

  if (!PASSWORD.test(password)) {
    return next(new NotAcceptable(406, "Password is in wrong format."));
  }

  const user = new User({
    email: email,
    name: name
  });

  User.register(user, password, (err, user) => {
    if (err) {
      return next(err);
    }
    // res.status(200).send({ user });
    return next();
  });
};

module.exports = signUp;
