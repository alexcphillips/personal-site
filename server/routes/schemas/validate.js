const Ajv = require("ajv");
const ajv = new Ajv();
const addFormats = require("ajv-formats");
addFormats(ajv);

exports.validate = (data, schema) => {
  const validate = ajv.compile(schema);
  const isValid = validate(data);
  return isValid || validate.errors;
};
