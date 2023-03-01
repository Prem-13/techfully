import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Centrebar from "./components/Centrebar";
import './app.css'


function App() {
  return (
    <div className="wrapperApp">
      
      <Sidebar />
      <Centrebar />
      <Rightbar />
    </div>
  );
}

export default App;
