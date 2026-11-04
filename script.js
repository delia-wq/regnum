// ===== БОКОВАЯ НАВИГАЦИЯ =====
const menuToggle = document.getElementById('menu-toggle');
const sideNav = document.getElementById('side-nav');
const sideClose = document.getElementById('side-close');
const overlay = document.getElementById('overlay');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sideNav.classList.add('open');
        overlay.classList.add('open');
    });
}

if (sideClose) {
    sideClose.addEventListener('click', () => {
        sideNav.classList.remove('open');
        overlay.classList.remove('open');
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        sideNav.classList.remove('open');
        overlay.classList.remove('open');
    });
}

// ===== ИСТОРИЯ: ОДНА ФОТОГРАФИЯ =====
const stories = {
    story1: {
        title: "Печать Regnum",
        text: "В одной закрытой коллекции хранится предмет, который называют Золотой печатью Regnum. На ней выгравированы четыре символа — и ни один из них не встречается в других источниках. Тот, кто расшифрует их, получит ключ к тому, что когда-то называлось Regnum — не страной, а правом. Правом устанавливать порядок. Печать не имеет известного происхождения. Её находили в описях, которых не должно существовать, в переплётах книг, которые никто не открывал, в координатах, которые вели в пустоту. Каждый раз рядом с четырьмя символами стояло одно и то же слово — Regnum. Метка. Мы не расшифровали печать. Но мы создали структуру, которая повторяет её форму: четыре направления, четыре набора правил, четыре уровня допуска. Regnum — это не история о прошлом. Это инструкция, которую мы выполняем, не зная, кто её написал."
    }
};

const photoItems = document.querySelectorAll('.photo-item');
const modal = document.getElementById('story-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalClose = document.querySelector('.modal-close');

if (photoItems.length && modal) {
    photoItems.forEach(item => {
        item.addEventListener('click', () => {
            const storyKey = item.getAttribute('data-story');
            const story = stories[storyKey];
            if (story) {
                modalTitle.textContent = story.title;
                modalText.textContent = story.text;
                modal.classList.add('open');
            }
        });
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('open');
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal) modal.classList.remove('open');
        if (sideNav) sideNav.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
    }
});