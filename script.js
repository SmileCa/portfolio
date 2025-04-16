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
        title: "Project Coming Soon",
        details: "Details about this project will be added soon. Stay tuned!",
        genre: "Coming soon",
        short: "Short info will be available soon."
    },
    2: {
        title: "Project Coming Soon",
        details: "Details about this project will be added soon. Stay tuned!",
        genre: "Coming soon",
        short: "Short info will be available soon."
    },
    3: {
        title: "Project Coming Soon",
        details: "Details about this project will be added soon. Stay tuned!",
        genre: "Coming soon",
        short: "Short info will be available soon."
    },
    4: {
        title: "Project Coming Soon",
        details: "Details about this project will be added soon. Stay tuned!",
        genre: "Coming soon",
        short: "Short info will be available soon."
    },
    5: {
        title: "Project Coming Soon",
        details: "Details about this project will be added soon. Stay tuned!",
        genre: "Coming soon",
        short: "Short info will be available soon."
    },
    6: {
        title: "Project Coming Soon",
        details: "Details about this project will be added soon. Stay tuned!",
        genre: "Coming soon",
        short: "Short info will be available soon."
    }
};

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
        commentName.placeholder = 'Your name (optional)';
        commentName.className = 'comment-name-input';
        commentForm.insertBefore(commentName, commentText);
    }

    // Set project info
    const data = projectData[projectId] || {};
    title.textContent = data.title || "Project";
    details.querySelector('p').textContent = data.details || "";
    genre.textContent = data.genre || "Coming soon";
    short.textContent = data.short || "Coming soon";

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
        name: "Alex Johnson",
        photo: "",
        position: "Game Developer",
        project: "MuOnline Server Suite",
        details: "Game developer and MMORPG enthusiast. Loves MuOnline and server-side coding."
    },
    "maria-lee": {
        name: "Maria Lee",
        photo: "",
        position: "Web Developer",
        project: "Game Server Dashboard",
        details: "Web developer and gamer. Enjoys working with server infrastructure."
    },
    "ivan-petrov": {
        name: "Ivan Petrov",
        photo: "",
        position: "Community Moderator",
        project: "MuOnline Configurator",
        details: "MMORPG community moderator. Specializes in MuOnline server configs."
    },
    "sophie-muller": {
        name: "Sophie Müller",
        photo: "",
        position: "Backend Developer",
        project: "MMORPG API Gateway",
        details: "Backend developer and gaming project contributor."
    },
    "chen-wei": {
        name: "Chen Wei",
        photo: "",
        position: "Database Specialist",
        project: "Game Data Platform",
        details: "Database expert and game server backend specialist."
    },
    "lucas-silva": {
        name: "Lucas Silva",
        photo: "",
        position: "Aspiring Game Developer",
        project: "MMORPG Fan Portal",
        details: "MMORPG fan and aspiring game developer."
    }
};

function openReviewerProfile(reviewerId) {
    const popup = document.getElementById('reviewerProfilePopup');
    const name = document.getElementById('reviewerProfileName');
    const details = document.getElementById('reviewerProfileDetails');
    const profile = reviewerProfiles[reviewerId];
    if (profile) {
        details.innerHTML = `
            <div class="reviewer-profile-info">
                <div class="review-avatar"></div>
                <div>
                    <div class="reviewer-profile-position"><strong>Position:</strong> ${profile.position}</div>
                    <div class="reviewer-profile-project"><strong>Project:</strong> ${profile.project}</div>
                </div>
            </div>
            <p>${profile.details}</p>
        `;
        name.textContent = profile.name;
    } else {
        details.innerHTML = `<p>No profile information available.</p>`;
        name.textContent = "Reviewer";
    }
    popup.classList.add('active');
    document.body.classList.add('popup-open');
}

function closeReviewerProfile() {
    const popup = document.getElementById('reviewerProfilePopup');
    popup.classList.remove('active');
    document.body.classList.remove('popup-open');
}
