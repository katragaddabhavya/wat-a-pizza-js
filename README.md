## Challenge- Wat-a-Pizza

### Problem Statement

Wat-a-pizza is a pizza delivery outlet that became popular for its custom-made vegetarian pizzas. ​

​A customer can call the outlet and order pizzas and other accompaniments. The outlet delivers the orders received ​on call at the address specified by the customer.​

​Write a JavaScript program to calculate the amount of each item, total amount and discounted final amount ​using array methods.​

### Context

- Customer's feedback is very much important for the delivery outlet in managing customer satisfaction and loyalty to ensure customer retention and to stay ahead in competition.​

- Hence, whenever a customer makes a request, the delivery outlet wants to list down only the specific items immediately. For example, ​

  * List of starters, ​
  * List of beverages or ​
  * List of main meal.​

- After a customer finalised the order, the delivery outlet should generate the amount for each item. ​

- Freebies provided by the delivery outlet should be considered while calculating the total amount.​

- The delivery outlet also offers a discount of 5% for bill amount of $50 and above. Hence, the final amount should be calculated based on the total bill amount with the discount.​

#### Task 1

The delivery outlet wants to list only specific items based on the customer requirement.​

Using the table listed, menu object is provided in the boilerplate code to perform operations.​

| Category​ | Name​ | Price​ |
|-|-|-|
| Beverages​ | Coke​ | $1.5​
| Starters​ | Garlic Bread ​| $2.8​
| Starters​ | Mozzarella Sticks​ | $5.5​
| Main Meal​ | Medium Size Margherita Pizza​ | $11​
| Beverages​ | Iced Tea​ | $1.25​
| Starters​ | Greek Wedge Salad​ | $4.5​
| Beverages​ | Soft Drink​ | $1.25​
| Main Meal​ | Veg Family Meal​ | $13.25​
| Main Meal​ | Large Size Vegan Pepperoni Pizza​ | $14.5​

Create `listByCategory(menu, categoryName)` method  to display the items in alphabetical order.​

- Only beverages​
- Only starters​
- Only main meals​

Use array filter and sort methods. 

#### Task 2

Using the table listed, order object is provided in the boilerplate code to perform operations.​

| Name​ | Price(USD)​ | Quantity​ |
|-|-|-|
| Mozzarella Sticks​ | 5.5​ | 2​ |
| Garlic Bread​ | 2.8​ | 2​ |
| Coke​ | 1.5​ | 3​ |
| Medium size Margherita Pizza​ | 11​ | 2​ |
| Iced Tea​ | 1.25​ | 1​ |
| Veg Family meal​ | 13.25​ | 2​

Create `calculateAmount(menu, order)` to calculate the amount for each item ordered. It should return `orderAmount` object which has name, quantity, price, category and amount as its properties.​

Use Array's map method to transform each order item.​

#### Task 3

- The delivery outlet gives a freebies of 1 Coke when the customer order contains Main meal worth more than $40 with Coke.​

- Create `calculateMainMealAmount(orderAmount)` to calculate the subtotal amount for main meal using Array's filter and reduce method. Function chaining should be used when required.​
- Create `calculateTotalAmount(orderAmount, mainMealAmount)`  to find the `totalAmount` of the order based on the calculated `mainMealAmount` value.​

   * `totalAmount` should be calculated using Array's reduce method from the `orderAmount​`

   * If the `mainMealAmount` is greater than $40 and the order contains 'Coke', then 'Coke' price should be reduced from the `totalAmount`.​

      * 'Coke' price should be obtained using Array's map method from the `orderAmount` object. ​

   * Else, `totalAmount` will be the total of all the ordered items.


### Task 4
- Create `calculatedFinalAmount(totalAmount, discount)` to calculate the final amount based on the customer order.​

- Discount of 5% is applied for bill amount greater than $50. Reduce the discount amount from the `totalAmount` if it is greater than $50 to get the `finalAmount`.


### Task 5

- Create `displayTotalAmount(totalAmount)` to display the total amount as shown below:​

     ```
     Total Amount payable: $69.35
     ```

-  Create `displayFinalAmount(finalAmount)` to display the final amount as shown below:    ​

     ```
     Final Amount payable after discount: $ 65.88
     ```

**NOTE: The solution for this exercise should be provided in `wat-a-pizza-solution.js` file.**
​

