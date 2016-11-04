// Business End
var Pizza = function(size, toppings) {
  this.sizes = size
  this.toppings = toppings
}

var pizzaOne = new Pizza("small", [])

Pizza.prototype.cost = function() {
  debugger;
  if (this.sizes === "small") {
    var sizeCost = 5;
    $("#totalCostHere").text((sizeCost + pizzaOne.toppings.length).toFixed(2));
    return sizeCost;
  } else if (this.sizes === "medium") {
    var sizeCost = 7;
    $("#totalCostHere").text((sizeCost + (pizzaOne.toppings.length * 1.35)).toFixed(2));
    return sizeCost;
  } else if (this.sizes === "large") {
    var sizeCost = 9;
    $("#totalCostHere").text((sizeCost + (pizzaOne.toppings.length  * 1.75)).toFixed(2));
    return sizeCost;
  }

}



// User Interface Logic
$(document).ready(function() {
  $("#welcomeToSite").submit(function(event) {  // ------- Welcome Box
    event.preventDefault();

    $("#pizzaSize").delay(600).show("slide", { direction: "right" }, 850);
    $("#welcomeToSite").hide("slide", { direction: "left" }, 850);
  })

  $(".col-xs-4 img").click(function() {
    $("img").removeClass("chosen");
    $(this).addClass("chosen");
  });

  // $("#atEnd .btn").click(function() {  -------------- Possible Back Button? (start)
  //   $("#toppingsOnPizza").delay(700).show("slide", { direction: "left" }, 1000);
  //   $("#review").hide("slide", { direction: "right" }, 1000);
  // });                                  ----------------- Possible Back Button (end)

  $("#pizzaSize").submit(function(event) {  // ------ Picking Size of Pizza
    event.preventDefault();

    var sizeInput = $("input:radio[name=size]:checked").val();

    pizzaOne.sizes = sizeInput
    $("#sizeHere").text("-" + pizzaOne.sizes + "-");
    pizzaOne.cost();
    $(".col-xs-3 input").prop("checked", false);
    $("#toppingsOnPizza").delay(600).show("slide", { direction: "right" }, 850);
    $("#pizzaSize").hide("slide", { direction: "left" }, 850);
  });

  $("form#toppingsOnPizza").submit(function(event) { // ----- Picking Toppings
    event.preventDefault();
    $("#toppingsHere").empty();
    pizzaOne.toppings = [];


    $("input:checkbox[name=toppings]:checked").each(function(){
      var addTopping = $(this).val();
      pizzaOne.toppings.push(addTopping);
      $("#toppingsHere").append(addTopping + "<br>");
      pizzaOne.cost();
    });
    if (pizzaOne.toppings.length === 0) {
      $("#toppingsHere").append("Cheese");
      pizzaOne.cost();
    }
    $("#review").delay(700).show("slide", { direction: "right" }, 1000);
    $("#toppingsOnPizza").hide("slide", { direction: "left" }, 1000);
  });

  $("#review").submit(function(event) { // ------------------ Review of Order
    event.preventDefault();

    alert("Hope you enjoy your Pizza!");

    $("#welcomeToSite").delay(700).show("slide", { direction: "left" }, 1000);
    $("#review").hide("slide", { direction: "left" }, 1000);
  });
});
