
   
const Wages_Per_Hours=20;
const Part_Time_Working_Hours=4;
const Full_Time_Working_Hours=8;

let wages=0;


let empCheck=Math.floor(Math.random()*10)%3;
if(empCheck==0)
{
    wages=0;
    console.log("absent for that day");
}
else if(empCheck==1)
{
    wages=Part_Time_Working_Hours*Wages_Per_Hours;
    console.log("Part time working:"+wages);
}
else{
    wages=Full_Time_Working_Hours*Wages_Per_Hours;
    console.log("Full time working:"+wages);
}
