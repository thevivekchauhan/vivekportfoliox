let r = document.getElementById("Fullname")
let ra = document.getElementById("jb")
let ral = document.getElementById("des")

let abt = document.getElementById("stdying")
let hobi = document.getElementById("paste-hobies")



let y = document.querySelector('#perimg')
let yl = document.getElementById('pexp')
let twi = document.getElementById('twitter')
let lnk = document.getElementById('linkedin')
let git = document.getElementById('github')
let eml = document.getElementById('email')
let phn = document.getElementById('phone')
let ul = document.querySelector("ul")

if (window.innerWidth > 800) {
    ul.classList.remove("nondisplay")
    ul.classList.add("display")
}
if (window.innerWidth < 800) {
    ul.classList.add("nondisplay")
    ul.classList.remove("display")
}

document.title = localStorage.getItem("Fullname")
r.textContent = localStorage.getItem("Fullname")
ra.textContent = localStorage.getItem("job")
yl.textContent = localStorage.getItem("experience")
ral.textContent = localStorage.getItem("description")
abt.textContent = localStorage.getItem("studying")
hobi.textContent = localStorage.getItem("paste-hobiess")

git.href = localStorage.getItem("github")
lnk.href = localStorage.getItem("linkedin")
twi.href = localStorage.getItem("twitter")
eml.href = localStorage.getItem("email")
phn.href = localStorage.getItem("phone")

let yt = localStorage.getItem("personalimage")
y.setAttribute("src", yt)

document.querySelector("#menu").onclick = function() {

    if (ul.classList.contains('nondisplay')) {
        console.log(1)
        ul.classList.remove("nondisplay")
        ul.classList.add("display")
    } else if (ul.classList.contains("display")) {
        ul.classList.remove("display")
        ul.classList.add("nondisplay")
    } else {}
}

window.onresize = function() {
    if (window.innerWidth > 800) {
        ul.classList.remove("nondisplay")
        ul.classList.add("display")
    }
    if (window.innerWidth < 800) {
        ul.classList.add("nondisplay")
        ul.classList.remove("display")
    }
}