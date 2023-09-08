var menu = {

};

menu.courses = {

};

menu.courses.appetizers = [];
menu.courses.mains = [];
menu.courses.desserts = [];

menu.addDishToCourse = function (courseName, dishName, dishPrice) {
    var dish = {
        name: dishName,
        price: dishPrice
    }
    return courses[courseName].push(dish);
};

menu.getRandomDishFromCourse = function (courseName) {
    var dishes = courses[courseName];
    var randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
};

menu.generateRandomMeal = function () {
    var appetizer = menu.getRandomDishFromCourse('appetizers');
    var main = menu.getRandomDishFromCourse('mains');
    var dessert = menu.getRandomDishFromCourse('desserts');

    var totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal today is ${appetizer.name}, ${main.name}, and ${dessert.name}. Your total is $${totalPrice}.`;
};

menu.addDishToCourse('appetizers', 'Chips & Queso', '7.00');
menu.addDishToCourse('appetizers', 'Breadsticks', '6.25');
menu.addDishToCourse('appetizers', 'Samosas', '5.50');
menu.addDishToCourse('mains', 'Cheeseburger', '9.75');
menu.addDishToCourse('mains', 'Fried Chicken', '11.50');
menu.addDishToCourse('mains', 'Pizza', '9.50');
menu.addDishToCourse('desserts', 'Cheesecake', '6.00');
menu.addDishToCourse('desserts', 'Apple Pie', '6.50');
menu.addDishToCourse('desserts', 'Tiramisu', '6.00');

let meal = menu.generateRandomMeal();
console.log(meal);
