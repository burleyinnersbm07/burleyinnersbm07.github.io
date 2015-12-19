// Created by Brett Burley-Inners

$(document).ready(function() {
    // default variables for 3 main divs, 'about' div is true by default
    var aboutDiv = $('#about');
    var aboutButton = $('button[name=aboutButton]');
    var skillsDiv = $('#skills');
    var skillsButton = $('button[name=skillsButton]');
    var projectsDiv = $('#projects');
    var projectsButton = $('button[name=projectsButton]');

    // debug and testing tool to check visibility / toggled state
    var isVisible = function(item) {
        return item.is(':visible');
    } 

    // default on page load
    aboutDiv.toggle(true);
    $('button[name=aboutButton]').css('border-bottom', '2px solid white');
    skillsDiv.toggle(false);
    projectsDiv.toggle(false);

    // really ugly way to change styles and adjust displayed content on click of a button
    $(document).on('click', 'button[name=aboutButton]', function() {
        $('button[name=aboutButton]').css('border-bottom', '2px solid white');
        aboutDiv.toggle(true);
        $('button[name=skillsButton').css('border-bottom', '2px solid rgb(127, 196, 207)');
        skillsDiv.toggle(false);
        $('button[name=projectsButton]').css('border-bottom', '2px solid rgb(127, 196, 207)');
        projectsDiv.toggle(false);
    });
    $(document).on('click', 'button[name=skillsButton]', function() {
        $('button[name=skillsButton').css('border-bottom', '2px solid white');
        skillsDiv.toggle(true);
        $('button[name=aboutButton]').css('border-bottom', '2px solid rgb(127, 196, 207)');
        aboutDiv.toggle(false);
        $('button[name=projectsButton]').css('border-bottom', '2px solid rgb(127, 196, 207)');
        projectsDiv.toggle(false);
    });
    $(document).on('click', 'button[name=projectsButton]', function() {
        $('button[name=projectsButton]').css('border-bottom', '2px solid white');
        projectsDiv.toggle(true);
        $('button[name=aboutButton]').css('border-bottom', '2px solid rgb(127, 196, 207)');
        aboutDiv.toggle(false);
        $('button[name=skillsButton').css('border-bottom', '2px solid rgb(127, 196, 207)');
        skillsDiv.toggle(false);
    });

    
});