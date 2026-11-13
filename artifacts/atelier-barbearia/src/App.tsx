import { useState, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '5511987654321';
const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Espaço', href: '#espaco' },
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Barbeiros', href: '#barbeiros' },
  { label: 'Contato', href: '#contato' },
];
const services = [
  { name: 'Corte Clássico', description: 'Tesoura e máquina com acabamento impecável, desenhado para o formato do seu rosto.', price: 'R$ 60' },
  { name: 'Barba Completa', description: 'Toalha quente, navalha e balm hidratante para uma barba alinhada.', price: 'R$ 45' },
  { name: 'Corte + Barba', description: 'O combo completo para quem quer sair renovado, do topo à barba.', price: 'R$ 95' },
  { name: 'Pigmentação', description: 'Disfarce de falhas e fios brancos com resultado natural e duradouro.', price: 'R$ 40' },
];
const gallery = [
  { image: '/images/barber-detail.jpg', alt: 'Barbeiro trabalhando no acabamento da barba com tesoura', label: 'Acabamento' },
  { image: '/images/hero-barber.jpg', alt: 'Ferramentas de barbearia organizadas sobre uma bancada', label: 'Bancada' },
  { image: '/images/haircut-closeup.jpg', alt: 'Detalhe de um corte feito com máquina e pente', label: 'Detalhe' },
  { image: '/images/barbershop-interior.jpg', alt: 'Interior da barbearia com cadeiras e estações de trabalho', label: 'Interior' },
];
const team = [
  { name: 'Rafael Mendes', role: 'Especialista em Navalha', image: '/images/team-1.jpg' },
  { name: 'Diego Santana', role: 'Cortes Modernos', image: '/images/team-2.jpg' },
  { name: 'Lucas Ferreira', role: 'Barboterapia', image: '/images/team-3.jpg' },
];

function Brand() {
  return <a className="logo" href="#inicio" aria-label="Ir para o início">
    <span className="logo-mark">A</span><span>ATELIER</span>
  </a>;
}

function BookingLink({ className, children, testId = 'link-agendar', ...rest }: { className: string; children: ReactNode; testId?: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, '');
  const hasValidPhone = phone.length >= 8 && phone.length <= 15;
  const href = hasValidPhone ? `https://wa.me/${phone}` : '#contato';
  return <a className={className} href={href} target={hasValidPhone ? '_blank' : undefined} rel={hasValidPhone ? 'noopener noreferrer' : undefined} data-testid={testId} {...rest}>{children}</a>;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function getOpenStatus() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const pick = (type: string) => parts.find((part) => part.type === type)?.value ?? '';
  const day = WEEKDAYS[pick('weekday')] ?? 0;
  const minutes = (Number(pick('hour')) || 0) * 60 + (Number(pick('minute')) || 0);
  const open = day >= 2 && day <= 6 && minutes >= 9 * 60 && minutes < 20 * 60;
  return { open, label: open ? 'Aberto agora' : 'Fechado agora' };
}

function HoursCard() {
  const status = getOpenStatus();
  return (
    <div className="hours-card" data-testid="card-horarios">
      <div className="hours-status">
        <span className={`hours-dot ${status.open ? 'is-open' : 'is-closed'}`} aria-hidden="true" />
        {status.label}
      </div>
      <h3 className="hours-title">Horários de funcionamento</h3>
      <div className="hours-rows">
        <div className="hours-row"><span>Ter — Sex</span><span>9h às 20h</span></div>
        <div className="hours-row"><span>Sábado</span><span>9h às 20h</span></div>
        <div className="hours-row hours-row-closed"><span>Domingo e Segunda</span><span>Fechado</span></div>
      </div>
    </div>
  );
}

function HoursBadge() {
  const status = getOpenStatus();
  return (
    <a className="hours-badge reveal" href="#contato" data-testid="badge-horarios" aria-label={`Horários de funcionamento: ${status.label}. Terça a sábado, 9h às 20h. Ver detalhes`}>
      <span className={`hours-dot ${status.open ? 'is-open' : 'is-closed'}`} aria-hidden="true" />
      <span>{status.label}</span>
      <span className="hours-badge-sep" aria-hidden="true">·</span>
      <span>Ter–Sáb 9h–20h</span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WhatsAppFab() {
  return (
    <BookingLink className="whatsapp-fab" testId="link-whatsapp-fab" aria-label="Conversar e agendar pelo WhatsApp">
      <WhatsAppIcon />
      <span className="whatsapp-fab-label">Agendar pelo WhatsApp</span>
    </BookingLink>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const page = (
    <div className="site-shell" id="inicio">
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav id="primary-navigation" className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Navegação principal">
            {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
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
          <div className="hero-index">São Paulo — 01 / 04</div>
          <div className="container hero-content">
            <div className="eyebrow hero-kicker reveal">Atelier <span aria-hidden="true">/</span> Barbearia</div>
            <h1 className="display hero-title reveal" id="hero-title">A arte do corte<br /><em>feito à mão</em></h1>
            <HoursBadge />
            <div className="hero-bottom reveal">
              <p className="hero-subtitle">Cortes, barbas e navalha no coração de São Paulo — tradição e precisão num ambiente feito para você.</p>
              <a className="text-link" href="#servicos">Explorar <ArrowDownRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="servicos" aria-labelledby="services-title">
          <div className="container">
            <div className="section-head">
              <div><SectionLabel>01 / Serviços</SectionLabel><h2 className="section-title" id="services-title">O que fazemos</h2></div>
              <p className="section-note">Tudo feito à mão, com produtos selecionados e atenção ao detalhe.</p>
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
              <figcaption className="image-caption">Atelier — Rua Augusta, 1204</figcaption>
            </figure>
            <div className="about-copy">
              <SectionLabel>02 / O espaço</SectionLabel>
              <h2 className="section-title" id="about-title">Um espaço pensado para você</h2>
              <p>Ambiente acolhedor, música boa e cerveja gelada. Cada estação foi desenhada para que o seu momento de cuidado seja uma pausa na rotina.</p>
              <a className="text-link" href="#contato">Visitar <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="gallery section-pad" id="trabalhos" aria-labelledby="gallery-title">
          <div className="container">
            <div className="gallery-head">
              <div><SectionLabel>03 / Portfólio</SectionLabel><h2 className="section-title" id="gallery-title">Trabalhos recentes</h2></div>
              <a className="text-link" href="#barbeiros">Conheça a equipe <ArrowDownRight size={15} /></a>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, index) => <figure className="gallery-item" key={item.image}>
                <img src={item.image} alt={item.alt} width={index === 2 ? 683 : 1024} height={index === 2 ? 1024 : 683} loading="lazy" />
                <figcaption className="gallery-label"><span>{item.label}</span><span>0{index + 1} / 04</span></figcaption>
              </figure>)}
            </div>
          </div>
        </section>

        <section className="team section-pad" id="barbeiros" aria-labelledby="team-title">
          <div className="container">
            <div className="section-head team-head">
              <div><SectionLabel>04 / Barbeiros</SectionLabel><h2 className="section-title" id="team-title">Nossos barbeiros</h2></div>
              <p className="section-note">Mãos experientes, ferramentas afiadas e atenção ao detalhe.</p>
            </div>
            <div className="team-grid">
              {team.map((member, index) => <article className="team-card" key={index}>
                <div className="team-photo"><img src={member.image} alt={`${member.name}, ${member.role}`} width="800" height="1000" loading="lazy" /></div>
                <div className="team-meta"><div><h3 className="team-name">{member.name}</h3><div className="team-role">{member.role}</div></div><span className="eyebrow">0{index + 1}</span></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="reviews" aria-labelledby="reviews-title">
          <div className="container reviews-grid">
            <div><SectionLabel>05 / Depoimentos</SectionLabel><h2 className="section-title" id="reviews-title">Quem já passou por aqui</h2></div>
            <article className="review-card">
              <div className="review-mark" aria-hidden="true">“</div>
              <blockquote className="review-slot">Melhor corte da cidade. Ambiente incrível e atendimento impecável, do início ao fim.</blockquote>
              <div className="review-by">André Lima <span aria-hidden="true">/</span> Cliente desde 2019</div>
            </article>
          </div>
        </section>

        <section className="booking section-pad" id="contato" aria-labelledby="booking-title">
          <div className="container booking-grid">
            <div>
              <SectionLabel>06 / Agendamento</SectionLabel>
              <h2 className="section-title" id="booking-title">Agende seu horário</h2>
              <p className="booking-copy">Escolha o serviço, o dia e o horário. Confirmação rápida pelo WhatsApp.</p>
              <BookingLink className="booking-action">Agendar <ArrowUpRight size={16} /></BookingLink>
            </div>
            <div>
              <HoursCard />
              <div className="contact-list">
                <div className="contact-row"><span>Endereço</span><span>Rua Augusta, 1204 — Consolação, São Paulo/SP</span></div>
                <div className="contact-row"><span>Contato</span><span>(11) 98765-4321</span></div>
                <div className="contact-row"><span>WhatsApp</span><span>(11) 98765-4321</span></div>
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
              <a href="#contato">Instagram @atelier.barbearia</a>
            </nav>
            <div className="footer-detail">Rua Augusta, 1204<br />(11) 98765-4321<br />Ter a Sáb — 9h às 20h</div>
          </div>
          <div className="footer-bottom"><span>Atelier · Barbearia</span><span>© 2025</span><a href="#inicio">Voltar ao início ↑</a></div>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  );

  return page;
}

export default App;
