import { useState, useEffect } from "react";
import { Card } from "./components/Card";
function App() {
    const [cvv, setCvv] = useState(0);
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        if (cvv !== 0) setTimeout(closeCvv, 10000);
    }, [cvv]);
    function generarCvv() {
        const newCvv = Math.floor(Math.random() * 900 + 100);
        setCvv(newCvv);
        setDisabled(true);
    }
    function closeCvv() {
        setCvv(0);
        setDisabled(false);
    }
    const container = {
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };
    const button = {
        width: "150px",
        height: "35px",
        borderRadius: "15px",
        backgroundColor: "rgb(54, 88, 154)",
        color: "white",
        fontSize: "large",
        marginBottom: "50px",
    };
    return (
        <div style={container}>
            <button style={button} onClick={generarCvv} disabled={disabled}>
                Generar CVV
            </button>
            <Card cvv={cvv} />
        </div>
    );
}

export default App;
