//styleSwitcher

//Color Change function
const links = document.querySelectorAll(".alternate-style"),
	totalLinks = links.length;

function setActiveStyle(color) {
	// console.log(color);
	for (let i = 0; i < totalLinks; i++) {
		if (color === links[i].getAttribute("title")) {
			links[i].removeAttribute("disabled");
		} else {
			links[i].setAttribute("disabled", "true");
		}
	}
}

//Body Skin
const bodySkin = document.querySelectorAll(".body-skin"),
	totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++) {
	bodySkin[i].addEventListener("change", function () {
		// console.log(this);
		// console.log(bodySkin[i]);
		// console.log(this.value);

		if (this.value === "dark") {
			//Here in INSPECT TOOL document.body.classList.add("dark") --> <body class="dark">
			// document.body.classList.add("dark")
			//OR
			document.body.className = "dark";
		} else {
			//Here in INSPECT TOOL document.body.classList.remove("dark") --> <body class>
			// document.body.classList.remove("dark")
			//OR
			document.body.className = "";
		}
	});
}

//The Gear icon open and close
document
	.querySelector(".toggle-style-switcher")
	.addEventListener("click", () => {
		// console.log("hi");

		document.querySelector(".style-switcher").classList.toggle("open");
	});
