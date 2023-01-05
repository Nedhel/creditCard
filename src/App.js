import { Card } from "./components/Card";
function App() {
    return (
        <div
            style={{
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid",
            }}
        >
            <Card />
        </div>
    );
}

export default App;
