var clouds = true; // is it cloudy outside
var rain = false; // is in raining outside
var daylight = true; // is it during the daytime
var lights = false; // are the lights on in the house

var activity;

if (daylight) {

    if (clouds) {

        if (rain) {
            activity = "play video games.";
        }else{
            activity = "play basketball.";
        }

    }else{
        activity = "go swimming.";
    }
}else{

    if (lights) {
        activity = "work on homework.";
    }else{
        activity = "go to sleep.";
    }
}

console.log("I think I'm going to " + activity);
