import { Console } from '@woowacourse/mission-utils';
import { parse } from './parser.js';

export const add = (input)=>
{
  const trim_input = input.trim();

  if(trim_input !== null && trim_input !== undefined) {
    const result = parse(trim_input);
    var newArr = result.map(Number);

    if (newArr.some((n) => n < 0)) {
    throw new Error("[ERROR] 음수는 허용되지 않습니다.");
  }

    let sum = 0;

    for (let i = 0; i < newArr.length; i++ ) {
    sum += newArr[i];

    
  }
    return sum;
} else {
  return 0;
}
}
