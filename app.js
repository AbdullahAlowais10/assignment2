(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService)
    
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();
    toBuy.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
    }
}

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.alreadyItems = ShoppingListCheckOffService.getAlreadyItems();
}
  


function ShoppingListCheckOffService(){
var service = this ;

  var toBuyList = [
    {
      name: "Milk",
      quantity: "10"
    },
    {
      name: "Cookies",
      quantity: "10"
    },
    {
      name: "Chocolate",
      quantity: "10"
    },
    {
      name: "Ice Cream",
      quantity: "10"
    },
    {
      name: "Cheese",
      quantity: "10"
    }
  ];
  var alreadyItems = [];
    service.getToBuyList = function () {
      return toBuyList ;
    }

    service.getAlreadyItems = function () {
      return alreadyItems ;
    }

service.buyItem = function(index){
var item = toBuyList[index]
alreadyItems.push(item);
toBuyList.splice(index, 1);
}
 
  


}



})();