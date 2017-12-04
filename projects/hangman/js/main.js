var HANG = HANG || {};

HANG.guesses = 10;

HANG.hang = function(word){
	var alpha = 'abcdefghijklmnopqrstuvwxyz';
	var alphaArr = alpha.split(''); // Turn string into array
	console.log(alphaArr);
	var word = word;
	var wordArr = word.split('');
	

console.group('info about arrays');
	console.log(alphaArr);
	console.log(wordArr);
	console.log('guesses: ' + HANG.guesses);
console.groupEnd();

	//Update the DOM with spans, containing each letter



	for (var i = 0; i < alphaArr.length; i++) {
		// Things[i]
		$('#js-letter-picker').append('<span data-letter="' + alphaArr[i] + '">' + alphaArr[i] +'</span>');
	}

	// Update HANG.hang to accept an argument
	// named 'word'
	// run a for loop over each leter in 'word'

	for (var i =0; i < wordArr.length; i++) {
		$('#js-word').append('<span data-letter="' + wordArr[i] + '"></span>')
	}

	$('#js-letter-picker span').on('click', function(){
		if ($(this).hasClass('has-not-letter') || $(this).hasClass('has-letter')) {
			return false;
		}

		var selectedLetter= $(this).data('letter');
		console.log('selectedLetter' + selectedLetter);

		$('#js-word span[data-letter="' + selectedLetter + '"]').text(selectedLetter);

		var count = $('#js-word span[data-letter="' + selectedLetter + '"]').length;
		console.log('count: ' + count);

		//if count > 0, the letter clicked exists in our word
		if(count>0){
			$(this).addClass('has-letter');
		} else {
			$(this).addClass('has-not-letter');
			//decrement HANG.guesses
			HANG.guesses = HANG.guesses - 1;
			console.log('Number of guesses remaining: ' + HANG.guesses);
		}

		// If they are out of guesses, end it all

		if (HANG.guesses === 0) {
			$('#js-letter-picker').empty();
			$('#js-letter-picker').append('<h2>You lost!</h2>');
		}

		// If there's no empty spans, there's a winner
		var winner = $('#js-word span:empty').length;
		if(winner === 0) {
			$('#js-letter-picker').empty();
			$('#lionel').append('<h2>You won!</h2>');
			$('#lionel').append('<img src=img/lionel.jpg>');
		};
	});

	//use a jquery selector to select the matching spans in #js-word


}

HANG.reset = function(){
	$('#js-word').empty();
	$('#js-letter-picker').empty();
	HANG.guesses = 0;
	HANG.hang('lionelrichie');

}

$(document).on('ready', function(){
	HANG.hang('lionelrichie');
})


