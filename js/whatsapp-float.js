window.addEventListener('DOMContentLoaded', function(){
    // Create the WhatsApp logo element
  var whatsappLogo = document.createElement('a');
  whatsappLogo.href = 'https://api.whatsapp.com/send?phone=9879182121';
  whatsappLogo.className = 'whatsapp-float';
  
  var logoImg = document.createElement('img');
  logoImg.src = 'https://img.icons8.com/color/48/whatsapp--v1.png';
  logoImg.alt = 'WhatsApp Logo';
  
  whatsappLogo.appendChild(logoImg);
  
  // Append the logo element to the body
  document.body.appendChild(whatsappLogo);

  // Scroll event listener
  var prevScrollPos = window.pageYOffset;

  window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      // Scrolling down
      whatsappLogo.style.transform = 'translateY(100px)';
    } else {
      // Scrolling up
      whatsappLogo.style.transform = 'translateY(0)';
    }

    prevScrollPos = currentScrollPos;
  });
});