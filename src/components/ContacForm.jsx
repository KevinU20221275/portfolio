
import { useState } from 'react';

export function ContactForm(){
  const [isSending, setIsSending] = useState(false)
  const [isSuccessSend, setSuccessSend] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    sedError: ''
  })


  const hasErrors = (name, email, subject, message) => {
    if (!email){
      setErrors({...errors, email: 'El campo email es obligatorio' });
    }

    if (!name){
      setErrors({...errors, name: 'El campo nombre es obligatorio' });
    }

    if (!subject){
      setErrors({...errors, subject: 'El campo asunto es obligatorio' });
    }

    if (!message){
      setErrors({...errors, message: 'El campo mensaje es obligatorio' });
    }

    return name === '' || email === '' || subject === '' || message === '';
  }

  const cleanStatesForModal = () => {
    setTimeout(() => {
      setIsSending(false)
      setSuccessSend(null)
    }, 1500)
  }

  async function handleSubmit(event) { event.preventDefault()
    if (hasErrors(formData.name, formData.email, formData.subject, formData.message)) return

    setIsSending(true) 
    const res = await fetch('/api/contact', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(formData), 
    });

    if (res.ok){ 
      const data = await res.json() 
      setFormData({name: '', email: '', subject: '' ,message: ''}) 
      setSuccessSend(true) } 
    else { 
      setSuccessSend(false) 
      setErrors({...errors, sedError: 'Hubo un error al enviar el mensaje, intenta nuevamente' }); 
    }

    cleanStatesForModal() 
  }

  return (
    <div className='md:col-span-2'>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 max-w-2xl mx-auto backdrop-blur-sm p-4 text-white bg-light-surface dark:bg-white/20 rounded-md" id='email-form'>
        <h3 className="font-bold text-white text-lg sm:text-xl">Get in touch</h3>
        <fieldset className='w-full'>
          <input
            type="text"
            className='bg-light-surfaceAlt dark:bg-dark-surface p-3 rounded-md border-none outline-none w-full'
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <span className='text-sm text-red-500'>{errors.name}</span>
        </fieldset>
        <fieldset className='w-full'>
          <input
            type="email"
            className='bg-light-surfaceAlt dark:bg-dark-surface p-3 rounded-md border-none outline-none w-full'
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <span className='text-sm text-red-500'>{errors.email}</span>
        </fieldset>
        <fieldset className='w-full'>
          <input
            type="text"
            className='bg-light-surfaceAlt dark:bg-dark-surface p-3 rounded-md border-none outline-none w-full'
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
          />
          <span className='text-sm text-red-500'>{errors.subject}</span>
        </fieldset>
        <fieldset className='w-full'>
          <textarea
            className='bg-light-surfaceAlt dark:bg-dark-surface p-3 rounded-md border-none outline-none resize-none h-20 w-full'
            placeholder="Write your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <span className='text-sm text-red-500'>{errors.message}</span>
        </fieldset>
        <button type="submit" className='bg-light-surfaceAlt hover:bg-light-accent dark:bg-dark-surface dark:hover:bg-dark-hover px-4 py-2 rounded-md' >Send</button>
      </form>
      <EmailModalMessage isSending={isSending} isSuccessSend={isSuccessSend} />
    </div>
  )
}


