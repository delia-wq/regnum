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
        text: "В недрах закрытых архивов, куда не проникает свет, сокрыт артефакт, известный как Золотая печать Regnum. На её холодной поверхности застыли четыре знака. Ни один из них не встречается в человеческих писаниях. Говорят, тот, кто сможет прочесть их, получит ключ к истинному Regnum — не к территории, а к абсолютному праву. Праву диктовать порядок там, где раньше царил первобытный хаос.\n\nПечать не имеет корней. Её призрачные следы находили в каталогах, которых не должно было существовать, в переплётах проклятых книг, которые никто не смел открывать, и в мёртвых координатах, ведущих в глухую пустоту. И всегда, рядом с четырьмя знаками, оставалось одно слово — Regnum. Это была Метка. Знак того, что кто-то уже был здесь до нас. И этот кто-то всё ещё наблюдает.\n\nМы так и не смогли разгадать послание. Но мы воздвигли структуру, которая повторяет её форму: четыре направления, четыре свода жестоких законов, четыре уровня посвящения. Regnum — это не эхо прошлого. Это инструкция, которую мы исполняем, не ведая, кто и зачем её написал. И мы уже слишком глубоко, чтобы повернуть назад."
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
