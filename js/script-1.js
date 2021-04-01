const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    const objects = Object.values(this.potions);
    for (const obj of objects) {
      if(obj.name === potionName.name) {
      return `Зелье ${potionName.name} уже есть в инвентаре!`;
      }
    }
    this.potions.push(potionName);
    return this.potions;
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
        console.log(potions[i]);
      const { name } = potions[i];
        if (potionName === name) {
            console.log('nasli', potionName);
            //console.log(i);
            return potions.splice(i , 1);
        }
    }
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      console.log(potions[i]);
      
      if (oldName === potions[i].name) {
        console.log('we foundt oldName');
        return potions[i].name = newName;
      } 
    }
  },
};
//atTheOldToad.getPotions();
console.table(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
console.table(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
console.table(atTheOldToad.getPotions());
atTheOldToad.removePotion('Дыхание дракона');
console.table(atTheOldToad.getPotions());
atTheOldToad.removePotion('Зелье скорости');
atTheOldToad.addPotion({ name: 'Дыхание дракона', price: 780 });
atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
console.table(atTheOldToad.getPotions());
atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
console.table(atTheOldToad.getPotions());

// Задача. Расширяем инвентарь
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками.
//Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает 
//[{ name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 }].
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }), 
//в массиве potions последним элементом будет этот объект.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }), 
//в массиве potions последним элементом будет этот объект.
// Значение свойства atTheOldToad.removePotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Дыхание дракона'), 
//в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 }].
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Зелье скорости'), 
//в свойстве potions будет массив[{ name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 }].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), 
//в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, 
//{ name: 'Каменная кожа', price: 520 }].
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'), 
//в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 },
//{ name: 'Зелье неуязвимости', price: 520 }].