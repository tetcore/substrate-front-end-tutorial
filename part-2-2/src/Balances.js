import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';

export default function Balances (props) {
  const { api, keyring } = props;
  const accounts = keyring.getPairs();
  const [balance, setBalance] = useState('0');

  useEffect(() => {
    let unsubscribe;

    api.query.balances.freeBalance(accounts[0].address, (currentBalance) => {
        setBalance(currentBalance.toString());
      })
      .then(unsub => { unsubscribe = unsub; })
      .catch(console.error);

    return () => unsubscribe && unsubscribe();
  }, [accounts, api.query.balances, api.query.balances.freeBalance]);

  return (
    <>
      <h1>Balances</h1>
      <Table celled striped>
        <Table.Body>
          <Table.Row key={0}>
            <Table.Cell textAlign='right'>{accounts[0].meta.name}</Table.Cell>
            <Table.Cell>{accounts[0].address}</Table.Cell>
            <Table.Cell>{balance}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

