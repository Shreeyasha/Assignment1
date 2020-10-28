let NodePromise =()=>{
    return new Promise((resolve,reject)=>{
        let data = ['Hello','Shreeyasha','Baskota']
        if (data.length>0){
            resolve(data)}
            else{
                reject ("this is empty array")
            }
})
} 
NodePromise().then((result)=>{
    console.log("Success", result);
}).catch((error)=>{
    console.log("Error", error)
})

