import { Console } from "@woowacourse/mission-utils";

export function Phase(trim_input){
  
  // 숫자 들어와지고 있음. 
  // 이를 통해 . ;로 나눠지는 로직과, 
  // // \n 안에 있는 것으로 나눠지게 하는 로직 구현 해야함 "

  let arrayOfString = trim_input.split(/,:/);
  Console.print(`나눠진 값들: ${arrayOfString}`);

  return 0; 

}