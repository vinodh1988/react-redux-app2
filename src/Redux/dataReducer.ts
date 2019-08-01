
   const obj={message:"Default dummy message"};

    export const dataReducer=(data=obj,action?:any)=>{
      switch(action.type){
          case "MESSAGEACTION":
                return {message:action.data};
         
      }
        return data;
    }

    /* Reducer : 
    1.reducer is  javascript function
    2.It provides data to the store
    3.It executes automatically after every action
    4.for the first time , reducers will execute automatically
    5.every reducer will return an js object

    */