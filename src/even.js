import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const youAnswer = readlineSync.question('You answer: ');
    if (number % 2 === 0) {
      if (youAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (youAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
        return
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default isEven;
