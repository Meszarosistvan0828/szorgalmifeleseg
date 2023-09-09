var tomb = []



function adat()
{
    var obj = { 
        elso : parseInt(document.getElementById("szam1").value),
        mas : parseInt(document.getElementById("szam2").value),
    
        }
        tomb.push(obj)
    console.log(tomb)   

}

function kirajzol()
{
    for(var i = 0;i<tomb.length;i++)
    {
     
        document.getElementById("alap").innerHTML += '<div id="keret'+i+'"></div>'
        document.getElementById("keret"+i+"").style.width = "tomb[i].elso'px'"
        document.getElementById("keret"+i+"").style.height = "tomb[i].mas'px'"
        document.getElementById("keret"+i+"").style.background = "black" 
        document.getElementById("alap").innerHTML+= '<br>'
    }
}