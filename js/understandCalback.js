//CREATE A HIGHER ORDER FUNCTION
function anotherAddEventListerner(typeOfEvent, callback) {

    //Detect Event Code

    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2

    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }

}
undefined
anotherAddEventListerner("keypress", function(event) {
    console.log(event);
});
// VM859:2 {eventType: "keypress", key: "p", durationOfKeypress: 2}
// undefined


function anotherAddEventListerner(typeOfEvent, callback) {

    //Detect Event Code

    var eventThatHappened = {
        eventType: "click",
        durationOfClick: 2

    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }

}
undefined
anotherAddEventListerner("click", function(event) {
    console.log(event);
});
// VM888:2 {eventType: "click", durationOfClick: 2}
// undefined