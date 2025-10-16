export function Day17Notes() {
  const content =
`#Today we are going to implement a mini Project
#That is simple WebApp(has Command line interface) for User Registration and Login
#And Ecomerce Product Purchase etc...
import os
import json
from datetime import datetime

User_Deatils_File = "UserDetails.json"
PRODUCTS_FILE = 'products.json'
Orders_FILE = 'orders.json'
current_user = None
user_cart = []

def Getting_Data_From_File(file_path):
    if os.path.exists(file_path):
        if os.stat(file_path).st_size == 0:  # File is empty
            return []
        with open(file_path, 'r') as file:
            try:
                existing_data = json.load(file)
            except json.JSONDecodeError:
                existing_data = []
    else:
        existing_data = []

    return existing_data

def login_user():
    print("\n--- User Login Form is here--- ")
    username = input("Enter username: ")
    password = input("Enter password: ")
    users = Getting_Data_From_File(User_Deatils_File)

    for user in users:
        if user['username'] == username and user['password'] == password:
            print("Login successful!")
            return user['username']
    print("Invalid username or password.")
    return None

def register_user():
    print("\n--- User Registration And the form is here--- ")
    username = input("Enter username: ")
    email = input("Enter email: ")
    password = input("Enter password: ")
    users = Getting_Data_From_File(User_Deatils_File)

    for user in users:
        if user['username'] == username:
            print("Username already exists. Please login.")
            return
        
    new_user ={
        "username": username,
        "email": email,                
        "password": password
    }
    users.append(new_user)
    with open(User_Deatils_File, 'w') as file:
        json.dump(users, file, indent=4)


    """Displays all available products."""
    print("\n--- Available Products ---")
    print(f"{'ID':<5}{'Name':<25}{'Price (₹)':<15}{'Stock':<10}")
    print("-" * 55)
    for p in products:
        print(f"{p['ID']:<5}{p['Name']:<25}{p['Price']:<15}{p['Stock']:<10}")

def display_products(products):

    print("\n--- Available Products ---")
    print(f"{'ID':<5}{'Name':<30}{'Price (₹)':<15}{'Stock':<10}")
    print("-" * 55)
    for p in products:
        if p['Stock'] > 0:
            print(f"{p['ID']:<5}{p['Name']:<30}{p['Price']:<15}{p['Stock']:<10}")

def addToCart(products):
    product_id  = int(input("Enter Product ID to add to cart: "))
    for p in products:
        if p['ID'] == product_id:
            if p['Stock'] > 0:
                user_cart.append(p)
                print(f"Product '{p['Name']}' added to cart.")
                return
            else:
                print("Sorry, this product is out of stock.")
                return
    print("Invalid Product ID.")

def viewCart():
    print("Your Cart:", user_cart)
    print("\n--- Available Products ---")
    print(f"{'ID':<5}{'Name':<30}{'Price (₹)':<15}{'Stock':<10}")
    print("-" * 65)

    for p in user_cart:
        if p['Stock'] > 0:
            print(f"{p['ID']:<5}{p['Name']:<30}{p['Price']:<15}{p['Stock']:<10}")

def removeFromCart():
    if len(user_cart) == 0:
        print("Your cart is empty.")
        return
    
    viewCart()

    product_id = int(input("Enter Product ID to remove from cart:"))

    for p in user_cart:
        if p['ID'] == product_id:
            user_cart.remove(p)
            print(f"Product '{p['Name']}' removed from cart.")
            return
    print("Invalid Product ID.")

def checkout():
    if len(user_cart) == 0:
        print("Your cart is empty.")
        return
    
    total  = 0 
    for p in user_cart:
        total += p['Price']
    print(f"Total amount to pay: ₹{total}")

    confirm = input("Do you want to proceed to checkout? (yes/no): ") 

    if confirm.lower() == 'yes':
        orders = Getting_Data_From_File('orders.json') 
        order = {
            "username": current_user,
            "items": user_cart,
            "total": total,
            "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
        orders.append(order)
        with open('orders.json', 'w') as file:
            json.dump(orders, file, indent=4)

        print("Order placed successfully!")

        receipt = f"Receipt for {current_user}\n"
        receipt += f"Date: {order['date']}\n"
        receipt += "Items Purchased:\n"
        for p in user_cart:
            receipt += f"- {p['Name']} : {p['Price']}\n"
        receipt += f"Total Amount: Rs.{order['total']}\n"

        with open(f"receipt_{current_user}_{datetime.now().strftime('%Y%m%d%H%M%S')}.txt", 'w') as receipt_file:
            receipt_file.write(receipt)
        print(receipt)
        user_cart.clear()
    else:
        print("CheckOut Canclelled")

def Search_Product_By_Name(products):
    product_name = input("Enter the Product Name u want to Search....")
    for p in products:
        if p['Name'] == product_name:
            print(f"Product Found: ID: {p['ID']}, Name: {p['Name']}, Price: {p['Price']}, Stock: {p['Stock']}")
            return
    print("Product Not Found...")

def filter_products_by_price_range(products):
    min = int(input("Enter minimum price: "))
    max = int(input("Enter maximum price: "))
    print(f"{'ID':<5}{'Name':<30}{'Price (₹)':<15}{'Stock':<10}")
    print("-" * 55)
    for p in products:
        if min <= p['Price'] <= max:
            print(f"Product Found: ID: {p['ID']}, Name: {p['Name']}, Price: {p['Price']}, Stock: {p['Stock']}")
            return

def View_Orders(orders):
    print("\n--- Your Orders ---")
    your_orders = []
    for order in orders:
        if order['username'] == current_user:
            your_orders.append(order)

    if not your_orders:
        print("You have no orders.")
        return
    
    for idx, order in enumerate(your_orders, start=1):
        print(f"\nOrder {idx}:")
        print(f"Date: {order['date']}")
        print("Items:")
        for item in order['items']:
            print(f"- {item['Name']} : ₹{item['Price']}")
        print(f"Total Amount: ₹{order['total']}")
            


while True:

    if current_user == None:
        print("\n------Welcome to the Ecomerce App------")
        print("1. Register")
        print("2. Login")
        print("3. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            register_user()
        elif choice == '2':
            current_user =login_user()
        elif choice == '3':
            print("Thankyou for visiting. Goodbye!")
            break
    else:
        print(f"\n--- Welcome, {current_user}! ---")
        print("1. View Products")
        print("2. Add product to cart based on ID..")
        print("3. View Cart")
        print("4. Remove item from cart based on ID..")
        print("5. Checkout")
        print("6. Search Product By Name")
        print("7. Filter Products by Price Range")
        print("8. View Orders")
        print("9. Logout")
        choice = input("Enter your choice: ")
        if choice == '1':
            products = Getting_Data_From_File(PRODUCTS_FILE)
            display_products(products)
        elif choice == '2':
            products = Getting_Data_From_File(PRODUCTS_FILE)
            addToCart(products)
        elif choice == '3':
            viewCart()  
        elif choice == '4':
            removeFromCart()
        elif choice == '5':
            checkout()
        elif choice == '6':
            products = Getting_Data_From_File(PRODUCTS_FILE)
            Search_Product_By_Name(products)
        elif choice == '7':
            products = Getting_Data_From_File(PRODUCTS_FILE)
            filter_products_by_price_range(products)
        elif choice == '8':
            orders = Getting_Data_From_File(Orders_FILE)
            View_Orders(orders)
        elif choice == '9':
            current_user = None
            user_cart.clear()
            print("Logged out successfully.")
           
        `
           return (
    <div className="rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
  <div className="max-w-none rounded-md bg-slate-900">
    <pre className="font-mono text-sm leading-7 text-slate-100 p-4 overflow-x-auto">
      <code>{content}</code>
    </pre>
  </div>
</div>
  )
}