  import { useState } from "react";

  import "./App.css";

  function App() {
    const [money, setMoney] = useState(11495.00);
    const [count, setCount] = useState(1);
    const [minus, setminus] = useState(1);
    const [imgs, setimgs] = useState("/public/imgs/image 1.png");
   

    const pilus_btn = () => {
      setMoney(money * 2);
      setCount(count + 1);
      setminus(minus - 1);
    };

    const minus_btn = () => {
      if (count > 1) {
        setCount(count - 1);
        setMoney(money / 2);
      }
    };

    const imgs_click = (imgType) => {
      if (imgType === 1) {
        setimgs("/public/imgs/imgs-box09.png");
      } else if (imgType === 2) {
        setimgs("/public/imgs/imgs-box03.png");
      } else if (imgType === 3) {
        setimgs("/public/imgs/imgs-box04.png");
      }
    };

    return (
      <>
        <header>
          <div className="container">
            <nav>
              <div className="logo">
                <img src="/public/imgs/Nike logo.png" alt="" />
                <ul>
                  <li>
                    <a href="#">Women</a>
                    <a href="#">Men</a>
                    <a href="#">Kids</a>
                    <a href="#">Collections</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="hero">
            <div className="container">
              <div className="cards">
                <div className="card">
                  <p></p>
                </div>
                <div className="card1">
                  <h1>01</h1>
                  <h2>02</h2>
                  <h2>03</h2>
                </div>
                <div className="card2">
                  <h1>
                    Nike Air <br />
                    Max Pre-Day
                  </h1>
                  <p>
                    Taking the classic look of heritage Nike Running into a new
                    realm, the Nike Air Max Pre-Day brings you a fast-paced look
                    that's ready for today's world.A true nod to the past with a
                    design made from at least 20% recycled material by weight.
                  </p>
                  <div className="card2_btn">
                    <button className="Minus_btn" onClick={minus_btn}>
                      -
                    </button>
                    <span>{count}</span>
                    <button
                      className="pilus_btn"
                      onClick={() => {
                        pilus_btn();
                      }}
                    >
                      {" "}
                      +
                    </button>
                  </div>
                  <div className="card2_btn1">
                    <button>Add to Bag</button>
                    <h2>₹ {money.toLocaleString()}</h2>
                  </div>
                </div>
                <div className="imgs_card">
                  <img src={imgs} alt="" />
                </div>
              </div>
            </div>
            <div className="imgs_bloc">
              <div className="container">
                <div className="imgs_block">
                  <div className="imgs_boxx1">
                    <div className="imgs_box">
                      <img
                        onClick={() => {
                          imgs_click(1); 
                        }}
                        src="/public/imgs/imgs-box09.png"
                        alt=""
                      />
                    </div>
                    <div className="imgs_box">
                      <img
                        onClick={() => {
                          imgs_click(2);
                        }}
                        src="/public/imgs/imgs-box03.png"
                        alt=""
                      />
                    </div>
                    <div className="imgs_box">
                      <img
                        onClick={() => {
                          imgs_click(3); 
                        }}
                        src="/public/imgs/imgs-box04.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="video">
                    <img src="/public/imgs/Video.png" alt="" />
                    <h2>Watch Video</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }

  export default App;

