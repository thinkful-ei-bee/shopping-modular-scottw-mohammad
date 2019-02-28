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
  //
  //WHAT IS TEMPCODERUNNERFILE.JS
  //
  const findById = function(id){
    return store.items.find(item => item.id === id);
  };

  const addItem = function(name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
    }catch(error){
      throw console.log('Cannot add item: {error.message}');
    }
  };

  const findAndToggleChecked = function(id){
    this.findById(id).checked = !this.findById(id).checked;
  }; 

  const findAndUpdateName = function(id, newName){
    try{
      Item.validateName(newName);
      this.findById(id).name = newName;
    }catch(error){
      console.log('Cannot update name: {error.message}');
    }
  };

  const findAndDelete = function(id){
    this.items = this.items.filter(item => item.id !== id);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(val) {
    this.searchTerm = val;
  };

  return{
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
}() );