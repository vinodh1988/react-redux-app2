
   const obj={message:"Default dummy message"};

    export const dataReducer=(data=obj,action:any)=>{
      switch(action.type){
          case "MESSAGEACTION":
                return {message:action.data};
      }
        return data;
    }