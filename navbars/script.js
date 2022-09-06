const navBar = document.querySelectorAll(".navigation")
const dot = document.querySelector(".dot")
let active = document.querySelectorAll(".active")
console.log(navBar)
console.log(active)
dot.style.transform = `translate(${active[0].offsetLeft - dot.offsetLeft + active[0].offsetWidth/2 - dot.offsetWidth/2}px)`	
dot.style.opacity = `1`	
navBar[0].addEventListener("mouseover", (x)=>{
	if(x.target.localName ==="li"){
		dot.style.transform = `translate(${x.target.offsetLeft - dot.offsetLeft + x.target.offsetWidth/2 - dot.offsetWidth/2}px)`	
	}
})
navBar[0].addEventListener("mouseout", ()=>{
	dot.style.transform = `translate(${active[0].offsetLeft - dot.offsetLeft + active[0].offsetWidth/2 - dot.offsetWidth/2}px)`	
})
navBar[0].addEventListener("click",(x)=>{
	if(x.target.localName ==="li"){
		active[0].classList.remove("active")
		console.log(x.target)
		active[0] = x.target
		active[0].classList.add("active")
	}
})

navBar[1].addEventListener("click",(x)=>{
	if(x.target.localName ==="li"){
			
		active.item(1).classList.remove("active")
		//active.item(1) = x.target
		//active.item(1).classList.add("active")
	}
})
