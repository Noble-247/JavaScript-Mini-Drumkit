// CREATE A HOUSEKEEPER
var houseKeeper1 = {
    firstName: "Chioma",
    lastName: "Azubuike",
    yearsOfExperience: 10,
    cleaningRepertoire: ["Bathroom", "Toilet", "Garden", "Lobby", "Bedroom"],
    welcomeMessage: function() {
        console.log(`Welcome, May i take your luggages?`);
    }
}
console.log(`Hello, my name is ${houseKeeper1.firstName} ${houseKeeper1.lastName}`);


//CONSTRUCTOR FUNCTION
/**Used to construct objects */
function Waiter(firstName, lastName, yearsOfExperience, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsOfExperience = yearsOfExperience;
    this.age = age;
    this.welcome_message = function() {
        console.log(`Hello Sir/Mrs, Welcome. May i have your orders`);
    }
}

/**Create a new waiter from the constructor */
const waiter1 = new Waiter("John", "Doe", 10, 33);
console.log(waiter1.firstName);