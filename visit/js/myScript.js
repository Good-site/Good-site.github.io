/* 
    $('.block_1').css("border", '2px solid red'); 
*/
/*
$(document).ready(function(){
    let opinions = {threshold: [0.5]};
    let observer = newIntersectionObserver(onEntry, opinions);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observ(el);
    });
    
function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            
            change.target.classList.add('show-animation');
            change.target.src = change.target.dataset.src;
        }
    });
}
}
*/
$(document).ready(function() {
    $("#inputTel").mask("+7(999)999-9999");
    $('form').submit(function(event){
        if($("inputTel").val() == || $("#InputEmail1").val() == ""){
            event.preventDefault();
            alert("Введите телефон");
        }
    });
});