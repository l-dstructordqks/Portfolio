import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex flex-1 h-[calc(100vh-56px)] w-full overflow-hidden">
          <Sidebar />
        </div>
      </div>
      
    </>
  )
}

export default App
