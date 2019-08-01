

export  const randomMessage=()=>{
   let messages=["Redux Message!!!","React Redux Demo","Great Framework!!!",
 "Things going Good","First come First Serve","Redux is good!!!"];

   let message=messages[Math.round(Math.random()*5)];

   return {
       type:"MESSAGEACTION",
       data:message
   }

}

/* An action is function which returns an object 

usually an action returns an object with two properties one is action name & 
data*/