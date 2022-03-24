import { client, checkError } from './client';

export async function fetchTeams() {
  const resp = await client.from('teams').select('*');
  return checkError(resp);
}

export async function fetchTeamsById(id) {
  const resp = await client.from('teams').select(`*, players (*)`).match({ id }).single();
  return checkError(resp);
}
