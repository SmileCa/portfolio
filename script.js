// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById(anchor.getAttribute('href').substring(1))?.scrollIntoView({ behavior: 'smooth' });
    });
});

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu ul');
    document.addEventListener('click', e => { if (!menu.contains(e.target)) menu.classList.remove('open'); });

    const loadingScreen = document.getElementById('loadingScreen');
    window.addEventListener('load', () => {
        loadingScreen?.classList.add('hidden');
        setTimeout(() => loadingScreen?.remove(), 1000);
    });

    // Sequential section fade-in
    const sections = Array.from(document.querySelectorAll('section'));
    sections.forEach(section => section.classList.add('hidden'));
    (function showSectionSequentially(i = 0) {
        if (i >= sections.length) return;
        sections[i].classList.add('visible');
        setTimeout(() => showSectionSequentially(i + 1), 250);
    })();

    // Project popup
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', e => {
            if (e.target.closest('button')) return;
            openProjectPopup(card.getAttribute('data-project'));
        });
    });
    document.getElementById('closePopup').onclick = closeProjectPopup;
    document.getElementById('projectPopup').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeProjectPopup();
    });
    document.addEventListener('keydown', e => { if (e.key === "Escape") closeProjectPopup(); });

    // Reviewer profile popup
    document.querySelectorAll('.reviewer-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            openReviewerProfile(link.getAttribute('data-reviewer'));
        });
    });
    document.getElementById('closeReviewerPopup').onclick = closeReviewerProfile;
    document.getElementById('reviewerProfilePopup').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeReviewerProfile();
    });
    document.addEventListener('keydown', e => { if (e.key === "Escape") closeReviewerProfile(); });
});

// Visitor Counter
(function () {
    function getKey(type) {
        const now = new Date();
        if (type === 'day') return `visitors_day_${now.getFullYear()}_${now.getMonth() + 1}_${now.getDate()}`;
        if (type === 'week') {
            const firstJan = new Date(now.getFullYear(), 0, 1);
            const days = Math.floor((now - firstJan) / 86400000);
            const week = Math.ceil((days + firstJan.getDay() + 1) / 7);
            return `visitors_week_${now.getFullYear()}_${week}`;
        }
        return `visitors_month_${now.getFullYear()}_${now.getMonth() + 1}`;
    }
    let visitorId = localStorage.getItem('visitor_id');
    if (!visitorId) {
        visitorId = Math.random().toString(36).substr(2, 12) + Date.now();
        localStorage.setItem('visitor_id', visitorId);
    }
    function updateVisitorSet(key) {
        let set = [];
        try { set = JSON.parse(localStorage.getItem(key)) || []; } catch {}
        if (!set.includes(visitorId)) {
            set.push(visitorId);
            localStorage.setItem(key, JSON.stringify(set));
        }
        return set.length;
    }
    const dayCount = updateVisitorSet(getKey('day'));
    const weekCount = updateVisitorSet(getKey('week'));
    const monthCount = updateVisitorSet(getKey('month'));
    window.addEventListener('DOMContentLoaded', () => {
        let el = document.getElementById('visitorStats');
        if (el) {
            el.innerHTML = `<span style="font-weight:600;">Visitors:</span>
                <span title="Unique visitors today">${dayCount} today</span> &middot;
                <span title="Unique visitors this week">${weekCount} week</span> &middot;
                <span title="Unique visitors this month">${monthCount} month</span>`;
        }
    });
})();

// --- Project Popup Logic ---
const projectData = {
    1: {
        title: { en: "Project Coming Soon", ru: "Проект скоро появится", pl: "Projekt wkrótce", ua: "Проєкт скоро з'явиться" },
        details: { en: "Details about this project will be added soon. Stay tuned!", ru: "Информация о проекте будет добавлена позже. Следите за обновлениями!", pl: "Szczegóły projektu pojawią się wkrótce. Bądź na bieżąco!", ua: "Інформацію про проєкт буде додано пізніше. Слідкуйте за оновленнями!" },
        genre: { en: "Coming soon", ru: "Скоро", pl: "Wkrótce", ua: "Скоро" },
        short: { en: "Short info will be available soon.", ru: "Краткая информация появится позже.", pl: "Krótka informacja pojawi się wkrótce.", ua: "Коротка інформація з'явиться пізніше." }
    },
    2: {
        title: { en: "Project Coming Soon", ru: "Проект скоро появится", pl: "Projekt wkrótce", ua: "Проєкт скоро з'явиться" },
        details: { en: "Details about this project will be added soon. Stay tuned!", ru: "Информация о проекте будет добавлена позже. Следите за обновлениями!", pl: "Szczegóły projektu pojawią się wkrótce. Bądź na bieżąco!", ua: "Інформацію про проєкт буде додано пізніше. Слідкуйте за оновленнями!" },
        genre: { en: "Coming soon", ru: "Скоро", pl: "Wkrótce", ua: "Скоро" },
        short: { en: "Short info will be available soon.", ru: "Краткая информация появится позже.", pl: "Krótka informacja pojawi się wkrótce.", ua: "Коротка інформація з'явиться пізніше." }
    },
    3: {
        title: { en: "Project Coming Soon", ru: "Проект скоро появится", pl: "Projekt wkrótce", ua: "Проєкт скоро з'явиться" },
        details: { en: "Details about this project will be added soon. Stay tuned!", ru: "Информация о проекте будет добавлена позже. Следите за обновлениями!", pl: "Szczegóły projektu pojawią się wkrótce. Bądź na bieżąco!", ua: "Інформацію про проєкт буде додано пізніше. Слідкуйте за оновленнями!" },
        genre: { en: "Coming soon", ru: "Скоро", pl: "Wkrótce", ua: "Скоро" },
        short: { en: "Short info will be available soon.", ru: "Краткая информация появится позже.", pl: "Krótka informacja pojawi się wkrótce.", ua: "Коротка інформація з'явиться пізніше." }
    },
    4: {
        title: { en: "Project Coming Soon", ru: "Проект скоро появится", pl: "Projekt wkrótce", ua: "Проєкт скоро з'явиться" },
        details: { en: "Details about this project will be added soon. Stay tuned!", ru: "Информация о проекте будет добавлена позже. Следите за обновлениями!", pl: "Szczegóły projektu pojawią się wkrótce. Bądź na bieżąco!", ua: "Інформацію про проєкт буде додано пізніше. Слідкуйте за оновленнями!" },
        genre: { en: "Coming soon", ru: "Скоро", pl: "Wkrótce", ua: "Скоро" },
        short: { en: "Short info will be available soon.", ru: "Краткая информация появится позже.", pl: "Krótka informacja pojawi się wkrótce.", ua: "Коротка інформація з'явиться пізніше." }
    },
    5: {
        title: { en: "Project Coming Soon", ru: "Проект скоро появится", pl: "Projekt wkrótce", ua: "Проєкт скоро з'явиться" },
        details: { en: "Details about this project will be added soon. Stay tuned!", ru: "Информация о проекте будет добавлена позже. Следите за обновлениями!", pl: "Szczegóły projektu pojawią się wkrótce. Bądź na bieżąco!", ua: "Інформацію про проєкт буде додано пізніше. Слідкуйте за оновленнями!" },
        genre: { en: "Coming soon", ru: "Скоро", pl: "Wkrótce", ua: "Скоро" },
        short: { en: "Short info will be available soon.", ru: "Краткая информация появится позже.", pl: "Krótka informacja pojawi się wkrótce.", ua: "Коротка інформація з'явиться пізніше." }
    },
    6: {
        title: { en: "Project Coming Soon", ru: "Проект скоро появится", pl: "Projekt wkrótce", ua: "Проєкт скоро з'явиться" },
        details: { en: "Details about this project will be added soon. Stay tuned!", ru: "Информация о проекте будет добавлена позже. Следите за обновлениями!", pl: "Szczegóły projektu pojawią się wkrótce. Bądź na bieżąco!", ua: "Інформацію про проєкт буде додано пізніше. Слідкуйте за оновленнями!" },
        genre: { en: "Coming soon", ru: "Скоро", pl: "Wkrótce", ua: "Скоро" },
        short: { en: "Short info will be available soon.", ru: "Краткая информация появится позже.", pl: "Krótka informacja pojawi się wkrótce.", ua: "Коротка інформація з'явиться пізніше." }
    }
};

function getCurrentLang() { return window.currentLang || 'en'; }

function openProjectPopup(projectId) {
    const popup = document.getElementById('projectPopup');
    const title = document.getElementById('popupTitle');
    const details = document.getElementById('popupDetails');
    const genre = document.getElementById('popupGenre');
    const short = document.getElementById('popupShort');
    const commentsList = document.getElementById('commentsList');
    const noCommentsMsg = document.getElementById('noCommentsMsg');
    const commentForm = document.getElementById('commentForm');
    const commentText = document.getElementById('commentText');
    let commentName = document.getElementById('commentName');
    const lang = getCurrentLang();

    if (!commentName) {
        commentName = document.createElement('input');
        commentName.type = 'text';
        commentName.id = 'commentName';
        commentName.placeholder = {
            en: 'Your name (optional)', ru: 'Ваше имя (необязательно)', pl: 'Twoje imię (opcjonalnie)', ua: "Ваше ім'я (необов'язково)"
        }[lang] || 'Your name (optional)';
        commentName.className = 'comment-name-input';
        commentForm.insertBefore(commentName, commentText);
    } else {
        commentName.placeholder = {
            en: 'Your name (optional)', ru: 'Ваше имя (необязательно)', pl: 'Twoje imię (opcjonalnie)', ua: "Ваше ім'я (необов'язково)"
        }[lang] || 'Your name (optional)';
    }

    const data = projectData[projectId] || {};
    title.textContent = (data.title && data.title[lang]) || (data.title && data.title['en']) || "Project";
    details.querySelector('p').textContent = (data.details && data.details[lang]) || (data.details && data.details['en']) || "";
    genre.textContent = (data.genre && data.genre[lang]) || (data.genre && data.genre['en']) || "Coming soon";
    short.textContent = (data.short && data.short[lang]) || (data.short && data.short['en']) || "Coming soon";

    // Comments
    const commentsKey = `project_comments_${projectId}`;
    let comments = [];
    try { comments = JSON.parse(localStorage.getItem(commentsKey)) || []; } catch {}
    commentsList.innerHTML = "";
    if (comments.length === 0) {
        noCommentsMsg.style.display = "block";
    } else {
        noCommentsMsg.style.display = "none";
        comments.forEach(c => {
            const li = document.createElement('li');
            li.innerHTML = `<div class="comment-header">
                    <span class="comment-author">${c.name ? c.name : "Anonymous"}</span>
                    <span class="comment-date">${c.date ? c.date : ""}</span>
                </div>
                <div class="comment-text">${c.text}</div>`;
            commentsList.appendChild(li);
        });
    }
    commentForm.onsubmit = function(e) {
        e.preventDefault();
        const text = commentText.value.trim();
        const nameVal = commentName.value.trim();
        if (text) {
            const commentObj = { text, name: nameVal, date: new Date().toLocaleString() };
            comments.push(commentObj);
            localStorage.setItem(commentsKey, JSON.stringify(comments));
            const li = document.createElement('li');
            li.innerHTML = `<div class="comment-header">
                    <span class="comment-author">${commentObj.name ? commentObj.name : "Anonymous"}</span>
                    <span class="comment-date">${commentObj.date}</span>
                </div>
                <div class="comment-text">${commentObj.text}</div>`;
            commentsList.appendChild(li);
            commentText.value = "";
            commentName.value = "";
            noCommentsMsg.style.display = "none";
        }
    };
    popup.classList.add('active');
    document.body.classList.add('popup-open');
}
function closeProjectPopup() {
    document.getElementById('projectPopup').classList.remove('active');
    document.body.classList.remove('popup-open');
}

// --- Reviewer Profile Logic ---
const reviewerProfiles = {
    "alex-johnson": {
        name: { en: "Alex Johnson", ru: "Алекс Джонсон", pl: "Alex Johnson", ua: "Алекс Джонсон" },
        position: { en: "Game Developer", ru: "Разработчик игр", pl: "Twórca gier", ua: "Розробник ігор" },
        project: { en: "MuOnline Server Suite", ru: "MuOnline Server Suite", pl: "MuOnline Server Suite", ua: "MuOnline Server Suite" },
        details: {
            en: "Game developer and MMORPG enthusiast. Loves MuOnline and server-side coding.",
            ru: "Разработчик игр и энтузиаст MMORPG. Любит MuOnline и серверное программирование.",
            pl: "Twórca gier i fan MMORPG. Uwielbia MuOnline i kodowanie po stronie serwera.",
            ua: "Розробник ігор і ентузіаст MMORPG. Любить MuOnline і серверне програмування."
        }
    },
    "maria-lee": {
        name: { en: "Maria Lee", ru: "Мария Ли", pl: "Maria Lee", ua: "Марія Лі" },
        position: { en: "Web Developer", ru: "Веб-разработчик", pl: "Web Developer", ua: "Веб-розробник" },
        project: { en: "Game Server Dashboard", ru: "Game Server Dashboard", pl: "Game Server Dashboard", ua: "Game Server Dashboard" },
        details: {
            en: "Web developer and gamer. Enjoys working with server infrastructure.",
            ru: "Веб-разработчик и геймер. Любит работать с серверной инфраструктурой.",
            pl: "Web developer i gracz. Lubi pracować z infrastrukturą serwerową.",
            ua: "Веб-розробник і геймер. Любить працювати з серверною інфраструктурою."
        }
    },
    "ivan-petrov": {
        name: { en: "Ivan Petrov", ru: "Иван Петров", pl: "Ivan Petrov", ua: "Іван Петров" },
        position: { en: "Community Moderator", ru: "Модератор сообщества", pl: "Moderator społeczności", ua: "Модератор спільноти" },
        project: { en: "MuOnline Configurator", ru: "MuOnline Configurator", pl: "MuOnline Configurator", ua: "MuOnline Configurator" },
        details: {
            en: "MMORPG community moderator. Specializes in MuOnline server configs.",
            ru: "Модератор MMORPG-сообщества. Специалист по настройке серверов MuOnline.",
            pl: "Moderator społeczności MMORPG. Specjalizuje się w konfiguracji serwerów MuOnline.",
            ua: "Модератор MMORPG-спільноти. Спеціалізується на налаштуванні серверів MuOnline."
        }
    },
    "sophie-muller": {
        name: { en: "Sophie Müller", ru: "Софи Мюллер", pl: "Sophie Müller", ua: "Софі Мюллер" },
        position: { en: "Backend Developer", ru: "Бэкенд-разработчик", pl: "Backend Developer", ua: "Бекенд-розробник" },
        project: { en: "MMORPG API Gateway", ru: "MMORPG API Gateway", pl: "MMORPG API Gateway", ua: "MMORPG API Gateway" },
        details: {
            en: "Backend developer and gaming project contributor.",
            ru: "Бэкенд-разработчик и участник игровых проектов.",
            pl: "Backend developer i współtwórca projektów gamingowych.",
            ua: "Бекенд-розробник і учасник ігрових проектів."
        }
    },
    "chen-wei": {
        name: { en: "Chen Wei", ru: "Чен Вэй", pl: "Chen Wei", ua: "Чен Вей" },
        position: { en: "Database Specialist", ru: "Специалист по базам данных", pl: "Specjalista ds. baz danych", ua: "Фахівець з баз даних" },
        project: { en: "Game Data Platform", ru: "Game Data Platform", pl: "Game Data Platform", ua: "Game Data Platform" },
        details: {
            en: "Database expert and game server backend specialist.",
            ru: "Эксперт по базам данных и бэкенду игровых серверов.",
            pl: "Ekspert od baz danych i backendu serwerów gier.",
            ua: "Експерт з баз даних і бекенду ігрових серверів."
        }
    },
    "lucas-silva": {
        name: { en: "Lucas Silva", ru: "Лукас Силва", pl: "Lucas Silva", ua: "Лукас Сілва" },
        position: { en: "Aspiring Game Developer", ru: "Начинающий разработчик игр", pl: "Początkujący twórca gier", ua: "Початківець розробник ігор" },
        project: { en: "MMORPG Fan Portal", ru: "MMORPG Fan Portal", pl: "MMORPG Fan Portal", ua: "MMORPG Fan Portal" },
        details: {
            en: "MMORPG fan and aspiring game developer.",
            ru: "Фанат MMORPG и начинающий разработчик игр.",
            pl: "Fan MMORPG i początkujący twórca gier.",
            ua: "Фанат MMORPG і початківець розробник ігор."
        }
    }
};

function openReviewerProfile(reviewerId) {
    const popup = document.getElementById('reviewerProfilePopup');
    const name = document.getElementById('reviewerProfileName');
    const details = document.getElementById('reviewerProfileDetails');
    const lang = getCurrentLang();
    const profile = reviewerProfiles[reviewerId];
    if (profile) {
        details.innerHTML = `<div class="reviewer-profile-info">
                <div class="review-avatar"></div>
                <div>
                    <div class="reviewer-profile-position"><strong>${{
                        en: "Position:", ru: "Должность:", pl: "Stanowisko:", ua: "Посада:"
                    }[lang] || "Position:"}</strong> ${profile.position[lang] || profile.position['en']}</div>
                    <div class="reviewer-profile-project"><strong>${{
                        en: "Project:", ru: "Проект:", pl: "Projekt:", ua: "Проєкт:"
                    }[lang] || "Project:"}</strong> ${profile.project[lang] || profile.project['en']}</div>
                </div>
            </div>
            <p>${profile.details[lang] || profile.details['en']}</p>`;
        name.textContent = profile.name[lang] || profile.name['en'];
    } else {
        details.innerHTML = `<p>${{
            en: "No profile information available.",
            ru: "Нет информации о профиле.",
            pl: "Brak informacji o profilu.",
            ua: "Немає інформації про профіль."
        }[lang] || "No profile information available."}</p>`;
        name.textContent = {
            en: "Reviewer", ru: "Рецензент", pl: "Recenzent", ua: "Рецензент"
        }[lang] || "Reviewer";
    }
    popup.classList.add('active');
    document.body.classList.add('popup-open');
}
function closeReviewerProfile() {
    document.getElementById('reviewerProfilePopup').classList.remove('active');
    document.body.classList.remove('popup-open');
}

// --- Language change observer for popups ---
(function () {
    function getOpenProjectId() {
        const popup = document.getElementById('projectPopup');
        if (!popup || !popup.classList.contains('active')) return null;
        const title = document.getElementById('popupTitle');
        if (!title) return null;
        const lang = getCurrentLang();
        for (const [id, data] of Object.entries(projectData)) {
            if ((data.title && (data.title[lang] === title.textContent || data.title['en'] === title.textContent))) {
                return id;
            }
        }
        const card = document.querySelector('.project-card.active[data-project]') ||
            document.querySelector('.project-card[data-project]');
        return card ? card.getAttribute('data-project') : null;
    }
    function getOpenReviewerId() {
        const popup = document.getElementById('reviewerProfilePopup');
        if (!popup || !popup.classList.contains('active')) return null;
        const name = document.getElementById('reviewerProfileName');
        if (!name) return null;
        const lang = getCurrentLang();
        for (const [id, profile] of Object.entries(reviewerProfiles)) {
            if (profile.name[lang] === name.textContent || profile.name['en'] === name.textContent) {
                return id;
            }
        }
        return null;
    }
    let lastLang = getCurrentLang();
    setInterval(() => {
        if (window.currentLang !== lastLang) {
            lastLang = window.currentLang;
            const projectId = getOpenProjectId();
            if (projectId) openProjectPopup(projectId);
            const reviewerId = getOpenReviewerId();
            if (reviewerId) openReviewerProfile(reviewerId);
        }
    }, 200);
})();
