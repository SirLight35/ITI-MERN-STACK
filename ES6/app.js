
// //#region
// //1.
// (function (a,b){
//     alert(a+b)
// })(50,50)
// //#endregion



//#region

// let arr = [2,4,6,8]
// for(let i in arr){
//     console.log(arr[i])
// }

// for(let i of arr){
//     console.log(i)
// }



// function displayElement(arr){
//     console.log(arr)
// }

// arr.forEach(displayElement)


//2.a
//Use for...in when you want to loop over object keys.

//Use for...of when you want to loop over array or iterable values.

//#endregion



//#region

let numbers  = [1,5,8,9]

let jj = [...numbers]
console.log(jj)
//#endregion

//#region
class Student{
    constructor(name, university, faculty, finalGrade){
        this.name = name;
        this.university = university;
        this.faculty = faculty;
        this.finalGrade = finalGrade;
    }

    output(){
        console.log(`hello my name is ${this.name} and i am in ${this.university} and in faculty ${this.faculty} and my final grade is ${this.finalGrade}`)
    }
}


let ibrahim = new Student('ibrahim','helwan university','Computer Science',45)

ibrahim.output()

//#endregion




function* generateTip(array){
   for(let i = 0;i<=array.length;i++){
    yield array[i]
   }
}

const tip = [
    "Tip 1: Stay hydrated.",
  "Tip 2: Take breaks regularly.",
  "Tip 3: Plan your day in advance.",
  "Tip 4: Stay organized.",
  "Tip 5: Keep a positive mindset.",
  "Tip 6: Keep learning new skills.",
  "Tip 7: Get enough sleep.",
  "Tip 8: Be consistent.",
  "Tip 9: Prioritize your health.",
  "Tip 10: Stay focused on your goals."
]



const dispalyTips = document.getElementById('dispalyTips')
const tips_container = document.getElementById('tips-container')
const showIntervalButton = document.getElementById("showTipIntervalBtn");


dispalyTips.addEventListener('click',()=>{
const tiptip = generateTip(tip)
tips_container.innerHTML = "";

for(let tip of tiptip){
    const p = document.createElement('p')
    p.textContent = tip;
    tips_container.appendChild(p)
}

})

showIntervalButton.addEventListener('click',()=>{
     const tipGenerator = generateTip(tip);
     tips_container.innerHTML = ""; 


     const intervel = setInterval(()=>{
        const {value,done} = tipGenerator.next();


        if(done){
            clearInterval(intervel)
        }else{
            const p = document.createElement('p')
            p.textContent = value;
            tips_container.appendChild(p)
        }
     },3000);
})