function n(ops){ 
   document.getElementById("operations").value += ops;
}

function op() { 
   document.getElementById("operations").value = eval(document.getElementById("operations").value); 
}

function reset_all() { 
   document.getElementById("operations").value = ""; 
}

