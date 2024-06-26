const greetings = (userName) => {
  console.log(`Hello, ${userName}`);
};
const greetingsWithSatutation = (userName, salutation) => {
  console.log(`Hello, ${salutation} ${userName}`);
};

module.exports = {
  greetings,
  greetingsWithSatutation,
};
