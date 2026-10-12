/**
 * i18n Module
 * English lives in the HTML (so crawlers index it); German lives here.
 * Elements opt in with data-i18n="key" (inner HTML) and
 * data-i18n-attr="attr:key;attr:key" (attributes).
 */

const STORAGE_KEY = "preferredLanguage";
const LANGUAGES = ["en", "de"];

/** Strings only used from JS need an English entry too */
const en = {
  "contact.copy": "Copy",
  "contact.copied": "Copied",
};

const de = {
  // Meta
  "meta.home": "Hosam Othman | Full-Stack-Entwickler",
  "meta.about": "Über Hosam Othman | Full-Stack-Entwickler",
  "meta.experience": "Erfahrung | Hosam Othman, Full-Stack-Entwickler",
  "meta.skills": "Kenntnisse | Hosam Othman, Full-Stack-Entwickler",
  "meta.contact": "Kontakt | Hosam Othman, Full-Stack-Entwickler",

  // Shell
  "a11y.skip": "Zum Inhalt springen",
  "nav.brand": "Hosam Othman, Startseite",
  "nav.label": "Hauptnavigation",
  "nav.home": "Start",
  "nav.about": "Über mich",
  "nav.experience": "Erfahrung",
  "nav.skills": "Kenntnisse",
  "nav.contact": "Kontakt",
  "nav.language": "Sprache",
  "nav.theme": "Farbschema wechseln",
  "nav.menu": "Menü",
  "footer.email": "E-Mail",

  // Shared
  "common.role": "Full-Stack-Entwickler",
  "common.location": "Goslar, Deutschland",
  "common.muenster": "Münster, Deutschland",
  "cta.title": "Sie haben ein Projekt im Kopf?",
  "cta.text": "Ich spreche gerne über neue Stellen, spannende Projekte und Full-Stack-Entwicklung.",
  "cta.button": "Kontakt aufnehmen",
  "lang.german": "Deutsch",
  "lang.english": "Englisch",
  "lang.arabic": "Arabisch",
  "lang.native": "Muttersprache",
  "lang.germanLevel": "Deutsch · C1",
  "lang.englishLevel": "Englisch · C1",
  "lang.arabicLevel": "Arabisch · Muttersprache",

  // Home
  "home.eyebrow": "Full-Stack-Entwickler · Goslar, Deutschland",
  "home.title": 'Web-Apps, <span class="muted">komplett aus einer Hand.</span>',
  "home.cat.fullstack": "Full Stack",
  "home.lead":
    "Ich bin <strong>Hosam Othman</strong>, Full-Stack-Entwickler für React-Frontends, Node.js/NestJS-Backends und AWS-Infrastruktur. Mir sind saubere Architektur und Software wichtig, die auch unter Last schnell bleibt.",
  "home.ctaPrimary": "Erfahrung ansehen",
  "home.ctaSecondary": "Kontakt aufnehmen",
  "home.stackLabel": "Kern-Stack",
  "home.sceneLabel":
    "Animiertes 3D-Diagramm einer Full-Stack-Anwendung mit Frontend-, API- und Datenbank-Ebene",
  "home.layer.database": "Datenbank",
  "home.sceneTitle": "Live-Rendering",
  "home.sceneHint": "Zum Drehen ziehen",
  "home.metricsLabel": "Kennzahlen",
  "home.m1.value": "3.500/s",
  "home.m1.label":
    "Positions-Updates pro Sekunde in Spitzenzeiten, verarbeitet von einem selbst entwickelten NestJS-Backend",
  "home.m2.value": '100 % <span class="arrow">→</span> &lt;5 %',
  "home.m2.label": "CPU-Last eines Backend-Dienstes nach Behebung eines Engpasses aus dem Lasttest",
  "home.m3.label": "Speicherbedarf des React-Frontends, zuvor ~1 GB",
  "home.m4.label": "Studierende durch einen intensiven Full-Stack-Kurs begleitet",
  "home.workTitle": "Ausgewählte Projekte",
  "home.workLead": "Aktuelle Projekte aus Backend, Frontend und Infrastruktur.",
  "home.workLink": "Gesamter Werdegang",
  "home.w1.title": "Backend für Positionsdaten",
  "home.w1.text":
    "Ein NestJS-Monorepo auf AWS, das 2.000–3.500 Positions-Updates pro Sekunde über Kafka verarbeitet. Außerdem habe ich die Datenebene von MongoDB auf PostgreSQL migriert.",
  "home.w2.title": "Plattform zur Gerätekonfiguration",
  "home.w2.text":
    "Eine React-Anwendung, mit der vernetzte Geräte live über WebSocket konfiguriert werden, mit Zustand für das State-Management.",
  "home.w3.title": "Logbuch-Verwaltung",
  "home.w3.text":
    "Eine React- und GraphQL-Anwendung für Touren, Belege und administrative Abläufe.",
  "home.w4.title": "Infrastruktur &amp; Deployment",
  "home.w4.text":
    "AWS-Infrastruktur als Code mit Terraform, Deployments automatisiert über GitHub Actions.",

  // About
  "about.eyebrow": "Über mich",
  "about.title": "Von der Werkshalle in die Cloud.",
  "about.lead":
    "Full-Stack-Entwickler, der Webanwendungen komplett umsetzt – von der Datenbank bis zur Oberfläche.",
  "about.photoAlt": "Porträt von Hosam Othman",
  "about.profileTitle": "Profil",
  "about.p1":
    "Ich bin Full-Stack-Entwickler bei der <strong>Bornemann AG</strong> in Goslar und arbeite über den gesamten Stack: NestJS-Services und Datenebenen auf AWS, React-Frontends und die Infrastruktur, auf der sie laufen. Zu meinen aktuellen Projekten gehören ein Backend mit hohem Durchsatz auf Kafka-Basis, eine React/WebSocket-Plattform zur Gerätekonfiguration und ein GraphQL-basiertes Logbuch-System.",
  "about.p2":
    "Davor habe ich am <strong>Digital Career Institute</strong> Full-Stack-Entwicklung unterrichtet und eine Gruppe von Studierenden durch React, Node.js und REST-API-Entwicklung begleitet.",
  "about.p3":
    "Mein Weg in die Software begann im Ingenieurwesen. Ich habe Mechatronik und Maschinenbau studiert und als Anlagen- und Maschinenführer bei Hengst Filtration die Produktion am Laufen gehalten. Dieser ingenieurwissenschaftliche Hintergrund prägt bis heute, wie ich Software entwickle: systematisch und mit Blick auf das Gesamtsystem.",
  "about.focusTitle": "Mein Fokus",
  "about.focus":
    "Saubere Architektur, wartbarer Code und Anwendungen, die auch unter Last schnell bleiben. Mein Kern-Stack: TypeScript, React, Node.js, NestJS, AWS und REST/GraphQL.",
  "about.fact.role": "Rolle",
  "about.fact.company": "Unternehmen",
  "about.fact.location": "Standort",
  "about.fact.focus": "Schwerpunkt",
  "about.fact.focusValue": "Full-Stack-Webanwendungen",
  "about.languagesTitle": "Sprachen",

  // Experience
  "exp.eyebrow": "Erfahrung",
  "exp.title": "Erfahrung &amp; Ausbildung",
  "exp.lead": "Vom Ingenieurwesen und der industriellen Produktion zur Full-Stack-Entwicklung.",
  "exp.workTitle": "Berufserfahrung",
  "exp.current": "Aktuell",
  "exp.bornemann.date": "Juni 2023 — heute",
  "exp.bornemann.1":
    "Backend eines Echtzeit-Ortungssystems (RTLS) als <strong>NestJS-Monorepo auf AWS</strong> entwickelt, das <strong>2.000–3.500 Positions-Updates pro Sekunde</strong> über Kafka verarbeitet und mit IoT-Mesh-Netzwerken kommuniziert.",
  "exp.bornemann.2":
    "Datenebene von MongoDB auf <strong>PostgreSQL</strong> migriert, passend zu den stark relationalen Domänendaten.",
  "exp.bornemann.3":
    "Beim Lasttest einen Engpass im Kollisionserkennungs-Dienst gefunden und dessen CPU-Last vor dem Produktivstart von <strong>100 % auf unter 5 %</strong> gesenkt.",
  "exp.bornemann.4":
    "Speicherverbrauch des React-Frontends von <strong>~1 GB auf 500–600 MB</strong> reduziert.",
  "exp.bornemann.5":
    "Echtzeit-Plattform zur Konfiguration von IoT-Geräten mit React, WebSocket und Zustand entwickelt.",
  "exp.bornemann.6":
    "AWS-Infrastruktur als Code mit <strong>Terraform</strong> verwaltet und Deployments mit GitHub Actions automatisiert.",
  "exp.bornemann.7":
    "Logbuch-Verwaltungssystem mit React und GraphQL für Touren, Belege und administrative Abläufe entwickelt.",
  "exp.dci.date": "Juni 2022 — Juni 2023",
  "exp.dci.title": "Kursleiter Full-Stack-Entwicklung",
  "exp.dci.1":
    "Eine Gruppe von <strong>10 Studierenden</strong> durch einen intensiven Full-Stack-Kurs begleitet und die Abschlussquote verbessert.",
  "exp.dci.2": "Workshops zu <strong>React, Node.js und REST-API-Entwicklung</strong> gehalten.",
  "exp.dci.3":
    "Regelmäßige Pair-Programming-Sessions eingeführt, um Zusammenarbeit und Sicherheit beim Programmieren zu stärken.",
  "exp.hengst.date": "Juli 2016 — August 2018",
  "exp.hengst.title": "Anlagen- und Maschinenführer",
  "exp.hengst.1":
    "Industrielle Produktionsanlagen bedient, gewartet und Störungen behoben, um die Produktion am Laufen zu halten.",
  "exp.hengst.2": "Produktionsdaten erfasst, die zur Reduzierung von Anlagenausfällen genutzt wurden.",
  "exp.educationTitle": "Ausbildung",
  "exp.edu.dci.title": "Weiterbildung Full-Stack-Entwickler",
  "exp.edu.dci.1":
    "Frontend- (React, HTML/CSS) und Backend-Entwicklung (Node.js, Express, MongoDB).",
  "exp.edu.dci.2":
    "Teamprojekte mit agilen Workflows, Git und Deployment-Pipelines, abgeschlossen mit einer Full-Stack-Abschlussanwendung.",
  "exp.ude.date": "Sept. 2018 — Juni 2021",
  "exp.ude.location": "Duisburg, Deutschland",
  "exp.ude.title": "B.Sc. Maschinenbau",
  "exp.ude.school": "Universität Duisburg-Essen",
  "exp.ude.text":
    "Abschlussprojekt: Automatisierung einer Produktionslinie mit integrierten Steuerungssystemen.",
  "exp.ude.note": "Studium aus persönlichen Gründen unterbrochen.",
  "exp.baath.date": "Aug. 2010 — Juli 2016",
  "exp.baath.location": "Homs, Syrien",
  "exp.baath.title": "B.Sc. Mechatronik",
  "exp.baath.school": "Al-Baath-Universität",
  "exp.baath.text":
    "Interdisziplinäres Ingenieurwesen: mechanische Systeme, Elektronik, Regelungstechnik und Software.",
  "exp.baath.note": "Studium aufgrund des bewaffneten Konflikts unterbrochen.",

  // Skills
  "skills.eyebrow": "Kenntnisse",
  "skills.title": "Werkzeuge für zuverlässige Software.",
  "skills.lead":
    "Ein Full-Stack-Werkzeugkasten rund um TypeScript – für Frontend, Backend und Cloud-Infrastruktur.",
  "skills.core": "Kern-Stack",
  "skills.responsive": "Responsive Design",
  "skills.a11y": "Barrierefreiheit (WCAG)",
  "skills.databases": "Datenbanken",
  "skills.unit": "Unit-Tests",
  "skills.integration": "Integrationstests",
  "skills.languages": "Programmiersprachen",
  "skills.practices": "Arbeitsweisen",
  "skills.pairing": "Pair Programming",
  "skills.reviews": "Code-Reviews",
  "skills.clean": "Clean Architecture",
  "skills.spoken": "Sprachen",

  // Contact
  "contact.eyebrow": "Kontakt",
  "contact.title": "Lassen Sie uns sprechen.",
  "contact.lead":
    "Ob Stelle, Projekt oder einfach eine Frage – ich freue mich auf Ihre Nachricht.",
  "contact.detailsLabel": "Kontaktdaten",
  "contact.email": "E-Mail",
  "contact.phone": "Telefon",
  "contact.copy": "Kopieren",
  "contact.copied": "Kopiert",
  "contact.copyLabel": "E-Mail-Adresse kopieren",
  "contact.languages":
    "Ich arbeite auf Deutsch und Englisch; Arabisch ist meine Muttersprache.",
};

const strings = { en, de };
const originalHtml = new Map();
const originalAttrs = new Map();
let currentLang = "en";

/**
 * Parses data-i18n-attr="aria-label:key;alt:key"
 * @param {HTMLElement} el
 * @returns {[string, string][]}
 */
function parseAttrSpec(el) {
  return el.dataset.i18nAttr
    .split(";")
    .map((pair) => pair.split(":").map((s) => s.trim()))
    .filter(([attr, key]) => attr && key);
}

/**
 * Translates a key for the current language (used by other modules)
 * @param {string} key
 */
export function t(key) {
  return strings[currentLang]?.[key] ?? en[key] ?? key;
}

/**
 * Applies a language to every translatable element
 * @param {"en" | "de"} lang
 */
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  originalHtml.forEach((html, el) => {
    const value = lang === "en" ? html : strings[lang][el.dataset.i18n];
    if (value != null) el.innerHTML = value;
  });

  originalAttrs.forEach((attrs, el) => {
    attrs.forEach(([attr, key, english]) => {
      const value = lang === "en" ? english : strings[lang][key];
      if (value != null) el.setAttribute(attr, value);
    });
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

/**
 * Snapshots English content, applies the saved language and wires the switch
 */
export function initI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    originalHtml.set(el, el.innerHTML);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    originalAttrs.set(
      el,
      parseAttrSpec(el).map(([attr, key]) => [attr, key, el.getAttribute(attr)]),
    );
  });

  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    // Storage unavailable — fall back to English
  }
  if (saved && saved !== "en" && LANGUAGES.includes(saved)) applyLanguage(saved);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      if (!LANGUAGES.includes(lang) || lang === currentLang) return;
      applyLanguage(lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Preference just won't persist
      }
    });
  });
}
