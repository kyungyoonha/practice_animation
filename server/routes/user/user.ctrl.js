const passport = require('passport');

const { User } = require('../../models');

exports.getMyInfo = async (req, res, next) => {
  try {
    res.status(200).send('ok');
  } catch (e) {
    console.error(error);
    next(error);
  }
};

exports.signin = async (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }

    if (info) {
      return res.status(401).send(info.reason);
    }

    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }

      const fullUserWithoutPassword = await User.findOne({
        where: { email: user.email },
        attributes: {
          exclude: ['pw'],
        },
      });

      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
};

exports.signup = async (req, res, next) => {
  try {
    const exUser = await User.findOne({ where: { email: req.body.email } });

    if (exUser) {
      return res.status(403).send({ email: '이미 사용중인 아이디 입니다.' });
    }

    const hashedPassword = await bcrypt.hash(req.body.pw, 12);
    await User.create({
      email: req.body.email,
      name: req.body.name,
      pw: hashedPassword,
    });
    res.status(201).send('ok');
  } catch (e) {
    console.error(error);
    next(error);
  }
};

exports.logout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
};
