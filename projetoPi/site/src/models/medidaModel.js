var database = require("../database/config");

function buscarUltimasMedidas(idSala, limite_linhas) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top ${limite_linhas} 
        umidadeA as umidade,  
                        dtTime,
                        FORMAT(dtTime, 'HH:mm:ss') as momento_grafico
                    from Captura
                    where fkSala = ${idSala}
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idSala}
                    order by id desc limit ${limite_linhas}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSala) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top 1
        umidadeA as umidade,  
                        CONVERT(varchar, dtTime, 108) as momento_grafico, 
                        fkSala 
                        from Captura where fkSala = ${idSala} 
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idSala} 
                    order by id desc limit 1`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidasB(idSala, limite_linhas) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top ${limite_linhas} 
        umidadeB as umidade,  
                        dtTime,
                        FORMAT(dtTime, 'HH:mm:ss') as momento_grafico
                    from Captura
                    where fkSala = ${idSala}
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idSala}
                    order by id desc limit ${limite_linhas}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealB(idSala) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top 1
        umidadeB as umidade,  
                        CONVERT(varchar, dtTime, 108) as momento_grafico, 
                        fkSala 
                        from Captura where fkSala = ${idSala} 
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idSala} 
                    order by id desc limit 1`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidasC(idSala, limite_linhas) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top ${limite_linhas} 
        umidadeC as umidade,  
                        dtTime,
                        FORMAT(dtTime, 'HH:mm:ss') as momento_grafico
                    from Captura
                    where fkSala = ${idSala}
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idSala}
                    order by id desc limit ${limite_linhas}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealC(idSala) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top 1
        umidadeC as umidade,  
                        CONVERT(varchar, dtTime, 108) as momento_grafico, 
                        fkSala 
                        from Captura where fkSala = ${idSala} 
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idSala} 
                    order by id desc limit 1`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidasD(idSala, limite_linhas) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top ${limite_linhas} 
        umidadeD as umidade,  
                        dtTime,
                        FORMAT(dtTime, 'HH:mm:ss') as momento_grafico
                    from Captura
                    where fkSala = ${idSala}
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idSala}
                    order by id desc limit ${limite_linhas}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealD(idSala) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top 1
        umidadeD as umidade,  
                        CONVERT(varchar, dtTime, 108) as momento_grafico, 
                        fkSala 
                        from Captura where fkSala = ${idSala} 
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idSala} 
                    order by id desc limit 1`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidasE(idSala, limite_linhas) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top ${limite_linhas} 
        umidadeE as umidade,  
                        dtTime,
                        FORMAT(dtTime, 'HH:mm:ss') as momento_grafico
                    from Captura
                    where fkSala = ${idSala}
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idSala}
                    order by id desc limit ${limite_linhas}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealE(idSala) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top 1
        umidadeE as umidade,  
                        CONVERT(varchar, dtTime, 108) as momento_grafico, 
                        fkSala 
                        from Captura where fkSala = ${idSala} 
                    order by idCaptura desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idSala} 
                    order by id desc limit 1`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
// Atualizando KPI´s
function umidadeMax() {
  var instrucao = `
  select Max(umidadeA)as umiMaxA ,Max(umidadeB)as umiMaxB ,Max(umidadeC)as umiMaxC ,Max(umidadeD)as 
  umiMaxD ,Max(umidadeE) as umiMaxE from captura where day(dtTime) = day(GETDATE());
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
function umidadeMin() {
  var instrucao = `
  select Min(umidadeA)as umiMinA ,Min(umidadeB)as umiMinB ,Min(umidadeC)as umiMinC ,Min(umidadeD)as 
  umiMinD ,Min(umidadeE) as umiMinE from captura where day(dtTime) = day(GETDATE());
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  buscarUltimasMedidasB,
  buscarMedidasEmTempoRealB,
  buscarUltimasMedidasC,
  buscarMedidasEmTempoRealC,
  buscarUltimasMedidasD,
  buscarMedidasEmTempoRealD,
  buscarUltimasMedidasE,
  buscarMedidasEmTempoRealE,
  umidadeMax,
  umidadeMin
};
