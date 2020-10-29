let myIntro =()=>{
    return new Promise((resolve,reject)=>{
        let intro = [{name:'Shreeyasha',age:20, gender:'female'}]
        if (intro.length>0){
            resolve(intro)}
            else{
                reject ("This is an empty Array")
            }
})
} 
myIntro().then((result)=>{
    console.log("Success", result);
}).catch((error)=>{
    console.log("Error", error)
})

