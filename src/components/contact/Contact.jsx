import "./contact.css"

const Contact = () => {
  return (
    <div className="ctc-container">
        <div className="ctc-content">
            <div className="ctc-info">
                <h3>Rua Fui Ali, Prainha</h3>
                <h2>Vila do Chaves - LN</h2>
                <h4>CEP: 99999-999</h4>
                <h1>99 99999-9999</h1>
            </div>
            <div className="ctc-form">
                <form>
                    <input 
                    type="text" 
                    id="txtNome" 
                    placeholder="Digite seu nome"
                    />
                    <input 
                    type="text" 
                    id="txtEmail" 
                    placeholder="Digite seu e-mail"
                    />
                    <input 
                    type="text" 
                    id="txtTelefone" 
                    placeholder="Digite seu telefone"
                    />
                    <textarea 
                    name="taMensagem" 
                    id="taMensagem" 
                    cols="30" 
                    rows="10"
                    placeholder="Digite sua mensagem"
                    ></textarea>
                    <button>Enviar Mensaggem</button>
                </form>
            </div>
        </div>
        <div className="ctc-map">
        <div style={{ overflow: 'hidden', width: '640px', height: '413px' }}>
            <iframe
                src="https://www.google.com/maps/d/embed?mid=1lpxvIAeOhsxqMqQ2GrFNzonnDCmZe6o&ehbc=2E312F&z=17&hl=en"
                width="1215"
                height="400"
                style={{ border: 0, marginTop: '-67px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
            ></iframe>
        </div>
        </div>
    </div>
  )
}

export default Contact