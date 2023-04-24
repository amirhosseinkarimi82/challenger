import { useState } from "react";
import "./App.css";
import { mockGetToken } from "./mock";

function App() {
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const submitCode = (e) => {
    e.preventDefault();
    const code = Number(e.target[0].value);
    const userNumber = window.location.pathname.split("/").filter((i) => i)[0];

    if (!userNumber) return setError("number is not found");

    if (!code || isNaN(code)) return setError("code is not a number");

    setLoading(true);
    mockGetToken(userNumber, code)
      .then((res) => {
        setToken(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  if (loading)
    return (
      <div className="center">
        <p>loading ...</p>
      </div>
    );
  if (!token)
    return (
      <form onSubmit={submitCode} className="center">
        <div>
          <input placeholder="enter code" />

          <button type="submit">submit</button>
          <br />
          {error && <p style={{ margin: "1rem" }}>{error}</p>}
        </div>
      </form>
    );
  return (
    <div className="center">
      <p>wellcom to our challenge</p>
    </div>
  );
}

export default App;
