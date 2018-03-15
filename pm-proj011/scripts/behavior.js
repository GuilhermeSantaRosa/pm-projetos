function $(element) {
    return document.querySelector(element);
}

function showResult() {
    $(".result").classList.remove("hidden");
    $(".btnIMC").classList.add("hidden");
}

function showbtnIMC() {
    $(".btnIMC").classList.remove("hidden");
    $(".result").classList.add("hidden");
}

function calcResult(height, weight) {
    const imc = calcIMC( height.value, weight.value );
    $(".imcValue").innerHTML = imc.toLocaleString("pt-BR", {maxiumFractionDigits: 2});
    $(".imcDesc").innerHTML = descIMC(imc);
}


$(".btnIMC").addEventListener("click", () => {
  const height = $("#height");
  const weight = $("#weight");
    
   if(height.value == "") {
      height.focus;
   }
   else if(weight.value == "") {
      weight.focus;
   }
    
    else {
        calcResult(height, weight);
        showResult();
    }
   
});

$(".back").addEventListener("click", () => {
    showbtnIMC();
});


function calcIMC(height, weight) {
    return weight / (height * height);
}

function descIMC(imc) {
    if (imc < 16) {
        return "Magreza Grave";
    }
    else if (imc >= 16 && imc < 17) {
        return "Magreza Moderada";
    }
    
    else if (imc >= 17 && imc < 18.5) {
        return "Magreza Leve";
    }
    
    else if (imc >= 18.5 && imc < 25) {
        return "Saudável";
    }
    else if (imc >= 25 && imc < 30 ) {
        return "Sobrepeso";
    }
    else if (imc >= 30 && imc < 35) {
        return "Obesidade";
    }
    else if (imc >= 35 && imc < 40) {
        return "Obesidade Severa";
    }
    
    else {
        return "Obesidade Mórbida";
    }
}