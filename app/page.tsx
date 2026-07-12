const projects = [
  {
    number: "01",
    title: "Gerçek Zamanlı Yüz Duygu Analizi",
    description:
      "İşletmeler için geliştirilen platform; kamera akışından duygu sınıflandırması yaparak müşteri deneyimini anlık olarak görünür kılar.",
    stack: ["PyTorch", "FastAPI", "React", "MediaPipe"],
    link: "https://github.com/NihatAvsar/emotion_detection_project",
  },
  {
    number: "02",
    title: "QR Kod Destekli Ödeme Sistemi",
    description:
      "Sipariş oluşturma, ödeme takibi ve QR kodla hızlı ödeme akışlarını bir araya getiren uçtan uca sistem.",
    stack: ["TypeScript", "React", "Backend", "Database"],
    link: "https://github.com/NihatAvsar/odeme_sistemi",
  },
  {
    number: "03",
    title: "BIST Tahminleme",
    description:
      "Python ile geliştirilen, piyasa verilerini analiz etmeye odaklanan tahminleme çalışması.",
    stack: ["Python", "Data Analysis", "Machine Learning"],
    link: "https://github.com/NihatAvsar/bist_tahminleme",
  },
];

const skillGroups = [
  ["Frontend", "React", "Next.js", "TypeScript", "JavaScript", "HTML / CSS"],
  ["Backend & Data", "Python", "PHP", "C#", "SQL", "MySQL", "MSSQL"],
  ["AI & Tools", "PyTorch", "OpenCV", "MediaPipe", "Git", "Kotlin"],
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
            ile kullanıcı odaklı çözümler geliştiriyorum.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projeler">Projelerimi keşfet <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="https://github.com/NihatAvsar" target="_blank" rel="noreferrer">GitHub&apos;a git <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-art" aria-label="Nihat Avşar için geliştirici profili" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="profile-card">
            <div className="profile-topline"><span>PROFILE / 2026</span><span>01</span></div>
            <div className="monogram">NA</div>
            <div className="profile-bottomline"><span>WEB + AI</span><span>BUILDING</span></div>
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
              Özellikle web geliştirme, bilgisayarlı görü ve veri odaklı uygulamalar üzerinde üretmeye
              devam ediyorum. Takım çalışmasında sorumluluk alan, disiplinli ve öğrenmeye açık biriyim.
            </p>
            <a className="text-link" href="#iletisim">Tanışalım <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="stats-row" aria-label="Kısa bilgiler">
          <div><strong>2026</strong><span>Mezuniyet</span></div>
          <div><strong>3+</strong><span>Öne çıkan proje</span></div>
          <div><strong>B1</strong><span>İngilizce</span></div>
          <div><strong>Web · AI</strong><span>Odak alanı</span></div>
        </div>
      </section>

      <section className="section-shell project-section" id="projeler" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><p className="section-kicker">02 / PROJELER</p><h2 id="projects-title">Ürettiklerim</h2></div>
          <a className="text-link" href="https://github.com/NihatAvsar?tab=repositories" target="_blank" rel="noreferrer">Tüm repoları gör <span aria-hidden="true">↗</span></a>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-item" key={project.title}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><h3>{project.title}</h3><p>{project.description}</p></div>
              <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub deposunu aç`}>↗</a>
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

      <section className="section-shell skills-section" aria-labelledby="skills-title">
        <p className="section-kicker">04 / YETKİNLİKLER</p>
        <h2 id="skills-title">Araç kutum</h2>
        <div className="skill-grid">
          {skillGroups.map(([title, ...skills]) => <article className="skill-card" key={title}><h3>{title}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
        </div>
      </section>

      <section className="contact-section" id="iletisim" aria-labelledby="contact-title">
        <div className="section-shell contact-inner">
          <p className="section-kicker">05 / İLETİŞİM</p>
          <h2 id="contact-title">Bir sonraki fikri<br /><em>birlikte</em> geliştirelim.</h2>
          <a className="contact-mail" href="mailto:nihatavsarr@gmail.com">nihatavsarr@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="contact-bottom"><p>Yeni projeler, iş birlikleri ve fırsatlar için ulaşabilirsiniz.</p><div className="social-links"><a href="https://github.com/NihatAvsar" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/nihat-avsar" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
        </div>
      </section>

      <footer className="site-footer section-shell"><span>© 2026 Muhammed Nihat Avşar</span><a href="#top">Yukarı çık ↑</a></footer>
    </main>
  );
}
