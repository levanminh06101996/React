import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.jsx";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </UserProvider>
);
