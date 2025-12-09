let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   // Ajoutez cette section pour l'autoplay
   autoplay: {
     delay: 5000, // 5 secondes
     disableOnInteraction: false, // continue après interaction
     pauseOnMouseEnter: true, // pause quand la souris survole
   },
   // Optionnel : vitesse de transition
   speed: 800,
   // Optionnel : effet de transition (fade, cube, etc.)
   effect: 'slide',
});
/*var form = document.getElementById('form');
console.log(form);*/
document.getElementById('form').addEventListener('submit', function(e) {
	e.preventDefault();
	const email = "raoul.mbogning@gmail.com";
    	const sujet = "Message depuis le site web";
	var name = document.getElementById('name').value;
	var surname = document.getElementById('surname').value;
	var mail = document.getElementById('mail').value;
	var message = document.getElementById('message').value;
	const corps = `Bonjour, Je m'appelle ${name}. ${message} Cordialement, ${name}`;
	const lien = `mailto:${email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
	//console.log(corps);
	window.location.href = lien;
});

