sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("axelera.pe.invoices.controller.MainView", {
            onInit: function () {
                const oJSONModel = new JSONModel();
                const oView = this.getView();
                // oJSONModel.loadData("SelectionScreenMenu.json");
                // console.log(JSON.stringify(oJSONModel.getData()));
                // oView.setModel(oJSONModel, "selectionScreen");
            }
        });
    });
