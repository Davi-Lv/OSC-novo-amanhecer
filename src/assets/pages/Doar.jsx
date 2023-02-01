import '../../App.css';

export default function Doar() {
    return (
      <div className="space">
        <h4 className='FaçaSuaDoacao'>Faça seu apoio também</h4>
        <div className='doar'>
          <div className='sep'>
            <div className="tituloDoar">
              <p>Pix ou depósito</p>
            </div>
            <div className="subDoar">
              <p>
                <b>Banco:</b> 655 - Neon Pagamentos S.A. <br/><br/>
                <b>Agência:</b> 0655 <br/><br/>
                <b>Conta:</b> 20755558-3 <br/><br/>
                <b>Pix:</b> novoamanhecerrecife@gmail.com <br/><br/>
                <b>Nome:</b> Igor Mendonça Eloi da Silva <br/><br/>
              </p>
            </div>
          </div>
          <div>
            <div className="tituloDoar">
              <p>Boleto ou credito</p>
            </div>
            <div className="subDoar2">
              <a href=""><p>R$10,00</p></a>
              <p>R$20,00</p>
              <p>R$50,00</p>
              <button>Outros valores</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
  
  