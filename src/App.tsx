import Chat from "./components/Chat/Chat";
import Orb from "./components/Orb/Orb";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#09090b",
        color: "white",
      }}
    >
      <Header />

      <div
        style={{
          flex: 1,
          display: "flex",
        }}
      >
        <Sidebar />

<main
  style={{
    flex: 1,
    display: "flex",
  }}
>
  <Chat />
</main>
      </div>
    </div>
  );
}