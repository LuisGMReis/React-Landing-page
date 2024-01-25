import Clientes from "./components/Clientes";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <main className="flex flex-col min-h-screen py-4">
      <Header />
      <Hero />
      <Clientes />
    </main>
  )
}
