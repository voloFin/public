'use-strict';

/*var animatedNav = function() {
    $(window).stop().on("scroll", function() {
        var scrollLocation = $(window).scrollTop();
        var gridPos = $("#main").position();
        var gridTop = gridPos.top;
        if (scrollLocation + 80 >= gridTop) {
            $(".top-nav").addClass("light");
            $(".page-link").addClass("dark");
            $(".volo").attr("src","images/logo-dark.png");
        }
        else {
            $(".top-nav").removeClass("light");
            $(".page-link").removeClass("dark");
            $(".volo").attr("src","images/logo-light.png");
        };
    });
};*/

var clickableButton = function() {
    $(document.body).on("mousedown", ".clickable", function() {
       $(this).css("box-shadow", "none");
    });
    $(document.body).on("mouseup", ".clickable", function() {
       $(this).css("box-shadow", "0 .2em .5em rgba(0,0,0,.26)");
    });
};

$(document).ready(function() {
    /*animatedNav();*/
    clickableButton();
});

//========================================================================================
//=========================== Link and button HTML / CSS funcitons =======================
//========================================================================================

//this function gets the ID of the link that is clicked and hides/show the appropriate content
$(document).on('click', "a", function(){
    //prevent default anchor click action
    event.preventDefault();
    var showme = $(this).attr('id');
    //id of anchor is the same as the corresponding div minus the first capital letter
    showme = showme.charAt(0).toUpperCase() + showme.slice(1);
    document.getElementById(document.getElementById("Home").getAttribute("data-state")).style.display = "none";
    document.getElementById("Home").setAttribute("data-state", showme);
    document.getElementById(showme).style.display = "block";
});




//these functions hide / diplay the relevant content
// ended up being redundant

// function Home(){
//     // var test = document.getElementById("Home").getAttribute("data-state");
//     // console.log(test);
//     document.getElementById(document.getElementById("Home").getAttribute("data-state")).style.display = "none";
//     document.getElementById("Home").setAttribute("data-state", "Home");
//     document.getElementById("Home").style.display = "block";

// }//end Home()
// function AboutUs(){
//     document.getElementById(document.getElementById("Home").getAttribute("data-state")).style.display = "none";
//     document.getElementById("Home").setAttribute("data-state", "AboutUs");
//     //document.getElementById("AboutUs").style.display = "block";
// }//end AboutUs()
// function Approach(){
//     document.getElementById(document.getElementById("Home").getAttribute("data-state")).style.display = "none";
//     document.getElementById("Home").setAttribute("data-state", "Approach");
//     //document.getElementById("Approach").style.display = "block";

// }//end Approach
// function FinancingSolutions(){

// }//end FinancingSolutions()
// function TheTeam(){

// }//end TheTeam()
// function TermsOfUse(){

// }//end TermsOfUse()
// function PrivacyPolicy(){

// }//end PrivacyPolicy()
// function LegalDisclosures(){

// }//endLegalDisclosures()

// //this function determines the current content on the page and returns the appropriate string
// //outputs: "Home", "AboutUs", "Approach", "FinancingSolutions", "TheTeam", "TermsOfUse", "PrivacyPolicy" and "LegalDisclosures"
// //The current content will be attached to the data-state of the "Home" div
// function DetermineContent(){
//    return document.getElementById("Home").getAttribute('data-state');
// }//end DetermineContent()
// 
// turned out to be useless / redundant


//========================================================================================
//========================= end Link and button HTML / CSS funcitons =====================
//========================================================================================