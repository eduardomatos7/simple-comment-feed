
function SectionComment() {
  return (
    <div  className="container">
        <h2>Seção de comentários</h2>
        <form action=''>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name="email"/> 
        <label htmlFor='comment'>Comentário</label>
        <textarea id='comment' name="comment" cols={50} rows={5} style={{resize: 'none'}}/> 
        <button type="submit"> Enviar Comentário </button>
        </form>
    </div>
  )
}

export default SectionComment