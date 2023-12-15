import React from 'react'

function UserForm() {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name='name' id='name' placeholder='Digite seu nome' required/>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="email" name='email' id='email' placeholder='Digite seu e-mail' required/>
      </div>
      <div className="form-control">
        <label htmlFor="comentario">Comentário</label>
        <textarea name="comentario" placeholder='Digite sua avaliação sobre o produto' required></textarea>
      </div>
    </div>
  )
}

export default UserForm