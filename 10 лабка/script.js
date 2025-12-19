// 1. База даних для всіх 7 маршрутів
const tourData = {
    'elbrus': { title: 'Сходження на Ельбрус', text: 'Ельбрус — найвища точка Європи. Випробуйте себе на міцність серед вічних снігів Кавказу.' },
    'crimea': { title: 'Похід по Криму', text: 'Від кримських каньонів до морського узбережжя. Найкращий маршрут для любителів різноманіття.' },
    'altai': { title: 'Мандрівка по Алтаю', text: 'Край тисячі озер та високих кедрів. Справжня експедиція у дику природу.' },
    'carpathians': { title: 'Тур по Карпатах', text: 'Рідні гори, затишні полонини та гостинність гуцульського краю.' },
    'alps': { title: 'Альпійська пригода', text: 'Трекінг світового рівня з видом на Монблан та ідеальним сервісом у гірських хатинах.' },
    'caucasus': { title: 'Кавказькі стежки', text: 'Дикі перевали, бурхливі річки та незабутні ночівлі під величезними зорями.' },
    'water': { title: 'Водний похід', text: 'Сплав річками, що дарує драйв, командну роботу та неймовірні емоції на воді.' }
};

const modal = document.getElementById("tourModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementsByClassName("close-modal")[0];

// 2. Функція для відкриття вікна
document.querySelectorAll('.tour-btn').forEach(button => {
    button.onclick = function(e) {
        e.preventDefault();
        const tourId = this.getAttribute('data-tour');
        const data = tourData[tourId];
        
        if (data) {
            // Створюємо вміст вікна з кнопкою "Забронювати"
            modalBody.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.text}</p>
                <button id="bookNow" class="search-btn" style="margin-top: 25px;">ЗАБРОНЮВАТИ</button>
            `;
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Зупиняємо скрол фону

            // 3. Логіка для кнопки "ЗАБРОНЮВАТИ" всередині модального вікна
            document.getElementById('bookNow').onclick = function() {
                modal.style.display = "none"; // Закриваємо вікно
                document.body.style.overflow = "auto"; // Повертаємо скрол
                
                // Плавно скролимо до секції контактів
                document.getElementById('contacts').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            };
        }
    }
});

// Закриття вікна на "хрестик" або клік поза вікном
closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};