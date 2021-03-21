import React, {useState} from "react"
export default function Wrestling(){
  const [temp, setTemp] = useState("")
  const [arr, setArr] = useState([])
  const [counter, setCounter] = useState(0)
  function handleSubmit(e,entry,nums){
    e.preventDefault()
    if(temp.toLowerCase()===entry&&!JSON.stringify(arr).includes(JSON.stringify(nums))){
      setArr(prev => [...prev, nums])
      setCounter(prev => prev+1)
    } else {
      alert("Wrong answer or already selected")
    }
  }

let things = "#".repeat(100).split('')
things[0] = 1
things[1] = "S"
things[11] = "H"
things[21] = "A"
things[31] = "R"
things[41] = "P"
things[51] = "E"
things[2] = "T"
things[3] = "E"
things[4] = "I"
things[5] = "N"
things[6] = "E"
things[7] = "R"
things[46] = 2
things[47] = "D"
things[48] = "D"
things[49] = "T"
things[37] = 3
things[38] = "D"
things[58] = "P"
things[20] = 4
things[22] = "P"
things[23] = "E"
things[24] = "X"


  
  return (
    <div>{counter<5?<>
      <form onSubmit={(e) => handleSubmit(e,"sharpe",[1,11,21,31,41,51])}>
        <label>
         1 down: Mike ____ claimed to be Canada's greatest athlete. <input type="text" name="sharpe" 
         onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"steiner",[1,2,3,4,5,6,7])}>
        <label>
         1 across: A very famous brother duo known for vicious suplexes <input type="text" name="steiner" 
         onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"ddt",[47,48,49])}>
        <label>
         2 across: Jake Roberts's devastating finishing move <input type="text" name="ddt" 
         onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"ddp",[38,48,58])}>
        <label>
         3 down: The initials of a famous yogi and master of the diamond cutter <input type="text" name="ddp"
          onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"apex",[21,22,23,24])}>
        <label>
         4 across: Randy Orton is known as the ____ predator <input type="text" name="apex" 
         onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form></>:<><h1>Good job! Select another game from the buttons above!</h1></>}
      <div className="game">
      {things.map((item,i) =>
      item !=="#"&&typeof item !== "number"?<p id={i} 
      className={!arr.flat().includes(i)?"letter white":"letter black"}>{item}</p>:
      typeof item === "number"?<p id={i} className="letter num">{item}</p>:
      <p id={i} className="letter symbol">{item}</p>)}
      </div>
    </div>
  );
}