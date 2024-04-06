var h1Element = document.querySelector('h1').style.color = "green"
var pElemnt = document.querySelector('p').style.color = "blue"
var bodyElemnt = document.querySelector('body')
var isYellow = 1
setInterval(function(){
    if(isYellow%2===0)
    {
        bodyElemnt.style.backgroundColor = "black"
    }
    else if(isYellow%3===0)
    {
        bodyElemnt.style.backgroundColor = "Yellow"
    }
    else if(isYellow%5===0)
    {
        bodyElemnt.style.backgroundColor = "red"
    }
    isYellow ++
},1000)

var selectWithId = document.getElementById('akademy').style.color = "pink"
// var backgroundColors = document.querySelector('.background')
// console.log(backgroundColors)
var arxaFon = document.querySelector('div')
arxaFon.style.backgroundColor = "black"
arxaFon.style.fontSize = "1.5rem"
arxaFon.classList.add("addClasses")
arxaFon.classList.remove("addClasses")
var paragraph = document.querySelector('#akademy');
console.log(paragraph.textContent)
paragraph.textContent = "Salam Menim Yeni Akademiyem var"
console.log(paragraph.textContent)

var mylink = document.querySelector('a')
console.log(mylink.getAttribute('href'))
mylink.setAttribute('href',"https://www.coursera.org/courseraplus/?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo&term={term}&gad_source=1&gclid=Cj0KCQjw5cOwBhCiARIsAJ5njuZqMAE30fI7fMSDieqJV3y1okbskna-I6LS9URnVnjpkm6F2IEWuRYaAidIEALw_wcB")