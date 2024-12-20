const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  {id: 3, description: "porche", quantity: 2, packed: false },
  {id: 4, description: "phone", quantity: 8, packed: true },
  {id: 5, description: "laptop", quantity: 5, packed: true },
];


function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <PackgingList />
      <Fotter />
    </div>
  );
}

function Header(){
  return(
    <div>
    <h1>🌴🌴Travel Trip🌴🌴</h1>
    </div>
  );
}


function Form(){
  return(
    <div className= "add-form">
      what do you need to trip
      <select>
      {/* <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      </select> */
      }


      {
        Array.from({length: 20},(_,i) => i+1).map((num) => (
          <option value ={num}>{num}  </option>
        ))

      }

      </select>

      <input type="text" placeholder="item..." /> 
      <button>Add</button>
    </div>
  );
}

function PackgingList(){
  return(
    <div className = "list">
    <ul>
      {
        initialItems.map((item) =>
        <li>
          <span style={
            item.packed ?{
              textDecoration:'line-through'
            }
            :{}
          }>
            
          {item.quantity}{item.description}
          </span>
          



        <button>❌</button>

        </li>
        )
      }
    </ul>
    </div>
  );
}
function Fotter(){
  return(
    <div className="stats">
    <h2>you have X items in your list</h2>
    </div>
  );
}

export default App;
