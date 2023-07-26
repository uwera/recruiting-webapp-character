import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';

function App() {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [showMinRequirements, setShowMinRequirements] = useState(false)
  const [classDisplayed, setClassDisplayed] = useState()

  const getAttributeValue = attr => {
    switch(attr.toLowerCase()) {
      case "strength":
        return strength.toString();
      case "dexterity":
        return dexterity.toString();
      case "constitution":
        return constitution.toString();
      case "intelligence":
        return intelligence.toString();
      case "wisdom":
        return wisdom.toString();
      case "charisma":
        return charisma.toString();
      default:
        return null
    }
  }

  const updateAttr = (attr, val) => {
    if (attr.toLowerCase() === "strength") {
      setStrength(strength + val)
    }
    if (attr.toLowerCase() === "dexterity") {
      setDexterity(dexterity + val)
    }
    if (attr.toLowerCase() === "constitution") {
      setConstitution(constitution + val)
    }
    if (attr.toLowerCase() === "intelligence") {
      setIntelligence(intelligence + val)
    }
    if (attr.toLowerCase() === "wisdom") {
      setWisdom(wisdom + val)
    }
    if (attr.toLowerCase() === "charisma") {
      setCharisma(charisma + val)
    }
  }

  const disabled = attr => {
    let classDisabled = true;
    for (let v in Object(CLASS_LIST[attr])) {
      let attrV = getAttributeValue(v)
      classDisabled = classDisabled && (attrV < CLASS_LIST[attr][v])
    }
    return classDisabled
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        {ATTRIBUTE_LIST.map(elem => {
          return(
            <div>
              {elem}:
              {getAttributeValue(elem)}
              <button onClick={() => updateAttr(elem, 1)}>+</button>
              <button onClick={() => updateAttr(elem, -1)}>-</button>
            </div>
          )
        })}
      </section>
      <section className="App-section">
        <h3>Classes</h3>
        {Object.keys(CLASS_LIST).map( key => {
          return(<div><button disabled={disabled(key)} onClick={() => {setShowMinRequirements(true); setClassDisplayed(key)}}>{key}</button></div>)
        })}
      </section>
      {showMinRequirements && classDisplayed  && (<section className="App-section">
        <h3>{classDisplayed} Minimum Requirements</h3>
      </section>)}
      
    </div>
  );
}

export default App;
