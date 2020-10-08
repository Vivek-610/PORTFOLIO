//Preloader
window.addEventListener("load", function () {
	//ADD opacity-0 class
	document.querySelector(".preloader").classList.add("opacity-0");

	//SET-TIMEOUT FOR PRELOADER
	// setTimeout(()=>{
	// 	document.querySelector(".preloader").style.display="none";
	// },1000)
	//REMOVING ARROW FUNCTION
	setTimeout(function () {
		document.querySelector(".preloader").style.display = "none";
	}, 1000);
});

//Portfolio Item Filter

// console.log("hello Guyus");
const filterContainer = document.querySelector(".portfolio-filter"),
	filterBtns = filterContainer.children,
	// console.log(filterBtns);
	totalFilterBtn = filterBtns.length,
	portfolioItems = document.querySelectorAll(".portfolio-item"),
	totalPortfolioItem = portfolioItems.length;
// console.log(totalPortfolioItem);

// "for-loop" for the Filter-Btns
for (let i = 0; i < totalFilterBtn; i++) {
	// console.log(filterBtns[i]);

	//Here "funcction" is used for FilterBtns
	filterBtns[i].addEventListener("click", function () {
		//Use of "this"
		// console.log(this)
		// console.log(this.innerHTML)

		filterContainer.querySelector(".active").classList.remove("active");
		this.classList.add("active");

		const filterValue = this.getAttribute("data-filter");
		// console.log(filterValue);

		for (let k = 0; k < totalPortfolioItem; k++) {
			//Here its triple equal sign for COMPARISON
			//Also The use of "remove" AND "add" Function

			if (filterValue === portfolioItems[k].getAttribute("data-category")) {
				portfolioItems[k].classList.remove("hide");
				portfolioItems[k].classList.add("show");
			} else {
				portfolioItems[k].classList.remove("show");
				portfolioItems[k].classList.add("hide");
			}
			if (filterValue === "all") {
				portfolioItems[k].classList.remove("hide");
				portfolioItems[k].classList.add("show");
			}
		}
	});
}

//Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
	lightboxImg = lightbox.querySelector(".lightbox-img"),
	lightboxClose = lightbox.querySelector(".lightbox-close"),
	lightboxText = lightbox.querySelector(".caption-text"),
	lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
	portfolioItems[i].addEventListener("click", function () {
		itemIndex = i;
		// console.log(itemIndex);

		//changeItem() function used for changing for items
		changeItem();
		//toggleLightbox() function used for opening
		toggleLightbox();
	});
}

function nextItem() {
	if (itemIndex === totalPortfolioItem - 1) {
		itemIndex = 0;
	} else {
		itemIndex++;
	}
	// console.log(itemIndex);

	changeItem();
}

function prevItem() {
	if (itemIndex === 0) {
		itemIndex = totalPortfolioItem - 1;
	} else {
		itemIndex--;
	}
	// console.log(itemIndex);

	changeItem();
}

function toggleLightbox() {
	lightbox.classList.toggle("open");
}
function changeItem() {
	imgSrc = portfolioItems[itemIndex]
		.querySelector(".portfolio-img img")
		.getAttribute("src");

	// console.log(imgSrc);
	lightboxImg.src = imgSrc;
	lightboxText.innerHtml = portfolioItems[itemIndex].querySelector(
		"h4"
	).innerHtml;
	lightboxCounter.innerHTML = itemIndex + 1 + "of" + totalPortfolioItem;
}

//close Lightbox
lightbox.addEventListener("click", function (event) {
	// console.log(event.target);
	if (event.target === lightboxClose || event.target === lightbox) {
		//toggleLightbox() function used for closing
		toggleLightbox();
	}
});

//Aside navbar
const nav = document.querySelector(".nav"),
	navList = nav.querySelectorAll("li"),
	totalNavList = navList.length,
	allSection = document.querySelectorAll(".section"),
	totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
	// console.log(navList[i]);
	const a = navList[i].querySelector("a");
	// console.log(a);

	//Here the function() is for [a] thats link
	a.addEventListener("click", function () {
		// console.log(this);

		// //REMOVE back-section class
		// for (let i = 0; i < totalSection; i++) {
		// 	allSection[i].classList.remove("back-section");
		// }			function Is made
		removeBackSectionClass();

		for (let j = 0; j < totalNavList; j++) {
			//ADDING back-section class
			if (navList[j].querySelector("a").classList.contains("active")) {
				// console.log(navList[j].querySelector("a"));
				// console.log("back-section"+navList[j].querySelector("a"));

				//Seperate Function for Adding Back Section
				// allSection[j].classList.add("back-section");
				addBackSectionClass(j);
			}
			navList[j].querySelector("a").classList.remove("active");
		}
		this.classList.add("active");

		//Show Sections by use of function showSection(element)
		showSection(this);

		//Automatically close the Nav-Toggler when clicked on any of the links
		if (window.innerWidth < 1200) {
			asideSectionTogglerBtn();
		}
	});
}

//Remove Back Section Class Function
function removeBackSectionClass() {
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.remove("back-section");
	}
}

//ADD Back Section Class Function
function addBackSectionClass(num) {
	allSection[num].classList.add("back-section");
}

//Show Sections by function
function showSection(element) {
	// console.log(element);
	// console.log(element.getAttribute("href"));
	// console.log(element.getAttribute("href").split("#"));

	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.remove("active");
	}

	// const href = element.getAttribute("href").split("#");
	// 			target=href[1];
	// 			console.log(target);
	// OR
	const target = element.getAttribute("href").split("#")[1];
	// console.log(target);

	document.querySelector("#" + target).classList.add("active");
}

//Function to update-Nav after clicking on link
function updateNav(element) {
	// console.log(element.getAttribute("href").split("#")[1]);

	for (let i = 0; i < totalNavList; i++) {
		navList[i].querySelector("a").classList.remove("active");
		const target = element.getAttribute("href").split("#")[1];
		if (
			target ===
			navList[i].querySelector("a").getAttribute("href").split("#")[1]
		) {
			navList[i].querySelector("a").classList.add("active");
		}
	}
}

//Hire-Me
document.querySelector(".hire-me").addEventListener("click", function () {
	// console.log(this);
	//Link send Hire-me to Contact Page
	const sectionIndex = this.getAttribute("data-section-index");
	console.log(sectionIndex);

	showSection(this);
	updateNav(this);

	//This functions are used for jumping from about-section(hire-me) to Contact Section
	removeBackSectionClass();
	addBackSectionClass(sectionIndex);
});

//Nav Toggler Btn
const navTogglerBtn = document.querySelector(".nav-toggler"),
	aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
	asideSectionTogglerBtn();
});
// Also can be done this way
// navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

//Please be care full with toggle and toggler words
function asideSectionTogglerBtn() {
	aside.classList.toggle("open");
	navTogglerBtn.classList.toggle("open");
	for (let i = 0; i < totalSection; i++) {
		// allSection[i].classList.add("open");
		allSection[i].classList.toggle("open");
	}
}
