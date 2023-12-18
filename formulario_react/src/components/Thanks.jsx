import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import "./Thanks.css"

function Thanks() {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opnião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.
      </p>
      <p>
        Para concluir sua avaliação clique no botão de Enviar abaixo
      </p>
      <h3>Aqui está o resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: {<BsFillEmojiHeartEyesFill/>}</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>
    </div>
  )
}

export default Thanks