
//The business Logic

$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function(){
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});
/* - - - portfolio hover handler - - - */
let image = document.querySelectorAll(".item")
let texBox = document.querySelectorAll(".text-box")
let itemsArray = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

//mouseover function
for(i=0; i<image.length; i++){
    image[i].addEventListener("mouseover", (e) => {
        let hoverTextClass = e.target.lastElementChild.className.split(" ")[1]
        let backImage = e.target.firstElementChild
        for(j=0; j<itemsArray.length; j++){
            if(hoverTextClass === itemsArray[j] ){
                $(`.${hoverTextClass}`).css({
                    'display': 'flex'
                })
                backImage.style.filter = 'brightness(50%)'
            }
        }   
    })
}

//mouseout function
for(i=0; i<image.length; i++){
    image[i].addEventListener("mouseout", (e) => {
        let hoverTextClass = e.target.lastElementChild.className.split(" ")[1]
        let backImage = e.target.firstElementChild
        for(j=0; j<itemsArray.length; j++){
            if(hoverTextClass === itemsArray[j] ){
                $(`.${hoverTextClass}`).css({
                    'display': 'none'
                })
                backImage.style.filter = 'brightness(100%)'
            }
        }   
    })
}

//The User logic 


/* Form section*/
$(document).ready(function(){
  $("form#form34A").submit(function(event){
    
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()){
      alert ("Hello " + name + ", we have received your message. Thank you for reaching out to Delani Studio.");
    }
    else {
      alert("Please enter your name and email!");
    }
    //event.preventDefault();
  });

});
