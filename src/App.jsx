import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {

  const entry_elements = data.map((entry) =>{
    return(
      <Entry 
        key={entry.id}
        entry={entry}
      />
    )
  })

  return (
    <>
      <Header/>
      <main className="container">
        {entry_elements}
      </main>
    </>
  )
}

export default App
