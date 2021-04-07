const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const result = {};
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  result['name'] = answer;

  rl.question("What's an activity you like doing?", (answer) => {
    result['hobby'] = answer;

    rl.question("What do you listen to while doing that?", (answer) => {
      result['favoriteMusic'] = answer;

      rl.question("Which meal is your favorite (eg: dinner, brunch, etc.)", (answer) => {
        result['favoriteMeal'] = answer;

        rl.question("What's your favorite thing to eat for that meal?", (answer) => {
          result['relaxActivity'] = answer;

          rl.question("Which sport is your absolute favorite?", (answer) => {
            result['favoriteSport'] = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              result['superpower'] = answer;
              console.log(result)
              rl.close();
            });


          });

        });
      });
    });


  });
})

console.log(result);
// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!