var tomb = []



function adat()
{
    var obj = { 
        elso : document.getElementById("szam1").value,
        mas : document.getElementById("szam2").value ,
    
        }
        tomb.push(obj)
    console.log(tomb)   
}

function kirajzol()
{
    for(var i = 0;i<tomb.length;i++)
    {
        document.getElementById("alap").innerHTML += '<div id="keret'+i+'"> </div>'
        document.getElementById("keret"+i+"").style.maxWidth = "tomb[i].elso"
        document.getElementById("keret"+i+"").style.maxHeight = "tomb[i].mas"
        document.getElementById("keret"+i+"").style.border = "thick solid black"
        document.getElementById("alap").innerHTML+= '<br>'
    }
}