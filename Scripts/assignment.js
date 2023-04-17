                          /*Task 1:
Calculate the zakat value, first, create a variable named "zakatPercentage" and
store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
named "userInput" and take the input from the user using the prompt. Make sure
the input value is of a type number by converting the input string to a number
using a suitable method. Then, create a variable named "result" and assign its value
to the multiplication of the zakat percentage and user input. Finally, use an alert
message to display the calculated zakat value. The message should look like this:
"Your zakat value is xxx".*/

// var userInput =+ prompt("Your amount please");
// var zakatPercentage =("0.025");
// console.log=(zakatPercentage)
// var result=(Number(userInput) * Number(zakatPercentage))
// alert('Your Zakat is '+ result)


                      /*Task 2:
calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.*/

// var familyMembers =+ prompt("Enter the total number of your family members");
// var fitrahmethod = prompt("Select your fitrah method among the options type option number:1) Wheat Rs 250, 2) Barley Rs 450, 3) Dates 2100, 4) Raisins 2800");
// varfitrahAmount
// if(fitrahmethod==="1"){price=250;
// }else if(fitrahmethod==="2"){price=450;
// }else if(fitrahmethod==="3"){price=2100;
// }else if(fitrahmethod==="4"){price=2800;
// }else{
//    alert("Option Invalid/Incorrect") 
// }
// var fitrahAmount= price*familyMembers
// alert('Fitrah Amount of your family members is '+ fitrahAmount)



                        /*Task 3:
Create a program that generates a random number between 1 and 10 and stores it
in a variable called "secretNumber". Then, ask the user to enter a guess for the
secret number using a prompt.
Use an if-else statement to check if the user's guess matches the secret number. If
the guess is correct, display a message using an alert saying "Congratulations! You
guessed the secret number". Otherwise, if the guess is too high or too low, display
an appropriate message informing the user to guess again.*/
// var secretNumber=9;
// var userInput =+prompt("Choose a number between 1 to 10")
// if (Number(userInput)===secretNumber){
// alert("Congratulations! You guessed it right")
// }else if(Number(userInput)>=7){
// alert("Incorrect! but you are close" );
// }else
// {
//     alert("Sorry! Your answer is incorrect");
// }


                         /*Task 4:
Create a program that asks the user to enter a name, and then prints out the name
with the first letter capitalized (Make your name in capitalized case).*/
// var username = prompt("Your name please");
// console.log(username[0].toUpperCase());





                        /*Task 5:
In this task, you will be creating two empty arrays called "contactNumbers" and
"contactNames". Using the prompt, you will ask the user to enter a contact number
and contact name. You will then push these values into their respective arrays
using the push method. After adding all the contacts, you will display the contact
numbers and names in the console. To do this, you will need to use a for loop to
iterate through both arrays and log each element to the console.
Make sure to use descriptive variable names and comment on your code for clarity.*/






                        /*Task 6:
Create an Array that contains different products, and get input from the user in which you
ask your user to give the position of that element he/she wants. Now remove that Item
from your array and console the removed item, Also display the remaining items in the
array and total number of items remaining.*/




                        /*Task 7:
Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote.*/
// var nationality =prompt("Your Nationality Please")
// var gender =prompt("Your Gender Please")
// var age =+prompt ("Your Age Please")
// if(nationality==='Pakistani'||nationality==='pakistani'||nationality==='Indian'|| nationality==='indian')
// if(gender==="male" && age >=18)
// {alert("You are eligible to vote")
// }else(gender==="male" && age <=18)
// else{
//     alert("You are not eligible to vote");
// }
// if(gender==="female" && age>=18);
// {var married = prompt("Are you married? Yes or No");}
// if(married ==="yes"){
//     alert("You are eligible to vote");
// }
// else{
//     alert("You are not eligible to vote");
// }



/*Task 8:
You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array.
(Hint : Make sure it should not disturb the array that contains 15 players instead you have
to make a copy of this array)*/
// var WorldCupSquad =["player1","player2","player3","player4","player5","player6","player7","player8","player9","player10","player11","player12","player13","player14","player15"];
// var finalteamplayers= WorldCupSquad.slice(2,13);
// console.log(finalteamplayers)


