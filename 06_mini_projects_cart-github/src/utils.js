
const URL = 'https://api.github.com/users/'

export async function fetchUser(userName) {
  const r = await fetch(URL + userName);
  if(!r.ok) {
    throw Error('Bad response')
  }
  return await r.json();
}

export function sleep(ms = 2000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
