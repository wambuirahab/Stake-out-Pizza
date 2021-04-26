$(function(){
  $('.summary').hide();
  $('.cdata-overlay').hide();

  // Get inputs
$("#checkout").click(function(){
  let flavour =$("#flavour option:selected").val();
  let size =$("#size option:selected").val();
  let crust =$("#crust option:selected").val();
  let topping = $("#toppings option:selected").val();
  let number = $("#number").val();
  console.log(size);

  //Function order
  let order = (f, s, c, t, n, total) => {
      return {f, s, c, t, n, total};
  };

  //check price
  let price, totalPrice;
  switch (flavour) {
      case flavour = "vegtikka":
          switch (size) {
              case size = "regular":
                  price = 350;
                  if (crust === "thin") {
                      totalPrice = (price * number) + 120;
                  } else if (crust === "thick") {
                      totalPrice = (price * number) + 230;
                  } else if (crust === "stuffed") {
                      totalPrice = (price * number) + 350;
                  } else if (crust=== "deep") {
                      totalPrice = (price * number) + 280
                  } else {
                      totalPrice = (price * number) + 420
                  }
                  break;
              case size = "medium":
                  price = 750;
                  if (crust === "thin") {
                      totalPrice = (price * number) + 120;
                  } else if (crust === "thick") {
                      totalPrice = (price * number) + 230;
                  } else if (crust === "stuffed") {
                      totalPrice = (price * number) + 350;
                  } else if(crust === "deep"){
                     totalPrice = (price * number) + 280
                  } else {
                      totalPrice = (price * number) + 420;
                  }
                  break;
              case size = "large":
                  price = 1200;
                  if (crust === "thin") {
                      totalPrice = (price * number) + 120;
                  } else if (crust === "thick") {
                      totalPrice = (price * number) + 230;
                  } else if (crust === "stuffed") {
                      totalPrice = (price * number) + 350;
                  } else if (crust === "deep"){
                      totalPrice = (price * number) + 280; 
                  } else {
                      totalPrice = (price * number) + 420;
                  }
                  break;
          }
          break;
      case flavour = "chickentikka":
          switch (size) {
              case size = "regular":
                  price = 350;
                  if (crust === "thin") {
                      totalPrice = (price * number) + 120;
                  } else if (crust === "thick") {
                      totalPrice = (price * number) + 230;
                  } else if (crust === "stuffed") {
                      totalPrice = (price * number) + 350;
                  } else if (crust === "deep") {
                      totalPrice = (price * number) + 280;
                  } else {
                      totalPrice = (price * number) + 420;
                  }
                  break;
              case size = "medium":
                  price = 750;
                  if (crust === "thin") {
                      totalPrice = (price * number) + 120;
                  } else if (crust === "thick") {
                      totalPrice = (price * number) + 230;
                  } else if (crust === "stuffed") {
                      totalPrice = (price * number) + 350;
                  } else if ( crust === "deep") {
                      totalPrice = (price * number) + 280;
                  } else {
                      totalPrice = (price * number) + 420;
                  }
                  break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust == "deep") {
                             totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep"){
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
              
                }
                break;
            case flavour = "boerewors":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                            totalPrice = (price * number) + 280
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                             totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                }
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                             totalPrice = (price * number) + 280
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 230;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "deep") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 420;
                        }
                        break;
                }
                break;

              }
              switch (topping) {
                  case topping = "green pepper":
                      totalPrice = totalPrice + 180;
                      break;
                  case topping = "mushrooms":
                      totalPrice = totalPrice + 180;
                      break;
                  case topping = "onions":
                      totalPrice = totalPrice + 180;
                      break;
                  case topping = "pepperoni":
                      totalPrice = totalPrice + 180;
                      break;
                  case topping = "sausage":
                      totalPrice = totalPrice + 180;
                      break;
      
              }

            //Execute order function
            let newOrder = order(flavour, size, crust, topping, number, totalPrice);
            console.log(newOrder); // test func
    
            //create a new object
            // let myOrder = JSON.stringify(JSON.parse(newOrder));
    
            //Write to the order
            $('.summary').slideDown(2000);
            $('.cdata-overlay').slideUp();
            $('#list').slideDown();
            $('.deliver').show(1000);
            $('.delivernot').show(1000);
    
            $('#list').text(" ");
            $("#list").append("<br>" + "flavour :   " + newOrder.f + "<br>" + "size :   "
                + newOrder.s + "<br>" + "crust :     "
                + newOrder.c + "<br>" + "toppings :     "
                + newOrder.t + "<br>" + " number of pizzas :    "
                + newOrder.n + "<br>" + "Total Price :  "
                + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
        });
    
        //Deliver
        $(".deliver").click(function () {
            $('.summary').slideUp();
            $('#list').slideUp();
            $('.summary').text("Provide location details").slideDown();
            $('.deliver').hide(1000);
            $('.delivernot').hide(1000);
            $('.cdata-overlay').slideDown();
        });
    
    
        //Pick Up
        $(".delivernot").click(function () {

    
        });

      });



})