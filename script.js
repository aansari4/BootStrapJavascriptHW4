$(document).ready(function(){
    // The colored boxes
        $('.changeBtn1').on('click',function() {
            $('.redBox').css('background-color', 'green');
        });
        $('.changeBtn2').on('click',function() {
            $('.blueBox').css('background-color', 'yellow');
        });
        $('.changeBtn3').on('click',function() {
            $('.greenBox').css('background-color', 'purple');
        });
        $('.changeAll').on('click',function() {
            $('.greenBox, .blueBox, .redBox').css('background-color', 'black');
        });
    //Hide boxes
    $('.hideBtn1').on('click',function() {
        $('.redBox').hide();
    });
    $('.hideBtn2').on('click',function() {
        $('.blueBox').hide();
    });
    $('.hideBtn3').on('click',function() {
        $('.greenBox').hide();
    });
    $('.hideAll').on('click',function() {
        $('.redBox, .blueBox, .greenBox').hide();
    });
    // Reset Colors
    $('.resetcol').on('click',function() {
        $('.redBox').css('background-color', 'red');
        $('.blueBox').css('background-color', 'blue');
        $('.greenBox').css('background-color', 'green');
    });
    })
    //Show All
    $('.showall').on('click',function() {
        $('.redBox, .blueBox, .greenBox').show();
    });