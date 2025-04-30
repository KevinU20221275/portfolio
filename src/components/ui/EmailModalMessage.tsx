export function EmailModalMessage({isSending, isSuccessSend } : {isSending: boolean, isSuccessSend: boolean | null}) {
  return (
    <>
      {isSending && <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-44 flex items-center justify-center rounded-md bg-black/90 animate-[show_.2s_ease-in-out_] `}>
        {isSuccessSend !== null && <h3 className="text-white">{isSuccessSend ? 'Mensaje Enviado con exito' : 'No se puedo enviar el mensaje'}</h3>}
        <span className={`${isSending && isSuccessSend == null ? 'inline-block' : 'hidden'} rounded-full w-12 h-12 border-[5px] border-light-surface border-b-light-surfaceAlt dark:border-white dark:border-b-dark-accent animate-[rotation_1s_linear_infinite]`}></span>  
      </div>}
    </>
  )
}