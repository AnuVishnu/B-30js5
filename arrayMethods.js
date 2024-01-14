const arr1=['Anu','Vishnu','Shabi','Anju','Sreenath','Nithin'];
const arr2=[2,5,9,0,3,1,6];
const arr3=[44,78,12,56,35];

// 1. concat
let newArr= arr1.concat(arr2);
console.log(newArr);

// 2. every
let k=arr2.every(function (num){
    if(num>=3){
        return true
    }
})
console.log(k);

// 3. fill
let q= arr3.fill(61);
console.log(q);

// 4. find
const checkNum=(num)=>{
    return num>=9
}
let z=arr2.find(checkNum)
console.log(z);

// 5. findIndex
const check=(num)=>{
    return num>=9
}
let y=arr2.findIndex(check)
console.log(y);

// 6. flat
const arr4= [1,3,2,['animal','bird','fruit']];
let form= arr4.flat();
console.log(form);

// 7. forEach
arr4.forEach((num)=>{
    console.log(num);
})

// 8. includes
let v= arr1.includes('Shabi')
console.log(v);

// 9. indexOf
let index= arr1.indexOf('Vishnu');
console.log(index);

// 10. join

let m= arr1.join('^');
console.log(m);

// 11. lastIndexOf
let ind= arr1.lastIndexOf('Anu');
console.log(ind);

// 12. pop
arr3.pop()
console.log(arr3)

// 13. push
arr1.push('Sanvi')
console.log(arr1)

// 14. Reverse
let arry= arr1.reverse();
 console.log(arry);

//  15. unshift
arr1.unshift('Sanvi')
console.log(arr1);

// 16. shift
arr2.shift()
console.log(arr2);


// 17. slice
let o=arr1.slice(1,4)
console.log(o);

// 18. some
let s=arr3.some(function (num){
    if(num>=9){
        return true
    }
})
console.log(s);

// 19. sort
let h=arr1.sort()
console.log(h);

// 20. splice
arr1.splice(3,1,'new')
console.log(arr1);

// 21. toString
let string= arr2.toString();
console.log(string);

// 22. Filter
const result = arr1.filter((word) => word.length > 6);
console.log(result);

// 23. Reduce
let reduce= arr3.reduce((a,b)=>{
    return a-b;
})
console.log(reduce)

// 24. Map
const map1 = arr3.map((x) => x + 2);
console.log(map1);
