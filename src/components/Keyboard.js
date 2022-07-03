import React from "react";
import "./Keyboard.css";

class Keyboard extends React.Component {
  constructor({onKeyPress}) {
    super();
    this.keys = null;
    this.onKeyPress = onKeyPress;
  }

  componentDidMount() {
    console.log('Keyboard componentDidMount-------------')
    this.keys = document.querySelectorAll(".key");
    console.log("keys:", this.keys.length);
    this.keys.forEach((key)=>{
      
      key.addEventListener("click", ()=>{
        console.log(key.getAttribute("id"));
        this.onKeyPress(key.getAttribute("id"));
      })
    })
  }

  render() {
    return (
      <div>
        <svg width="400" height="160" viewBox="0 0 390 140">
          <g id="keyboard">
            <g className="key" id="Q">
              <rect
                id="Rectangle 1"
                x="27"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_2" fill="black" fontSize="16" fontWeight="800">
                <tspan x="36.1797" y="40.3182">
                  Q
                </tspan>
              </text>
            </g>
            <g className="key" id="W">
              <rect
                id="Rectangle 1_2"
                x="61"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_3" fill="black" fontSize="16" fontWeight="800">
                <tspan x="67.4844" y="40.3182">
                  W
                </tspan>
              </text>
            </g>
            <g className="key" id="A">
              <rect
                id="Rectangle 1_3"
                x="43"
                y="54"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_4" fill="black" fontSize="16" fontWeight="800">
                <tspan x="52.3281" y="75.3182">
                  A
                </tspan>
              </text>
            </g>
            <g className="key" id="E">
              <rect
                id="Rectangle 1_4"
                x="95"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_5" fill="black" fontSize="16" fontWeight="800">
                <tspan x="105.062" y="40.3182">
                  E
                </tspan>
              </text>
            </g>
            <g className="key" id="S">
              <rect
                id="Rectangle 1_5"
                x="77"
                y="54"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_6" fill="black" fontSize="16" fontWeight="800">
                <tspan x="87.2188" y="75.3182">
                  S
                </tspan>
              </text>
            </g>
            <g className="key" id="Z">
              <rect
                id="Rectangle 1_6"
                x="77"
                y="89"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_7" fill="black" fontSize="16" fontWeight="800">
                <tspan x="87.0547" y="110.318">
                  Z
                </tspan>
              </text>
            </g>
            <g className="key" id="R">
              <rect
                id="Rectangle 1_7"
                x="129"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_8" fill="black" fontSize="16" fontWeight="800">
                <tspan x="139.203" y="40.3182">
                  R
                </tspan>
              </text>
            </g>
            <g className="key" id="D">
              <rect
                id="Rectangle 1_8"
                x="111"
                y="54"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_9" fill="black" fontSize="16" fontWeight="800">
                <tspan x="120.156" y="75.3182">
                  D
                </tspan>
              </text>
            </g>
            <g className="key" id="X">
              <rect
                id="Rectangle 1_9"
                x="111"
                y="89"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_10" fill="black" fontSize="16" fontWeight="800">
                <tspan x="120.094" y="110.318">
                  X
                </tspan>
              </text>
            </g>
            <g className="key" id="T">
              <rect
                id="Rectangle 1_10"
                x="163"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_11" fill="black" fontSize="16" fontWeight="800">
                <tspan x="173.086" y="40.3182">
                  T
                </tspan>
              </text>
            </g>
            <g className="key" id="F">
              <rect
                id="Rectangle 1_11"
                x="145"
                y="54"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_12" fill="black" fontSize="16" fontWeight="800">
                <tspan x="155.32" y="75.3182">
                  F
                </tspan>
              </text>
            </g>
            <g className="key" id="C">
              <rect
                id="Rectangle 1_12"
                x="145"
                y="89"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_13" fill="black" fontSize="16" fontWeight="800">
                <tspan x="154.414" y="110.318">
                  C
                </tspan>
              </text>
            </g>
            <g className="key" id="Y">
              <rect
                id="Rectangle 1_13"
                x="197"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_14" fill="black" fontSize="16" fontWeight="800">
                <tspan x="206.047" y="40.3182">
                  Y
                </tspan>
              </text>
            </g>
            <g className="key" id="G">
              <rect
                id="Rectangle 1_14"
                x="179"
                y="54"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_15" fill="black" fontSize="16" fontWeight="800">
                <tspan x="188.367" y="75.3182">
                  G
                </tspan>
              </text>
            </g>
            <g className="key" id="V">
              <rect
                id="Rectangle 1_15"
                x="179"
                y="89"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_16" fill="black" fontSize="16" fontWeight="800">
                <tspan x="188.328" y="110.318">
                  V
                </tspan>
              </text>
            </g>
            <g className="key" id="U">
              <rect
                id="Rectangle 1_16"
                x="231"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_17" fill="black" fontSize="16" fontWeight="800">
                <tspan x="240.195" y="40.3182">
                  U
                </tspan>
              </text>
            </g>
            <g className="key" id="H">
              <rect
                id="Rectangle 1_17"
                x="213"
                y="54"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_18" fill="black" fontSize="16" fontWeight="800">
                <tspan x="222.016" y="75.3182">
                  H
                </tspan>
              </text>
            </g>
            <g className="key" id="B">
              <rect
                id="Rectangle 1_18"
                x="213"
                y="89"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_19" fill="black" fontSize="16" fontWeight="800">
                <tspan x="223.188" y="110.318">
                  B
                </tspan>
              </text>
            </g>
            <g className="key" id="I">
              <rect
                id="Rectangle 1_19"
                x="265"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_20" fill="black" fontSize="16" fontWeight="800">
                <tspan x="278.211" y="40.3182">
                  I
                </tspan>
              </text>
            </g>
            <g className="key" id="J">
              <rect
                id="Rectangle 1_20"
                x="247"
                y="54"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_21" fill="black" fontSize="16" fontWeight="800">
                <tspan x="257.367" y="75.3182">
                  J
                </tspan>
              </text>
            </g>
            <g className="key" id="N">
              <rect
                id="Rectangle 1_21"
                x="247"
                y="89"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_22" fill="black" fontSize="16" fontWeight="800">
                <tspan x="256.164" y="110.318">
                  N
                </tspan>
              </text>
            </g>
            <g className="key" id="O">
              <rect
                id="Rectangle 1_22"
                x="299"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_23" fill="black" fontSize="16" fontWeight="800">
                <tspan x="308.188" y="40.3182">
                  O
                </tspan>
              </text>
            </g>
            <g className="key" id="K">
              <rect
                id="Rectangle 1_23"
                x="281"
                y="54"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_24" fill="black" fontSize="16" fontWeight="800">
                <tspan x="290.383" y="75.3182">
                  K
                </tspan>
              </text>
            </g>
            <g className="key" id="M">
              <rect
                id="Rectangle 1_24"
                x="281"
                y="89"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_25" fill="black" fontSize="16" fontWeight="800">
                <tspan x="289.117" y="110.318">
                  M
                </tspan>
              </text>
            </g>
            <g className="key" id="P">
              <rect
                id="Rectangle 1_25"
                x="333"
                y="19"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_26" fill="black" fontSize="16" fontWeight="800">
                <tspan x="343.281" y="40.3182">
                  P
                </tspan>
              </text>
            </g>
            <g className="key" id="L">
              <rect
                id="Rectangle 1_26"
                x="315"
                y="54"
                width="30"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_27" fill="black" fontSize="16" fontWeight="800">
                <tspan x="325.445" y="75.3182">
                  L
                </tspan>
              </text>
            </g>
            <g className="key" id="ENTER">
              <rect
                id="Rectangle 1_27"
                x="27"
                y="89"
                width="45"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_28" fill="black" fontSize="10" fontWeight="600">
                <tspan x="33.167" y="107.636">
                  ENTER
                </tspan>
              </text>
            </g>
            <g className="key" id="BACK">
              <rect
                id="Rectangle 1_28"
                x="318"
                y="90"
                width="45"
                height="30"
                rx="5"
                fill="#D9D9D9"
              />
              <text id="Q_29" fill="black" fontSize="10" fontWeight="600">
                <tspan x="333.771" y="108.636">
                  &#60;=
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Keyboard;
