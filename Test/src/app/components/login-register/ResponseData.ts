export class ResponseData {

    user: string;
 
    constructor( data:
       {
          
          user?: string
          
       }
    ){
       this.user = data.user;
    }
 
 }