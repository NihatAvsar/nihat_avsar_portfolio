import Image from "next/image";
import ContactForm from "./ContactForm";

const projects = [
  {
    number: "01",
    category: "YAPAY ZEKA · BİLGİSAYARLI GÖRÜ · BİTİRME PROJESİ",
    title: "Gerçek Zamanlı Yüz Duygu Analizi Platformu",
    description:
      "Fiziksel mağaza ve hizmet alanlarında müşteri deneyimini anlık ölçmek için kamera, derin öğrenme ve web teknolojilerini tek bir sistemde buluşturan uçtan uca analiz platformu.",
    highlights: [
      "ConvNeXt Tiny modeliyle beş duygu sınıfının güven skorlarıyla tahmini",
      "MediaPipe, OpenCV ve WebSocket ile düşük gecikmeli çoklu yüz analizi",
      "Kişi takibi, müşteri oturumları ve MySQL tabanlı işletme analitiği",
    ],
    stack: ["PyTorch", "FastAPI", "React", "MediaPipe", "OpenCV", "MySQL"],
    link: "https://github.com/NihatAvsar/emotion_detection_project",
  },
  {
    number: "02",
    category: "FULL-STACK · RESTORAN OPERASYONU · ÖDEME",
    title: "QR Kod Destekli Ödeme Sistemi",
    description:
      "Restoranlarda QR kodla menüye erişimden sipariş ve canlı adisyon takibine, kalem bazlı hesap bölüşmeden ödeme yönetimine kadar tüm müşteri ve işletme akışını yöneten uygulama.",
    highlights: [
      "Müşteri, yönetici, mutfak ve masa yönetimi için ayrıştırılmış ekranlar",
      "Socket.IO ile sipariş, ödeme ve masa durumlarının canlı güncellenmesi",
      "Prisma ve MySQL üzerinde güvenli ödeme sağlayıcı mimarisi",
    ],
    stack: ["TypeScript", "React", "Express", "Prisma", "Socket.IO", "MySQL"],
    link: "https://github.com/NihatAvsar/odeme_sistemi",
  },
  {
    number: "03",
    category: "FİNANSAL TEKNOLOJİ · ANALİZ · SİMÜLASYON",
    title: "BIST Pusula",
    description:
      "Borsa İstanbul için analiz, sinyal, geriye dönük test ve gerçek para kullanmadan işlem deneyimi sunan eğitim amaçlı modern bir paper trading platformu.",
    highlights: [
      "Pozisyon oranı, günlük zarar ve sinyal güveni denetleyen RiskGuard",
      "MARKET, LIMIT, STOP ve TAKE PROFIT emirlerinin sanal simülasyonu",
      "Fiyat, RSI, hacim ve risk bazlı alarm ve bildirim altyapısı",
    ],
    stack: ["Python", "FastAPI", "React", "MySQL", "Redis", "Docker"],
    link: "https://github.com/NihatAvsar/bist_tahminleme",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Modern Web Arayüzleri",
    description:
      "Responsive, erişilebilir ve performans odaklı kullanıcı arayüzleri geliştiriyorum; tasarımı sürdürülebilir bileşenlere dönüştürüyorum.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    number: "02",
    title: "Backend & Gerçek Zamanlı Sistemler",
    description:
      "API, iş kuralları ve gerçek zamanlı veri akışlarını güvenli ve katmanlı bir mimariyle kuruyorum.",
    skills: ["Python", "FastAPI", "Express", "WebSocket", "Socket.IO", "C#", "PHP"],
  },
  {
    number: "03",
    title: "Yapay Zeka & Görüntü İşleme",
    description:
      "Modeli yalnızca eğitmekle kalmayıp kamera akışı, ön işleme, inference ve sonuçların ürüne entegrasyonunu birlikte ele alıyorum.",
    skills: ["PyTorch", "ConvNeXt", "OpenCV", "MediaPipe", "CNN", "NumPy"],
  },
  {
    number: "04",
    title: "Veri & Geliştirme Araçları",
    description:
      "İlişkisel veri modelleri, ORM katmanları ve sürüm kontrolüyle projeleri tekrar üretilebilir ve yönetilebilir tutuyorum.",
    skills: ["MySQL", "MSSQL", "SQLAlchemy", "Prisma", "Git", "Docker", "MATLAB"],
  },
];

const principles = [
  {
    title: "Uçtan uca düşünme",
    text: "Arayüzden API ve veri tabanına kadar ürünün bütün akışını birlikte tasarlarım.",
  },
  {
    title: "Ölçülebilir performans",
    text: "Gecikme, veri kalitesi ve kullanıcı deneyimini somut metriklerle iyileştiririm.",
  },
  {
    title: "Sorumlu geliştirme",
    text: "Güvenlik, gizlilik ve sürdürülebilir kod yapısını ilk günden sürece dahil ederim.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ana sayfaya dön">
          <span className="brand-mark">NA</span>
          <span>Muhammed Nihat Avşar</span>
        </a>

        <nav className="main-nav" aria-label="Ana menü">
          <a href="#hakkimda">Hakkımda</a>
          <a href="#projeler">Projeler</a>
          <a href="#deneyim">Deneyim</a>
          <a href="#yetenekler">Yetenekler</a>
          <a href="#iletisim">İletişim</a>
        </nav>

        <a className="header-cta" href="#iletisim">
          Birlikte çalışalım <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" />Yazılım mühendisi · Türkiye</p>
          <h1 id="hero-title">
            Dijital fikirleri
            <span>etkili ürünlere</span>
            dönüştürüyorum.
          </h1>
          <p className="hero-intro">
            Ben Muhammed Nihat Avşar. Modern web teknolojileri, veri ve yapay zeka
            ile gerçek problemlere odaklanan, uçtan uca dijital ürünler geliştiriyorum.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projeler">Projelerimi keşfet <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="https://github.com/NihatAvsar" target="_blank" rel="noreferrer">GitHub&apos;a git <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="profile-card">
            <Image
              className="profile-photo"
              src="/nihat-avsar.jpeg"
              alt="Muhammed Nihat Avşar, gece şehir manzarası önünde"
              fill
              priority
              sizes="(max-width: 860px) 76vw, 396px"
            />
            <div className="profile-topline"><span>PROFILE / 2026</span><span>01</span></div>
            <div className="profile-bottomline"><span>MUHAMMED N. AVŞAR</span><span>WEB + AI</span></div>
          </div>
          <div className="float-tag tag-code">&lt;/&gt; developer</div>
          <div className="float-tag tag-location">✦ Kayseri, TR</div>
        </div>

        <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <section className="section-shell about-section" id="hakkimda" aria-labelledby="about-title">
        <p className="section-kicker">01 / HAKKIMDA</p>
        <div className="about-grid">
          <h2 id="about-title">Teknolojiyle ölçülebilir fark yaratmaya odaklanıyorum.</h2>
          <div className="about-copy">
            <p>
              Kayseri Üniversitesi Yazılım Mühendisliği bölümünden 2.92 ortalama ile mezun oldum.
              Gerçek dünya problemlerini analiz etmeyi, doğru teknolojiyi seçmeyi ve sade deneyimler
              tasarlamayı seviyorum.
            </p>
            <p>
              Web geliştirme, bilgisayarlı görü ve veri odaklı uygulamalar üzerinde üretmeye devam
              ediyorum. Takım çalışmasında sorumluluk alan, disiplinli ve öğrenmeye açık biriyim.
            </p>
            <a className="text-link" href="#iletisim">Tanışalım <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="stats-row" aria-label="Kısa bilgiler">
          <div><strong>2026</strong><span>Mezuniyet</span></div>
          <div><strong>3+</strong><span>Uçtan uca ürün</span></div>
          <div><strong>B1</strong><span>İngilizce</span></div>
          <div><strong>Web · AI</strong><span>Odak alanı</span></div>
        </div>
      </section>

      <section className="section-shell project-section" id="projeler" aria-labelledby="projects-title">
        <div className="section-heading project-heading">
          <div>
            <p className="section-kicker">02 / PROJELER</p>
            <h2 id="projects-title">Ürettiklerim</h2>
            <p className="section-lead">
              Yapay zeka, gerçek zamanlı sistemler ve modern web teknolojilerini bir araya getirdiğim,
              yalnızca arayüz değil bütün ürün akışını ele alan seçili çalışmalar.
            </p>
          </div>
          <a className="text-link" href="https://github.com/NihatAvsar?tab=repositories" target="_blank" rel="noreferrer">Tüm repoları gör <span aria-hidden="true">↗</span></a>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-item" key={project.title}>
              <div className="project-topline">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
              <div className="project-footer">
                <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a className="project-action" href={project.link} target="_blank" rel="noreferrer">
                  Projeyi incele <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell experience-section" id="deneyim" aria-labelledby="experience-title">
        <div className="section-heading"><div><p className="section-kicker">03 / DENEYİM</p><h2 id="experience-title">Yolculuğum</h2></div></div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">TEM — EYL 2025</div>
            <div className="timeline-content"><p className="timeline-type">STAJ / 40 İŞ GÜNÜ</p><h3>Yazılım Geliştirme Stajyeri</h3><p className="company">Detavax Aşı Geliştirme ve Uygulama Merkezi A.Ş.</p><p>Patoloji alanında bir web sitesi geliştirdim; arayüz geliştirme sürecinde React, TypeScript, Next.js, HTML ve CSS ile çalıştım.</p></div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">2022 — 2026</div>
            <div className="timeline-content"><p className="timeline-type">EĞİTİM</p><h3>Yazılım Mühendisliği</h3><p className="company">Kayseri Üniversitesi</p><p>Web teknolojileri, yazılım geliştirme, veri tabanı yönetimi ve yapay zeka alanlarında proje temelli çalışmalar yürüttüm.</p></div>
          </article>
        </div>
      </section>

      <section className="section-shell skills-section" id="yetenekler" aria-labelledby="skills-title">
        <div className="skills-heading">
          <div>
            <p className="section-kicker">04 / YETKİNLİKLER</p>
            <h2 id="skills-title">Araç kutum</h2>
          </div>
          <p>
            Bir teknolojiyi yalnızca bildiğim için değil, problemi doğru çözdüğü zaman kullanıyorum.
            Ürün geliştirme sürecinde arayüz, backend, yapay zeka ve veri katmanlarını birlikte ele alıyorum.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>

        <div className="principles-grid" aria-label="Çalışma yaklaşımım">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="iletisim" aria-labelledby="contact-title">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <p className="section-kicker">05 / BANA YAZIN</p>
            <h2 id="contact-title">Bir proje, iş fırsatı veya fikir hakkında konuşalım.</h2>
            <p className="contact-intro">
              Yeni mezun yazılım mühendisi olarak web, yapay zeka ve veri odaklı projelerde görev almaya;
              ürün fikirlerini birlikte değerlendirmeye açığım.
            </p>

            <div className="contact-details">
              <a href="mailto:nihatavsarr@gmail.com">
                <span>E-posta</span>
                <strong>nihatavsarr@gmail.com</strong>
              </a>
              <div>
                <span>Konum</span>
                <strong>Kayseri, Türkiye</strong>
              </div>
              <div>
                <span>Durum</span>
                <strong><i /> Yeni fırsatlara açık</strong>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/NihatAvsar" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/nihat-avsar" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="site-footer section-shell"><span>© 2026 Muhammed Nihat Avşar</span><a href="#top">Yukarı çık ↑</a></footer>
    </main>
  );
}
