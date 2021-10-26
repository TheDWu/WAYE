

// var breakfest = {
// // creating an object named breakfest with a bunch of properties
// Savor:{
//   item1:{
//      name : "Bagel",
//      calories: 200, 
//      protein : 5 
//      },
 
//   item2:{
//       name : "Egg",
//      calories: 70, 
//      protein : 12 
//      }

//       }
// }

//Breakfast
var breakfast = {
  Savor:{
    item1:{
     name : "Eggs",
     calories: 200, 
     protein :  10
     },
     item2:{
     name : "Bacon",
     calories: 200, 
     protein : 10 
     },
     item3:{
     name : "Pancake",
     calories: 110, 
     protein : 5
     }
  },
  
  Hala:{
    item1:{
     name : "n/a",
     calories: 0, 
     protein : 0 
     },
     item2:{
     name : "n/a",
     calories: 0, 
     protein :  0
     },
     item3:{
     name : "n/a",
     calories: 0, 
     protein :  0
     }
  },

  G8:{
    item1:{
     name : "n/a",
     calories: 0, 
     protein : 0 
     },
     item2:{
     name : "n/a",
     calories: 0, 
     protein :  0
     },
     item3:{
     name : "n/a",
     calories: 0, 
     protein : 0
     }
  },

  Flame:{
    item1:{
     name : "BBQ Brisket",
     calories: 320, 
     protein :  15
     },
     item2:{
     name : "Beans",
     calories: 100, 
     protein :  10
     },
     item3:{
     name : "Egg Taco Filling",
     calories: 150, 
     protein : 10
     }
  },

  Soup:{
    item1:{
     name : "Oatmeal",
     calories: 80, 
     protein :  5
     },
     item2:{
     name : "Grits",
     calories: 100, 
     protein :  5
     },
     item3:{
     name : "Chicken Noodle Soup",
     calories: 90, 
     protein : 10
     }
  },

    Fired:{
    item1:{
     name : "n/a",
     calories: 0, 
     protein :  0
     },
     item2:{
     name : "n/a",
     calories: 0, 
     protein :  0
     },
     item3:{
     name : "n/a",
     calories: 0, 
     protein : 0
     }
  }
}

var lunch = {
  Savor:{
    item1:{
     name : "Lamb",
     calories: 500, 
     protein : 20 
     },
     
     item2:{
     name : "Tofu",
     calories: 250, 
     protein : 15 
     },

     item3:{
     name : "Beans",
     calories: 50, 
     protein : 5 
     }
  },
  
  Hala:{
    item1:{
     name : "Lamb",
     calories: 500, 
     protein : 20 
    },
     item2:{
     name : "Rice",
     calories: 200, 
     protein : 5 
     },
     item3:{
     name : "Spinach",
     calories: 50, 
     protein : 5 
     }
  },

  G8:{
    item1:{
     name : "Chicken ",
     calories: 150, 
     protein : 20 
     },
     item2:{
     name : "Roast Turkey",
     calories: 500, 
     protein : 20 
     },
     item3:{
     name : "Herbed Squash Medley",
     calories: 500, 
     protein : 20 
     }
  },

  Flame:{
    item1:{
     name : "Classic Bacon, Lettuce and Tomato ",
     calories: 330, 
     protein : 20 
     },
     item2:{
     name : "Hamburger Patty ",
     calories: 230, 
     protein : 20 
     },
     item3:{
     name : "Grilled Chicken",
     calories: 120, 
     protein : 20 
     }
  },

  Soup:{
    item1:{
     name : "Chicken Noodle Soup",
     calories: 290, 
     protein : 10 
     },
     item2:{
     name : "Vegetable Soup",
     calories: 60, 
     protein : 5 
     },
     item3:{ 
     name : "Ramen",
     calories: 150, 
     protein : 5
     }
  },

  Fired:{
    item1:{
     name : "Cheese Pizza",
     calories: 220, 
     protein : 10 
     },
     item2:{
     name : "Supreme Pizza",
     calories: 200, 
     protein : 15
     },
     item3:{
     name : "Meat Lovers Pizza",
     calories: 270, 
     protein : 20
    }
  },
}
// if TIME SELECTION ( from previous page) is selected.. pop up accoridng method

// js when they click the button it starts adding
// const txt = '{"name":"John", "age":30, "city":"New York"}'
// const obj = JSON.parse(txt);


// let i = 0;
// while (i== 0){
  
// }
//create 

//if breakfest is chosen
document.getElementById("S1").innerHTML = breakfast.Savor.item1.name ;
document.getElementById("S2").innerHTML = breakfast.Savor.item2.name ;
document.getElementById("S3").innerHTML = breakfast.Savor.item3.name ;


document.getElementById("H1").innerHTML = breakfast.Hala.item1.name ;
document.getElementById("H2").innerHTML = breakfast.Hala.item2.name ;
document.getElementById("H3").innerHTML = breakfast.Hala.item3.name ;

document.getElementById("G1").innerHTML = breakfast.G8.item1.name ;
document.getElementById("G2").innerHTML = breakfast.G8.item2.name ;
document.getElementById("G3").innerHTML = breakfast.G8.item3.name ;

document.getElementById("F1").innerHTML = breakfast.Flame.item1.name ;
document.getElementById("F2").innerHTML = breakfast.Flame.item2.name ;
document.getElementById("F3").innerHTML = breakfast.Flame.item3.name ;


document.getElementById("SS1").innerHTML = breakfast.Soup.item1.name ;
document.getElementById("SS2").innerHTML = breakfast.Soup.item2.name ;
document.getElementById("SS3").innerHTML = breakfast.Soup.item3.name ;


document.getElementById("FR1").innerHTML = breakfast.Fired.item1.name ;
document.getElementById("FR2").innerHTML = breakfast.Fired.item2.name ;
document.getElementById("FR3").innerHTML = breakfast.Fired.item3.name ;




function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let totalCalories = 0;
    let totalProtein = 0;
    checkboxes.forEach((checkbox) => {
      //calculate calories

      //calculate protein

      //  totalCalories = totalCalories + breakfast.Savor.id.calories;
        // Calculate calories
    });
    // print values
    return totalCalories;
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    alert("The total calories is : 1050 \n" + "The Total Protein is : 38 grams" );
});