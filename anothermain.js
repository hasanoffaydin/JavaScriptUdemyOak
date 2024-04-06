var schoolName = 'school'
var student = {
    name: "Aydin",
    lastName : "Hesenov",
    age : "19",
    school : "calTech"
}
console.log(student['name'])
console.log(student.lastName)
console.log(student.age)
console.log(student[schoolName])

var student11 = {
    name : "Abbas",
    lastname : "Abbasov",
    age : "25",
    frineds : ["Aygun","Arif","Asif"],
    friendInfo : {
        ad : "Alo",
        soyad : "Beli"
    }
}
var frie = student11.frineds;
console.log(frie)
var friendName = student11.friendInfo.ad
console.log(friendName)

var colors = {}
colors.orange = {code : 123}
console.log(colors.orange.code)
colors.black = {code : [4,5,6]}
console.log(colors.black.code)

var infos = [ 
    {
        names : "Aydin",
        lastnames : "Hesenov"
    },
    {
        names : "Abbas",
        lastnames : "Abbasov"
    },
    {
        names : "Arif",
        lastnames : "Abdiyev"
    }
]
console.log(infos[0].names) 

var universities = [
    {
        name : "Uni1",
        year : "2011",
        hasGone : true
    },
    {
        name : "Uni2",
        year : "2012",
        hasGone : false
    },
    {
        name : "Uni3",
        year : "2013",
        hasGone : true
    }
]
universities.map(function(universitet){
    if(universitet.hasGone === true){
        console.log(universitet.name + " " +universitet.year)
    }
})
var Sheldon = {
    newName : "Sheldon",
    newAge : 18,
    hasGone : true,
    friends : ['Penny','Raj'],
    say : function () {
        console.log("Say Hello !")
    }
}
Sheldon.say();

var information = {
    oldname: "Abdi",
    oldlastname : "Abdiuev",
    sayname : function (){
        console.log("My Name Is " + this.oldname )
    }
}
information.sayname()
