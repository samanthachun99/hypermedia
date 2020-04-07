//Begin javascript after page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    //Define your switch
    //You can change the word "switch" to match the id of the button in your HTML
    var time_flip = document.getElementById("pit");

    //Define what happens when "switch" is clicked
    time_flip.onclick = function() {

        //Define variable "status" for use in if/else statement

        //If the page is already set to night, change back to day
        if (time_flip.classList.contains("night")) {
            //Remove the "css/style-night.css" url from the #style-night href
            setStyleSheet("");
            //Set the switch class to "day"
            time_flip.setAttribute("class", "day");
            //Add additional actions for day here:
        }
        //Else the page is set to day, change it to night
        else {
            //Add the "css/style-night.css" url to the #style-night href
            setStyleSheet("css/style-night.css");
            //set the switch class to "night"
            time_flip.setAttribute("class", "night");
            //Add additional actions for night here:
        }

    }

    //this is the definition for the function that is called above to change the url of the stylesheet
    function setStyleSheet(url) {
        var stylesheet = document.getElementById("style-night");
        stylesheet.setAttribute("href", url);
    }

});