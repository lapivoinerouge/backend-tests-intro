module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  const names = fullName.split(' ');
  if(names.length > 2 || names.length < 2) return 'Error';
  const firstName = names[0];
  const lastName = names[1];
  return firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase() ;
};
