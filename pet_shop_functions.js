myFunctions = {
  getName(petShop){
    return petShop.name;
  },
  getTotalCash(petShop){
    return petShop.admin.totalCash;
  },
  addOrRemoveCash(petShop, amount){
    petShop.admin.totalCash += amount;
  },
  getPetsSold(petShop){
    return petShop.admin.petsSold;
  },
  increasePetsSold(petShop, amount){
    petShop.admin.petsSold += amount;
  },
  getStockCount(petShop){
    return petShop.pets.length;
  },
  getPetsByBreed(petShop, breed){
    let petsByBreed = [];
    for (pet of petShop.pets){
      if (pet.breed === breed){
        petsByBreed.push(pet);
      }
    }
    return petsByBreed.length;
  },
  getPetByName(petShop, name){
    let petsByName = [];
    for (pet of petShop.pets){
      if (pet.name === name){
        petsByName.push(pet);
      }
    }
    if (petsByName.length === 0){
      return undefined;
    }else{
      return petsByName[0];
    }
  },
  removePetByName(petShop, name){
    for (pet of petShop.pets){
      if (pet.name === name){
        petShop.pets.splice(petShop.pets.indexOf(pet),1);
      }
    }
  },
  addPetToStock(petShop, newPet){
    petShop.pets.push(newPet);
  },
  getCustomersCash(customerInArray){
    return customerInArray.cash;
  },
  getCustomersCashTotal(array){
    let total = 0
    for (customer of array){
      total += customer.cash;
    }
    return total
  },
  removeCustomerCash(customer, amount){
    customer.cash -= amount;
  },
  getCustomerPetCount(customer){
    return customer.pets.length;
  },
  addPetToCustomer(customer, newPet){
    customer.pets.push(newPet);
  },
  customerCanAffordPet(customer, newPet){
    if (customer.cash >= newPet.price){
      return true;
    } else{
      return false;
    }
  },
  sellPetToCustomer(petShop, pet, customer){
    // needs to ascertain if pet exists
    if(pet === undefined || myFunctions.customerCanAffordPet(customer, pet) === false){
       return;
     } else{
    // customer pet count needs to increase
      myFunctions.addPetToCustomer(customer, pet);
    // petShop pets sold needs to increase
      myFunctions.increasePetsSold(petShop,1);
    // customer cash needs to decrease
      myFunctions.removeCustomerCash(customer, pet.price);
    // petShop cash needs to increase
      myFunctions.addOrRemoveCash(petShop,pet.price);

    // needs to not do any of the above if customer too poor
    }
  }
};

module.exports = myFunctions;
