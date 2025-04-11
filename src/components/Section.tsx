
import { useState } from 'react'
import InputEmail from './InputEmail'
import InputTextArea from './InputTextArea'

function Section() {
    
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState<{ email: string; comment: string; date: string; time: string }[]>([])

    function handleSubmit(e: any){
        e.preventDefault()
        const newComment ={
            email: email,
            comment: comment,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        }
        setComments((prevComments) => [...prevComments, newComment])
        setEmail('')
        setComment('')
    }
  return (
    <>
        <h2>Seção de comentários</h2>
        <form action='' className="form-comment">
        <InputEmail email={email} setEmail={setEmail}/>
        <InputTextArea comment={comment} setComment={setComment}/>
        <button type="submit" className="btn-sbmt" onClick={handleSubmit}> Enviar Comentário </button>
        </form>
        <div className="separator"/>
        <div className="comments">
            {comments.length > 0 ? comments.map((item, index) => (
            
            <div className="comment" key={index}>
                <div className='email'><h3>{item.email}</h3></div>
                <div className='commentDate'><p>Em {item.date}, {item.time}</p></div>
                <div className='commentTextArea'><p>{item.comment}</p></div>
            </div>
           )
        ) : <p className='emptyComment'>Seja o primeiro a comentar!</p>}
           {}
        </div>

</>
  )
}

export default Section