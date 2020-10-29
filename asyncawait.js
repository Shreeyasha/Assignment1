function myIntro(){
	let intro= {name:'Shreeyasha', age:20, gender:'female'}
	return intro;
}
async function getIntro(){
	try{
		var intro= await myIntro();
		console.log(intro);

	}
	catch(e){
		console.log("Error is :", error)

	}
}
getIntro();

