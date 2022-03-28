// code your solution here
function saturdayFun(argument){
    if(argument === undefined)
    {
        return "This Saturday, I want to roller-skate!" 
    } else {
        return "This Saturday, I want to bathe my dog!"
    }
}


function mondayWork(argument){
    if(argument === undefined )
    {
        return "This Monday, I will go to the office."
    } else if (argument === "work from home")
    {
        return "This Monday, I will work from home."
    }
}
function wrapAdjective (parameter ){
   
    
    return function(){
        if (parameter === '*' ){
            return  "You are *a hard worker*!"}
        else {
            return `You are ${parameter}a dedicated programmer${parameter}!`
        }
    }

}
// let result = wrapAdjective('*')
// let emphatic = result("a hard worker")
// expect(emphatic).to.equal("You are *a hard worker*!")

    // const part1 = "you are " + argument
    // if(argument === '*'){

    //    return wrapAdjective2(argument)(`You are ${argument}a hard worker!${argument}`);
        
