// Корзина покупок на JS
const shoppingCart = {
  items: [], // массив с товарами
  total: 0, // общая стоимость товаров в корзине
  
  // Метод для добавления товара в корзину
  addItem: function(name, price, quantity) {
      const newItem = { name, price, quantity }; // создаем новый объект (товар)
      this.items.push(newItem); // добавляем товар в массив с товарами
      this.total += price * quantity; // увеличиваем общую стоимость
  },
  
  // Метод удаления товара
  removeItem: function(itemName) {
      this.items = this.items.filter(item => item.name !== itemName);
      this.calculateTotal();
  },
  
  // Метод обновления количества товара
  updateQuantity: function(itemName, newQuantity) {
      this.items.forEach(item => {
          if (item.name === itemName) {
              this.total -= item.price * item.quantity; // вычитаем старую стоимость
              item.quantity = newQuantity; // обновляем количество
              this.total += item.price * newQuantity; // добавляем новую стоимость
          }
      });
  },
  
  // Метод расчета общей стоимости
  calculateTotal: function() {
      this.total = 0; // сначала обнуляем общую стоимость
      // Проходим по каждому товару и добавляем его стоимость к общей стоимости
      this.items.forEach(item => {
          this.total += item.price * item.quantity;
      });
  },
  
  // Метод очистки корзины
  clearCart: function() {
      this.items = []; // очищаем массив товаров
      this.total = 0; // обнуляем общую стоимость
  },
};

// Тесты:
shoppingCart.addItem('The Hades PS5', 2, 3); 
shoppingCart.addItem('Sony DualSense', 1, 5); 
console.log(shoppingCart.total); // Ожидаемая стоимость 11 (2*3 + 1*5)

shoppingCart.removeItem('The Hades PS5'); 
console.log(shoppingCart.total); // Ожидаемая стоимость 5

shoppingCart.updateQuantity('Sony DualSense', 10); 
console.log(shoppingCart.total); // Ожидаемая стоимость 10 (1*10)

shoppingCart.clearCart(); 
console.log(shoppingCart.total); // Ожидаемая стоимость 0, так как корзина пуста
