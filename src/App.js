import React, { useState, useEffect } from 'react';

import { ApiPromise, WsProvider } from '@polkadot/api';
import { Container, Dimmer, Loader} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

 export default function App () {
  const [api, setApi] = useState();

  useEffect (() => {
    const provider = new WsProvider();

    ApiPromise.create(provider)
    .then((api) => setApi(api))
    .catch((e)=> console.error(e));
  },[])

  const loader = function (text){
    return (
      <Dimmer active>
        <Loader size='small'>{text}</Loader>
      </Dimmer>
    );
  };
  
  if(!api || !api.isReady){
    return loader('Connecting to the blockchain')
  }

  return (
    <Container>
      Connected
    </Container>
  );
}
