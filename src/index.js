module.exports = function check(str, bracketsConfig) {
  // your solution
     let stack = [];
     let open = [];
     let close = [];
     let counter={};

     for (let i=0; i<bracketsConfig.length; i++){
         open.push(bracketsConfig[i][0]);
         close.push(bracketsConfig[i][1]);
         if (bracketsConfig[i][0]===bracketsConfig[i][1]){
            counter[bracketsConfig[i][1]]=0;
         }
     }

     for (let i=0; i<str.length; i++){
                if (counter.hasOwnProperty(str[i])){
                    if (counter[str[i]]===0){
                        stack.push(str[i]);
                        counter[str[i]]++;
                    }
                    else if (counter[str[i]]===1){
                        if (stack.pop()===str[i]){
                            counter[str[i]]=0;
                        }
                        else return false;
                    }
                }
                 else {
                    for (let j = 0; j < open.length; j++) {
                        if (str[i] === close[j]) {
                            if (!stack.length) return false;
                            else if (stack.pop() === open[j]) {
                                //continue;
                                break;
                            }
                            else return false;
                        }
                        else if (str[i] === open[j]) {
                            stack.push(str[i]);
                        }
                    }
                }

     }
  return !stack.length;
}