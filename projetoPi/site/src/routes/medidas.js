var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idSala", function (req, res) {
  medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSala", function (req, res) {
  medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/ultimasB/:idSala", function (req, res) {
  medidaController.buscarUltimasMedidasB(req, res);
});

router.get("/tempo-realB/:idSala", function (req, res) {
  medidaController.buscarMedidasEmTempoRealB(req, res);
});

router.get("/ultimasC/:idSala", function (req, res) {
  medidaController.buscarUltimasMedidasC(req, res);
});

router.get("/tempo-realC/:idSala", function (req, res) {
  medidaController.buscarMedidasEmTempoRealC(req, res);
});

router.get("/ultimasD/:idSala", function (req, res) {
  medidaController.buscarUltimasMedidasD(req, res);
});

router.get("/tempo-realD/:idSala", function (req, res) {
  medidaController.buscarMedidasEmTempoRealD(req, res);
});

router.get("/ultimasE/:idSala", function (req, res) {
  medidaController.buscarUltimasMedidasE(req, res);
});

router.get("/tempo-realE/:idSala", function (req, res) {
  medidaController.buscarMedidasEmTempoRealE(req, res);
});

// Atualização das KPI's
router.post("/umidadeMax", function (req, res) {
  medidaController.umidadeMax(req, res);
});
router.post("/umidadeMin", function (req, res) {
  medidaController.umidadeMin(req, res);
});
module.exports = router;
