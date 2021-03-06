const moment = require("moment");

class Constants {
  static getTradesDataFilePath() {
    return "files/trades_data.csv";
  }

  static getIxPriceFilePath() {
    return "files/index_price.csv";
  }

  static getCorpActionsFilePath() {
    return "files/corp_actions.csv";
  }

  static getCapitalGainsOutputFilePath() {
    return "files/out/capital_gains.csv";
  }

  static getErrorFilePath() {
    return "files/errors.log";
  }

  static getIxPriceDate() {
    return moment("2018-01-31", "YYYY-MM-DD");
  }

  static getCapitalGainsPeriodStartDate() {
    return moment("2018-04-01", "YYYY-MM-DD");
  }

  static getSeparator() {
    return ",";
  }

  static getNewline() {
    return "\n";
  }

  static getIpoCode() {
    return "I";
  }

  static getBonusCode() {
    return "B";
  }

  static getSplitCode() {
    return "S";
  }
}

module.exports = Constants;
