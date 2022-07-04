import React from "react";
import "./Keyboard.css";

class Keyboard extends React.Component {
  constructor({ onKeyPress }) {
    super();
    this.keys = null;
    this.onKeyPress = onKeyPress;
    this.defaultFill = "#D9D9D9";
    this.wrongFill = "#212121";
    this.wrongPlaceFill = "#FFA500";
    this.rightFill = "#008000"
  }

  componentDidMount() {
    console.log("Keyboard componentDidMount-------------");
    this.keys = document.querySelectorAll(".key");
    console.log("keys:", this.keys.length);
    this.keys.forEach((key) => {
      key.addEventListener("click", () => {
        console.log(key.getAttribute("id"));
        this.onKeyPress(key.getAttribute("id"));
      });
    });
  }

  showKeyStatus(key, status) {
    const el = document.querySelector(`#${key}`);
    const text = el.querySelector("text");
    const color = el.getAttribute("fill");

    if(color == this.rightFill) return;

    let statusColor;
    if(status == 0) statusColor = this.wrongFill;
    if(status == 1) statusColor = this.wrongPlaceFill;
    if(status == 2) statusColor = this.rightFill;

    el.setAttribute("fill", statusColor);
    text.setAttribute("fill", "#FFF");
    
  }

  render() {
    return (
      <div>
        <svg width="350" height="160" viewBox="0 0 336 144">
          <g id="keyboard">
            <g className="key" fill={this.defaultFill} id="Q">
              <rect id="Rectangle 1" width="30" height="45" rx="5" />
              <text id="Q_2" fill="black" fontSize="16" fontWeight="800">
                <tspan x="9.17969" y="29.6364">
                  Q
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="W">
              <rect id="Rectangle 1_2" x="34" width="30" height="45" rx="5" />
              <text id="Q_3" fill="black" fontSize="16" fontWeight="800">
                <tspan x="40.9844" y="29.6364">
                  W
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="A">
              <rect
                id="Rectangle 1_3"
                x="17"
                y="49"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_4" fill="black" fontSize="16" fontWeight="800">
                <tspan x="26.3281" y="78.6364">
                  A
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="E">
              <rect id="Rectangle 1_4" x="68" width="30" height="45" rx="5" />
              <text id="Q_5" fill="black" fontSize="16" fontWeight="800">
                <tspan x="78.5625" y="29.6364">
                  E
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="S">
              <rect
                id="Rectangle 1_5"
                x="51"
                y="49"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_6" fill="black" fontSize="16" fontWeight="800">
                <tspan x="61.2188" y="78.6364">
                  S
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="Z">
              <rect
                id="Rectangle 1_6"
                x="50"
                y="98"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_7" fill="black" fontSize="16" fontWeight="800">
                <tspan x="60.0547" y="127.636">
                  Z
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="R">
              <rect id="Rectangle 1_7" x="102" width="30" height="45" rx="5" />
              <text id="Q_8" fill="black" fontSize="16" fontWeight="800">
                <tspan x="112.203" y="29.6364">
                  R
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="D">
              <rect
                id="Rectangle 1_8"
                x="85"
                y="49"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_9" fill="black" fontSize="16" fontWeight="800">
                <tspan x="94.6562" y="78.6364">
                  D
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="X">
              <rect
                id="Rectangle 1_9"
                x="84"
                y="98"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_10" fill="black" fontSize="16" fontWeight="800">
                <tspan x="93.5938" y="127.636">
                  X
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="T">
              <rect id="Rectangle 1_10" x="136" width="30" height="45" rx="5" />
              <text id="Q_11" fill="black" fontSize="16" fontWeight="800">
                <tspan x="146.086" y="29.6364">
                  T
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="F">
              <rect
                id="Rectangle 1_11"
                x="119"
                y="49"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_12" fill="black" fontSize="16" fontWeight="800">
                <tspan x="129.82" y="78.6364">
                  F
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="C">
              <rect
                id="Rectangle 1_12"
                x="118"
                y="98"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_13" fill="black" fontSize="16" fontWeight="800">
                <tspan x="127.414" y="127.636">
                  C
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="Y">
              <rect id="Rectangle 1_13" x="170" width="30" height="45" rx="5" />
              <text id="Q_14" fill="black" fontSize="16" fontWeight="800">
                <tspan x="179.547" y="29.6364">
                  Y
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="G">
              <rect
                id="Rectangle 1_14"
                x="153"
                y="49"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_15" fill="black" fontSize="16" fontWeight="800">
                <tspan x="162.367" y="78.6364">
                  G
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="V">
              <rect
                id="Rectangle 1_15"
                x="152"
                y="98"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_16" fill="black" fontSize="16" fontWeight="800">
                <tspan x="161.328" y="127.636">
                  V
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="U">
              <rect id="Rectangle 1_16" x="204" width="30" height="45" rx="5" />
              <text id="Q_17" fill="black" fontSize="16" fontWeight="800">
                <tspan x="213.695" y="29.6364">
                  U
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="H">
              <rect
                id="Rectangle 1_17"
                x="187"
                y="49"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_18" fill="black" fontSize="16" fontWeight="800">
                <tspan x="196.516" y="78.6364">
                  H
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="B">
              <rect
                id="Rectangle 1_18"
                x="186"
                y="98"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_19" fill="black" fontSize="16" fontWeight="800">
                <tspan x="196.188" y="127.636">
                  B
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="I">
              <rect id="Rectangle 1_19" x="238" width="30" height="45" rx="5" />
              <text id="Q_20" fill="black" fontSize="16" fontWeight="800">
                <tspan x="251.211" y="29.6364">
                  I
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="J">
              <rect
                id="Rectangle 1_20"
                x="221"
                y="49"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_21" fill="black" fontSize="16" fontWeight="800">
                <tspan x="231.867" y="78.6364">
                  J
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="N">
              <rect
                id="Rectangle 1_21"
                x="220"
                y="98"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_22" fill="black" fontSize="16" fontWeight="800">
                <tspan x="229.664" y="127.636">
                  N
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="O">
              <rect id="Rectangle 1_22" x="272" width="30" height="45" rx="5" />
              <text id="Q_23" fill="black" fontSize="16" fontWeight="800">
                <tspan x="281.188" y="29.6364">
                  O
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="K">
              <rect
                id="Rectangle 1_23"
                x="255"
                y="49"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_24" fill="black" fontSize="16" fontWeight="800">
                <tspan x="264.883" y="78.6364">
                  K
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="M">
              <rect
                id="Rectangle 1_24"
                x="254"
                y="98"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_25" fill="black" fontSize="16" fontWeight="800">
                <tspan x="262.117" y="127.636">
                  M
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="P">
              <rect id="Rectangle 1_25" x="306" width="30" height="45" rx="5" />
              <text id="Q_26" fill="black" fontSize="16" fontWeight="800">
                <tspan x="316.281" y="29.6364">
                  P
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="L">
              <rect
                id="Rectangle 1_26"
                x="289"
                y="49"
                width="30"
                height="45"
                rx="5"
              />
              <text id="Q_27" fill="black" fontSize="16" fontWeight="800">
                <tspan x="299.945" y="78.6364">
                  L
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="ENTER">
              <rect id="Rectangle 1_27" y="98" width="47" height="45" rx="5" />
              <text id="Q_28" fill="black" fontSize="10" fontWeight="600">
                <tspan x="7.16699" y="124.636">
                  ENTER
                </tspan>
              </text>
            </g>
            <g className="key" fill={this.defaultFill} id="BACK">
              <rect
                id="Rectangle 1_28"
                x="289"
                y="98"
                width="47"
                height="45"
                rx="5"
              />
              <text id="Q_29" fill="black" fontSize="10" fontWeight="600">
                <tspan x="305.771" y="124.636">
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
