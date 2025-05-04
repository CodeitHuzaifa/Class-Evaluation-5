let balance=10000;
let isRunning= true;
console.log("Welcome To the ATM machine!");

while(isRunning){
  let choice = prompt(
    "\nChoose an option:\n" +
    "1. Check Balance\n" +
    "2. Deposit Money\n" +
    "3. Withdraw Money\n" +
    "4. Exit\n" +
    "Enter your choice (1/2/3/4):" );

    if(choice === "1"){
      console.log("Your current balance: $ " + balance);
    }
    else if(choice==="2"){
      let deposit = parseFloat(prompt("Enter amount to deposit:"));
      balance += deposit;
      console.log("Deposited: $"+deposit + "\nNew balance: $" + balance);
    }
    else if(choice==="3"){
      let withdraw = parseFloat(prompt("Enter amount to withdraw:"));
      balance -= withdraw;
      console.log("Withdraw $" + withdraw + "\nNew balance: $" + balance);

    }

    else if(choice==="4"){
      console.log("Thank you for using ATM. Goodbye!");
      isRunning = false;
    }
    else{
      console.log("Invalid choice. Please enter 1,2,3 or 4.");
    }
}