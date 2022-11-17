sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/mvc/XMLView",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, XMLView, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("sync.zc507order.controller.View1", {
            onInit: function () {
            },

            onShowHello : function () {
                //Show a native or vanailla JS MessageToast
                alert("이운형");
                MessageToast.show("이운형");
            },
            handleNew: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Create", null);
            }

        });
    });
