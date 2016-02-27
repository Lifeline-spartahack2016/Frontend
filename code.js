$( document ).ready(function() {
// console.log("ready");
  $('.message a').click(function(){
    // alert("kjhgjfjkl;jhgk");
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 // alert("sdf");
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
