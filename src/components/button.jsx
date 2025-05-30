import React from 'react'
import Blockchains from '@depay/web3-blockchains'

export default (props)=>{

  let blockchains = typeof props.blockchains === 'string' ? JSON.parse(props.blockchains).map((name)=>Blockchains[name]) : (props.blockchains || []).map((name)=>Blockchains[name])

  if((!blockchains || blockchains.length === 0) && (props?.configuration?.accept || props?.configuration?.sell)) {

    blockchains = [...new Set(props.configuration.accept.map((item)=>item.blockchain))].map((name)=>Blockchains[name])
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
              <div key={ blockchain.name } title={ blockchain.label } className="SupportedBlockchain" style={{ backgroundColor: blockchain.logoBackgroundColor }}>
                <img src={ blockchain.logo }/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
