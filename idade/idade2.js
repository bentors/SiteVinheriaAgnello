function verificar(event) 
{
    var idade = document.getElementById("ano").value;
    
    if (idade < 18) {
        window.location.href = "https://www.peppapig.com/pt-br";
    }
    else {
        window.location.href = 'file:///C:/Users/leona/Desktop/Bento%20estudos/Vinheria%20agnello/site/index.html';
    }
}
