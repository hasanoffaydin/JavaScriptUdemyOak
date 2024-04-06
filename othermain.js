var subtraction = function (argument1,argument2)
{
    var deyer = argument2 - argument1
    return deyer
}
console.log(subtraction(4,8))

var isOdd = function(argument3)
{
    return argument3 %2 === 1
}
console.log(isOdd(8))

var addition = function(argument4)
{
    var cem = 0
    for(var i = 0;i<argument4;i++)
    {
        cem += i
    }
    return cem
}
console.log(addition(5))

var cats = []
var dogs = new Array()
cats[0] = "Cats0"
cats[1] = "Cats1"
cats[2] = "Cats2"
cats[3] = "Cats3"
dogs[0] = "Dogs0"
dogs[1] = "Dogs1"
dogs[2] = "Dogs2"
console.log(dogs)
console.log(cats)
console.log(cats.length)
var frineds = ["Aydin","Kamil","Sevinc","Dovsanm","Saida","Neriman","Vidadi"]
var closefriends = frineds.slice(0,2)  //0-daxildir ancaq 2 daxil deyil 0,1 indexleri goturur
console.log(closefriends)

var books = ['Harry Porter','Hobit','Hunger Games','Little Prince']
console.log(books[books.length-1])

var films = [
    ['hoobot1','hobbit2','hobbit3'],
    ['matrix1','matrix2','matrix3'],
    ['godFather1','godFather2','godFather3']
]
console.log(films[2][2])
var books1 = ['Harry Porter','Hobit','Hunger Games','Little Prince']
books1.map(function(book){
    console.log(book)
})
books1.forEach(function(book){
    console.log(book)
})

var number = []
for(var i = 0;i<=20;i++)
{
    number.push(i)
}
console.log(number)
number.forEach(function(num){
    if(num%5===0)
    {
        console.log(num)
    }
})