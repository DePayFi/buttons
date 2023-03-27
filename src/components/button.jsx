import React from 'react'
import Blockchains from '@depay/web3-blockchains'

export default (props)=>{

  let blockchains = []

  switch (props.widget) {
    case 'Payment':
    case 'Donation':
      blockchains = [...new Set(props.configuration.accept.map((item)=>item.blockchain))].map((name)=>Blockchains.findByName(name))
    break;
    case 'Sale':
      blockchains = Object.keys(props.configuration.sell).map((name)=>Blockchains.findByName(name))
    break;
  }

  return (
    <div>
      <div className="Row">
        <button onClick={props.onClick}>{props.label}</button>
      </div>
      <div className="Row">
        {
          blockchains.map((blockchain)=>{
            return(
              <div key={ blockchain.name } title={ blockchain.label } className="SupportedBlockchain">
                <img src={ blockchain.logo }/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
