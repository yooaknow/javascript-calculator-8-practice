
import { Console } from '@woowacourse/mission-utils';

export const parse = (trim_input) => {

  if (trim_input.startsWith("//")) {
    let start = trim_input.indexOf("//") + 2;
    let end = trim_input.indexOf("\\n");
    let custom = trim_input.substring(start, end);

    Console.print(`특수 문자 ${custom}`);

    const body = trim_input.slice(end + 2);
    const custom_arr = body.split(custom);

    Console.print(custom_arr);

    return custom_arr;

  } else {
    const arr =   trim_input.split(/[,;]/);  
    Console.print(arr); 
    return arr;

  }

}