import { afterNextRender, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { CvService } from '../services/cv.service';


interface TechStack {
  name: string;
  icon: string;
}

interface Education {
  period: string;
  diploma: string;
  school: string;
  description?: string;
  city: string;
  icon: string;
  type: 'formation' | 'certification';
}

interface Project {
  title: string;
  description: string;
  image?: string;
  tech: TechStack[];
  link_github?: string;
  type: 'personnel' | 'professionnel';
}

interface Service {
  title: string;
  description: string;
  techno: TechStack[];
  icon: string;
}

interface Stat {
  icon: string;
  value: string;
  label: string;
}

interface NavLink {
  label: string;
  anchor: string;
}

interface Skill {
  name: string;
  icon: string;
  level: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ChipModule,
    ProgressBarModule,
    AvatarModule,
    CardModule,
    TagModule,
    FormsModule,
    ToastModule,
    TranslatePipe
  ],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  currentLanguage: 'fr' | 'en' = 'fr';

  constructor(
    private cvService: CvService,
    private contactService: ContactService,
    private messageService: MessageService,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setFallbackLang('fr');

    this.translate.use('fr');
    if (isPlatformBrowser(this.platformId)) {
      afterNextRender(() => {
        const savedLanguage = localStorage.getItem('language');

        if (savedLanguage === 'fr' || savedLanguage === 'en') {
          this.currentLanguage = savedLanguage;
          this.translate.use(savedLanguage);
        }

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
          this.isDarkMode = savedTheme === 'dark';
          document.documentElement.classList.toggle('app-dark', this.isDarkMode);
        }
      });
    }
  }

  isSending = false;
  sendSuccess = false;
  sendError = '';
  menuOpen = false;

  // --- Langue ---
  changeLanguage(language: 'fr' | 'en'): void {
    this.currentLanguage = language;
    this.translate.use(language);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', language);
    }
  }

  // --- Navigation ---
  navLinks: NavLink[] = [
    { label: 'NAV.HOME', anchor: 'accueil' },
    { label: 'NAV.ABOUT', anchor: 'apropos' },
    { label: 'NAV.EDUCATION', anchor: 'formations' },
    { label: 'NAV.SKILLS', anchor: 'competences' },
    { label: 'NAV.PROJECTS', anchor: 'projets' },
    { label: 'NAV.SERVICES', anchor: 'services' }
  ];

  // --- Hero ---
  firstName = 'BOURAIMA';
  lastName = 'Fadyl';
  role = 'HERO.ROLE';
  description = 'HERO.DESCRIPTION';

  techStack: TechStack[] = [
    {
      name: 'Angular',
      icon: 'devicon-angular-plain colored'
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored'
    },
    {
      name: 'NestJS',
      icon: 'devicon-nestjs-plain colored'
    },
    {
      name: 'express.js',
      icon: 'devicon-express-original'
    },
    {
      name: 'Laravel',
      icon: 'devicon-laravel-original colored'
    },
    {
      name: 'Firebase',
      icon: 'devicon-firebase-plain colored'
    },
    {
      name: 'CI/CD',
      icon: 'devicon-githubactions-plain'
    },
    {
      name: 'MySQL',
      icon: 'devicon-mysql-original colored'
    }
  ];

  stats: Stat[] = [
    {
      icon: 'pi pi-briefcase',
      value: '3+',
      label: 'STATS.YEARS'
    },
    {
      icon: 'pi pi-folder',
      value: '5+',
      label: 'STATS.PROJECTS'
    },
    {
      icon: 'pi pi-heart',
      value: '100%',
      label: 'STATS.SATISFACTION'
    }
  ];

  // --- À propos ---
  aboutTitle = 'ABOUT.TITLE';

  aboutDescription = 'ABOUT.DESCRIPTION';

  aboutPoints: string[] = [
    'ABOUT.POINTS.PASSIONATE',
    'ABOUT.POINTS.LEARNING',
    'ABOUT.POINTS.OPPORTUNITIES'
  ];

  // --- Formation ---
  educations: Education[] = [
    {
      period: '2025',
      diploma: 'EDUCATION.NATIONAL_EXAM.DIPLOMA',
      school: 'EDUCATION.NATIONAL_EXAM.SCHOOL',
      city: 'Porto-Novo, Bénin',
      description: 'EDUCATION.NATIONAL_EXAM.DESCRIPTION',
      icon: 'pi pi-verified',
      type: 'certification'
    },
    {
      period: '2025',
      diploma: 'EDUCATION.BACHELOR.DIPLOMA',
      school: 'EDUCATION.BACHELOR.SCHOOL',
      city: 'Porto-Novo, Bénin',
      description: 'EDUCATION.BACHELOR.DESCRIPTION',
      icon: 'pi pi-graduation-cap',
      type: 'formation'
    },
    {
      period: '2022 — 2025',
      diploma: 'EDUCATION.BACHELOR_PATH.DIPLOMA',
      school: 'EDUCATION.BACHELOR_PATH.SCHOOL',
      city: 'Porto-Novo, Bénin',
      description: 'EDUCATION.BACHELOR_PATH.DESCRIPTION',
      icon: 'pi pi-book',
      type: 'formation'
    },
    {
      period: '2021 — 2022',
      diploma: 'EDUCATION.MAINTENANCE.DIPLOMA',
      school: 'EDUCATION.MAINTENANCE.SCHOOL',
      city: 'Porto-Novo, Bénin',
      description: 'EDUCATION.MAINTENANCE.DESCRIPTION',
      icon: 'pi pi-wrench',
      type: 'formation'
    },
    {
      period: '2021',
      diploma: 'EDUCATION.BACCALAUREAT.DIPLOMA',
      school: 'EDUCATION.BACCALAUREAT.SCHOOL',
      city: 'Parakou, Bénin',
      description: 'EDUCATION.BACCALAUREAT.DESCRIPTION',
      icon: 'pi pi-graduation-cap',
      type: 'formation'
    }
  ];

  // --- Compétences ---
  skills: Skill[] = [
    {
      name: 'Angular',
      icon: 'devicon-angular-plain colored',
      level: 70
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored',
      level: 70
    },
    {
      name: 'NestJS',
      icon: 'devicon-nestjs-plain colored',
      level: 75
    },
    {
      name: 'express.js',
      icon: 'devicon-express-original',
      level: 75
    },
    {
      name: 'Laravel',
      icon: 'devicon-laravel-original colored',
      level: 70
    },
    {
      name: 'MySQL',
      icon: 'devicon-mysql-original colored',
      level: 70
    },
    {
      name: 'Firebase',
      icon: 'devicon-firebase-plain colored',
      level: 50
    },
    {
      name: 'Docker',
      icon: 'devicon-docker-plain colored',
      level: 40
    },
    {
      name: 'CI/CD',
      icon: 'devicon-githubactions-plain',
      level: 40
    }
  ];

  // --- Projets ---
  projects: Project[] = [
    {
      title: 'PROJECTS.BENIN_TOURISME.TITLE',
      description: 'PROJECTS.BENIN_TOURISME.DESCRIPTION',
      image: 'images/projects/benin.jpeg',
      tech: [
        {
          name: 'Angular',
          icon: 'devicon-angular-plain colored'
        },
        {
          name: 'PrimeNG',
          icon: 'pi pi-palette'
        },
        {
          name: 'express.js',
          icon: 'devicon-express-original'
        },
        {
          name: 'Prisma',
          icon: 'devicon-prisma-original'
        },
        {
          name: 'MySQL',
          icon: 'devicon-mysql-original colored'
        }
      ],
      link_github: 'https://github.com/Fadyl04/benin-tourism/tree/Fadyl',
      type: 'personnel'
    },
    {
      title: 'PROJECTS.PORTFOLIO.TITLE',
      description: 'PROJECTS.PORTFOLIO.DESCRIPTION',
      image: 'images/projects/profo.jpeg',
      tech: [
        {
          name: 'Angular',
          icon: 'devicon-angular-plain colored'
        },
        {
          name: 'PrimeNG',
          icon: 'pi pi-palette'
        }
      ],
      link_github: 'https://github.com/Fadyl04/',
      type: 'personnel'
    },
    {
      title: 'PROJECTS.AUTH_FIREBASE.TITLE',
      description: 'PROJECTS.AUTH_FIREBASE.DESCRIPTION',
      image: 'images/projects/firebase-auth.jpg',
      tech: [
        {
          name: 'Angular',
          icon: 'devicon-angular-plain colored'
        },
        {
          name: 'Firebase',
          icon: 'devicon-firebase-plain colored'
        }
      ],
      link_github: 'https://github.com/Fadyl04/Auth-Firebase',
      type: 'professionnel'
    },
    {
      title: 'PROJECTS.EQUIPMENT.TITLE',
      description: 'PROJECTS.EQUIPMENT.DESCRIPTION',
      image: 'images/projects/equip.jpg',
      tech: [
        {
          name: 'Laravel',
          icon: 'devicon-laravel-original colored'
        },
        {
          name: 'express.js',
          icon: 'devicon-express-original'
        }
      ],
      link_github: 'https://github.com/QualityCorporate/equipment',
      type: 'professionnel'
    },
    {
      title: 'PROJECTS.HELP_DESK.TITLE',
      description: 'PROJECTS.HELP_DESK.DESCRIPTION',
      image: 'images/projects/help.jpg',
      tech: [
        {
          name: 'Laravel API',
          icon: 'devicon-laravel-original colored'
        },
        {
          name: 'Angular',
          icon: 'devicon-angular-plain colored'
        },
        {
          name: 'Firebase',
          icon: 'devicon-firebase-plain colored'
        }
      ],
      link_github: 'https://github.com/willybnz/Quality-Help-Desk',
      type: 'professionnel'
    }
  ];

  // --- Services ---
  services: Service[] = [
    {
      title: 'SERVICES.FULL_STACK.TITLE',
      description: 'SERVICES.FULL_STACK.DESCRIPTION',
      icon: 'pi pi-sitemap',
      techno: [
        { name: 'Angular', icon: 'devicon-angular-plain colored' },
        { name: 'NestJS', icon: 'devicon-nestjs-plain colored' },
        { name: 'Laravel', icon: 'devicon-laravel-original colored' },
        { name: 'Express.js', icon: 'devicon-express-original' }
      ]
    },
    {
      title: 'SERVICES.REST_API.TITLE',
      description: 'SERVICES.REST_API.DESCRIPTION',
      icon: 'pi pi-share-alt',
      techno: [
        { name: 'NestJS', icon: 'devicon-nestjs-plain colored' },
        { name: 'Express.js', icon: 'devicon-express-original' },
        { name: 'Laravel', icon: 'devicon-laravel-original colored' }
      ]
    },
    {
      title: 'SERVICES.FIREBASE.TITLE',
      description: 'SERVICES.FIREBASE.DESCRIPTION',
      icon: 'devicon-firebase-plain colored',
      techno: [
        { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
        { name: 'Authentication', icon: 'pi pi-lock' },
        { name: 'Firestore', icon: 'pi pi-database' }
      ]
    },
    {
      title: 'SERVICES.BUG_FIXING.TITLE',
      description: 'SERVICES.BUG_FIXING.DESCRIPTION',
      icon: 'pi pi-wrench',
      techno: [
        { name: 'Angular', icon: 'devicon-angular-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'Laravel', icon: 'devicon-laravel-original colored' },
        { name: 'NestJS', icon: 'devicon-nestjs-plain colored' }
      ]
    },
    {
      title: 'SERVICES.CICD.TITLE',
      description: 'SERVICES.CICD.DESCRIPTION',
      icon: 'pi pi-cloud-upload',
      techno: [
        { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored' }
      ]
    },
    {
      title: 'SERVICES.SEO.TITLE',
      description: 'SERVICES.SEO.DESCRIPTION',
      icon: 'pi pi-search',
      techno: [
        { name: 'SEO technique', icon: 'pi pi-chart-line' },
        { name: 'Performance Web', icon: 'pi pi-bolt' },
        { name: 'Analytics', icon: 'pi pi-chart-bar' }
      ]
    },
    {
      title: 'SERVICES.MAINTENANCE.TITLE',
      description: 'SERVICES.MAINTENANCE.DESCRIPTION',
      icon: 'pi pi-shield',
      techno: [
        { name: 'Monitoring', icon: 'pi pi-chart-bar' },
        { name: 'Support', icon: 'pi pi-headphones' },
        { name: 'Maintenance', icon: 'pi pi-wrench' }
      ]
    }
  ];

  // --- Contact ---
  contactInfo = {
    email: 'fadylbouraima4@gmail.com',
    phone: '+229 01 51 85 15 25',
    whatsappNumber: '2290151851525',
    location: 'Porto-Novo, Bénin'
  };

  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  openMail(): void {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }

  openWhatsapp(): void {
    const message = encodeURIComponent(
      this.translate.instant('CONTACT.WHATSAPP_MESSAGE')
    );

    window.open(
      `https://wa.me/${this.contactInfo.whatsappNumber}?text=${message}`,
      '_blank'
    );
  }

  sendMessage(): void {

    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = '';

    this.contactService.sendMessage(this.contactForm).subscribe({
      next: (response) => {
        console.log(' Succès, réponse du serveur :', response);

        this.isSending = false;
        this.sendSuccess = true;

        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('CONTACT.SUCCESS'),
          detail: this.translate.instant('CONTACT.SUCCESS_DETAIL'),
          life: 5000
        });

        this.contactForm = {
          name: '',
          email: '',
          message: ''
        };
      },

      error: (err) => {

        this.isSending = false;
        this.sendError =
          err.error?.message ||
          this.translate.instant('CONTACT.ERROR_DETAIL');

        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('CONTACT.ERROR'),
          detail: this.sendError,
          life: 5000
        });
      }
    });
  }

  // --- Footer ---
  footerLinks: NavLink[] = [
    { label: 'NAV.HOME', anchor: 'accueil' },
    { label: 'NAV.ABOUT', anchor: 'apropos' },
    { label: 'NAV.EDUCATION', anchor: 'formations' },
    { label: 'NAV.SKILLS', anchor: 'competences' },
    { label: 'NAV.PROJECTS', anchor: 'projets' },
    { label: 'NAV.SERVICES', anchor: 'services' }
  ];

  socialLinks = {
    github: 'https://github.com/Fadyl04',
    linkedin: 'https://www.linkedin.com/in/fadyl-bouraima-326847234'
  };

  currentYear = new Date().getFullYear();

  isDarkMode = true;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.toggle('app-dark', this.isDarkMode);
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  scrollTo(anchor: string): void {
    this.menuOpen = false;

    if (isPlatformBrowser(this.platformId)) {
      document
        .getElementById(anchor)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadCV(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.cvService.download(this.currentLanguage);

  }

}
