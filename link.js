$(document).ready(function(){

	$("#create").click(function(e){
		e.preventDefault();

		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();

		var contact = [];
		var number = [];

		var myFirebaseRef = new Firebase("https://lifeline-app.firebaseio.com/");

		for(var i=1; i<=3; i++)
		{
				contact[i] = $("#name-" + i).val();
				number[i] = $("#number-" + i).val();

				if (contact[i] == undefined || number[i] == undefined)
				{
					contact[i] = null;
					number[i] = null;
				}
		}	

		myFirebaseRef.child('email').push({
				fireName: name,
				fireEmail: email,
				firePassword: password,
				allcontacts: {
					newcontact1: {
						fireContact1: contact[1],
						fireNumber1: number[1]
					},
					newcontact2: {
						fireContact2: contact[2],
						fireNumber2: number[2]
					},
					newcontact3: {
						fireContact3: contact[3],
						fireNumber3: number[3]
					}
				}
			});
		});
	});

