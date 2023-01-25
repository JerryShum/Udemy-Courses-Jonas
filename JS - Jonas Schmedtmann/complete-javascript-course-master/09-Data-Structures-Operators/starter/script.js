'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//? Destructuring Arrays
/*
//> A way of unpacking values from an array or an object into separate variables
//Breaking a larger data structure into a smaller one like a variable

//________________________________________________________________________________________________________________

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//! An example of destructuring
//We are trying to take the elements within the arr array and convert them into a standalone variable
//* This is the basic way of taking elements and converting them into variables
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//* This is how you destructure an array:
//> JS knows we are destructuring an array because square brackets to the left of the equal sign is the DESTRUCTURING ASSIGNMENT
//x,y,z are our varibales equal to the array elements
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//________________________________________________________________________________________________________________

//Taking the first and second elements from the categories array
//! To take the third (skipping an element), just leave a section blank
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Italian Vegetarian

//* What if the owner of the restaurant wanted to switch the main and secondary categories of the menu?
//>Without destructuring:
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//>With destructuring:
[main, secondary] = [secondary, main];
console.log(main, secondary);

//________________________________________________________________________________________________________________

//* Create an order function within the restaurant
//And then destructuring the returned array

console.log(restaurant.order(2, 0)); //Garlic bread and pizza
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);//Should have the values of garlic bread and pizza
//>This is useful because you are immediately creating 2 variables out of a function call

//* What happens with a nested array (2D) (NESTED DESTRUCTURING)
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
//! To access the nested array, we must do destructuring within destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

//* Default values
//> Setting a variable = 1 inside of the destructuing argument is how you set their default value if they aren't assigned one after destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //r is 1
*/

//? Destructuring Objects
/*
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//________________________________________________________________________________________________________________

//> In order to dsestructure objects, we use {}, Example using the restaurant object:
//! Define the properties that you want to take -> this will store them into a variable with the same name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//! If we want variable names to be different than property:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//> Default Values
//! It might be useful to set DEFAULT values incase we dont get a value from the object (value instead of undefined)
//We set default values using an EQUAL SIGN, in this case, since menu doesn't exist as a property inside of restaurant, it will return an empty array instead of undefined. since starterMenu exists, its name will be starters and NOT return an empty array
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//> Mutating variables from objects
//We want to change the OG a and b variables to the ones inside of the object (111, 999) -> (23, 7)
let a = 111;
let b = 999;
const randObj = { a: 23, b: 7, c: 14 };

//! Must wrap this thing inside of parantheses b/c "{}" means that JS engine expects a code block
({ a, b } = randObj);
console.log(a, b);

//> Nested Objects (restaurant -> opening hours -> days)
//Inside opening hours -> friday object -> inside friday object -> open and close properties -> turn open and close into variables
const { fri: { open, close } } = openingHours;
console.log(open, close);

//> Practical Application Example:
//Define orderDelivery function inside of the restaurant object
// REMEMBER WE ARE ONLY PASSING IN AN OBJECT INTO THE FUNCTION (NOT 4 ARGUMENTS)
// Basically we are defining the object that is THE ARGUMENT of this function -> and then we can destructure that object right inside of the argument -> accessing and using the properties within said object

//! Since we destructured the object directly, the function can now access the variables of said object
//It will now output delivery details
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

//!We can also set default values if some arguments/variables/properties cannot be destructured
//Since this object inputted into the function doesn't have mainIndex and starterIndex -> default values will be used
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
})
*/

//? The Spread Operator (...)
//> Used to unpack all the contents of an array -> unpack array into individual elements
//> Usually used to build new arrays using contents of old ones and to input multiple values into a function as arguments
//> ON THE RIGHT SIDE OF = -> const meow = [...meowArray];

/*
//> ***USUALLY USED WHERE VALUES ARE SEPARATED BY COMMAS
//> WORKS ON ALL ITERABLES -> STRINGS, MAPS, ARRAYS, SETS, etc. (NO OBJECTS)

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//________________________________________________________________________________________________________________

//! Example:
const arr = [7, 8, 9];
//If we wanted to use the contents of this array in another array -> loop over this array OR -> manually input
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

//*Using the spread operator (...)
//It's like taking out all the elements out of arr and writing them inside of newArray manually
const newArr = [1, 2, ...arr];
console.log(newArr);

//! What if we were to use the spread operator while logging?
console.log(...newArr); //1 2 7 8 9
//It returns individual values instead of the array itself

//________________________________________________________________________________________________________________

//! More Practical Example
//Using our restaurant object

//> We are making an entirely new menu using the items from the old one
//Using items from restaurant.mainMenu but also adding a new item 'Gnocci'
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//________________________________________________________________________________________________________________

//! Copying Arrays
const mainMenuCopy = [...restaurant.mainMenu];

//! Joining two arrays or more
const overallMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(overallMenu);

//! Using it on a string
const str = 'Jerry';
const letters = [...str, ' ', 'S,'];
console.log(letters);
console.log(...str);

//________________________________________________________________________________________________________________

//> Creating a function (orderPasta)
//Using the spread operator we can efficiently input arguments into a function

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

//! Using the old way:
//This is both tedious and inefficient
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//! Using the spread operator:
//This works because the spread operator spreads out the elements with commas -> meaning they are treated as valid arguments
restaurant.orderPasta(...ingredients);

//________________________________________________________________________________________________________________

//> Spread operator can also work on objects
//Creating a NEW restaurant object using the data from the original one and adding to it

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guissepe' };
console.log(newRestaurant);

//! Can make shallow copies of both arrays and objects
//This creates a brand new COPY which is completely separate from the original
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
//The restaurants have diff names b/c they are separate from eachother
*/

//________________________________________________________________________________________________________________


//? Rest Pattern and Rest Parameters
//> Looks exactly like the spread operator but does the complete opposite
//> Collects multiple elements and condenses it into an array
//> ON THE LEFT SIDE OF THE =

/*

//________________________________________________________________________________________________________________

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//________________________________________________________________________________________________________________

//! OVERALL DESTRUCTURING & REST

//! Example using destructuring (left hand side)
//a and b will take become VARIABLES for 1 and 2
//others will become an array of 3,4,5
//called REST b/c it will take the REST of the variables/elements when destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//! Another example:
//Creating an array of the ENTIRE menu
//Lets say that we want the 1st and third element from the main menu (pizza, risotto)
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

//> Note that it doesn't include any skipped elements and only includes elements after the last variable (should be the last in the destructuring assignment)

//! Destructuring Objects
//Working with our opening hours -> creating an object with only our weekdays (thu, fri)
//> REMEMBER in destructuring ORDER DOES NOT MATTER
//THEREFORE, put the saturday object into its own variable (sat using destructuring) -> use REST operator to group up the REST of the objects (thu,fri) into their own object
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

//________________________________________________________________________________________________________________

//! FUNCTIONS & REST
//What if we wanted an arbritrary amount of arguments to use within the function? Example:
//add(1,2,3,54,5,6);
//add(1,2,4)

//> We can use the rest operator (REST ARGUMENTS)
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(numbers);
  console.log(sum);
}

add(1, 2, 2, 3, 4, 5,);
add(1, 2, 3, 34, 5);
add(1, 3,);

//> We can also do this using the SPREAD operator:
const x = [23, 5, 7];
add(...x);
//Argument for add is going to be SPREAD (removes array and spreads elements apart) but IMMEDIATELY COLLECTED using rest operator (collects elements and forms an array)
//UNPACKING USING SPREAD -> PACKING UP USING REST

//>This means that this function can take both arrays and normal element inputs as arguments

//________________________________________________________________________________________________________________

//! Restaurant Example:
//Writing the orderPizza function inside of the restaurant object

//>The first argument contains the main ingredient variable
//The REST of the arguments will be packed up into a variable/array called otherIngredients
restaurant.orderPizza('Pepperoni (mainIngredient)', 'Onion', 'Fish', 'Sausig');

//> If there is only one argument
restaurant.orderPizza('Pepperoni (mainIngredient)');
//The mainIngredient variable will contain pepperoni
//The otherIngredients array will be empty (there is nothing to collect but it will still return an empty array)
*/

//________________________________________________________________________________________________________________

//? Short Circuiting (&& and ||)

//> 3 Properties of Logical operators:
//! They don't have to use boolean types (true or false)
//Use ANY data type
//Return ANY data type
//SHORT CIRCUITING

//> OR OPERATOR (||)
//! Short circuiting means that if the used values are NOT BOOLEAN -> if first evaluated value is TRUTHY -> Immediately return that value
//3 and 'Jonas' are NOT BOOLEAN types -> 3 is evaluated first -> 3 is truthy -> 3 is returned

console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas');//Jonas -> '' is falsy value and so Jonas was evaluated instead which is not a false value
console.log(true || 0); //True -> evaluated first and it was true so it skips 0
console.log(undefined || null); //null -> undefined is falsy -> skips undefined -> null is evaluated and returned (happens eitherway, even if null is a falsy value)

console.log(0 || undefined || null || 'Hello' || 23 || '');//Will return 'Hello' b/c it is the first truthy value encountered
//! It will shortcircuit the entire evaluation after finding its first truthy value and then return said value