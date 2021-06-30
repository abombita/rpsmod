

class RockPaperScissors {

    constructor(choice){

        const options = ['rock','paper','scissors'];

        let results;

        if (!options.some(substring => choice.toLowerCase() == substring)) {
            result = `{"status":"failure", "error":"Invalid choice provided"}`;
        };

        const computerChoice = options[Math.floor(Math.random()* options.length)];
        const playerChoice = choice;

        if (computerChoice == playerChoice) {
            result = `{"status": "success", "computer": "${computerChoice}", "winner": "tie"}`;
        }
        else if (playerChoice == 'rock'){
            if (computerChoice == 'paper'){
                result = `{"status": "success", "computer": "${computerChoice}", "winner": "computer"}`;
            } else {
                result = `{"status": "success", "computer": "${computerChoice}", "winner": "player"}`;
            }
        }
        else if (playerChoice == 'paper'){
            if (computerChoice == 'scissors'){
                result = `{"status": "success", "computer": "${computerChoice}", "winner": "computer}`;
            } else {
                result = `{"status": "success", "computer": "${computerChoice}", "winner": "player"}`;
            }
        }
        else if (playerChoice == 'scissors'){
            if (computerChoice == 'rock'){
                result = `{"status": "success", "computer": "${computerChoice}", "winner": "computer"}`;
            } else {
                result = `{"status": "success", "computer": "${computerChoice}", "winner": "player"}`;
            }
        };

        let finalResults = JSON.parse(result);
        return finalResults;
    };
};

module.exports = RockPaperScissors;