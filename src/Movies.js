import React, {useState} from "react"
export default function Animals(){
const [temp, setTemp] = useState("")
const [arr, setArr] = useState([])
const [counter,setCounter] = useState(0)
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
things[10] = 1
things[11] = "H"
things[21] = "O"
things[31] = "M"
things[41] = "E"
things[51] = 2
things[52] = "T"
things[53] = "A"
things[54] = "X"
things[55] = "I"
things[32] = 3
things[33] = "F"
things[43] = "R"
things[63] = "G"
things[73] = "I"
things[83] = "L"
things[93] = "E"
things[34] = 4
things[35] = "F"
things[45] = "R"
things[65] = "D"
things[75] = "A"
things[85] = "Y"
things[36] = "I"
things[37] = "G"
things[38] = "H"
things[39] = "T"

  
  return (
    <div>{counter<5?<>
      <form onSubmit={(e) => handleSubmit(e,"home",[11,21,31,41])}>
        <label>
         1 down: ET phone _____ <input type="text" name="home" onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"taxi",[52,53,54,55])}>
        <label>
         2 across: Robert DeNiro drove this in one of his early roles. <input type="text" name="dog" onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"fragile",[33,43,53,63,73,83,93])}>
        <label>
         3 down: The leg lamp was labeled _______ and was thought to be Italian. <input type="text" 
         name="fragile" onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"friday",[35,45,55,65,75,85])}>
        <label>
         4 down: Ice Cube and Chris Tucker love this day of the week. <input type="text" 
         name="friday" onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"fight",[35,36,37,38,39])}>
        <label>
         4 across: Don't talk about ______ Club.<input type="text" 
         name="fight" onChange={(e) => setTemp(e.target.value)} />
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