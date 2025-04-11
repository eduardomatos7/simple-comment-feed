interface InputTextAreaProps {
    comment: string;
    setComment: React.Dispatch<React.SetStateAction<string>>;
}
function InputTextArea({ comment, setComment }: InputTextAreaProps) {
  return (
    <div className="form-comment__input">
        <label htmlFor='comment'>Comentário</label>
        <textarea 
        id='comment' 
        name="comment" 
        cols={50} 
        rows={3}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        />
        </div> 
  )
}

export default InputTextArea