const toTranslate = 'turpentine and turtles'
const vowels = ['a','e','i','o','u'];
const inWhale = [];

for (const letter of toTranslate) {
  for (const vowel of vowels) {
    if (vowel === letter) {
      inWhale.push(vowel.toUpperCase());
      if (vowel === 'e' || vowel === 'u') {
        inWhale.push(vowel.toUpperCase());
      }
    }
  }
};

console.log(inWhale);
