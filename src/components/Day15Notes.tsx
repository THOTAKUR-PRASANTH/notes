export function Day15Notes() {
  const content =`#Today we are going to implement a mini Project
#That is simple WebApp(has Command line interface) for User Registration and Login
#And Ecomerce Product Purchase etc...
import os
import json

User_Deatils_File = "UserDetails.json"
current_user = None

def Getting_Data_From_File(file_path):
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            existing_data = json.load(file)
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


while True:
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
