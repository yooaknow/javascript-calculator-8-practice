import { Console } from '@woowacourse/mission-utils';
import { add } from './add.js';

class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");
    const finalResult = add(input);

    Console.print("결과 : " + finalResult);

  }
}

export default App;
