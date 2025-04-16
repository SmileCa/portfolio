// Simplified smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById(anchor.getAttribute('href').substring(1))?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Unified DOMContentLoaded and load events
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu ul');
    document.addEventListener('click', e => {
        if (!menu.contains(e.target)) menu.classList.remove('open');
    });

    const loadingScreen = document.getElementById('loadingScreen');
    window.addEventListener('load', () => {
        loadingScreen?.classList.add('hidden');
        setTimeout(() => loadingScreen?.remove(), 1000);
    });

    // Постепенная загрузка секций (по одной с задержкой)
    const sections = Array.from(document.querySelectorAll('section'));
    sections.forEach(section => section.classList.add('hidden'));
    function showSectionSequentially(index = 0) {
        if (index >= sections.length) return;
        sections[index].classList.add('visible');
        setTimeout(() => showSectionSequentially(index + 1), 250); // задержка между секциями
    }
    showSectionSequentially();

    // Открытие popup по клику на карточку проекта
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', e => {
            // Не открывать popup, если клик по вложенной кнопке (на случай будущих изменений)
            if (e.target.closest('button')) return;
            const projectId = card.getAttribute('data-project');
            openProjectPopup(projectId);
        });
    });

    // Popup close
    document.getElementById('closePopup').onclick = closeProjectPopup;
    document.getElementById('projectPopup').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeProjectPopup();
    });

    // Optional: close popup on Esc
    document.addEventListener('keydown', e => {
        if (e.key === "Escape") closeProjectPopup();
    });

    // Reviewer profile popup open
    document.querySelectorAll('.reviewer-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const reviewerId = link.getAttribute('data-reviewer');
            openReviewerProfile(reviewerId);
        });
    });

    // Reviewer profile popup close
    document.getElementById('closeReviewerPopup').onclick = closeReviewerProfile;
    document.getElementById('reviewerProfilePopup').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeReviewerProfile();
    });

    document.addEventListener('keydown', e => {
        if (e.key === "Escape") closeReviewerProfile();
    });
});

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

// Get current language from lang.js (reactive)
function getCurrentLang() {
    // Always get the latest value from window.currentLang
    return window.currentLang || 'en';
}

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

    // Добавляем поле для имени, если его нет
    if (!commentName) {
        commentName = document.createElement('input');
        commentName.type = 'text';
        commentName.id = 'commentName';
        // Перевод плейсхолдера
        const lang = getCurrentLang();
        commentName.placeholder = {
            en: 'Your name (optional)',
            ru: 'Ваше имя (необязательно)',
            pl: 'Twoje imię (opcjonalnie)',
            ua: "Ваше ім'я (необов'язково)"
        }[lang] || 'Your name (optional)';
        commentName.className = 'comment-name-input';
        commentForm.insertBefore(commentName, commentText);
    } else {
        // Обновить плейсхолдер при смене языка
        const lang = getCurrentLang();
        commentName.placeholder = {
            en: 'Your name (optional)',
            ru: 'Ваше имя (необязательно)',
            pl: 'Twoje imię (opcjonalnie)',
            ua: "Ваше ім'я (необов'язково)"
        }[lang] || 'Your name (optional)';
    }

    // Set project info with translation
    const lang = getCurrentLang();
    const data = projectData[projectId] || {};
    title.textContent = (data.title && data.title[lang]) || (data.title && data.title['en']) || "Project";
    details.querySelector('p').textContent = (data.details && data.details[lang]) || (data.details && data.details['en']) || "";
    genre.textContent = (data.genre && data.genre[lang]) || (data.genre && data.genre['en']) || "Coming soon";
    short.textContent = (data.short && data.short[lang]) || (data.short && data.short['en']) || "Coming soon";

    // Load comments from localStorage
    const commentsKey = `project_comments_${projectId}`;
    let comments = [];
    try {
        comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
    } catch {}
    commentsList.innerHTML = "";
    if (comments.length === 0) {
        noCommentsMsg.style.display = "block";
    } else {
        noCommentsMsg.style.display = "none";
        comments.forEach(c => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="comment-header">
                    <span class="comment-author">${c.name ? c.name : "Anonymous"}</span>
                    <span class="comment-date">${c.date ? c.date : ""}</span>
                </div>
                <div class="comment-text">${c.text}</div>
            `;
            commentsList.appendChild(li);
        });
    }

    // Handle comment submit
    commentForm.onsubmit = function(e) {
        e.preventDefault();
        const text = commentText.value.trim();
        const nameVal = commentName.value.trim();
        if (text) {
            const commentObj = {
                text,
                name: nameVal,
                date: new Date().toLocaleString()
            };
            comments.push(commentObj);
            localStorage.setItem(commentsKey, JSON.stringify(comments));
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="comment-header">
                    <span class="comment-author">${commentObj.name ? commentObj.name : "Anonymous"}</span>
                    <span class="comment-date">${commentObj.date}</span>
                </div>
                <div class="comment-text">${commentObj.text}</div>
            `;
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
    const popup = document.getElementById('projectPopup');
    popup.classList.remove('active');
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
        details.innerHTML = `
            <div class="reviewer-profile-info">
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
            <p>${profile.details[lang] || profile.details['en']}</p>
        `;
        name.textContent = profile.name[lang] || profile.name['en'];
    } else {
        details.innerHTML = `<p>${{
            en: "No profile information available.",
            ru: "Нет информации о профиле.",
            pl: "Brak informacji o profilu.",
            ua: "Немає інформації про профіль."
        }[lang] || "No profile information available."}</p>`;
        name.textContent = {
            en: "Reviewer",
            ru: "Рецензент",
            pl: "Recenzent",
            ua: "Рецензент"
        }[lang] || "Reviewer";
    }
    popup.classList.add('active');
    document.body.classList.add('popup-open');
}

function closeReviewerProfile() {
    const popup = document.getElementById('reviewerProfilePopup');
    popup.classList.remove('active');
    document.body.classList.remove('popup-open');
}

// --- Language change observer for popups ---
(function () {
    // Helper to get the current open projectId (if any)
    function getOpenProjectId() {
        // Try to find the last opened project-card (by data-project) that matches the popup content
        const popup = document.getElementById('projectPopup');
        if (!popup || !popup.classList.contains('active')) return null;
        // Try to find the projectId from the popup title by matching with projectData
        const title = document.getElementById('popupTitle');
        if (!title) return null;
        const lang = getCurrentLang();
        for (const [id, data] of Object.entries(projectData)) {
            if ((data.title && (data.title[lang] === title.textContent || data.title['en'] === title.textContent))) {
                return id;
            }
        }
        // Fallback: try to find the first .project-card.active or .project-card[data-project]
        const card = document.querySelector('.project-card.active[data-project]') ||
            document.querySelector('.project-card[data-project]');
        return card ? card.getAttribute('data-project') : null;
    }

    // Helper to get the open reviewerId (if any)
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

    // Listen for language changes and update popups if open
    let lastLang = getCurrentLang();
    setInterval(() => {
        if (window.currentLang !== lastLang) {
            lastLang = window.currentLang;
            // Update project popup if open
            const projectId = getOpenProjectId();
            if (projectId) openProjectPopup(projectId);
            // Update reviewer popup if open
            const reviewerId = getOpenReviewerId();
            if (reviewerId) openReviewerProfile(reviewerId);
        }
    }, 200);
})();
