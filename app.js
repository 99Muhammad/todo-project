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
function question(arr)
{
    let student =prompt("Are you marrid ? Yes/No");
    arr.push(student);
    let marrid =prompot("Are you student ? Yes/No");
    arr.push(marrid);
    let work =prompot("Do you work? Yes/No");
    arr.push(work);

}
question(arr);

function AnswerQuestions(arr)
{
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]=="")
        {
            arr[i]="Invalid";
        }
        if(arr[i]!="Yes"&& arr[i]!="No")
        {
            console.log("The answer should be 'Yes OR No' ");
            arr[i]="Invalid";
        }
    }
    return arr;
}
AnswerQuestions(arr);
function PrintArrayElements(arr)
{
    for(let i=0 ;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}
PrintArrayElements(arr);
//console.log(AnswerQuestions(arr));
