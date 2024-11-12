import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [result, setResult] = useState("");
  const [isCorrect, setIsCorrect] = useState("");

  useEffect(() => {
    setCount1(Math.floor(Math.random() * 10) + 1);
    setCount2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const random = () => {
    if (Number(result) == count1 * count2) {
      setCount1(Math.floor(Math.random() * 10) + 1);
      setCount2(Math.floor(Math.random() * 10) + 1);

      setResult("");
      setIsCorrect("");
    } else {
      setIsCorrect("Jawaban Salah");
      setResult("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-center mt-10 font-bold text-3xl">Perkalian</h1>
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <div>
            <span className="font-bold text-2xl">
              {count1} x {count2} ={" "}
            </span>
            <Input
              value={result}
              placeholder="Jawaban"
              type="number"
              onChange={(e) => {
                setResult(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  random();
                }
              }}
            />
            <Button className="ml-2" variant={"neutral"} onClick={random}>
              Submit
            </Button>
          </div>
          <div className="mt-2 text-red-500 font-semibold">{isCorrect}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
