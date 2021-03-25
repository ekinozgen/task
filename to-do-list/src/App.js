import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <input
            type="text"
            className="textbtn"
            placeholder="Listeye bir eleman ekleyin..."
          />
          <br />
          <br />
          <button className="button" type="submit">
            {" "}
            Ekle{" "}
          </button>
        </div>
        <div>
          <ul>
            <button className="button one" type="submit">
              {" "}
              Yapılacaklar Listesi{" "}
            </button>
          </ul>
          <ul>
            <button className="button blue" type="submit">
              {" "}
              Eleman 1{" "}
            </button>
          </ul>
          <ul>
            <button className="button blue" type="submit">
              {" "}
              Eleman 2{" "}
            </button>
          </ul>
          <ul>
            <button className="button blue" type="submit">
              {" "}
              Eleman 3{" "}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
