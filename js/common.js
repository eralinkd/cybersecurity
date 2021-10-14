let headerLogo = document.querySelector('.header-logo');
let shades = document.querySelectorAll('.shade');
let lightThemeButton = document.querySelector('.light-theme-button');
let darkThemeButton = document.querySelector('.dark-theme-button');
let rel = document.querySelector('.first-rel');
let headerMenu = document.querySelector('.header-menu');
let body = document.querySelector('body');
let headerTextImg = document.querySelector('.header-text-img');
let firstText = document.querySelector('.first-main-text');
let secondText = document.querySelector('.second-main-text');
let thirdText = document.querySelector('.third-main-text');
let fourthText = document.querySelector('.fourth-main-text');
let fifthText = document.querySelector('.fifth-main-text');
let sixthText = document.querySelector('.sixth-main-text');
let seventhText = document.querySelector('.seventh-main-text');
let eighthText = document.querySelector('.eighth-main-text');
let ninthText = document.querySelector('.ninth-main-text');
let tenthText = document.querySelector('.tenth-main-text');
let footer = document.querySelector('footer');
let chart1 = document.querySelector('.text-img-seventh');
let chart2 = document.querySelector('.text-img-eighth');
let oranges = document.querySelectorAll('.orange');
let imgsContainer = document.querySelector('.imgs-container');
let logoFooter = document.querySelector('.logo-footer');

darkThemeButton.style.backgroundColor = "#9e541b";



lightThemeButton.onclick = function(){
	headerLogo.classList.add('light');
	headerMenu.classList.add('light')
	body.style.backgroundColor = "#ffffff";

	for (let shade of shades){
		shade.classList.add('light')
	}
	for (let orange of oranges){
		orange.classList.add('light')
	}
	rel.setAttribute("href", "img/logo header light.svg");
	headerTextImg.setAttribute("src", "img/text header light.svg");
	chart1.setAttribute("src", "img/chart 1 light.svg");
	chart2.setAttribute("src", "img/chart 2 light.svg");
	headerTextImg.style.margin = "3.9% 0 0 3.7%";
	lightThemeButton.style.backgroundColor = "#9e541b";
	darkThemeButton.style.backgroundColor = "#DB7629";
	firstText.classList.add('light');
	secondText.classList.add('light');
	thirdText.classList.add('light');
	fourthText.classList.add('light');
	fifthText.classList.add('light');
	sixthText.classList.add('light');
	seventhText.classList.add('light');
	eighthText.classList.add('light');
	ninthText.classList.add('light');
	tenthText.classList.add('light');
	footer.classList.add('light');
	chart1.classList.add('light');
	chart2.classList.add('light');
	imgsContainer.classList.add('light');
	logoFooter.classList.add('light');
}




darkThemeButton.onclick = function(){
	headerLogo.classList.remove('light')
	headerMenu.classList.remove('light')
	body.style.backgroundColor = "#202033";
	for (let shade of shades){
		shade.classList.remove('light')
	}
	for (let orange of oranges){
		orange.classList.remove('light')
	}
	rel.setAttribute("href", "img/logo header.svg");
	headerTextImg.setAttribute("src", "img/text header.svg");
	chart1.setAttribute("src", "img/chart 1.svg");
	chart2.setAttribute("src", "img/chart 2.svg");
	headerTextImg.style.margin = "5% 0 0 4%";
	lightThemeButton.style.backgroundColor = "#DB7629";
	darkThemeButton.style.backgroundColor = "#9e541b";
	firstText.classList.remove('light');
	secondText.classList.remove('light');
	thirdText.classList.remove('light');
	fourthText.classList.remove('light');
	fifthText.classList.remove('light');
	sixthText.classList.remove('light');
	seventhText.classList.remove('light');
	eighthText.classList.remove('light');
	ninthText.classList.remove('light');
	tenthText.classList.remove('light');
	footer.classList.remove('light');
	chart1.classList.remove('light');
	chart2.classList.remove('light');
	imgsContainer.classList.remove('light');
	logoFooter.classList.remove('light');
}