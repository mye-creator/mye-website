$('document').ready(function() {
 $('a').click(function (event) { 
   event.preventDefault(); 

   var url = $(this).attr('href');
 
   $.get(url, function(data) {
     alert(data);

    });

   });

 });
