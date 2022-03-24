import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
      <div className = "form-box">
        
    <form>
    <div className = "field1">
            <label> customer info </label>
            <input placeholder="Name"/>        
            <input placeholder="Phone 000-000-0000"/>
            <input placeholder="E-mail"/>
            <textarea placeholder="Shipping Address"/>
            <textarea placeholder="Physical location"/>
            </div>

            <button type = "submit" id= "submitBtn" className = "submitBtn"> submit</button>
</form>
    </div>
  );
}

export default App;
