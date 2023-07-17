const number = '1234567';
let numberArr = number.split('').map(Number);
let checkList = new Array(numberArr.length);
let tmpNumber = [];


for(let i = 0 ; i < checkList.length ; i++ ){
    checkList[i] = false;
}

for(let i = 0 ; i < numberArr.length ; i++) {
    for(let j = 0 ; j < numberArr.length ; j++) {
        debugger
        let appNumber = '';

        if(i==0){ // 1의자리 숫자는 그냥 넣음.
            appNumber += numberArr[j].toString();
        } else {
            // for(let k = 0 ; k < i ; k++ ) { //10의 자리수 이상 자릿수
                let addNum = 0;
                while(addNum < numberArr.length){
                    appNumber += numberArr[addNum].toString();
                    let tmpNum = '';
                    // while(){

                    // }
                    for(let l = j ; l < numberArr.length ; l++ ) {
                        
                        if(addNum == l) continue;
                        
                        appNumber += numberArr[l].toString();
                        if(!tmpNumber.includes(appNumber)) {
                            tmpNumber.push(appNumber); // tmpNumber에 있다면 안넣음.
                            appNumber = (tmpNum && numberArr[l] < numberArr.length) ? tmpNum : numberArr[k+addNum].toString();
                            
                        } else {
                            tmpNum = appNumber;
                        }
                        
                    }
                    addNum++;
                    appNumber = '';
                }
                
            // }
            
            j+=numberArr.length-1;
        }
        
        console.log(tmpNumber, appNumber)

        if(!tmpNumber.includes(appNumber) && appNumber) tmpNumber.push(appNumber); // tmpNumber에 있다면 안넣음.

            
    } 
    
}

console.log(tmpNumber);
