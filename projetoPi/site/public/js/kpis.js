function umidadeMax() {
    fetch("/medidas/umidadeMax", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(umi=>{
                console.log(umi)
                console.log(umi[0].umiMaxA,umi[0].umiMaxB,umi[0].umiMaxC,umi[0].umiMaxD,umi[0].umiMaxE)
                maxA = umi[0].umiMaxA
                maxB = umi[0].umiMaxB
                maxC = umi[0].umiMaxC
                maxD = umi[0].umiMaxD
                maxE = umi[0].umiMaxE
                teste(maxA,maxB,maxC,maxD,maxE)

            })
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}
function teste(maxA,maxB,maxC,maxD,maxE) {
    console.log(maxA,maxB,maxC,maxD,maxE)
        var vtMax = [maxA,maxB,maxC,maxD,maxE]
        console.log(vtMax)

        var verificacao = Math.max.apply(null, vtMax);
        console.log(verificacao);

        var indeceVerificacao = vtMax.indexOf(verificacao);
        console.log(indeceVerificacao);

        if (indeceVerificacao == 0) {
            valorMax.innerHTML = `${vtMax[0]}%`
            areaMax.innerHTML = `Área A` 
        }
        if (indeceVerificacao == 1) {
          valorMax.innerHTML = `${vtMax[1]}%`
            areaMax.innerHTML = `Área B`
        }
        if (indeceVerificacao == 2) {
          valorMax.innerHTML = `${vtMax[2]}%`
            areaMax.innerHTML = `Área C`
        }
        if (indeceVerificacao == 3) {
          valorMax.innerHTML = `${vtMax[3]}%`
            areaMax.innerHTML = `Área D`
        }
        if (indeceVerificacao == 4) {
          valorMax.innerHTML = `${vtMax[4]}%`
            areaMax.innerHTML = `Área E`  
        }
}
function umidadeMin() {
    fetch("/medidas/umidadeMin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(umi=>{
                console.log(umi)
                console.log(umi[0].umiMinA,umi[0].umiMinB,umi[0].umiMinC,umi[0].umiMinD,umi[0].umiMinE)
                minA = umi[0].umiMinA
                minB = umi[0].umiMinB
                minC = umi[0].umiMinC
                minD = umi[0].umiMinD
                minE = umi[0].umiMinE
                teste1(minA,minB,minC,minD,minE)

            })
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    }); 
}
function teste1(minA,minB,minC,minD,minE) {
    console.log(minA,minB,minC,minD,minE)
        var vtMin = [minA,minB,minC,minD,minE]
        console.log(vtMin)

        var verificacao = Math.min.apply(null, vtMin);
        console.log(verificacao);

        var indeceVerificacao = vtMin.indexOf(verificacao);
        console.log(indeceVerificacao);

        if (indeceVerificacao == 0) {
            valorMin.innerHTML = `${vtMin[0]}%`
            areaMin.innerHTML = `Área A` 
        }
        if (indeceVerificacao == 1) {
          valorMin.innerHTML = `${vtMin[1]}%`
            areaMin.innerHTML = `Área B`
        }
        if (indeceVerificacao == 2) {
          valorMin.innerHTML = `${vtMin[2]}%`
            areaMin.innerHTML = `Área C`
        }
        if (indeceVerificacao == 3) {
          valorMin.innerHTML = `${vtMin[3]}%`
            areaMin.innerHTML = `Área D`
        }
        if (indeceVerificacao == 4) {
          valorMin.innerHTML = `${vtMin[4]}%`
            areaMin.innerHTML = `Área E`  
        }
}
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
var contador5 = 0;

function tempoAlerta(){
        if(temp1 < 46 || temp1 > 59){
        setTimeout(() => {
            contador1++;
          }, "1000");
}
        if(temp2 < 46 || temp2 > 59){
        setTimeout(() => {
            contador2++;
          }, "1000");
}
        if(temp3 < 46 || temp3 > 59){
        setTimeout(() => {
            contador3++;
          }, "1000");
}
        if(temp4 < 46 || temp4 > 59){
        setTimeout(() => {
            contador4++;
          }, "1000");
}
        if(temp5 < 46 || temp5 > 59){
        setTimeout(() => {
            contador5++;
          }, "1000");
}       
    setTimeout(() => {
        mostrandoGrafico()
      }, "2000");
    
}
