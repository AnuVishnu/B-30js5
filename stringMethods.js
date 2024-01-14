let str= "I am happy, granted, and curious."

// 1. concat
let a= str.concat('Hai')
console.log(a);

// 2. endsWith
let b= str.endsWith('curious.')
console.log(b);

// 3. includes
let c= str.includes('happy')
console.log(c);

// 4. indexOf
let d= str.indexOf('c')
console.log(d);

// 5. lastIndexOf
let e= str.lastIndexOf('c')
console.log(e);

// 6. match
let f= str.match('am')
console.log(f);

// 7. matchAll
let g=str.matchAll('am')
console.log(g)

// 8. padEnd
let h= str.padEnd(40,'#')
console.log(h);

// 9. padStart
let i= str.padStart(40, '/')
console.log(i);

// 10. repeat
let j= str.repeat(2)
console.log(j);

// 11. replace
let k= str.replace('happy', 'good')
console.log(k)

// 12. search
let l=str.search('granted')
console.log(l);

// 13. slice
let m= str.slice(1)
console.log(m);

// 14. split
let n= str.split(' ')
console.log(n);

// 15. startsWith
let o= str.startsWith('I')
console.log(o);

// 16. substr
let p= str.substr(1,2)
console.log(p);

// 17. substring
let q= str.substring(8)
console.log(q);

// 18. toLowerCase
let r=str.toLowerCase()
console.log(r);

// 19. toUpperCase
let s= str.toUpperCase()
console.log(s);

// 20. trim
let strnew= " How do you feel? "
let t= strnew.trim()
console.log(t.length);

// 21. trimEnd (or trimRight)
let u= strnew.trimEnd()
console.log(u.length);

// 22. trimStart (or trimLeft)
let v= strnew.trimStart()
console.log(v.length);

// 23. charAt
let w= strnew.charAt(6)
console.log(w);

// 24. charCodeAt
let z= strnew.charCodeAt(5)
console.log(z);