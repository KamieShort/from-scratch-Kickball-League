import { checkError, client } from './client';

export async function fetchPlayers() {
  const resp = await client.from('players').select('*');
  return checkError(resp);
}
