$(".clickMe").on("click",function(){
    let rando= ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#800080', '#ffa500', '#008000', '#000080'];
    let randomIndex = Math.floor(Math.random() * rando.length);
    let randomColor = rando[randomIndex];

    $("body").css("background-color", randomColor);
    $(".xthing").text(randomColor);
});



