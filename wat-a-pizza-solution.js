let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

//Write function to filter menu items by Category and sort them alphabetically
function listByCategory( categoryName)
{
    const categoryItems=menu.filter(menuCategory => menuCategory.category===categoryName).sort()
                console.log(categoryItems)
}
listByCategory("Beverages")
listByCategory("Starters")
listByCategory("Main Meal")

//Write function to calculate the amount of each ordered item
function calculateAmount(menu, order){
    let orderAmount=order.items.map((orderItem)=>{5
        let category=menu.filter((menuItem)=>menuItem.name==orderItem.name)
        return {
            name:orderItem.name,
            quantity:orderItem.quantity,
            price:orderItem.price,
            category:category[0].category,
            amount:orderItem.price*orderItem.quantity
        }
    })

    return orderAmount;

}

console.log(calculateAmount(menu,order));

const orderAmount=calculateAmount(menu,order);

//Write function to calculate the subtotal amount for the main meal ordered
function calculateMainMealAmount(orderAmount){
   let mealamount=0;
   let mainMealAmount= orderAmount.filter((orderAmountItem)=>orderAmountItem.category==="Main Meal")
   .reduce((mealamount,mealItem)=>mealamount+mealItem.amount,0);
  return mainMealAmount
}
console.log("total meal amount "+calculateMainMealAmount(orderAmount));
mainMealAmount=calculateMainMealAmount(orderAmount);


function calculateTotalAmount(orderAmount, mainMealAmount){
    let totalAmount =orderAmount.reduce((result,orderItem)=>result+orderItem.amount,0);
    if(mainMealAmount>40){
        
        return totalAmount-(orderAmount.filter((orderAmountItem)=>orderAmountItem.name==="Coke").map(price=>price.price));
           
    }
    return totalAmount;
    
}

totalAmount=calculateTotalAmount(orderAmount, mainMealAmount);

//Write function to find the totalAmount of the order based on the calculated mainMealAmount value

//Write function to calculate the final amount after discount
function calculatedFinalAmount(totalAmount, discount){
          if(totalAmount>50){
            return totalAmount-(totalAmount*discount/100);
          }
          return totalAmount;
}
discount=5;
finalAmount=calculatedFinalAmount(totalAmount, discount);

//Write function to display the total amount 
function displayTotalAmount(totalAmount){
    console.log("total amount "+totalAmount);
}
//Write function to display the final amount
function displayFinalAmount(finalAmount){
    console.log("final amount after discount "+finalAmount);
}

//Invoke  functions 
displayTotalAmount(totalAmount);
displayFinalAmount(finalAmount);

