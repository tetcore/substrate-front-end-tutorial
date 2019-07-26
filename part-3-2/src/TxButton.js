import React from 'react';
import { Button } from 'semantic-ui-react';

export default function TxButton ({ api, fromPair, label, params, setStatus, tx }) {
  const makeCall = async () => {
    const fromParam = fromPair
    setStatus('Sending...');

    tx(...params).signAndSend(fromParam, ({ status }) => {
      if (status.isFinalized) {
        setStatus(`Completed at block hash #${status.asFinalized.toString()}`);
      } else {
        setStatus(`Current transfer status: ${status.type}`);
      }
    }).catch((e) => {
      setStatus(':( transaction failed');
      console.error('ERROR:', e);
    });
  };

  return (
    <Button
      onClick={makeCall}
      primary
      type='submit'
    >
      {label}
    </Button>
  );
}
