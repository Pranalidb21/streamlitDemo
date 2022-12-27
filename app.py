import streamlit as st;
def main():
	"""A Simple CRUD  Blog"""
	
	menu = ["Home","Login","Sign Up","Contact Us","Manage Blog"]
	choice = st.sidebar.selectbox("Menu",menu)

	if choice == "Home":
		st.subheader("Home")
		
	elif choice == "Login":
		st.subheader("Login")
        

	elif choice == "Sign Up":
		st.subheader("Sign Up")
		

	elif choice == "Live":
		st.subheader("Contact Us")
		
if __name__ == '__main__':
	main()
