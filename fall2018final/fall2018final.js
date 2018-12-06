'use strict';

$(".top").click(function() {
    $(this).next(".list").slideToggle('slow');
});


let verse = ("article1.txt")  // sets default verse element

$(".story").val(verse); // changes menu option to default
$(".h2").load(verse);   // retrieves only default element


$(".story").click(function() { //on change, when a new menu item is selected do this
verse = ("article2.txt") //the verse which is my variable for the content information is set to the new value of the selected menu item.
    
$(".h2").load(verse); //upload the new verse and replace the old one
});


$(".story").click(function() { //on change, when a new menu item is selected do this
verse = ("article1.txt") //the verse which is my variable for the content information is set to the new value of the selected menu item.
    
$(".h2").load(verse); //upload the new verse and replace the old one
});