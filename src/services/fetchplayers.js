import { checkError, client } from './client';

export async function fetchPlayers() {
  const resp = await client.from('players').select('*');
  return checkError(resp);
}

export async function fetchPlayersById(id) {
  const resp = await client.from('players').select(`*, teams (*)`).match({ id }).single();
  return checkError(resp);
}
