window.addEventListener("load", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(".hero-title", {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1,
  })
    .to(
      ".hero-subtitle",
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
      },
      "-=0.5",
    )
    .to(
      ".hero-btn",
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.2,
      },
      "-=0.4",
    );
});

const cards = document.querySelectorAll(".portfolio-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // fecha todos
    cards.forEach((c) => {
      if (c !== card) {
        c.classList.remove("active");
      }
    });

    // toggle no clicado
    card.classList.toggle("active");

    // animação com GSAP
    if (card.classList.contains("active")) {
      gsap.fromTo(
        card.querySelector(".portfolio-info"),
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      );
    }
  });
});

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    const numero = "5514999033020";

    const texto = `Olá, me chamo ${nome}%0A
Email: ${email}%0A
WhatsApp: ${telefone}%0A
Mensagem: ${mensagem}`;

    const url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, "_blank");
  });

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".portfolio-card img").forEach((img) => {
    img.addEventListener("click", function (e) {
      e.stopPropagation(); // 🔥 evita conflito com clique do card
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  modal.onclick = function (e) {
    if (e.target !== modalImg) {
      modal.style.display = "none";
    }
  };
});
