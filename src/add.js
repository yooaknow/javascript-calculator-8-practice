import { Console } from "@woowacourse/mission-utils";

export function Add(input){

  let trim_input= input.trim();
  Console.print(`trim으로 문자열 제거의 결과 : ${trim_input}`);

  if (trim_input === "") {
    return 0;

  } else {
    Console.print(`0이 아닌 경우 코드`); }


} 