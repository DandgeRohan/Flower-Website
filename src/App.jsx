import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/AppRoutes";
import MainFooter from "./components/layout/MainFooter";
import MainHeader from "./components/layout/MainHeader";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-outfit">
      <BrowserRouter>
        <MainHeader />
        <main className="grow layout">
          <AppRoutes />
        </main>
        <MainFooter />
      </BrowserRouter>
    </div>
  );
};


export default App;