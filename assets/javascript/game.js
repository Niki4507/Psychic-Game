// Our array of possible letter choices.
      var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      // Variables for tracking our wins, losses and guesses left.
      var wins = 0;
      var losses = 0;
      var guessesLeft = 10;
      var lettersGuessed = []


      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // Determine which key was pressed
        var userGuess = event.key;


        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


        var reset = function() {
          wins = 0;
          losses = 0;
          guessesLeft = 10;
          lettersGuessed = [];

        }

          // This logic determines the outcome of the game (win/loss), and increments the appropriate counter and guesses left.
          if (userGuess === computerGuess) {
            wins++, lettersGuessed.push(userGuess);
          }
          else {
              losses++, guessesLeft--,lettersGuessed.push(userGuess);

          }

          if (wins > 10) {
            alert ("Congrats! You're psychic!");
          }

          if (guessesLeft === 0) {
            alert ("Bummer! No claivoyance in you. Try again.");
            reset();
          }

          var html = "<p>Guess the letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>"+
          "<p>Letters Guessed: " + lettersGuessed + "</p>"

          // Injecting the HTML we just created into the div.
          document.querySelector("#game").innerHTML = html;

        }
