//ignorar este recurso
module.exports = app => {
function existsError (value,msg) {
     if(!value ) 
     
         throw msg
    
}

function notExists(value, msg){

    try{
        existsError(value,msg)
    } catch (msg){
        return
    }
        throw msg
    }
    return {existsError, notExists}
}
