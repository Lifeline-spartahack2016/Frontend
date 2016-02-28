$(document).ready(function(){
	var uid;
	$("#create").click(function(e){
		e.preventDefault();

		var name = $("#name").val();
		var email = $("#email").val();
		var userpassword = $("#password").val();

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

		myFirebaseRef.createUser({
	  		email    : email,
	  		password : userpassword
		},
		function(error, userData) {
	  		if (error) {
	    		console.log("Error creating user:", error);
	  		}
	  		else {
	    		console.log("Successfully created user account with uid:", userData.uid);
				myFirebaseRef.child(userData.uid).set({
					name: name,
					email: email,
					contacts: {
						contact1: {
							name: contact[1],
							number: number[1]
						},
						contact2: {
							name: contact[2],
							number: number[2]
						},
						contact3: {
							name: contact[3],
							number: number[3]
						}
					}
				});
			}
		});

		$(".login-form").css("display", "");
	    $(".register-form").css("display", "none");
	    $(".edit-contacts").css("display", "none");
	});


	$("#login").click(function(e){
		e.preventDefault();

		useremail = $("#user_email").val();
		userpassword = $("#user_password").val();

		var ref = new Firebase("https://lifeline-app.firebaseio.com");

		ref.authWithPassword({
  		email    : useremail,
  		password : userpassword
		},
		function(error, authData) {
	  		if (error) {
	    		console.log("Login Failed!", error);
	    		alert("Invalid Credentials.\nPlease check your email and password and try again!")
	  		}
	  		else {
	    		console.log("Authenticated successfully with payload:", authData);

	    		$(".login-form").css("display", "none");
	    		$(".register-form").css("display", "none");
	    		$(".edit-contacts").css("display", "");

	    		uid = authData.uid;

	    		var contact1 = new Firebase("https://lifeline-app.firebaseio.com/" + uid + "/contacts/contact1/name");
	    		var phone1 = new Firebase("https://lifeline-app.firebaseio.com/" + uid + "/contacts/contact1/number");

	    		var contact2 = new Firebase("https://lifeline-app.firebaseio.com/" + uid + "/contacts/contact2/name");
	    		var phone2 = new Firebase("https://lifeline-app.firebaseio.com/" + uid + "/contacts/contact2/number");

	    		var contact3 = new Firebase("https://lifeline-app.firebaseio.com/" + uid + "/contacts/contact3/name");
	    		var phone3 = new Firebase("https://lifeline-app.firebaseio.com/" + uid + "/contacts/contact3/number");

	    		contact1.on("value", function(snapshot) {
  					$('[id$=emergencycontact1]').val(snapshot.val());
  				}, function (errorObject) {
  					console.log("The read failed: " + errorObject.code);
  				});

  				phone1.on("value", function(snapshot) {
  					$('[id$=emergencyphone1]').val(snapshot.val());
  				}, function (errorObject) {
  					console.log("The read failed: " + errorObject.code);
				});

				contact2.on("value", function(snapshot) {
  					$('[id$=emergencycontact2]').val(snapshot.val());
  				}, function (errorObject) {
  					console.log("The read failed: " + errorObject.code);
  				});

  				phone2.on("value", function(snapshot) {
  					$('[id$=emergencyphone2]').val(snapshot.val());
  				}, function (errorObject) {
  					console.log("The read failed: " + errorObject.code);
  				});

  				contact3.on("value", function(snapshot) {
  					$('[id$=emergencycontact3]').val(snapshot.val());
  				}, function (errorObject) {
  					console.log("The read failed: " + errorObject.code);
  				});

  				phone3.on("value", function(snapshot) {
  					$('[id$=emergencyphone3]').val(snapshot.val());
  				}, function (errorObject) {
  					console.log("The read failed: " + errorObject.code);
  				});

	  		}
  		});
	});


	$("#save").click(function(e){
		e.preventDefault();

		$(".login-form").css("display", "");
	    $(".register-form").css("display", "none");
	    $(".edit-contacts").css("display", "none");
			
		var userUrl = new Firebase("https://lifeline-app.firebaseio.com/" + uid);

		userUrl.on("value", function(snapshot) {
  					
  					user = snapshot.val();

					var contact = [];
					var number = [];

					contact[1] = $("#emergencycontact1").val();
					number[1] = $("#emergencyphone1").val();
					contact[2] = $("#emergencycontact2").val();
					number[2] = $("#emergencyphone2").val();
					contact[3] = $("#emergencycontact3").val();
					number[3] = $("#emergencyphone3").val();

					for(var i=1; i<=3; i++)
					{
							if (contact[i] == undefined || number[i] == undefined)
							{
								contact[i] = null;
								number[i] = null;
							}
					}

					var myFirebaseRef = new Firebase("https://lifeline-app.firebaseio.com/" + uid + "/");

					myFirebaseRef.set({
					name: user.name,
					email: user.email,
					contacts: {
						contact1: {
							name: contact[1],
							number: number[1]
						},
						contact2: {
							name: contact[2],
							number: number[2]
						},
						contact3: {
							name: contact[3],
							number: number[3]
						}
					}
				});
  				}, function (errorObject) {
  					console.log("The read failed: " + errorObject.code);
  				});
	});
});
