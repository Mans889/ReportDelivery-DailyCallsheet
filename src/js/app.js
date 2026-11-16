import { api } from './api.js';
const out=document.querySelector('#out');
document.querySelector('#health').addEventListener('click',async()=>{out.textContent='Checking...';try{out.textContent=JSON.stringify(await api('health'),null,2)}catch(e){out.textContent=e.message}});
