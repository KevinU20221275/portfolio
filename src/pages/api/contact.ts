
export async function POST({ request }: any){
    try {
        const {name, email, subject, message} = await request.json()

        const response = await fetch("https://api.brevo.com/v3/smtp/email",{
            method: "POST",
            headers: {
                "accept" : "application/json",
                "content-type" : "application/json",
                "api-key" : import.meta.env.BREVO_API_KEY
            },
            body: JSON.stringify({
                sender : { name: "Kevin Montano", email: import.meta.env.BREVO_SENDER_EMAIL},
                to : [{email : "kevinmontanodev@gmail.com"}],
                subject,
                htmlContent : 
                         `<p><strong>Nombre:</strong> ${name}</p>
                          <p><strong>Email:</strong> ${email}</p>
                          <p><strong>Mensaje:</strong> ${message}</p>
                         `
            })
        })

        if (response.ok){
            return new Response(JSON.stringify({message: "El mensaje ha sido enviado correctamente"}), {status: 200})
        } else {
            return new Response(JSON.stringify({message:`Hubo un error al enviar el mensaje: ${response.statusText}`}), {status: 409})
        }
    } catch (error) {
        if (error instanceof Error) {
            return new Response(JSON.stringify({error: error.message}), {status: 500})
        }
    }
}
