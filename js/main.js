(() => {
	// this is a self-invoking
	
	console.log ('fired'); 

	// select elements with javascript
	

	// setting up a variaable using the let keyboard,
	// and using a CSS selector to find the element we want to use.
	
	// let stores the reference to element as variable (in memory)	
	
	let mainHeadLine = document.querySelector(".main-headline"),
		secHeadLine = document.querySelector(".test"),
		swapTextButton = document.querySelector(".switch-type"),
		allImages = document.querySelectorAll("#image-container img"),
		objectButton = document.querySelector(".container button");
	

	// functions are reusable pieces of code
	// that you can run any time
	
		function logMyid() {
			console.log(this.id);
			
			this.style.opacity=0.5;

			}

		function logTheSVG() {
			console.log(this.previousElementSibling.id);
			
		}


		function swapText(){

				mainHeadLine.textContent="Now you are something else!";
				mainHeadLine.classList.toggle("selected")
				
				secHeadLine.textContent="Vinny you are learning!";
				subHeadLine.classList.toggle("selected")
		}
		
	  
	// Events always go down here

	
	swapTextButton.addEventListener("click", swapText);
	
	//Select and loop through a bunch of items at once -> one to many relationship
		allImages.forEach(item=>{
		item.addEventListener("click", logMyid);
	});

		// The button beside the SVG
		objectButton.addEventListener("click", logTheSVG);




})();