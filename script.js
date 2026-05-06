
document.addEventListener('DOMContentLoaded', () => {

  const whatsappNumber = '5531997375149';

  /* ===== SLIDER AUTOMÁTICO ===== */
  const slider = document.querySelector(".logos-slider");
  const track = document.querySelector(".logos-track");

  if (slider && track) {

    let speed = 0.7;
    let running = true;
    let offset = 0;

    function animateScroll() {

      if (!running) return;

      offset -= speed;

      const limit = track.scrollWidth / 2;

      if (Math.abs(offset) >= limit) {
        offset = 0;
      }

      track.style.transform = `translateX(${offset}px)`;

      requestAnimationFrame(animateScroll);
    }

    animateScroll();

    slider.addEventListener('mouseenter', () => {
      running = false;
    });

    slider.addEventListener('mouseleave', () => {

      if (!running) {
        running = true;
        requestAnimationFrame(animateScroll);
      }

    });

  }

  /* ===== BOTÕES DE PLANOS ===== */
  document.querySelectorAll('.btn-plan').forEach(btn => {

    btn.addEventListener('click', () => {

      const plano = btn.dataset.plano || 'Plano';

      const planoInput = document.getElementById('plano');

      if (planoInput) {
        planoInput.value = plano;
      }

      const contato = document.getElementById('contato');

      if (contato) {

        const headerHeight = document.querySelector('header').offsetHeight;

        const offsetTop = contato.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

      }

    });

  });

  /* ===== FORMULÁRIO WHATSAPP ===== */
  const contatoForm = document.getElementById('contactForm');

  if (contatoForm) {

    contatoForm.addEventListener('submit', e => {

      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const plano = document.getElementById('plano').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if (!nome || !email || !plano) {

        alert('Por favor, preencha nome, e-mail e plano.');

        return;
      }

      const texto = encodeURIComponent(
`Olá, meu nome é ${nome}.

Email: ${email}
Plano: ${plano}

Mensagem:
${mensagem || 'Sem mensagem adicional'}`
      );

      window.open(
        `https://wa.me/${whatsappNumber}?text=${texto}`,
        '_blank'
      );

      contatoForm.reset();

      document.getElementById('plano').value = '';

    });

  }

  /* ===== BOTÃO DIRETO WHATSAPP ===== */
  const whatsappLink = document.getElementById('whatsappLink');

  if (whatsappLink) {

    const textoDireto = encodeURIComponent(
`Olá, vim pelo site da MK Streaming.

Quero mais informações sobre os planos.`
    );

    whatsappLink.href =
`https://wa.me/${whatsappNumber}?text=${textoDireto}`;

  }

  /* ===== BOTÃO TESTE GRÁTIS HERO ===== */
  const heroWhatsappLink = document.getElementById('heroWhatsappLink');

  if (heroWhatsappLink) {

    const textoHero = encodeURIComponent(
`Olá, vim pelo site da MK Streaming.

Quero testar por 6 horas grátis.`
    );

    heroWhatsappLink.href =
`https://wa.me/${whatsappNumber}?text=${textoHero}`;

  }

});