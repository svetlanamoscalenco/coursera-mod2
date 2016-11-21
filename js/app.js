

(function(){
	
	angular.module("ShoppingListCheckoff", [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);
	
	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuy = this;
		
		toBuy.products = ShoppingListCheckOffService.getToBuyProducts();
		
		toBuy.alreadyBought = function(productIndex){
			ShoppingListCheckOffService.moveToAlreadyBought(productIndex);
		}
	};
	
	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var bought = this;
		
		bought.products = ShoppingListCheckOffService.getBoughtProducts();
	};
	
	function ShoppingListCheckOffService(){
		var service = this;
		
		var toBuy = [
			{ "name": "Bread", "quantity" : "2 loaves" },
			{ "name": "Milk", "quantity" : "1 bottle" },
			{ "name": "Pasta", "quantity" : "3 packs" },
			{ "name": "Cheese", "quantity" : "500 grams" },
			{ "name": "Snacks", "quantity" : "2 packs" }
		];

		var alreadyBought = [];
		
		service.getToBuyProducts = function(){
			return toBuy;
		};
		
		service.getBoughtProducts = function(){
			return alreadyBought;
		};
		
		service.moveToAlreadyBought = function(productIndex){
			var itemToMove = toBuy[productIndex];
			toBuy.splice(productIndex, 1);
			alreadyBought.push(itemToMove);
		};
	};
	
})();