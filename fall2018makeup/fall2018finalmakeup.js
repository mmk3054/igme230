
//to make the menu items slide up and down
$(".menu").click(function(){ //on click of my menu option
    $(this).next(".submenu").slideToggle(500); //show or hide the submenu
});


/*
//loading articles
$("#story").load("story0.txt"); //loads as defult


$('#story1.txt').attr('id').click(function() { //when you click the list item with the id "test1" perform this function
$("story").load("story1.txt"); //upload the new verse and replace the old one
});


$('#story2.txt').attr('id').click(function() { //when you click the list item with the id "test" perform this function
$("story").load("story2.txt"); //upload the new verse and replace the old one
});

*/


//changes color
$("#lightpink").click(function() { //when you click the list item with the id "test1" perform this function
$("#source").css('background-color', 'lightpink');
});

$("#lightsalmon").click(function() { //when you click the list item with the id "test1" perform this function
$("#source").css('background-color', 'lightsalmon');
});


let count = 0;
$("#increment").click(function(){ //on click of my menu option
    count= count + 1; //count++;
    $("#currentcount").html(count);
   
});



$("#story").load("story0.txt");

//can not get the stroies to load this is what I have 
/*
let plus = $( "#story1.txt" ).attr( 'id' );
let plus1 =$( "#story2.txt" ).attr( 'id' );
 
$(plus).click(function() { //when you click the list item with the id "test1" perform this function
$("story").load("story1.txt"); //upload the new verse and replace the old one
});


$(plus1).click(function() { //when you click the list item with the id "test" perform this function
$("story").load("story2.txt"); //upload the new verse and replace the old one
});
*/





