import React from 'react'

export default () => (
  <div className='pagos'>
    <div>
      <img id='visa' src='/utils/visa-circulo.svg'></img>
      <input type='radio' name='visa' />
    </div>
    <div>
      <img id='master' src='/utils/mastercard-circulo.svg'></img>
      <input type='radio' name='master' />
    </div>
    <div>
      <img id='american' src='/utils/american-express-circulo.svg'></img>
      <input type='radio' name='american' />
    </div>

  </div>
)