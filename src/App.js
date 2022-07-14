import { useState, useRef } from "react";
import styles from "./App.module.css";
import Wordle from "./components/Wordle";

function App() {
  const [max, setMax] = useState(6);
  const [length, setLength] = useState(5);
  const [start, setStart] = useState(false);
  const [canvasFireworks, setCanvasFireworks] = useState(true);
  const [fwPalette, setFWPalette] = useState("random")
  const fwColorArray = [];
  const fwColorTF = useRef(null)
  const getWord = () => {
    let arr_5 = [
      "ALBUM",
      "HINGE",
      "MONEY",
      "SCRAP",
      "GAMER",
      "GLASS",
      "SCOUR",
      "BEING",
      "DELVE",
      "YIELD",
      "METAL",
      "TIPSY",
      "SLUNG",
      "FARCE",
      "GECKO",
      "SHINE",
      "CANNY",
      "MIDST",
      "BADGE",
      "HOMER",
      "TRAIN",
      "STORY",
      "HAIRY",
      "FORGO",
      "LARVA",
      "TRASH",
      "ZESTY",
      "SHOWN",
      "HEIST",
      "ASKEW",
      "INERT",
      "OLIVE",
      "PLANT",
      "OXIDE",
      "CARGO",
      "FOYER",
      "FLAIR",
      "AMPLE",
      "CHEEK",
      "SHAME",
      "MINCE",
      "CHUNK",
      "ROYAL",
      "SQUAD",
      "BLACK",
      "STAIR",
      "SCARE",
      "FORAY",
      "COMMA",
      "NATAL",
      "SHAWL",
      "FEWER",
      "TROPE",
      "SNOUT",
      "LOWLY",
      "STOVE",
      "SHALL",
      "FOUND",
      "NYMPH",
      "EPOXY",
      "DEPOT",
      "CHEST",
      "PURGE",
      "SLOSH",
      "THEIR",
      "RENEW",
      "ALLOW",
      "SAUTE",
      "MOVIE",
      "CATER",
      "TEASE",
      "SMELT",
      "FOCUS",
      "TODAY",
      "WATCH",
      "LAPSE",
      "MONTH",
      "SWEET",
      "HOARD",
      "CLOTH",
      "BRINE",
      "AHEAD",
      "MOURN",
      "NASTY",
      "RUPEE",
      "CHOKE",
      "CHANT",
      "SPILL",
      "VIVID",
      "BLOKE",
      "TROVE",
      "THORN",
      "OTHER",
      "TACIT",
      "SWILL",
      "DODGE",
      "SHAKE",
      "CAULK",
      "AROMA",
      "CYNIC",
      "ROBIN",
      "ULTRA",
      "ULCER",
      "PAUSE",
      "HUMOR",
      "FRAME",
      "ELDER",
      "SKILL",
      "ALOFT",
      "PLEAT",
      "SHARD",
      "MOIST",
      "THOSE",
      "LIGHT",
      "WRUNG",
      "COULD",
      "PERKY",
      "MOUNT",
      "WHACK",
      "SUGAR",
      "KNOLL",
      "CRIMP",
      "WINCE",
      "PRICK",
      "ROBOT",
      "POINT",
      "PROXY",
      "SHIRE",
      "SOLAR",
      "PANIC",
      "TANGY",
      "ABBEY",
      "FAVOR",
      "DRINK",
      "QUERY",
      "GORGE",
      "CRANK",
      "SLUMP",
      "BANAL",
      "TIGER",
      "SIEGE",
      "TRUSS",
      "BOOST",
      "REBUS",
      "UNIFY",
      "TROLL",
      "TAPIR",
      "ASIDE",
      "FERRY",
      "ACUTE",
      "PICKY",
      "WEARY",
      "GRIPE",
      "CRAZE",
      "PLUCK",
      "BRAKE",
      "BATON",
      "CHAMP",
      "PEACH",
      "USING",
      "TRACE",
      "VITAL",
      "SONIC",
      "MASSE",
      "CONIC",
      "VIRAL",
      "RHINO",
      "BREAK",
      "TRIAD",
      "EPOCH",
      "USHER",
      "EXULT",
      "GRIME",
      "CHEAT",
      "SOLVE",
      "BRING",
      "PROVE",
      "STORE",
      "TILDE",
      "CLOCK",
      "WROTE",
      "RETCH",
      "PERCH",
      "ROUGE",
      "RADIO",
      "SURER",
      "FINER",
      "VODKA",
      "HERON",
      "CHILL",
      "GAUDY",
      "PITHY",
      "SMART",
      "BADLY",
      "ROGUE",
      "GROUP",
      "FIXER",
      "GROIN",
      "DUCHY",
      "COAST",
      "BLURT",
      "PULPY",
      "ALTAR",
      "GREAT",
      "BRIAR",
      "CLICK",
      "GOUGE",
      "WORLD",
      "ERODE",
      "BOOZY",
      "DOZEN",
      "FLING",
      "GROWL",
      "ABYSS",
      "STEED",
      "ENEMA",
      "JAUNT",
      "COMET",
      "TWEED",
      "PILOT",
      "DUTCH",
      "BELCH",
      "OUGHT",
      "DOWRY",
      "THUMB",
      "HYPER",
      "HATCH",
      "ALONE",
      "MOTOR",
      "ABACK",
      "GUILD",
      "KEBAB",
      "SPEND",
      "FJORD",
      "ESSAY",
      "SPRAY",
      "SPICY",
      "AGATE",
      "SALAD",
      "BASIC",
      "MOULT",
      "CORNY",
      "FORGE",
      "CIVIC",
      "ISLET",
      "LABOR",
      "GAMMA",
      "LYING",
      "AUDIT",
      "ROUND",
      "LOOPY",
      "LUSTY",
      "GOLEM",
      "GONER",
      "GREET",
      "START",
      "LAPEL",
      "BIOME",
      "PARRY",
      "SHRUB",
      "FRONT",
      "WOOER",
      "TOTEM",
      "FLICK",
      "DELTA",
      "BLEED",
      "ARGUE",
      "SWIRL",
      "ERROR",
      "AGREE",
      "OFFAL",
      "FLUME",
      "CRASS",
      "PANEL",
      "STOUT",
      "BRIBE",
      "DRAIN",
      "YEARN",
      "PRINT",
      "SEEDY",
      "IVORY",
      "BELLY",
      "STAND",
      "FIRST",
      "FORTH",
      "BOOBY",
      "FLESH",
      "UNMET",
      "LINEN",
      "MAXIM",
      "POUND",
      "MIMIC",
      "SPIKE",
      "CLUCK",
      "CRATE",
      "DIGIT",
      "REPAY",
      "SOWER",
      "CRAZY",
      "ADOBE",
      "OUTDO",
      "TRAWL",
      "WHELP",
      "UNFED",
      "PAPER",
      "STAFF",
      "CROAK",
      "HELIX",
      "FLOSS",
      "PRIDE",
      "BATTY",
      "REACT",
      "MARRY",
      "ABASE",
      "COLON",
      "STOOL",
      "CRUST",
      "FRESH",
      "DEATH",
      "MAJOR",
      "FEIGN",
      "ABATE",
      "BENCH",
      "QUIET",
      "GRADE",
      "STINK",
      "KARMA",
      "MODEL",
      "DWARF",
      "HEATH",
      "SERVE",
      "NAVAL",
      "EVADE",
      "FOCAL",
      "BLUSH",
      "AWAKE",
      "HUMPH",
      "SISSY",
      "REBUT",
      "CIGAR",
    ];
    let arr_3 = [
      "ham",
      "jam",
      "cap",
      "red",
      "get",
      "goy",
      "gal",
      "guy",
      "gin",
      "gun",
      "bae",
      "dog",
      "map",
      "nil",
      "cob",
      "caw",
      "aim",
      "Mad",
      "Hog",
      "Pay",
    ];

    let arr_4 = [
      "Bake",
      "Word",
      "List",
      "Four",
      "Five",
      "Nine",
      "Good",
      "Best",
      "Cute",
      "Zero",
      "Huge",
      "Cool",
      "Tree",
      "Race",
      "Rice",
      "Keep",
      "Lace",
      "Beam",
      "Game",
      "Mars",
    ];

    let arr = arr_5;
    if (length == 3) arr = arr_3;
    if (length == 4) arr = arr_4;
    const num = arr.length;
    const ind = Math.floor(Math.random() * num);

    return arr[ind].toUpperCase();
  };

  const updateAttempts = (e) => {
    const newVal = e.target.value;
    console.log("new value", newVal);
    setMax(e.target.value);
  };

  const updateLength = (e) => {
    const newVal = e.target.value;
    console.log("new value", newVal);
    setLength(e.target.value);
  };

  const updateFireworks = (e) => {
    const newVal = e.target.value;
    console.log("new value: ", newVal);
    newVal == 0 ? setCanvasFireworks(false) : setCanvasFireworks(true);
  };

  const updatePalette = (e) => {
    const newVal = e.target.value;
    console.log("new palette: ", newVal);
    setFWPalette(newVal)
  };

  const beginGame = () => {
    setStart(true);
  };


  return (
    <>
      {start && (
        <Wordle
          newWord={getWord()}
          attempts={max}
          canvasFireworks={canvasFireworks}
          colorPalette={fwPalette}
        />
      )}
      {!start && (
        <div className={styles.settingsHolder}>
          <div>WORDL DEMO</div>
          <div className={styles.attemptHolder}>
            <div>
              <span>Max Attempts</span>
              <select
                className={styles.settingsSelect}
                name="attempts"
                onChange={updateAttempts}
                defaultValue="6"
              >
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>

            <div>
              <span>Word Length</span>
              <select
                className={styles.settingsSelect}
                name="length"
                onChange={updateLength}
                defaultValue="5"
              >
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <span>Fireworks</span>
              <select
                className={styles.settingsSelect}
                name="fireworks"
                onChange={updateFireworks}
                defaultValue="1"
              >
                <option value={0}>SVG</option>
                <option value={1}>Canvas</option>
              </select>
            </div>
            <div>
              <span>Color Palette</span>
              <select
                className={styles.settingsSelect}
                name="palette"
                onChange={updatePalette}
                defaultValue="random"
              >
                <option value="random">random</option>
                <option value="tmobile">t-mobile</option>
              </select>
            </div>

            <button onClick={beginGame}>BEGIN</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
