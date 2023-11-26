const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Filled the input properly"
    const extraDetails=err.error[0].message;
    // console.log(err.issues[0].message);

    const error = {
      status,
      message,
      extraDetails
    };

    // res.status(400).json({ message: "validation failed" });
    next(message);
  }
};

module.exports = validate;
