// Business End
var toppingsList = [];

var Pizza = function(size, toppings) {
  this.sizes = size
  this.toppings = toppings
}

var pizzaOne = new Pizza("small", [0])


// User Interface Logic
$(document).ready(function() {
  $("#pizzaSize").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("input:radio[name=size]:checked").val();

    pizzaOne.sizes = sizeInput
    $("#sizeHere").append(pizzaOne.sizes);
  });

  $("form#toppingsOnPizza").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=toppings]:checked").each(function(){
      var addTopping = $(this).val();
      toppingsList.push(addTopping);
      $("#toppingsHere").append("<li>" + addTopping + "</li>");
      // $('#work-responses').append(workTransportationMode + "<br>"); ---> Maybe for later?
    });
  });
});
