let nme = document.getElementById("Fullname")
let Sbtn = document.getElementById("Submitbutton")
let o = document.getElementById("job")
let exp = document.getElementById("exp")
let About = document.getElementById("AboutMe")
let sTUDY = document.getElementById("study")
let hoby = document.getElementById("get-hoby")

let imper = document.getElementById('persimg')
let oa = document.getElementById("twitter")
let ol = document.getElementById("linkedin")
let om = document.getElementById("github")
let el = document.getElementById("email")
let pn = document.getElementById("phone")

Sbtn.onclick = function() {
    localStorage.setItem("personalimage", imper.value)
    localStorage.setItem("Fullname", nme.value)
    localStorage.setItem("job", o.value)
    localStorage.setItem("experience", exp.value)
    localStorage.setItem("description", About.value)
    localStorage.setItem("studying", sTUDY.value)
    localStorage.setItem("paste-hobiess", hoby.value)
    localStorage.setItem("twitter", oa.value)
    localStorage.setItem("linkedin", ol.value)
    localStorage.setItem("github", om.value)
    localStorage.setItem("email", el.value)
    localStorage.setItem("phone", pn.value)
    window.open('template1/index.html')

    /*localStorage.setItem("twitter", oa.value)
    localStorage.setItem("fbook", ot.value)
    localStorage.setItem("insta", ol.value)
    localStorage.setItem("github", om.value)
    localStorage.setItem("persimage", ommi.value)
        //localStorage.setItem("personal", uio)*/


}