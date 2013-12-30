<script type="text/javascript" charset="utf-8">
	$(document).ready(function(){
 
		// Municipality options relevant to Province Options		
		provinceLists = {
			P128 : '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22',
			P129 : '23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56',
			P133 : '57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76',
			P155 : '77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125',
		};
		
		// Identify the questions
		var q1ID = '{QID}';
		var q1 = $('#question'+q1ID+'');
		var q2 = $(q1).nextAll('.list-radio:eq(0)'); 
		var q2ID = $(q2).attr('id').split('question')[1];
		
		// Find the initially checked option in Q1 (if any)
		var q1Ans = '';
		if($('input.radio:checked', q1).length > 0) {
			q1Ans = $('input.radio:checked', q1).attr('value');
		}
		
		// Initially Hide/Show the appropriate teachers
		showTeachers(q1Ans);
 
		// Click events on Q1 radios
		$('input.radio', q1).click(function() {
			var value = $(this).attr('value');
			// Q1 has been changed
			if(value != q1Ans) {
				q1Ans = value;
				// Clear the Q2 answer
				$('input.radio', q2).attr('checked', false)
				// Show the appropriate teachers
				showTeachers(q1Ans);
			}
		});
		
		// A function to show the appropriate teachers
		function showTeachers(q1Ans) {
			// Hide all of the teachers
			$('li[id^="javatbd"]', q2).hide();
			// Now show the appropriate ones
			if(q1Ans != '') {
				$(provinceLists[q1Ans].split(',')).each(function(i){
					$('input.radio[id$="'+q2ID+this+'"]').closest('li').show();
				});
			}
		}

	});
</script>



Answer Codes
C1
C2
C3
C4


***********

671873X16X1464X128

128 ILOCOS NORTE
129 ILOCOS SUR
133 LA UNION
155 PANGASINAN

***********
