import React from 'react';
import { Table } from 'semantic-ui-react';

export default function Balances (props) {
  const { keyring } = props;
  const accounts = keyring.getPairs();

  return (
    <>
      <h1>Balances</h1>
      <Table celled striped>
        <Table.Body>
          {accounts.map((account, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell textAlign='right'>{account.meta.name}</Table.Cell>
                <Table.Cell>{account.address}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
