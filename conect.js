const { default: makeWASocket, downloadContentFromMessage, fetchLatestBaileysVersion, useSingleFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, mentionedJid, processTime, Presence, Mimetype, Browsers, delay 
} = require('@adiwajshing/baileys');

const { hx, fs, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, createExif, wait, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, kyun, state, SaveState, P } = require('./consts-func.js')


const { startAle } = require("./index.js")

console.log(banner3.string)   
console.log(banner2.string)

module.exports = conn = async (conn, update) => {
  
const { connection, lastDisconnect, qr } = update
if(qr) {
console.log(color("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

if(connection === 'connecting') {
 start('2', 'CONECTANDO ALEATORY MD 2.0..')    
}

if(connection === 'open') {
success('2', 'ALEATORY MD 2.0 CONECTADO COM SUCESSO..')
} 

if(connection === 'close') {
var shouldReconnect = ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut)
if(String(lastDisconnect.error).includes("Stream Errored")) {
console.log(color("Stream Errored, pode está conectado em outra sessão o bot ou foi reiniciado, se continuar com essa mensagem repetindo, force a parada do termux, abra novamente e ligue, caso contrário ignore...", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection Failure")) {
exec("rm baileys_store_multi.json")  
exec("rm auth_info_multi.json")
console.log(color("QRCODE ESTÁ MORTO, NÃO ESCANEOU CORRETAMENTE OU ELE DESCONECTOU DO WHATSAPP, IREI APAGAR ELE E GERAR UM NOVO QRCODE, BOA SORTE..", "red"))
process.exit()
} else if(String(lastDisconnect.error).includes("Restart Required")) {
console.log(color("Reinicie se for nescessario, Escaneie o Qrcode em um ambiente escuro faz com que o foco da câmera seja melhor, caso não conectar o qrcode, só seguir esse procedimento básico..", "yellow"))
} else {
console.log('Conexão fechada devido a ', lastDisconnect.error, ', Reconectar ', shouldReconnect)
}

}


if(shouldReconnect) {
 startAle()
}

}
