(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
var toBuy=this;
toBuy.items=ShoppingListCheckOffService.getToBuyItems();
toBuy.addItem = function (itemIndex) {
    ShoppingListCheckOffService.addItem(itemIndex,toBuy.items[itemIndex].name, toBuy.items[itemIndex].quantity);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
var alreadyBought= this;
alreadyBought.items=ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;
  var toBuyList = [
  {
    name: "Milk Cartons",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name:"Condensed Milk Tins",
    quantity:"10"
  }
];

var boughtList = [];

service.addItem = function (itemIndex,itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtList.push(item);
    toBuyList.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
   return toBuyList;
 };

 service.getAlreadyBoughtItems=function(){
   return boughtList;
 };
}

})();
