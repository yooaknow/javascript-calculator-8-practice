import { Console } from "@woowacourse/mission-utils";
import { Add } from "./Add.js";

class App   {
  async run() {
    const input = await Console.readLineAsync(`숫자를 입력해 주세요: `);
    const result = Add(input);

    Console.print(`결과 : ${result}`);


  }
}

export default App;
