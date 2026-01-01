import { Console } from "@woowacourse/mission-utils";
import { Add } from "./src/Add.js"

class App   {
  async run() {
    const input = await Console.readLineAsync(`숫자를 입력해 주세요: `);
    Console.print(`결과 : ${input}`);

    Add (input);


  }
}

export default App;
