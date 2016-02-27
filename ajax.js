$(document).ready(function(){


	$("#create").click(function(e){


		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var contact = $("#contact").val();
		var phone = $("#phone").val();

		var data = {
			"name":name,
			"email":email,
			"password":password,
			"contact":contact,
			"phone":phone 
		};

		$.ajax({
			type: "POST",
			url: "",			            
			data: data,
			success: function () {
				alert("success")
			}
		});

	});

});