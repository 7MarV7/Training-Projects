import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageProvider from "./components/LanguageProvider"; // ✅ Default import


ReactDOM.createRoot(document.getElementById("root")).render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
);
