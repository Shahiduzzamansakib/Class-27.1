$(function(){
    let qsn = $(".faq .qsn");
  
    qsn.on('click', function(){
      
      if($(this).hasClass('active')){

          $(this).removeClass('active');
  
      }else{

          qsn.removeClass('active');
          $(this).addClass('active');
      }
  
    });

}); 