/* eslint-disable no-undef */
'use strict';
const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm= '';  
  const findById = function(id){
    return store.items.find(item => item.id === id);
  };

  const addItem = function(name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
    }catch(e){
      throw console.log('Cannot add item: {error.message}');
    }
  };

  const findAndToggleChecked = function(id){
    this.findById(id).checked = !checked;
  }; 

  

  return{
    items,
    hideCheckedItems,
    searchTerm,
    findById
  };
}() );