
function SectionComment() {
  return (
    <div className="container">
    <div  className="section-comment">
        <h2>Seção de comentários</h2>
        <form action='' className="form-comment">
        <div className="form-comment__input"> 
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name="email"/> 
        </div>
        <div className="form-comment__input">
        <label htmlFor='comment'>Comentário</label>
        <textarea id='comment' name="comment" cols={50} rows={5}/>
        </div> 
        <button type="submit" className="btn-sbmt"> Enviar Comentário </button>
        </form>
        <div className="separator"/>
    </div>
    </div>
  )
}

export default SectionComment