import { Console } from "@woowacourse/mission-utils";

export function Phase(trim_input){

  let answer =0;


  if (trim_input.startsWith("//")){
    let start = trim_input.indexOf("//") +2;
    let end = trim_input.indexOf("\\n"); 

    let aspecific =  trim_input.substring(start, end);
    Console.print(`// \\n 사이에 들어간 값: ${aspecific}`);

    let trim_input1= trim_input.substr(5);

    
    let arrayOfString = trim_input1.split(aspecific);
    Console.print(`// \\n로 나뉘어진 문자열 ${arrayOfString}`);

    for (let i =0; i <arrayOfString.length; i++) {  
      answer += Number(arrayOfString[i]);  
    }

    Console.print(answer);
    return answer;

  } else{
    let arrayOfString = trim_input.split(/[,;]/);

    Console.print(`, ;으로 나눠진 값들: ${arrayOfString}`);

    for (let i =0; i <arrayOfString.length; i++) {  
      answer += Number(arrayOfString[i]);  
    }

    return answer;
  }


  return; 

}