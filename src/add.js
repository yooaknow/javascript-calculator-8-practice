import { Console } from "@woowacourse/mission-utils";
import { Phase } from "./Phase.js";

export function Add(input){

  let trim_input= input.trim();

  if (trim_input === "") {
    return 0;

  } else {
    let final_phase= Phase(trim_input);
    Console.print(`최종 나눠진 숫자 값 ${final_phase}`); 
    return final_phase;

  }


} 