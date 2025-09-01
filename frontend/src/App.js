import { useState, useEffect } from "react";
import HelloWorld from "./utils/HelloWorld.json";

function App() {
  const [account, setAccount] = useState(null);
  const [showContract, setShowContract] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0] || null);
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    try {
      const newAccounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(newAccounts[0]);
    } catch (error) {
      console.log("connectWallet error:", error);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f2f5",
        padding: "2rem",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>Web3 Project</h1>

      {!account ? (
        <button
          onClick={connectWallet}
          style={{
            padding: "1rem 2rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
        >
          Connect MetaMask
        </button>
      ) : (
        <p
          style={{
            padding: "1rem 2rem",
            fontSize: "1rem",
            borderRadius: "8px",
            backgroundColor: "#e0e0e0",
            marginBottom: "1rem",
          }}
        >
          Connected Account: {account}
        </p>
      )}

      <button
        onClick={() => setShowContract(!showContract)}
        style={{
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        {showContract ? "Hide Contract Info" : "Show Contract Info"}
      </button>

      {showContract && (
        <div
          style={{
            maxWidth: "600px",
            padding: "1rem",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            textAlign: "left",
          }}
        >
          <p>
            <strong>Contract ABI:</strong>
          </p>
          <pre
            style={{
              maxHeight: "300px",
              overflowY: "scroll",
              backgroundColor: "#fff",
              padding: "1rem",
              borderRadius: "6px",
            }}
          >
            {JSON.stringify(HelloWorld.abi, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
