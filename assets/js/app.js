$(function () {
  const BOXES = [
    { "title": "Quando estiver triste", "message": "Mesmo nos dias mais nublados, você continua sendo luz. Se der vontade de chorar, chora. Depois respira fundo e lembra: você não está sozinha. Eu tô aqui, torcendo por você, sempre." },
    { "title": "Quando estiver muito feliz", "message": "Que bom que você tá feliz! 💖 Guarda esse momento com carinho e lembra que você merece sentir isso todos os dias. Que essa alegria se espalhe por tudo na sua vida." },
    { "title": "Quando duvidar de si mesma", "message": "Olha pra tudo o que você já enfrentou até hoje. Você chegou até aqui porque é forte, inteligente e incrivelmente capaz. Não acredite nas dúvidas, acredite em você." },
    { "title": "Quando sentir saudade", "message": "A saudade é a prova de que algo foi especial. Em vez de doer, tenta transformar em carinho: lembrar dos abraços, das risadas, dos olhares. O que é de verdade nunca vai embora." },
    { "title": "Quando o dia estiver pesado", "message": "Se o dia estiver pesado, você não precisa carregá-lo sozinha. Pausa, respira, toma uma água, se abraça. Cada dia difícil também passa — e você já sobreviveu a vários." },
    { "title": "Quando achar que não é suficiente", "message": "Você é muito mais especial do que imagina. O jeito que você cuida, que escuta, que sente… tudo em você tem um brilho único." },
    { "title": "Quando quiser um abraço", "message": "Se eu pudesse, te dava um abraço agora — daqueles compridos, silenciosos, que dizem tudo sem falar nada. Então imagina que eu tô aí, te envolvendo com carinho." },
    { "title": "Quando estiver ansiosa", "message": "Quando a ansiedade vier, tenta voltar para o agora: sente o ar, o chão, seu corpo. Você não é o que sente neste momento, você é muito maior do que isso." },
    { "title": "Quando não conseguir dormir", "message": "Se o sono não vier, fecha os olhos e lembra de um momento que te fez bem. Um pôr do sol, um abraço, uma piada boba. Deixa o coração descansar, mesmo acordada." },
    { "title": "Quando se sentir sozinha", "message": "Você nunca está realmente sozinha. Tem gente que pensa em você, que torce por você, que sorri só de lembrar de você." },
    { "title": "Quando algo der muito errado", "message": "Errar faz parte. Falhar não é o fim do mundo. Você não é o seu erro, você é tudo o que aprende e cresce depois dele." },
    { "title": "Quando algo der muito certo", "message": "Você conseguiu! Mesmo com medo, mesmo cansada, mesmo em dúvida. Se orgulha um pouquinho de tudo o que já conquistou." },
    { "title": "Quando quiser sorrir à toa", "message": "Quero te ver sorrindo daquele jeito que até o olho some. 😂 Pensa numa lembrança boba que te faz rir só de lembrar." },
    { "title": "Quando o coração apertar sem motivo", "message": "Às vezes o coração aperta sem motivo. Nessas horas, só se abraça com carinho. Você não precisa se explicar pra sentir." },
    { "title": "Quando estiver com medo do futuro", "message": "O futuro assusta, eu sei. Mas olha pra trás: você já enfrentou tantos “futuros” que achou que não daria conta. E deu." },
    { "title": "Quando sentir orgulho de si", "message": "Que orgulho de você. Pelas pequenas coisas que ninguém vê, pelos esforços silenciosos, pelas batalhas que você vence sozinha." },
    { "title": "Quando estiver cansada de tudo", "message": "Quando tudo cansa, até existir parece pesado. Então hoje, faz só o mínimo. Respira, come algo, descansa. Você não precisa render o tempo todo." },
    { "title": "Quando quiser lembrar de nós", "message": "Aqui é um lugar pra lembrar da gente. De risadas, conversas, olhares, momentos. Tudo isso existe, e continua existindo em você." },
    { "title": "Quando o mundo parecer demais", "message": "Quando o mundo parecer demais, diminui o volume um pouco. Um passo por vez, um pensamento por vez, uma coisa de cada vez." },
    { "title": "Quando sentir falta de esperança", "message": "Mesmo quando a esperança fica pequenininha, ela continua sendo esperança. Segura nela do jeitinho que der. Dias bons ainda vão chegar." },
    { "title": "Quando quiser chorar em paz", "message": "Chorar em paz também é cuidado. Se precisar, deixa cair tudo agora. Depois a gente junta, com calma, o que sobrar." },
    { "title": "Quando estiver romântica", "message": "Quando o coração estiver romântico, lembra que você merece um amor leve, que te respeite, cuide, admire e te faça crescer." },
    { "title": "Quando quiser desistir", "message": "Se a vontade de desistir vier, lembra: você já foi tão longe para simplesmente parar aqui. Respira, pausa, mas não desiste de você." },
    { "title": "Quando se sentir perdida", "message": "Você não está atrasada, nem perdida. Você está em processo. E processos levam tempo, curvas, recomeços." },
    { "title": "Quando estiver grata", "message": "Obrigada por continuar, mesmo quando ninguém vê o esforço que isso exige. Você é uma pessoa incrível, e o mundo é mais bonito com você nele." },
    { "title": "Quando o dia estiver comum demais", "message": "Nem todo dia precisa ser épico. Alguns dias são só dias — e tudo bem. Mesmo nos dias comuns, tem pequenas belezas tentando te encontrar." },
    { "title": "Quando for seu aniversário de novo", "message": "Se é seu aniversário de novo, que bom: significa que você resistiu a mais um ano inteiro. Que esse novo ciclo venha mais leve e cheio de amor." },
    { "title": "Quando quiser abrir uma aleatória", "message": "Às vezes a melhor caixinha é a aleatória. Talvez você esteja prestes a ler exatamente o que precisava hoje. Coincidência? Talvez não. :)" }
  ];

  const VERSES = [
    { "title": "Quando estiver triste", "message": "“O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.” — Salmos 34,18" },
    { "title": "Quando estiver com medo", "message": "“Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.” — Isaías 41,10" },
    { "title": "Quando faltar forças", "message": "“O Senhor é quem te dá força e te sustém.” — Salmos 55,22" },
    { "title": "Quando duvidar de si mesma", "message": "“Tudo posso naquele que me fortalece.” — Filipenses 4,13" },
    { "title": "Quando estiver ansiosa", "message": "“Lancem sobre Ele toda a sua ansiedade, porque Ele tem cuidado de vocês.” — 1 Pedro 5,7" },
    { "title": "Quando sentir solidão", "message": "“Ainda que meu pai e minha mãe me abandonem, o Senhor me acolherá.” — Salmos 27,10" },
    { "title": "Quando o futuro assustar", "message": "“Porque eu bem sei os planos que tenho para vocês, diz o Senhor; planos de paz e não de mal.” — Jeremias 29,11" },
    { "title": "Quando algo der muito errado", "message": "“Em todas as coisas Deus trabalha para o bem daqueles que o amam.” — Romanos 8,28" },
    { "title": "Quando precisar de paz", "message": "“A paz de Deus, que excede todo entendimento, guardará o coração e a mente de vocês.” — Filipenses 4,7" },
    { "title": "Quando estiver cansada", "message": "“Venham a mim todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.” — São Mateus 11,28" },
    { "title": "Quando o coração apertar", "message": "“O Senhor é a minha luz e a minha salvação; de quem terei medo?” — Salmos 27,1" },
    { "title": "Quando a vida parecer pesada", "message": "“O meu jugo é suave e o meu fardo é leve.” — São Mateus 11,30" },
    { "title": "Quando sentir falta de esperança", "message": "“A esperança não nos decepciona, porque o amor de Deus foi derramado em nossos corações.” — Romanos 5,5" },
    { "title": "Quando se sentir perdida", "message": "“Eu sou o caminho, a verdade e a vida.” — São João 14,6" },
    { "title": "Quando pensar em desistir", "message": "“Seja forte e corajosa; não tenha medo, porque o Senhor, o seu Deus, estará com você por onde você for.” — Josué 1,9" },
    { "title": "Quando algo der muito certo", "message": "“Até aqui nos ajudou o Senhor.” — 1 Samuel 7,12" },
    { "title": "Quando desejar sabedoria", "message": "“Se alguém tem falta de sabedoria, peça-a a Deus, que a todos dá livremente.” — Tiago 1,5" },
    { "title": "Quando estiver chorando", "message": "“O choro pode durar uma noite, mas a alegria vem pela manhã.” — Salmos 30,5" },
    { "title": "Quando sentir saudade", "message": "“O Senhor cura os de coração quebrantado e trata dos seus ferimentos.” — Salmos 147,3" },
    { "title": "Quando precisar de direção", "message": "“Entrega o teu caminho ao Senhor; confia nele, e o mais Ele fará.” — Salmos 37,5" },
    { "title": "Quando a luta for grande", "message": "“Maior é o que está em vocês do que aquele que está no mundo.” — 1 João 4,4" },
    { "title": "Quando precisar recomeçar", "message": "“As misericórdias do Senhor se renovam a cada manhã.” — Lamentações 3,22-23" },
    { "title": "Quando a insegurança vier", "message": "“O Senhor irá adiante de você, Ele estará com você; nunca a deixará nem a abandonará.” — Deuteronômio 31,8" },
    { "title": "Quando quiser agradecer", "message": "“Em tudo dai graças, porque esta é a vontade de Deus.” — 1 Tessalonicenses 5,18" },
    { "title": "Quando não entender nada", "message": "“Confia no Senhor de todo o teu coração e não te apoies no teu próprio entendimento.” — Provérbios 3,5" }
  ];

  // =========================
  // HELPERS
  // =========================
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function openOverlay(title, bodyHtml) {
    $('#overlayTitle').text(title || '');
    $('#overlayBody').html(bodyHtml || '');
    $('#overlay').fadeIn(200).css('display', 'flex');
  }

  function closeOverlay() {
    $('#overlay').fadeOut(180);
  }

  // =========================
  // OVERLAY EVENTS
  // =========================
  $('#overlay').on('click', function (e) { if (e.target === this) closeOverlay(); });
  $('.overlay__close').on('click', closeOverlay);

  // =========================
  // RENDER BOXES / VERSES
  // =========================
  const boxesShuffled = shuffle(BOXES.slice());
  const versesShuffled = shuffle(VERSES.slice());

  const $boxesWrap = $('#boxesList');
  boxesShuffled.forEach((b, idx) => {
    const n = idx + 1;
    $boxesWrap.append($(`
      <article class="card card--clickable" data-animate data-kind="box" data-idx="${idx}">
        <div class="pill">${n}</div>
        <h3 style="margin:.6rem 0 .2rem;">${b.title}</h3>
        <p style="margin:0; opacity:.8;">Toque para abrir ✨</p>
      </article>
    `));
  });

  const $versesWrap = $('#versesList');
  versesShuffled.slice(0, 28).forEach((v, idx) => {
    $versesWrap.append($(`
      <article class="card card--clickable" data-animate data-kind="verse" data-idx="${idx}">
        <div class="pill">Versículo</div>
        <h3 style="margin:.6rem 0 .2rem;">${v.title}</h3>
        <p style="margin:0; opacity:.8;">Toque para ver ✨</p>
      </article>
    `));
  });

  // =========================
  // CLICK HANDLERS
  // =========================
  $(document).on('click', '[data-kind="box"]', function () {
    const idx = Number($(this).attr('data-idx'));
    const item = boxesShuffled[idx];
    if (!item) return;
    openOverlay(item.title, `<p style="margin:0; white-space:pre-line;">${item.message}</p>`);
  });

  $(document).on('click', '[data-kind="verse"]', function () {
    const idx = Number($(this).attr('data-idx'));
    const item = versesShuffled[idx];
    if (!item) return;
    openOverlay(item.title, `<p style="margin:0; white-space:pre-line;">${item.message}</p>`);
  });

  // =========================
  // SORTEAR VERSÍCULO
  // =========================
  $('#btn-sortear').on('click', function () {
    if (!versesShuffled.length) return;
    const idx = Math.floor(Math.random() * versesShuffled.length);
    const item = versesShuffled[idx];

    openOverlay(
      item.title,
      `
        <p style="margin:0 0 10px; font-style:italic; opacity:.85;">
          Talvez esse você precise ler hoje ✨
        </p>
        <p style="margin:0; white-space:pre-line;">${item.message}</p>
      `
    );
  });

  // =========================
  // BALLOONS
  // =========================
  function createBalloon() {
    const colors = ['#ff4d6d', '#ffd166', '#4cc9f0', '#c77dff'];
    const $b = $('<div class="balloon" aria-hidden="true"></div>');
    $b.css({
      left: (Math.random() * 100) + '%',
      background: colors[Math.floor(Math.random() * colors.length)],
      animationDuration: (6 + Math.random() * 5) + 's',
      opacity: (0.65 + Math.random() * 0.3),
    });
    $('.balloons').append($b);
    setTimeout(() => $b.remove(), 12000);
  }
  setInterval(createBalloon, 520);

  // =========================
  // SCROLL REVEAL
  // =========================
  function revealOnScroll() {
    $('[data-animate]').each(function () {
      const elTop = $(this).offset().top;
      const winTop = $(window).scrollTop() + $(window).height() - 60;
      if (winTop > elTop) $(this).addClass('active');
    });
  }
  $(window).on('scroll', revealOnScroll);
  revealOnScroll();

  // =========================
  // THEME TOGGLE
  // =========================
  $('#switch').on('change', function () {
    $('body').toggleClass('theme-dark', this.checked);
  });

  // =========================
  // MOBILE MENU
  // =========================
  const $navToggle = $('.nav-toggle');
  const $menuOverlay = $('.menu-overlay');

  function closeNav() {
    $('body').removeClass('nav-open');
    $navToggle.attr('aria-expanded', 'false');
    $menuOverlay.attr('aria-hidden', 'true');
  }
  function openNav() {
    $('body').addClass('nav-open');
    $navToggle.attr('aria-expanded', 'true');
    $menuOverlay.attr('aria-hidden', 'false');
  }

  $navToggle.attr('aria-expanded', 'false');
  $menuOverlay.attr('aria-hidden', 'true');

  $navToggle.on('click', function () {
    $('body').hasClass('nav-open') ? closeNav() : openNav();
  });

  $menuOverlay.on('click', closeNav);
  $(document).on('click', '.menu a', closeNav);

  $(window).on('resize', function () {
    if (window.innerWidth >= 992) closeNav();
  });

  // =========================
  // SURPRISE
  // =========================
  $('#surpriseBtn').on('click', function () {
  openOverlay(
    '💚 Uma surpresa',
    `
      <p style="margin:0; white-space:pre-line; font-size:13px; line-height:1.45;">
        Você sempre dizia que seu avô iria gostar de me conhecer
        ainda mais por eu ser palmeirense, assim como ele. 💚
        Tenho certeza de que ele se orgulharia de quem você se tornou
        da sua força, do seu coração e da mulher incrível que você é.
        E eu acho que ele ia sorrir ainda mais por você ter uma melhor amiga palmeirense também 😊
        Fiz essa montagem com respeito e carinho,
        pra ele seguir vivo nas lembranças. 💚
      </p>

      <img
        src="./assets/images/extra.png"
        alt="Surpresa"
        style="width:100%; max-width:100%; border-radius:14px; display:block; margin-top:12px;"
      />
    `
  );
});



  // =========================
  // COUNTER (0 -> 28) ANIMADO
  // =========================
  function injectCounterStyles() {
    if ($('#__counter_styles').length) return;

    $('head').append(`
      <style id="__counter_styles">
        .counter{
          font-size:56px;
          font-weight:800;
          line-height:1;
          display:inline-block;
          transform: translateY(0) scale(1);
          will-change: transform, filter;
        }
        .counter.pop{
          animation: counterPop .35s ease both;
        }
        @keyframes counterPop{
          0%   { transform: translateY(6px) scale(.92); filter: blur(.2px); opacity: .55; }
          60%  { transform: translateY(-2px) scale(1.08); filter: blur(0); opacity: 1; }
          100% { transform: translateY(0) scale(1); }
        }
      </style>
    `);
  }

  function startCounterAnimated() {
    injectCounterStyles();

    let count = 0;
    const target = 28;
    const $counter = $('#counter');

    const timer = setInterval(() => {
      $counter.text(count);

      $counter.removeClass('pop');
      void $counter[0].offsetHeight;
      $counter.addClass('pop');

      if (count >= target) {
        clearInterval(timer);
        $counter.text(target);
        return;
      }

      count++;
    }, 80);
  }

  // =========================
  // SMOOTH SCROLL
  // =========================
  $(document).on('click', 'a[data-scroll]', function (e) {
    e.preventDefault();
    const targetSel = $(this).attr('data-scroll');

    if (!targetSel || targetSel === 'topo' || targetSel === '#topo' || targetSel === '#') {
      $('html, body').animate({ scrollTop: 0 }, 450);
      return;
    }

    const $t = $(targetSel);
    if (!$t.length) return;

    $('html, body').animate({ scrollTop: $t.offset().top - 70 }, 450);
  });

  // =========================
  // MOMENTS CAROUSEL (SLICK) - .slider
  // =========================
  let __momentsTries = 0;

  function initMomentsCarousel() {
    const $moments = $('.slider');
    if (!$moments.length) return;

    if (!$.fn || !$.fn.slick) {
      console.error('Slick não carregou. Verifique a ordem: jQuery -> slick.min.js -> app.js');
      return;
    }

    const w = $moments.width();
    if ($moments.is(':hidden') || !w || w < 50) {
      __momentsTries++;
      if (__momentsTries <= 25) setTimeout(initMomentsCarousel, 120);
      return;
    }

    if ($moments.hasClass('slick-initialized')) {
      $moments.slick('setPosition');
      return;
    }

    $moments.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: true,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      pauseOnFocus: true,
      swipe: true,
      touchMove: true,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } }
      ]
    });
  }

  $(window).on('resize orientationchange', function () {
    const $moments = $('.slider');
    if ($moments.hasClass('slick-initialized')) $moments.slick('setPosition');
  });

  // =========================
  // MODAL IMAGEM (slider)
  // =========================
  const $imageModal = $('#imageModal');
  const $modalImg = $imageModal.find('.image-modal__img');

  $(document).on('click', '.slider img', function () {
    const src = $(this).attr('src');
    if (!src) return;
    $modalImg.attr('src', src);
    $imageModal.addClass('active').attr('aria-hidden', 'false');
  });

  function closeImageModal() {
    $imageModal.removeClass('active').attr('aria-hidden', 'true');
    $modalImg.attr('src', '');
  }

  $imageModal.on('click', function (e) { if (e.target === this) closeImageModal(); });
  $('.image-modal__close').on('click', closeImageModal);
  $(document).on('keydown', function (e) { if (e.key === 'Escape') closeImageModal(); });

  // =========================
  // MUSIC (PLAY + TOGGLE PAUSE)
  // =========================
  const music = document.getElementById('bgMusic');
  const $musicToggle = $('#musicToggle');

  function setMusicIcon() {
    if (!music) return;
    $musicToggle.text(music.paused ? '🔇' : '🔊');
    $musicToggle.attr('aria-pressed', String(!music.paused));
  }

  function safePlay() {
    if (!music) return;
    music.volume = 0.6;
    const p = music.play();
    if (p && typeof p.then === 'function') {
      p.then(setMusicIcon).catch(() => setMusicIcon());
    } else {
      setMusicIcon();
    }
  }

  $musicToggle.on('click', function () {
    if (!music) return;

    if (music.paused) {
      safePlay();
    } else {
      music.pause();
      setMusicIcon();
    }
  });

  if (music) {
    music.addEventListener('play', setMusicIcon);
    music.addEventListener('pause', setMusicIcon);
    setMusicIcon();
  }

  // =========================
  // COUNTDOWN (10s) + START
  // =========================
  function ensureCountdownOverlay() {
    if ($('#countdownOverlay').length) return;

    $('body').append(`
      <div id="countdownOverlay" class="countdown-overlay" aria-hidden="true">
        <div class="countdown-box">
          <div class="countdown-title">Só um instante…</div>
          <div id="countdownNumber" class="countdown-number pop">10</div>
          <div class="countdown-sub">Preparando sua surpresa ✨</div>
        </div>
      </div>
    `);
  }

  function injectCountdownStyles() {
    if ($('#__countdown_styles').length) return;

    $('head').append(`
      <style id="__countdown_styles">
        .countdown-overlay{
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: none;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,.65);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          padding: 18px;
        }
        .countdown-overlay.active{ display:flex; }
        .countdown-box{
          width: 100%;
          max-width: 360px;
          border-radius: 18px;
          padding: 18px 16px;
          text-align: center;
          background: rgba(255,255,255,.92);
          box-shadow: 0 18px 50px rgba(0,0,0,.25);
        }
        body.theme-dark .countdown-box{ background: rgba(18,18,18,.92); }
        .countdown-title{ font-size:14px; opacity:.85; margin-bottom:8px; }
        .countdown-number{ font-size:64px; font-weight:800; line-height:1; margin:6px 0 10px; }
        .countdown-sub{ font-size:13px; opacity:.8; }
        @keyframes pop{
          0% { transform: scale(.7); opacity: .3; }
          60%{ transform: scale(1.12); opacity: 1; }
          100%{ transform: scale(1); }
        }
        .countdown-number.pop{ animation: pop .6s ease both; }
      </style>
    `);
  }

  $('#playBtn').on('click', function () {
    const $start = $('#startScreen');
    const $landing = $('#landing');

    safePlay();
    injectCountdownStyles();
    ensureCountdownOverlay();

    const $cd = $('#countdownOverlay');
    const $num = $('#countdownNumber');

    let seconds = 10;
    $num.text(seconds).addClass('pop');
    $cd.addClass('active').attr('aria-hidden', 'false');
    $('body').css('overflow', 'hidden');

    const tick = setInterval(() => {
      seconds--;

      if (seconds <= 0) {
        clearInterval(tick);

        $cd.removeClass('active').attr('aria-hidden', 'true');
        $('body').css('overflow', '');

        $start.addClass('is-hiding');

        setTimeout(function () {
          $start.hide();
          $landing.removeClass('landing-hidden').addClass('is-showing');
          window.scrollTo(0, 0);

          // inicia slick
          __momentsTries = 0;
          void $landing[0].offsetHeight;
          setTimeout(initMomentsCarousel, 80);

          // inicia contador 0->28 animado agora que abriu
          startCounterAnimated();

          setMusicIcon();
        }, 360);

        return;
      }

      $num.text(seconds);
      $num.removeClass('pop');
      void $num[0].offsetHeight;
      $num.addClass('pop');
    }, 1000);
  });

});
