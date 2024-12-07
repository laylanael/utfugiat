const monthlyIncomes = {
  'Jan': 1000,
  'Feb': 1200,
  'Mar': 1500,
  ...
};

const prop3 = 'Feb'; // or any other valid property name

if (Object.prototype.hasOwnProperty.call(monthlyIncomes, prop3)) {
  console.log(monthlyIncomes[prop3]);
} else {
  console.log(`Invalid property: ${prop3}`);
}
