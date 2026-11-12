import { useState, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';
const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Espaço', href: '#espaco' },
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Barbeiros', href: '#barbeiros' },
  { label: 'Contato', href: '#contato' },
];
const services = [
  { name: '[SERVIÇO]', description: '[DESCRIÇÃO]', price: '[PREÇO]' },
  { name: '[SERVIÇO]', description: '[DESCRIÇÃO]', price: '[PREÇO]' },
  { name: '[SERVIÇO]', description: '[DESCRIÇÃO]', price: '[PREÇO]' },
  { name: '[SERVIÇO]', description: '[DESCRIÇÃO]', price: '[PREÇO]' },
];
const gallery = [
  { image: '/images/barber-detail.jpg', alt: 'Barbeiro trabalhando no acabamento da barba com tesoura', label: '[FOTO]' },
  { image: '/images/hero-barber.jpg', alt: 'Ferramentas de barbearia organizadas sobre uma bancada', label: '[FOTO]' },
  { image: '/images/haircut-closeup.jpg', alt: 'Detalhe de um corte feito com máquina e pente', label: '[FOTO]' },
  { image: '/images/barbershop-interior.jpg', alt: 'Interior da barbearia com cadeiras e estações de trabalho', label: '[FOTO]' },
];

function Brand() {
  return <a className="logo" href="#inicio" aria-label="Ir para o início">
    <span className="logo-mark">[</span><span>[LOGO]</span>
  </a>;
}

function BookingLink({ className, children }: { className: string; children: ReactNode }) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, '');
  const hasValidPhone = phone.length >= 8 && phone.length <= 15;
  const href = hasValidPhone ? `https://wa.me/${phone}` : '#contato';
  return <a className={className} href={href} target={hasValidPhone ? '_blank' : undefined} rel={hasValidPhone ? 'noopener noreferrer' : undefined} data-testid="link-agendar">{children}</a>;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell" id="inicio">
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav id="primary-navigation" className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Navegação principal">
            {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          </nav>
          <BookingLink className="header-book">Agendar <ArrowUpRight size={14} /></BookingLink>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} data-testid="button-menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-photo" src="/images/hero-barber.jpg" srcSet="/images/hero-barber-mobile.jpg 900w, /images/hero-barber.jpg 1900w" sizes="100vw" alt="Ferramentas de barbearia dispostas sobre bancada de madeira" width="1024" height="683" fetchPriority="high" />
          <div className="hero-index">[FOTO] — 01 / 04</div>
          <div className="container hero-content">
            <div className="eyebrow hero-kicker reveal">[LOGO] <span aria-hidden="true">/</span> BARBEARIA</div>
            <h1 className="display hero-title reveal" id="hero-title">[TÍTULO]<br /><em>[SUBTÍTULO]</em></h1>
            <div className="hero-bottom reveal">
              <p className="hero-subtitle">[DESCRIÇÃO]</p>
              <a className="text-link" href="#servicos">Explorar <ArrowDownRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="servicos" aria-labelledby="services-title">
          <div className="container">
            <div className="section-head">
              <div><SectionLabel>01 / Serviços</SectionLabel><h2 className="section-title" id="services-title">[TÍTULO]</h2></div>
              <p className="section-note">[DESCRIÇÃO]</p>
            </div>
            <div className="service-list">
              {services.map((service, index) => <article className="service-item" key={index}>
                <span className="service-num">0{index + 1}</span>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.description}</p>
                <span className="service-price">{service.price}</span>
              </article>)}
            </div>
          </div>
        </section>

        <section className="about section-pad" id="espaco" aria-labelledby="about-title">
          <div className="container about-grid">
            <figure className="about-image-wrap">
              <img className="about-image" src="/images/barbershop-interior.jpg" alt="Ambiente interno da barbearia com estações e cadeiras" width="1024" height="683" loading="lazy" />
              <figcaption className="image-caption">[FOTO] — [ENDEREÇO]</figcaption>
            </figure>
            <div className="about-copy">
              <SectionLabel>02 / O espaço</SectionLabel>
              <h2 className="section-title" id="about-title">[TÍTULO]</h2>
              <p>[DESCRIÇÃO]</p>
              <a className="text-link" href="#contato">Visitar <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="gallery section-pad" id="trabalhos" aria-labelledby="gallery-title">
          <div className="container">
            <div className="gallery-head">
              <div><SectionLabel>03 / Portfólio</SectionLabel><h2 className="section-title" id="gallery-title">[TÍTULO]</h2></div>
              <a className="text-link" href="#barbeiros">Conheça a equipe <ArrowDownRight size={15} /></a>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, index) => <figure className="gallery-item" key={item.image} tabIndex={0}>
                <img src={item.image} alt={item.alt} width={index === 2 ? 683 : 1024} height={index === 2 ? 1024 : 683} loading="lazy" />
                <figcaption className="gallery-label"><span>{item.label}</span><span>0{index + 1} / 04</span></figcaption>
              </figure>)}
            </div>
          </div>
        </section>

        <section className="team section-pad" id="barbeiros" aria-labelledby="team-title">
          <div className="container">
            <div className="section-head team-head">
              <div><SectionLabel>04 / Barbeiros</SectionLabel><h2 className="section-title" id="team-title">[TÍTULO]</h2></div>
              <p className="section-note">[DESCRIÇÃO]</p>
            </div>
            <div className="team-grid">
              {[0, 1, 2].map((item) => <article className="team-card" key={item}>
                <div className="team-photo"><div className="team-placeholder">[FOTO]</div></div>
                <div className="team-meta"><div><h3 className="team-name">[NOME]</h3><div className="team-role">[ESPECIALIDADE]</div></div><span className="eyebrow">0{item + 1}</span></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="reviews" aria-labelledby="reviews-title">
          <div className="container reviews-grid">
            <div><SectionLabel>05 / Depoimentos</SectionLabel><h2 className="section-title" id="reviews-title">[TÍTULO]</h2></div>
            <article className="review-card">
              <div className="review-mark" aria-hidden="true">“</div>
              <blockquote className="review-slot">[AVALIAÇÃO]</blockquote>
              <div className="review-by">[NOME] <span aria-hidden="true">/</span> [ORIGEM]</div>
            </article>
          </div>
        </section>

        <section className="booking section-pad" id="contato" aria-labelledby="booking-title">
          <div className="container booking-grid">
            <div>
              <SectionLabel>06 / Agendamento</SectionLabel>
              <h2 className="section-title" id="booking-title">[TÍTULO]</h2>
              <p className="booking-copy">[DESCRIÇÃO]</p>
              <BookingLink className="booking-action">Agendar <ArrowUpRight size={16} /></BookingLink>
            </div>
            <div>
              <div className="contact-list">
                <div className="contact-row"><span>Endereço</span><span>[ENDEREÇO]</span></div>
                <div className="contact-row"><span>Contato</span><span>[CONTATO]</span></div>
                <div className="contact-row"><span>Horários</span><span>[HORÁRIOS]</span></div>
                <div className="contact-row"><span>WhatsApp</span><span>[CONTATO]</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <Brand />
            <nav className="footer-nav" aria-label="Navegação do rodapé">
              {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
              <a href="#contato">[REDE SOCIAL]</a>
            </nav>
            <div className="footer-detail">[ENDEREÇO]<br />[CONTATO]<br />[HORÁRIOS]</div>
          </div>
          <div className="footer-bottom"><span>[LOGO] · Barbearia</span><span>© [ANO]</span><a href="#inicio">Voltar ao início ↑</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
