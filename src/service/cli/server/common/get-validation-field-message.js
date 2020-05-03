module.exports = (fields) => {
  const invalidFields = [...fields];
  let message = `Validation error ${invalidFields[0]} is required field`;
  if (invalidFields.length > 1) {
    const lastField = invalidFields.pop();
    message = `Validation error: ${invalidFields.join(`, `)} and ${lastField} are required fields`;
  }
  return message;
};
