import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function validateEmail(email){
  return /.+@.+\..+/.test(email)
}

export default function ContactForm(){
  const formRef = useRef(null)
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [isSending, setIsSending] = useState(false)

  const onChange = (e)=> setForm(f=>({...f,[e.target.name]:e.target.value}))

  const onSubmit = async (e)=>{
    e.preventDefault()
    const errs = {}
    if(!form.name.trim()) errs.name = 'Requerido'
    if(!validateEmail(form.email)) errs.email = 'Correo inválido'
    if(form.message.trim().length < 10) errs.message = 'Mínimo 10 caracteres'
    setErrors(errs)
    if(Object.keys(errs).length===0 && formRef.current){
      setIsSending(true)
      setStatus(null)
      try {
        await emailjs.sendForm(
          'service_sqtd38f',
          'template_qkjpo8g',
          formRef.current,
          '0yW5zvSReudq156AP'
        )
        setStatus({ type: 'success', message: '✅ Mensaje enviado correctamente!' })
        setForm({ name:'', email:'', message:'' })
        formRef.current.reset()
      } catch (error) {
        const errorMessage = typeof error?.text === 'string' ? error.text : 'Inténtalo de nuevo más tarde.'
        setStatus({ type: 'error', message: `❌ Error al enviar el mensaje: ${errorMessage}` })
      } finally {
        setIsSending(false)
      }
    }
  }

  return (
    <form ref={formRef} className="grid" onSubmit={onSubmit} noValidate>
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
        <button className="btn primary" type="submit" disabled={isSending}>{isSending ? 'Enviando…' : 'Enviar'}</button>
      </div>
      {status && (
        <p role="status" className="mt-4" style={{ color: status.type === 'success' ? '#28a745' : '#ff6b6b' }}>
          {status.message}
        </p>
      )}
    </form>
  )
}
