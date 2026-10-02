import PDFDocument from 'pdfkit';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PHOTO_PATH = path.join(__dirname, '../assets/profil/photo.png');
const FONT_REGULAR = path.join(__dirname, '../assets/fonts/DejaVuSans.ttf');
const FONT_BOLD = path.join(__dirname, '../assets/fonts/DejaVuSans-Bold.ttf');

/** Coordonnées personnelles partagées par les deux versions. */
export const personalInfo = {
  firstName: 'Fadyl',
  lastName: 'BOURAIMA',
  email: 'fadylbouraima4@gmail.com',
  phone: '+229 01 51 85 15 25',
  location: 'Porto-Novo, Bénin',
  github: 'github.com/Fadyl04',
  linkedin: 'linkedin.com/in/fadyl-bouraima-326847234',
};

/** Palette noir et blanc. */
export const colors = {
  primary: '#222222',
  primaryDark: '#111111',
  dark: '#111111',
  text: '#111111',
  muted: '#222222',
  light: '#FFFFFF',
  line: '#C8C8C8',
  white: '#FFFFFF',
};

export const cvData = {
  
  fr: {
    role: 'Développeur Web Full-Stack',
    location: 'Porto-Novo, Bénin',
    contactLabels: { email: 'Email', phone: 'Téléphone', location: 'Ville' },
    sections: {
      profile: 'Profil',
      contact: 'Contact',
      experience: 'Expérience professionnelle',
      education: 'Formation',
      skills: 'Compétences techniques',
      projects: 'Projets clés',
      languages: 'Langues',
      interests: "Centres d’intérêt",
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Bases de données',
      tools: 'Outils & services',
      others: 'Autres',
    },
    profile: 'Développeur Web Full-Stack passionné par la création de solutions web modernes, performantes et évolutives. Rigoureux et orienté résultats, je transforme les besoins métiers en expériences digitales efficaces.',
    experience: [
      {
        title: 'Développeur Web', company: 'Quality Corporate',
        period: '13/10/2025 — 13/01/2026', subtitle: 'Stage professionnel',
        bullets: [
          'Développement d’interfaces utilisateur avec Angular.',
          'Correction de bugs et optimisation du code.',
          'Développement de tableaux de bord et de fonctionnalités métier.',
          'Conception et intégration d’API avec Laravel.',
        ],
      },
      {
        title: 'Développeur Web', company: 'OLIUP SARL',
        period: '08/07/2024 — 06/09/2024', subtitle: 'Stage académique',
        bullets: [
          'Développement avec PHP, HTML, CSS et JavaScript.',
          'Initiation à la programmation orientée objet.',
          'Administration de bases de données MySQL.',
          'Utilisation de GitHub.',
          'Initiation à la conception et à l’utilisation d’API.',
          'Maintenance informatique et installation de systèmes d’exploitation.',
        ],
      },
      {
        title: 'Développeur Web', company: 'E For AFRIKA',
        period: '28/06/2023 — 28/07/2023', subtitle: 'Stage académique',
        bullets: [
          'Développement avec PHP, HTML, CSS et JavaScript.',
          'Initiation à la programmation orientée objet.',
          'Maintenance informatique et installation de systèmes d’exploitation.',
        ],
      },
    ],
    education: [
      {
        diploma: 'Examen National de Licence Professionnelle — Systèmes Informatiques et Logiciels',
        school: 'UATM GASA Formation, Porto-Novo', period: '2025',
      },
      {
        diploma: 'Licence Professionnelle — Systèmes Informatiques et Logiciels',
        school: 'UATM GASA Formation — Porto-Novo', period: '2022 — 2025',
      },
      {
        diploma: 'Formation en Maintenance Informatique',
        school: 'ZC FIFA, Porto-Novo', period: '2022',
      },
      {
        diploma: 'Baccalauréat Série D',
        school: 'Lycée Mathieu Bouké, Parakou', period: '2021',
      },
    ],
    skills: {
      frontend: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'PrimeNG'],
      backend: ['Laravel', 'Express.js', 'PHP', 'NestJS'],
      database: ['MySQL', 'PostgreSQL', 'MongoDB', 'MariaDB'],
      tools: ['Firebase', 'GitHub', 'CI/CD', 'Docker'],
      others: ['SEO technique', 'Installation de systèmes d’exploitation', 'Microsoft Word / Excel / PowerPoint'],
    },
    projects: [
      {
        name: 'Bénin Tourisme (En cours)',
        description: 'Plateforme de découverte des sites touristiques et de participation aux événements culturels du Bénin.',
        technologies: 'Angular · Express.js · Prisma · MySQL · PrimeNG',
      },
      {
        name: 'Firebase Auth',
        description: 'Module d’authentification sécurisé destiné à la gestion des utilisateurs.',
        technologies: 'Angular · Firebase',
      },
      {
        name: 'Gestion des équipements',
        description: 'Application de gestion des équipements développée dans le cadre professionnel.',
        technologies: 'Laravel',
      },
      {
        name: 'Help Desk',
        description: 'Application de gestion et de suivi des demandes d’assistance.',
        technologies: 'Laravel API · Angular',
      },
    ],
    languages: ['Français', 'Anglais', 'Yoruba', 'Goun'],
    interests: ['Voyage', 'Sport', 'Cinéma', 'Photographie', 'Arts créatifs'],
  },

  en: {
    role: 'Full-Stack Web Developer',
    location: 'Porto-Novo, Benin',
    contactLabels: { email: 'Email', phone: 'Phone', location: 'Location' },
    sections: {
      profile: 'Profile', contact: 'Contact', experience: 'Professional Experience',
      education: 'Education', skills: 'Technical Skills', projects: 'Key Projects',
      languages: 'Languages', interests: 'Interests', frontend: 'Frontend',
      backend: 'Backend', database: 'Databases', tools: 'Tools & Services', others: 'Other',
    },
    profile: 'Full-Stack Web Developer passionate about building modern, high-performance, and scalable web solutions. Rigorous and results-oriented, I transform business needs into effective digital experiences.',
    experience: [
      {
        title: 'Web Developer', company: 'Quality Corporate',
        period: '13/10/2025 — 13/01/2026', subtitle: 'Professional Internship',
        bullets: [
          'Developed user interfaces with Angular.',
          'Fixed bugs and optimized code.',
          'Developed dashboards and business features.',
          'Designed and integrated APIs with Laravel.',
        ],
      },
      {
        title: 'Web Developer', company: 'OLIUP SARL',
        period: '08/07/2024 — 06/09/2024', subtitle: 'Academic Internship',
        bullets: [
          'Developed applications using PHP, HTML, CSS, and JavaScript.',
          'Gained experience in object-oriented programming.',
          'Managed MySQL databases.',
          'Used GitHub for version control and collaboration.',
          'Gained experience in API design and integration.',
          'Performed IT maintenance and operating system installations.',
        ],
      },
      {
        title: 'Web Developer', company: 'E For AFRIKA',
        period: '28/06/2023 — 28/07/2023', subtitle: 'Academic Internship',
        bullets: [
          'Developed applications using PHP, HTML, CSS, and JavaScript.',
          'Gained experience in object-oriented programming.',
          'Performed IT maintenance and operating system installations.',
        ],
      },
    ],
    education: [
      {
        diploma: 'National Professional Bachelor’s Degree Examination — Computer Systems and Software',
        school: 'UATM GASA Formation, Porto-Novo', period: '2025',
      },
      {
        diploma: 'Professional Bachelor’s Degree — Computer Systems and Software',
        school: 'UATM GASA Formation — Porto-Novo', period: '2022 — 2025',
      },
      {
        diploma: 'IT Maintenance Training', school: 'ZC FIFA, Porto-Novo', period: '2022',
      },
      {
        diploma: 'High School Diploma — Science Track',
        school: 'Lycée Mathieu Bouké, Parakou', period: '2021',
      },
    ],
    skills: {
      frontend: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'PrimeNG'],
      backend: ['Laravel', 'Express.js', 'PHP', 'NestJS'],
      database: ['MySQL', 'PostgreSQL', 'MongoDB', 'MariaDB'],
      tools: ['Firebase', 'GitHub', 'CI/CD', 'Docker'],
      others: ['Technical SEO', 'Operating System Installation', 'Microsoft Word / Excel / PowerPoint'],
    },
    projects: [
      {
        name: 'Bénin Tourisme (In Progress)',
        description: 'Platform for discovering tourist sites and participating in cultural events in Benin.',
        technologies: 'Angular · Express.js · Prisma · MySQL · PrimeNG',
      },
      {
        name: 'Firebase Auth',
        description: 'Secure authentication module designed for user management.',
        technologies: 'Angular · Firebase',
      },
      {
        name: 'Equipment Management',
        description: 'Equipment management application developed in a professional environment.',
        technologies: 'Laravel',
      },
      {
        name: 'Help Desk',
        description: 'Application for managing and tracking support requests.',
        technologies: 'Laravel API · Angular',
      },
    ],
    languages: ['French', 'English', 'Yoruba', 'Goun'],
    interests: ['Travel', 'Sports', 'Cinema', 'Photography', 'Creative Arts'],
  },
};

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const SIDEBAR_W = 202;
const SIDE_X = 22;
const SIDE_W = SIDEBAR_W - SIDE_X * 2;
const MAIN_X = 229;
const MAIN_W = PAGE_W - MAIN_X - 27;
const FOOTER_Y = 811;

function textHeight(doc, text, width, options = {}) {
  return doc.heightOfString(text, { width, ...options });
}

function drawRule(doc, x, y, width, color = colors.line, lineWidth = 0.7) {
  doc.moveTo(x, y).lineTo(x + width, y).lineWidth(lineWidth).strokeColor(color).stroke();
}

function drawSectionTitle(doc, title, x, y, width) {
  doc.font('Regular').fontSize(9.4).fillColor(colors.dark)
    .text(title.toUpperCase(), x, y, { width, characterSpacing: 2.0 });
  doc.moveTo(x, y + 18).lineTo(x + 44, y + 18)
    .lineWidth(3.2).strokeColor('#444444').stroke();
  return y + 27;
}

function drawPhoto(doc) {
  if (!fs.existsSync(PHOTO_PATH)) return;
  const x = (SIDEBAR_W - 70) / 2;
  const y = 16;
  doc.save().roundedRect(x, y, 70, 86, 7).clip();
  doc.image(PHOTO_PATH, x, y, { width: 70, height: 86, fit: [70, 86], align: 'center', valign: 'center' });
  doc.restore();
  doc.roundedRect(x, y, 70, 86, 7).lineWidth(1).strokeColor('#CCCCCC').stroke();
}

function drawPageBase(doc, data, pageNumber, pageLabel) {
  doc.addPage({ size: 'A4', margin: 0 });
  doc.rect(0, 0, PAGE_W, PAGE_H).fill(colors.white);
  doc.rect(0, 0, SIDEBAR_W, PAGE_H).fill(colors.light);
  doc.rect(SIDEBAR_W - 0.7, 0, 0.7, PAGE_H).fill('#D8D8D8');
  drawPhoto(doc);

  doc.font('Regular').fontSize(24).fillColor(colors.dark)
    .text(personalInfo.lastName, MAIN_X, 29, { continued: true });
  doc.font('Regular').fillColor(colors.dark).text(` ${personalInfo.firstName}`, { continued: false });
  doc.font('Regular').fontSize(9.5).fillColor(colors.muted)
    .text(data.role.toUpperCase(), MAIN_X, 63, { width: MAIN_W, characterSpacing: 1.55 });
  doc.moveTo(MAIN_X, 91).lineTo(MAIN_X + MAIN_W, 91)
    .lineWidth(0.8).strokeColor(colors.line).stroke();

  drawRule(doc, MAIN_X, FOOTER_Y, MAIN_W, colors.line, 0.6);
  doc.font('Regular').fontSize(7.1).fillColor(colors.muted)
    .text(`BOURAIMA Fadyl · ${data.role}`, MAIN_X, FOOTER_Y + 7, { width: MAIN_W - 55 });
  doc.text(`${pageLabel} ${pageNumber}`, MAIN_X + MAIN_W - 50, FOOTER_Y + 7, { width: 50, align: 'right' });
}

function drawSidebarLabel(doc, text, y) {
  doc.font('Regular').fontSize(8.3).fillColor('#333333')
    .text(text.toUpperCase(), SIDE_X, y, { width: SIDE_W, characterSpacing: 1.8, lineBreak: false });
  doc.moveTo(SIDE_X + 1, y + 17).lineTo(SIDE_X + 44, y + 17)
    .lineWidth(3.2).strokeColor('#4A4A4A').stroke();
  return y + 27;
}

function drawContactIcon(doc, kind, x, y) {
  const size = 14;
  doc.roundedRect(x, y, size, size, 2.2).fill('#4A4A4A');
  if (kind === 'email') {
    doc.rect(x + 2.4, y + 3.2, 9.2, 7.1).lineWidth(0.9).strokeColor(colors.white).stroke();
    doc.moveTo(x + 2.7, y + 3.6).lineTo(x + 7, y + 7).lineTo(x + 11.3, y + 3.6)
      .lineWidth(0.8).strokeColor(colors.white).stroke();
  } else if (kind === 'location') {
    doc.circle(x + 7, y + 5.5, 3.5).fill(colors.white);
    doc.moveTo(x + 4.2, y + 7.4).lineTo(x + 7, y + 12).lineTo(x + 9.8, y + 7.4).closePath().fill(colors.white);
    doc.circle(x + 7, y + 5.5, 1.15).fill('#4A4A4A');
  } else if (kind === 'phone') {
    doc.save();
    doc.moveTo(x + 3.5, y + 3.2).bezierCurveTo(x + 3, y + 5.8, x + 7.5, y + 10.5, x + 10.4, y + 10.6)
      .lineWidth(2.2).lineCap('round').strokeColor(colors.white).stroke();
    doc.roundedRect(x + 2.6, y + 2.2, 3, 3.2, 0.8).fill(colors.white);
    doc.roundedRect(x + 9.2, y + 9, 3, 2.8, 0.8).fill(colors.white);
    doc.restore();
  } else if (kind === 'github') {
    doc.circle(x + 7, y + 7.3, 4).fill(colors.white);
    doc.moveTo(x + 3.8, y + 4.8).lineTo(x + 3.5, y + 1.8).lineTo(x + 6, y + 3.1).closePath().fill(colors.white);
    doc.moveTo(x + 10.2, y + 4.8).lineTo(x + 10.5, y + 1.8).lineTo(x + 8, y + 3.1).closePath().fill(colors.white);
    doc.circle(x + 5.4, y + 7, 0.45).fill('#4A4A4A');
    doc.circle(x + 8.6, y + 7, 0.45).fill('#4A4A4A');
  } else if (kind === 'linkedin') {
    doc.font('Bold').fontSize(8.2).fillColor(colors.white).text('in', x + 2.2, y + 2, { width: 10, height: 10 });
  }
}

function drawSidebarList(doc, items, y, fontSize = 7.8) {
  for (const item of items) {
    doc.circle(SIDE_X + 3, y + 4, 1.35).fill('#222222');
    doc.font('Regular').fontSize(fontSize).fillColor(colors.text).text(item, SIDE_X + 11, y, { width: SIDE_W - 11 });
    y += Math.max(11, doc.heightOfString(item, { width: SIDE_W - 11, fontSize })) + 1.5;
  }
  return y;
}

function drawProfileAndPersonal(doc, data) {
  let y = drawSidebarLabel(doc, data.sections.profile, 116);
  doc.font('Regular').fontSize(7.45).fillColor(colors.text);
  const profileH = textHeight(doc, data.profile, SIDE_W, { lineGap: 0.8 });
  doc.text(data.profile, SIDE_X, y, { width: SIDE_W, lineGap: 0.8, align: 'left' });
  y += profileH + 11;

  y = drawSidebarLabel(doc, data.sections.contact, y);
  const contacts = [
    ['location', data.location],
    ['email', personalInfo.email],
    ['phone', personalInfo.phone],
    ['github', personalInfo.github],
    ['linkedin', personalInfo.linkedin],
  ];
  for (const [kind, value] of contacts) {
    const iconX = SIDE_X + 1;
    const textX = SIDE_X + 23;
    drawContactIcon(doc, kind, iconX, y + 1);
    doc.font('Regular').fontSize(7.35).fillColor(colors.text);
    const h = textHeight(doc, value, SIDE_W - 23, { lineGap: 0.65 });
    doc.text(value, textX, y + 1, { width: SIDE_W - 23, lineGap: 0.65 });
    y += Math.max(18, h + 3) + 5;
  }

  y += 3;
  y = drawSidebarLabel(doc, data.sections.interests, y);
  y = drawSidebarList(doc, data.interests, y, 7.7);

  y += 3;
  y = drawSidebarLabel(doc, data.sections.languages, y);
  drawSidebarList(doc, data.languages, y, 7.7);
}

function drawEducation(doc, data, y) {
  y = drawSectionTitle(doc, data.sections.education, MAIN_X, y, MAIN_W);
  const dateW = 65;
  const dateGap = 4;
  for (const item of data.education) {
    doc.font('Bold').fontSize(7.5).fillColor(colors.primary)
      .text(item.period, MAIN_X, y, { width: dateW });
    doc.font('Bold').fontSize(8.3).fillColor(colors.dark);
    const diplomaW = MAIN_W - dateW - dateGap;
    const diplomaH = textHeight(doc, item.diploma, diplomaW, { lineGap: 0.2 });
    doc.text(item.diploma, MAIN_X + dateW + dateGap, y, { width: diplomaW, lineGap: 0.2 });
    y += Math.max(9, diplomaH) + 1;
    doc.font('Regular').fontSize(7.5).fillColor(colors.muted);
    const schoolH = textHeight(doc, item.school, MAIN_W - dateW - dateGap, { lineGap: 0.2 });
    doc.text(item.school, MAIN_X + dateW + dateGap, y, { width: MAIN_W - dateW - dateGap, lineGap: 0.2 });
    y += schoolH + 4;
  }
  return y + 1;
}

function drawExperience(doc, data, y) {
  y = drawSectionTitle(doc, data.sections.experience, MAIN_X, y, MAIN_W);
  for (const job of data.experience) {
    doc.font('Bold').fontSize(8.6).fillColor(colors.dark)
      .text(job.title, MAIN_X, y, { continued: true });
    doc.font('Bold').fontSize(8.1).fillColor(colors.primary)
      .text(`  ·  ${job.company}`);
    y = doc.y + 0.2;

    doc.font('Regular').fontSize(7.2).fillColor(colors.muted)
      .text(`${job.period}  ·  ${job.subtitle}`, MAIN_X, y, { width: MAIN_W });
    y = doc.y + 1.5;

    for (const bullet of job.bullets) {
      doc.font('Regular').fontSize(7.8).fillColor(colors.primary)
        .text('•', MAIN_X + 2, y + 0.1, { width: 8 });
      doc.font('Regular').fontSize(7.8).fillColor(colors.text);
      const h = textHeight(doc, bullet, MAIN_W - 14, { lineGap: 0.15 });
      doc.text(bullet, MAIN_X + 13, y, { width: MAIN_W - 14, lineGap: 0.15 });
      y += h + 0.8;
    }
    y += 3.5;
  }
  return y;
}

function drawProjects(doc, data, y) {
  y = drawSectionTitle(doc, data.sections.projects, MAIN_X, y, MAIN_W);
  for (const project of data.projects) {
    doc.font('Bold').fontSize(8.4).fillColor(colors.dark)
      .text(project.name, MAIN_X, y, { width: MAIN_W });
    y = doc.y + 0.6;
    doc.font('Regular').fontSize(7.55).fillColor(colors.text);
    const descH = textHeight(doc, project.description, MAIN_W, { lineGap: 0.35 });
    doc.text(project.description, MAIN_X, y, { width: MAIN_W, lineGap: 0.25 });
    y += descH + 0.8;
    doc.font('Regular').fontSize(7.05).fillColor(colors.primary);
    const techH = textHeight(doc, project.technologies, MAIN_W, { lineGap: 0.2 });
    doc.text(project.technologies, MAIN_X, y, { width: MAIN_W, lineGap: 0.1 });
    y += techH + 4;
  }
  return y;
}

function drawSkills(doc, data, y) {
  y = drawSectionTitle(doc, data.sections.skills, MAIN_X, y, MAIN_W);
  const groups = ['frontend', 'backend', 'database', 'tools', 'others'];
  for (const key of groups) {
    const label = data.sections[key];
    const values = data.skills[key].join(', ');
    const fullLine = `${label}: ${values}`;
    doc.circle(MAIN_X + 3, y + 3.7, 1.35).fill('#111111');
    doc.font('Bold').fontSize(7.45).fillColor(colors.text)
      .text(`${label}:`, MAIN_X + 12, y, { continued: true });
    doc.font('Regular').fontSize(7.35).fillColor(colors.text)
      .text(` ${values}`, { width: MAIN_W - 13, lineGap: 0.35 });
    const h = textHeight(doc, fullLine, MAIN_W - 13, { fontSize: 7.35, lineGap: 0.35 });
    y += Math.max(9, h) + 1.2;
  }
  return y;
}

/** Génère le CV PDF d’une langue. Le flux PDFKit retourné peut être pipé vers un fichier. */
export function generateCvPdf(lang = 'fr') {
  const selectedLang = lang === 'en' ? 'en' : 'fr';
  const data = cvData[selectedLang];
  const pageLabel = selectedLang === 'en' ? 'Page' : 'Page';
  const doc = new PDFDocument({ size: 'A4', margin: 0, bufferPages: false, autoFirstPage: false, compress: true });
  doc.registerFont('Regular', FONT_REGULAR);
  doc.registerFont('Bold', FONT_BOLD);
  doc.info.Title = `CV Fadyl Bouraima - ${selectedLang.toUpperCase()}`;
  doc.info.Author = 'Fadyl Bouraima';
  doc.info.Subject = data.role;
  doc.info.Keywords = 'CV, Full-Stack, Angular, Laravel';

  drawPageBase(doc, data, 1, pageLabel);
  drawProfileAndPersonal(doc, data);
  let y = drawEducation(doc, data, 105);
  y = drawExperience(doc, data, y);
  y = drawSkills(doc, data, y);
  drawProjects(doc, data, y);

  return doc;
}

async function writePdf(lang) {
  const outPath = path.join(__dirname, `CV_Fadyl_Bouraima_${lang.toUpperCase()}.pdf`);
  const doc = generateCvPdf(lang);
  const output = fs.createWriteStream(outPath);
  await new Promise((resolve, reject) => {
    output.on('finish', resolve);
    output.on('error', reject);
    doc.on('error', reject);
    doc.pipe(output);
    doc.end();
  });
  return outPath;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const files = await Promise.all([writePdf('fr'), writePdf('en')]);
  for (const file of files) console.log(`Generated: ${file}`);
};
