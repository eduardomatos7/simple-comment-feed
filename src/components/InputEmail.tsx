interface InputEmailProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}
function InputEmail({ email, setEmail }: InputEmailProps) {
  return (
    <div className="form-comment__input"> 
        <label htmlFor='email'>Email</label>
        <input type='email'
        id='email' 
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}/> 
    </div>
  )
}

export default InputEmail