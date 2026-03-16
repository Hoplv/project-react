import { useState } from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import { myData, EXAMPLES } from "../data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {myData.map((items) => (
              <MainContent
                key={items.id}
                title={items.title}
                image={items.image}
                desc={items.desc}
              ></MainContent>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          {/* prettier-ignore */}
          <menu>
            <TabButton onSelect={() => handleSelect("components")} label="Components" />
            <TabButton onSelect={() => handleSelect("jsx")} label="JSX" />
            <TabButton onSelect={() => handleSelect("props")} label="Props" />
            <TabButton onSelect={() => handleSelect("state")} label="State" />
          </menu>
          <div id="tab-content">
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <p>{EXAMPLES[selectedTopic].desc}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
