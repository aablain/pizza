// Business End
var toppingsList = [];

var Pizza = function(size, toppings) {
  this.sizes = size
  this.toppings = toppings
}

var pizzaOne = new Pizza("small", [])

Pizza.prototype.cost = function() {
  debugger;
  if (this.sizes === "small") {
    var sizeCost = 5;
    $("#totalCostHere").text(sizeCost);
    return sizeCost;
  } else if (this.sizes === "medium") {
    var sizeCost = 7;
    $("#totalCostHere").text(sizeCost);
    return sizeCost;
  } else if (this.sizes === "large") {
    var sizeCost = 9;
    $("#totalCostHere").text(sizeCost);
    return sizeCost;
  }
  // if (pizzaOne.toppings.length > 0) {
  //   var hereWe = 2;
  //   return hereWe;
  // }
}



// User Interface Logic
$(document).ready(function() {
  $("#pizzaSize").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("input:radio[name=size]:checked").val();

    pizzaOne.sizes = sizeInput
    $("#sizeHere").text(pizzaOne.sizes);
    $("#toppingsOnPizza").delay(700).show("slide", { direction: "right" }, 1000);
    $("#pizzaSize").hide("slide", { direction: "left" }, 1000);
  });

  $("form#toppingsOnPizza").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    pizzaOne.toppings = [];


    $("input:checkbox[name=toppings]:checked").each(function(){
      var addTopping = $(this).val();
      toppingsList.push(addTopping);
      pizzaOne.toppings.push(addTopping);
      alert(pizzaOne.toppings);
      // alert(pizzaOne.toppings.length);
      // alert(pizzaOne.toppings)
      $("#toppingsHere").append("<li>" + addTopping + "</li>");
      pizzaOne.cost();
      // $('#work-responses').append(workTransportationMode + "<br>"); ---> Maybe for later?
    });
    $("#review").delay(700).show("slide", { direction: "right" }, 1000);
    $("#toppingsOnPizza").hide("slide", { direction: "left" }, 1000);
  });
});
