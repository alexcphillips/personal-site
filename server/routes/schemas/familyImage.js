exports.familyImageSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    page: { type: "string" },
    position: { type: "string" },
    containerColor: { type: "string" },
    text: { type: "string" }
  },
  required: ["name", "page", "position", "containerColor", "text"],
  additionalProperties: false
};
