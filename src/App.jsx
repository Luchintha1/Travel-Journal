import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {

  const entry_elements = data.map((entry) =>
    <Entry
      key={entry.id}
      img={entry.img} 
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  )

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
