(() => {
	// this is a self-invoking
	
	console.log ('fired'); 

	// select elements with javascript
	

	// setting up a variaable using the let keyboard,
	// and using a CSS selector to find the element we want to use.
	
	// let stores the reference to element as variable (in memory)
	
	
	let svgGraphic = document.querySelector("#badgeSVG");
	

	// functions are reusable pieces of code
	// that you can run any time
	
		function logMyid() {
		console.log(this.id);
		this.style.opacity=0.5;


	}


	svgGraphic.addEventListener("click",logMyid);



})();