/* script.js */
(() => {
  'use strict';

  // Translation Data for English and Arabic
  const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        courses: "Courses & Events",
        github: "GitHub Projects",
        experience: "Experience",
        contact: "Contact"
      },
      header: {
        title: "Abdulaziz Al-Rabiah",
	subtitle: "I am a Software Engineer from Queen's University",
        contact: "📞 +966550480974 | ✉️ abdulaziz_alrabiah@outlook.sa"
      },
      hero: {
        cta: "Discover More",
        downloadCV: "Download CV"
      },
      about: {
        title: "About Me",
        summaryTitle: "Summary",
        summary: "My robust academic background and technical skills enable me to excel in dynamic, collaborative work environments. I contribute to company success by applying my expertise and continuously expanding my abilities through hands-on experience and challenging projects that foster both personal and professional growth.",
        educationTitle: "Education",
        educationText: "<strong>BEng Software Engineering</strong> – Queen's University Belfast, Second Class Honours",
        educationList: [
          "2021/22: Databases, OOP, Software Design Principles, Architecture & Networks, Procedural Programming",
          "2022/23: Software Engineering & Systems Development, Data Structures & Algorithms, Intro to AI & ML, Service‑Oriented Programming, Professional Skills",
          "2023/24: Software Testing, Software Engineering Project, Cloud Computing, Secure Software Development, Team‑Based Innovation"
        ],
        skillsTitle: "Skills",
        skillsText: "<strong>Soft Skills:</strong> Teamwork, Communication, Problem Solving, Critical Thinking<br /><strong>Technical Skills:</strong> Windows, Kali Linux, Java, C++, Python, SQL, MySQL, HTML, CSS, Microsoft Office, Figma, SQL Server, IntelliJ IDEA, Visual Studio, Qt Creator",
        interestsTitle: "Interests",
        interestsText: "I am enthusiastic about applying technology and innovation to drive progress. I stay updated on industry trends and continually explore new tools and approaches to enhance my skills."
      },
      projects: {
        title: "Projects",
        filters: {
          all: "All",
          personal: "Personal Project",
          university: "University",
          military: "RAST"
        },
        showMore: "Show More",
        showLess: "Show Less",
        projectCards: [
          {
            title: "Arresting System Control Software",
            subtitle: "Military Application",
            description: "A custom control interface for a military aircraft arresting system featuring dynamic status lights and real‑time monitoring.",
            technologies: "Python, Android, UI Design",
            category: "military"
          },
          {
            title: "Python PC Monitoring App",
            subtitle: "Personal Project",
            description: "A desktop-based application to monitor and simulate system statuses using Python and Tkinter.",
            technologies: "Python, Tkinter, PyQt",
            category: "personal"
          },
          {
            title: "QR Code Generator",
            subtitle: "Personal Project",
            description: "An application that generates, customizes, saves, and scans QR codes with robust error handling.",
            technologies: "Python, Tkinter",
            category: "personal"
          },
          {
            title: "Database Project",
            subtitle: "University Project",
            description: "A relational database built with MySQL using a provided schema, enforcing constraints and enabling data extraction via SQL.",
            technologies: "MySQL, SQL, phpMyAdmin",
            category: "university"
          },
          {
            title: "Software Design Principles",
            subtitle: "University Project",
            description: "A simulation of a vending machine system with multiple user roles using Agile methodologies and managing sprint and product backlogs.",
            technologies: "Agile, Teamwork, Software Design",
            category: "university"
          },
          {
            title: "AI & Machine Learning Project",
            subtitle: "University Project",
            description: "Optimized machine learning models in R for image classification using logistic regression, KNN, and random forests.",
            technologies: "R, ML, Logistic Regression, KNN, Random Forests",
            category: "university"
          },
          {
            title: "Secure Software Development",
            subtitle: "University Project",
            description: "Developed a threat model for an eCommerce platform to identify vulnerabilities and design effective mitigation strategies.",
            technologies: "Threat Modeling, Risk Assessment, Security Standards",
            category: "university"
          },
          {
            title: "Advanced Testing & Quality Assurance",
            subtitle: "University Project",
            description: "Enhanced software quality through manual testing and automated API unit testing with comprehensive bug tracking.",
            technologies: "Manual Testing, API Testing, Bug Tracking",
            category: "university"
          },
          {
            title: "Buffer Injection Analysis",
            subtitle: "University Project",
            description: "Investigated buffer overflow vulnerabilities using penetration testing techniques and implemented security controls.",
            technologies: "Penetration Testing, Security Controls",
            category: "university"
          },
          {
            title: "Collaborative Standard Setting & Assessment",
            subtitle: "CSC3032 Course Project",
            description: "Developed 'EvAs', a platform to streamline standard setting and assessment creation in educational settings through team collaboration.",
            technologies: "Team Collaboration, Software Development",
            category: "university"
          },
          {
            title: "Enhancement of QUBengage Cloud App",
            subtitle: "University Project",
            description: "Enhanced the QUBengage app to monitor student engagement by adding new functionalities and improving systems using cloud and microservices architecture.",
            technologies: "Cloud, Microservices, App Enhancement",
            category: "university"
          },
          {
            title: "Threat Modelling & Risk Management",
            subtitle: "University Project",
            description: "Developed a comprehensive threat model for an eCommerce platform by integrating risk assessment techniques and industry standards.",
            technologies: "Threat Modeling, Risk Management, Security",
            category: "university"
          }
        ]
      },
      github: {
        title: "GitHub Projects",
        description: "Explore my work on GitHub:",
        linkText: "Visit my GitHub Profile"
      },
      experience: {
        title: "Experience",
        details: "Software Engineer – Rheinmetall Arabia Simulation and Training (RAST)",
        period: "July 2024 – Present",
        description: "Developing software for a military aircraft arresting system, including designing and implementing control interfaces for custom‑built tablets."
      },
      courses: {
        title: "Courses & Events",
        events: [
          "PMP 35 Hour Course (Preparing for Exam)",
          "Professional Java Course",
          "Hackathon by PwC on Diversity",
          "Ultimate Web Development Course"
        ]
      },
      footer: {
        text: "&copy; 2025 Abdulaziz Al-Rabiah. All rights reserved.",
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    },
    ar: {
      nav: {
        home: "الرئيسية",
        about: "من أنا",
        projects: "المشاريع",
        courses: "الدورات والفعاليات",
        github: "مشاريع GitHub",
        experience: "الخبرات",
        contact: "تواصل"
      },
      header: {
        title: "عبدالعزيز الربيعة",
	subtitle: "مهندس برمجيات من جامعة كوينز",
        contact: "📞 +966550480974 | ✉️ abdulaziz_alrabiah@outlook.sa"
      },
      hero: {
        cta: "استكشف المزيد",
        downloadCV: "تحميل السيرة الذاتية"
      },
      about: {
        title: "من أنا",
        summaryTitle: "الملخص",
        summary: "خلفيتي الأكاديمية المتينة ومهاراتي التقنية تُمكنني من التفوق في بيئات العمل الديناميكية والتعاونية. أُساهم في نجاح الشركة من خلال تطبيق خبرتي وتوسيع قدراتي باستمرار عبر التجارب العملية والمشاريع التحدّية التي تعزز النمو الشخصي والمهني",
        educationTitle: "التعليم",
        educationText: "<strong>بكالوريوس (مع مرتبة الشرف) في هندسة البرمجيات</strong> – جامعة كوينز بلفاست، ",
        educationList: [
          "2021/22: قواعد البيانات، البرمجة الكائنية، مبادئ تصميم البرمجيات، العمارة والشبكات، البرمجة الإجرائية",
          "2022/23: هندسة وأنظمة البرمجيات، هياكل البيانات والخوارزميات، مقدمة في الذكاء الاصطناعي وتعلم الآلة، البرمجة الموجهة للخدمات، المهارات المهنية",
          "2023/24: اختبار البرمجيات، مشروع هندسة البرمجيات، الحوسبة السحابية، تطوير البرمجيات الآمنة، الابتكار البرمجية الجماعي"
        ],
        skillsTitle: "المهارات",
        skillsText: "<strong>المهارات الشخصية:</strong> العمل الجماعي، التواصل، حل المشكلات، التفكير النقدي<br /><strong>المهارات التقنية:</strong> ويندوز، كالي لينكس، جافا، C++، بايثون، SQL، MySQL، HTML، CSS، مايكروسوفت أوفيس، فيجما، SQL Server، IntelliJ IDEA، Visual Studio، Qt Creator",
        interestsTitle: "الاهتمامات",
        interestsText: "أنا متحمس لتطبيق التكنولوجيا والابتكار لدفع عجلة التقدم. أتابع أحدث الاتجاهات في الصناعة وأستكشف باستمرار أدوات وأساليب جديدة لتعزيز مهاراتي."
      },
      projects: {
        title: "المشاريع",
        filters: {
          all: "الكل",
          personal: "مشروع شخصي",
          university: "جامعي",
          military: "راينميتال العربية للمحاكاة"
        },
        showMore: "عرض المزيد",
        showLess: "عرض أقل",
        projectCards: [
          {
            title: "نظام التحكم في مهبط الطائرات",
            subtitle: "تطبيق عسكري",
            description: "تم تطوير واجهة تحكم مخصصة لنظام مهبط الطائرات العسكرية مع أضواء حالة ديناميكية ومراقبة في الوقت الحقيقي.",
            technologies: "بايثون، أندرويد، تصميم الواجهة",
            category: "military"
          },
          {
            title: "تطبيق مراقبة الكمبيوتر ببايثون",
            subtitle: "مشروع شخصي",
            description: "تم إنشاء تطبيق مراقبة للكمبيوتر لاختبار برمجيات التحكم مع واجهة رسومية تحاكي تحديثات الحالة والأعطال باستخدام بايثون وTkinter.",
            technologies: "بايثون، Tkinter، PyQt",
            category: "personal"
          },
          {
            title: "مولد رموز QR",
            subtitle: "مشروع شخصي",
            description: "تم تطوير تطبيق يقوم بإنشاء، تخصيص، حفظ ومسح رموز QR مع معالجة أخطاء قوية وخيارات تخصيص ديناميكية.",
            technologies: "بايثون، Tkinter",
            category: "personal"
          },
          {
            title: "مشروع قاعدة البيانات",
            subtitle: "مشروع جامعي",
            description: "أظهر الكفاءة في إنشاء قاعدة بيانات علائقية باستخدام MySQL من مخطط مُعطى مع تطبيق قيود لضمان سلامة العلاقات واستيراد البيانات باستخدام phpMyAdmin.",
            technologies: "MySQL, SQL, phpMyAdmin",
            category: "university"
          },
          {
            title: "مبادئ تصميم البرمجيات",
            subtitle: "مشروع جماعي",
            description: "تمت محاكاة نظام آلة بيع مع أدوار مستخدمين مختلفة باستخدام منهجيات أجايل وإدارة سجلات Sprint وProduct Backlog.",
            technologies: "أجايل، العمل الجماعي، تصميم البرمجيات",
            category: "university"
          },
          {
            title: "مشروع الذكاء الاصطناعي وتعلم الآلة",
            subtitle: "مشروع جامعي",
            description: "تم تنفيذ وتحسين نماذج تعلم الآلة باستخدام R لتصنيف الصور عبر تقنيات الانحدار اللوجستي، KNN، والغابات العشوائية.",
            technologies: "R، تعلم الآلة، الانحدار اللوجستي، KNN، الغابات العشوائية",
            category: "university"
          },
          {
            title: "تطوير البرمجيات الآمنة",
            subtitle: "مشروع جامعي",
            description: "تم تطوير نموذج تهديد لمنصة التجارة الإلكترونية لتحديد الثغرات وتصميم استراتيجيات تخفيف فعالة.",
            technologies: "نمذجة التهديد، تقييم المخاطر، معايير الأمان",
            category: "university"
          },
          {
            title: "الاختبار المتقدم وضمان الجودة",
            subtitle: "مشروع جامعي",
            description: "تم تحسين جودة البرمجيات من خلال الاختبارات اليدوية واختبارات وحدات API الآلية مع تتبع شامل للأخطاء.",
            technologies: "الاختبار اليدوي، اختبار API، تتبع الأخطاء",
            category: "university"
          },
          {
            title: "تحليل حقن الذاكرة المؤقتة",
            subtitle: "مشروع جامعي",
            description: "تم دراسة ثغرات تجاوز سعة الذاكرة باستخدام تقنيات اختبار الاختراق وتطبيق ضوابط أمنية لمنع الاستغلال.",
            technologies: "اختبار الاختراق، ضوابط الأمان",
            category: "university"
          },
          {
            title: "وضع المعايير التعاوني والتقييم",
            subtitle: "مشروع مقرر CSC3032",
            description: "تم تطوير منصة 'EvAs' لتبسيط عملية وضع المعايير وإنشاء التقييمات في البيئات التعليمية من خلال التعاون الوثيق.",
            technologies: "التعاون الجماعي، تطوير البرمجيات",
            category: "university"
          },
          {
            title: "تحسين تطبيق QUBengage السحابي",
            subtitle: "مشروع جامعي",
            description: "تم تحسين تطبيق QUBengage لمراقبة تفاعل الطلاب من خلال إضافة وظائف جديدة وتحسين الأنظمة باستخدام تقنيات السحابة والمعماريات القائمة على الخدمات الصغيرة.",
            technologies: "السحابة، الخدمات المصغرة، تحسين التطبيقات",
            category: "university"
          },
          {
            title: "نمذجة التهديد وإدارة المخاطر",
            subtitle: "مشروع جامعي",
            description: "تم تطوير نموذج شامل للتهديد لمنصة التجارة الإلكترونية من خلال دمج تقنيات تقييم المخاطر ومعايير الصناعة.",
            technologies: "نمذجة التهديد، إدارة المخاطر، الأمان",
            category: "university"
          }
        ]
      },
      github: {
        title: "مشاريع GitHub",
        description: "استعرض أعمالي على GitHub:",
        linkText: "زيارة ملفي على GitHub"
      },
      experience: {
        title: "الخبرات",
        details: "مهندس برمجيات – Rheinmetall Arabia Simulation and Training (RAST)",
        period: "يوليو 2024 – حتى الآن",
        description: "تطوير برمجيات لنظام مهبط الطائرات العسكرية، بما في ذلك تصميم وتنفيذ واجهات التحكم للأجهزة اللوحية المخصصة."
      },
      courses: {
        title: "الدورات والفعاليات",
        events: [
          "دورة 35 ساعة PMP (تحضير للامتحان)",
          "دورة جافا احترافية",
          "هاكاثون PwC حول التنوع",
          "دورة تطوير الويب النهائية"
        ]
      },
      footer: {
        text: "&copy; 2025 عبدالعزيز الربيعة. جميع الحقوق محفوظة.",
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    }
  };

  let currentLang = localStorage.getItem("language") || "en";
  const initialVisibleCount = 6;
  let projectsExpanded = false;

  // Helper: Retrieve nested translation by key
  const getNestedTranslation = (obj, key) =>
    key.split('.').reduce((o, i) => (o ? o[i] : null), obj);

  // Update page translations and document language/direction
  const translatePage = lang => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = getNestedTranslation(translations[lang], key);
      if (translation) el.innerHTML = translation;
    });
    document.documentElement.lang = lang;
    document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  // Render Education List
  const renderEducationList = lang => {
    const ul = document.getElementById('education-list');
    ul.innerHTML = "";
    translations[lang].about.educationList.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      ul.appendChild(li);
    });
  };

  // Render Projects Grid
  const renderProjects = lang => {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = "";
    const projects = translations[lang].projects.projectCards;
    projects.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-category', project.category);
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p><em>${project.subtitle}</em></p>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies}</p>
      `;
      if (!projectsExpanded && index >= initialVisibleCount) {
        card.classList.add("hidden");
      }
      grid.appendChild(card);
    });
    const toggleBtn = document.getElementById('toggle-projects');
    if (projects.length <= initialVisibleCount) {
      toggleBtn.style.display = 'none';
    } else {
      toggleBtn.style.display = 'block';
      toggleBtn.innerHTML = projectsExpanded 
        ? getNestedTranslation(translations[currentLang], 'projects.showLess')
        : getNestedTranslation(translations[currentLang], 'projects.showMore');
    }
  };

  // Render Courses List
  const renderCourses = lang => {
    const ul = document.getElementById('courses-list');
    ul.innerHTML = "";
    translations[lang].courses.events.forEach(course => {
      const li = document.createElement('li');
      li.innerHTML = course;
      ul.appendChild(li);
    });
  };

  // Initialize Scroll Reveal via Intersection Observer
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });
    revealElements.forEach(el => observer.observe(el));
  };

  // Theme Toggle Function – switches between light and dark themes
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const initTheme = () => {
  // Force dark mode every time by ignoring any saved theme:
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
};


  // Initialize Particle Animation for the hero section
  const initParticles = () => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const numberOfParticles = 150;
    const heroSection = document.getElementById('hero');

    const resizeCanvas = () => {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    };

    resizeCanvas();
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200);
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
      }
      draw() {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const alpha = 0.4 + Math.random() * 0.2;
        // In light mode, use a bright teal; in dark mode, use a muted gray
        ctx.fillStyle = isDark
          ? `rgba(100,100,100,${alpha})`
          : `rgba(210,180,140,${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.vx = -this.vx;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.vy = -this.vy;
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
      }
    }

    const initParticlesArray = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => particle.update());
      requestAnimationFrame(animateParticles);
    };

    initParticlesArray();
    animateParticles();
  };

  // Initialize Language & Render Content
  const initLanguage = () => {
    translatePage(currentLang);
    renderEducationList(currentLang);
    renderProjects(currentLang);
    renderCourses(currentLang);
    document.getElementById("toggle-lang").innerHTML = currentLang === 'en' ? "العربية" : "English";
  };

  // DOMContentLoaded – Initialize everything
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLanguage();
    initParticles();
    initScrollReveal();

    // Theme Toggle Button Event Listener
    document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);

    // Language Toggle Button
    document.getElementById("toggle-lang").addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      localStorage.setItem("language", currentLang);
      translatePage(currentLang);
      renderEducationList(currentLang);
      renderProjects(currentLang);
      renderCourses(currentLang);
      document.getElementById("toggle-lang").innerHTML = currentLang === 'en' ? "العربية" : "English";
    });

    // Project Filtering
    document.querySelectorAll('.filter-btn').forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(card => {
          card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? "block" : "none";
        });
      });
    });

    // Toggle Projects Expansion/Collapse
    document.getElementById('toggle-projects').addEventListener('click', () => {
      projectsExpanded = !projectsExpanded;
      renderProjects(currentLang);
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
})();
