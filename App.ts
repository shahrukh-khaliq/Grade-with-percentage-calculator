let obtainedMarks =400
let TotalMarks= 850
let per:number=obtainedMarks*100/TotalMarks
if(per>=80 && per<=100){
    console.log(`your grade is A1 and your percentage is ${per}`) 
  }else if(per>=70 && per<=80){
          console.log(`your grade is A and your percentage i ${per}`)
  }else if(per>=60 && per<=70){
      console.log(`your grade is B and your percentage is ${per}`)
  }else if(per>=50 && per<=60){
     console.log(`your grade is C and your percentage is ${per}`)
}
else{
    console.log(`you are passed ${per}`)
}