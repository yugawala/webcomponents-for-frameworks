function App() {
  const onClickMethod = () => {
    alert("React側のボタンがクリックされました。");
  };

  return (
    <div className="App">
      <fancy-button
        style={{ "--fancy-button-color": "blueviolet" }}
        onClick={onClickMethod}
      >
        React側のボタン
      </fancy-button>
    </div>
  );
}

export default App;
