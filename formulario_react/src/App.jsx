// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

// hooks
import { useForm } from "./hooks/useForm";

import "./App.css";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { step, currentComponent, changeStep, firstStep, lastStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={step}/>
        <form onSubmit={(e) => changeStep(step + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!firstStep && (
              <button type="button" onClick={() => changeStep(step - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!lastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
