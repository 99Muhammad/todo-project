let Name = prompt("Please enter your name");
let gender = prompt("Please enter your gender ");

if(gender !=="male" && gender !=="female"){
    console.log("invalid message, the message should be male or female") 
}

let age = prompt("Please enter your age");

// muhammad flifle

if(age <= 0  ){
    alert("Invalid input. age should be greater than zero");
    
}
let message = confirm("do you want to skip the welcoming message?");

if(message){
  
     if(gender ==="male" ){
        alert ("Welcome Message MR."+ Name )
    }else if(gender ==="female"){
        alert ("Welcome Message Ms." + Name )
    }else {
        alert ("Welcome Message"  )
    }
    /*
    java script 
    */
}

let arr=[];
function question()
{
    let student =prompt("Are you marrid ? Yes/No");
    arr.push(student);
    let marrid =prompt("Are you student ? Yes/No");
    arr.push(marrid);
    let work =prompt("Do you work? Yes/No");
    arr.push(work);

}
question();

function AnswerQuestions()
{
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]=="")
        {
            arr[i]="Invalid";
        }
        if(arr[i]!="yes"&& arr[i]!="no")
        {
            console.log("The answer should be 'Yes OR No' ");
            arr[i]="Invalid";
        }
    }
    return arr;
}
arr=AnswerQuestions();


console.log(arr);

