    function media(){
	    var n1 = parseFloat(document.getElementById("n1").value);
	    var n2 = parseFloat(document.getElementById("n2").value);

    	var media = (n1+n2)/2;

    	if(media >= 7){
    		alert("Aprovado " + media);
    		} else { alert("Reprovado");
    			
    		}
    }
