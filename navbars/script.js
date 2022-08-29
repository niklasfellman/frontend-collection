const navBar = document.querySelector(".navigation")
const dot = document.querySelector(".dot")
let active = document.querySelector(".active")

dot.style.transform = `translate(${active.offsetLeft - dot.offsetLeft + active.offsetWidth/2 - dot.offsetWidth/2}px)`	
dot.style.opacity = `1`	

navBar.addEventListener("mouseover", (x)=>{
	console.log(x)
	if(x.target.localName ==="li"){
		dot.style.transform = `translate(${x.target.offsetLeft - dot.offsetLeft + x.target.offsetWidth/2 - dot.offsetWidth/2}px)`	
	}
})

navBar.addEventListener("mouseout", ()=>{
	dot.style.transform = `translate(${active.offsetLeft - dot.offsetLeft + active.offsetWidth/2 - dot.offsetWidth/2}px)`	
})

navBar.addEventListener("click",(x)=>{
	if(x.target.localName ==="li"){
		active.classList.remove("active")
		active = x.target
		active.classList.add("active")
	}
})
