var age = prompt("How old is he ?")
console.log("Alex age is : " + age)
var age1 = 18
age1 > 18 ? console.log("Siz Artiq Yetiskinsiniz") : console.log("Sizin 18 yasiniz tamam deyil")
for(var i =1 ;i<=10;i++)
{
    if(i%2!==0)
    {
        continue;   
    }
    console.log(i)
}
for(var j = 1;j<=10;j++)
{
    if(j%2===0)
    {
        console.log(j)
        break;
    }
}
function comparePassword(username,password)
{
    if(password === "0001" && username === "Abbas")
    {
        alert("Qeydiyyatiniz Ugurla Basa Catdi")
    }
    else
    {
        alert("Sizin qeydiyyatiniz dogru deyil buna gore de tekrar qeydiyyat etmelisiniz")
    }
}
comparePassword("Abbas","001")

function reqemlerinCemi(reqem1,reqem2)
{
    return reqem1+reqem2
}
console.log("Reqemlerin neticede cemi  : " + reqemlerinCemi(1,5))
 
var calculateAge = function(birthYaer) {
    return 2024 - birthYaer
}
console.log(calculateAge(2005))



