import { useState } from 'react'

function validateEmail(email){
  return /.+@.+\..+/.test(email)
}

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e)=> setForm(f=>({...f,[e.target.name]:e.target.value}))

  const onSubmit = (e)=>{
    e.preventDefault()
    const errs = {}
    if(!form.name.trim()) errs.name = 'Requerido'
    if(!validateEmail(form.email)) errs.email = 'Correo inválido'
    if(form.message.trim().length < 10) errs.message = 'Mínimo 10 caracteres'
    setErrors(errs)
    if(Object.keys(errs).length===0){
  // Simula el envío del formulario
      setTimeout(()=> setSent(true), 400)
    }
  }

  if(sent){
    return <p className="mt-4">¡Gracias por tu mensaje! Te responderé pronto.</p>
  }

  return (
    <form className="grid" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" type="text" placeholder="Tu nombre" value={form.name} onChange={onChange} aria-invalid={!!errors.name} />
        {errors.name && <span role="alert" style={{color:'#ff6b6b'}}>{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor="email">Correo</label>
        <input id="email" name="email" type="email" placeholder="tu@correo.com" value={form.email} onChange={onChange} aria-invalid={!!errors.email} />
        {errors.email && <span role="alert" style={{color:'#ff6b6b'}}>{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows="5" placeholder="¿En qué te puedo ayudar?" value={form.message} onChange={onChange} aria-invalid={!!errors.message}></textarea>
        {errors.message && <span role="alert" style={{color:'#ff6b6b'}}>{errors.message}</span>}
      </div>
      <div>
        <button className="btn primary" type="submit">Enviar</button>
      </div>
    </form>
  )
}
