import { Header, Main, Sidebar } from "./components";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <div className="flex">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
