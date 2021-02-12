
document.getElementById('generate').addEventListener('click', () => {
 
  let userLength = prompt('How many characters would you like your password to be? (8 min-128 max)')
  let hasLowercase = prompt('Would you like to use lowercase letters? (y or n)')
  let hasUppercase = prompt('Would you like to use uppercase letters? (y or n)')
  let hasNumbers = prompt('Would you like to use numbers? (y or n)')
  let hasSymbols = prompt('would you like to use symbols? (y or n)')
  let charSet = ''
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '0123456789'
  let symbols = '!@#$%&*'
  let generatedUsername = ''

  if (hasLowercase === 'y' || hasLowercase === 'Y') {
    charSet += lowercase
  }

  if (hasUppercase === 'y' || hasUppercase === 'Y') {
    charSet += uppercase
  }

  if (hasNumbers === 'y' || hasNumbers === 'Y') {
    charSet += numbers
  }

  if (hasSymbols === 'y' || hasSymbols === 'Y') {
    charSet += symbols
  }

  for (let i = 0; i < userLength; i++) {
    generatedUsername += charSet[Math.floor(Math.random() * charSet.length)]
  }

  document.getElementById('password').textContent = generatedUsername
  
})