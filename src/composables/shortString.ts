export const shortString=(value:string)=>{
    if(value.length>20){
        return value.slice(0,20)+"..."
    }else {
        return value
    }
}