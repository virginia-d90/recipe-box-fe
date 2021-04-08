import React, {useState} from 'react';
import './App.css';

function App() {
  const [stepsData, setStepsData] = useState([{ order: "", step: "" }]);
  const [recipeData, setRecipeData] = useState({
    name: '',
    steps: []
  })

  const handleNameChange = evt => {
    setRecipeData({...recipeData, name: evt.target.value})
    // console.log(recipeData)
  }

  const handleStepChange = (event, index) => {
    const { name, value } = event.target;
    const stepsList = [...stepsData];
    // console.log(`name: ${name}, value: ${value}, ${index}`)
    stepsList[index][name] = value;
    setStepsData(stepsList);
    setRecipeData({...recipeData, steps:stepsData})
  };
  const handleRemoveClick = (index) => {
    const stepsList = [...stepsData];
    stepsList.splice(index, 1);
    setStepsData(stepsList);
  };

  const handleAddClick = () => {
    setStepsData([...stepsData, { order: "", step: "" }]);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(recipeData)
  }
  return (
    <div className="App">
      <h1>Form Test</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input name="name" onChange={e => handleNameChange(e)}/>
        
        {stepsData.map((x, i) => {
          return (
            <div className="box">
              <input
                name="order"
                value={x.order}
                onChange={(e) => handleStepChange(e, i)}
              />
              <input
                name="step"
                value={x.step}
                onChange={(e) => handleStepChange(e, i)}
              />
              <div className="btn-box">
                {stepsData.length !== 1 && (
                  <button onClick={() => handleRemoveClick(i)}>Remove</button>
                )}
                {stepsData.length - 1 === i && (
                  <button onClick={handleAddClick}>Add</button>
                )}
              </div>
            </div>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
