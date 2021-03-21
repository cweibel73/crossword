import React, {useState} from "react"
export default function Animals(){
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
things[10] = 1
things[11] = "C"
things[12] = "A"
things[13] = "T"
things[46] = 2
things[47] = "D"
things[48] = "O"
things[49] = "G"
things[1] = 3
things[2] = "R"
things[22] = "T"
things[30] = 4
things[31] = "P"
things[41] = "O"
things[51] = "S"
things[61] = "S"
things[71] = "U"
things[81] = "M"
things[7] = 5
things[8] = "R"
things[18] = "A"
things[28] = "C"
things[38] = "C"
things[58] = "O"
things[68] = "N"

  
  return (
    <div>{counter<5?<>
      <form onSubmit={(e) => handleSubmit(e,"cat",[11,12,13])}>
        <label>
         1 across: A pet that meows and purrs <input type="text" name="cat" onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"dog",[47,48,49])}>
        <label>
         2 across: A canine in heat would be a hot ___ <input type="text" name="dog" onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"rat",[2,12,22])}>
        <label>
         3 down: A rodent or a tattle tale <input type="text" name="rat" onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"possum",[31,41,51,61,71,81])}>
        <label>
         4 down: A very well-known marsupial <input type="text" name="possum" onChange={(e) => setTemp(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={(e) => handleSubmit(e,"raccoon",[8,18,28,38,48,58,68])}>
        <label>
         5 down: Sometimes called a "trash panda" <input type="text" name="raccoon" onChange={(e) => setTemp(e.target.value)} />
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
