// Podrías agregar funciones aquí
console.log("Fintrack landing cargada.");

const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  msg.textContent = "Mensaje enviado. ¡Gracias por contactarnos!";
  form.reset();
});


const testimonios = [
    { text: "“Con Fintrack ahorré más de 300€ en tres meses. ¡Increíble!”", author: "– Carla R." },
    { text: "“Me ayudó a pagar mis deudas más rápido.”", author: "– Luis G." },
    { text: "“Antes no sabía en qué gastaba mi dinero. Ahora tengo el control.”", author: "– Ana V." }
  ];
  
  let index = 0;
  setInterval(() => {
    index = (index + 1) % testimonios.length;
    document.getElementById("testimonio-text").textContent = testimonios[index].text;
    document.getElementById("testimonio-autor").textContent = testimonios[index].author;
  }, 4000);
  