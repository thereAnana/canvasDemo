//deal with points coordinate  
//polar 2 rectangular Coordinates
let dealcoordi = function(arr){
    let myArr = eval(arr);
    let res =[]
    for(let i = 0;i<myArr.length;i++){
        let temparr = myArr[i];
        let correct = (document.documentElement.clientWidth - 2 - 700)/2;
        let obj = {
            x:350 + correct + Math.cos( Math.PI*2*temparr.ang/360 )*temparr.dis/25,
            y:350 + correct - Math.sin( Math.PI*2*temparr.ang/360 )*temparr.dis/25,
        }
        res.push(obj)

    }
    //console.log(res);
    return  res;
}
