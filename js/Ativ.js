var y=parseInt(Math.random(0, 100)*100)
var a
alert("tente adivinhar o numero que estou pensando de 0 a 100")
a=prompt("Digite um numero")
while(a!=y){
    if(a<y){
        alert("é maior")
    }
    else{
        alert("Menor")
    }   
    a=prompt("Digite outro numero")
}
alert("Acertou")  

 