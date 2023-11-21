const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    console.log(error.issues[0].message)
    res.status(400).json({ message: "validation failed" });
  }
};

module.exports = validate;
