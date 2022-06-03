/*Martin Ruiz
5/31/2022
A: Mission Control Operater Login*/

//This variable creates a prompt screen that asks the user to input their first name 
var firstName=(prompt("Hi, What is your first name?"))

// This is a loop i created to keep the user from entering over twenty
// characters and to keep the user from moving forward woth an alert until all conditions are met.
        while (firstName.length <= 0 || firstName.length> 20){
        alert("INVALID INPUT,Name cannot exeed more than 20 characters.")
        firstName=(prompt("Hi, What is your first name?"))
        }

//This variable creates a prompt to the screen that asks the user to input their last name
var lastName=(prompt(" Hi " +firstName+ " What is your  last name?"))

//this while loop checks the input from the variable lastName to make sure it doesnt exceed more than 20 characters
//then aleats the user of invalid input until the conditions are met
        while (lastName.length <= 0 || lastName.length> 20){
        alert("INVALID INPUT,Name cannot exeed more than 20 characters.")
        lastName=(prompt(" Hi " +firstName+ " What is your last name? "))}


//this variable is a prompt to input the users badge number
var badgeNumber=prompt("WELCOME! "+firstName+ " Please enter your badge number")

//This is a while loop created to check the length of the user input fo badge number followed by an alert if not
     while (badgeNumber.length<=0 || badgeNumber.length>3){
         alert("'INVALID INPUT' Badge number cannot be an alphabetical character and cannot exeed 3 digits")
         badgeNumber=(prompt("WELCOME,"+firstName+" " +lastName,"Please enter your badge number"))
        }   

//This while loop is to check whether the user has input digits as a badge number followed by an alert if not
    while (isNaN(badgeNumber.valueOf())){
        alert("'INVALID INPUT' Badge number cannot be an alphabetical character and cannot exeed 3 digits")
        badgeNumber=prompt("WELCOME! "+firstName+" " +lastName, "Please enter your badge number")
        }
//The last three lines of code are used to display the user information to the screen with a warm welcome
document.write("Hello "+firstName+" "+lastName+" Welcome to mission control")
document.write("<br/>")
document.write(badgeNumber)






