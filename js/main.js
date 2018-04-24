
/*Thông báo */
$(document).ready(function() {
		$("#loading").fadeOut(2000);
		backTop();
		notificationRun();
		$("#buy").click(function(){
			alert("Đã đặt hàng thành công!!!")
			$("#donhang").html("1 sản phẩm đang trên đường");
		})
});
//Chạy thông báo 
function notificationRun(){
	var bien = 0;
	const buoc = 7;
	var span = $("div.thongbao > span");
	var play = function() {
		if (bien + span.outerWidth() <= 0)
			bien = $("div.thongbao").outerWidth();
		bien -= buoc;
		span.css("left", bien);
	};

	var timer = setInterval(play, 50);
	
	$("div.thongbao").on({
		mouseenter: function() {
			$("div.thongbao").css("color","yellow");
			clearInterval(timer);
		},
		mouseleave: function() {
			$("div.thongbao").css("color","black");
			timer = setInterval(play, 50);
		}
    });
}
/* */
function check()
{
	var text=document.getElementById("input");
	//console.log(text.value);
	if (text.value == "") {
		//aHTML.style.border = "2px solid red";
		var count = 0;
		var timer = setInterval(function() {
			if (text.style.border == "")
				text.style.border = "2px solid blue";
			else
				text.style.border = "";
				
			count++;
			if (count == 6) {
				clearInterval(timer);
				count = 0;
				text.style.border = "";
			}
		}, 500);
	}
}
// slideshow
window.onload=function(){
	//Google maps
	myMap(10.816698,106.677383,"map");
	//Show Slides hình ảnh :D
	showSlides();
	// Modal view
	var modal = document.getElementById('myModal');
	var show = document.getElementsByClassName("showModal");
	var span = document.getElementsByClassName("close")[0];
	for(var i=0;i<=19;i++)
	{
		show[i].onclick =function() {
		modal.style.display = "block";
		}
	}
	span.onclick = function() {
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
	
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Back to top
function backTop(){
	$(window).scroll(function () {
	if ($(this).scrollTop() > 400)
	{
	$('#top-up').fadeIn(750);
	}
	else
	$('#top-up').fadeOut(750);
	});
	$('#top-up').click(function () {
	$('body,html').animate({scrollTop: 0}, 750);
	});
}

//Map google
function myMap(lat,long,id) {
	var mapOptions = {
		center: new google.maps.LatLng(lat,long),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById(id), mapOptions);
	var marker = new google.maps.Marker({position:new google.maps.LatLng(lat,long)});
	marker.setMap(map);
}