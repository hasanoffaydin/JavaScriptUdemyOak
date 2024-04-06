var button = document.querySelector('#btn1')
var has1 = document.querySelector('#h1')
button.addEventListener('click',function(){
    has1.textContent = "Esq Olsun Azerbaycan"
    console.log("Siz Buttona Tikladiniz!")
})

var listParent = document.querySelector('ul')
listParent.addEventListener('click',function(){
    console.log("Sen ule Clickden")
    listParent.style.backgroundColor = "blue"
})

var listItems = document.querySelectorAll('li')
console.log('listItem : ',listItems)
for(var i = 0;i<listItems.length;i++)
{
    listItems[i].addEventListener('click',function(){
        listItems[i].style.color ="white"
    })
}
//addeventlistenerlerin bir nece novleri var 'click kimi'