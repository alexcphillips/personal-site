exports.userSchema = {
  type: "object",
  properties: {
    displayName: { types: "string", maxLength: 16 },
    email: { type: "string", format: "email", maxLength: 30 },
    password: { type: "string", minLength: 8, maxLength: 64 }
  },
  required: { displayName, email, password }
};
