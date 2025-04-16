// Translation dictionaries
const translations = {
    en: {
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        reviews: "Reviews",
        contacts: "Contacts",
        contactMe: "Contact Me",
        downloadResume: "Download My Resume",
        resumeText: "Get a detailed overview of my skills, experience, and projects.",
        emailMe: "Email Me",
        welcome: "Hi, I'm Dmytro Hovenko",
        welcomeSub: "FullStack Developer<br> Specializing in Modern Web and Software Solutions",
        workExp: "Work Experience",
        aboutText1: "I'm <strong>Dmytro Hovenko</strong>, an aspiring <strong>FullStack Developer</strong> currently learning the fundamentals of web development and programming. I am passionate about technology and eager to build a strong foundation in both front-end and back-end development.",
        aboutText2: "My learning journey includes <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>JQuery</strong>, <strong>PHP</strong>, <strong>Laravel</strong>, <strong>C</strong>, <strong>C++</strong>, <strong>C#</strong>, <strong>MySQL</strong>, <strong>MSSQL</strong>, and <strong>MongoDB</strong>. I am committed to continuous improvement and excited to apply my knowledge to real-world projects in the future.",
        aboutText3: "<strong>My main focus is working exclusively with game servers, clients, and related projects.</strong> I am especially passionate about MMORPGs such as <strong>MuOnline</strong>, <strong>World of Warcraft (WoW)</strong>, and <strong>Lineage 2 (La2)</strong>. My goal is to contribute to the gaming industry and develop solutions for online game communities.",
        workExpText1: "As someone just starting out, I am focused on learning and building my skills. While I don't have professional experience yet, I am actively working on personal projects and exploring various technologies to gain hands-on experience.",
        workExpList1: "<strong>Self-Learning</strong> (2023 - Present)<br>Studying programming languages and frameworks, including <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, and <strong>Laravel</strong>.",
        workExpList2: "<strong>Personal Projects</strong><br>Creating small projects to practice and apply my knowledge, such as simple websites and basic applications.",
        workExpList3: "<strong>Game Server Development</strong><br>Focusing on game server, client, and MMORPG-related projects (MuOnline, WoW, La2).",
        skillsProgramming: "Programming Languages",
        skillsProgrammingTitle: "Programming Languages",
        skillsProgrammingList: `<strong>C</strong> — System-level programming, memory management, pointers, and optimization. Used in game server development.
<strong>C++</strong> — OOP, STL, templates, and multi-threading. Suitable for game engines and high-performance applications.
<strong>C#</strong> — .NET development, Windows Forms, WPF, and Unity scripting for tools and utilities.
<strong>PHP</strong> — Backend scripting, RESTful APIs, authentication, and database integration.
<strong>JavaScript</strong> — ES6+, DOM manipulation, asynchronous operations, and frameworks (ReactJS).
<strong>JQuery</strong> — Rapid prototyping, animations, and legacy browser support.`,
        skillsSpoken: "Spoken Languages",
        skillsSpokenList: `<strong>Polish</strong> — fluent<br>Able to communicate and work on projects with Polish-speaking teams and clients.
<strong>Ukrainian</strong> — fluent (native)<br>Native proficiency, suitable for both technical and casual communication.
<strong>Russian</strong> — fluent<br>Used daily for both professional and personal communication; preferred for technical discussions.
<strong>English</strong> — upper-intermediate<br>Confident in reading, writing, and speaking. Preferred for international communication, documentation, and collaboration.`,
        skillsSpokenPref: `<strong>Preferred languages for communication:</strong> English and Russian.<br>I am comfortable working in multilingual environments and can adapt to teams with diverse language backgrounds.`,
        skillsTechnologies: "Technologies & Databases",
        skillsFrameworks: "Frameworks & Tools",
        skillsFrameworksList: `<strong>Laravel</strong> — MVC architecture, Eloquent ORM, routing, middleware, RESTful API development.
<strong>HTML & CSS</strong> — Semantic markup, responsive design, Flexbox, Grid, accessibility, cross-browser compatibility.`,
        skillsDatabases: "Databases",
        skillsDatabasesList: `<strong>MySQL</strong> — Relational design, complex queries, indexing, normalization.
<strong>MSSQL</strong> — Stored procedures, triggers, performance tuning for enterprise and MMORPG servers.
<strong>MongoDB</strong> — NoSQL, unstructured data, rapid prototyping, scalable solutions.`,
        skillsGameServer: "Game Server Focus",
        skillsGameServerList: `<strong>MMORPG Server & Client Development:</strong><br>Interested in and have hands-on experience with server/client architecture for games like MuOnline, WoW, and La2.
<strong>Server Configuration & Maintenance:</strong><br>Skilled in setting up, configuring, and maintaining game server environments, including security and performance optimization.
<strong>Customization & Scripting:</strong><br>Experience with custom scripts, plugins, and mods to enhance gameplay and server functionality.
<strong>Community & Support:</strong><br>Understanding of player needs, community management, and providing technical support for online game projects.`,
        myProjects: "My Projects",
        projectSoon: "Project Coming Soon",
        projectSoonDetails: "Details about this project will be added soon. Stay tuned!",
        whatPeopleSay: "What People Say",
        review1: "Great developer! Looking forward to seeing more of your MMORPG work.",
        review2: "Very passionate about game servers. Highly recommended!",
        review3: "Knows a lot about MuOnline and server configs. Good luck!",
        review4: "Impressed by your dedication to learning and gaming projects.",
        review5: "Great skills in both backend and game server development!",
        review6: "Looking forward to your future MMORPG projects!",
        leaveComment: "Your comment...",
        submit: "Submit",
        comments: "Comments",
        noComments: "No comments yet.",
        downloadResumeBtn: "Download Resume",
        contactMsg: "Have a project in mind or just want to say hi? Feel free to reach out!",
        // ...add more keys as needed
    },
    ru: {
        about: "Обо мне",
        skills: "Навыки",
        projects: "Проекты",
        reviews: "Отзывы",
        contacts: "Контакты",
        contactMe: "Связаться со мной",
        downloadResume: "Скачать резюме",
        resumeText: "Получите подробную информацию о моих навыках, опыте и проектах.",
        emailMe: "Написать на почту",
        welcome: "Привет, я Дмитрий Говенко",
        welcomeSub: "FullStack разработчик<br> Специализация — современные веб- и софт-решения",
        workExp: "Опыт работы",
        aboutText1: "Я <strong>Дмитрий Говенко</strong>, начинающий <strong>FullStack разработчик</strong>, изучающий основы веб-разработки и программирования. Я увлечён технологиями и стремлюсь построить прочную базу как во фронтенде, так и в бэкенде.",
        aboutText2: "В процессе обучения я изучаю <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>JQuery</strong>, <strong>PHP</strong>, <strong>Laravel</strong>, <strong>C</strong>, <strong>C++</strong>, <strong>C#</strong>, <strong>MySQL</strong>, <strong>MSSQL</strong> и <strong>MongoDB</strong>. Я нацелен на постоянное развитие и с нетерпением жду возможности применить знания на реальных проектах.",
        aboutText3: "<strong>Мой основной фокус — работа исключительно с игровыми серверами, клиентами и смежными проектами.</strong> Особенно интересуюсь MMORPG, такими как <strong>MuOnline</strong>, <strong>World of Warcraft (WoW)</strong> и <strong>Lineage 2 (La2)</strong>. Моя цель — внести вклад в игровую индустрию и разрабатывать решения для онлайн-сообществ.",
        workExpText1: "Как новичок, я сосредоточен на обучении и развитии навыков. У меня пока нет профессионального опыта, но я активно работаю над личными проектами и осваиваю разные технологии на практике.",
        workExpList1: "<strong>Самообразование</strong> (2023 - настоящее время)<br>Изучаю языки программирования и фреймворки: <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>Laravel</strong>.",
        workExpList2: "<strong>Личные проекты</strong><br>Создаю небольшие проекты для практики: простые сайты и приложения.",
        workExpList3: "<strong>Разработка игровых серверов</strong><br>Фокус на серверах, клиентах и MMORPG-проектах (MuOnline, WoW, La2).",
        skillsProgramming: "Языки программирования",
        skillsProgrammingTitle: "Языки программирования",
        skillsProgrammingList: `<strong>C</strong> — Системное программирование, управление памятью, указатели, оптимизация. Используется для игровых серверов.
<strong>C++</strong> — ООП, STL, шаблоны, многопоточность. Подходит для игровых движков и высокопроизводительных приложений.
<strong>C#</strong> — .NET, Windows Forms, WPF, скрипты для Unity.
<strong>PHP</strong> — Бэкенд-скрипты, REST API, аутентификация, работа с БД.
<strong>JavaScript</strong> — ES6+, работа с DOM, асинхронность, фреймворки (ReactJS).
<strong>JQuery</strong> — Быстрое прототипирование, анимации, поддержка старых браузеров.`,
        skillsSpoken: "Языки общения",
        skillsSpokenList: `<strong>Польский</strong> — свободно<br>Могу работать с польскими командами и клиентами.
<strong>Украинский</strong> — свободно (родной)<br>Родной язык, подходит для технического и бытового общения.
<strong>Русский</strong> — свободно<br>Использую ежедневно для работы и личного общения, предпочитаю для технических обсуждений.
<strong>Английский</strong> — выше среднего<br>Читаю, пишу и говорю уверенно. Предпочитаю для международных коммуникаций и документации.`,
        skillsSpokenPref: `<strong>Предпочтительные языки общения:</strong> английский и русский.<br>Легко работаю в многоязычных командах и адаптируюсь к разным языковым средам.`,
        skillsTechnologies: "Технологии и базы данных",
        skillsFrameworks: "Фреймворки и инструменты",
        skillsFrameworksList: `<strong>Laravel</strong> — MVC, Eloquent ORM, роутинг, middleware, REST API.
<strong>HTML & CSS</strong> — Семантическая верстка, адаптивность, Flexbox, Grid, доступность, кроссбраузерность.`,
        skillsDatabases: "Базы данных",
        skillsDatabasesList: `<strong>MySQL</strong> — Проектирование, сложные запросы, индексация, нормализация.
<strong>MSSQL</strong> — Хранимые процедуры, триггеры, оптимизация для корпоративных и MMORPG серверов.
<strong>MongoDB</strong> — NoSQL, неструктурированные данные, быстрые прототипы, масштабируемость.`,
        skillsGameServer: "Фокус на игровых серверах",
        skillsGameServerList: `<strong>Разработка серверов и клиентов MMORPG:</strong><br>Интересуюсь и имею опыт с архитектурой сервер/клиент для MuOnline, WoW, La2.
<strong>Настройка и поддержка серверов:</strong><br>Умею настраивать, конфигурировать и поддерживать игровые серверы, включая безопасность и оптимизацию.
<strong>Кастомизация и скрипты:</strong><br>Опыт написания скриптов, плагинов и модификаций для расширения функционала.
<strong>Сообщество и поддержка:</strong><br>Понимаю потребности игроков, умею управлять сообществом и оказывать техподдержку онлайн-проектам.`,
        myProjects: "Мои проекты",
        projectSoon: "Проект скоро появится",
        projectSoonDetails: "Информация о проекте будет добавлена позже. Следите за обновлениями!",
        whatPeopleSay: "Что говорят люди",
        review1: "Отличный разработчик! Жду новых работ по MMORPG.",
        review2: "Очень увлечён игровыми серверами. Рекомендую!",
        review3: "Знает всё о MuOnline и настройках серверов. Удачи!",
        review4: "Впечатлён твоей мотивацией к обучению и игровым проектам.",
        review5: "Отличные навыки в бэкенде и игровых серверах!",
        review6: "Жду твоих будущих проектов по MMORPG!",
        leaveComment: "Ваш комментарий...",
        submit: "Отправить",
        comments: "Комментарии",
        noComments: "Пока нет комментариев.",
        downloadResumeBtn: "Скачать резюме",
        contactMsg: "Есть идея проекта или просто хотите поздороваться? Пишите!",
        // ...add more keys as needed
    },
    pl: {
        about: "O mnie",
        skills: "Umiejętności",
        projects: "Projekty",
        reviews: "Opinie",
        contacts: "Kontakty",
        contactMe: "Skontaktuj się ze mną",
        downloadResume: "Pobierz CV",
        resumeText: "Uzyskaj szczegółowy przegląd moich umiejętności, doświadczenia i projektów.",
        emailMe: "Napisz do mnie",
        welcome: "Cześć, jestem Dmytro Hovenko",
        welcomeSub: "FullStack Developer<br> Specjalizuję się w nowoczesnych rozwiązaniach webowych i programistycznych",
        workExp: "Doświadczenie zawodowe",
        aboutText1: "Jestem <strong>Dmytro Hovenko</strong>, początkujący <strong>FullStack Developer</strong>, uczę się podstaw web developmentu i programowania. Pasjonuję się technologią i chcę zbudować solidne podstawy zarówno w front-endzie, jak i back-endzie.",
        aboutText2: "Moja nauka obejmuje <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>JQuery</strong>, <strong>PHP</strong>, <strong>Laravel</strong>, <strong>C</strong>, <strong>C++</strong>, <strong>C#</strong>, <strong>MySQL</strong>, <strong>MSSQL</strong> i <strong>MongoDB</strong>. Stawiam na ciągły rozwój i chcę wykorzystać wiedzę w praktycznych projektach.",
        aboutText3: "<strong>Mój główny cel to praca wyłącznie z serwerami gier, klientami i powiązanymi projektami.</strong> Szczególnie interesują mnie MMORPG, takie jak <strong>MuOnline</strong>, <strong>World of Warcraft (WoW)</strong> i <strong>Lineage 2 (La2)</strong>. Chcę wspierać branżę gier i rozwijać rozwiązania dla społeczności online.",
        workExpText1: "Jako początkujący skupiam się na nauce i rozwoju umiejętności. Nie mam jeszcze doświadczenia zawodowego, ale realizuję własne projekty i poznaję nowe technologie w praktyce.",
        workExpList1: "<strong>Samodzielna nauka</strong> (2023 - obecnie)<br>Poznawanie języków programowania i frameworków: <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>Laravel</strong>.",
        workExpList2: "<strong>Projekty własne</strong><br>Tworzenie prostych stron i aplikacji do nauki i praktyki.",
        workExpList3: "<strong>Rozwój serwerów gier</strong><br>Skupienie na serwerach, klientach i projektach MMORPG (MuOnline, WoW, La2).",
        skillsProgramming: "Języki programowania",
        skillsProgrammingTitle: "Języki programowania",
        skillsProgrammingList: `<strong>C</strong> — Programowanie systemowe, zarządzanie pamięcią, wskaźniki, optymalizacja. Używane w serwerach gier.
<strong>C++</strong> — OOP, STL, szablony, wielowątkowość. Do silników gier i wydajnych aplikacji.
<strong>C#</strong> — .NET, Windows Forms, WPF, skrypty Unity.
<strong>PHP</strong> — Backend, REST API, uwierzytelnianie, integracja z bazami danych.
<strong>JavaScript</strong> — ES6+, manipulacja DOM, asynchroniczność, frameworki (ReactJS).
<strong>JQuery</strong> — Szybkie prototypowanie, animacje, wsparcie starszych przeglądarek.`,
        skillsSpoken: "Języki komunikacji",
        skillsSpokenList: `<strong>Polski</strong> — płynnie<br>Współpraca z polskimi zespołami i klientami.
<strong>Ukraiński</strong> — płynnie (ojczysty)<br>Język ojczysty, do komunikacji technicznej i codziennej.
<strong>Rosyjski</strong> — płynnie<br>Codziennie używany zawodowo i prywatnie, preferowany do dyskusji technicznych.
<strong>Angielski</strong> — średniozaawansowany<br>Pewnie czytam, piszę i mówię. Preferowany do komunikacji międzynarodowej i dokumentacji.`,
        skillsSpokenPref: `<strong>Preferowane języki komunikacji:</strong> angielski i rosyjski.<br>Pracuję w środowiskach wielojęzycznych i łatwo się dostosowuję.`,
        skillsTechnologies: "Technologie i bazy danych",
        skillsFrameworks: "Frameworki i narzędzia",
        skillsFrameworksList: `<strong>Laravel</strong> — MVC, Eloquent ORM, routing, middleware, REST API.
<strong>HTML & CSS</strong> — Semantyka, responsywność, Flexbox, Grid, dostępność, kompatybilność przeglądarek.`,
        skillsDatabases: "Bazy danych",
        skillsDatabasesList: `<strong>MySQL</strong> — Projektowanie relacyjne, złożone zapytania, indeksowanie, normalizacja.
<strong>MSSQL</strong> — Procedury składowane, triggery, optymalizacja dla serwerów MMORPG.
<strong>MongoDB</strong> — NoSQL, dane niestrukturalne, szybkie prototypowanie, skalowalność.`,
        skillsGameServer: "Fokus na serwery gier",
        skillsGameServerList: `<strong>Rozwój serwerów i klientów MMORPG:</strong><br>Doświadczenie z architekturą serwer/klient (MuOnline, WoW, La2).
<strong>Konfiguracja i utrzymanie serwerów:</strong><br>Ustawianie, konfiguracja i utrzymanie środowisk serwerowych, bezpieczeństwo i optymalizacja.
<strong>Dostosowanie i skrypty:</strong><br>Tworzenie skryptów, pluginów i modów dla rozwoju funkcjonalności.
<strong>Społeczność i wsparcie:</strong><br>Zrozumienie potrzeb graczy, zarządzanie społecznością i wsparcie techniczne projektów online.`,
        myProjects: "Moje projekty",
        projectSoon: "Projekt wkrótce",
        projectSoonDetails: "Szczegóły projektu pojawią się wkrótce. Bądź na bieżąco!",
        whatPeopleSay: "Opinie",
        review1: "Świetny developer! Czekam na więcej projektów MMORPG.",
        review2: "Bardzo zaangażowany w serwery gier. Polecam!",
        review3: "Duża wiedza o MuOnline i konfiguracji serwerów. Powodzenia!",
        review4: "Podziwiam Twoje zaangażowanie w naukę i projekty gamingowe.",
        review5: "Świetne umiejętności backendu i serwerów gier!",
        review6: "Czekam na Twoje kolejne projekty MMORPG!",
        leaveComment: "Twój komentarz...",
        submit: "Wyślij",
        comments: "Komentarze",
        noComments: "Brak komentarzy.",
        downloadResumeBtn: "Pobierz CV",
        contactMsg: "Masz pomysł na projekt lub chcesz się przywitać? Napisz!",
        // ...add more keys as needed
    },
    ua: {
        about: "Про мене",
        skills: "Навички",
        projects: "Проєкти",
        reviews: "Відгуки",
        contacts: "Контакти",
        contactMe: "Зв'язатися зі мною",
        downloadResume: "Завантажити резюме",
        resumeText: "Отримайте детальний огляд моїх навичок, досвіду та проєктів.",
        emailMe: "Написати на пошту",
        welcome: "Привіт, я Дмитро Говенко",
        welcomeSub: "FullStack розробник<br> Спеціалізуюся на сучасних веб- та програмних рішеннях",
        workExp: "Досвід роботи",
        aboutText1: "Я <strong>Дмитро Говенко</strong>, початківець <strong>FullStack розробник</strong>, який вивчає основи веб-розробки та програмування. Я захоплююся технологіями й прагну закласти міцний фундамент у фронтенді та бекенді.",
        aboutText2: "У процесі навчання опановую <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>JQuery</strong>, <strong>PHP</strong>, <strong>Laravel</strong>, <strong>C</strong>, <strong>C++</strong>, <strong>C#</strong>, <strong>MySQL</strong>, <strong>MSSQL</strong> і <strong>MongoDB</strong>. Постійно вдосконалююся й хочу застосувати знання на реальних проєктах.",
        aboutText3: "<strong>Мій основний фокус — робота виключно з ігровими серверами, клієнтами та суміжними проєктами.</strong> Особливо цікавлюся MMORPG, такими як <strong>MuOnline</strong>, <strong>World of Warcraft (WoW)</strong> і <strong>Lineage 2 (La2)</strong>. Мета — зробити внесок у гейм-індустрію та створювати рішення для онлайн-спільнот.",
        workExpText1: "Як новачок, я зосереджений на навчанні та розвитку навичок. Професійного досвіду ще не маю, але активно працюю над власними проєктами й вивчаю різні технології на практиці.",
        workExpList1: "<strong>Самоосвіта</strong> (2023 - дотепер)<br>Вивчаю мови програмування та фреймворки: <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>Laravel</strong>.",
        workExpList2: "<strong>Особисті проєкти</strong><br>Створюю невеликі сайти й застосунки для практики.",
        workExpList3: "<strong>Розробка ігрових серверів</strong><br>Фокус на серверах, клієнтах і MMORPG-проєктах (MuOnline, WoW, La2).",
        skillsProgramming: "Мови програмування",
        skillsProgrammingTitle: "Мови програмування",
        skillsProgrammingList: `<strong>C</strong> — Системне програмування, керування пам'яттю, вказівники, оптимізація. Використовується для ігрових серверів.
<strong>C++</strong> — ООП, STL, шаблони, багатопотоковість. Для ігрових рушіїв і високопродуктивних застосунків.
<strong>C#</strong> — .NET, Windows Forms, WPF, скрипти для Unity.
<strong>PHP</strong> — Бекенд-скрипти, REST API, автентифікація, робота з БД.
<strong>JavaScript</strong> — ES6+, робота з DOM, асинхронність, фреймворки (ReactJS).
<strong>JQuery</strong> — Швидке прототипування, анімації, підтримка старих браузерів.`,
        skillsSpoken: "Мови спілкування",
        skillsSpokenList: `<strong>Польська</strong> — вільно<br>Можу працювати з польськими командами та клієнтами.
<strong>Українська</strong> — вільно (рідна)<br>Рідна мова, підходить для технічного й побутового спілкування.
<strong>Російська</strong> — вільно<br>Використовую щодня для роботи й особистого спілкування, віддаю перевагу для технічних обговорень.
<strong>Англійська</strong> — вище середнього<br>Впевнено читаю, пишу й говорю. Переважно для міжнародної комунікації та документації.`,
        skillsSpokenPref: `<strong>Переважні мови спілкування:</strong> англійська та російська.<br>Легко працюю в багатомовних командах і адаптуюсь до різних мовних середовищ.`,
        skillsTechnologies: "Технології та бази даних",
        skillsFrameworks: "Фреймворки та інструменти",
        skillsFrameworksList: `<strong>Laravel</strong> — MVC, Eloquent ORM, роутинг, middleware, REST API.
<strong>HTML & CSS</strong> — Семантична верстка, адаптивність, Flexbox, Grid, доступність, кросбраузерність.`,
        skillsDatabases: "Бази даних",
        skillsDatabasesList: `<strong>MySQL</strong> — Проектування, складні запити, індексація, нормалізація.
<strong>MSSQL</strong> — Збережені процедури, тригери, оптимізація для корпоративних і MMORPG серверів.
<strong>MongoDB</strong> — NoSQL, неструктуровані дані, швидке прототипування, масштабованість.`,
        skillsGameServer: "Фокус на ігрових серверах",
        skillsGameServerList: `<strong>Розробка серверів і клієнтів MMORPG:</strong><br>Цікавлюся й маю досвід з архітектурою сервер/клієнт для MuOnline, WoW, La2.
<strong>Налаштування та підтримка серверів:</strong><br>Вмію налаштовувати, конфігурувати й підтримувати ігрові сервери, включаючи безпеку й оптимізацію.
<strong>Кастомізація та скрипти:</strong><br>Досвід написання скриптів, плагінів і модифікацій для розширення функціоналу.
<strong>Спільнота та підтримка:</strong><br>Розумію потреби гравців, вмію керувати спільнотою й надавати техпідтримку онлайн-проєктам.`,
        myProjects: "Мої проєкти",
        projectSoon: "Проєкт скоро з'явиться",
        projectSoonDetails: "Інформацію про проєкт буде додано пізніше. Слідкуйте за оновленнями!",
        whatPeopleSay: "Що кажуть люди",
        review1: "Чудовий розробник! Чекаю нових робіт по MMORPG.",
        review2: "Дуже захоплений ігровими серверами. Рекомендую!",
        review3: "Знає все про MuOnline і налаштування серверів. Успіхів!",
        review4: "Вражений твоєю мотивацією до навчання й ігрових проєктів.",
        review5: "Чудові навички у бекенді та ігрових серверах!",
        review6: "Чекаю твоїх майбутніх MMORPG-проєктів!",
        leaveComment: "Ваш коментар...",
        submit: "Відправити",
        comments: "Коментарі",
        noComments: "Поки немає коментарів.",
        downloadResumeBtn: "Завантажити резюме",
        contactMsg: "Є ідея проєкту чи просто хочете привітатися? Пишіть!",
        // ...add more keys as needed
    }
};

// Add animation CSS once
(function injectLangAnimCss() {
    if (!document.getElementById('lang-anim-style')) {
        const style = document.createElement('style');
        style.id = 'lang-anim-style';
        style.textContent = `
        .lang-anim {
            transition: width 0.3s, height 0.3s, opacity 0.3s;
            will-change: width, height, opacity;
        }
        `;
        document.head.appendChild(style);
    }
})();

// Helper to freeze and unfreeze element size with animation
function freezeSize(el) {
    const rect = el.getBoundingClientRect();
    el.classList.add('lang-anim');
    el.style.width = rect.width + 'px';
    el.style.height = rect.height + 'px';
    el.style.opacity = '0';
}
function unfreezeSize(el) {
    el.style.opacity = '1';
    setTimeout(() => {
        el.style.width = '';
        el.style.height = '';
        el.classList.remove('lang-anim');
    }, 300);
}

// Set language and update UI
function setLanguage(lang) {
    // Update active class on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active-lang');
        } else {
            btn.classList.remove('active-lang');
        }
    });

    const t = translations[lang] || translations['en'];

    // Universal translation for all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                freezeSize(el);
                setTimeout(() => {
                    el.innerHTML = t[key];
                    unfreezeSize(el);
                }, 100);
            }
        }
    });

    // About section paragraphs
    const aboutPs = document.querySelectorAll('#about .about-text p');
    if (aboutPs.length >= 3) {
        [t.aboutText1, t.aboutText2, t.aboutText3].forEach((txt, i) => {
            freezeSize(aboutPs[i]);
            setTimeout(() => {
                aboutPs[i].innerHTML = txt;
                unfreezeSize(aboutPs[i]);
            }, 100);
        });
    }

    // Work experience section
    const workExpPs = document.querySelectorAll('#experience .about-text p');
    if (workExpPs.length >= 1) {
        freezeSize(workExpPs[0]);
        setTimeout(() => {
            workExpPs[0].innerHTML = t.workExpText1;
            unfreezeSize(workExpPs[0]);
        }, 100);
    }
    const workExpLis = document.querySelectorAll('#experience .about-text ul li');
    if (workExpLis.length >= 3) {
        [t.workExpList1, t.workExpList2, t.workExpList3].forEach((txt, i) => {
            freezeSize(workExpLis[i]);
            setTimeout(() => {
                workExpLis[i].innerHTML = txt;
                unfreezeSize(workExpLis[i]);
            }, 100);
        });
    }

    // Skills section
    const skillsBoxes = document.querySelectorAll('.skills-box');
    if (skillsBoxes.length >= 2) {
        // Programming
        const progBox = skillsBoxes[0];
        const progH3 = progBox.querySelector('h3');
        freezeSize(progH3);
        setTimeout(() => {
            progH3.innerHTML = t.skillsProgramming;
            unfreezeSize(progH3);
        }, 100);

        const progSections = progBox.querySelectorAll('.skills-resume section');
        if (progSections.length >= 2) {
            const progH4 = progSections[0].querySelector('h4');
            freezeSize(progH4);
            setTimeout(() => {
                progH4.innerHTML = t.skillsProgrammingTitle;
                unfreezeSize(progH4);
            }, 100);

            const progUl = progSections[0].querySelector('ul');
            freezeSize(progUl);
            setTimeout(() => {
                progUl.innerHTML = t.skillsProgrammingList.split('\n').map(s => `<li>${s}</li>`).join('');
                unfreezeSize(progUl);
            }, 100);

            const spokenH4 = progSections[1].querySelector('h4');
            freezeSize(spokenH4);
            setTimeout(() => {
                spokenH4.innerHTML = t.skillsSpoken;
                unfreezeSize(spokenH4);
            }, 100);

            const spokenUl = progSections[1].querySelector('ul');
            freezeSize(spokenUl);
            setTimeout(() => {
                spokenUl.innerHTML = t.skillsSpokenList.split('\n').map(s => `<li>${s}</li>`).join('');
                unfreezeSize(spokenUl);
            }, 100);

            const spokenP = progSections[1].querySelector('p');
            if (spokenP) {
                freezeSize(spokenP);
                setTimeout(() => {
                    spokenP.innerHTML = t.skillsSpokenPref;
                    unfreezeSize(spokenP);
                }, 100);
            }
        }
        // Technologies
        const techBox = skillsBoxes[1];
        const techH3 = techBox.querySelector('h3');
        freezeSize(techH3);
        setTimeout(() => {
            techH3.innerHTML = t.skillsTechnologies;
            unfreezeSize(techH3);
        }, 100);

        const techSections = techBox.querySelectorAll('.skills-resume section');
        if (techSections.length >= 3) {
            const fwH4 = techSections[0].querySelector('h4');
            freezeSize(fwH4);
            setTimeout(() => {
                fwH4.innerHTML = t.skillsFrameworks;
                unfreezeSize(fwH4);
            }, 100);

            const fwUl = techSections[0].querySelector('ul');
            freezeSize(fwUl);
            setTimeout(() => {
                fwUl.innerHTML = t.skillsFrameworksList.split('\n').map(s => `<li>${s}</li>`).join('');
                unfreezeSize(fwUl);
            }, 100);

            const dbH4 = techSections[1].querySelector('h4');
            freezeSize(dbH4);
            setTimeout(() => {
                dbH4.innerHTML = t.skillsDatabases;
                unfreezeSize(dbH4);
            }, 100);

            const dbUl = techSections[1].querySelector('ul');
            freezeSize(dbUl);
            setTimeout(() => {
                dbUl.innerHTML = t.skillsDatabasesList.split('\n').map(s => `<li>${s}</li>`).join('');
                unfreezeSize(dbUl);
            }, 100);

            const gsH4 = techSections[2].querySelector('h4');
            freezeSize(gsH4);
            setTimeout(() => {
                gsH4.innerHTML = t.skillsGameServer;
                unfreezeSize(gsH4);
            }, 100);

            const gsUl = techSections[2].querySelector('ul');
            freezeSize(gsUl);
            setTimeout(() => {
                gsUl.innerHTML = t.skillsGameServerList.split('\n').map(s => `<li>${s}</li>`).join('');
                unfreezeSize(gsUl);
            }, 100);
        }
    }

    // Projects section
    const projectsSection = document.querySelector('#projects.projects-section');
    if (projectsSection) {
        const h2 = projectsSection.querySelector('h2');
        if (h2) {
            freezeSize(h2);
            setTimeout(() => {
                h2.innerHTML = t.myProjects;
                unfreezeSize(h2);
            }, 100);
        }
        const cards = projectsSection.querySelectorAll('.project-card');
        cards.forEach(card => {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            if (h3) {
                freezeSize(h3);
                setTimeout(() => {
                    h3.innerHTML = t.projectSoon;
                    unfreezeSize(h3);
                }, 100);
            }
            if (p) {
                freezeSize(p);
                setTimeout(() => {
                    p.innerHTML = t.projectSoonDetails;
                    unfreezeSize(p);
                }, 100);
            }
        });
    }

    // Reviews section
    const reviewsSection = document.querySelector('#reviews.reviews-section');
    if (reviewsSection) {
        const h2 = reviewsSection.querySelector('h2');
        if (h2) {
            freezeSize(h2);
            setTimeout(() => {
                h2.innerHTML = t.whatPeopleSay;
                unfreezeSize(h2);
            }, 100);
        }
        const quotes = reviewsSection.querySelectorAll('.review-quote');
        [
            t.review1, t.review2, t.review3, t.review4, t.review5, t.review6
        ].forEach((txt, i) => {
            if (quotes[i]) {
                freezeSize(quotes[i]);
                setTimeout(() => {
                    quotes[i].innerHTML = txt;
                    unfreezeSize(quotes[i]);
                }, 100);
            }
        });
    }

    // Contact section
    const contactBox = document.querySelector('.info-box:nth-child(1)');
    if (contactBox) {
        const h3 = contactBox.querySelector('h3');
        if (h3) {
            freezeSize(h3);
            setTimeout(() => {
                h3.innerHTML = t.contactMe;
                unfreezeSize(h3);
            }, 100);
        }
        const p = contactBox.querySelector('p');
        if (p) {
            freezeSize(p);
            setTimeout(() => {
                p.innerHTML = t.contactMsg;
                unfreezeSize(p);
            }, 100);
        }
        const btn = contactBox.querySelector('.info-button');
        if (btn) {
            freezeSize(btn);
            setTimeout(() => {
                btn.innerHTML = t.emailMe;
                unfreezeSize(btn);
            }, 100);
        }
    }
    const resumeBox = document.querySelector('.info-box:nth-child(2)');
    if (resumeBox) {
        const h3 = resumeBox.querySelector('h3');
        if (h3) {
            freezeSize(h3);
            setTimeout(() => {
                h3.innerHTML = t.downloadResume;
                unfreezeSize(h3);
            }, 100);
        }
        const p = resumeBox.querySelector('p');
        if (p) {
            freezeSize(p);
            setTimeout(() => {
                p.innerHTML = t.resumeText;
                unfreezeSize(p);
            }, 100);
        }
        const btn = resumeBox.querySelector('.info-button');
        if (btn) {
            freezeSize(btn);
            setTimeout(() => {
                btn.innerHTML = t.downloadResumeBtn;
                unfreezeSize(btn);
            }, 100);
        }
    }

    // Project popup
    const popupTitle = document.getElementById('popupTitle');
    if (popupTitle) {
        freezeSize(popupTitle);
        setTimeout(() => {
            popupTitle.innerHTML = t.projectSoon;
            unfreezeSize(popupTitle);
        }, 100);
    }
    const popupDetails = document.getElementById('popupDetails');
    if (popupDetails) {
        const p = popupDetails.querySelector('p');
        if (p) {
            freezeSize(p);
            setTimeout(() => {
                p.innerHTML = t.projectSoonDetails;
                unfreezeSize(p);
            }, 100);
        }
        // genre/short info left as is
    }

    // --- Popup: Comments, Submit, No Comments, etc. ---
    // Comment form in popup
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        const h3 = commentForm.querySelector('h3');
        if (h3) {
            freezeSize(h3);
            setTimeout(() => {
                h3.innerHTML = t.leaveComment;
                unfreezeSize(h3);
            }, 100);
        }
        const textarea = commentForm.querySelector('textarea');
        if (textarea) textarea.placeholder = t.leaveComment;
        const btn = commentForm.querySelector('button');
        if (btn) {
            freezeSize(btn);
            setTimeout(() => {
                btn.innerHTML = t.submit;
                unfreezeSize(btn);
            }, 100);
        }
    }
    // Comments section in popup
    const commentsSection = document.getElementById('commentsSection');
    if (commentsSection) {
        const h4 = commentsSection.querySelector('h4');
        if (h4) {
            freezeSize(h4);
            setTimeout(() => {
                h4.innerHTML = t.comments;
                unfreezeSize(h4);
            }, 100);
        }
        const noCommentsMsg = document.getElementById('noCommentsMsg');
        if (noCommentsMsg) {
            freezeSize(noCommentsMsg);
            setTimeout(() => {
                noCommentsMsg.innerHTML = t.noComments;
                unfreezeSize(noCommentsMsg);
            }, 100);
        }
    }

    // Footer links
    const navKeys = ['about', 'skills', 'projects', 'reviews', 'contacts'];
    document.querySelectorAll('.footer-links li a').forEach((a, i) => {
        if (navKeys[i] && t[navKeys[i]]) {
            freezeSize(a);
            setTimeout(() => {
                a.textContent = t[navKeys[i]];
                unfreezeSize(a);
            }, 100);
        }
    });
}

// Auto-detect or default language
function detectBrowserLang() {
    const nav = window.navigator;
    const langs = (nav.languages && nav.languages.length) ? nav.languages : [nav.language || nav.userLanguage || 'en'];
    // Supported language codes
    const supported = ['en', 'ru', 'pl', 'ua'];
    for (let l of langs) {
        l = l.toLowerCase();
        // Try full match
        if (supported.includes(l)) return l;
        // Try first two letters
        if (supported.includes(l.slice(0, 2))) return l.slice(0, 2);
    }
    return 'en';
}

const defaultLang = detectBrowserLang();
let currentLang = localStorage.getItem('siteLang') || defaultLang;
setLanguage(currentLang);

// Listen for language switch
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        if (lang !== currentLang) {
            currentLang = lang;
            localStorage.setItem('siteLang', lang);
            setLanguage(lang);
        }
    });
});
