sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("sync.zc507order.controller.Create", {
		/**
		 * @override
		 */
		onInit: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("Create").attachPatternMatched(this._onObjectMatched, this);
		
		},

		_onObjectMatched: function(oEvent) {
			var oModel = this.getView().getModel();
			oModel.metadataLoaded().then(function() {
				var oContext = oModel.createEntry("orderSet", null);
				this.getView().bindElement({
					path: oContext.getPath()
				});
			}.bind(this));
		}
	});
});