/* eslint-disable no-undef */
'use strict';

// eslint-disable-next-line no-unused-vars
const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  function findById(id) {
    const itemArr = store.items;
    return itemArr.find(item => item.id === id);
  }
  function addItem(name) {
    try {
      Item.validateName(name);
      const newItem = Item.create(name);
      store.items.push(newItem);
    } catch (error) {
      console.log(`Cannot add item: ${error.message}`);
      
    }
  }
  function findAndToggleChecked(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  }
  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      const item = this.findById(id);
      item.name = newName;
    } catch (error) {
      console.log(`Cannot updat name: ${error.message}`);
    }
  }
  function findAndDelete(id) {
    const itemToDelete = this.findById(id);
    const filteredArr = this.items.filter(item => item.id !== itemToDelete.id);
    this.items = filteredArr;
  }
  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}() );