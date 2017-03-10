	
	/*
var a = document.getElementsByClassName('n');
console.log(a);
console.log(a.length);

for (var i=0; i < 3; i++) {
console.log(2);
  a[i].addEventListener("click",function() {
  
    var inp = a[i].getAttribute("data");
	console.log(1);
	document.getElementById(inp).checked = true;
  
  
  
  });
 }
	
	
	*/
	
	
	$(document).ready(function(){
		$("a").on('click', function(event) {
			    if (this.hash !== "") {
					 var hash = this.hash;

					       $('html, body').animate({
							           scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});






