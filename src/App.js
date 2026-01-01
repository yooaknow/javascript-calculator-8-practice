import { Console } from "@woowacourse/mission-utils";
import { Add } from "./Add.js";

class App   {
  async run() {
    const input = await Console.readLineAsync(`숫자를 입력해 주세요: `);
    Console.print(`App.js 그대로의 결과 : ${input}`);

    const result = Add(input);

    Console.print(result);


  }
}

export default App;
