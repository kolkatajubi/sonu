var testapi = {
    signup:(username,email, mobile)=>{
        return new Promise(async(resolve,reject)=>{
            
            return resolve({status:"success"})
        })
    },
    search:(input_data)=>{
        return new Promise(async(resolve,reject)=>{
            
            return resolve({status:"success",data:{username:"abc",email:"def",mobile:"123"}})
        })
    }
}