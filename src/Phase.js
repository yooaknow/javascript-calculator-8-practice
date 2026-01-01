import { Console } from "@woowacourse/mission-utils";

export function Phase(trim_input){
  
  // 숫자 들어와지고 있음. 
  // 이를 통해 . ;로 나눠지는 로직과, 
  // // \n 안에 있는 것으로 나눠지게 하는 로직 구현 해야함 "

  if (trim_input.startsWith("//")){
    let start = trim_input.indexOf("//") +2;
    let end = trim_input.indexOf("\\n");

    let arrayOfString =  trim_input.substring(start, end);
    Console.print(`start: ${start}`);
    Console.print(`// \n 사이에 들어간 값: ${arrayOfString}`);

  } else{
    let arrayOfString = trim_input.split(/,:/);
    Console.print(`, ;으로 나눠진 값들: ${arrayOfString}`);
  }


  return; 

}