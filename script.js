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

// ===== АРТЕФАКТЫ И ИСТОРИЯ =====
const stories = {
    story1: {
        title: "Золотая Печать",
        text: "Главный артефакт Regnum. Тяжелый перстень из темного золота с четырьмя гравировками. Считается, что оттиск этой печати невозможно подделать. Именно ею скрепляются самые важные указы клана и приговоры об изгнании. Пока печать цела — Regnum непоколебим."
    },
    story2: {
        title: "Венец Теней",
        text: "Говорят, первый правитель Regnum не носил короны из золота, ибо считал, что истинная власть не блестит на солнце. Он выковал этот обруч из осколков черного метеорита, упавшего в ту самую ночь, когда была создана Печать. Золотые прожилки на нем — это не украшение, а застывшая кровь тех, кто пытался оспорить его право на трон. Сейчас Венец хранится в чате REG, как символ незыблемой власти и абсолютного порядка."
    },
    story3: {
        title: "Часы «Молчание»",
        text: "Когда-то давно в Regnum царил хаос: участники спорили днями и ночами, и ни один закон не мог их остановить. Тогда первый Архивариус чата NUM создал эти Часы. Внутри них находится не песок, а пепел сожженных ложных клятв. Свойство артефакта ужасает: если перевернуть Часы во время самого жаркого спора, в реальности наступает абсолютная, мертвая тишина. Никто не может вымолвить ни слова, пока последняя песчинка не упадет вниз."
    },
    story4: {
        title: "Ключ от Архива",
        text: "Этот ключ никогда не открывал обычные двери. Он был выкован из малахита и древней бронзы для того, чтобы открывать «Архив» — место, где хранятся истинные имена всех участников клана. Рукоять ключа украшена узором, который меняется в зависимости от того, кто его держит. Если человек чист перед Печатью — узор становится светлым. Если в его мыслях есть предательство — малахит темнеет. Артефакт принадлежит чату AUR."
    },
    story5: {
        title: "Компас Пустоты",
        text: "История этого артефакта окутана мраком. Говорят, его нашли в тех самых «координатах, ведущих в пустоту», о которых упоминается в легенде о Золотой Печати. Вместо обычной стрелки в центр вставлен острый, как бритва, кристалл аметиста. Компас не указывает путь домой. Он указывает на ложь. Если владелец компаса смотрит на человека, который скрывает правду, кристалл начинает пульсировать фиолетовым светом. В чате UMBRA этот артефакт используют для ночных разговоров и психологических игр."
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
