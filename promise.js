let NodePromise =()=>{
    return new Promise((resolve,reject)=>{
        let data = ['Hello','Shreeyasha','Baskota']
        if (data.length>0){
            resolve(data)}
            else{
                reject ("This is an empty Array")
            }
})
} 
NodePromise().then((result)=>{
    console.log("Success", result);
}).catch((error)=>{
    console.log("Error", error)
})

