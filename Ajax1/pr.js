let a = [2,4,3]
let b = [5,6,4]
let c =[];
for(let i=0;i<a.length;i++){
    for(let j =0;j<b.length;j++){
        let x = a[i]+b[j]
        // if(x>10){

        // }
        c.push(x)
        break
        
    }
}
console.log(c)