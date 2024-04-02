const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-dot__hint');


// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
	btn.addEventListener('click', function (e) {
		e.stopPropagation();

		//Hide all hints
		for (let hint of infoHints) {
			hint.classList.add('none');
		}

		//Show current hint
		this.parentNode.querySelector('.info-dot__hint').classList.toggle('none');
	});
};

// Закрываем подсказки при клике по всему документу (странице)
document.addEventListener('click', function () {
	for (let hint of infoHints) {
		hint.classList.add('none');
	}
});

//Запрещаем всплытие события клика при клике на подсказки
infoHints.forEach(hint => hint.addEventListener('click', event => event.stopPropagation()));


//! Свайпер слайдер
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	// loop: true,
	freeMode: true,

	slidesPerView: 1,
	spaceBetween: 42,

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		940: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 42,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},

});


//! Добавление класса на табы
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

// Перебираем каждую кнопку и назначаем обработчик события клика
tabsBtns.forEach(btn => {
	btn.addEventListener('click', function () {
		// Удаляем класс tab-controls__btn--active у всех кнопок
		tabsBtns.forEach(b => {
			b.classList.remove('tab-controls__btn--active');
		});

		// Добавляем класс tab-controls__btn--active только к текущей нажатой кнопке
		this.classList.add('tab-controls__btn--active');

		// Отобразить нужные товары и скрыть ненужные
		for (let product of tabsProducts) {
			// Если то, что записано в атрибуте у продукта соответствует тому, что записано в активной кнопке
			if (product.dataset.tabValue === this.dataset.tab) {
				product.classList.remove('none');
			} else {
				product.classList.add('none');
			}
		}
		// Обновление свайпера
		swiper.update();
	});
});


//! Мобильная навигация (бургер)
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

// open
mobileNavOpenBtn.onclick = () => {
	mobileNav.classList.add('mobile-nav-wrapper--open');
};

// close
mobileNavCloseBtn.onclick = () => {
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};