var clouds = true; // is it cloudy outside
var rain = false; // is in raining outside
var daylight = true; // is it during the daytime
var lights = false; // are the lights on in the house

var activity;

if (daylight && clouds && rain) {

    activity = "play video games.";

}else if (daylight && clouds && !rain) {

    activity = "play basketball.";

}else if (daylight && !clouds) {

    activity = "go swimming.";

}else if (!daylight && lights) {

    activity = "work on homework.";
    
}else if (!daylight && !lights) {

    activity = "go to sleep.";
}

console.log("I think I'm going to " + activity);
