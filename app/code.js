$( document ).ready(function() {

  $('.message a').click(function(e){

    // console.log(e.id);
    $('form.register-form').animate({height: "toggle", opacity: "toggle"}, "slow");
    $('form.login-form').animate({height: "toggle", opacity: "toggle"}, "slow");

 });

});


var counter = 1;
var limit = 3;
function addInput(divName){

          var newdiv = document.createElement('div');
          newdiv.innerHTML = " <br><input type='text' name='contact[]' placeholder = 'emergency contact name' id = 'name-" + (counter+1) + "' />" +
                                  "<input type='text' name='phone[]' placeholder = 'emergency contact phone number' id = 'number-" + (counter+1) + "' />";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
          if (counter == (limit))  {
               $("#addAnother").css("display", "none");


     }
}
