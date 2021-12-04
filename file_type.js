const fs = require('fs');
// // console.log(fs);
// // for print data text file
// fs.readFile(__dirname+"/pn.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// console.log('priyanshu');
//asynchronize me jaldi milta h koi bhi chiz hold pr nhi

try{
    const data=fs.readFileSync(__dirname+"/pn.txt","utf-8")
    console.log(data);
}catch(e){
    console.log(e);
}
console.log('priyanshu');

//synchronize me jo phele milega wo print hoga