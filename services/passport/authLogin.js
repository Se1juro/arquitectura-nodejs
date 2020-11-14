const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { loginUser, getUser } = require("../../components/users/dao");
const { compareEncryptData } = require("../encryptData/index");
const userDto = require("../../components/users/dto");
passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await loginUser(email);
      if (!user) {
        return done(null, false, {
          type: "email",
          message: "User not found",
        });
      } else {
        const MatchPassword = await compareEncryptData(password, user.password);
        if (MatchPassword) {
          return done(null, userDto.single(user, user));
        } else {
          done(null, false, {
            type: "password",
            message: "Incorrect Password",
          });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await getUser(id);
  if (user) {
    done(null, user);
  } else {
    done(null, false);
  }
});
