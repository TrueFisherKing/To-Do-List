$("document").ready(function(){

  $(".list").on("click", "li", function(){
    $(this).toggleClass("completed");
  });

  $(".list").on("click", "span", function(event){
    $(this).parent().fadeOut(300, function(){
      $(this).remove();
    });
    event.stopPropagation();
  });

  $("input[type='text']").keypress(function(event){
    if(event.which === 13){
      var todoText = $(this).val();
      $(this).val("");
      $(".list").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i> </span>' + todoText+ '</li>');
    }
  });
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle(100);
});
});
