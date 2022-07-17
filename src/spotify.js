export const clientId = "c124f012797645fe984bb898b072e8f5";

export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "https://react-jl2dcp.stackblitz.io/";



const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `$(authEndpoint)?client_id=$(clientId)&redirect_uri=$(redirectUri)&scope=$(scopes.join("%20))&response_type=token&show_dialog=true`;

//loginUrl = `$(authEndpoint)?client_id=$(clientId)&redirect_uri=$(redirectUri)&scope=$(scopes.join("%20"))&response_type=token&show_dialog=true`;
