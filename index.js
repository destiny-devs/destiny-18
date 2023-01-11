/*============≠≠==========≠≠=============\\


NÃO PASSE O BOT PARA NINGUÉM, MUITOS VÃO FINGIR SER AMIGO. 

MUITOS DESEJAM COMPRAR PARA REVENDER E DIZER QUE FEZ.. 

EU ALEATORY NÃO FIZ TUDO, ASSUMO ISSO, PRECISEI DE AJUDA

PRA ISSO TENHO AMIGOS, PRA EVOLUIR JUNTO, ENTÃO.. 

NÃO JOGUE O ESFORÇO QUE TIVE, APESAR DE NÃO SER TANTO A 

VISTA DE QUEM JÁ CONHECE O BASTANTE DA ÁREA.. 


//=======================================*/

const { default: makeWASocket, downloadContentFromMessage, useSingleFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion
} = require('@adiwajshing/baileys');

//_-_-_-_-_-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-\\

const { hx, fs, Boom, axios, chalk, yts, crypto, util, P, encodeUrl, linkfy, request, cheerio, ms, ffmpeg, imgbb, googleImage, googleIt, fetch, imageToBase64, webp2gifFile, webp_mp4, EmojiAPI, qrterminal, emoji, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, insert, response, addLimit, getLimit, mediafireDl, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, isFiltered, addFilter, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanime, quizanimais, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, runtime, getpc, supre, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, wait, getExtension, h2k, generateMessageID, getGroupAdmins, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, cmdadd, addMetadata, chyt, ttthelp, tttme, tttset, esp, kyun, simih } = require('./consts-func.js')

//-_-_-_-_-_-_-_-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\

const { adeuscara, welcome_group, welcome_group2, bye_group, bye_group2, voting, sotoy, addVote, delVote, countMessage, comandos, welkom2, modobn, nsfw, daily, nescessario, welkom, premium, limitefll, antiflood, samih, samih2, _leveling, _level, bancht, anticall, ban, afk, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, antilink, antifake, antilinkhard, autofigu, antilinkgp, antiimg, antisticker, antinotas, antictt, anticatalogo, antidoc, antiloc, antipv, antivid, antiaudio, palavra, palavrao, store, state, saveState } = require('./consts-func.js')

//-_-_-_-_-_-_-_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { adms, alteradores, animes, menudono, figurinhas, jogos, loja, menu, menubasico, menuinfo, menuplay, nuvem, pack18 } = require('./menus/menu.js')



const { infokpet, prefixokbv, legendakbye, descriçãokwelcome, tagkgroupw, tagkwelcome, legekwelcome, infootsu, infouchiha, infouzumaki, infohyuuga, infoakatsu } = require('./menus/infodens.js')

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd } = require("./dono/nescessario.json")

//====================≠≠===============\\
 
 const Banspam = JSON.parse(fs.readFileSync('./datab/grupos/antispam.json'));
 
 const { mediafire } = require('./lib/mediafire')
 
 const maker = require('mumaker')
 
 const { textpro } = require('./lib/textpro')
 
 const { lirikLagu } = require('./lib/lirik.js')
 
 const uber = require('uberduck-api')
 
 
cdd = nescessario.cdd
 
crtt = nescessario.crtt
 
fundo1 = nescessario.fundo1

fundo2 = nescessario.fundo2
 
dono2 = nescessario.dono2

dono3 = nescessario.dono3
 
dono4 = nescessario.dono4

dono5 = nescessario.dono5
 
NomeDoBot = setting.NomeDoBot

NickDono = setting.NickDono

numerodono = setting.numerodono 

prefix = setting.prefix1

prefix2 = setting.prefix2

prefix3 = setting.prefix3

prefix4 = setting.prefix4

banChats = nescessario.banChats 

logo = logoslink.logo

limitefl = limitefll.limitefl

var lista = { ativada: true }

numbernye = '0'

blocked = [] 

hitt = []

keyale = "key-rafa-oliveira-2.0"

const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
+ 'VERSION:3.0\n' 
+ 'FN:Nero\n' // Nome completo
+ 'ORG:Komi-bot;\n' // A organização do contato
+ 'TEL;type=CELL;type=VOICE;waid=${numerodono}:${numerodono}\n' // WhatsApp ID + Número de telefone
+ 'END:VCARD' // Fim do ctt

const { Aki } = require('aki-api')
const region = 'pt'
jogo = {
jogador: '',
now: true
}

//=====================================\\

//======== ( Emojis do Tiago ) =========\\

var emojos = [`🕉️`,`✝️`,`☪️`,`☸️`,`✡️`,`🔯`,`🕎`,`☯️`,`☦️`,`🛐`,`⛎`,`♒`,`♑`,`♐`,`♏`,`♎`,`♌`,`♋`,`♊`,`♉`,`♈`,`♓`,`🆔`,`⚛️`,`🈶`,`🈚`,`🈸`,`🈺`,`🈷️`,`✴️`,`🆚️`,`🈴`,`🈵`,`🈹`,`🈲`,`🅰️`,`🅱️`,`🆑`,`🅾️`,`🏧`,`🚾`,`♿`,`🅿️`,`🛗`,`🈳`,`🈂️`,`🛂`,`🛃`,`🛄`,`🛅`,`🚹`,`🚺`,`🚼`,`⚧`,`🚻`,`🚮`,`🎦`,`📶`,`🈁`,`🔣`,`🔤`,`🔡`,`🔠`,`🆖`,`🆗`,`🆙`,`#️⃣`,`🔄`,`🔂`,`🔁`,`🔀`,`⏺️`,`⏹️`,`⏸️`,`🔢`]

function EmojeG(setgg){
return setgg[Math.floor(Math.random() * (setgg.length))]
}

// ======== ( Final ) ======== \\


const startAle = async() => {

// ABAIXO: INÍCIO DE CONEXÃO

const destiny = makeWASocket({
logger: P({ level: 'fatal' }),
printQRInTerminal: true,
auth: state
})

store.bind(destiny.ev)



//==============Clans 🥋

const guildasdir = './datab/usuarios/guildas.json'
const guildas  = JSON.parse(fs.readFileSync(guildasdir))

let dataclan = []
for (let i = 0; i < guildas.length; i++){
dataclan.push(guildas[i].clan)
}

const clanId = (userId) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].id.includes(userId)) {
position = i
}
})
if (position !== false) {
return guildas[position].clan
}
}

const clanPs = (userId) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].id.includes(userId)) {
position = i
}
})
if (position !== false) {
return position
}
}

const levelclanId = (userId) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].clan === userId) {
position = i
}
})
if (position !== false) {
return guildas[position].level
}
}

const attacksclanId = (userId) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].clan === userId) {
position = i
}
})
if (position !== false) {
return guildas[position].attacks
}
}

const clanLevel = (userId, amount) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].clan === userId) {
position = i
}
})
if (position !== false) {
guildas[position].level += amount
fs.writeFileSync(guildasdir, JSON.stringify(guildas, null, 2) + '\n')
}
}

const clanAttacks = (userId, amount) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].clan === userId) {
position = i
}
})
if (position !== false) {
guildas[position].attacks += amount
fs.writeFileSync(guildasdir, JSON.stringify(guildas, null, 2) + '\n')
}
}

//=====================










//===============(BEM VINDO)=============\\


destiny.ev.on('group-participants.update', async (ale) => {
  
const groupMetadata = await destiny.groupMetadata(ale.id) 
  
const mdata = await destiny.groupMetadata(ale.id)  


// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(ale)
if(dbackid.indexOf(ale.id) >= 0) {
if (ale.action == 'add'){ 
num = ale.participants[0]
var ind = dbackid.indexOf(ale.id)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await destiny.sendMessage(mdata.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
destiny.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
return
}
}
}

// FIM LISTANEGRA CONST ^



// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 

if(antifake.includes(ale.id)) {
if (ale.action === 'add' && !ale.participants[0].startsWith(55)){
num = ale.participants[0]
destiny.sendMessage(mdata.id, {text: ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️'})
await delay(1000)
destiny.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
}
}

if(antifake.includes(ale.id)) {
if (ale.action === 'add' && ale.participants[0].startsWith(55800)){
num = ale.participants[0]
destiny.sendMessage(mdata.id, {text: ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️'})
await delay(1000)
destiny.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
}
}

// FIM ANTIFAKE ^

//====================================\\

function neroespera(index){
destiny.sendMessage(from, { product: { productImage: fs.readFileSync('./logos/clan.jpg'), description: "youth dev's", title: index , productImageCount: 1, productId: "4939046979532720", currencyCode: "USD", priceAmount1000: "100" }, "businessOwnerJid": "559185841876@s.whatsapp.net" });
}

function egirls(index){
destiny.sendMessage(from, { product: { productImage: fs.readFileSync('./logos/egirls.jpg'), description: "youth dev's", title: index , productImageCount: 1, productId: "4939046979532720", currencyCode: "USD", priceAmount1000: "100" }, "businessOwnerJid": "559185841876@s.whatsapp.net" });
}


// BEM VINDO COMPLETO 


if(welkom.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {
  
// PEGAR DESCRIÇÃO DO GRUPO. 

const groupDesc = await groupMetadata.desc  
  
try {
ppimg = await destiny.profilePictureUrl(ale.participants[0])
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

try {
ppgp = await destiny.profilePictureUrl(mdata.id)
} catch {
ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`)

const groupIdWelcomed = []
const groupIdBye = []
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)
for(let obj of bye_group) groupIdBye.push(obj.id)


const isByed = groupIdBye.indexOf(ale.id) >= 0 ? true : false

const isWelcomed = (groupIdWelcomed.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(ale.id)
teks = welcome_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', destiny.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata.subject)
}
let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
await fs.writeFileSync(ran, buff)

fs.unlinkSync(ran)
imgbuff = await getBuffer(`https://aleatoryapi.herokuapp.com/welcome?titulo=BEM%20VINDO(A)&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeUrl(mdata.subject)}`)
destiny.sendMessage(mdata.id, {image: imgbuff, 
mentions: ale.participants, caption: teks})

} else if(ale.action === 'remove') {
mem = ale.participants[0]

try {
ppimg = await destiny.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}


if(isByed) {
var ind = groupIdBye.indexOf(ale.id)
teks = bye_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', destiny.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)

imgbuff = await getBuffer(`https://aleatoryapi.herokuapp.com/welcome?titulo=Adeus&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=SAIU DE ${encodeUrl(mdata.subject)}`)
destiny.sendMessage(mdata.id, {image: imgbuff, caption: teks, 
mentions: ale.participants})
 fs.unlinkSync(ran)

}
} catch (e) {
console.log(e);
}
}
})
// FIM ^


// BEM VINDO 2 ( SEM FOTO )

destiny.ev.on('creds.update', saveState);
destiny.ev.on('group-participants.update', async (ale) => {
 

if(welkom2.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {

const groupMetadata = await destiny.groupMetadata(ale.id) 
  
const mdata = await destiny.groupMetadata(ale.id)  

// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await groupMetadata.desc

const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)
for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isByed2 = groupIdBye2.indexOf(ale.id) >= 0 ? true : false

const isWelcomed2 = (groupIdWelcomed2.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(ale.id)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', destiny.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata.subject)
}

destiny.sendMessage(mdata.id, {text: teks}, {mentions: ale.participants})

} else if(ale.action === 'remove') {
mem = ale.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(ale.id)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', destiny.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

destiny.sendMessage(mdata.id, {text: teks}, {mentions: ale.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
console.log(e);
}
}
})
// FIM BEM VINDO (2)

destiny.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return 
saveState()
if (info.message.protocolMessage) return 
await destiny.readMessages([info.key]);
if (info.key && info.key.remoteJid == 'status@broadcast') return

const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

global.prefix

global.blocked

const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const isGroup = from.endsWith('@g.us')

//==============(BODY)================\\
var body = (type === 'conversation') ? info.message.conversation : (type === 'imageMessage') ? info.message.imageMessage.caption : (type === 'videoMessage') ? info.message.videoMessage.caption : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix) || body.startsWith(prefix2) || body.startsWith(prefix3) || body.startsWith(prefix4)
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//================(BADY)================\\

bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=====================================\\


//===============(BUDY)==================\\

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

//======================================\\

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

//=====================================\\

const groupMetadata = isGroup ? await destiny.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)

const botNumber = destiny.user.id.split(':')[0]+'@s.whatsapp.net'
const argss = body.split(/ +/g)
const testat = body
const ants = body
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(' ')

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

const numerodono = [`${nmrdn}`, `${nescessario.dono1}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./armor/js/infosorteio.js')

//=========(enviar.espere)=============\\

const votacao = JSON.parse(fs.readFileSync('./dados/duelo/votacao.json'))

const { addVotoDuelo, delVotoDuelo } = require('./lib/votoduelo.js')

const votacaoduelo = JSON.parse(fs.readFileSync('./dados/duelo/votacaoduelo.json'))

const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

const registro = JSON.parse(fs.readFileSync('./datab/usuarios/registro.json'));

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\

//=======(ADMS/DONO/ETC..CONST)========\\

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot

const DonoOficial = setting.numerodono.includes(sender) 

const isPremium = premium.includes(sender)

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

//============(FUNÇÕES)============\\

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const isVote = isGroup ? voting.includes(from) : false

const isModobn =  isGroup ? modobn.includes(from) : true

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isBanned = ban.includes(sender)

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isnit = nit.includes(sender) 

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAutofigu = isGroup ? autofigu.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const ischyt = chyt.includes(sender)

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isViewOnce = (type == 'viewOnceMessage')

//=======================================\\

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

//=========(CONSTS-FUNÇÕES)============\\

const isWelkom = isGroup ? welkom.includes(from) : false

const issupre = supre.includes(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false

const isBanchat = isGroup ? bancht.includes(from) : false	

//=====================================\\



//==========(VERIFICADO)===============\\

const selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`, 'jpegThumbnail': fs.readFileSync('./logos/logo2.jpg')}}}

//=====================================\\

if (info.key.fromMe && !isCmd) return

const isMentioned = info?.message?.extendedTextMessage?.contextInfo?.mentionedJid >= 1 ? true : false
const isQuoted = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage ? true : false
const mentioned = isMentioned ? info.message.extendedTextMessage.contextInfo.mentionedJid : isQuoted ? [info.message.extendedTextMessage.contextInfo.participant] : null

const reply = (texto) => {
destiny.sendMessage(from, { text: texto }, {quoted: info})
}

const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.id)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await destiny.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }


const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const sendSticker = (from, filename, info) => {
destiny.sendMessage(from, {sticker: filename}, {quoted: info})
}

const sendImage = (ytb) => {
destiny.sendMessage(from, {image: ytb}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
destiny.sendMessage(hehe, {text: ytb})
}


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? destiny.sendMessage(from, {text: teks.trim(), mentions: memberr}) : destiny.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
destiny.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}


const groupIdWelcomed = []	
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)

const groupIdBye = []
for(let obj of bye_group) groupIdBye.push(obj.id)

const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	
	//-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_\\

const isVoto = isGroup ? votacao.includes(from) : false

const isVotoDuelo = isGroup ? votacaoduelo.includes(from) : false

/** VOTAÇÃO ESTILO DUELO : VS **/

if( isGroup ) {

if (budy.toLowerCase() === 'um'){

let voto = JSON.parse(fs.readFileSync(`./dados/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./dados/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possível votar duas vezes.', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '1'
})
fs.writeFileSync(`./dados/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `VOTAÇÃO...\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto.`
for(let i = 0; i < voto.length; i++) {
_voto +=  `\n\n========\nMembro: @${voto[i].participante.split('@')[0]}\nVotou em: ${voto[i].votacao}\n========`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mencionar(_voto,_p,true)
}
} else if (budy.toLowerCase() === 'dois'){
const voto = JSON.parse(fs.readFileSync(`./dados/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./dados/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possivel votar duas vezes.', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '2'
})
fs.writeFileSync(`./dados/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `VOTAÇÃO...\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto.`
for(let i = 0; i < voto.length; i++) {
_voto +=  `\n\n========\nMembro: @${voto[i].participante.split('@')[0]}\nVotou em: ${voto[i].votacao}\n========\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mencionar(_voto,_p,true)
}
}
}

//=====(FUNÇÃO-CHECAR-LIMIT)====\\
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return destiny.sendMessage(from,{text: `[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`},{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
destiny.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
destiny.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
}
} 
							
	//funtion limitado
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
destiny.sendMessage(from, {text: jrpl.limitend(pushname)}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json',JSON.stringify(_limit))
return false
}
}
	
const sendFileFromUrl = async (from, url, caption, info, men) => {
let mime = ''; 
let res = await axios.head(url)
mime = res.headers['content-type'] 
if (mime.split("/")[1] === "gif") { 
return destiny.sendMessage(from, {video: await getBuffer(url),
caption: caption, gifPlayback: true, 
mentions: men ? men : []}, {quoted: info}) 
}
 
let type = mime.split("/")[0]+"Message" 
if(mime === "application/pdf"){ 
return destiny.sendMessage(from, {document: await getBuffer(url), mimetype: 'application/pdf', 
caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 

if(mime.split("/")[0] === "image"){ 
return destiny.sendMessage(from, {image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
}
if(mime.split("/")[0] === "video"){ 
return destiny.sendMessage(from, {video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 
if(mime.split("/")[0] === "audio"){ 
return destiny.sendMessage(from, {audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: info}) 
}
}
	
const sendMediaURL = async(to, url, text ="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
destiny.sendMessage(to, {type: media, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}}, { quoted: info})
fs.unlinkSync(filename)
});
}   

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}

const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}

return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
destiny.sendMessage(id, listMessage)  
}

// ENVIAR BOTÃO COM TEXTO
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
destiny.sendMessage(id, buttonMessage, {quoted: vr})
}

/////////////

const sendBvid = async (id, vid1, text1, desc1, but = [], vr) => {
templateMessage = {
video: {url: vid1},
caption: text1,
footer: desc1,
templateButtons: but,
}
destiny.sendMessage(id, templateMessage, {quoted: vr})
}



// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
destiny.sendMessage(id, buttonMessage, {quoted: vr})
}

// PRA ENVIAR BOTÃO DE TEMPLATE
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
destiny.sendMessage(id, templateMessage, {quoted: vr})
}

//////////

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
destiny.sendMessage(from, {sticker: bla}, {quoted: info})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
destiny.sendMessage(from, {sticker: buff}, { quoted: info})
fs.unlinkSync(rano)
})
}

if(isAutofigu && isGroup) {
if(type == "videoMessage") {
buff = await getFileBuffer(info.message.videoMessage, 'video')
ran = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
enviarfiguUrl(`${res}`).catch(e => {
})
fs.unlinkSync(ran, buff)
} else if(type == "imageMessage") {
buff = await getFileBuffer(info.message.imageMessage, 'image')
ran = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
enviarfiguUrl(`${res}`).catch(e => {
})
fs.unlinkSync(ran, buff)
}
}

//=====================Dinheiro 💰💰💰
const bunda = JSON.parse(fs.readFileSync('./datab/jsons/Pets/petsch.json'))

const dinheiro = JSON.parse(fs.readFileSync('./datab/jsons/dinheiro/dinheiro.json'))

const minerar = JSON.parse(fs.readFileSync('./datab/jsons/dinheiro/minerar.json'))

const isMinerar = minerar.includes(sender)

const roubar = JSON.parse(fs.readFileSync('./datab/jsons/dinheiro/roubar.json'))

const isRoubar = roubar.includes(sender)

const money = (sender, amount) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (dinheiro[i].id === sender) {
position = i
}
})
if (position !== false) {
dinheiro[position].dinheiro += amount
fs.writeFileSync('./datab/jsons/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
}
}

const getMoneyId = (sender) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (dinheiro[i].id === sender) {
position = i
}
})
if (position !== false) {
return dinheiro[position].id
}
}
const MoneyId = getMoneyId(sender)

const getMoney = (sender) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (dinheiro[i].id === sender) {
position = i
}
})
if (position !== false) {
return dinheiro[position].dinheiro
}
}
const userId = getMoney(sender)

const PetUser = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].pet
}
}
const NomePet = PetUser(sender)

const getNumbe = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].id
}
}
const DonoPet = getNumbe(sender)

const getSexopet = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].sexo
}
}
const SexoPett = getSexopet(sender)

const getVidaPet = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].vida
}
}
const VidaDoPet = getVidaPet(sender)

const getStatusVida = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].statu
}
}
const StatusVivo = getStatusVida(sender)

const getProteção = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].proteção
}
}

const getPosition = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return position
}
}

const energypet = (sender, amount) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
bunda[position].energia += amount
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
}
}

const getEnergy = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].energia
}
}
const PetEnergy = getEnergy(sender)

const getPosiPet = (index) => {
let position = undefined
bunda.forEach((o, i) => {
if (o.id == index){
position = i
}
})
return position
}

const PosiMoney = (index) => {
let position = undefined
dinheiro.forEach((o, i) => {
if (o.id == index){
position = i
}
})
return position
}

function petAtack(tipo){
if (tipo == 'Água'){
var atack = ["Rajada de Água Suprema#70","Bomba de Água#80","Mini Gotinhas de Águas#90"]
} else if (tipo == 'Fogo'){
var atack = ["Canhão de Fogo#70","Rabada De Fogo#65", "Fogo Emo#90"]
} else if (tipo == 'Gelo'){
var atack = ["Frio Artico#70", "Golpe gelado#80", "Espinhos de Gelo#90"]
}
return atack[Math.floor(Math.random() * atack.length)]
}

/////////

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.includes(`@${nmrdnofc1}`)) {
const tabelin = JSON.parse(fs.readFileSync(`./func/afk/afk-@${nmrdnofc1}.json`));  

txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`

destiny.sendMessage(from, {text: txt}, {quoted: info})
}
}
 
if(isGroup && fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {

const sairalg = JSON.parse(fs.readFileSync(`./func/sairgp/sairgp-${from}.json`)); 

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

if(datinhaofc >= sairalg.Data_de_sair) {

group = await destiny.groupMetadata(from)
member = group['participants']
mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
options = {
text: `Atenção membros, aqui quem está falando é o bot com a mensagem automática, sairei do grupo por o tempo que foi realizado no dia que alugou, completou 30 dias....`,
mentions: mem,
quoted: info
}
destiny.sendMessage(from, options)

exec(`cd func && cd sairgp && rm sairgp-${from}.json`)

setTimeout(async() => {
reply(`${prefix}sairgp`)
}, 5000)
}
}

if(fs.existsSync("baileys_store_multi.json")) {
statsObj = fs.statSync('./baileys_store_multi.json')  

if(convertBytes(statsObj.size) >= "20 MB") {
exec("rm baileys_store_multi.json")
}
}
 
//========================================\\
//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy.toLowerCase().startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
//========================================\\



//========(FUNÇÃO DE LEVEL)===========\\

if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
bla = fs.readFileSync('./audios/level.mp3')
destiny.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
gzx = fs.readFileSync('./logos/logo2.jpg')
rafa = `  
╭──────────
│    ◪ LEVEL UP ◪
┝──────────
│❒ 
│〽️NUMERO: ${sender.split("@")[0]}.               
│🌐PATENTE*: ${patt}
│♻️XP: ${getLevelingXp(sender)}
│📉LEVEL: ${getLevel} -> ${getLevelingLevel(sender)}
│❒
╰───╼╼╼╼╼╼➢   `   
await destiny.sendMessage(from, {image: gzx, caption: rafa})
}
} catch (err) {
console.error(err)
}
}

//=======================================\\
//=======================================\\



const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
EnviarAlgo(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}


//===================================\\

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./armor/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { destiny.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
destiny.sendMessage(from, {text:`
╭━〔 🥷 JOGO DAS LETRAS 🥷〕━⬣
║ ▢ DESCUBRA A PALAVRA
║ ▢ ANAGRAMA: ${dataAnagrama2.embaralhada}
║ ▢ DICA: ${dataAnagrama2.dica}
╰────────────────
`}) 
}, 5000)
}}

//========================================\\


		//JOGO QUIZ
if(isGroup && fs.existsSync(`./armor/quizanim-${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
destiny.sendMessage(from,{text: `Parabéns ${pushname} você acertou\n${dataAnagramaa.original}\nProximo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/quizanim-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await destiny.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}, 5000)
}
}

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             

///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff)
}
if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff1 = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff1)
}

//=================== ANTI SPAM CMD ================\\


if (isGroup && isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && isFlode == undefined){
var nero = { id: sender, contador: 1 }
Flode.push(nero)
setTimeout( () => {
Flode.splice(isFlode, 1)
}, 9000)
} else if (isGroup && isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && Flode[isFlode].contador < 4){
Flode[isFlode].contador += 1
console.log(Flode)
} else if (isGroup && isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && Flode[isFlode].contador >= 4){
await destiny.groupSettingUpdate(from, 'announcement')
reply(`olá você acaba de floda muitos comandos consecutivamente, por esse motivo você será banido`)
destiny.groupParticipantsUpdate(from, [sender], 'remove')
await destiny.groupSettingUpdate(from, 'not_announcement')
reply(`GRUPO ABERTO, USE COM SABEDORIA, NAO SENDO DEMENTE.`)
}


//=========(ANTIPV-QUE-SÓ-FALA)==========\\



//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////,

if (!isGroup && isCmd) console.log('\033[0;35m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]))

if (!isGroup && !isCmd && !info.key.fromMe) console.log('\033[0;35m~\x1b[1;37m>', '[\033[0;35mMENSAGEM\x1b[1;37m]', 'do ', color(sender.split('@')[0]))

if (isCmd && isGroup) console.log('\033[0;35m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))

if (!isCmd && isGroup && !info.key.fromMe) console.log('\033[0;35m~\x1b[1;37m>', '[\033[0;35mMENSAGEM\x1b[1;37m]',  'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))
//======(JOGO-DA-VELHA)=======(Função)===\\

//////////_FUNÇÕES DO JOGO DA VELHA_//////
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
destiny.sendMessage(from, {text: chatAccept}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
 destiny.sendMessage(from, {text:
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`}, {quoted: info,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

destiny.sendMessage(from, {text: chatWon}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
destiny.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
}


//=================================\\

async function AntilinkHardF() {
if(isUrl(body) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
linkgpp = await destiny.groupInviteCode(from)
if(!isUrl(body)) return 
if(budy.match(`${linkgpp}`)) return 
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(body) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
linkgpp = await destiny.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(body)) return 
reply('*Link detectado, punindo usuário...*')
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()
joguinhodavelha()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy.includes("chat.whatsapp.com/")){
if(!budy.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await destiny.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}
}

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
//====================================\\


//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\


//============(EVAL-EXECUÇÕES)===========\\

if (budy.startsWith('>')){
try {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && !issupre && !ischyt) return
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))

return reply(JSON.stringify(eval(budy.slice(2)),null,'\t')) 
} catch (e){
reply(e)
}
}

if (budy.startsWith('=>')){
try {
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}

reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch (e) {
reply(String(e))  
}
}


if (body.startsWith('$')) {
if(!SoDono && !isnit) return 
if (!q && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return destiny.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await destiny.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return destiny.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await destiny.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return destiny.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await destiny.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && bady.length < 100) return  
await destiny.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return destiny.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await destiny.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return destiny.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await destiny.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
//=======================================\\


//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !SoDono && !isnit && !isPremium){ 
	reply('*Antipv ativado, você será bloqueado!*\n*Contate o criador*')
delay(4000)
destiny.updateBlockStatus(sender, 'block')
return
}
//======================================\\


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && banChats === true) return reply(`Olá, sou uma inteligência artificial, programado(a) para realizar ações, por adms e o dono, se você está enviando mensagem, provavelmente você não sabe disso, eu removo diariamente pessoas por enviar links e muito mais..`)
const atibot = info.isBaileys
if (atibot === true) return 


//======================================\\

// ANTI_LIGAR \\

if(isAnticall) {
destiny.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
destiny.sendMessage(B.content[0].attrs['call-creator'], { text: "Não pode ligar para o bot, você será bloqueado.." }).then(() => { 
delay(4000)
destiny.updateBlockStatus(B.content[0].attrs['call-creator'], "block") })
}
})
}

//==SISTEMA DE VOTAÇÃO: CRÉDITOS: KAUAN==\\
if(isGroup) {
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
//======================================\\


//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

if (isCmd && !SoDono && !isnit && !issupre && !ischyt) addFilter(sender)


switch (figura) {
  
case 'PhBL0PtpQ7pESrESQNgLuXpPJfhblay8ykTUfOH3xpRXYw=':
bla = fs.readFileSync('./audios/qviado.mp3')
destiny.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
break
}

//INICIO DE COMANDO DE PREFIXO
switch(command) {
  
//========(-MENUS-DE-CMDS-)========\\

case 'cu': {
const infowe = ["https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
bundak = infowe[Math.floor(Math.random() * infowe.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = await getBuffer('https://telegra.ph/file/4a10f6f0ae553daac1302.jpg')
let buttons = [
{buttonId: `${prefix}dono`, buttonText: {displayText: '⭔ DONO ⭔'}, type: 1},
{buttonId: `${prefix}ping`, buttonText: {displayText: '⭔ PING ⭔'}, type: 1},
{buttonId: `${prefix}lista`, buttonText: {displayText: '⭔ MENU DE LISTA ⭔'}, type: 2}
]
destiny = `
*Olá, irei le explicar rapidamente o básico dos meus comandos*

❑ *Como utilizar meus comandos?*

Antes de utilizar qualquer comando, sempre coloque o ${prefix}

❑ *Exemplo a ser usado:*

Ponto Sticker > ${prefix}menu

❑ *Nunca coloque depois do comando.*

O prefixo sempre deve estar antes do comando e não depois, o mesmo é válido para todos os comandos, sem exclusão de nenhum.

❑ *Exemplo a seguir:*

✅ ${prefix}sticker > Correto

❎ Sticker${prefix} > Incorreto

❑ *Prefixo usado.*

Irei responder unicamente ao meu prefix, meu prefix é '${prefix}'.

❑ *Meu menu:*

Veja mais comando que tenho disponível utilizando *${prefix}menu*

❑ *Meu criador:*

Receba o seu contato digitando este comando *( ${prefix}creditos )* no chat.

❑ *Duvidas?:*

Peça ajuda a alguem no chat caso tenha ficado com duvidas, até logo.`
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileName: `Olá ${pushname}`,
jpegThumbnail: bla,
fileLength: 99999999999999,
caption: destiny,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: bla,
mediaUrl: bundao,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menuss':
case 'menu': {
men = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logomenu = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = men[Math.floor(Math.random() * men.length)]
menulogo = logomenu[Math.floor(Math.random() * logomenu.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}dono`, buttonText: {displayText: '⭔ DONO ⭔'}, type: 1},
{buttonId: `${prefix}ping`, buttonText: {displayText: '⭔ PING ⭔'}, type: 1},
{buttonId: `${prefix}lista`, buttonText: {displayText: '⭔ MENU DE LISTA ⭔'}, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menu,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)}
break

case 'menuadms':
case 'menuadm': {
menuadm = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logoadm = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = menuadm[Math.floor(Math.random() * menuadm.length)]
menulogo = logoadm[Math.floor(Math.random() * logoadm .length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menujogos`, buttonText: {displayText: `${EmojeG(emojos)} 𝐉𝐎𝐆𝐎𝐒 ${EmojeG(emojos)}` }, type: 1},
{buttonId: `${prefix}menuanimes`, buttonText: {displayText: `${EmojeG(emojos)}𝐀𝐍𝐈𝐌𝐄𝐒 ${EmojeG(emojos)}` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: adms(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)}
break

case 'menuanime':
case 'menuanimes':
case 'animes': {
animex = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = animex[Math.floor(Math.random() * animex.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}alteradores`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}nsfww2`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐍𝐒𝐅𝐖 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: animes(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)}
break

case 'donomenu':
case 'menudono': 
if(!SoDono && !isGroup) return reply('So dono')
{
mendono = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = mendono[Math.floor(Math.random() * mendono.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menujogos`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐉𝐎𝐆𝐎𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}loja`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐋𝐎𝐉𝐀 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menudono(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'alteradores': {
altera = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = altera[Math.floor(Math.random() * altera.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}efeitos`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐄𝐅𝐄𝐈𝐓𝐎𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}nuvem`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐍𝐔𝐕𝐄𝐌 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: alteradores(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'jogos':
case 'menujogos': {
gamer = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = gamer[Math.floor(Math.random() * gamer.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuinfo`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐈𝐍𝐅𝐎 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}menubasico`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐁𝐀𝐒𝐈𝐂𝐎 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: jogos(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menuloja':
case 'loja': {
neroespera('seja bem vindo a nossa loja.')
lojja = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = lojja[Math.floor(Math.random() * lojja.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuadms`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐃𝐌𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}nuvem`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐍𝐔𝐕𝐄𝐌 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: loja(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menubasico':
case 'basico': {
barc = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = barc[Math.floor(Math.random() * barc.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuinfo`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐈𝐍𝐅𝐎 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}menuanimes`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐍𝐈𝐌𝐄𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menubasico(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menuinfo':
case 'info': {
infro = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = infro[Math.floor(Math.random() * infro.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menubasico`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐁𝐀𝐒𝐈𝐂𝐎 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}menupack`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐏𝐀𝐂𝐊 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menuinfo(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menuply':
case 'menuplay': {
meplay = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = meplay[Math.floor(Math.random() * meplay.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}figurinhas`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}menuadms`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐃𝐌𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menuplay(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menunuvem':
case 'nuvem': {
nuva = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logonu = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = nuva[Math.floor(Math.random() * nuva.length)]
menulogo = logonu[Math.floor(Math.random() * logonu.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuplay`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐏𝐋𝐀𝐘 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}figurinhas`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: nuvem(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break
 
case 'menusexy':
case 'menu+18': {
fic = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = fic[Math.floor(Math.random() * fic.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuplay`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐏𝐋𝐀𝐘 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}efeitos`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐄𝐅𝐄𝐈𝐓𝐎𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: pack18(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'figu':
case 'figurinhas':
case 'figurinha': {
fick = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = fick[Math.floor(Math.random() * fick.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuplay`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐏𝐋𝐀𝐘 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}efeitos`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐄𝐅𝐄𝐈𝐓𝐎𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: figurinhas(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break


case 'lista':
sections = [
{title: "informações",
rows: [
{title: `[${EmojeG(emojos)}] MENU [${EmojeG(emojos)}]`, rowId: `${prefix}menu`, description: "menu principal"},
	    {title: `[${EmojeG(emojos)}] ADMS [${EmojeG(emojos)}]`, rowId: `${prefix}menuadms`, description: "menu dos adms"},
	    {title: `[${EmojeG(emojos)}] JOGOS [${EmojeG(emojos)}]`, rowId: `${prefix}jogos`, description: "Menu de jogos"},
	    {title: `[${EmojeG(emojos)}] FIGURINHA [${EmojeG(emojos)}]`, rowId: `${prefix}figurinhas`, description: "menu de sticker entre outros"},
	    {title: `[${EmojeG(emojos)}] ALTERA [${EmojeG(emojos)}]`, rowId: `${prefix}alteradores`, description: "menu de altera img etc..."},
	    {title: `[${EmojeG(emojos)}] BASICO [${EmojeG(emojos)}]`, rowId: `${prefix}menubasico`, description: "menu com comandos aleatorios"},
	    {title: `[${EmojeG(emojos)}] ANIMES [${EmojeG(emojos)}]`, rowId: `${prefix}menuanime`, description: "menu geek dos mas diversos assuntos"},
	    {title: `[${EmojeG(emojos)}] PLAY [${EmojeG(emojos)}]`, rowId: `${prefix}menuply`, description: "menu de baixa música, vídeo etc.."},
	    	    	    {title: `[${EmojeG(emojos)}] DONO [${EmojeG(emojos)}]`, rowId: `${prefix}donomenu`, description: "menu pro dono da komi-bot"},
	    	    {title: `[${EmojeG(emojos)}] INFO [${EmojeG(emojos)}]`, rowId: `${prefix}info`, description: "menu de informações"},
	    	    {title: `[${EmojeG(emojos)}] LISTA-MIDIA [${EmojeG(emojos)}]`, rowId: `${prefix}lista-midia`, description: "lista de vídeos"},
	    	    {title: `[${EmojeG(emojos)}] LISTA-APPS [${EmojeG(emojos)}]`, rowId: `${prefix}lista-apps`, description: "lista de apps"},
	 	]}, {
	 title: "LISTRA EXTRA",
	 rows: [
	    {title: "🅁🄸🄲🄰🅁🄳🄾", rowId: `${prefix}nero`, description: "informaçoes em audio sobre os criadores da komi"},
	    {title: "🅂🄰🄼🅄🄴🄻", rowId: `${prefix}samuel`, description: "canal dos criadores e informaçoes"},
	    {title: "🅃🄸🄰🄶🄾", rowId: `${prefix}tiago`, description: "canal dos criadores e informaçoes"},]
}]
listMessage2 = {
text: `[🎭] Aperte Em Exibir Lista\n[🧧] Para Você Acessar Todos\n[🏮] Os Menu do Bot`,
  footer: ``,
  title: "[📍] • LISTA MENU • [📍]\n",
  buttonText: "EXIBIR LISTA",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2)
break

case 'infobv':
sections = [
{title: "informações",
rows: [
     {title: `legenda welcome`, rowId: `${prefix}legewelcome`, description: "como add mensagem no bem vindo"},
	    {title: `tag membro`, rowId: `${prefix}tagwelcome`, description: "como coloca marcando o número da pessoa no bem vindo"},
	    {title: `tag grupo`, rowId: `${prefix}tagrupowelcome`, description: "como coloca o nome do grupo no bem vindo."},
	    {title: `descrição`, rowId: `${prefix}descriçãowelcome`, description: "como coloca a descrição do grupo no bem vindo."},
	    {title: `despedida`, rowId: `${prefix}legendabye`, description: "como coloca uma msg no bem vindo de despedida."},
	    {title: `prefix`, rowId: `${prefix}prefixobv`, description: "como mostra qual eo prefixo do bot no bem vindo"},]
}]
listMessage2 = {
text: `⭔ informações welcome\n⭔ aprenda a usar corretamente\n⭔ boa sorte`,
  footer: ``,
  title: "",
  buttonText: "𝗘𝗫𝗜𝗕𝗜𝗥 || 𝗟𝗜𝗦𝗧𝗔",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2)
break






///// INFO BV 

case 'legewelcome': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: legekwelcome(prefix),
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9502bef19ca15f45e7cd5.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'tagwelcome': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: tagkwelcome(prefix),
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'tagrupowelcome': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: tagkgroupw(prefix),
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9502bef19ca15f45e7cd5.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'descriçãowelcome': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: descriçãokwelcome(prefix),
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'legendabye': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: legendakbye(prefix),
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9502bef19ca15f45e7cd5.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'prefixobv': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: prefixokbv(prefix),
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break


////

case 'infopalavrão': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ o antipalavrão é criado por você mesmo(a), basicamente você usuário escolhe qual palavra vc quer coloca, pra caso seja dita,o bot vai fazer a remoção dessa pessoa.

❑ ${prefix}addpalavra 

❑ ${prefix}delpalavra 

❑ ${prefix}antipalavrão 

❑ exemplo: 

❑ ${prefix}addpalavra gay

❑ isso será incluído como um palavrão, "mas como faço isso funcionar agora?" 

❑ você deve ativar a função por grupo, exemplo:

❑ ${prefix}antipalavrão 

❑ aí escolhe se deseja desativar ou ativar aparti da lista que o bot irá disponibilizar pra vc escolher.

❑ e se você quer tirar a palavra de inclusão dos palavrões, é só digitar :

❑ ${prefix}delpalavra gay

❑ "gay" é apenas a palavra que utilize como exemplo, mas você que tem que criar, e escolher quais frases não deseja que seja falada no seu grupo.
`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'infovotacao': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Olá 

❑ Comando: /votação


❑ Deseja saber sobre como funciona os comandos de votação?, é simples, você deve marcar uma pessoa junto a uma / e digitar uma frase como pergunta, e depois / e os minutos, 

❑ Exemplo: /votação @marca-pessoa/Vamos lanchar bolo hoje??/1  

❑ para votar ou negar, tem que digitar sem prefixo:

❑ voto ou devoto


❑ é 1 Minuto de votação, então faça exatamente, dessa fórma aí.

❑ e caso queira anular ele use o comando:

❑ /delvote

❑ ele anula sua votação.
 `,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'infolistanegra': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Olá 

❑ existe esses 3 comandos 

❑ /autoban 

❑ /listanegra

❑ /tirardalista

❑ Como isso funciona? 

❑ esse comando, por exemplo, se alguém envia algo no seu grupo, vamos supor, um link, e sai rápido, você vai digitar o seguinte 

❑ /listanegra numero-junto-da-pessoa

❑ vai colocar o número junto da pessoa que saiu, sem o + lembrando, e sem o -. 

❑ pra remover ele da lista é simples:

❑ /tirardalista numero-junto-da-pessoa

❑ mesmos detalhes de add.. 

❑ Depois de ter adicionado, você tem que ativar a função por grupo, que é o seguinte. 

❑ /autoban 

❑ e selecionar uma das opções, ativar ou desativar

❑ boa sorte amigo..

 `,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

// ====== [ FIM DOS MENU ] 


case 'destrava':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await destiny.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
break 


//////////// TINDER 

case "rgtinder":{
tinder = JSON.parse(fs.readFileSync("./armor/js/tinder.json"))
let [nome, idade, bio] = q.split("/")
if(!(nome||idade||bio))return reply("informe nome idade e a bio separando com uma '/' \nex: "+prefix+"rgtinder nome/idade/bio marcando uma imagem")
if(!isQuotedImage && !isImage)return reply("marque uma imagem com a legenda "+ body)
if(tinder.map(i => i.id).indexOf(sender) >= 0)return reply("vc já está registrado")
tinder.push({
id: sender,
nome,
idade,
bio,
image: info.message.imageMessage ? info.message : info.message.extendedTextMessage.contextInfo.quotedMessage
})
fs.writeFileSync("./armor/js/tinder.json", JSON.stringify(tinder))
reply("Registrado no tinder com sucesso")
}
break

case "tinder":{
tinder = JSON.parse(fs.readFileSync("./armor/js/tinder.json"))
if(tinder.map(i => i.id).indexOf(sender) < 0)return reply("registre-se no tinder, usando \n"+prefix+"rgtinder nome/idade/bio")
ttt = tinder[Math.floor(Math.random() * tinder.length)]
img =  await getFileBuffer(ttt.image.imageMessage, 'image')
butao = [{buttonId: `${prefix + command}`, buttonText: {displayText: `🔥 𝐏𝐑𝐎́𝐗𝐈𝐌𝐀 𝐏𝐄𝐒𝐒𝐎𝐀 🔥️`}, type: 1}]
destiny.sendMessage(from, {
image: img,
caption: `                  🔥𝐓𝐈𝐍𝐃𝐄𝐑🔥

╔┉✼┉═༺◈✼❄️✼◈༻═┉✼┉╗   
║ 🤗 𝐍𝐎𝐌𝐄: ${ttt.nome}
║ 📅 𝐈𝐃𝐀𝐃𝐄: ${ttt.idade}
║ 🔮 𝐁𝐈𝐎: ${ttt.bio}
║ 𝐰𝐚 𝐦𝐞: wa.me/${ttt.id.split("@")[0]}
╚┉✼┉═༺◈✼❄️✼◈༻═┉✼┉╝   
`,
mentions: [ttt.id],
footerText: `${NomeDoBot}`,
buttons: butao,
headerType: 4
},{
quoted: info
})}
break

case 'rmtinder':
case 'sairtinder':
if(command == "sairtinder") {
var qp = sender
reply("Pronto, você foi retirado do tinder com sucesso..")
} else {
if(!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO CARAI KKKKKK```')
if(!q) return reply(`cader o número?\nexemplo: ${prefix}rmtinder 559185841876`)
var qp = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
}
blir = tinder.map(i => i.id).indexOf(qp)
if(blir < 0)return reply("nao tem essa pessoa registrada não")
if(SoDono) {reply("Usuário foi tirado do tinder com sucesso")}
tinder.splice(blir, 1)
fs.writeFileSync("./armor/js/tinder.json", JSON.stringify(tinder))
break

////////

case 'gimage': case 'gig': {
if (!q) return reply("*digite a consulta depois de colocar o comando.*")
reply("Processando dados...") 
let gis = require('g-i-s')
gis(q, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${q}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption:  '*Título* : ' + q + '\n*Link* : '+images,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"𝙂𝙞𝙢𝙖𝙜𝙚",
body: `${NomeDoBot}`,
  thumbnail: '',
mediaType:2,
mediaUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`, 
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
})
}
break

case 'clima':
if (!isGroup) return reply("SOMENTE EM GRUPOS")
if (!q) return reply('Insira o nome da sua cidade.')
try {
clima = await axios(`https://pt.wttr.in/${q}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)
buffer = await getBuffer(`https://wttr.in/${q}.png`)
teks = `*「C L I M A」*
╴
${clima.data}
╴
${NomeDoBot}`
destiny.sendMessage(from, {image: buffer, caption: teks}, info)
} catch {
reply('Estranho...\nCertifique-se de não estar usando acentos ok?')
}
break


case 'criagp': {
if (!SoDono) return reply(`So quem pode fazer grupo por comando é o ${NickDono}`)
blown = args.join(' ')
blown1 = blown.split("/")[0];
blown2 = blown.split("/")[1];
if(!blown.includes("/")) return reply(`Use assim exemplo: ${prefix + command} Os legais/Oi`)
group = await destiny.groupCreate(`${blown1}`, [`${sender.split("@")[0]}@s.whatsapp.net`])
    console.log("Grupo Criado Com Id: " + group.id)
destiny.sendMessage(group.id, { text:`${blown2}` })
linkty = await destiny.groupInviteCode(group.id)
await sleep(3000)
reply(`Grupo: ${blown1}, criado com sucesso\nAqui esta o link ${NickDono}\n• https://Chat.whatsapp.com/${linkty}\nEspero que goste 🍒,`)
}
break

case 'clone': 
if (!isGroup) return reply("apenas para grupos") 
if (!SoDono) return reply("apenas pro dono") 
if (!q) return reply("cade o id do grupo?\nUse: o Comando /getgroupid Para Pegar o Id Desse Grupo.") 
getInfoOfGroupID = isGroup ? await destiny.groupMetadata(q) : ''
getNameOfGroupID = isGroup ? getInfoOfGroupID.subject : ''
getMembersOfGroupID = isGroup ? getInfoOfGroupID.participants : ''
getDescOfGroupID = isGroup ? getInfoOfGroupID.desc : ''
const createGroup = await destiny.groupCreate(getNameOfGroupID, [sender], "add")
await destiny.groupUpdateDescription(createGroup.id, getDescOfGroupID) 
for (let max of getMembersOfGroupID){
await destiny.groupParticipantsUpdate(createGroup.id, [max.id], "add")
}
destiny.sendMessage(from, { text: 'Grupo Criado Com Sucesso!' }) 
destiny.groupParticipantsUpdate(createGroup.id, [numerodono[0]], "promote") 
destiny.sendMessage(createGroup.id, { text: 'Ola Vadias!' })  
break

case 'getgroupid': 
reply(from)
break

case 'perfil':
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const asLvl = getLevelingLevel(sender)
const ssXp = getLevelingXp(sender)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*
➻ *~_CONSELHO_~* :
${conselho}`
daftarimg = await getBuffer(ppimg)
buttons = buttons = [{buttonId: `${prefix}conselhobiblico`, buttonText: {displayText: `💠CONSELHOS💠`}, type: 1}]
destiny.sendMessage(from, {image: daftarimg, caption: dptr, footer: " ", buttons}, {quoted: selo})
break

case 'frases':
case 'frase':
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ‣ Author: ${hehe.Author}
  ‣ Criador: ${hehe.Criador}
  ‣ Frase: 
  ${hehe.Frase}\n`
daftarimg = await getBuffer(ppimg)
await destiny.sendMessage(from, {image: daftarimg, caption: ccg}, {quoted:info})
break

case 'frases':
case 'frase':
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ‣ Author: ${hehe.Author}
 
  ‣ Criador: ${hehe.Criador}
 
  ‣ Frase: 
 
  ${hehe.Frase}\n`
daftarimg = await getBuffer(ppimg)
await destiny.sendMessage(from, {image: daftarimg, caption: ccg}, {quoted:info})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
  const { conselhob } = require('./armor/js/conselhob.js');
var conselhos = conselhob[Math.floor(Math.random() * conselhob.length)] 
bli = `https://telegra.ph/file/3102df137f2f8c0851915.jpg`
jr = `${tempo} ${pushname} 
Conselhos Bíblico Para Você: 
> Grupo: *${groupName}*
> Bot: *${NomeDoBot}*
「 *${conselhob}* 」`
sendBimg(from, bli, jr, NomeDoBot, [{buttonId:`kk`, buttonText: {displayText: '「 Amém 」'}, type: 1}], selo)
break

case 'tabela':
await destiny.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await destiny.sendMessage(from, {text: destrava2 (prefix)}, {quoted: info})
break 

case 'infovotação':
case 'infovotacao':  
await destiny.sendMessage(from, {text: infovotacao(prefix, pushname)}, {quoted: selo})
break

case 'infobemvindo':
case 'infobv':  
await destiny.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break

case 'idiomas':
case 'idioma':
txt = `  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefix}gtts pt (texto)

>> ${prefix}traduzir pt/(texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${setting.NomeDoBot}🔥`

destiny.sendMessage(from, {text: txt}, {quoted: selo})
break

case 'infocontador':
await destiny.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'databoton':
await destiny.sendMessage(from, {text: databoton(prefix)}, {quoted: selo})
break

case 'infolistanegra':
await destiny.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
await destiny.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
await destiny.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break

case 'git':
case 'git-bot':  
case 'gitdobot':
case 'gitbot':   
await destiny.sendMessage(from, {text: gitdobot(prefix)}, {quoted: selo})
break

//========(FUNÇÕES-PREMIUM-AQUI)=======\\

case 'mediafire':
try {
if (!q) return reply(`Coloque um link`)
if (!isUrl(q) || !q.includes('mediafire.com')) return reply(`Link inválido!`)
mfdw = await mediafire(`${args[0]}`)
buttons02 = [
{buttonId: `${mfdw[0].link}`, buttonText: {displayText: `Baixar`}, type: 1}
]
if (mfdw[0].peso.split('MB')[0] >= 250)
{
buttonMessage02 = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
fileLength: 9999999,
caption: `*Downloader*

Nome: ${mfdw[0].nome}
Peso: ${mfdw[0].peso}
Tipo: ${mfdw[0].tipo}

Espere um momento...`,
footer: ``,
buttons: buttons02,
headerType: 4,
contextInfo:{externalAdReply: {
title: `${NomeDoBot}`,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer(`${logo}`),
mediaUrl: 'https://youtube.com/c/SaikyoDev',
sourceUrl: 'https://youtube.com/c/SaikyoDev',
}}
}
destiny.sendMessage(from, buttonMessage02)
} else {
buttonMessage02 = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
fileLength: 9999999,
caption: `*Downloader*

Nome: ${mfdw[0].nome}
Peso: ${mfdw[0].peso}
Tipo: ${mfdw[0].tipo}

Espere um momento...`,
footer: ``,
buttons: buttons02,
headerType: 4,
contextInfo:{externalAdReply: {
title: `${NomeDoBot}`,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer(`${logo}`),
mediaUrl: 'https://youtube.com/c/SaikyoDev',
sourceUrl: 'https://youtube.com/c/SaikyoDev',
}}
}
destiny.sendMessage(from, buttonMessage02)
await sleep(1000)
destiny.sendMessage(from, {document: {url: mfdw[0].link}, fileName: mfdw[0].nome, mimetype: mfdw[0].tipo, mentions: [sender]}, {quoted: selo})
}
} catch (err) {
console.log(err)
reply("ERROR.")
}
break

case 'ler': 
case 'ocr':   
case 'lerfoto':  
if(!isPremium) return reply(enviar.msg.premium)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Somente fotos!')
}
break

case 'walink':
if (!isGroup) return reply(enviar.msg.grupo)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque A Pessoa Que Você Queira Fazer O Link')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
for (let _ of mentioned) {
destiny.sendMessage(from, {text: `━━━━── • ──━━━━\n      ❏     Link Do @     ❏\n────────────\nLink: Wa.me//+${_.split('@')[0]}\n────────────\nCopyright © ${NomeDoBot}\n━━━━── • ──━━━━`, templateButtons: [{index: 1, urlButton: {displayText: `Copiar`, url: `https://www.whatsapp.com/otp/copy/Wa.me//+${_.split('@')[0]}`}}]}, {quoted: selo})}
break

case 'wame':
var captionnye = q.split('|')[0] || `wame gerado com sucesso,aperte no botão pra copiar.\n`
var displaynye = q.split('|')[1] || `COPIAR`
var copynye = q.split('|')[2] || (`wa.me/${sender.split('@')[0]} - *${pushname}*`)
 menuButa = [{index: 1, urlButton: {displayText: `${displaynye}`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}}]
await destiny.sendMessage(from, { text: `${captionnye}`, templateButtons: menuButa, footer: NomeDoBot })
break

case 'nick': case 'gerarnick': 
case 'fazernick': {
let { styletext } = require('./lib/scraper')
if (!q) throw 'Digite seu nick!'
let anu = await styletext(q)
let teks = `Nicks Gerado A Parti Do Nome\n[--- *${q}* ---]\n\n`
for (let i of anu) {
teks += `*Fontes*: ${i.result}\n\n`
}
reply(teks)
}
break

case 'novolink':
  if (!SoDono && !info.key.fromMe) return reply(`Você não e o wa.me/${setting.numerodono} so ele pode usar esse comando kkkk`)
const code =  destiny.groupRevokeInvite(from, "abcd-xyz@g.us")
    console.log("New group code: " + code)
    break

case 'gitclone':
reply("Processando dados...") 
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) reply(`Use ${prefix}gitclone repo link\nExemplo: https://github.com/NuevaGeneracionALB/aleatory-md`)
if (!regex1.test(args[0])) return reply(' ')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
destiny.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: selo }).catch((err) => reply('ERROR!!'))
break

case 'lermais':
if(!q) return reply(`Cade o nome depois do Comando\nExemplo: ${prefix + command} Curioso né`)
destiny.sendMessage(from, {text: `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ${q}`, footer: `Copie e Cole no Painel de Mensagem`, templateButtons: [{index: 1, urlButton: {displayText: `Copiar`, url: `https://www.whatsapp.com/otp/copy/${q}`}}]}, {quoted: info})
break


case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'id':
case 'figuid':
if (!SoDono && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await destiny.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
break

case 'cep':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `CEP : ${x.cep}
LOGRADOURO: ${x.logradouro}
BAIRRO : ${x.bairro}
LOCALIDADE : ${x.localidade}
UF : ${x.uf}
IBGE : ${x.ibge}
GIA : ${x.gia}
DDD : ${x.ddd}
SIAFI : ${x.siafi}`
reply(k)
break 

case 'placa':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`http://api.ifindconsultas.tk/?token=2d6de38e-6c92-485e-bacb-db64139f8a02&placa=${query}`)
x = get_result
k = `CPF : ${x.cpf}
NOME: ${x.nome}
PLACA : ${x.placa}
CHASSI : ${x.chassi}
RENAVAM : ${x.renavam}
CIDADE : ${x.cidade}
UF : ${x.uf}
CATEGORIA : ${x.categoria}
COMBUSTÍVEL : ${x.combustivel}`
reply(k)
break 

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
destiny.sendMessage(from, {text: dddlist}, {quoted: info})	
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/aleatoryconteudos`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

//============================

case 'dado':
rafa = Math.floor(Math.random() * 6) + 1
bla = fs.readFileSync(`./logos/dado/${rafa}.webp`)
destiny.sendMessage(from, {sticker: bla}, {quoted: info})
buttons2 = [
  {buttonId: `${prefix}Dado`, buttonText: {displayText: '🎲「Jogar Novamente」🎲'}, type: 1},
  {buttonId: `${prefix}sundado`, buttonText: {displayText: '🎲「Não Jogar」🎲'}, type: 1}]
buttonMessage2 = {
    text: "Estou jogando o dado para você, se quiser que eu jogue novamente, selecione uma opção abaixo:",
    footer: '「🇸 🇺 🇳//🇧 🇴 🇹 //🇲 🇩 」',
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'sundado': 
  reply('Então vai ser fude seu fi se rapaziada corno(a) sem mãe gorda do caralho pobre e ridículo no meu pau no seu ouvido.')
  break


case 'eunu':
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
sendBimg(from, ppimg, '*Hmm, Entendo*\nAinda Quer Brincar?', "Aperte No Botão Abaixo", [{buttonId: `${prefix}eununca`, buttonText: {displayText: `Sim`}, type: 1}])
break

case 'euj':
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
sendBimg(from, ppimg, '*Eita Que Polêmico*\nAinda Quer Brincar?', "Aperte No Botão Abaixo", [{buttonId: `${prefix}eununca`, buttonText: {displayText: `Sim`}, type: 1}])
break

case 'eununca':
if(!txt) return reply("Cade a frase")
sections = [{
title: 'Eu Nunca 🌹',
rows: [
{title: "Eu Já", rowId: `${prefix}euj`}, 
{title: "Eu Nunca", rowId: `${prefix}eunu`},
]}]
listMessage2 = {
  text: `${txt}`,
  footer: ``,
  title: `━━━━━── • ──━━━━━\n\n• `,
  buttonText: `Minha Resposta`,
  sections}
destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'moeda':
cara = Math.floor(Math.random() * 2) + 1
bla = fs.readFileSync(`./logos/cara/${cara}.webp`)
destiny.sendMessage(from, {sticker: bla}, {quoted: info})
buttons = [
  {buttonId: `${prefix}moeda`, buttonText: {displayText: '🪙「Jogar Novamente」🪙'}, type: 1},
  {buttonId: `${prefix}sundado`, buttonText: {displayText: '🎲「Não Jogar」🎲'}, type: 1}]
buttonMessage = {
    text: "Estou jogando a moeda para você, se quiser que eu jogue novamente, selecione uma opção abaixo:",
    footer: '「🇸 🇺 🇳//🇧 🇴 🇹 //🇲 🇩 」',
    buttons: buttons,
    headerType: 1
}
sendMsg =  destiny.sendMessage(from, buttonMessage, {quoted: selo}) 
break


//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
teks = args.join(" ").replace("x", "*").replace("÷", "/")
.replace(new RegExp("abcdefghijklmnopqrstwyuvxz", "gi"), "1")
if(!body.includes('1') && !body.includes('2') && !body.includes('3') && !body.includes('4') && !body.includes('5') && !body.includes('6') && !body.includes('7') && !body.includes('8') && !body.includes('9') && !body.includes('10')) return reply('KD O NÚMERO?')
if(body.includes("document") || body.includes("audio") || body.includes("pdf") || body.includes("apk") || body.includes("image") || body.includes("video") || body.includes("text") || body.includes("conn") || body.includes("reply") || body.includes("console") || body.includes("'") || body.includes('"')) return reply("KD O CÁLCULO?")
console.log('[', color.green('EVAL', 'silver'),']', color.green(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color.red(budy))
return reply(JSON.stringify(eval(`${teks}`),null,'\t'))
break 

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
imgstts = `https://telegra.ph/file/b8115b073b3520abaab0a.jpg`
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│
│➱ Antiaudio: ${isAntiAudio? '✓' : '✕'}
│➱ Antidocumento: ${Antidoc ? '✓' : '✕'}
│➱ Antifake: ${isAntifake ? '✓' : '✕'}
│➱ Antiimg: ${isAntiImg? '✓' : '✕'}
│➱ AntiSticker: ${isAntiSticker ? '✓' : '✕'}
│➱ Antiligação: ${isAnticall ? '✓' : '✕'}
│➱ AntiPv-Block: ${isAntiPv ? '✓' : '✕'}
│➱ AntilinkHard: ${isAntiLinkHard ? '✓' : '✕'}
│➱ LimiteCaracteres: ${isAntiFlood ? '✓' : '✕'}
│➱ AntiCatalogo: ${isAnticatalogo ? '✓' : '✕'}
│➱ AntiPalavrão: ${isPalavrao ? '✓' : '✕'}
│➱ Antivideo: ${isAntiVid ? '✓' : '✕'}
│➱ AntiLocalização: ${Antiloc ? '✓' : '✕'}
│➱ Bemvindo: ${isWelkom ? '✓' : '✕'}
│➱ Simih: ${isSimi ? '✓' : '✕'}
│
╰╼╾❲ ${NomeDoBot} ❳╼╾╯`
sendBimg(from, imgstts, statuszada, '', [{buttonId: `nd`, buttonText: {displayText: `Obrigado ${NomeDoBot} 🚩`}, type: 1}])
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
destiny.groupUpdateSubject(from, `${blat}`)
destiny.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
destiny.groupUpdateDescription(from, `${blabla}`)
destiny.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await destiny.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
ativid = await getBuffer('https://telegra.ph/file/1ac59b7dd958beb9c29ad.mp4')
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.id)
}
destiny.sendMessage(from, {video: ativid, caption: teks, gifPlayback: true, contextInfo:{mentionedJid: mem}}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'linkgp': case 'linkgroup': {
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await destiny.groupInviteCode(from)
txtl = `┏━──𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🔮❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹──━
┝〢Usuário: ${pushname}
┝〢Grupo: ${groupName}
┝〢Link: https://chat.whatsapp.com/${linkgc}
┗━──𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🔮❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹──━`
let goku = {
image: {url: 'https://telegra.ph/file/8b102c459aada73e99347.jpg'},
caption: txtl,
footer: ``,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Link Do Grupo`,
body: `${NomeDoBot} ©`,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
mediaType:2,
sourceUrl:`https://www.instagram.com/maysurf__/`
}}
}
destiny.sendMessage(from, goku,
{quoted: selo})
}
break

case 'linkpv':
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
linkgc = await destiny.groupInviteCode(from)  
destiny.sendMessage(teks, {text: `link do grupo : https://chat.whatsapp.com/${linkgc}`})
break

case 'grupo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
buttons = [
  {buttonId: `${prefix}abrir2`, buttonText: {displayText: 'ABRIR✅'}, type: 1},
  {buttonId: `${prefix}fechar2`, buttonText: {displayText: 'FECHAR💤'}, type: 1}]
buttonMessage = {
    text: "Configurações Do Grupo⚙️",
    footer: 'komi_ofc',
    buttons: buttons,
    headerType: 1
}
sendMsg =  destiny.sendMessage(from, buttonMessage, {quoted: selo}) 
break




case 'abrir2':
if(!isGroup) return reply(`SÓ EM GRUPO`)
if(!SoDono && !isGroupAdmins) return reply(`você nem é adm`)
if(!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
reply(`*GRUPO ABERTO COM SUCESSO*`)
await destiny.groupSettingUpdate(from, 'not_announcement')
break 

case 'fechar2':
  if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!SoDono && !isGroupAdmins) return reply(`Você nao é adm kkkk`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
reply(`*GRUPO FECHADO COM SUCESSO*`)
await destiny.groupSettingUpdate(from, 'announcement')
break

case 'closegp':
if (!SoDono && !isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = info.participant;
let qtt = args.join(' ').split(' ');
let qaa = parseInt(qtt[0]);
let qbb = qtt[1];
if (isNaN(qaa)) return reply (`Precisa ser um número!!!\n\nexemplo:\n${prefix}closegp 30 s`)
if (qbb === 's') {
let calc = parseInt(qaa + '000')
await reply (`O grupo será fechado em ${qaa} segundos`)
await sleep(calc);
await destiny.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} segundos!`)
}
if (qbb === 'm') {
calc = parseInt(qaa * 60 + '000')
await reply (`O grupo será fechado em ${qaa} minutos`)
await sleep(calc);
await destiny.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} minutos!`)
}
if (qbb === 'h') {
calc = parseInt(qaa * 3600 + '000')
await reply (`O grupo será fechado em ${qaa} horas`)
await sleep(calc);
await comm.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo:\n${prefix}closetime 5 m`)
}
break

case 'opengp':
if (!SoDono && !isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = info.participant;
let qxx = args.join(' ').split(' ');
let qxt = parseInt(q[0]);
let tqb = qxx[1];
if (isNaN(qxt)) return reply (`Precisa ser um número!!!\n\nexemplo:\n${prefix}opengp 30 s`)
if (tqb === 's') {
let calc = parseInt(qxt + '000')
await reply (`O grupo será aberto em ${qxt} segundos`)
await sleep(calc);
await destiny.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} segundos!`)
}
if (tqb === 'm') {
calc = parseInt(qxt * 60 + '000')
await reply (`O grupo será aberto em ${qxt} minutos`)
await sleep(calc);
await destiny.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} minutos!`)
}
if (tqb === 'h') {
calc = parseInt(qxt * 3600 + '000')
await reply (`O grupo será aberto em ${qxt} horas`)
await sleep(calc);
await destiny.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo:\n${prefix}opentime 5 m`)
}
break

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await destiny.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadata = await destiny.groupMetadata(from) 
destiny.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: info})
break 
 
case 'totag':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
destiny.sendMessage(from, options).then(() => fs.unlinkSync(rane) )
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
destiny.sendMessage(from, {image: buff, caption: media.caption, mentions: yd}, {quoted: info}).then(() => fs.unlinkSync(rane) )
} else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
destiny.sendMessage(from, {video: buff, gifPlayback: media.gifPlayback, caption: media.caption, mentions: yd}, {quoted: info}).then(() => fs.unlinkSync(rane) )
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
destiny.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true, mentions: yd}, {quoted: info}).then(() => fs.unlinkSync(rane) )
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
con .sendMessage(from, {document: buff, mimetype : `${media.mimetype}`, fileName: media.fileName, mentions: yd}, {quoted: info}).then(() => fs.unlinkSync(rane) )
} else if ((info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) && !isMedia){
buff = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation
destiny.sendMessage(from, {text: buff, mentions: yd}, {quoted: info}) 
} else if(args.join(' ')){
destiny.sendMessage(from, {text: args.join(' '), mentions: yd}, {quoted: info})
} else {
reply(`Marque uma, imagem/vídeo/áudio/documento/figurinha/texto, com o comando ${prefix + command}`)
}
break

case 'react':
if (!args.join(' ')) return reply(`Cade o emoji?`)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null || !isGroup){
var reactionMessage = {
react: {
text: args.join(' '),
key: info.key
}}
} else {
var a = info.message.extendedTextMessage.contextInfo
var rafa = {
remoteJid: `${from}`,
fromMe: false,
id: `${a.stanzaId}`,
participant: `${a.participant}`
}
var reactionMessage = {
react: {
text: args.join(' '),
key: rafa
}}
}
destiny.sendMessage(from, reactionMessage)
break

case 'marcar':
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
reply('olá maestro, irei convoca todos do grupo pro nosso coral')
raimgs = [
  `https://telegra.ph/file/b6e992ea6adac911bb5f9.jpg`,
  `https://telegra.ph/file/742a9df20adaacaac6918.jpg`,
  `https://telegra.ph/file/e6c6e08d886a65acbfea2.jpg`,
  `https://telegra.ph/file/f293eac6a7964ab6a92e7.jpg`,
  `https://telegra.ph/file/74c2354f7da0d842d55bb.jpg`,
  `https://telegra.ph/file/240f53c8a0f9ffe40c160.jpg`,
  `https://telegra.ph/file/be0c5405e43e0c228a5f7.jpg`,
  `https://telegra.ph/file/dd057766309ed8c25e4ac.jpg`]
imgs = raimgs[Math.floor(Math.random() * raimgs.length)]
try {
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n╭━━ ⪩\n╿║ 「き⃟♻️𝙳𝙴𝚂𝚃𝙸𝙽𝚈♻️ 」\n'
for (let mem of groupMembers) {
teks += `│❏ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
destiny.sendMessage(from, {image: {url: imgs}, caption: teks, mentions: members_id}, {quoted: selo})
} catch {
reply('ERROR!!')
}
break

case 'marcarwame':
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
reply('olá maestro, irei convoca todos do grupo pro nosso coral')
raimgs = [
  `https://telegra.ph/file/b6e992ea6adac911bb5f9.jpg`,
  `https://telegra.ph/file/742a9df20adaacaac6918.jpg`,
  `https://telegra.ph/file/e6c6e08d886a65acbfea2.jpg`,
  `https://telegra.ph/file/f293eac6a7964ab6a92e7.jpg`,
  `https://telegra.ph/file/74c2354f7da0d842d55bb.jpg`,
  `https://telegra.ph/file/240f53c8a0f9ffe40c160.jpg`,
  `https://telegra.ph/file/be0c5405e43e0c228a5f7.jpg`,
  `https://telegra.ph/file/dd057766309ed8c25e4ac.jpg`]
imgs = raimgs[Math.floor(Math.random() * raimgs.length)]
try {
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╭https://wa.me/${mem.id.split('@')[0]}\n╰Nome: ${pushname.id}\n`
members_id.push(mem.id)
}
destiny.sendMessage(from, {image: {url: imgs}, caption: teks, mentions: members_id}, {quoted: selo})
} catch {
reply('ERROR!!')
}
break

case 'convite':
if (!isGroup) return reply(`SÓ EM GRUPO KRLH`)
qp = args.join(" ")
var nomor = info.participant
invite = `[ Convite de grupo ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n ${qp}`
sendBimgT(`${setting.numerodono}@s.whatsapp.net`,wew = `https://telegra.ph/file/5f8d8e6dd0c5d4044686a.jpg`, invite, "Leia com Atenção", [
{index: 2, quickReplyButton: {displayText: '✅ Aceitar', id: `${prefix}entrarlink ${qp}`}},
{index: 2, quickReplyButton: {displayText: '🚫 Recusar', id: `${prefix}negarconvite ${sender.split("@s.whatsapp.net")[0]}`}}], selo)
reply("Convite de grupo enviado ao meu dono, pfv espere a sua resposta")
break

case 'entrarlink':
case 'entrar':
if (!SoDono) return reply(`Só meu dono`)
try{
await destiny.groupAcceptInvite (`${q.slice([26])}`)
reply('✅ Entrei no Grupo')
} catch {
reply('Não foi possível entrar no grupo')
}
break

case 'negarconvite':
if (!SoDono) return reply(`Só meu dono`)
merda = args.join(" ")
bla = "🚫 Seu convite foi negado"
await destiny.sendMessage(`${merda}@s.whatsapp.net")`, {text: bla})
reply('✅ Mensagem enviada com sucesso')
break

case 'kick': {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(numerodono.includes(mentioned)) return reply("Não pode remover meu dono 😡")
if(botNumber.includes(mentioned)) return reply("Você acha que vou banir eu mesmo??, troxa você em..")
if(!isMentioned) return reply('Marque a')
baimg = await getBuffer(`https://telegra.ph/file/9f20029f7ff8758573a14.jpg`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
for (let _ of mentioned) {
bantxt = `O usuário: @${mentioned[0].split('@')[0]}\n*Foi Banido Permanente por motivos justo*`
destiny.groupParticipantsUpdate(from, mentioned, 'remove')}
sleep(1000)
let cop = [
{buttonId: `nd`, buttonText: {displayText: `Bem Feito 🚩`}, type: 1}]
let buttonMessage = {
image: baimg,
caption: bantxt,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
buttons: cop,
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
destiny.sendMessage(from, buttonMessage, 
{quoted:selo})}
break

case 'banir10':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono) return reply("Só dono pode executar este comando..")
var ids = groupIdscount.indexOf(from)
var x = countMessage[ids].numbers
var mem = groupMembers.map(({id}) => id)
try {
var msg = x.filter(({id, messages}) => (messages < 5 && mem.includes(id))).sort((a,b) => b.messages - a.messages)
var count = 0
var interval = setInterval(function(){
count++
if(count === 10){
clearInterval(interval)
reply('Pronto removi 10 macaco que não fala porra nenhuma aqui no grupo 🤬')
}
destiny.groupParticipantsUpdate(from, [msg[count -1].id], 'remove')
}, 1000)
} catch(e){
clearInterval(interval)
reply('Ops não achei nenhum membro inativo.')
console.log(e)
}
break

case 'kickfake':
case 'banfake':
{
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
array_fake = [];
for(let a of groupMembers) {
if(!a.id.startsWith("55") && a.id !== botNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return reply("Nenhum número fake encontrado no grupo")
for(let a of array_fake) {
await sleep(100)
destiny.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} números fake removido do grupo`
destiny.sendMessage(from, {text: teks, mentions: array_fake})
}
break



case 'reviver':
if (!isGroup) return reply('Esse comando so funciona em grupo, sinto muito')
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
add = info.message.extendedTextMessage.contextInfo.participant
sleep(5000)
const response2 = await destiny.groupParticipantsUpdate(from, [add], "add" )
reply('Usuario Adicionado de volta ao grupo.')
break

case 'add':
if(!SoDono) return reply('Comando Desativado por questões de segurança, estava ocasionandoo Ban do número do bot.')
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')  
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if(q.length < 1) return reply('Quer adicionar uma alma?')  
try {
tdt = args[0]
if(tdt.length < 1) return reply(`Digita o número que deseja add, exemplo: ${prefix}add 558198923680`)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')
reply('Irei adicionar ele(a) em 5 segundos...')  
setTimeout(async() => {
responser = await destiny.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo!')
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')  
reply('Irei adicionar ele(a) em 5 segundos...')  
adduser = info.message.extendedTextMessage.contextInfo.participant
setTimeout(async() => {
responser =  await destiny.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) return reply('Falhou, porque em privado ')
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch {
reply('Izi, se não for adicionado provavelmente ele privou só para contatos adicionar ele em grupo.')
}
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
destiny.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'ban': case 'banir': {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
num = info.message.extendedTextMessage.contextInfo.participant
if(botNumber.includes(num)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(num)) return reply('Não posso remover meu dono 🤧')
wew = await getBuffer("https://telegra.ph/file/59c198f533657546ddce7.jpg")
mban = `Usuário ${num.split("@")[0]} banido permanente por motivos justo [✅]`
destiny.groupParticipantsUpdate(from, [num], 'remove')
let buttonMessage = {
image: wew,
caption: mban,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
destiny.sendMessage(from, buttonMessage, 
{quoted:selo})
} else { 
reply('Responda a mensagem da pessoa')
}}
break


//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
destiny.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply('Qual foi membro comum?')
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
destiny.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
destiny.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'autoban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
var ind = dbids.indexOf(from)						
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  

case 'listagp': 
if (!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
listvi = await getBuffer('https://telegra.ph/file/40a4ec9d4105a2336453b.mp4')
tdufg = await store.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*L I S T A  D E  G R U P O S*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
destiny.sendMessage(from, {video: listvi, caption: teks1, gifPlayback: true, templateButtons: [{index: 1, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: `kk`}}]}, {quoted: selo})
break

case 'listabr':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '𝗕𝗥𝗔𝗦𝗜𝗟𝗘𝗜𝗥𝗢𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢: \n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply('『❗』Nenhum número do Brasil foi encontrado no grupo.')
destiny.sendMessage(from, {text: teks, mentions: men})
break

case 'listafake':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(`[❌] VC NÃO É ADMINISTRADOR DO GRUPO [❌] `)
if(!isBotGroupAdmins) return reply(`[❄️] O BOT PRECISA SER ADMINISTRADOR DO GRUPO [❄️]`)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '🏳️ Números fakes no grupo: 🏳️\n'
men = []
for(let mem of groupMembers) {
if(!mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)}}
if(teks.indexOf('➤') < 0) return reply('*Nenhum numero Gringo foi encontrado*')
destiny.sendMessage(from, {text: teks, mentions: men})
break

/////// DESBANIR //////////


case 'spam':
luffy = args.join(' ')
luffy1 = luffy.split('/')[0] || 'Indefinido'
luffy2 = luffy.split('/')[1] || 'Indefinido'
if(!luffy.includes("/")) return reply(`Cade o /\nExemplo: ${prefix + command} 91985841872/motivo`)
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var negoes = membros(from, groupMembers)
wew = await getBuffer('https://telegra.ph/file/1cc8e4042b739e0d0edd1.jpg')
spaw = `┌◈ ━━━≪ ⸙ ≫━━━ ◈┐\n  ¤📵𝙰𝚃𝙰𝚀𝚄𝙴 𝙳𝙴 𝚂𝙿𝙰𝙼📵️¤\n\n ⚠️𝙳𝙴𝙽𝚄𝙽𝙲𝙸𝙴𝙼 𝙴𝚂𝚂𝙴 𝙽𝚄𝙼𝙴𝚁𝙾⚠️\n\nWa.me//+55${luffy1}\n\n➡️𝚀𝚄𝙰𝙽𝚃𝙰𝚂 𝚅𝙴𝚉𝙴𝚂 𝚅𝙲 𝚀𝚄𝙸𝚂𝙴𝚁⬅️\n\n𝚖𝚘𝚝𝚒𝚟𝚘: ${luffy2}\n└◈ ━━━≪ ⸙ ≫━━━ ◈┘`
destiny.sendMessage(from, {image: wew, caption: spaw, mentions: negoes}, {quoted: selo})
break

case 'suportes': {
if (!isGroup) return reply(enviar.msg.grupo)
let buttons = [
  {buttonId:`${prefix}menos1`, buttonText: {displayText: '📝 𝗥𝗘𝗧𝗜𝗥𝗔𝗥 𝗦𝗨𝗣𝗢𝗥𝗧𝗘 𝗠𝗘𝗧𝗢𝗗𝗢 1' }, type: 1},
  {buttonId:`${prefix}menos2`, buttonText: {displayText: '📝 𝗥𝗘𝗧𝗜𝗥𝗔𝗥 𝗦𝗨𝗣𝗢𝗥𝗧𝗘 𝗠𝗘𝗧𝗢𝗗𝗢 2' }, type: 1},
  {buttonId: `${prefix}bandesban`, buttonText: {displayText: '🔥 𝗕𝗔𝗡𝗜𝗥/𝗗𝗘𝗦𝗕𝗔𝗡𝗜𝗥 𝗪𝗣𝗣 🔥' }, type: 1}]
let buttonMessage = {
image: {url: `https://telegra.ph/file/9918c1fff47a578460d25.jpg`},
caption: "\n  𝗖𝗢𝗣𝗜𝗘 𝗢 𝗧𝗫𝗧 𝗘𝗦𝗖𝗥𝗜𝗧𝗢 📍",
buttons: buttons,
headerType: 1
}
sendMsg = await destiny.sendMessage(from, buttonMessage, {quoted: selo})}
break

case 'bandesban': {
if (!isGroup) return reply(enviar.msg.grupo)
let buttons = [
  {buttonId:`${prefix}mtdban`, buttonText: {displayText: '📝 𝗧𝗫𝗧 𝗕𝗔𝗡𝗜𝗥 𝗪𝗣𝗣 ' }, type: 1},
  {buttonId:`${prefix}mtddesban`, buttonText: {displayText: '📝 𝗧𝗫𝗧 𝗗𝗘𝗦𝗕𝗔𝗡𝗜𝗥 𝗪𝗣𝗣 1'}, type: 1},
  {buttonId: `${prefix}mtddesban2`, buttonText: {displayText: '📝 𝗧𝗫𝗧 𝗗𝗘𝗦𝗕𝗔𝗡𝗜𝗥 𝗪𝗣𝗣 2' }, type: 1}]
let buttonMessage = {
image: {url: `https://telegra.ph/file/9918c1fff47a578460d25.jpg`},
caption: "\n  𝗖𝗢𝗣𝗜𝗘  𝗢 𝗧𝗫𝗧 𝗘𝗦𝗖𝗥𝗜𝗧𝗢 📍",
buttons: buttons,
headerType: 1
}
sendMsg = await destiny.sendMessage(from, buttonMessage, {quoted: selo})}
break

case 'menos1':
destiny.sendMessage(from, {text: 'assunto\nNão recebo código de verificação:', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/Meu número está no suporte alguém solicitou meu código por engano meu número é usado para conversas com familiares que estão com convite por favor reinicie o meu código de verificação via SMS!\nNúmero: +55 99 9999-9999'}}]}, {quoted: info})
break

case 'menos2':
destiny.sendMessage(from, {text: 'Assunto: Não consigo entrar no whatsapp!\nresposta:', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/resposta: Eu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!\nNúmero: +55 99 9999-9999'}}]}, {quoted: info})
break

case 'mtdban':
destiny.sendMessage(from, {text: 'Assunto: Usuário violando os termos de uso do whatsapp usando versões modificadas de whatsapps.', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/resposta: Olá, hojé eu percebi que um homem estava usando whatsapp modificado, falei para ele que talvez a conta dele poderia ser banida mais ele nem ligou, pesquisei no Google e vi que whatsapp modificados dão ban, então peço que o suporte dê ban nesta conta por estar usando whatsapp modificado.\nnumero: +55 99899'}}]}, {quoted: info})
break

case 'mtddesban':
destiny.sendMessage(from, {text: 'Assunto: Número Banido\nresposta:', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/resposta: Banido injustamente novamente +55 999999 se eu não obter respostas estarei migrando para o telegram.'}}]}, {quoted: info})
break

case 'mtddesban2':
destiny.sendMessage(from, {text: 'Assunto: Número Banido\nresposta:', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/resposta: Ola suporte do whatsapp , meu numero ,(+55 9999999) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número'}}]}, {quoted: info})
break
////////////// CONFIRMAÇAO

case 'uzumak': {
uzuma = ["https://youtu.be/IKchrtaXmEo",
"https://youtu.be/YpQ606sHhfo",
"https://youtu.be/8JnPIuMdQyo",
"https://youtu.be/I6wX-d__2xY"]
logomenu = [
"https://telegra.ph/file/a99782b9aabeffbf4937d.jpg" ]
bundak = uzuma[Math.floor(Math.random() * uzuma.length)]
menulogo = logomenu[Math.floor(Math.random() * logomenu.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: '⭔ OUTROS ⭔'}, type: 1},
{buttonId: `${prefix}uzumaki`, buttonText: {displayText: '⭔ CONFIRMAR ⭔'}, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: infouzumaki(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)}
break

case 'uchih': {
uchi = ["https://youtu.be/y5MZIkQNikc",
"https://youtu.be/ZpHcpTJoxOg",
"https://youtu.be/RdX4vzObuPA",
"https://youtu.be/7eGdZe3wQdU"]
logomenu = [
"https://telegra.ph/file/7fd850240b990a57f321d.jpg" ]
bundak = uchi[Math.floor(Math.random() * uchi.length)]
menulogo = logomenu[Math.floor(Math.random() * logomenu.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: '⭔ OUTROS ⭔'}, type: 1},
{buttonId: `${prefix}uchiha`, buttonText: {displayText: '⭔ CONFIRMAR ⭔'}, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: infouchiha(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)}
break

case 'hyuug': {
hyuug = ["https://youtu.be/z0keZbUaOMU",
"https://youtu.be/YhZGzdaPz0Y",
"https://youtu.be/HXJBa-K-W8w",
"https://youtu.be/u8Xakc6syvQ"]
logomenu = [
"https://telegra.ph/file/7f6c77307089d077b3fa2.jpg" ]
bundak = hyuug[Math.floor(Math.random() * hyuug.length)]
menulogo = logomenu[Math.floor(Math.random() * logomenu.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: '⭔ OUTROS ⭔'}, type: 1},
{buttonId: `${prefix}hyuuga`, buttonText: {displayText: '⭔ CONFIRMAR ⭔'}, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: infohyuuga(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)}
break

case 'otsutsuk': {
otsut = ["https://youtu.be/W8Ll_aP0WSc",
"https://youtu.be/7bAE-DZsx6Q",
"https://youtu.be/Sjz-9W_w0IE",
"https://youtu.be/rdjQJ6NOduo"]
logomenu = [
"https://telegra.ph/file/cc952bd5b842c6985f60d.jpg" ]
bundak = otsut[Math.floor(Math.random() * otsut.length)]
menulogo = logomenu[Math.floor(Math.random() * logomenu.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: '⭔ OUTROS ⭔'}, type: 1},
{buttonId: `${prefix}otsutsuki`, buttonText: {displayText: '⭔ CONFIRMAR ⭔'}, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: infootsu(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)}
break

case 'akatsuk': {
akatsu = ["https://youtu.be/c1ZgCnPBvUI",
"https://youtu.be/2cUoHJvqMfw",
"https://youtu.be/QE-dsJ5zB_0",
"https://youtu.be/-TbM-7dgjTo"]
logomenu = [
"https://telegra.ph/file/fca1430cb82e66fa32f7e.jpg" ]
bundak = akatsu[Math.floor(Math.random() * akatsu.length)]
menulogo = logomenu[Math.floor(Math.random() * logomenu.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: '⭔ OUTROS ⭔'}, type: 1},
{buttonId: `${prefix}akatsuki`, buttonText: {displayText: '⭔ CONFIRMAR ⭔'}, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/destiny.pptx'), mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: `Olá ${pushname}`,
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: infoakatsu(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)}
break

//==============Clans 🥋

case 'rgclans':
 sections = [
    {
	title: `CLANS RPG`,
	rows: [
  	   {title: "akatsuki", rowId: `${prefix}akatsuk`},
	   {title: "otsutsuki", rowId: `${prefix}otsutsuk`},
	   {title: "uzumaki", rowId: `${prefix}uzumak`},
	   {title: "hyuuga", rowId: `${prefix}hyuug`},
	   {title: "uchiha", rowId: `${prefix}uchih`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer se cadastra?',
  footer: 'Selecione uma das guildas abaixo.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'akatsuki':
case 'hyuuga':
case 'otsutsuki':
case 'uchiha':
case 'uzumaki':
if (clanId(sender) == undefined){
var i = dataclan.indexOf(command)
guildas[i].id.push(sender)
fs.writeFileSync(guildasdir, JSON.stringify(guildas, null, 2) + '\n')
reply('seu cadastro foi concluído')
} else {
reply('Vc esta cadastrado em: ' + clanId(sender))
}
break

case 'left':
if (clanId(sender) == undefined) return reply('Vc não pertence a nenhum clan')
var i = clanPs(sender)
guildas[i].id.splice(sender)
fs.writeFileSync(guildasdir, JSON.stringify(guildas, null, 2) + '\n')
reply('Saindo do clan')
break

case 'clan':
if (!args.join(' ')) return reply('Cade o clan?')
texting = args.join(' ')
var i = dataclan.indexOf(texting)
if (guildas[i].id.length < 1) return reply ('Não a ninguém neste clan')
wew = guildas[i].id.toString()
wew1 = wew.replace(/@s.whatsapp.net/g, "")
jet = `@${wew1.replace(/,/g, "\n@")}`
tenks = `
Clan *${texting}*

Level = ${levelclanId(texting)}

Ataques = ${attacksclanId(texting)}

Quantidade de Membros = ${guildas[i].id.length}

${jet}`
destiny.sendMessage(from, {text: tenks, mentions: guildas[i].id})
break

case 'battle':
if (clanId(sender) == undefined) return reply('Vc não pertence a nenhum clan')
if (!args.join(' ')) return reply('Batalhar com quem?')
bat = Math.floor(Math.random() * 100) + 1
clan1 = args.join(' ')
clan2 = clanId(sender)
if (clan1 == clan2) return reply ('Não pode batalhar com si mesmo')
var i = dataclan.indexOf(clan1)
if (guildas[i].id.length < 1) return reply ('Não a ninguém neste clan')
battle = [
  `https://telegra.ph/file/2e79a8c86cc1e201a6e8f.mp4`,
  `https://telegra.ph/file/d0aff5622eeee9fb2937c.mp4`,
  `https://telegra.ph/file/c275cc1c5d6e3cf6285f0.mp4`,
  `https://telegra.ph/file/6728fdf0ebabda60004aa.mp4`,
  `https://telegra.ph/file/5e28566a5ec5c8c768290.mp4`,
  `https://telegra.ph/file/654ed89b663f29539252b.mp4`,
  `https://telegra.ph/file/73610a8921f8a880f5e85.mp4`,
  `https://telegra.ph/file/c166578590f3dbd0c1585.mp4`]
reply(`${pushname} esta desafiando ${clan1}`)
await sleep(5000)
if (bat > 50){
txt = `vc ganhou`
clanLevel(clan2, 1000)
clanAttacks(clan2, 1)
}
if (bat <= 50){
txt = `vc perdeu`
clanLevel(clan1, 1000)
clanAttacks(clan1, 1)
}
ravideo = battle[Math.floor(Math.random() * battle.length)]
sendBvid(from, ravideo, txt, '', [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: ``}}], selo)
break

case 'resetclan':
a = [
{
clan: "akatsuki",
level: 0,
attacks: 0,
id: []
},
{
clan: "hyuuga",
level: 0,
attacks: 0,
id: []
},
{
clan: "otsutsuki",
level: 0,
attacks: 0,
id: []
},
{
clan: "uchiha",
level: 0,
attacks: 0,
id: []
},
{
clan: "uzumaki",
level: 0,
attacks: 0,
id: []
}
]
fs.writeFileSync(guildasdir, JSON.stringify(a, null, 2) + '\n')
break


case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':  
if(!SoDono && !isnit) return reply("COMANDO DESATIVADO POR QUESTÕES DE SEGURANÇA, PODE CAUSAR BANIMENTO NO NÚMERO DO BOT.")
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
destiny.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
} else {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
destiny.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
}
}
break

case 'correio':
txt = body.slice(10)
txtt = args.join(' ')
txt1 = txtt.split("/")[0];
txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio 559185841876/Oi Amor, sdds`)
corr = await getBuffer('https://telegra.ph/file/363d89595c923663ac2fb.jpg')
bla = 
`┏━━── • ──━━
┃│ _•°•°•°•°•°•°•፝⃟✉️𖥨_
┃│ *De:* ${pushname}
┃│ *Para:* ${txt1}
┣──────━━━
┣•❲ Msg:\n_*${txt2}*_
┗━━── • ──━━`
destiny.sendMessage(`${txt1}@s.whatsapp.net`, {image: corr, caption: bla}, {quoted: selo})
await sleep(3000)
reply("Correio Enviado")
break

case 'nome-bot':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = args.join(" ") 
setting.NomeDoBot = NomeDoBot
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do seu bot foi alterado com sucesso para : ${setting.NomeDoBot}`)
break

case 'nick-dono':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NickDono = args.join(" ")
setting.NickDono = NickDono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O Nick Do Dono foi configurado para : ${setting.NickDono}`)
break

case 'numero-dono':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
numerodono = args[0]
setting.numerodono = numerodono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O número dono foi configurado com sucesso para : ${setting.numerodono}`)
break

case 'prefixo-bot': case 'setprefix':
if (args.length < 1) return
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem 2 vez com esse comando..')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
logoslink.logo = logo
logo = res
fs.writeFileSync('./logos/logos.json', JSON.stringify(logoslink, null, '\t'))
reply(`A foto do menu foi alterada com sucesso para: ${logo}`)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
break

case 'setprefixs':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
await destiny.groupUpdateSubject(from, `${body.slice(9)}`)
await destiny.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'fotobot':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await destiny.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if (!SoDono  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await destiny.profilePictureUrl(id)
buffer = await getBuffer(pp)
destiny.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
_leveling.splice(from, 1)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'ganharlevel':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
addLevelingLevel(sender, 10)
reply("Olá chefe, foi adicionado 10 Level para você 🙂")
break

case 'ganharxp':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")  
addLevelingXp(sender, 5000)
reply("Foi adicionado 5000 mil de XP para você 🙂")
break

case 'level':
if (!isLevelingOn) return reply(`*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : ${prefix}leveling 1`)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
                resul = `     
            ◪ *REGISTRO* ◪                                                                  
            
  ├─ ❏ *NICK* : ${pushname}
  ├─ ❏ *NÚMERO* : ${sender.split("@")[0]}
  ├─ ❏ *PATENTE* : ${patt}               
  ├─ ❏ *XP* : ${userXp}
  └─ ❏ *LEVEL* : ${userLevel}`
await destiny.sendMessage(from, {text: resul}, {quoted: info})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break

case 'bcgp':
case 'bcgc':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (let _ of fgp) {
destiny.sendMessage(_.id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.id, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'dono1':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono1 = body.slice(8)
nescessario.dono1 = dono1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono1}`)
break

case 'dono2':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono2 = body.slice(8)
nescessario.dono2 = dono2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono3 = body.slice(8)
nescessario.dono3 = dono3
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono4 = body.slice(8)
nescessario.dono4 = dono4
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono5 = body.slice(8)
nescessario.dono5 = dono5
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono6 = body.slice(8)
nescessario.dono6 = dono6
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `[ Lista de donos do bot ${setting.NomeDoBot} ] 

Dono Oficial do bot: ${setting.numerodono}

- [ 1 ] ${nescessario.dono1}\n- [ 2 ] ${nescessario.dono2}\n- [ 3 ] ${nescessario.dono3}\n- [ 4 ] ${nescessario.dono4}\n- [ 5 ] ${nescessario.dono5}\n- [ 6 ] ${nescessario.dono6} `
reply(p)
break

case 'online':   
case 'onlines':  //case by: ᬊ͜͡𝑩𝑰𝑬𝑳𝒁𝑰𝑵𝑯𝑶.𝑬𝑿𝑬ᵒᶠᶜ
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[ido]), destiny.user.id]
destiny.sendMessage(from, {text: 'Pessoas online do gp:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`}, {quoted: info})
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins || !SoDono) return reply("Só adm ou dono pode utilizar este comando.") 
msgz = args.join(" ")

msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Horario: msgtmpol, 
Data: datinhaofc, 
Tabela: msgz
}

if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
fs.unlinkSync("./func/tabela/tabela-" + from + ".json");
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./func/tabela/tabela-${from}.json`)); 

blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`

destiny.sendMessage(from, {text: blity}, {quoted: info})
break

case 'alugado': case 'tempodesair': case 'tempo-aluguel': case 'aluguel': 
if(!SoDono && !info.key.fromMe) return 
txt = args.join(" ")
if(!txt.includes("/")) return reply(`O formato da data é assim : 03/04/22`)
msgz = args.join(" ").replace(" ", "")

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Data_que_alugou: datinhaofc, 
Data_de_sair: msgz
}

if(!fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/sairgp/sairgp-" + from + ".json")) {
fs.unlinkSync("./func/sairgp/sairgp-" + from + ".json");
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo de quando vai expirar o aluguel do bot e irei sair na data exata..`)
break

case 'ausente': case 'off': case 'afk':
if(!SoDono) return reply("Comando especial para o dono.")
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
msgz = args.join(" ")

var catmsgaus = {
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: msgz
}

if(!fs.existsSync(`./func/afk/afk-@${nmrdnofc}.json`)) {
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
} else {
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
}
}
reply(`Mensagem de ausência criada com sucesso...`)
break

case 'ativo': case 'on': case 'voltei':
if(!SoDono) return reply("Comando especial para o dono.")
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {  
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
break

case 'modos':
  if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
vidtst = `https://telegra.ph/file/e959bb3fb76f451cc5ef8.mp4`
sendBvid(from, vidtst, `ᬊ͜͡ Olá ${pushname} Você Deseja ser oque no Grupo: ${groupName}`, NomeDoBot, [{index: 2, quickReplyButton: {displayText: '📂SER ADM📂', id: `${prefix}seradm`}}, {index: 2, quickReplyButton: {displayText: '❌SER MEMBRO❌', id: `${prefix}sermembro`}}], info)
break

case 'seradm':
if (!SoDono) return reply (`somente o meu mestre...`)
horaluffy = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
dataluffy = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
imgep = `https://telegra.ph/file/4f0406b722b9b5de6628f.jpg`
zk = `
┌◈ ━━━━≪ ⸙ ≫━━━━ ◈┐
│ Agora Meu Mestre é 
│ Adm Neste Grupo
│ • Grupo: ${groupName}
│ • Data: ${dataluffy}
│ • Hora: ${horaluffy}
└◈ ━━━━≪ ⸙ ≫━━━━ ◈┘`
destiny.groupParticipantsUpdate(from, [`${setting.numerodono}@s.whatsapp.net`], "promote")
await sleep (2000)
sendBimg(from, imgep, zk, NomeDoBot + ' ©',
[{buttonId:`kk`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}], selo)
break

case 'sermembro': {
if (!isGroupAdmins) return reply (`Somente adm, vc ja é membro comum kkk`)
horaluffy = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
dataluffy = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
epd = `https://telegra.ph/file/396f06f642763a19396e9.jpg`
txt = `┌◈ ━━━━≪ ⸙ ≫━━━━ ◈┐
│ ╭O @${sender.split("@")[0]} 
│ ╰Agora É Membro Comum
│ • Grupo: ${groupName}
│ • Data: ${dataluffy}
│ • Hora: ${horaluffy}
└◈ ━━━━≪ ⸙ ≫━━━━ ◈┘`
destiny.groupParticipantsUpdate(from, [`@${sender.split("@")[0]}@s.whatsapp.net`], "demote")
await sleep (2000)
sendBimg(from, epd, txt, NomeDoBot + ' ©',
[{buttonId:`kk`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}], selo)
}
break


case 'registro':
if(isRG) return reply("Você ja está registrado")
registro.push(sender)
fs.writeFileSync('./datab/usuarios/registro.json', JSON.stringify(registro, null, 2))
sendBtext(from, `Parabéns Pelo Registro, Agora Você Pode Usar E Usufruir Meus Comandos`, `Veja Meu Menu`, [{buttonId: `${prefix}menu`, buttonText: {displayText: `Menu`}, type: 1}], selo)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
destiny.sendMessage(from, {text: `👑@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
destiny.sendMessage(from, {text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: info})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
destiny.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
destiny.sendMessage(from, {text: ` ${bla.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
cleaned = await getBuffer('https://telegra.ph/file/c193f609caee19ff6ca4b.mp4')
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
destiny.sendMessage(from, {video: cleaned, caption: clear, gifPlayback: true, templateButtons: [{index: 2, quickReplyButton: {displayText: `Limpar Mais 🗑️`, id: `${prefix + command}`}}]}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
await destiny.chatModify({ clear: { message: { id: String, fromMe: true } } }, from, [])
reply("Chat limpo")
break

case 'addpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'legendabv':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(from)
welcome_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group.push(json)
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas criada com sucesso!*')
}
break

case 'prefixobv': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: prefixokbv(prefix),
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break





case 'legendasaiu':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group.push(json)
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída criada com sucesso!*')
}
break

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break

case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break

case 'deletar':  case 'apagar':  case 'delete':   case 'del':  case 'd':
if (!isGroup)return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
destiny.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender }})
.catch((err) => { 
console.log(err)
reply('A mensagem não foi enviado pelo bot...')
})
break

case 'delmsg':
 if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
var a = info.message.extendedTextMessage.contextInfo
var rafa = {
remoteJid: from,
fromMe: info.key.fromMe,
id: a.stanzaId,
participant: a.participant
}
destiny.sendMessage(from, { delete: rafa }).then(() => destiny.sendMessage(from, { delete: info.key }))
break

case 'fundobemvindo':
case 'fundobv':  
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
try {
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antipvon':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe ) return reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await destiny.sendMessage(from, {text: "*Sucesso alterado para modo antipv, pv não poderá ser utilizado"})
break

case 'antipvoff':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await destiny.sendMessage(from, {text: "*Sucesso modo antipv desligado, pv liberado."})
break

case 'antipv':
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(antipv))
reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Ja esta Desativado')
pesquisar = 'Ativado'
processo = antipv.indexOf(pesquisar)
while(processo >= 0){
antipv.splice(processo, 1)
processo = antipv.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'block':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'antispa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args[0] === 'on') {
Banspam.push(from)
fs.writeFileSync('./datab/grupos/antispam.json', JSON.stringify(Banspam))
if (Banspam.includes(from)) return reply('anti-spam ativado, caso alguém flode msg, será removido imediatamente')
reply('ativo com sucesso')
} else if (args[0] === 'off') {
if (!Banspam.includes(from)) return reply('anti-spam desativado')
reply('anti-spam desativado')
Banspam.splice(from, 1)
fs.writeFileSync('./datab/grupos/antispam.json', JSON.stringify(Banspam))
} else {
reply('ON ou OFF')
}
break


case 'unblock':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'blocklist': {
jrc = `┏━━━━── • ──━━━━\n`
jrck = '[🩸] _*ESTA É A LISTA DE NÚMEROS*_\n_*BLOQUEADOS*_'
for (let wtfk of ban) {
jrc += `┃ ╭× Wa.me/${wtfk.split('@')[0]}\n`
jrc += `┃ ╰× 「 ${wtfk.split('@')[0]} 」\n┃        [•••]\n`
}
jrc += `┃ • Total : ${ban.length}\n`
jrc += `┗━━━━── • ──━━━━`
let buttons = [
{buttonId: `${prefix}ping`, buttonText: {displayText: '[📍] PING'}, type: 1},
{buttonId: `${prefix}lista`, buttonText: {displayText: '[📍] LISTA MENU'}, type: 1}
]
let buttonMessage = {
image: { url: `https://telegra.ph/file/e7487280fff155573ea37.jpg` },
caption: jrck,
footer: jrc,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `instagram\nSegue La 💯`,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo})}
break

case 'acess':
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return destiny.sendMessage(from, {text: `root@ALEATORY-BOT:~ ${err}`}, {quoted: info})
if (stdout) {
destiny.sendMessage(from, {text: stdout})
}
})
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'limitec':
if(!SoDono  && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if (args.length < 1) return
if (!setTimeout && !info.key.fromMe) return reply(enviar.msg.donosmt)
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(limitefll, null, '\t'))
reply(`${limitefl} foi adicionado como limite de antiflood `)
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'ping': {
 r = (Date.now() / 1000) - info.messageTimestamp
			uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
imgping = await getBuffer('https://telegra.ph/file/803cc8b535cd75156c848.jpg')
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: `[${EmojeG(emojos)}] MENU [${EmojeG(emojos)}]`}, type: 1}
]
text = ` `
let buttonMessage = {
image: imgping,
caption: text,
footer: `[🥷] PING DO BOT [🥷]

[🌟] Velocidade: ${String(r.toFixed(3))}
[🗓] Data: ${date}
[🕰] Hora: ${hora1}
[👤] Usuário: ${pushname}
[🔋] Online: Servidor Youth
[⏱] Tempo de atividade:\n\n${kyun(uptime)}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
}
break

///////// VOZES

case 'txtvoz':
if(!q) return reply("𝗖𝗔𝗗𝗘̂ 𝗢 𝗧𝗘𝗫𝗧𝗢")
sections = [
    {
title: "LISTA DE VOZES",
rows: [
{title: `brasil`, rowId: `${prefix}gtts pt ${q}`, description: ""},
{title: `Africano`, rowId: `${prefix}gtts af ${q}`, description: ""},
	    {title: `Albânia`, rowId: `${prefix}gtts sq ${q}`, description: ""},
	    {title: `Arabia`, rowId: `${prefix}gtts ar ${q}`, description: ""},
	    {title: `Catalan`, rowId: `${prefix}gtts ca ${q}`, description: ""},
	    {title: `Croatian`, rowId: `${prefix}gtts hr ${q}`, description: ""},
	    {title: `Czech`, rowId: `${prefix}gtts cs ${q}`, description: ""},
	    {title: `Danish`, rowId: `${prefix}gtts da ${q}`, description: ""},
	    {title: `Dutch`, rowId: `${prefix}gtts nl ${q}`, description: ""},
	    {title: `English`, rowId: `${prefix}gtts en ${q}`, description: ""},
	    {title: `Finnish`, rowId: `${prefix}gtts fi ${q}`, description: ""},
	    {title: `French`, rowId: `${prefix}gtts fr ${q}`, description: ""},
	    {title: `German`, rowId: `${prefix}gtts de ${q}`, description: ""},
	    {title: `greek`, rowId: `${prefix}gtts el ${q}`, description: ""},
	    {title: `Hindi`, rowId: `${prefix}gtts hi ${q}`, description: ""},
	    {title: `Hungarian`, rowId: `${prefix}gtts hu ${q}`, description: ""},
	    {title: `Icelandic`, rowId: `${prefix}gtts is ${q}`, description: ""},
	    {title: `Indonesian`, rowId: `${prefix}gtts id ${q}`, description: ""},
	    {title: `Italia`, rowId: `${prefix}gtts it ${q}`, description: ""},
	    {title: `Japanese`, rowId: `${prefix}gtts ja ${q}`, description: ""},
	    {title: `Korean`, rowId: `${prefix}gtts ko ${q}`, description: ""},
	    {title: `Latin`, rowId: `${prefix}gtts la ${q}`, description: ""},
	    {title: `Latvian`, rowId: `${prefix}gtts lv ${q}`, description: ""},
	    {title: `Norwegian`, rowId: `${prefix}gtts no ${q}`, description: ""},
	    {title: `Polish`, rowId: `${prefix}gtts pl ${q}`, description: ""},
	    {title: `Romanian`, rowId: `${prefix}gtts ro ${q}`, description: ""},
	    {title: `Ressian`, rowId: `${prefix}gtts ru ${q}`, description: ""},
	    {title: `Serbian`, rowId: `${prefix}gtts sr ${q}`, description: ""},
	    {title: `Slovak`, rowId: `${prefix}gtts sk ${q}`, description: ""},
	    {title: `Spanish`, rowId: `${prefix}gtts es ${q}`, description: ""},
	    {title: `Swahili`, rowId: `${prefix}gtts sw ${q}`, description: ""},
	    {title: `Swedish`, rowId: `${prefix}gtts sv ${q}`, description: ""},
	    {title: `Tamil`, rowId: `${prefix}gtts ta ${q}`, description: ""},
	    {title: `Thai`, rowId: `${prefix}gtts th ${q}`, description: ""},
	    {title: `turkish`, rowId: `${prefix}gtts tr ${q}`, description: ""},
	    {title: `Vietnamese`, rowId: `${prefix}gtts vi ${q}`, description: ""},]
}]
listMessage2 = {
text: `[${EmojeG(emojos)}] G.T.T.S [${EmojeG(emojos)}]`,
  footer: `[🔊] Olá escolha as vozes que estão disponíveis na lista, escolha uma língua de determinada de um país pra que ela possa reproduzir.`,
  title: " ",
  buttonText: 'Aperte Aqui',
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2)
break

case 'gtts':
if (args.length < 1) return destiny.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: selo})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return destiny.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: selo})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
destiny.sendMessage(from, {audio: buffer, ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/audio.jpg"),
mediaType:2,
mediaUrl: `https://youtu.be/4fIiOvdcu10`,
sourceUrl: `https://youtu.be/4fIiOvdcu10`
}}}, {quoted:selo})
fs.unlinkSync(rano)
})
})
break

case 'ibere':
reply('[🔊] Aguarde um momento...')
if(args.length < 1) return reply('Cadê o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'ibere', teks).then(async res => {
buff = await getBuffer(res)
destiny.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break

case 'eminem':
reply('[🔊] Aguarde um momento...')
if(args.length < 1) return reply('Cadê o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'eminem', teks).then(async res => {
buff = await getBuffer(res)
destiny.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break

case 'chapolin':
reply('[🔊] Não contavam com minha astúcia? aguarde um momento...')
if(args.length < 1) return reply('Cadê o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'chapolin-br', teks).then(async res => {
buff = await getBuffer(res)
destiny.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break

case 'negobam':
reply('[🔊] Aguarde um momento...')
if(args.length < 1) return reply('Cadê o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'negobam', teks).then(async res => {
buff = await getBuffer(res)
destiny.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break

case 'faustao':
reply('[🔊] Ooo lokinhoo meuuu!! ksksksk já tô fazendo....')
if(args.length < 1) return reply('Cadê o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'faustao', teks).then(async res => {
buff = await getBuffer(res)
destiny.sendMessage(from, {audio: buff, uber,  mimetype: 'audio/mpeg'}, { quoted: selo })
})
break


///////

case 'tagme':
members_id = []  
const tagme = `@${sender.split("@")[0]} ✔️`
members_id.push(sender.split("@s.whatsapp.net"))
await mentions(tagme, members_id, true)
break

case 'blockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
await destiny.sendMessage(from, tkks.trim(), extendedText, {quoted: info})
break

case 'avaliar':
botaoavaliar = [
{title: "avaliação",
rows: [
{title: "★☆☆☆☆", rowId: `${prefix}avpessimo uma merda`},
{title: "★★☆☆☆", rowId: `${prefix}avruimm legal man`},
{title: "★★★☆☆", rowId: `${prefix}avbom  até que da pra usar`},
{title: "★★★★☆", rowId: `${prefix}avmuitobom  amei muito`},
{title: "★★★★★", rowId: `${prefix}avperfeito  perfeito maravilhoso`}]
}]
sendlistA(from, " ", "Seu Feedback É Muito Importante Para Nois obgd\nPara Avaliar Clique Na Opção Abaixo:", "*AVALIAÇÃO ZEBRS - BOT*", "AVALIAR", botaoavaliar)
break

case 'avpessimo':
reply (`obrigado(a) pela avaliação😔`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return destiny.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★☆☆☆☆😔
`
await destiny.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'avruimm':
reply (`obrigado(a) pela avaliação`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return destiny.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★★☆☆☆🙂
`
await destiny.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'avbom':
reply (`obrigado(a) pela avaliação🥰`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return destiny.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★★★☆☆🥰
`
await destiny.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'avmuitobom':
reply (`obrigado(a) pela avaliação`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return destiny.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★★★★☆😍
`
await destiny.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'avperfeito':
reply (`obrigado(a( pela ótima avaliação😊`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return destiny.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★★★★★☺
`
await destiny.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return destiny.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
text: teks1,
contextInfo: {
mentionedJid: [sender]
},
}
await destiny.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: options}, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoeira, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return destiny.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
await destiny.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: sug}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//========(BAIXAR/PESQUISAS)========\\

//======(BAIXAR/PESQUISAS)======\\

case 'pinterest': case 'pin':{
if (!q) throw `Exemplo : ${prefix + command}`
let { pinterest } = require('./lib/scraper')
anu = await pinterest(q)
result = anu[Math.floor(Math.random() * anu.length)]               
let buttons = [                   
{buttonId: `${prefix}pinterest ${q}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption: `Resultados sobre : ${q}\n\nLink: 
${result}\n\n*Clique em próximo para continuar*`,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'anime': {
if(!q) return reply(`Qual anime você quer pesquisar?\nExemplo ${prefix}manga naruto`)
reply("aguarde um minuto...")						
const { Anime } = require("@shineiichijo/marika")
const client = new Anime();
let anime = await client.searchAnime(q)
let result = anime.data[0];
console.log(result)
let Saikyo = `⭔ Titulo: ${result.title}\n`;
Saikyo += `⭔ Formato: ${result.type}\n`;
Saikyo += `⭔ Estado: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
Saikyo += `⭔ Total episodio: ${result.episodes}\n`;
Saikyo += `⭔ Duração: ${result.duration}\n`;
Saikyo += `⭔ Gêneros:\n`;
for (let i = 0; i < result.genres.length; i++) {
Saikyo += `${result.genres[i].name}\n`;
}
Saikyo += `⭔ Residia em : ${result.source.toUpperCase()}*\n`;
Saikyo += `⭔ *estudar:\n`;
for (let i = 0; i < result.studios.length; i++) {
Saikyo += `${result.studios[i].name}\n`;
}
Saikyo += `⭔ Você produz:\n`;
for (let i = 0; i < result.producers.length; i++) {
Saikyo += `${result.producers[i].name}\n`;
}
Saikyo += `⭔ Treinou o : ${result.aired.from}\n`;
Saikyo += `⭔ Ele terminou em: ${result.aired.to}\n`;
Saikyo += `⭔ Popularidade: ${result.popularity}\n`;
Saikyo += `⭔ Favoritos: ${result.favorites}\n`;
Saikyo += `⭔ Avaliação: ${result.rating}\n`;
Saikyo += `⭔ Variar: ${result.rank}\n`;
if (result.trailer.url !== null)
Saikyo += `⭔ Trailer: 
${result.trailer.url}
\n`;
Saikyo += `⭔ Descrição:
${result.url}\n\n`;
if (result.background !== null)

Saikyo += `⭔📍FIM📍
`
let buttonMessage = {
image:{url:result.images.jpg.large_image_url},
caption: Saikyo,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: '',
sourceUrl: `https://www.instagram.com/maysurf__/`,
mediaUrl: ``
}}
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case "reddit":
    case 'sr': {
        if (!q) {
            reply('Forneça um termo de pesquisa!')
            return;
        }
        const sr = q
        try {
            const {
                data
            } = await axios.get(`https://meme-api.herokuapp.com/gimme/${sr}`);
            const xz = `Titulo : ${data.title} 

Postenlace : ${data.postLink}     

Subreddit: ${data.subreddit}

Spoiler: ${data.spoiler}
`
            
            await destiny.sendMessage(from, {
                image: {
                    url: data.url
                },
                caption: xz
            }, {
                quoted: selo
            });
        } catch (err) {
            await reply('Nenhum resultado encontrado!')
            console.log(err)
        }
    }
    break

case 'gimme': {
reply('aguarde cadela')
let za = await axios(`https://meme-api.herokuapp.com/gimme/boobs`)
let json = za.data
let url = json.url
Saikyo = `Pesquisa: Gimme`
let buttons = [
{buttonId: `${prefix}gimme`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 2},
]
let buttonMessage = {
image: { url: url },
caption: Saikyo,
footer: `Clique no botão abaixo para escolher`,
buttons: buttons,
headerType: 4,
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'wallpaper': {
if (!q) return reply(`Insira o título da consulta`)
let { wallpaper } = require('./lib/scraper.js')
anu = await wallpaper(q)
result = anu[Math.floor(Math.random() * anu.length)]
reply("Processando dados...") 
let buttons = [
{
buttonId: `${prefix}wallpaper ${q}`, 
buttonText: {
displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'
}, type: 1},
]
Saikyo = `
⭔ Título : ${q}
⭔ Categoria: ${result.type}
⭔ Detalhe: ${result.source}
⭔ Media Url: ${result.image[2] || result.image[1] || result.image[0]}`
let buttonMessage = {
image: { url: result.image[0] },
caption: Saikyo,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail:'',
mediaType:2,
mediaUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`, 
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
}
break
            
case 'wikimedia': {
if (!q) return reply(`Insira o título da consulta`)
let { wikimedia } = require('./lib/scraper.js')
anu = await wikimedia(q)
result = anu[Math.floor(Math.random() * anu.length)]
reply("Processando dados...") 
let buttons = [
{
buttonId: `${prefix}wikimedia ${q}`, 
buttonText: {
displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'
}, type: 1},
]
Saikyo = `
⭔ Título: ${q}
⭔ Fonte: 1${result.source}
⭔ Media Url: ${result.image}`
let buttonMessage = {
image: { url: result.image },
caption: Saikyo,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: '',
mediaType:2,
mediaUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`, 
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case'goyabu':
if(!q) return reply("cade o nome do anime? ver se escreve certo blz")
var request = await axios('https://goyabu.com/?s=' + args.join(" ").replace(/ /g, "+"));
var $ = cheerio.load(request.data);
var g = $('div.episodes-container').find('div.anime-episode').length;
var n = g 
if (n == '0') reply("Anime Não Encontrado Verifique Se Você Pesquiou Exatamente O Nome")
var sections = [{ title: `${NomeDoBot}`, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.episodes-container').find('div.anime-episode').eq(i).find('h3').text(),
rowId: prefix + 'yabu_1 ' + $('div.episodes-container').find('div.anime-episode').eq(i).find('a').attr('href')
});
};
await destiny.sendMessage(from, {text: n + " Resultados", title: `${NomeDoBot}\nPesquisado por: ` + args.join(" "), buttonText: "SELECIONAR", sections });
break

case'yabu_1':
var request = await axios(args.join(" "));
var $ = cheerio.load(request.data);
var n = $('div.anime-info-right').find('div').eq(5).text().split(':')[1].trim().concat('\n', $('div.anime-info-right').find('div').eq(1).text().split(':')[1].trim(), '\n', $('div.anime-info-right').find('div').eq(4).text().split(':')[1].trim(), '\n\n', $('div.anime-description').text().trim());
var g = $('div.row').find('a').length;
var sections = [{ title: `${NomeDoBot}`, rows: [] }];
for (let i = 0; i < g; i++) {
sections[0].rows.push({
title: $('div.row').find('a').eq(i).find('div').eq(1).text(),
rowId: prefix + 'yabu_2 ' + $('div.row').find('a').eq(i).attr('href')
});
};
await destiny.sendMessage(from, { text: n, title: $('h1').text(), buttonText: $('h1').text(), sections });
break

case'yabu_2':
var request = await axios(args.join(" "));
var $ = cheerio.load(request.data);
var g = 'https://kanra.dev' + $('html').html().split('https://kanra.dev')[1].split("'")[0];
var p = await axios('https://tinyurl.com/api-create.php?url=' + g);
var n = $('h1').text() + ':\nLink: ' + p.data;
reply(n);
break


case 'gerarlink':  
case 'imgpralink':    
try {
if (isQuotedImage) {
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'videourl':
case 'videopralink':
try {
if ((isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande vídeo com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.')
}
break


case 'komi': {
const {kmi} = require('./node_modules/API/animes.js')
  apikomi = kmi[Math.floor(Math.random() * kmi.length)]
  wew = await getBuffer(`${apikomi}`)
  mag = 'KOMI-SAN ❣️'
let buttons = [
{
buttonId: `${prefix + command}`, 
buttonText: {
displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'
}, type: 1},
]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break

case 'zero-two':
case 'zero': {
const {zero} = require('./node_modules/API/animes.js')
apizero = zero[Math.floor(Math.random() * zero.length)]
wew = await getBuffer(`${apizero}`)
mag = 'ZERO-TWO💞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage,{quoted:selo})
}
break


case 'nagatoro': {
  const {nagatoro} = require('./node_modules/API/animes.js')
  apinagatoro = nagatoro[Math.floor(Math.random() * nagatoro.length)]
  wew = await getBuffer(`${apinagatoro}`)
  mag = 'NAGATORO-SAN'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage,{quoted:selo})
}
break

case 'suzuya': {
  const {suzuya} = require('./node_modules/API/animes.js')
  apisuzuya = suzuya[Math.floor(Math.random() * suzuya.length)]
  wew = await getBuffer(`${apisuzuya}`)
  mag = 'Juuzou Suzuya'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage,{quoted:selo})
}
break

case 'kaguya-sama':
case 'kaguya':{
  const {kaguya} = require('./node_modules/API/animes.js')
  apikaguya = kaguya[Math.floor(Math.random() * kaguya.length)]
  wew = await getBuffer(`${apikaguya}`)
  mag = '𝐤𝐚𝐠𝐮𝐲𝐚-𝐬𝐚𝐦𝐚❤'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break

case 'tanjiro': {
  const {tanjiro} = require('./node_modules/API/animes.js')
  apitanjiro = tanjiro[Math.floor(Math.random() * tanjiro.length)]
  wew = await getBuffer(`${apitanjiro}`)
  mag = '𝐓𝐚𝐧𝐣𝐢𝐫𝐨 𝐞𝐬𝐩𝐚𝐝𝐚𝐜𝐡𝐢𝐦'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break

case 'neko': {
  const {neko} = require('./node_modules/API/animes.js')
  apineko = neko[Math.floor(Math.random() * neko.length)]
  wew = await getBuffer(`${apineko}`)
  mag = '𝐍𝐞𝐤𝐨𝐬 𝐈𝐜𝐨𝐧𝐬'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break

case 'itsuki': {
  const {itsuki} = require('./node_modules/API/animes.js')
  apiitsuki = itsuki[Math.floor(Math.random() * itsuki.length)]
  wew = await getBuffer(`${apiitsuki}`)
  mag = '𝐢𝐭𝐬𝐮𝐤𝐢-𝐢𝐜𝐨𝐧𝐬❤'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage,{quoted:selo})
}
break

case 'chizuru': {
  const {chizuru} = require('./node_modules/API/animes.js')
  apichizuru = chizuru[Math.floor(Math.random() * chizuru.length)]
  wew = await getBuffer(`${apichizuru}`)
  mag = '𝐌𝐢𝐳𝐮𝐡𝐚𝐫𝐚 𝐜𝐡𝐢𝐳𝐮𝐫𝐮'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break
  
case 'hinata': {
  const {hinata} = require('./node_modules/API/animes.js')
  apihinata = hinata[Math.floor(Math.random() * hinata.length)]
  wew = await getBuffer(`${apihinata}`)
  mag = '𝐇𝐢𝐧𝐚𝐭𝐚 𝐇𝐲𝐮𝐮𝐠𝐚'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break

case 'sakura': {
  const {sakura} = require('./node_modules/API/animes.js')
  apisakura = sakura[Math.floor(Math.random() * sakura.length)]
  wew = await getBuffer(`${apisakura}`)
    mag = '𝐒𝐚𝐤𝐮𝐫𝐚 𝐇𝐚𝐫𝐮𝐧𝐨'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break

case 'sakurajima': {
  const {sakurajima} = require('./node_modules/API/animes.js')
  apisakurajima = sakurajima[Math.floor(Math.random() * sakurajima.length)]
  wew = await getBuffer(`${apisakurajima}`)
  mag = '𝐌𝐚𝐢 𝐒𝐚𝐤𝐮𝐫𝐚𝐣𝐢𝐦𝐚'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break

case 'waifus': {
  const {Waifu} = require('./node_modules/API/animes.js')
  apiWaifu = Waifu[Math.floor(Math.random() * Waifu.length)]
  wew = await getBuffer(`${apiWaifu}`)
  mag = '𝐖𝐚𝐢𝐟𝐮'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage,{quoted:selo})
}
break


case 'zoro': {
  const {zoro} = require('./node_modules/API/animes.js')
  apizoro = zoro[Math.floor(Math.random() * zoro.length)]
  wew = await getBuffer(`${apizoro}`)
  mag = '𝐑𝐨𝐫𝐨𝐧𝐨𝐚 𝐙𝐨𝐫𝐨'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage,{quoted:selo})
}
break

case 'asuna': {
  const {asuna} = require('./node_modules/API/animes.js')
  apiasuna = asuna[Math.floor(Math.random() * asuna.length)]
  wew = await getBuffer(`${apiasuna}`)
  mag = '𝐀𝐬𝐮𝐧𝐚 𝐘𝐮𝐮𝐤𝐢'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage,{quoted:selo})
}
break

case 'akame': {
  const {akame} = require('./node_modules/API/animes.js')
  apiakame = akame[Math.floor(Math.random() * akame.length)]
  wew = await getBuffer(`${apiakame}`)
    mag = '𝐀𝐤𝐚𝐦𝐞 𝐠𝐚 𝐊𝐢𝐥𝐥!'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage,{quoted:selo})
}
break

case 'megumin': {
  const {megumin} = require('./node_modules/API/animes.js')
  apimegumin = megumin[Math.floor(Math.random() * megumin.length)]
  wew = await getBuffer(`${apimegumin}`)
      mag = '𝐌𝐞𝐠𝐮𝐦𝐢𝐧'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break

case 'naruto': {
  const {naruto} = require('./node_modules/API/animes.js')
  apinaruto = naruto[Math.floor(Math.random() * naruto.length)]
  wew = await getBuffer(`${apinaruto}`)
  mag = '𝐍𝐚𝐫𝐮𝐭𝐨 𝐔𝐳𝐮𝐦𝐚𝐤𝐢'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage,{quoted:selo})
}
break

case 'nezuko': {
  const {nezuko} = require('./node_modules/API/animes.js')
  apinezuko = nezuko[Math.floor(Math.random() * nezuko.length)]
  wew = await getBuffer(`${apinezuko}`)
  mag = '𝐍𝐞𝐳𝐮𝐤𝐨 𝐊𝐚𝐦𝐚𝐝𝐨'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage, {quoted:selo})
}
break

case 'akira': {
  const {akira} = require('./node_modules/API/Animes2.js')
  apiakira = akira[Math.floor(Math.random() * akira.length)]
  wew = await getBuffer(`${apiakira}`)
  mag = 'Akira'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage,{quoted:selo})
}
break

case 'akiyama': {
  const {akiyama} = require('./node_modules/API/Animes2.js')
  apiakiyama = akiyama[Math.floor(Math.random() * akiyama.length)]
  wew = await getBuffer(`${apiakiyama}`)
  mag = 'Akiyama'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from, buttonMessage,{quoted:selo})
}
break

case 'tomoya': {
  const {ana} = require('./node_modules/API/Animes2.js')
  apiana = ana[Math.floor(Math.random() * ana.length)]
  wew = await getBuffer(`${apiana}`)
  mag = 'Tomoya Matsumaga'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'ayuzawa': {
  const {ayuzawa} = require('./node_modules/API/Animes2.js')
  apiayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)]
  wew = await getBuffer(`${apiayuzawa}`)
  mag = 'Ayuzawa'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'boruto': {
  const {boruto} = require('./node_modules/API/Animes2.js')
  apiboruto = boruto[Math.floor(Math.random() * boruto.length)]
  wew = await getBuffer(`${apiboruto}`)
  mag = 'Boruto: Naruto Next Generations'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'chiho': {
  const {chiho} = require('./node_modules/API/Animes2.js')
  apichiho = chiho[Math.floor(Math.random() * chiho.length)]
  wew = await getBuffer(`${apichiho}`)
  mag = 'Chiho Sasaki'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'chitoge': {
  const {chitoge} = require('./node_modules/API/Animes2.js')
  apichitoge = chitoge[Math.floor(Math.random() * chitoge.length)]
  wew = await getBuffer(`${apichitoge}`)
  mag = 'Chitoge Kirisaki'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'deidara': {
  const {deidara} = require('./node_modules/API/Animes2.js')
  apideidara = deidara[Math.floor(Math.random() * deidara.length)]
  wew = await getBuffer(`${apideidara}`)
  mag = 'Deidara'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'elaina': {
  const {elaina} = require('./node_modules/API/Animes2.js')
  apielaina = elaina[Math.floor(Math.random() * elaina.length)]
  wew = await getBuffer(`${apielaina}`)
  mag = 'Wandering Witch: The Journey of Elaina'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'emilia': {
  const {emilia} = require('./node_modules/API/Animes2.js')
  apiemilia = emilia[Math.floor(Math.random() * emilia.length)]
  wew = await getBuffer(`${apiemilia}`)
  mag = 'Emilia'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'erza': {
  const {erza} = require('./node_modules/API/Animes2.js')
  apierza = erza[Math.floor(Math.random() * erza.length)]
  wew = await getBuffer(`${apierza}`)
  mag = 'Erza Scarlet'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'gremory': {
  const {gremory} = require('./node_modules/API/Animes2.js')
  apigremory = gremory[Math.floor(Math.random() * gremory.length)]
  wew = await getBuffer(`${apigremory}`)
  mag = 'Gremory'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'hestia': {
  const {hestia} = require('./node_modules/API/Animes2.js')
  apihestia = hestia[Math.floor(Math.random() * hestia.length)]
  wew = await getBuffer(`${apihestia}`)
  mag = 'Hestia'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'inori': {
  const {inori} = require('./node_modules/API/Animes2.js')
  apiinori = inori[Math.floor(Math.random() * inori.length)]
  wew = await getBuffer(`${apiinori}`)
  mag = 'Inori Yuzuriha'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'isuzu': {
  const {isuzu} = require('./node_modules/API/Animes2.js')
  apiisuzu = isuzu[Math.floor(Math.random() * isuzu.length)]
  wew = await getBuffer(`${apiisuzu}`)
  mag = 'Isuzu'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'itachi': {
  const {itachi} = require('./node_modules/API/Animes2.js')
  apiitachi = itachi[Math.floor(Math.random() * itachi.length)]
  wew = await getBuffer(`${apiitachi}`)
  mag = 'Itachi Uchiha'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'itori': {
  const {itori} = require('./node_modules/API/Animes2.js')
  apiitori = itori[Math.floor(Math.random() * itori.length)]
  wew = await getBuffer(`${apiitori}`)
  mag = 'Itori'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'kaga': {
  const {kaga} = require('./node_modules/API/Animes2.js')
  apikaga = kaga[Math.floor(Math.random() * kaga.length)]
  wew = await getBuffer(`${apikaga}`)
  mag = 'Kouko Kaga'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'kagura': {
  const {kagura} = require('./node_modules/API/Animes2.js')
  apikagura = kagura[Math.floor(Math.random() * kagura.length)]
  wew = await getBuffer(`${apikagura}`)
  mag = 'Kagura'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'kakashi': {
  const {kakashi} = require('./node_modules/API/Animes2.js')
  apikakashi = kakashi[Math.floor(Math.random() * kakashi.length)]
  wew = await getBuffer(`${apikakashi}`)
  mag = 'Kakashi Hatake'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'kaori': {
  const {kaori} = require('./node_modules/API/Animes2.js')
  apikaori = kaori[Math.floor(Math.random() * kaori.length)]
  wew = await getBuffer(`${apikaori}`)
  mag = 'Kaori'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'kaneki': {
  const {kaneki} = require('./node_modules/API/Animes2.js')
  apikaneki = kaneki[Math.floor(Math.random() * kaneki.length)]
  wew = await getBuffer(`${apikaneki}`)
  mag = 'Ken Kaneki'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'kotori': {
  const {kotori} = require('./node_modules/API/Animes2.js')
  apikotori = kotori[Math.floor(Math.random() * kotori.length)]
  wew = await getBuffer(`${apikotori}`)
  mag = 'Kotori'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'kurumi': {
  const {kurumi} = require('./node_modules/API/Animes2.js')
  apikurumi = kurumi[Math.floor(Math.random() * kurumi.length)]
  wew = await getBuffer(`${apikurumi}`)
  mag = 'Kurumi Tokisaki'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'madara': {
  const {madara} = require('./node_modules/API/Animes2.js')
  apimadara = madara[Math.floor(Math.random() * madara.length)]
  wew = await getBuffer(`${apimadara}`)
  mag = 'Madara Uchiha'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'mikasa': {
  const {mikasa} = require('./node_modules/API/Animes2.js')
  apimikasa = mikasa[Math.floor(Math.random() * mikasa.length)]
  wew = await getBuffer(`${apimikasa}`)
  mag = 'Mikasa'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'minato': {
  const {minato} = require('./node_modules/API/Animes2.js')
  apiminato = minato[Math.floor(Math.random() * minato.length)]
  wew = await getBuffer(`${apiminato}`)
  mag = 'Minato Namikaze'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'sagiri': {
  const {sagiri} = require('./node_modules/API/Animes2.js')
  apisagiri = sagiri[Math.floor(Math.random() * sagiri.length)]
  wew = await getBuffer(`${apisagiri}`)
  mag = 'Izumi Sagiri'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'sasuke': {
  const {sasuke} = require('./node_modules/API/Animes2.js')
  apisasuke = sasuke[Math.floor(Math.random() * sasuke.length)]
  wew = await getBuffer(`${apisasuke}`)
  mag = 'Sasuke Uchiha'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'shina': {
  const {shina} = require('./node_modules/API/Animes2.js')
  apishina = shina[Math.floor(Math.random() * shina.length)]
  wew = await getBuffer(`${apishina}`)
  mag = 'Shina'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'tejina': {
  const {tejina} = require('./node_modules/API/Animes2.js')
  apitejina = tejina[Math.floor(Math.random() * tejina.length)]
  wew = await getBuffer(`${apitejina}`)
  mag = 'Tejina-senpai'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'toukachan': {
  const {toukachan} = require('./node_modules/API/Animes2.js')
  apitoukachan = toukachan[Math.floor(Math.random() * toukachan.length)]
  wew = await getBuffer(`${apitoukachan}`)
  mag = 'Touka-Chan'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'tsunade': {
  const {tsunade} = require('./node_modules/API/Animes2.js')
  apitsunade = tsunade[Math.floor(Math.random() * tsunade.length)]
  wew = await getBuffer(`${apitsunade}`)
  mag = 'Tsunade Senju'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'waifu': {
  const {waifu} = require('./node_modules/API/Animes2.js')
  apiwaifu = waifu[Math.floor(Math.random() * waifu.length)]
  wew = await getBuffer(`${apiwaifu}`)
  mag = 'Waifu'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'yotsuba': {
  const {yotsuba} = require('./node_modules/API/Animes2.js')
  apiyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)]
  wew = await getBuffer(`${apiyotsuba}`)
  mag = 'Yotsuba'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'yumeko': {
  const {yumeko} = require('./node_modules/API/Animes2.js')
  apiyumeko = yumeko[Math.floor(Math.random() * yumeko.length)]
  wew = await getBuffer(`${apiyumeko}`)
  mag = 'Yumeko Jabami'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

///////////////////FiM//////////////////


////////////////ACESSO/////////////////

case 'aesthetic': {
  const {aesthetic} = require('./node_modules/API/acesso.js')
  apiaesthetic = aesthetic[Math.floor(Math.random() * aesthetic.length)]
  wew = await getBuffer(`${apiaesthetic}`)
  mag = '☕☕🫖'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'cosplay': {
  const {cosplay} = require('./node_modules/API/acesso.js')
  apicosplay = cosplay[Math.floor(Math.random() * cosplay.length)]
  wew = await getBuffer(`${apicosplay}`)
  mag = 'Cosplay'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'cosplayloli': {
  const {cosplayloli} = require('./node_modules/API/acesso.js')
  apicosplayloli = cosplayloli[Math.floor(Math.random() * cosplayloli.length)]
  wew = await getBuffer(`${apicosplayloli}`)
  mag = 'Cosplay Loli'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'cosplaysagiri': {
  const {cosplaysagiri} = require('./node_modules/API/acesso.js')
  apicosplaysagiri = cosplaysagiri[Math.floor(Math.random() * cosplaysagiri.length)]
  wew = await getBuffer(`${apicosplaysagiri}`)
  mag = 'Cosplay Sagiri'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'gamewallp': {
  const {gamewallp} = require('./node_modules/API/acesso.js')
  apigamewallp = gamewallp[Math.floor(Math.random() * gamewallp.length)]
  wew = await getBuffer(`${apigamewallp}`)
  mag = 'Wallpaper Game'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'gato': {
  const {gato} = require('./node_modules/API/acesso.js')
  apigato = gato[Math.floor(Math.random() * gato.length)]
  wew = await getBuffer(`${apigato}`)
  mag = 'Gato'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'wallpaper2': {
  const {wallpaper2} = require('./node_modules/API/acesso.js')
  apiwallpaper2 = wallpaper2[Math.floor(Math.random() * wallpaper2.length)]
  wew = await getBuffer(`${apiwallpaper2}`)
  mag = 'Wallpaper'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

///////////////fim////////////////

///////////////hentai///////////

case 'loli': {
 if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`) 
  const {loli} = require('./node_modules/API/hentai.js')
  apiloli = loli[Math.floor(Math.random() * loli.length)]
  wew = await getBuffer(`${apiloli}`)
  mag = 'Loli? cuidado meu companheiro 🕵️'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'trap':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {trap} = require('./node_modules/API/hentai.js')
  apitrap = trap[Math.floor(Math.random() * trap.length)]
  wew = await getBuffer(`${apitrap}`)
  mag = '😨😨'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'hentai':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {hentai} = require('./node_modules/API/hentai.js')
  apihentai = hentai[Math.floor(Math.random() * hentai.length)]
  wew = await getBuffer(`${apihentai}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'nekos':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {neko} = require('./node_modules/API/hentai.js')
  apineko = neko[Math.floor(Math.random() * neko.length)]
  wew = await getBuffer(`${apineko}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'ahegao':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {ahegao} = require('./node_modules/API/hentai.js')
  apiahegao = ahegao[Math.floor(Math.random() * ahegao.length)]
  wew = await getBuffer(`${apiahegao}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'ass':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {ass} = require('./node_modules/API/hentai.js')
  apiass = ass[Math.floor(Math.random() * ass.length)]
  wew = await getBuffer(`${apiass}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'bdsm':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {bdsm} = require('./node_modules/API/hentai.js')
  apibdsm = bdsm[Math.floor(Math.random() * bdsm.length)]
  wew = await getBuffer(`${apibdsm}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'blowjob':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {blowjob} = require('./node_modules/API/hentai.js')
  apiblowjob = blowjob[Math.floor(Math.random() * blowjob.length)]
  wew = await getBuffer(`${apiblowjob}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break

case 'cum':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {cum} = require('./node_modules/API/hentai.js')
  apicum = cum[Math.floor(Math.random() * cum.length)]
  wew = await getBuffer(`${apicum}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break



case 'ero':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {ero} = require('./node_modules/API/hentai.js')
  apiero = ero[Math.floor(Math.random() * ero.length)]
  wew = await getBuffer(`${apiero}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'femdom':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {femdom} = require('./node_modules/API/hentai.js')
  apifemdom = femdom[Math.floor(Math.random() * femdom.length)]
  wew = await getBuffer(`${apifemdom}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'ganbganb':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {ganbganb} = require('./node_modules/API/hentai.js')
  apiganbganb = ganbganb[Math.floor(Math.random() * ganbganb.length)]
  wew = await getBuffer(`${apiganbganb}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'glasses':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {glasses} = require('./node_modules/API/hentai.js')
  apiglasses = glasses[Math.floor(Math.random() * glasses.length)]
  wew = await getBuffer(`${apiglasses}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'hentai2':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {hentai2} = require('./node_modules/API/hentai.js')
  apihentai2 = hentai2[Math.floor(Math.random() * hentai2.length)]
  wew = await getBuffer(`${apihentai2}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'kasedaiki':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {kasedaiki} = require('./node_modules/API/hentai.js')
  apikasedaiki = Kaori[Math.floor(Math.random() * kasedaiki.length)]
  wew = await getBuffer(`${apikasedaiki}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'masturbation':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {masturbarion} = require('./node_modules/API/hentai.js')
  apimasturbation = masturbation[Math.floor(Math.random() * masturbation.length)]
  wew = await getBuffer(`${apimasturbation}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'neko2':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {neko2} = require('./node_modules/API/hentai.js')
  apineko2 = neko2[Math.floor(Math.random() * neko2.length)]
  wew = await getBuffer(`${apineko2}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'panties':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {panties} = require('./node_modules/API/hentai.js')
  apipanties = panties[Math.floor(Math.random() * panties.length)]
  wew = await getBuffer(`${apipanties}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'yuri':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {yuri} = require('./node_modules/API/hentai.js')
  apiyuri = yuri[Math.floor(Math.random() * yuri.length)]
  wew = await getBuffer(`${apiyuri}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break


case 'zettai':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  const {zettai} = require('./node_modules/API/hentai.js')
  apizettai = zettai[Math.floor(Math.random() * zettai.length)]
  wew = await getBuffer(`${apizettai}`)
  mag = '🔞🔞Sexy'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:selo})
}
break
 //////// FiM DOS ANIME E HENTAI/////////
 
 ///////////MIDIA////////////////
 
 case 'aline':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 65) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFaria/%20${numb}.jpg`}
    mag = '🔞AlineFaria🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'alifox':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 59) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFox/%20${numb}.jpg`}
   mag = '🔞AlineFox🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'alycai':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 28) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlyciaRibeiro/%20${numb}.jpg`}
   mag = '🔞AlyciaRibeiro🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'amichan':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 29) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Amiichan/%20${numb}.jpg`}
   mag = '🔞Amiichan🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'aninha':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AninhaLopes/%20${numb}.jpg`}
   mag = '🔞AninhaLopes🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'baby':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 36) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BabyMatoso/%20${numb}.jpg`}
   mag = '🔞BabyMatoso🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'belle':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 31) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BelleDelphine/%20${numb}.jpg`}
   mag = '🔞BelleDelphine🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'brenda':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 25) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BrendaTrindade/%20${numb}.jpg`}
   mag = '🔞BrendaTrindade🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'cami':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/CamiBrito/%20${numb}.jpg`}
   mag = '🔞CamiBrito🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'clowniac':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 29) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Cclowniac/%20${numb}.jpg`}
   mag = '🔞Cclowniac🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'galvao':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 32) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/FehGalvao/%20${numb}.jpg`}
   mag = '🔞FehGalvao🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'giovanna':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 34) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/GiovannaCampomar/%20${numb}.jpg`}
   mag = '🔞GiovannaCampomar🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'isadora':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/ISADORA%20MARTINEZ/%20${numb}.jpg`}
   mag = '🔞ISADORA MARTINEZ🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'isa':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 21) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/IsaWaifu/%20${numb}.jpg`}
   mag = '🔞IsaWaifu🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'lay':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 25) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LayNuniz/%20${numb}.jpg`}
   mag = '🔞LayNuniz🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'leticia':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 28) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LeticiaShirayuki/%20${numb}.jpeg`}
   mag = '🔞LeticiaShirayuki🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'marina':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 27) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MarinaMui/%20${numb}.jpg`}
   mag = '🔞MarinaMui🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'maru':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 40) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MaruKarv/%20${numb}.jpg`}
   mag = '🔞MaruKarv🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'princesa':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 32) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/McPrincesa/%20${numb}.jpg`}
   mag = '🔞McPrincesa🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'meadinha':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 33) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Me1adinha/%20${numb}.jpg`}
   mag = '🔞Me1adinha🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'nath':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 23) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NathBister%C3%A7o/%20${numb}.jpg`}
   mag = '🔞NathBister🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'nega':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 21) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NegaBarbie/%20${numb}.jpg`}
   mag = '🔞NegaBarbie🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'polonesa':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 28) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PolonesaDoHype/%20${numb}.jpg`}
   mag = '🔞PolonesaDoHype🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'pornofot':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 44) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PornoFoto/%20${numb}.jpg`}
   mag = '🔞PornoFoto🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'rute':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/RuteRocha/%20${numb}.jpg`}
   mag = '🔞RuteRocha🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'vita':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/VitaCelestine/%20${numb}.jpg`}
   mag = '🔞VitaCelestine🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'carnie':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 29) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/carniello/%20${numb}.jpg`}
   mag = '🔞carniello🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'egril':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 36) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/egril/%20${numb}.jpg`}
   mag = '🔞egril🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'neter':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/netersg/%20${numb}.jpg`}
   mag = '🔞netersg🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break
//////////FIm PORNK/////

/////////PORNO VIDEO////////

case 'amador':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 41) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/AmadorVideo/${numb}.mp4`}
   mag = '🔞AmadorVideo🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break


case 'onlyfans':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 47) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/OnlyfansVideo/%20${numb}.mp4`}
   mag = '🔞OnlyfansVideo🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'porno':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 37) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/PornoVideo/${numb}.mp4`}
   mag = '🔞PornoVideo🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break


case 'egrill':{
  if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
   numb = Math.floor(Math.random() * 14) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/EgrilVideo/%20${numb}.mp4`}
   mag = '🔞EgrilVideo🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break
////////FIM PORNO//////////

////////////MIDIA///////////



case 'classica':
 numb = Math.floor(Math.random() * 29) + 1
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Cl%C3%A1ssica/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'editsr':{
   numb = Math.floor(Math.random() * 24) + 1
   wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/EditSr/${numb}.mp4`}
   mag = 'Edit'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'editdc':{
   numb = Math.floor(Math.random() * 31) + 1
   wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Editdanca/${numb}.mp4`}
   mag = 'Edit Dança'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break


case 'lillpe':
 numb = Math.floor(Math.random() * 23) + 1
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Lillpeep/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'lofi':
 numb = Math.floor(Math.random() * 35) + 1
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Lofi/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'musicasad':
 numb = Math.floor(Math.random() * 15)
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Musicsad/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'remixgo':
 numb = Math.floor(Math.random() * 23)
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/RemixGO/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'remixbr':
 numb = Math.floor(Math.random() * 27)
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Remixbr/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'rock':
 numb = Math.floor(Math.random() * 35)
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Rock/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'rock':
 numb = Math.floor(Math.random() * 35)
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Rock/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'samba':
 numb = Math.floor(Math.random() * 21)
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Samba/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'shitpost':{
   numb = Math.floor(Math.random() * 107)
   wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Shitpost/${numb}.mp4`}
   mag = 'Shit de cria🍷'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}\n Podem ser atualizado com frequência.`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'sad':{
   numb = Math.floor(Math.random() * 31)
   wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Status%20sad/${numb}.mp4`}
   mag = 'Status Sad'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'tiktocsxy':{
   numb = Math.floor(Math.random() * 10)
   wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Tiktoksexy/${numb}.mp4`}
   mag = '🔞 Tiktok Sexy🔞'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break

case 'trapbr':
 numb = Math.floor(Math.random() * 27)
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/TrapBR/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'trapgo':
 numb = Math.floor(Math.random() * 27)
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/TrapGO/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'xxtentacion':
 numb = Math.floor(Math.random() * 30)
wew = {url: `https://github.com/Herojoii/Midiaa/raw/main/Xxtentacion/${numb}.mp3`}
destiny.sendMessage(from, {audio: wew, mimetype: 'audio/mp4'})
buttons2 = [
  {buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1}]
buttonMessage2 = {
    text: "pressione botão há baixo para proxima música ",
    footer: `${NomeDoBot}`,
    buttons: buttons2,
    headerType: 1
}
sendMsg = destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break
//////FiM/////////

/////////Edits/////////

case 'akame-edit':{
   numb = Math.floor(Math.random() * 24)
   wew = {url: `https://github.com/Fohof300/edit1/raw/main/Akame%20edit/%20${numb}.mp4`}
   mag = '𝐀𝐤𝐚𝐦𝐞 𝐠𝐚 𝐊𝐢𝐥𝐥'
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙'}, type: 1},]
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
}
await destiny.sendMessage(from,buttonMessage, {quoted:info})
}
break




case 'printsite':
case 'print':
txt = args.join(" ")
if(txt.length < 8) return reply(`Digite qual site você deseja tirar o print, por Exemplo: ${prefix}printsite Google.com`)
reply(enviar.espere)
printp = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ssweb?url=${txt}&apikey=${keyale}`)
printimg = await getBuffer(printp.link)
destiny.sendMessage(from, {image: printimg}, {quoted: info}).catch(e => {
reply('ERROR')
})
break

case 'ytsearch':
try {
psq = args.join(' ')
if(psq.length < 2) return reply(`O que você deseja encontrar?, diga o nome do vídeo ou da música, e irei informar os links que correspondem.`)
blar = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${psq}&apikey=${keyale}`)
pla = '==============\n\n'
for (let x of blar.resultado) {
pla += `Titulo: ${x.title}\n`
pla += `Link: ${x.url}`
pla += '\n\n=============\n\n'
}
reply(pla.trim())
} catch {
reply('Error!!')
}
break

case 'igdl':
case 'instadw': 
try {  
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video/foto do instagram.')
post = await fetchJson(`https://aleatoryapi.herokuapp.com/api/instagram?url=${link}&apikey=${keyale}`)
s_video = await getBuffer(post.resultado[0].downloadUrl)
destiny.sendMessage(from, {video: s_video}, {quoted: info})
} catch {
reply('O vídeo deve ser privado, ou é imagem, só pode video.')
}
break

case 'twitter':
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video do twitter')
reply(enviar.espere)
post = await fetchJson(`https://aleatoryapi.herokuapp.com/api/twitter?link=${link}&apikey=${keyale}`)
descc = post.resultado.desc
video_hd = await getBuffer(post.resultado.HD)
destiny.sendMessage(from, {video: video_hd, caption: descc}, {quoted: info}).catch(e => {
reply('Error!!')
})
break



case 'ytmp4':
qd = args.join(" ")
if(qd.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu video / música de video')
reply(enviar.espere)
res = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${qd}&apikey=${keyale}`)

blaimg = await getBuffer(res.resultado[0].image)

bla = `Titulo: ${res.resultado[0].title}\nVisualizações: ${res.resultado[0].views}\nTempo: ${res.resultado[0].duration.timestamp}\nCanal: ${res.resultado[0].author.name}\n`

destiny.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp4-2?q=${q}&apikey=${keyale}`)
blabla = await getBuffer(bla[0].link)
destiny.sendMessage(from, {video: blabla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR')
})
break

case 'ytmp3':
qd = args.join(" ")
if(qd.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu áudio / música')
reply(enviar.espere)
res = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${qd}&apikey=${keyale}`)

blaimg = await getBuffer(res.resultado[0].image)

bla = `Titulo: ${res.resultado[0].title}\nVisualizações: ${res.resultado[0].views}\nTempo: ${res.resultado[0].duration.timestamp}\nCanal: ${res.resultado[0].author.name}\n`

destiny.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp3-2?q=${q}&apikey=${keyale}`)
audbla = await getBuffer(bla[0].link)
destiny.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
break
case 'testando1':
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/youtubedl?url=https://youtu.be/ffaYsbjmaMs&apikey=key-expr`)
blabla = await getBuffer(bla.medias[0].url) 
destiny.sendMessage(from, {audio: blabla, mimetype: 'audio/mp4'}).catch(e => {
reply('ERROR!!')
})
break

case 'tiktok':
 sections = [
    {
	title: `TIKTOK PLAY`,
	rows: [
  	   {title: "[🔊] AUDIO", rowId: `${prefix}tiktokaudio ${args.join(' ')}`},
	   {title: "[🎥] VIDEO", rowId: `${prefix}tiktokvídeo ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola escolha uma das opções abaixo..',
  footer: 'Selecione um formato abaixo.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'instagram':
 sections = [
    {
	title: `INSTA PLAY`,
	rows: [
  	   {title: "[▶️] AUDIO", rowId: `${prefix}instaaudio ${args.join(' ')}`},
	   {title: "[📁] VIDEO", rowId: `${prefix}instavideo ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola caso queira baixar.',
  footer: 'Selecione um formato abaixo.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'facebook':
 sections = [
    {
	title: `FACE PLAY`,
	rows: [
  	   {title: "[🔊] AUDIO", rowId: `${prefix}faceaudio ${args.join(' ')}`},
	   {title: "[🎥] VIDEO", rowId: `${prefix}facevídeo ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola escolha um dos formatos abaixo.',
  footer: 'Selecione de acordo com sua necessidade.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'facevídeo':
case 'instavideo':
case 'tiktokvídeo':
try {
reply(enviar.espere)
var {savefrom} = require('./armor/js/savefrom.js')
wew = await savefrom(q)
jet = {url: wew.url[0].url}
destiny.sendMessage(from, {video: jet, mimetype: "video/mp4"}, {quoted: info})
} catch {
reply('Não foi possível baixar este vídeo 😔')
}
break

case 'faceaudio':
case 'tiktokaudio':
case 'instaudio':
try {
reply('fazendo download do seu comando‼️') 
var {savefrom} = require('./lib/savefrom.js')
wew = await savefrom(q)
jet = {url: wew.url[0].url}
await destiny.sendMessage(from, {audio: jet, mimetype: 'audio/mpeg', contextInfo: {externalAdReply : {title: `${NomeDoBot}`, renderLargerThumbnail:false, showAdAttribution: true, body: "ESPERO QUE GOSTE DO BOT", mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./logos/logo2.jpg') }}}, {quoted: selo})
} catch {
reply('Não foi possível baixar este áudio 😔')
}
break

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await destiny.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
destiny.sendMessage(i, txt, destiny.user.name,  btn)
}
reply(`Enviando com sucesso `)
}
break

case 'playstore':
if(!q) return reply('Digite um nome de um app que deseja pesquisar.')
let play = await hx.playstore(q);
let stor = "❉─────────────────────❉\n"
for (let i of play) {
stor += `\n*「 _PLAY STORE_ 」*\n
- 📄 *Nome* : ${i.name}
- 🌀 *Link* : ${i.link}\n
- 🤵🏻 *desenvolvedor* : ${i.developer}
- 📤 *Desenvolvedor link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(stor)
break

case 'igstalk':
if(args.length < 1) return reply('Cadê o nome?')
usur = args.join(" ")
teste = await fetchJson(`https://pencarikode.xyz/stalk/instagram?username=${usur}&apikey=pais`)
teste = teste.result.user
corno = `Nome : ${teste.username}\n`
corno += `PK : ${teste.pk}\n`
testebf = await getBuffer(`${teste.profile_pic_url}`)
await destiny.sendMessage(from, {image: testebf, caption: `${corno}`}, {quoted:info})
break

case 'celular':
if (!q) return reply(`Qual celular você está procurando?`)
teks = args.join(' ')
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
📝 Titulo: ${anu.judul}
❗Última atualização: ${anu.rilis}
📱 Tamanho do celular: ${anu.ukuran}
⚡ Tipo: ${anu.type}
🗃️ Armazenamento: ${anu.storage}
📴 Tela: ${anu.display}
📳 Polegada: ${anu.inchi}
🔰 Resolução da câmera: ${anu.pixel}
📲 Resolução do video: ${anu.videoPixel}
💭 Ram do celular: ${anu.ram}
👤 Hardware do celular: ${anu.chipset}
⚠️ Bateria: ${anu.batrai}
🔋 Tipo da bateria: ${anu.merek_batre}`
 wew = fs.readFileSync('./logos/logo2.jpg')
await destiny.sendMessage(from, {image: wew, thumbnail:null, caption: `${busca_celular}`}, {quoted: info})
break

case 'gimage':
blar = Math.floor(Math.random() * 5)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/gimage?txt=${q}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.result[`${blar}`].url) 
destiny.sendMessage(from, {image: blabla}).catch(e => {
reply("ERROR, não foi encontrado, tente novamente...")
})
break

case 'xvideo':
  if (!q) return reply('Deseja pesquisa qual tipo de sexo?')
var { data } = await axios("https://www.xvideos.com/?k=" + args.join(" ").replace(/ /g, "+") + "&sort=random", { method: "get", headers: { "user-agent":  'Googlebot' } });
var $ = cheerio.load(data);
var g = $('p.title').length;
var n = g > 0 ? g : reply('erro');
var sections = [{ title: "cu", rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('p.title').eq(i).find('a').attr('title'),
rowId: prefix + "xvdl " + "https://www.xvideos.com" + $('p.title').eq(i).find('a').attr('href')
})
};
await destiny.sendMessage(from, { text: n + (n >= 2 ? " videos" : " video"), title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections });
break

case 'xvdl': {(async () => {
if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
if(!args.join(" ").includes('xvideos')) return reply("CADÊ O LINK?")
  reply(enviar.espere)
var {data} = await axios(args.join(" "), {
method: "get", headers: {
"user-agent": 'Googlebot'
}})
var $ = cheerio.load(data)
var a = $('title').text().replace(" - XVIDEOS.COM", "")
var imguff = $('html').html().split("html5player.setThumbUrl('")[1].split("');")[0]
var low = $('html').html().split("html5player.setVideoUrlLow('")[1].split("');")[0]
var high = $('html').html().split("html5player.setVideoUrlHigh('")[1].split("');")[0]
var u = a.slice(0, 50) + '...\n' + $('div.video-metadata').find('ul').find('li').find('a').find('span.name').eq(0).text() + '\n' + $('h2.page-title').find('span.duration').text() + '\n' + $('div#v-views').find('strong').eq(0).text() + ' Views : ' + $('div.good').find('span').text() + ' 👍'
sendBimg(from, `${imguff}`, `${u}`, `${NomeDoBot}`, [
{buttonId: `${prefix}xvdllow ${low}`, buttonText: {displayText: `🔥 𝐁𝐀𝐈𝐗𝐀 𝐐𝐔𝐀𝐋𝐈𝐃𝐀𝐃𝐄 🔥`}, type: 1}, {buttonId: `${prefix}xvdllow ${high}`, buttonText: {displayText: `🔥 𝐌𝐄́𝐃𝐈𝐀 𝐐𝐔𝐀𝐋𝐈𝐃𝐀𝐃𝐄 🔥`}, type: 1}], info)
})().catch((err) => reply(String("teste" ? err: "erro")))
}
break

case 'xvdllow':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
reply('irei enviar no seu privado...')
anu = await getBuffer(`${q}`)
destiny.sendMessage(sender, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break




//================Play do YouTube 

case 'play':
try {
var aramas = await yts(args.join(' '))
} catch {
reply('Erro, pesquisa não encontrada')
}
var objs = []
for (let x of aramas.all) {
let data = {
rowId: `${prefix}song `+ x.title,
title: x.title,
description: `Duração: ${x.timestamp}`
}
objs.push(data)
}
var sections = [
{
title: " ",
rows: objs
}
]
var msc = {
text: `🔎 *Pesquisa:* ${q}`,
footer: '_lista completa de coisas relacionadas a sua pesquisa, escolha uma das opcoes abaixo pra mim termina de executar o download.',
title: "pesquisa concluida",
buttonText: "CLIQUE",
sections
}
destiny.sendMessage(from, msc, {quoted: selo})
break

case 'videolist':
 sections = [
    {
	title: `VIDEO PLAY`,
	rows: [
  	   {title: "[🎬] 360p", rowId: `${prefix}360p ${args.join(' ')}`},
	   {title: "[🎬] 480p", rowId: `${prefix}480p ${args.join(' ')}`},
	   {title: "[🎬] 720p", rowId: `${prefix}720p ${args.join(' ')}`},
	   {title: "[🎬] 1080p", rowId: `${prefix}1080p ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola escolha a qualidade do vídeos.',
  footer: 'Selecione uma das qualidades.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'audiolist':
 sections = [
    {
	title: `AUDIO PLAY`,
	rows: [
  	   {title: "[🔊] MP3", rowId: `${prefix}audioplay ${args.join(' ')}`},
	   {title: "[🔊] audio", rowId: `${prefix}audioplay2 ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola escolha um dos plays abaixo..',
  footer: 'Selecione um dos plays abaixo..',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'song': {
if(!q) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo ou documentário, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
reply(enviar.espere)
bla = `
『 @${NomeDoBot} 』
┏━─────❮𖣘❯─────━┓
│⬡ 
│⬡ Titulo: ${res.all[0].title}
│⬡ Duração: ${res.all[0].timestamp}
│⬡ visualização: ${res.all[0].views}
│⬡ canal: ${res.all[0].author.name}
│⬡ Link: 
│⬡ ${res.all[0].url}
│⬡ 
┗━─────❮𖣘❯─────━┛`
let buttons = [
{buttonId: `${prefix}audiolist ${res.all[0].url}`, buttonText: {displayText: '[ 🔊 ] Audio'}, type: 1},
{buttonId: `${prefix}videolist ${res.all[0].url}`, buttonText: {displayText: '[ 🎞️ ] Video'}, type: 1},
{buttonId: `${prefix}playauxi ${res.all[0].url}`, buttonText: {displayText: '[ 📂 ] Doc'}, type: 1}
]
let buttonMessage = {
image: { url: res.all[0].image },
caption: bla,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/audio.jpg"),
mediaType:2,
mediaUrl: ``,
sourceUrl: res.all[0].url
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'playauxi':
res = await yts(q)
bla = `╭╼╾╼╾『 ℙ𝕝𝕒𝕪 𝕐𝕠𝕦𝕥𝕦𝕓𝕖 』╼╾╼╾╮
│
┃⚠️ Titulo : ${res.all[0].title}
│⏰ Duração :  ${res.all[0].timestamp}
┃👥 visu : ${res.all[0].views}
┃👤 canal :${res.all[0].author.name}
╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾★᭄ꦿ᭄ꦿ`
sendBimgT(from, `${res.all[0].image}`, bla, `${NomeDoBot}`, [{index: 1, urlButton: {displayText: 'suporte 『👤』', url: `https://wa.me/${setting.numerodono}`}}, {index: 2, urlButton: {displayText: 'Download『🔗』', url: `http://deturl.com/${res.all[0].url}`}}, {index: 2, quickReplyButton: {displayText: 'Doc Video 『🎬』', id: `${prefix}videoplaydoc ${q}`}},
{index: 3, quickReplyButton: {displayText: 'Doc Audio『🎵』', id: `${prefix}audioplaydoc ${q}`}}], selo)
break 

case 'audioplay':
try {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await yts(q)
ytdl = require('ytdl-core')
wew = getRandom('.mp3')
bx = await ytdl(res.all[0].url, { quality: '249' }).pipe(fs.createWriteStream(wew))
bx.on("finish", function () {
destiny.sendMessage(from, { audio: fs.readFileSync(wew), mimetype:"audio/mp4", caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body: `${NomeDoBot}`,
renderLargerThumbnail: true,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
sourceUrl: ``,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted: info}).then(() => fs.unlinkSync(wew) )
})
} catch {
reply('Não foi possível baixar este áudio 😔')
}
break

case 'audioplay2':
try {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await yts(q)
ytdl = require('ytdl-core')
wew = getRandom('.mp3')
bx = await ytdl(res.all[0].url, { quality: '249' }).pipe(fs.createWriteStream(wew))
bx.on("finish", function () {
destiny.sendMessage(from, { audio: fs.readFileSync(wew), mimetype: "audio/mp4", ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
image: `${res.all[0].image}`,
title:``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync("./logos/audio.jpg"),
sourceUrl: `${res.all[0].url}`,
mediaUrl: `${res.all[0].image}`,
}}}, {quoted: info}).then(() => fs.unlinkSync(wew) )
})
} catch {
reply('Não foi possível baixar este áudio 😔')
}
break

case '360p':
case '480p':
case '720p':
case '1080p':
ytdl = require('ytdl-core')
if (command === '360p'){
rafa = getRandom('.mp4')
bx = await ytdl(args.join(' '), { quality: '18' }).pipe(fs.createWriteStream(rafa))
bx.on("finish", function () {
destiny.sendMessage(from, {video: fs.readFileSync(rafa)}, {quoted: info}).then(() => fs.unlinkSync(rafa) )
})
return
}
var { formats } = await ytdl.getInfo(args.join(' '))
var a = []
for (let i of formats) {
i.hasVideo ? a.push(i.itag) : ""
}
if (command === '480p'){
var b = a.indexOf(135) >= 0 ? '135' : a.indexOf(244) >= 0 ? '244' : a.indexOf(333) >= 0 ? '333' : a.indexOf(397) >= 0 ? '397' : a.indexOf(697) >= 0 ? '697' : 'undefined'
}
if (command === '720p'){
var b = a.indexOf(136) >= 0 ? '136' : a.indexOf(247) >= 0 ? '247' : a.indexOf(298) >= 0 ? '298' : a.indexOf(302) >= 0 ? '302' : a.indexOf(334) >= 0 ? '334' : a.indexOf(398) >= 0 ? '398' : a.indexOf(698) >= 0 ? '698' : 'undefined'
}
if (command === '1080p'){
var b = a.indexOf(137) >= 0 ? '137' : a.indexOf(248) >= 0 ? '248' : a.indexOf(299) >= 0 ? '299' : a.indexOf(303) >= 0 ? '303' : a.indexOf(335) >= 0 ? '335' : a.indexOf(399) >= 0 ? '399' : a.indexOf(699) >= 0 ? '699' : 'undefined'
}
if (b === 'undefined') return reply(`Vídeo em ${command} não encontrado`)
jet = getRandom('.mp4')
wew = getRandom('.m4a')
bx = await ytdl(args.join(' '), { quality: '140' }).pipe(fs.createWriteStream(wew))
cx = await ytdl(args.join(' '), { quality: b }).pipe(fs.createWriteStream(jet))
bx && cx.on("finish", function () {
rafa = getRandom('.mp4')
exec(`ffmpeg -i ${jet} -i ${wew} -c copy ${rafa}`, (err) => {
fs.unlinkSync(jet)
fs.unlinkSync(wew)
destiny.sendMessage(from, {video: fs.readFileSync(rafa)}, {quoted: info}).then(() => fs.unlinkSync(rafa))
})
})
break

case 'audioplaydoc':
try {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await yts(q)
ytdl = require('ytdl-core')
wew = getRandom('.mp3')
bx = await ytdl(res.all[0].url, { quality: '249' }).pipe(fs.createWriteStream(wew))
bx.on("finish", function () {
destiny.sendMessage(from, { document: fs.readFileSync(wew), mimetype: "audio/mp4", fileName: `${res.all[0].title}` }, {quoted: info}).then(() => fs.unlinkSync(wew) )
})
} catch {
reply('Não foi possível baixar este áudio 😔')
}
break

case 'videoplaydoc':
try {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await yts(q)
ytdl = require('ytdl-core')
rafa = getRandom('.mp4')
bx = await ytdl(res.all[0].url, { quality: '18' }).pipe(fs.createWriteStream(rafa))
bx.on("finish", function () {
destiny.sendMessage(from, { document: fs.readFileSync(rafa), mimetype: "video/mp4", fileName: `${res.all[0].title}` }, {quoted: info}).then(() => fs.unlinkSync(rafa) )
})
} catch {
reply('Não foi possível baixar este vídeo 😔')
}
break

case 'letra':
if (args.length < 1) return reply(`e o nome da música? Exemplo: ${prefixobot + command} the perfect girl`)
teks = body.slice(7)
res = await lirikLagu(teks)
reply(`
Nome: ${teks}

Letras: ${res[0].result}
`)
break

//======(CASE-BEM-VINDO/E ETC..)======\\

//======(CASE-BEM-VINDO/E ETC..)======\\

case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

//================================\\



//=============(ANTS)==============\\

case 'antictt':
case 'anticontato':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antiimg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antinotas':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteres':
case 'limiteflood':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar. info.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'resetarttt':
case 'rvttt':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
daily.splice([])
fs.writeFileSync('./datab/usuarios/diario.json', JSON.stringify(daily))
reply('‼️O jogo da velha TTT foi resetado com sucesso..✔️')
reply(`${prefix}reiniciar`)
break

case 'reiniciar':
if(!SoDono) return
rp = (Date.now() / 1000) - info.messageTimestamp
blar = process.uptime()
reply(process.exit())
reply(`Reiniciei em ${String(rp.toFixed(3))}m\n\nTempo Ativo : ${kyun(blar)}`)
break

case 'antipalavrão':
case 'antipalavrao':  
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrao) return reply('*Já esta ativado...*')
palavrao.push(from)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply(`[❗] anti palavrão ativado`)
} else if (Number(args[0]) === 0) {
if (!isPalavrao) return reply('*Já esta Desativado...*')  
palavrao.splice(from, 1)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply(`[❗] anti palavrão desativado...`)
} else {
reply(`[❗] 1 / 0, Exemplo ${prefix + command} 0`)
}
await limitAdd(sender)
break

case 'antilinkhard':
case 'antilink':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autofigu': case 'autosticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('Ja esta ativo')
autofigu.push(from)
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply('Ja esta Desativado')
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkgp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if (Number(args[0]) === 1) {
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)  
if (isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
welkom2.push(from)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(welkom2).forEach((i) => {
if (welkom2[i] === from) {
position = i
}
})
if (position !== false) {
welkom2.splice(position, 1)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

//=====================Dinheiro 💰💰💰

case 'carteira':
if (MoneyId === undefined){
rafa = {id: sender, nome: pushname, dinheiro: 0}
dinheiro.push(rafa)
fs.writeFileSync('./datab/jsons/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
}
userg = getMoney(sender)
blk = await getBuffer('https://telegra.ph/file/8233607db2c482dc14a53.jpg')
wew = `•────•───────•───•
┣❲📂❳ Transferência: Nubank💳
┣❲💰❳ Dinheiro: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲👥❳ Grupo: ${groupName}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {image:blk, caption: wew, footer: " ", templateButtons: [{index: 2, quickReplyButton: {displayText: '🛒Voltar a Loja🛒', id: `${prefix}loja`}},
{index: 2, quickReplyButton: {displayText: '💰Ganhar mais Money💰', id: `${prefix}minerar`}}, 
{index: 3, quickReplyButton: {displayText: '💤Finalizar💤', id: `nada`}}]}, {quoted: info})
break

case 'pix':
texto = args.join(' ')
if (isNaN(texto) || !texto) return reply(`Cade o valor, exemplo: ${prefix + command} 700`)
dinheiro.sort((a, b) => (a.dinheiro < b.dinheiro) ? 1 : -1)
var objs = []
for (let x of dinheiro){
var data = {
rowId: `${prefix}transferir ${x.id}#${texto}`,
title: x.nome,
description: `Saldo: ${x.dinheiro}`
}
objs.push(data)
}
  listMessage2 = {
  text: 'Ola você deseja transferir algum valor pra alguém? escolha pra quem você quer doar essa quantia, caso outra pessoa utilize essa lista, será descontada do valor do indivíduo',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections: [{
	title: `TRANSFERÊNCIA`,
	rows: objs
}]
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'transferir':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
texto = args.join(' ')
texto1 = texto.split("#")[0]
texto2 = parseInt(texto.split("#")[1])
if(!texto.includes("#")) return
if (getMoneyId(texto1) == undefined) return reply('Chave Pix não encontrada')
wew = {url: 'https://telegra.ph/file/ae390c9663c6ac74c4eb3.jpg'}
rafa = `•────•────•───•
          _⚠︎𝙳𝙴𝚂𝚃𝙸𝙽𝙾⚠︎_
•────•────•───•
┣❲ 𝙽𝚘𝚖𝚎: @${texto1.split('@')[0]} ❳
┣❲ I𝚗𝚜𝚝𝚒𝚝𝚞𝚒𝚌̧𝚊̃𝚘: ${NomeDoBot} ❳
┣❲ 𝙰𝚐𝚎̂𝚗𝚌𝚒𝚊: NuBank 🆔 ❳
┣❲ 𝙲𝚘𝚗𝚝𝚊: Particular 🏦 ❳
┣❲ 𝚃𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚎̂𝚗𝚌𝚒𝚊: Pix ❳
•────•───•───•
          _⚠︎𝙾𝚁𝙸𝙶𝙴𝙼⚠︎_
•────•───•───•̃
┣❲ 𝙽𝚘𝚖𝚎: ${pushname} ❳
┣❲ 𝚅𝚊𝚕𝚘𝚛: ${texto2} ❳
┣❲ 𝙽𝚞𝚖𝚎𝚛𝚘: ${sender.split('@')[0]} ❳
•────•───•───•`
if (texto2 <= userId){
money(sender, -texto2)
money(texto1, texto2)
destiny.sendMessage(from, {image:wew, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
} else {
reply('Falha na Transação')
}
break

case 'roubar':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
if(!args.join(' ').includes("@")) return reply(`Use assim exemplo: ${prefix}roubar @nero`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
consu = getMoneyId(teks)
if (consu === undefined) return reply('Usuario não registrado 😔')
if (isRoubar) return reply("Roubo em andamento, aguarde ⏳")
roubar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/roubar.json', JSON.stringify(roubar, null, 2))
wew = await getBuffer('https://telegra.ph/file/0525a56df1a5442b94eef.jpg')
top = await getBuffer('https://telegra.ph/file/43ddb6676fdc09a45e216.jpg')
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
destiny.sendMessage(from, {image:wew, caption: `O ${pushname}, acaba de roubar o @${mentioned[0].split('@')[0]}, o prazo para ele voltar, é de 3 minutos ⏳`, mentions: menc, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(180000)
userg = getMoney(teks)
ncash = Math.floor(Math.random() * userg)
money(teks, -ncash)
money(sender, ncash)
userg = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} terminou o roubo
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {image:top, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
processo = roubar.indexOf(sender)
roubar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/roubar.json',JSON.stringify(roubar, null, 2))
break

case 'minerar':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
sections = [{
title: '🛒',
rows: [
{title: "Picareta de Madeira ⛏️", rowId: `${prefix}pic madeira`, description: "Custo R$ 0,00"},
{title: "Picareta de Pedra ⛏️", rowId: `${prefix}pic pedra`, description: "Custo R$ 1000,00"},
{title: "Picareta de Ouro ⛏️", rowId: `${prefix}pic ouro`, description: "Custo R$ 2000,00"},
{title: "Picareta de Ferro ⛏️", rowId: `${prefix}pic ferro`, description: "Custo R$ 4000,00"},
{title: "Picareta de Diamante ⛏️", rowId: `${prefix}pic diamante`, description: "Custo R$ 8000,00"},
{title: "Picareta de Netherite ⛏️", rowId: `${prefix}pic netherite`, description: "Custo R$ 16000,00"}
]}]
listMessage2 = {
  text: `Agora Você Vai Escolher Uma Picareta Para Poder Minerar`,
  footer: `${NomeDoBot}`,
  title: "⛏️ ESCOLHA SUA PICARETA ⛏️",
  buttonText: `Aperte Aqui`,
  sections}
destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'pic':
if(MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
imgtop = await getBuffer('https://telegra.ph/file/93a03ed7e6f5e58d2b73c.jpg')
audioxp = await getBuffer('https://telegra.ph/file/b6f84e61025e6feb017f5.mp4')
if (q === 'madeira'){
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/18211fadb4b503e7b6a18.jpg')
destiny.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(180000)
destiny.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * 501)
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic madeira`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
}
if (q === 'pedra'){
if (userId === 1000 || userId > 1000){
money(sender, -1000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/5dce1650c1b1ee45eb670.jpg')
destiny.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(150000)
destiny.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic pedra`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
if (q === 'ouro'){
if (userId === 2000 || userId > 2000){
money(sender, -2000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/6381539c440b599722f4d.jpg')
destiny.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(120000)
destiny.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic ouro`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
if (q === 'ferro'){
if (userId === 4000 || userId > 4000){
money(sender, -4000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/c7c476eaadc68c41138f8.jpg')
destiny.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(90000)
destiny.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic ferro`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
if (q === 'diamante'){
if (userId === 8000 || userId > 8000){
money(sender, -8000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/feefd5fc4f401968b4154.jpg')
destiny.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(60000)
destiny.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (16000 - 8000 + 1)) + 8000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic diamante`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
if (q === 'netherite'){
if (userId === 16000 || userId > 16000){
money(sender, -16000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/82a8d8b9f079efb24ba0f.jpg')
destiny.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(2000)
destiny.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (32000 - 16000 + 1)) + 16000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic netherite`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
break

case 'resetgame':
if (isGroupAdmins || SoDono){
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify([ ], null, 2))
fs.writeFileSync('./datab/jsons/dinheiro/roubar.json',JSON.stringify([ ], null, 2))
reply("Os Jogos foram resetados 🎮")
} else {
reply("Somente admin e o dono, podem usar este comando")
}
break


//////////////////////////////

//========(Sticker-Stickers)=========\\

case 'emoji':
case 'semoji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'joypixels'){
idemot = 7
}
else if(jemot == 'openmoji'){
idemot = 8
}
else if(jemot == 'emojidex'){
idemot = 9
}
else if(jemot == 'lg'){
idemot = 10
}
else if(jemot == 'htc'){
idemot = 11
}
else if(!jemot){
idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from, emoji.images[idemot].url, info)
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI..")
})
break

case 'sc':
case 'c':  
case 'csticker':  
case 'cstiker':  
case 'stcirculo':
case 'circlesticker':  
if ((isMedia && info.message.imageMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane
getpunt = getRandom('.png')
inpunt = getRandom('.webp')
exec(`convert ${media} -resize 512x512^ -gravity center -extent 512x512 ${getpunt} && magick ${getpunt} -quality 50 -define webp:lossless=true ${inpunt}`, async (error) => {
fs.unlinkSync(getpunt)
fs.unlinkSync(media)
if (error) return reply("Error!")
await destiny.sendMessage(from, {sticker: fs.readFileSync(inpunt)}, {quoted: info})
fs.unlinkSync(inpunt)
})
} else {
reply("Apenas image!")
}
break

case 'fstiker': 
case 'fsticker':
case 'f':
await limitAdd(sender)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
destiny.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
reply(enviar.espere) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
destiny.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break 

case 'emoji-mix':
case 'emojimix':
try {
textoo = args.join(' ')
textoo1 = textoo.split('+')[0]
textoo2 = textoo.split('+')[1]
bau = require('./armor/funcoes/emoji.js')
sitee = bau.Semoji(textoo1, textoo2)
bala = await getBuffer(sitee)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
bass64 = `data:image/jpeg;base64,${site.toString('base64')}`
mantap = await convertSticker(bass64, `Aleatory - MD`, `Aleatory`)
imageBuffer = new Buffer.from(mantap, 'base64');
destiny.sendMessage(from, {sticker: imageBuffer}, {quoted: info})
fs.unlinkSync('./imagem.webp')
} catch {
try {
textoo = args.join(' ')
textoo1 = textoo.split('+')[0]
textoo2 = textoo.split('+')[1]
bau = require('./armor/funcoes/emoji.js')
sitee = bau.Semoji(textoo1, textoo2)
bala = await getBuffer(sitee)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
bass64 = `data:image/jpeg;base64,${site.toString('base64')}`
mantap = await convertSticker(bass64, `Aleatory - MD`, `Aleatory`)
imageBuffer = new Buffer.from(mantap, 'base64');
destiny.sendMessage(from, {sticker: imageBuffer}, {quoted: info})
fs.unlinkSync('./imagem.webp')  
} catch {
reply('*Ops não foi possivel fazer esse mix de emoji...*')
}
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if(!isQuotedImage) return reply(`Marque uma imagem`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓        ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
destiny.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`So imagem mn -_-`)
}
break


case 'vlink': 
case 'verlink': {
if(!q) return reply("Cade o link da image?")
if(q.includes('.jpg')){
kk = await getBuffer(`${q}`)
let buttonMessage = {
image: kk,
footer: ``,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Ver Image de Link`,
body: `${NomeDoBot} ©`,
showAdAttribution: true,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
sourceUrl: ``,
mediaUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, {quoted:selo})
} else {
kkkk = await getBuffer(`${q}`)
let buttonMessagek = {
video: kkkk,
mimetype: 'video/mp4',
footer: ``,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Ver Vídeo de Link`,
body: `${NomeDoBot} ©`,
showAdAttribution: true,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
sourceUrl: ``,
mediaUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessagek, {quoted:selo})
}
}
break

case 'st':
case 'st':
case 'sticker':
case 's': {
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
tesst = await getBuffer('https://telegra.ph/file/635289dc66a9ccb424735.jpg')
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
fs.unlinkSync(rano)
})
let buttonMessage = {
sticker: buffer,
caption: '',
footer: ``,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: tesst,
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
destiny.sendMessage(from, buttonMessage, {quoted:selo})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
tesst = await getBuffer('https://telegra.ph/file/635289dc66a9ccb424735.jpg')
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
let buttonMessage = {
sticker: buffer,
caption: '',
footer: ``,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: tesst,
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
destiny.sendMessage(from, buttonMessage, {quoted:selo})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
}
break

case 'lojinha':
if (!isGroup) return reply(enviar.msg.grupo)
destiny.sendMessage(from, { product: { productImage: fs.readFileSync('./logos/logo2.jpg'), description: "youth dev's", title: "DESTINY-BOT", productImageCount: 1, productId: "4939046979532720", currencyCode: "USD", priceAmount1000: "100" }, "businessOwnerJid": "559185841876@s.whatsapp.net" });
break

case 'toimg':
if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
destiny.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
reply('ERROR!!')
})
break



case 'metadinha': {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                destiny.sendMessage(from, { image: { url: random.male }, caption: `homem` }, { quoted: selo })
                destiny.sendMessage(from, { image: { url: random.female }, caption: `mulher` }, { quoted: selo })
            }
	    break



//////////AKINATO////////

case 'akinator':
case 'akinato':
if (q === "reset"){
if (isGroupAdmins || SoDono){
jogo.now = true
}
}
let startAki = async () => {
global.aki = new Aki({ region })
await aki.start()
}
if (jogo.now) {
await startAki()
jogo.now = false
jogo.jogador = sender
} else return reply("Alguem está jogando")
sections = [
{
title: " ",
rows: [
{ title: "Sim", rowId: prefix + 'resp 0' },
{ title: "Não", rowId: prefix + 'resp 1' },
{ title: "Não Sei", rowId: prefix + 'resp 2' },
{ title: "Provavelmente Sim", rowId: prefix + 'resp 3' },
{ title: "Provavelmente Não", rowId: prefix + 'resp 4' },
]
}
]
destiny.sendMessage(from, { 
text: aki.question + "\nEscolha uma opção.\nProgresso: " + aki.progress + '%',
title: "Questão",
buttonText: "SELECIONAR",
sections
})
break

case 'resp':
if (jogo.jogador !== sender) return destiny.sendMessage(from, { text: 'Não é você que está jogando.' }, { quoted: info })
await aki.step(args)
if (aki.progress >= 90 || aki.currentStep >= 90) {
await aki.win()
jogo.now = true
let buttons = [{ buttonId: prefix + 'fimaki', buttonText: { displayText: 'SIM' }, type: 1 }, { buttonId: prefix + 'fimaki' + ' nao', buttonText: { displayText: 'NÃO' }, type: 1 }]
destiny.sendMessage(from, { image: { url: aki.answers[0].absolute_picture_path },
caption: aki.answers[0].name + ": " + aki.answers[0].description + '\nPor acaso este é o seu personagem?',
buttons: buttons,
headerType: 4
})
} else {
sections = [
{
title: " ",
rows: [
{ title: "Sim", rowId: prefix + 'resp 0' },
{ title: "Não", rowId: prefix + 'resp 1' },
{ title: "Não Sei", rowId: prefix + 'resp 2' },
{ title: "Provavelmente Sim", rowId: prefix + 'resp 3' },
{ title: "Provavelmente Não", rowId: prefix + 'resp 4' },
]
}
]
destiny.sendMessage(from, { 
text: aki.question + "\nEscolha uma opção.\nProgresso: " + aki.progress.toFixed(0) + '%',
title: "Questão",
buttonText: "SELECIONAR",
sections
})
}
break

case 'fimaki':
if (q === 'nao') return reply('Puxa não foi desta vez 😔') 
reply('SABIA! EU VENCI 🥳')
break

case 'reset':
if (isGroupAdmins || SoDono){
jogo.now = true
reply("Akinator, resetado com sucesso")
} else {
reply("Somente admin e o dono, podem usar este comando")
}
break




//=============(LOGOS)=============\\

case 'carrinhofigu':
sections = [
{title: "informações",
rows: [
{title: "❄️ 𝐀𝐍𝐘𝐀 ❄️", rowId: `${prefix}packfig anya`},
{title: "❄️ 𝐀𝐍𝐈𝐌𝐀𝐃𝐀𝐒𝟏 ❄️", rowId: `${prefix}packfig animadas1`},
{title: "❄️ 𝐀𝐍𝐈𝐌𝐀𝐃𝐀𝐒𝟐 ❄️", rowId: `${prefix}packfig animadas2`},
{title: "❄️ 𝐃𝐎𝐔𝐌𝐀 ❄️", rowId: `${prefix}packfig douma`},
{title: "❄️ 𝐄𝐒𝐃𝐄𝐀𝐓𝐇𝟏 ❄️", rowId: `${prefix}packfig esdeath1`},
{title: "❄️ 𝐄𝐒𝐃𝐄𝐀𝐓𝐇𝟐 ❄️", rowId: `${prefix}packfig esdeath2`}, 
{title: "❄️ 𝐇𝐈𝐍𝐀𝐓𝐀 ❄️", rowId: `${prefix}packfig hinata`},
{title: "❄️ 𝐉𝐀𝐏𝐈𝐍𝐇𝐀𝟏 ❄️", rowId: `${prefix}packfig japinha1`},
{title: "❄️ 𝐉𝐀𝐏𝐈𝐍𝐇𝐀𝟐 ❄️", rowId: `${prefix}packfig japinha2`}, 
{title: "❄️ 𝐉𝐀𝐏𝐈𝐍𝐇𝐀𝟑 ❄️", rowId: `${prefix}packfig japinha3`}, 
{title: "❄️ 𝐉𝐔𝐉𝐔𝐓𝐒𝐔 𝐊𝐀𝐈𝐒𝐄𝐍 ❄️", rowId: `${prefix}packfig jjk`}, 
{title: "❄️ 𝐊𝐈𝐓𝐀𝐆𝐀𝐖𝐀 ❄️", rowId: `${prefix}packfig kitagawa`}, 
{title: "❄️ 𝐋𝐎𝐓𝐔𝐒𝟏 ❄️", rowId: `${prefix}packfig lotus1`}, 
{title: "❄️ 𝐋𝐎𝐓𝐔𝐒𝟐 ❄️", rowId: `${prefix}packfig lotus2`}, 
{title: "❄️ 𝐌𝐀𝐃𝐀𝐑𝐀 ❄️", rowId: `${prefix}packfig madara`}, 
{title: "❄️ 𝐌𝐄𝐋𝐈𝐎𝐃𝐀𝐒 ❄️", rowId: `${prefix}packfig meliodas`}, 
{title: "❄️ 𝐌𝐄𝐌𝐄𝐒𝟏 ❄️", rowId: `${prefix}packfig memes1`}, 
{title: "❄️ 𝐌𝐄𝐌𝐄𝐒𝟐 ❄️", rowId: `${prefix}packfig memes2`}, 
{title: "❄️ 𝐌𝐄𝐌𝐄𝐒𝟑 ❄️", rowId: `${prefix}packfig memes3`}, 
{title: "❄️ 𝐌𝐄𝐌𝐄𝐒𝟒 ❄️", rowId: `${prefix}packfig memes4`}, 
{title: "❄️ 𝐌𝐄𝐌𝐄𝐒𝟓 ❄️", rowId: `${prefix}packfig memes5`}, 
{title: "❄️ 𝐍𝐀𝐍𝐀𝐓𝐒𝐔 𝐍𝐎 𝐓𝐀𝐈𝐙𝐀𝐈𝟏 ❄️", rowId: `${prefix}packfig nanatsu1`}, 
{title: "❄️ 𝐍𝐀𝐍𝐀𝐓𝐒𝐔 𝐍𝐎 𝐓𝐀𝐈𝐙𝐀𝐈𝟐 ❄️", rowId: `${prefix}packfig nanatsu2`}, 
{title: "❄️ 𝐍𝐀𝐑𝐔𝐓𝐎𝟏 ❄️", rowId: `${prefix}packfig naruto`}, 
{title: "❄️ 𝐍𝐀𝐑𝐔𝐓𝐎𝟐 ❄️", rowId: `${prefix}packfig naruto2`}, 
{title: "❄️ 𝐎𝐍𝐄 𝐏𝐈𝐄𝐂𝐄 ❄️", rowId: `${prefix}packfig onepiece`}, 
{title: "❄️ 𝐑𝐎𝐌𝐀𝐍𝐓𝐈𝐂𝐀𝐒𝟏 ❄️", rowId: `${prefix}packfig romanticas1`},
{title: "❄️ 𝐑𝐎𝐌𝐀𝐍𝐓𝐈𝐂𝐀𝐒𝟐 ❄️", rowId: `${prefix}packfig romanticas2`},
{title: "❄️ 𝐑𝐎𝐌𝐀𝐍𝐓𝐈𝐂𝐀𝐒𝟑 ❄️", rowId: `${prefix}packfig romanticas3`},
{title: "❄️ 𝐒𝐀𝐈𝐓𝐀𝐌𝐀 ❄️", rowId: `${prefix}packfig saitama`}, 
{title: "❄️ 𝐒𝐇𝐈𝐍𝐎𝐁𝐔 ❄️", rowId: `${prefix}packfig shinobu`}, 
{title: "❄️ 𝐓𝐎𝐌𝐈𝐎𝐊𝐀 ❄️", rowId: `${prefix}packfig tomioka`}, 
{title: "❄️ 𝐓𝐑𝐈𝐒𝐓𝐄𝟏 ❄️", rowId: `${prefix}packfig triste1`}, 
{title: "❄️ 𝐓𝐑𝐈𝐒𝐓𝐄𝟐 ❄️", rowId: `${prefix}packfig triste2`}, 
{title: "❄️ 𝐙𝐄𝐍𝐈𝐓𝐒𝐔 ❄️", rowId: `${prefix}packfig zenitsu`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟏 🔞", rowId: `${prefix}packfig18 0`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟐 🔞", rowId: `${prefix}packfig18 1`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟑 🔞", rowId: `${prefix}packfig18 2`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟒 🔞", rowId: `${prefix}packfig18 3`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟓 🔞", rowId: `${prefix}packfig18 4`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟔 🔞", rowId: `${prefix}packfig18 5`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟕 🔞", rowId: `${prefix}packfig18 6`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟖 🔞", rowId: `${prefix}packfig18 7`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟗 🔞", rowId: `${prefix}packfig18 8`}, 
{title: "🔞 𝐏𝐀𝐂𝐊+𝟏𝟖 𝟏𝟎 🔞", rowId: `${prefix}packfig18 9`}]
}]
listMessage2 = {
text: `𝐎𝐋𝐀 𝐌𝐈𝐍𝐇𝐀 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐏𝐀𝐂𝐊𝐒 𝐃𝐄 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐏𝐀𝐂𝐊𝐒 `,
  footer: ` `,
  title: " ",
  buttonText: "𝗘𝗫𝗜𝗕𝗜𝗥 || 𝗟𝗜𝗦𝗧𝗔",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2)
break

case 'packfig':
if(!q) return reply("falta o nome do pack")
try {
lotus = await fetchJson(`https://raw.githubusercontent.com/Salientekill/figurinhas/main/jsons/${q}.json`)
reply("Enviando O Pack No Seu Privado")
for(let a of lotus[0].link) {
await delay(1000)
sendStickerFromUrl(sender, a, enviar.success)
}
} catch {
  reply("ERRO")
}
break

case 'packfig18':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18 1`)
if(!q) return reply("falta o nome do pack")
try {
lotus = await fetchJson(`https://raw.githubusercontent.com/Salientekill/figurinhas/main/jsons/%2B18/${q}.json`)
reply("Enviando O Pack No Seu Privado")
for(let a of lotus[0].link) {
await delay(1000)
sendStickerFromUrl(sender, a, enviar.success)
}
} catch {
  reply("ERRO")
}
break

//=======(PLAQUINHAS-LOGOS)========\\

case 'plaq': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
destiny.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq2': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
destiny.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq3': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
destiny.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq4':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`) 
if (args.length < 1) return reply(`${prefix}plaq7 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
destiny.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq5':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq10 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
destiny.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break
case 'plaq4off': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=${teks}`)
destiny.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'placaloli':
if (!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
await limitAdd(sender)
break 

//=================================\\

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'narutologo':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
textin = args.join(" ")
if(!textin) return reply("Cade o texto?")
reply(enviar.espere)
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/${command}?texto=${textin}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.imageUrl)
destiny.sendMessage(from, {image: blabla}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
break  

case 'gameplay':
case 'ffbanner':
case 'mascoteavatar':  
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.imageUrl)
destiny.sendMessage(from, {image: blabla}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
break

case 'googlesg':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(enviar.espere)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.imageUrl)
destiny.sendMessage(from, {image: blabla}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
break  

case 'marvel': 
case 'glitch':   
case 'stone':   
case 'space':
case 'pornhub':
case 'america':   
case 'steel':  
case 'grafity':  
case 'glitch3':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/${command}?texto=${texto1}&texto2=${texto2}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado)
destiny.sendMessage(from, {image: blabla}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'lava':
case 'toxic':  
case 'thunder': 
case 'thunderv2':  
case 'neongreen':	
case 'neon':  
case 'neon1':  
case 'neon3d':  
case 'demongreen':   
case 'metalfire':  
case 'rainbow':	  
case 'gelo':
case 'halloween':  
case 'lapis':  
case 'glitch':  
case 'glitch2':   
case '3dgold': 
case 'neon3d':   
case 'transformer':  
case '3dstone':
case 'fiction':
case 'cattxt':
case 'neondevil':
case 'demonfire':
case 'colaq':
case 'luxury':
case 'berry':
case 'matrix':
case 'horror':
case 'nuvem':
case 'neon3':
case 'neve':
case 'areia':
case 'vidro':
case 'style':
case 'blood':
case 'pink':
case 'carbon':
case 'metalblue': 
case 'jeans':  
case 'jokerlogo':   
case 'natal': 
case 'ossos':  
case 'asfalto':	
case 'break':  
try {
reply(enviar.espere)
texto = args.join(" ") || 'Indefinido'
if(!texto) return reply('Cade o texto?')
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/${command}?texto=${texto}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado)
destiny.sendMessage(from, {image: blabla}, {quoted: info})
} catch {
reply('ERROR')
}
break

//======(SORTEIO-VOTAR-CASES)=======\\

case 'delvote':
case 'delvoto':  
if(!info.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break

case 'votar':
case 'votacao': 
case 'votação': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!budy.includes("/")) return reply(`Cade a /, exemplo ${prefix}votação @marca/Ele é total gay/ 1`)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar / pergunta  / 1 (1 = 1 Minuto)')
if (info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || info.message.extendedTextMessage.contextInfo == null) {
let id = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
srtimgk = await getBuffer(`https://telegra.ph/file/d68bb6a23eeb1c99c9d2e.jpg`)
d = []
teks = `Parabéns humano, você ganhou foi sorteado: ${q}\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
destiny.sendMessage(from, {image: srtimgk, caption: teks, mentions: d}, {quoted: info})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionmr':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de +55`)
srtimgk = await getBuffer(`https://telegra.ph/file/d68bb6a23eeb1c99c9d2e.jpg`)
d = []
teks = `Parabéns humano, você ganhou foi sorteado: ${q}\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
destiny.sendMessage(from, {image: srtimgk, caption: teks, mentions: d}, {quoted: info})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'enquete':
var texto = args.join(' ')
if(!isBotGroupAdmins) return reply("Bot precisa ser um ADM do grupo 😔")
if (!isGroup) return reply(enviar.msg.grupo)
if (!texto || !texto.split('/')[1]) return reply(`Use assim: ${prefix + command} Nero é gay?/Sim/Não/Talvez`)
if (texto.split('/').length > 13) return reply('Use no máximo 12 opções')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
var opções = []
for (var i = 1; i < texto.split('/').length; i++){
opções.push({optionName: texto.split('/')[i]})
}
destiny.sendMessage(from, {text:'Fiquem Atentos Para a Enquete !\n [❗] Aguarde 5 Segundos...', mentions: yd}, {quoted:info}).then(() => {
destiny.relayMessage(from, {pollCreationMessage: {name: texto.split('/')[0], options: opções,  selectableOptionsCount: 0}}, {quoted: selo})
});
break

case 'enquete2':
if (!isGroup) return reply(enviar.msg.grupo)
var texto = args.join(' ')
if (!texto || !texto.split('/')[1]) return reply(`Use assim: ${prefix + command} Nero é gay?/Sim/Não/Talvez`)
if (texto.split('/').length > 13) return reply('Use no máximo 12 opções')
var opções = []
for (var i = 1; i < texto.split('/').length; i++){
opções.push({optionName: texto.split('/')[i]})
}
destiny.relayMessage(from, {pollCreationMessage: {name: texto.split('/')[0], options: opções,  selectableOptionsCount: 0}}, {quoted: info})
break








case 'infosorteio':
case 'helpsorteio':  
await destiny.sendMessage(from, {text:  infosorteio(prefix, pushname)}, {quoted: selo})
break

case 'promover': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
teks = body.slice(11)
if(teks.length > 15) return reply('Só pode promover uma pessoa por vez..')
await sleep(2000)
reply(`@${teks} Foi promovido(a) para adm com sucesso.`)
destiny.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "promote")
break

case 'rebaixar': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
teks = body.slice(11)
if(teks.length > 15) return reply('Só pode rebaixar uma pessoa por vez..')
await sleep(2000)
reply(`@${teks} Foi Rebaixado(a) para membro comum com sucesso...`)
destiny.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "demote")
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

//================================\\


//========(TTPS/ATTP/TTM)=========\\

case 'attp':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
reply(enviar.espere)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await destiny.sendMessage(from, {sticker: buffer}, {quoted: info}).catch(e => {
reply('ERROR, ALGUM PROBLEMA NA API, EU ACHO.. ')  
})
break

case 'ttp':
try {
reply(enviar.espere)
string = args.join(' ') || 'Texto indefinido'
post = `http://aleatoryapi.herokuapp.com/api/ttp?texto=${string}&apikey=${keyale}`
sendStickerFromUrl(from, post, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
reply(enviar.espere)
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`)
await destiny.sendMessage(from, {sticker: url}, {quoted: info})
} catch {
reply('ERROR')
}
break	

//==================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'modonsfw':
case 'nsfw':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'modobrincadeira':
case 'modobrincadeiras':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isModobn) return reply('o modobrincadeira já está ativo')
modobn.push(from)
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Ativado com sucesso o modobrincadeiras no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isModobn) return reply('o modobrincadeira já está Desativado')  
modobn.splice(from, 1)
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Modo brincadeiras desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'pl':
anu = await getBuffer('https://telegra.ph/file/0855427ea91c9c74eb290.mp4')
destiny.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

///// LISTA ATIVADORES

case 'autofigu': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar Autofigu ✅", rowId: `${prefix}autosticker 1`},
	    {title: "❌ Desativar Autofigu ❌", rowId: `${prefix}autosticker 0`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar no autofigu',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antilink': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar Antilink✅", rowId: `${prefix}antilin on`},
	    {title: "❌ Desativar Antilink ❌", rowId: `${prefix}antilin off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antilink?',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'welcome': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar bem vindo ✅", rowId: `${prefix}welcom on`},
	    {title: "❌ Desativar bem vindo ❌", rowId: `${prefix}welcom off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o bem vindo?',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antipalavras': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antipalavras ✅", rowId: `${prefix}antipalavra on`},
	    {title: "❌ Desativar antipalavras ❌", rowId: `${prefix}antipalavra off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antipalavras',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antipv': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antipv ✅", rowId: `${prefix}antip on`},
	    {title: "❌ Desativar antipv ❌", rowId: `${prefix}antip off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antipv?',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antictt': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antictt ✅", rowId: `${prefix}antic on`},
	    {title: "❌ Desativar antictt ❌", rowId: `${prefix}antic off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antictt',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'anticatalogo': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar anticatalogo ✅", rowId: `${prefix}anticatalog on`},
	    {title: "❌ Desativar anticatalogo ❌", rowId: `${prefix}anticatalog off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o anticatalogo',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antifake': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antifake ✅", rowId: `${prefix}antifak on`},
	    {title: "❌ Desativar antifake ❌", rowId: `${prefix}antifak off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antifake',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antiloc': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antiloc ✅", rowId: `${prefix}antilo on`},
	    {title: "❌ Desativar antiloc ❌", rowId: `${prefix}antilo off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiloc',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antidocumento': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antidocumento ✅", rowId: `${prefix}antidocument on`},
	    {title: "❌ Desativar antidocumento ❌", rowId: `${prefix}antidocument off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antidocumento',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antiimg': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antiimg ✅", rowId: `${prefix}antiim on`},
	    {title: "❌ Desativar antiimg ❌", rowId: `${prefix}antiim off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiimg',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antisticker': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antisticker ✅", rowId: `${prefix}antisticke on`},
	    {title: "❌ Desativar antisticker ❌", rowId: `${prefix}antisticke off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antisticker',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antinota': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antinota ✅", rowId: `${prefix}antinot on`},
	    {title: "❌ Desativar antinota ❌", rowId: `${prefix}antinot off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiimg',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antivídeo': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antivídeo ✅", rowId: `${prefix}antivíde on`},
	    {title: "❌ Desativar antivídeo ❌", rowId: `${prefix}antivíde off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antivídeo',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antimsg': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antimsg ✅", rowId: `${prefix}antims on`},
	    {title: "❌ Desativar antimsg ❌", rowId: `${prefix}antims off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antimsg',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antiaudio': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antiaudio ✅", rowId: `${prefix}antiaudi on`},
	    {title: "❌ Desativar antiaudio ❌", rowId: `${prefix}antiaudi off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiaudio',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antilinkhard': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antilinkhard ✅", rowId: `${prefix}antilinkhar on`},
	    {title: "❌ Desativar antilinkhard ❌", rowId: `${prefix}antilinkhar off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antilinkhard',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antiligação': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antiligação ✅", rowId: `${prefix}antiligaçã on`},
	    {title: "❌ Desativar antiligação ❌", rowId: `${prefix}antiligaçã off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiligação',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antispam': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antispam ✅", rowId: `${prefix}antispa on`},
	    {title: "❌ Desativar antispam ❌", rowId: `${prefix}antispa off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antispam',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'nsfw': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar nsfw ✅", rowId: `${prefix}nsf on`},
	    {title: "❌ Desativar nsfw ❌", rowId: `${prefix}nsf off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o nsfw',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break


//==========JOGOS/COMPLETO==========\\

case 'gay':
wew = Math.floor(Math.random() * 121)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null){
  txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: ${pushname}
╿║ sua porcentagem de gay é:
╿║ 🏳️‍🌈${wew}%🏳️‍🌈
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
} else {
  mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
  txt = ` ╭━━━━⊱•✠•⊰━━━━
╿║🫂: @${mentioned[0].split('@')[0]}
╿║ sua porcentagem de gay é:
╿║ 🏳️‍🌈${wew}%🏳️‍🌈
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
}
ravideo = [
  `https://telegra.ph/file/0be902ff4066419a6319a.mp4`,
  `https://telegra.ph/file/d0aff5622eeee9fb2937c.mp4`,
  `https://telegra.ph/file/c275cc1c5d6e3cf6285f0.mp4`,
  `https://telegra.ph/file/6728fdf0ebabda60004aa.mp4`,
  `https://telegra.ph/file/5e28566a5ec5c8c768290.mp4`,
  `https://telegra.ph/file/654ed89b663f29539252b.mp4`,
  `https://telegra.ph/file/73610a8921f8a880f5e85.mp4`,
  `https://telegra.ph/file/c166578590f3dbd0c1585.mp4`]
  ravideo = ravideo[Math.floor(Math.random() * ravideo.length)]
  sendBvid(from, ravideo, txt, '', [{index: 1, quickReplyButton: {displayText: `OK ${NomeDoBot}`, id: ``}}], selo)
break

case 'shipo': {
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Shipo Vocês Dois*

┌═❪ *Shipada Do ${NomeDoBot}* ❫═┐
│╭♥️➢ ${teks}
│• Com Essa Pessoa
│╰♥️➢ @${teupai111.id.split('@')[0]}
│• Com Uma Porcentagem 
│• De: ${shiptedd} 
└═❪ *Shipada Da ${NomeDoBot}* ❫═┘`
let buttons = [
{buttonId: `nd`, buttonText: {displayText: '⭔ EU SHIPO ⭔'}, type: 1},
{buttonId: `ndnk`, buttonText: {displayText: '⭔ EU NÃO SHIPO ⭔'}, type: 1}
]
let buttonMessage = {
image: { url: `https://telegra.ph/file/0d98ec444105570aca7bd.jpg` },
caption: jet,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: '',
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
wew = `https://telegra.ph/file/75ee530e8eff8c7da337d.jpg`
luffyD = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
jetk = `*Novo Casal Do Grupo*\n
┌───  ❪ *Casal Lindo* ❫  ───┐
│♥️ ▸ @${teupai11.id.split('@')[0]}
│♥️ ▸ @${teupai21.id.split('@')[0]}
│• Com Uma Porcentagem 
│• De: ${shipted}
└───  ❪ *Casal Lindo* ❫  ───┘`
membr.push(teupai11.id)
membr.push(teupai21.id)
let buttons = [
{buttonId: `nd`, buttonText: {displayText: '⭔ EU SHIPO ⭔'}, type: 1},
{buttonId: `ndnk`, buttonText: {displayText: '⭔ EU NÃO SHIPO ⭔'}, type: 1}
]
let buttonMessage = {
image: { url: `https://telegra.ph/file/0d98ec444105570aca7bd.jpg` },
caption: jetk,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: wew,
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
break

case 'feio': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
rate = body.slice(6)
reply(' ❰ Pesquisando a sua ficha de feio : '+rate+', aguarde... ❱')
wew = await getBuffer(`https://telegra.ph/file/320ef6ea91621357aaf9a.jpg`)
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {bo = 'É não é feio'} else if (feio == 21 ) {bo = '+/- feio'} else if (feio == 23 ) {bo = '+/- feio'} else if (feio == 24 ) {bo = '+/- feio'} else if (feio == 25 ) {bo = '+/- feio'} else if (feio == 26 ) {bo = '+/- feio'} else if (feio == 27 ) {bo = '+/- feio'} else if (feio == 2 ) {bo = '+/- feio'} else if (feio == 29 ) {bo = '+/- feio'} else if (feio == 30 ) {bo = '+/- feio'} else if (feio == 31 ) {bo = 'Ainda tá na média'} else if (feio == 32 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {bo = 'tenho '} else if (feio == 39 ) {bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {bo = 'Feiooo'} else if (feio == 50 ) {bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {bo = 'você é Feio demais 🙈'} 
feiotxt = '[🤓] O quanto você é feio? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ feio\n\n '+bo+' '
sleep(4000)
let buttonMessage = {
image: wew,
caption: feiotxt,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Youth Dev's`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, 
{quoted:selo})}
break 

if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
case 'beijo': {
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `[😘] Você deu um beijo gostoso de língua na(o) @${mentioned[0].split('@')[0]} 👉👈❤` 
wew = await getBuffer(`https://telegra.ph/file/b6938d93b461781a69cab.jpg`)
let buttonMessage = {
image: wew,
caption: susp,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Youth Dev's`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, 
{quoted:selo})}
break

case 'chute': case 'chutar': { 
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('[💣] marque o alvo que você quer dá um chute.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
jry = await getBuffer("https://telegra.ph/file/09e1e145bb5be134bdce4.mp4")
pru = `[💢] O ${pushname}, acabou\nDe da um chute no: @${mentioned[0].split('@')[0]}.`
let buttonMessage = {
video: jry,
caption: pru,
footer: `${NomeDoBot}`,
mimetype: 'video/mp4',
headerType: 4,
contextInfo:{externalAdReply:{
title: `Youth Dev's`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl:`https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, 
{quoted:selo})}
break 

case 'dogolpe': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (args.length < 1) return await destiny.sendMessage(from, {text: 'coloca um nome'}, {quoted: info})
pkt = body.slice(9)
wew = await getBuffer("https://telegra.ph/file/69bc44d05f4921a7bac83.jpg")
random = `${Math.floor(Math.random() * 100)}`
jpr = `[👿]ENCONTRADO[👿]*\n\n[💣] *GOLPISTA* : ${args[0]}\n\n[🚼]*PORCENTAGEM DO GOLPE* : ${random}%\n\nEle(a) gosta de ferir sentimentos dos outros 😢`
let buttonMessage = {
image: wew,
caption: jpr,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Youth Dev's`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, 
{quoted:selo})}
break

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('[💣] marque o alvo que você quer matar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `[💣] Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer("https://telegra.ph/file/b63fb9f18e469965f058e.mp4")
await destiny.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp}, {quoted: selo})
break 

case 'chance': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var avb = body.slice(7)
if (args.length < 1) return destiny.sendMessage(from, {text: `[💣] Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Lula ganha um dedo.`}, {quoted: info})
wew = await getBuffer("https://telegra.ph/file/a3f96ddb9ddaf353cad46.jpg")
random = `${Math.floor(Math.random() * 100)}`
hasil = `[💣] A chance ${body.slice(8)}\n\né de...[ ${random}% ]`
let buttonMessage = {
image: wew,
caption: hasil,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Youth Dev's`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, 
{quoted:selo})}
break

case 'suicidio': {
if(info.key.fromMe) return 
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
wew = await getBuffer("https://telegra.ph/file/59009ca812c6b54bf79ff.jpg")
jbl = `*Sinto muito por essa decisão ${pushname}.\n Espero que um dia volte para o grupo!* 😭`
let buttonMessage = {
image: wew,
caption: jbl,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Youth Dev's`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, 
{quoted:selo})}
await sleep(2000)
destiny.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(4000)
reply('maior babaca, realmente achou que eu iria sentir falta, kk')
break

case 'nazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de nazista : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgnazista}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await destiny.sendMessage(from, {image: wew, caption: 'O quanto você é nazista💂‍♂️? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  nazista 卐'}, {quoted: info})
}, 7000)
break 

///////////// RANKS ////////////////

case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n'
let nom = 0
imglevel = await getBuffer('https://telegra.ph/file/bb38c1f1f2c89a0d2538a.jpg')
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🔮 ${setting.NomeDoBot} 🔮✘┓
┃•───•────•───•
┣❲[🆔]  [${nom}] ϟ➠ ${_level[i].id.replace('@s.whatsapp.net', '')}
┣❲[🔢]「Level」 :ϟ➠ ${_level[i].level}
┣❲[🥷]「xp」: ϟ${_level[i].xp}
┗ ────「★」────┚\n`
}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
destiny.sendMessage(from, {image: imglevel, caption: leaderboardlvl, sendEphemeral: true, templateButtons: [{index: 1, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: `kkkk`}}]}, {quoted: selo})
} catch (err) {
console.error(err)
await reply(`[💣] Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break

case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
ativoimg = await getBuffer('https://telegra.ph/file/1e3f2cbeb8c190ed13915.jpg')
boardi = ' [🏆፝⃟]    Ranking dos membros mais ativos do gp:\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`			
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
destiny.sendMessage(from, {image: ativoimg, caption: boardi, mentions: mentioned_jid}, {quoted: selo})
} catch (err) {
			console.log(err)
await destiny.sendMessage(from, {text: `É necessário 5 jogadores para se construir um ranking`}, {quoted: info})
}
break

case 'msgativos':
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
checkimg = await getBuffer('https://telegra.ph/file/0829b09e217f4d24808d8.jpg')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
destiny.sendMessage(from, {image: checkimg, caption: `[𖣘⃟ᗒ] Consulta das atividade de\n[🆔] @${mentioned[0].split('@')[0]} no grupo\n[📪] Mensagens: ${countMessage[ind].numbers[indnum].messages}\n[🧸] comandos usados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentions: mentioned}, {quoted: selo})
}
else {
mentions(`[ ⋆⃟ۣۜ᭪➣ ] Consulta da atividade de [🆔] @${mentioned[0].split('@')[0]} no grupo\n[📪] Mensagens: 0\n[🧸] Comandos dados: 0`, mentioned, true)
}
break

case 'rankgay': 
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
try{
var ddr = []
ret = 'Rank dos que chupa até a bola[🧐]\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `[🏳️‍🌈] @${groupMembers[r].id.split('@')[0]}\n`
ddr.push(groupMembers[r].id)
}
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage6 = {
image: {url: 'https://telegra.ph/file/94c4c2380f86ee42abc83.jpg'},
caption: ret.trim(),
footer: ``,
mentions: ddr,
buttons: buttons,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankmacaco':
if(!isGroup) return reply('Este comandos só pode ser utilizado em grupos')
try{
var ddr = []
ret = '[🐵] Rank dos Macacos(as) do grupo \n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `[🐒] @${groupMembers[r].id.split('@')[0]}\n`
ddr.push(groupMembers[r].id)
}
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage6 = {
image: {url: 'https://telegra.ph/file/6648dda563f8fb0855f1c.jpg'},
caption: ret.trim(),
footer: ``,
mentions: ddr,
buttons: buttons,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcasal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
try{
var ddr = []
ret = '[💝] Rank dos casais do grupo, "shipando o de cima com o debaixo" \n\n'
for(i = 0; i < 6; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `[💏] @${groupMembers[r].id.split('@')[0]}\n`
ddr.push(groupMembers[r].id)
}
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage6 = {
image: {url: 'https://telegra.ph/file/cd5434c34dcbfca83103f.jpg'},
caption: ret.trim(),
footer: ``,
mentions: ddr,
buttons: buttons,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
try{
var ddr = []
ret = '[🐃] Rank dos mais gados do grupo\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `[🦬] @${groupMembers[r].id.split('@')[0]}\n`
ddr.push(groupMembers[r].id)
}
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage6 = {
image: {url: 'https://telegra.ph/file/5df06b148ca267828a9aa.jpg'},
caption: ret.trim(),
footer: ``,
mentions: ddr,
buttons: buttons,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = ` [🐃] Esses são os cornos do grupo ${groupName}\n@${cornos1.id.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.id.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.id.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.id.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.id.split('@')[0]}\nCom uma porcentagem de ${prg}\n`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
buttons2 = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
buttonMessage6 = {
image: {url: 'https://telegra.ph/file/75a5e01cd18363f52f38f.jpg'},
caption: ytb,
footer: ``,
mentions: membr,
buttons: buttons2,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
break

case 'rankgostosos':
case 'rankgostoso': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
[🙈] PARADOS GOSTOSOS [🙈]\n\n1=[🗿] @${o01.id.split('@')[0]}\n2=[😈] @${o02.id.split('@')[0]}\n3=[🥷] @${o03.id.split('@')[0]}\n4=[😏] @${o04.id.split('@')[0]}\n5=[🙈] @${o05.id.split('@')[0]}\n\nMulta por serem gostosos dms😳 paguem a pena trabalhando em nossa agência de mamadores 😊 by: ${NomeDoBot}`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage6 = {
image: {url: 'https://telegra.ph/file/569e5ab1ef60e0580d983.jpg'},
caption: luy,
footer: ``,
mentions: membr,
buttons: buttons,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
}
break

case 'rankgostosas':
case 'rankgostosa': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
[🫣] PARADAS GOSTOSAS [🫣]\n\n1=[😍] @${o1.id.split('@')[0]}\n2=[🫣] @${o2.id.split('@')[0]}\n3=[😚] @${o3.id.split('@')[0]}\n4=[☺] @${o4.id.split('@')[0]}\n5=[🤗] @${o5.id.split('@')[0]}\n\nMulta por serem gostosas dms😳 pague pena enviando nuds no PV do dono do bot😊 by: ${NomeDoBot}`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage6 = {
image: {url: 'https://telegra.ph/file/9c091550ea884892e06e9.jpg'},
caption: luy,
footer: ``,
mentions: membr,
buttons: buttons,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
}
break

case 'ranknazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
try{
var ddr = []
teks = '️[💂‍♂️] Rank dos mais nazistas do gp\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️[💂‍♂️] @${groupMembers[r].id.split('@')[0]}\n`
ddr.push(groupMembers[r].id)
}
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage6 = {
image: {url: 'https://telegra.ph/file/caa97f5666882ef20413a.jpg'},
caption: teks.trim(),
footer: ``,
mentions: ddr,
buttons: buttons,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankotakus': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `[🥸]esses são os otakus fedidos do grupo:\n\n@${otakus1.id.split('@')[0]}\n@${otakus2.id.split('@')[0]}\n@${otakus3.id.split('@')[0]}\n@${otakus4.id.split('@')[0]}\n@${otakus5.id.split('@')[0]}\n@${otakus6.id.split('@')[0]}\n@${otakus7.id.split('@')[0]}\n@${otakus.id.split('@')[0]}\n@${otakus9.id.split('@')[0]}\n@${otakus10.id.split('@')[0]}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(otakus1.id)
membr.push(otakus2.id)
membr.push(otakus3.id)
membr.push(otakus4.id)
membr.push(otakus5.id)
membr.push(otakus6.id)
membr.push(otakus7.id)
membr.push(otakus.id)
membr.push(otakus9.id)
membr.push(otakus10.id)
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage6 = {
image: {url: 'https://telegra.ph/file/3ea831a2731b10cecd5f9.jpg'},
caption: ytb,
footer: ``,
mentions: membr,
buttons: buttons,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
}
break

case 'rankpau': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["[😔]Minuscúlo, bata siririca mesmo novinha.", `[🏳️‍🌈]Pequenino, da a bunda que ganha mais.`, `[🥸]4 cm, 2 indo e 2 voltando.`, `[🤌🏻]Médio, já dá pra usar o dedo na punheta.`, `[🫃🏻]Grandinho, pau de obeso no resumo.`, `[🤡]Grande, o palhaço já mama rindo.`, `[👦🏿]kid bengala com fimose.`, `[🐎]pica de jegue`, `[🐴]pau de tora burra, aguenta tche.`, `[🚼]Enorme, ela vai subir ela vai descer.`, `[🇧🇷BATENDO A XIBATA NA CARA DO LULA.`, `[😭]FURADEIRA ELETRICA, ARRONBO NOSSAS MÃES KKKKKKk`]
var pcpau2 = ["[😔]Minuscúlo, bata siririca mesmo novinha.", `[🏳️‍🌈]Pequenino, da a bunda que ganha mais.`, `[🥸]4 cm, 2 indo e 2 voltando.`, `[🤌🏻]Médio, já dá pra usar o dedo na punheta.`, `[🫃🏻]Grandinho, pau de obeso no resumo.`, `[🤡]Grande, o palhaço já mama rindo.`, `[👦🏿]kid bengala com fimose.`, `[🐎]pica de jegue`, `[🐴]pau de tora burra, aguenta tche.`, `[🚼]Enorme, ela vai subir ela vai descer.`, `[🇧🇷BATENDO A XIBATA NA CARA DO LULA.`, `[😭]FURADEIRA ELETRICA, ARRONBO NOSSAS MÃES KKKKKKk`]
var pcpau3 = ["[😔]Minuscúlo, bata siririca mesmo novinha.", `[🏳️‍🌈]Pequenino, da a bunda que ganha mais.`, `[🥸]4 cm, 2 indo e 2 voltando.`, `[🤌🏻]Médio, já dá pra usar o dedo na punheta.`, `[🫃🏻]Grandinho, pau de obeso no resumo.`, `[🤡]Grande, o palhaço já mama rindo.`, `[👦🏿]kid bengala com fimose.`, `[🐎]pica de jegue`, `[🐴]pau de tora burra, aguenta tche.`, `[🚼]Enorme, ela vai subir ela vai descer.`, `[🇧🇷BATENDO A XIBATA NA CARA DO LULA.`, `[😭]FURADEIRA ELETRICA, ARRONBO NOSSAS MÃES KKKKKKk`]
var pcpau4 = ["[😔]Minuscúlo, bata siririca mesmo novinha.", `[🏳️‍🌈]Pequenino, da a bunda que ganha mais.`, `[🥸]4 cm, 2 indo e 2 voltando.`, `[🤌🏻]Médio, já dá pra usar o dedo na punheta.`, `[🫃🏻]Grandinho, pau de obeso no resumo.`, `[🤡]Grande, o palhaço já mama rindo.`, `[👦🏿]kid bengala com fimose.`, `[🐎]pica de jegue`, `[🐴]pau de tora burra, aguenta tche.`, `[🚼]Enorme, ela vai subir ela vai descer.`, `[🇧🇷BATENDO A XIBATA NA CARA DO LULA.`, `[😭]FURADEIRA ELETRICA, ARRONBO NOSSAS MÃES KKKKKKk`]
var pcpau5 = ["[😔]Minuscúlo, bata siririca mesmo novinha.", `[🏳️‍🌈]Pequenino, da a bunda que ganha mais.`, `[🥸]4 cm, 2 indo e 2 voltando.`, `[🤌🏻]Médio, já dá pra usar o dedo na punheta.`, `[🫃🏻]Grandinho, pau de obeso no resumo.`, `[🤡]Grande, o palhaço já mama rindo.`, `[👦🏿]kid bengala com fimose.`, `[🐎]pica de jegue`, `[🐴]pau de tora burra, aguenta tche.`, `[🚼]Enorme, ela vai subir ela vai descer.`, `[🇧🇷BATENDO A XIBATA NA CARA DO LULA.`, `[😭]FURADEIRA ELETRICA, ARRONBO NOSSAS MÃES KKKKKKk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `[😈] Esses são os cara com um pau tão grande que apanha manga deitado com sua vara.\n\n[🥷]${groupName}[🥷]\n\n@${paus1.id.split('@')[0]}\n${pc1}\n\n@${paus2.id.split('@')[0]}\n${pc2}\n\n@${paus3.id.split('@')[0]}\n${pc3}\n\n@${paus4.id.split('@')[0]}\n${pc4}\n\n@${paus5.id.split('@')[0]}\n${pc5}\n\n ${setting.NomeDoBot}`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage6 = {
image: {url: 'https://telegra.ph/file/b369174971a7ba3414499.jpg'},
caption: pdr,
footer: ``,
mentions: membr,
buttons: buttons,
headerType: 2
}
destiny.sendMessage(from, buttonMessage6, {quoted: info})
}
break

case "copybutton":
var captionnye = q.split('|')[0] || `Textim legal`
var displaynye = q.split('|')[1] || `Copiar`
var copynye = q.split('|')[2] || `nero gostoso`
 menuButa = [
{index: 1, urlButton: {displayText: `${displaynye}`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}},
]
await destiny.sendMessage(from, { text: `${captionnye}`, templateButtons: menuButa, footer: NomeDoBot })
break

////////

case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
joguinhodavelhajs.push(sender)
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
destiny.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
destiny.sendMessage(from, {text: strChat}, {quoted: info,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if (!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
pptimg = await getBuffer('https://telegra.ph/file/985b9432626731eebd175.jpg')
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
destiny.sendMessage(from, {image: pptimg, caption: `[👤]  ${NomeDoBot} jogou: ${pptb}\n[🥷] Vc jogador jogou: ${args}\n\n${tes}`, templateButtons: [{index: 1, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: `kkkk`}}]}, {quoted: selo})
if (tes == "Vitória do jogador") {
}
break

case 'cassino': {
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
addFilter(from)  
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
const cassino = `
┏━───❮◆❯───━
│= | 🎰 𝗖𝗔𝗦𝗦𝗜𝗡𝗢 🎰
│•──•─────•──•
│= |    ${somtoy2}
┗━───❮◆❯───━`
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}cassino`, 
buttonText: {
displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg },
caption: `${cassino}`,
footer: `• Usuario: ${pushname}\n• Status: ${Vitória}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'quizanimais':
if(!isGroup) return reply('Comando apenas para grupos')
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(!isGroupAdmins) return reply('Comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo \npara desativar use quizanimais 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/quizanim-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await destiny.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
} else {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)  
await destiny.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/quizanim-${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./armor/quizanim-${from}.json`)
reply("Desativado com sucesso")
}
await limitAdd(sender)
break

case 'anagrama':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
boa = `╭━〔 JOGO DAS LETRAS 〕━⬣
║ ▢ DESCUBRA A PALAVRA
║ ▢ ANAGRAMA: ${dataAnagrama2.embaralhada}
║ ▢ DICA: ${dataAnagrama2.dica}
╰────────────────`
sendBtext(from, boa, `Nome: ${pushname}\nClique No Botão Abaixo, Para cancelar, Boa Sorte!`, [{buttonId:`${prefix + command} 0`, buttonText: {displayText: '❌𝗖𝗔𝗡𝗖𝗘𝗟𝗔𝗥'}, type: 1}], info)
} else {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
wew = `╭━〔 JOGO DAS LETRAS 〕━⬣
║ ▢ DESCUBRA A PALAVRA
║ ▢ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
║ ▢ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────`
sendBtext(from, wew, `Nome: ${pushname}\nClique No Botão Abaixo, Para cancelar, Boa Sorte!`, [{buttonId:`${prefix + command} 0`, buttonText: {displayText: '❌𝗖𝗔𝗡𝗖𝗘𝗟𝗔𝗥'}, type: 1}], info)
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./armor/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break

case 'revelaranime':
case 'revelaanime':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/quizanime-${from}.json`))
reply (`${dataAnagrama.original}`)
break

case 'revelaranimal':
case 'revelaanimal':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
reply (`${dataAnagramaa.original}`)
break

case 'kidbengala':
blk = await getBuffer('https://telegra.ph/file/b30519fe8e45e1b517eec.jpg')
var round = [ "kid bengala enfiou:\n90cm de rola no seu coll🤩", "kid bengala enfiou:\n30cm no seu coll🥵", "Kid bengala enfiou:\n50cm de rola no seu coll🦍", "kid bengala enfiou:\n20cm no seu rabo😈", "Você tropeçou na rola do kid😞", "kid bengala enfiou:\n80cm no seu coll😔.", "kid bengala tava na seca, seu cu viro um poço😔", "Seu cu só tinha pelo, você foi poupadoKKKKKKKKK", "kid bengala broxo\nVc foi salvo😞" ]
api = round[Math.floor(Math.random() * round.length)]
destiny.sendMessage(from, {image: blk, caption: api, templateButtons: [{index: 2, quickReplyButton: {displayText: '😞', id: `${prefix}nossa`}}]}, {quoted: selo})
break

case 'duelo':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if (!isGroup) return reply('O comando só pode ser usado em Grupos.')
if (args.length === 0) return reply(`Modo de usar...\n\n${prefix}duelo @tag / @tag2 / 1 (1 = 1 Minuto)`)
txt = args.join(' ')
nmr = txt.split('/')[0].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
nmr2 = txt.split('/')[1].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
pergunta = 'Qual dos dois duelou melhor ou deu as melhores respostas?'
tempo = txt.split('/')[2]
if(!Number(tempo)) return reply('Ops, insira os minutos\n\n1 = 1 Minuto')
const mencionar = ( foto, texto, membro, ids ) => {
( ids == null || ids == undefined || ids == false ) ? destiny.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } }) : destiny.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } })
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? destiny.sendMessage(from, {text: teks.trim(), mentions: memberr}) : destiny.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
try {
ppimg = await destiny.profilePictureUrl(`${nmr}@s.whatsapp.net`)
} catch(erro) {
ppimg = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'
}
try {
ppimg2 = await destiny.profilePictureUrl(`${nmr2}@s.whatsapp.net`)
} catch(erro) {
ppimg2 = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg'
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortpc2 = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg2}`)
blup = await getBuffer(`http://api-exteam.herokuapp.com/api/duelo?foto=${shortpc.data}&foto2=${shortpc2.data}`)
await mencionar(blup, `⚔️*Duelo de Stickers*⚔️\n\n@${nmr}  Vs  @${nmr2}\n\nPergunta:  ${pergunta}\n\nDigite:  um = Para votar em:  @${nmr}\nDigite:  dois = Para votar em:  @${nmr2}\n\n⚠️ *Atenção*: só é permitido votar 1 única vez, portanto preste atenção em quem vai votar, pois não é possível alterar o voto.\n\n❗ _Não vote por afinidade, vote pela qualidade das respostas, assim você ajuda a melhorar a qualidade dos duelos..._`, [nmr+'@s.whatsapp.net', nmr2+'@s.whatsapp.net'], true)
addVotoDuelo(from , pergunta , nmr , nmr2 , tempo , reply)
break

////////////

case 'round6':
blk = await getBuffer('https://telegra.ph/file/1c4af3e7854efe1859208.jpg')
destiny.sendMessage(from, {image: blk, caption: "Escolha qual forma você quer jogar🥷🏽", templateButtons: [{index: 2, quickReplyButton: {displayText: '☂️', id: `${prefix}boneca6`}}, {index: 2, quickReplyButton: {displayText: '⭐', id: `${prefix}biscoitomorte`}}, {index: 3, quickReplyButton: {displayText: '🔴', id: `${prefix}pisomorte`}}]}, {quoted: selo})
break

case 'boneca6':
blk = await getBuffer('https://telegra.ph/file/53e12a11f0387a98296d9.jpg')
var round = [ "Você perdeu o desafio pq se morreu.", "Você perdeu pq não finalizou a tempo.", "Você perdeu pq espirro.", "Você perdeu pq queria morre, então foi bônus.", "┌❑\n├❒ 🏆Você concluiu🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝙺𝙸𝙽𝙴-𝙲𝙷𝙰𝙽🔞\n└❒\n\nhttps://drive.google.com/file/d/1AaVQ5W6h6ajgmRPZXJkMKG2a72dCeQLJ/view?usp=drivesdk", "Você morreu pq tropeçou.", "Você morreu pq tropeçou em uma rola.", "vc perdeu pq não completou.", "Você morreu pq não conseguiu completa o desafio a tempo.", "┌❑\n├❒ 🏆Você ganho🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝙺𝙸𝙽𝙴-𝙲𝙷𝙰𝙽🔞\n└❒\n\nhttps://drive.google.com/file/d/1AaVQ5W6h6ajgmRPZXJkMKG2a72dCeQLJ/view?usp=drivesdk" ]
api = round[Math.floor(Math.random() * round.length)]
destiny.sendMessage(from, {image: blk, caption: api, templateButtons: [{index: 2, quickReplyButton: {displayText: 'Jogar Novamente', id: `${prefix}round6`}}]}, {quoted: selo})
break

case 'pisomorte':
blk = await getBuffer('https://telegra.ph/file/9e450388d2ab2334e8e8c.jpg')
var round = [ "Você perdeu o desafio pq não chego no final a tempo.", "Você perdeu pq não finalizou a tempo.", "Você piso no local errado e caiu.", "derrubaram vc no meio do desafio.", "Parabéns vc ganho, finalizou o desafio a tempo.", "Você teve um ataque de pânico e caiu da plataforma.", "Você morreu pq tentou corre do desafio.", "vc perdeu pq não completou.", "Você morreu pq piso no lugar errado seu animal.", "┌❑\n├❒ 🏆Você concluiu🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝚃𝙰𝚃𝙸-𝚉𝙰𝚀𝚄𝙸🔞\n└❒\n\nhttps://drive.google.com/file/d/19yzzCWYGLsUNcF3F2RSwPfmmvyQE3CiO/view?usp=drivesdk" ]
api = round[Math.floor(Math.random() * round.length)]
destiny.sendMessage(from, {image: blk, caption: api, templateButtons: [{index: 2, quickReplyButton: {displayText: 'Jogar Novamente', id: `${prefix}round6`}}]}, {quoted: selo})
break

case 'biscoitomorte':
blk = await getBuffer('https://telegra.ph/file/83746a470baabbe9331da.jpg')
var round = [ "Você perdeu o desafio pq não entrego o biscoito a tempo.", "Você perdeu pq não finalizou a tempo.", "Você derrubo o biscoito e morreu.", "derrubaram vc no meio do desafio.", "┌❑\n├❒ 🏆Você finalizou🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝚅𝙸𝙲𝚃𝙾𝚁𝙸𝙰🔞\n└❒\n\nhttps://drive.google.com/file/d/1AcNukvbu9Yz5EfAomIeK95kqRDTYjP6z/view?usp=drivesdk", "Você teve um ataque de pânico e quebrou o biscoito.", "Você morreu pq queria se mata.", "vc perdeu pq não completou.", "Você morreu pq escorregou e não finalizou a tempo.", "┌❑\n├❒ 🏆Você finalizou🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝚅𝙸𝙲𝚃𝙾𝚁𝙸𝙰🔞\n└❒\n\nhttps://drive.google.com/file/d/1AcNukvbu9Yz5EfAomIeK95kqRDTYjP6z/view?usp=drivesdk" ]
api = round[Math.floor(Math.random() * round.length)]
destiny.sendMessage(from, {image: blk, caption: api, templateButtons: [{index: 2, quickReplyButton: {displayText: 'Jogar Novamente', id: `${prefix}round6`}}]}, {quoted: selo})
break

case 'batalha-z':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
if (!args.join(' ').includes("@")) return reply(`Use assim exemplo: ${prefix}batalha-z @nero`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
consu = getMoneyId(teks)
if (consu === undefined) return reply('Jogador não encontrado')
wew = await getBuffer('https://telegra.ph/file/2dc90bc08895a5a0e967e.mp4')
bla = await getBuffer('https://telegra.ph/file/8deef47ad4cd883407737.mp4')
bat = Math.floor(Math.random() * 100) + 1
boa = `O ${pushname} vai lutar contra o @${mentioned[0].split('@')[0]} 🥷🏽
Sua chance de ganhar é de ${bat}%
Boa sorte 🍀`
destiny.sendMessage(from, {video: wew, caption: boa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info}).then(() =>
reply('*Aguarde 10 segundos, para saber o resultado ⏳*')
)
await sleep(10000)
if (bat > 50){
userg = getMoney(teks)
ncash = Math.floor(Math.random() * userg)
money(teks, -ncash)
money(sender, ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} ativo o estinto superior é ganho o duelo.
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
if (bat < 50 || bat === 50){
userg = getMoney(sender)
ncash = Math.floor(Math.random() * userg)
money(teks, ncash)
money(sender, -ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} terminou o duelo na arena, ele recebeu um ataque crítico e perdeu.
┣❲💰❳ Prejuízo: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
break

case 'batalhapoke':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
if (!args.join(' ').includes("@")) return reply(`Use assim exemplo: ${prefix}batalhapoke @nero`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
consu = getMoneyId(teks)
if (consu === undefined) return reply('Jogador não encontrado')
wew = await getBuffer('https://telegra.ph/file/2c031502ed4c4e4ac51f9.mp4')
bla = await getBuffer('https://telegra.ph/file/807349eedeb11b30bd1fa.mp4')
bat = Math.floor(Math.random() * 100) + 1
boa = `O ${pushname} vai lutar contra o @${mentioned[0].split('@')[0]} 🥷🏽
Sua chance de ganhar é de ${bat}%
evolua seu pokemon ao maximo 🍀`
destiny.sendMessage(from, {video: wew, caption: boa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info}).then(() =>
reply('*Aguarde 10 segundos, para saber o resultado ⏳*')
)
await sleep(10000)
if (bat > 50){
userg = getMoney(teks)
ncash = Math.floor(Math.random() * userg)
money(teks, -ncash)
money(sender, ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} acerto um ataque crítico e ganho a partida na arena.
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
if (bat < 50 || bat === 50){
userg = getMoney(sender)
ncash = Math.floor(Math.random() * userg)
money(teks, ncash)
money(sender, -ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} terminou o duelo na arena, ele recebeu um ataque crítico e perdeu.
┣❲💰❳ Prejuízo: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
break

case 'batalhakime':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
if (!args.join(' ').includes("@")) return reply(`Use assim exemplo: ${prefix}batalhakime @nero`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
consu = getMoneyId(teks)
if (consu === undefined) return reply('Jogador não encontrado')
wew = await getBuffer('https://telegra.ph/file/a7dadc54def15cd3420e2.mp4')
bla = await getBuffer('https://telegra.ph/file/5fee4d91dabf266adb705.mp4')
bat = Math.floor(Math.random() * 100) + 1
boa = `O ${pushname} vai lutar contra o @${mentioned[0].split('@')[0]} 🥷🏽
Sua chance de ganhar é de ${bat}%
concentre sua respiração 🍀`
destiny.sendMessage(from, {video: wew, caption: boa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info}).then(() =>
reply('*Aguarde 10 segundos, para saber o resultado ⏳*')
)
await sleep(10000)
if (bat > 50){
userg = getMoney(teks)
ncash = Math.floor(Math.random() * userg)
money(teks, -ncash)
money(sender, ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} decapito seu oponente, ganho o duelo.
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
if (bat < 50 || bat === 50){
userg = getMoney(sender)
ncash = Math.floor(Math.random() * userg)
money(teks, ncash)
money(sender, -ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} terminou o duelo, ele recebeu um ataque crítico e perdeu.
┣❲💰❳ Prejuízo: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
destiny.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
break

// ====== [ FIM DOS MENU ] ========\\

case 'criapet': {
if(userId < 2000) return reply("Você precisa de 2000 de money, sugiro que jogue alguns jogos que dão dinheiro, tenta o roleta mais olhe as regrakk")
var pets = args.join(' ')
var s = PosiMoney(sender)
var ki = parseInt(userId) - 2000
dinheiro[s].dinheiro = `${ki}`
fs.writeFileSync('./datab/jsons/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
if(!pets) return reply("Cade o nome do pet, seu beta!")
if(DonoPet === sender) return reply(`Você ja tem um pet, digite ${prefix}perfilpet`)
sex = ["Macho", "Fêmea"]
hot = ["Fogo", "Gelo", "Água"]
habi = ["Nenhuma", "Mega Soco", "Razepet", "Nenhuma"]
var estilo = hot[Math.floor(Math.random() * hot.length)]
var SexoPets = sex[Math.floor(Math.random() * sex.length)]
var Hability = habi[Math.floor(Math.random() * habi.length)]
if(SexoPets === 'Fêmea'){
var imgsex = 'https://telegra.ph/file/702f69b08e841e7db5ed2.jpg'
} else {
var imgsex = 'https://telegra.ph/file/9e31f29cc8a3ffb883245.jpg' }
algup = `━━━━━━── • ──━━━━━━\n[🚩] Pronto, agora você tem um pet cuja o nome é: ${pets}\n━━━━━━── • ──━━━━━━`
var infojs = {id: sender, pet: pets, vida: '200', foto: imgsex, proteção: 'Nenhuma', energia: '100', sexo: SexoPets, habilidade: Hability, tipo: estilo, statu: 'Vivo'}
bunda.push(infojs)
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2) + '\n')
reply("Aguarde... Estou Criando Seu Pet")
await sleep(3000)
let buttons = [
{buttonId: `${prefix}perfilpet`, buttonText: {displayText: '⭔ MEU PET ⭔'}, type: 1},
{buttonId: `${prefix}infopet`, buttonText: {displayText: '⭔ INFO PET ⭔'}, type: 1},
{buttonId: `${prefix}lojapet`, buttonText: {displayText: '⭔ LOJA PET ⭔'}, type: 1}
]
let buttonMessage = {
image: { url: `https://telegra.ph/file/b16e1519240ab681fc9c1.jpg` },
caption: `[❗] Agora você tem um pet\nCuja o nome é ${pets}`,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Pet Criado />`,
body: `© ${NomeDoBot}`,
showAdAttribution: true,
thumbnail: null,
mediaType:2,
sourceUrl:'https://www.instagram.com/maysurf__/'
}}
}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'battlepet': {
if(!isGroup) return reply(enviar.msg.grupo)
if(getPosiPet(sender) == undefined) return reply("Crie um pet Primeiro")
if(PetEnergy < 80) return reply(`Seu pet esta sem energia, dê ração a ele, use \"${prefix}lojapet\" e compre ração`)
if (!isMentioned) return reply("Marque o dono do pet")
if(PetUser(mentioned[0]) === undefined) return reply("Esse Beta Não Tem Pet, ou mataram ele em batalha")
var s = getPosiPet(sender)
var m = getPosiPet(mentioned[0])
buma1 = ["Quebrou a Proteção", "Tentou penetrar na proteção, mais não teve nem chance"]
var buma = buma1[Math.floor(Math.random() * buma1.length)]
if(bunda[m].proteção === 'Nenhuma'){
/// SENDER ↓
if(bunda[s].habilidade == 'Nenhuma'){
var goHability = 'E se rebaixa com choro#0'
} else if (bunda[s].habilidade == 'Razepet'){
var goHability = 'Razepet#90'
} else if (bunda[s].habilidade == 'Mega Soco'){
var goHability  = 'Mega Soco#80'}
/// MENCIONADO ↓
if(bunda[m].habilidade == 'Nenhuma'){
var goHabilityM = 'O choro da perda#0'
} else if (bunda[m].habilidade == 'Razepet'){
var goHabilityM = 'Razepet#90'
} else if (bunda[m].habilidade == 'Mega Soco'){
var goHabilityM  = 'Mega Soco#80'}
aa = petAtack(bunda[s].tipo)
bb = petAtack(bunda[m].tipo)
cc = goHability
dd = goHabilityM
ee = aa.split("#")[1]
ff = goHability.split("#")[1]
gg = bunda[m].vida
hh = parseInt(ee) + parseInt(ff)
ii = parseInt(gg) - parseInt(hh)
if(ii < 0){
var stts = `Crie outro pet amigo, o seu ${bunda[m].pet} acabou de ser morto pelo ${bunda[s].pet}`
} else { 
var stts = `Com ${ii} de vida, o ${bunda[m].pet} está em estado crítico, compre kit médico na loja imediatamente, use ${prefix}lojapet. Mais um ataque desses e seu pet vai de base` }
jj = `[🚩] LUTA:\n${bunda[s].pet} Ataca o(a) ${bunda[m].pet} com ${aa.split("#")[0]} e ${cc.split("#")[0]}, tirando cerca de ${hh} de vida do oponente. ${bunda[s].pet} gastou 80 de energia, agora ele vai descansar ou alimente ele.\n\n[🔥] STATUS:\n${stts}`
kk = `╭❏ ${bunda[s].pet}: ${bunda[s].vida}\n╰❏ ${bunda[m].pet}: ${ii}`
bunda[m].vida = `${ii}`
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
let buttons = [
{buttonId: `${prefix}infopet`, buttonText: {displayText: '⭔ INFO PET ⭔'}, type: 1},
{buttonId: `${prefix}perfilpet`, buttonText: {displayText: '⭔ PERFIL PET ⭔'}, type: 1},
{buttonId: `${prefix}lojapet`, buttonText: {displayText: '⭔ LOJA PET ⭔'}, type: 1}
]
let buttonMessage = {
image: { url: `https://telegra.ph/file/1c4848321384f197b0b11.jpg` },
caption: jj,
footer: kk,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `BATALHA PET`,
body: `${NomeDoBot} ©`,
showAdAttribution: true,
mediaType:2,
thumbnail: await getBuffer(bunda[s].foto),
sourceUrl:`https://www.instagram.com/maysurf__/`
}}}
destiny.sendMessage(from, buttonMessage, { quoted: selo })
} else {
if(buma === 'Quebrou a Proteção'){
var pmty = parseInt(bunda[s].energia) - 30
bunda[s].energia = `${pmty}`
bunda[m].proteção = 'Nenhuma'
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
reply(bunda[s].pet+` ${buma}`)
} else {
var pmto = parseInt(bunda[s].energia) - 30
bunda[s].energia = `${pmto}`
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
reply(bunda[s].pet+` ${buma}`)}}
if (bunda[m].vida > 0){
var ll = parseInt(bunda[s].energia) - 80
bunda[s].energia = `${ll}`
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
} else {
var ll = parseInt(bunda[s].energia) - 80
var menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
bunda.splice(m, 1)
bunda[s].energia = `${ll}`
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2) + '\n')
}
}
break

case 'perfilpet':
if (isMentioned){
var i = getPosiPet(mentioned[0])
} else {
var i = getPosiPet(sender)
}
if (i === undefined) return reply("Pet Não Encontrado")
imgPet = {url: bunda[i].foto}
kapa = `•───•──────•───•
┣❲🏮❳ Nome: ${bunda[i].pet}
┣❲🏮❳ Vida: ${bunda[i].vida}
┣❲🏮❳ Proteção: ${bunda[i].proteção}
┣❲🏮❳ Energia: ${bunda[i].energia}
┣❲🏮❳ Sexo: ${bunda[i].sexo}
┣❲🏮❳ Habilidade: ${bunda[i].habilidade}
┣❲🏮❳ Estilo: ${bunda[i].tipo}
┣❲🏮❳ Status: ${bunda[i].statu}
┣❲🏮❳ Dono: @${bunda[i].id.split('@')[0]}
•───•──────•───•`
destiny.sendMessage(from, {image: imgPet, caption:kapa, mentions: [bunda[i].id]}, {quoted: selo})
break

case 'lojapet':
if(getPosiPet(sender) == undefined) return reply("Crie um pet Primeiro")
if (MoneyId === undefined){
rafa = {id: sender, dinheiro: 0}
dinheiro.push(rafa)
fs.writeFileSync('./datab/jsons/import/dinheiro.json', JSON.stringify(dinheiro, null, 2))
}
sections = [{
title: `Louja Pet ~`,
rows: [
{title: "[💠] Proteção", rowId: `${prefix}protezipet`, description: "Custo R$ 8.000"},
{title: "[⛑️] Kit Hp", rowId: `${prefix}kitpet`, description: "Custo R$ 5.000"},
{title: "[🍟] Ração", rowId: `${prefix}alimpet`, description: "Custo R$ 500"},
]}]
listMessage2 = {
  text: `[🎏~ Tudo que for comprado será adicionado no seu pet automaticamente`,
  footer: `${NomeDoBot} ©`,
  title: "就 Loja Pet 就",
  buttonText: `Aperte Aqui`,
  sections}
destiny.sendMessage(from, listMessage2, {quoted: selo})
break

case 'kitpet':
if(getPosiPet(sender) == undefined) return reply("Crie um pet Primeiro")
if (VidaDoPet === '200'){
if (userId < 5000){
var i = getPosiPet(sender)
var s = PosiMoney(sender)
var ki = parseInt(userId) - 5000
dinheiro[s].dinheiro = `${ki}`
fs.writeFileSync('./datab/jsons/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
bunda[i].vida = '200'
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
reply("[❗] Vida do pet recupereda")
} else {
reply("Dinheiro insuficiente")}
} else {
reply("Ja ta cheia")}
break

case 'protezipet':
if(getPosiPet(sender) == undefined) return reply("Crie um pet Primeiro")
if (userId > 8000){
var i = getPosiPet(sender)
var s = PosiMoney(sender)
var ki = parseInt(userId) - 8000
dinheiro[s].dinheiro = `${ki}`
fs.writeFileSync('./datab/jsons/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
bunda[i].proteção = "Ativada"
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
await sleep(2000)
reply("Proteção Equipada no seu Pet")
} else {
reply('Saldo insuficiente')
}
break

case 'alimpet':
if(getPosiPet(sender) == undefined) return reply("Crie um pet Primeiro")
if(PetEnergy === '100') return reply("Energia do Pet Recuperada")
if(userId > 2000){
i = getPosiPet(sender)
s = PosiMoney(sender)
ki = parseInt(userId) - 500
var op3 = parseInt(bunda[i].energia) + 10
dinheiro[s].dinheiro = `${ki}`
fs.writeFileSync('./datab/jsons/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
if (op3 > 100 ){
var op3 = 100 }
bunda[i].energia = `${op3}`
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
reply(`────${bunda[i].pet};\n▼・ᴥ・▼ \nThanks 💫\n───────\n[❗] Upei +10 de energia\n[⚡] Energia: ${bunda[i].energia}\n[💰] Money: ${dinheiro[s].dinheiro}`)
} else {
reply('Saldo insuficiente')}
break

case 'ilimitpet':
if(!SoDono) return reply("Você não é digno")
if(getPosiPet(sender) == undefined) return reply("Crie um pet Primeiro")
try {
var s = getPosiPet(sender)
bunda[s].vida = '9999999'
bunda[s].energia = '9999999'
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
kuop = await getBuffer('https://telegra.ph/file/774f70bb98e9f54af4d0a.mp4')
kk = `Eita ${pushname}
Vida E Energia\nRegeneradas Pro Meu Mestre
•────────────•
+++${bunda[s].vida} de vida 
+++${bunda[s].energia} de energia
++++Derrote Qualquer Um
•────────────•`
destiny.sendMessage(from, {video: kuop, caption: kk, mentions: sender}, {quoted: selo})
} catch {
reply("Erro")}
break

case 'petname':
if(getPosiPet(sender) == undefined) return reply("Crie um pet Primeiro")
if(!q) return reply("Digite o nome novo")
var i = getPosiPet(sender)
bunda[i].pet = q
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
reply("Pronto beta!")
break

case 'delpet': 
if(getPosiPet(sender) == undefined) return reply("Crie um pet Primeiro")
var miojo = getPosiPet(sender)
bunda.splice(miojo, 1)
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2) + '\n')
reply("Pronto, pet deletado...")
break

case 'infopet':
op = `Opa, vamo aprofundar sobre esse comando, bom.. acho que você percebeu que ao criar um pet você recebeu dois botões, um pra ver o pet e o outro para se aprofundar sobre esse tal comando. Vamo direto ao ponto, o pet que você criou, estar guardado em um arquivo json que não pode ser apagado ou substituido, lógico que quando ele morrer e serar apagado, porque não faz sentido deixar seu pet la morto kk. Você pode ta acessando esse comando que tem acesso ao cemitério de pet em breve. \nGuia Do Cmd ~ \n\n${prefix}criapet (nome do seu pet)\n_Esse comando serve para cria seu animalzinho_\n\n${prefix}perfilpet\n_Esse comando serve para você ver seu pet, para ver o do seu amigo coloque o @tag dele dps do comando_\n\n${prefix}lojapet\n_Loja do pet_\n${prefix}battlepet (@tag)\n_Abrir uma batalha com o pet do mencionado_\n${prefix}delpet\n_Esse apaga seu pet para criar outro_\n\n${prefix}petname (nome novo)\n_Esse comando muda o nome do seu pet_\n[❗] Agora Vou deixar os Preço das vantagens quando for batalhar

╭─❏
│┏━━━━─────
│┃就 Tabela De Preços 就
│┃
│┃∾Proteção
│┃2.000
│┃
│┃∾Armadura 
│┃1.500
│┃
│┃∾Ração
│┃50
│┗━━━━─────
╰─❏ 

*obs: A armadura e a Proteção são vantagens ao batalhar, aconselho usar um desses antes de batalhar*`
sendBtext(from, op, 'Creditos do Cmd: Tiago( Sr luffy )\nAjuda de: Rafael Mods kk', [{buttonId: `nd`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}])
break

////////// FORCA /////////////

case 'forca':
if(fs.existsSync('./armor/jogo/forca-'+from+'.json'))return reply('🤖 Já tem um jogo ativo no momento')
listaPalavras = ['Alemanha', 'Blumenal', 'Catarina', 'Dragão', 'Etiópia', 'Flamingo', 'Guilhotina', 'Hermes', 'Iguana', 'Jabuticaba', 'Kratos', 'Laranja', 'Mulan', 'Nióbio', 'Opala', 'Pinça', 'Quênia', 'Robson', 'Saprófita', 'Tucano','Ucrânia', 'Viviane', 'Wanessa', 'Xícara', 'Yahoo', 'Zimbabwe']
listaDicas = ['País na Europa', 'Cidade Brasileira', 'Nome de pessoa', 'Criatura Mítica', 'País na África', 'Animal', 'Instrumento de punição', 'Nome de pessoa', 'Animal', 'Fruta', 'Personagem de jogo', 'Fruta', 'Personagem da Disney', 'Elemento químico', 'Modelo de carro', 'Objeto utilizado como uma extensão dos dedos', 'País na África', 'Nome de pessoa', 'Tipo de fungo', 'Animal', 'País na Europa', 'Nome de pessoa', 'Nome de pessoa', 'Utensílio doméstico', 'Navegador web/Empresa', 'País na África']
hsy = Math.floor(Math.random() * listaPalavras.length)
ga = hsy
json = {
 letrasJogadas: [],
 listaLetras: listaPalavras[ga].split(''),
 palavraDesvendada: listaPalavras[ga],
 tentativas : 0,
 acertou : false,
 erros:0,
 dica : listaDicas[ga]
 }
 tdh = `🤖 *Sorteando...* ⏳\n
✉ *Jogo: Forca*
📝 *Dica:* ${listaDicas[ga]}
💬 *Total ${json.palavraDesvendada.split('').length} Letras*\n
╭━〔 FORCA 〕━⬣
║ ▢
║ ▢
║ ▢
║ ▢
║ ▢
║ ▢
║ ▢ ${'_ '.repeat(json.palavraDesvendada.split('').length)}\n
*Chances restantes: ${6 - json.erros}*\n
*${prefix}ff <letra>* `
reply(tdh)
fs.writeFileSync('./armor/jogo/forca-'+from+'.json', `${JSON.stringify(json)}`)
break

case "resetarforca":
if(!fs.existsSync('./armor/jogo/forca-'+from+'.json'))return reply('No Momento Não Tem Nenhum Jogo Da Forca ae Andamento Neste Grupo')
fs.unlinkSync('./armor/jogo/forca-'+from+'.json')
reply("Jogo Forca Resetado")
break

case 'ff':
if(!fs.existsSync('./armor/jogo/forca-'+from+'.json'))return reply('🤖 não tem um jogo ativo no momento digite '+prefix+'forca e ira iniciar')
jui = JSON.parse(fs.readFileSync('./armor/jogo/forca-'+from+'.json'))
jiu = JSON.parse(fs.readFileSync('./armor/jogo/forca-'+from+'.json'))
if(args.length < 1)return reply('🤖 Por favor informe uma letra')
b = args[0].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
if(b.split('').length > 1)return reply('🤖 Por favor informe apenas uma letra')
if(jui.letrasJogadas.includes(b) || jui.letrasJogadas.includes(b.toLowerCase()) || jui.letrasJogadas.includes(b.toUpperCase()) )return reply('🤖 desculpe mais está letra já foi jogada')
if(jui.palavraDesvendada.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('').includes(b.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) || jui.palavraDesvendada.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('').includes(b.toLowerCase()) || jui.palavraDesvendada.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('').includes(b.toUpperCase())) {
wupe = jui.palavraDesvendada.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('')
wupie = jui.letrasJogadas
jipe = ''
for(f = 0; f < wupe.length;f++){
jipe += `${wupie.includes(wupe[f]) ? wupe[f]+' ' :'_ '}`
}
jui.letrasJogadas.push(b.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
jui.tentativas += 1
fs.writeFileSync('./armor/jogo/forca-'+from+'.json', JSON.stringify(jui))
xijui = JSON.parse(fs.readFileSync('./armor/jogo/forca-'+from+'.json'))
liop = ''
for(f = 0; f < xijui.letrasJogadas.length;f++){
liop += `${xijui.letrasJogadas[f]}, `
}
wup = xijui.palavraDesvendada.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('')
wupi = xijui.letrasJogadas
jip = ''
for(f = 0; f < wup.length;f++){
jip += `${wupi.includes(wup[f].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() || wup[f].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase() ) ? wup[f]+' ' :'_ '}`
}
if(jip.toLowerCase().split(' ').join('') === xijui.palavraDesvendada.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()){
reply(`Parabens vc venceu\nPalavra: "${xijui.palavraDesvendada}"`)
fs.unlinkSync(`./armor/jogo/forca-${from}.json`)
}
txs = `🤖 *Forca* ⏳

📝 *Dica:* ${xijui.dica}
💬 *${xijui.palavraDesvendada.split('').length} Letras*
✏ *Letras jogadas:* ${liop}

╭━〔 PROGRESSO 〕━⬣
║ ▢   ${xijui.erros > 0 ? '😢' :''}
║ ▢   ${xijui.erros > 1 ? '👉' :''} ${xijui.erros > 2 ? '👈' :''}
║ ▢   ${xijui.erros > 3 ? '👖' :''}
║ ▢   ${xijui.erros > 4 ? '👞' :''} ${xijui.erros > 5 ? '👞' :''}
║ ▢
║ ▢
║ ▢ ${jip}

*Chances restantes:* ${6 - xijui.erros}

*${prefix}ff* <letra>
`
reply(txs)
}else{
jui.letrasJogadas.push(b)
jui.tentativas += 1
jui.erros += 1
fs.writeFileSync('./armor/jogo/forca-'+from+'.json', JSON.stringify(jui))
xijui = JSON.parse(fs.readFileSync('./armor/jogo/forca-'+from+'.json'))
wup = xijui.palavraDesvendada.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('')
wupi = xijui.letrasJogadas

if(xijui.erros == 6){ 
fs.unlinkSync(`./armor/jogo/forca-${from}.json`)
return reply(`Jogo acabou e vc errou\nPalavra: "${xijui.palavraDesvendada}" `)
}
jip = ''
for(f = 0; f < wup.length;f++){
jip += `${wupi.includes(wup[f].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() || wup[f].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase() ) ? wup[f]+' ' :'_ '}`
}
lio = ''
for(f = 0; f < xijui.letrasJogadas.length;f++){
lio += `${xijui.letrasJogadas[f]}, `
}
txs = ` ✉ *Jogo: Forca*
📝 *Dica:* ${xijui.dica}
💬 *Total ${xijui.palavraDesvendada.split('').length} Letras*
✏ *Letras jogadas:* ${lio}
 
╭━〔 PROGRESSO 〕━⬣
║ ▢       ${xijui.erros > 0 ? '😢' :''}
║ ▢     ${xijui.erros > 1 ? '👉' :''} ${xijui.erros > 2 ? '👈' :''}
║ ▢        ${xijui.erros > 3 ? '👖' :''}
║ ▢       ${xijui.erros > 4 ? '👞' :''} ${xijui.erros > 5 ? '👞' :''}
║ ▢
║ ▢
║ ▢ ${jip}

*Chances:* ${6 - xijui.erros}

*${prefix}ff* <letra>
`
reply(txs)
}
break

case "resetarforca":
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')  
if(fs.existsSync('./armor/jogos/forca-'+from+'.json'))return reply('Não tem jogo ativo no momento')
fs.unlinkSync(`./armor/jogo/forca-${from}.json`)
reply("Jogo resetado")
break

///////////////

case 'respon':
				if (!q) return reply(`Seu texto, Exemplo : ${prefix + command} ele casou `)
					const apa = [`Sim`, `Não`, `Poderia ser`, `Isso mesmo`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
destiny.sendMessage(from, { text: `Questão : É ${q}\nResponda : ${kah}` }, { quoted: selo })
					break

case 'kiah2':
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const tutu = `sua foto de perfil`
destiny.sendMessage(from, {image: {url: ppimg}, caption: tutu}, {quoted: selo})
break

case 'ringtone': {
		if (!q) return reply(`Exemplo : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(!q)
		let result = anu[Math.floor(Math.random() * anu.length)]
		destiny.sendMessage(from, { audio: { url: result.audio }, filename: result.Título+'.mp3', mimetype: 'audio/mp4' }, { quoted: selo })
	    }
	    break
	    
case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Proxima Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Café  meus nobres`,
                    footer: destiny.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                destiny.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

////////// ROLETAS //////////////

case 'roleta':
if(!isBotGroupAdmins) return reply("Eu Preciso de Adm Para ter Acesso Ao Meu Revolve")
sendBtext(from, `Leia As Regras Primeiro`,`ꪶ${NomeDoBot}ꫂ`,[{buttonId:`${prefix}rgroleta`, buttonText: {displayText: "「 Regras 」"}, type: 1}], selo)
break

case 'rgroleta':
sendBtext(from, `1 • Você Pode Tomar Ban!\n2 • Se Perder, Perde toda a grana!\n3 • Se Ganhar, Você Ganha 1.500 conto\nSe Você For Banido Vc Vai Ser Revivido Dps De 2 Minutos No Máximo.\n4 • Bot Tem Que Ta De Adm\n• Se Não Der Certo Entre Em Contato Com Algum Adm`,`ꪶ𝑹𝑶𝑳𝑬𝑻𝑨-𝑹𝑼𝑺𝑺𝑨ꫂ`, [{buttonId:`${prefix}ctroleta`, buttonText: {displayText: `𝑪𝑶𝑵𝑻𝑰𝑵𝑼𝑨𝑹`}, type: 1}, {buttonId:`${prefix}nroleta`, buttonText: {displayText: `𝑫𝑬𝑺𝑰𝑺𝑻𝑶`}, type: 1}], selo)
break

case 'nroleta':
sendBtext(from, `Blz ${pushname}, Você foi Perdoado`, `Veja Meu Menu`, [{buttonId:`${prefix}menu`, buttonText: {displayText: `𝑀𝐸𝑁𝑈`}, type: 1}], info)
break

case 'ctroleta':
if(!isBotGroupAdmins) return reply("Eu Preciso de Adm Para ter Acesso Ao Meu Revolve")
if (MoneyId === undefined){
rafa = {id: sender, dinheiro: 0}
dinheiro.push(rafa)
fs.writeFileSync('./datab/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
}
totaldi = getMoney(sender)
wew = await getBuffer(`https://telegra.ph/file/16a57fff05a289b934aae.jpg`)
atk = ["SEM BALA","COM BALA","ENGANCHADO"]
calib = atk[Math.floor(Math.random() * atk.length)]
if ((calib == 'COM BALA')) {
var apt = "Perdeu [💀]..."
} else if ((calib == 'SEM BALA') || ('ENGANCHADO')) { 
var apt = "Ganhou, Teve Muita Sorte, Parabéns"
}
destiny.sendMessage(from, {text:`[🥁] *TAMBOU GIROU...* [🥁]`}, {quoted: selo}).then(() => {
destiny.sendMessage(from, {text:`[💥] *GATILHO APERTADO...* [💥]`}, {quoted: selo})
})
await sleep(2000)
destiny.sendMessage(from, {image: wew, caption:`[🥶] *O TAMBOR ESTA ${calib}*\n\nHmmmn, Parece Que O(a) @${sender.split("@")[0]}, Ele(a) ${apt}`, footer: ``}, {quoted: info})
if (apt == 'Perdeu [💀]...') {
await sleep(4000)
destiny.sendMessage(from, {text:`[☠️] Regras São Regras né @${sender.split("@")[0]}...`}, {quoted: selo}).then(() => {
destiny.groupParticipantsUpdate(from, [`${sender.split("@")[0]}@s.whatsapp.net`], "remove")
})
await sleep(120000)
destiny.groupParticipantsUpdate(from, [`${sender.split("@")[0]}@s.whatsapp.net`], "add").then(() => {
money(sender, -totaldi)
destiny.sendMessage(from, {text:`[🩸] Depois de ter morrido por um acidente o @${sender.split('@')[0]} Foi adicionado de volta e perdeu tudo •`, mentions: [sender]}, {quoted: selo})
})
}
if (apt == 'Ganhou, Teve Muita Sorte, Parabéns') {
await sleep(5000)
money(sender, 1500)
sendBtext(from, `[🍻] Parabéns @${sender.split("@")[0]} [🍻]\n----Pela sua Coragem\n🍷▸ Você Ganhou 1500R$\n----Quer Tentar Novamente?`,`${NomeDoBot}`, [{buttonId:`${prefix}ctroleta`, buttonText: {displayText: '𝑹𝑬𝑽𝑨𝑵𝑪𝑯𝑬 🥂'}, type: 1}, {buttonId:`${prefix}carteira`, buttonText: {displayText: '𝑪𝑨𝑹𝑻𝑬𝑰𝑹𝑨 💳'}, type: 1}], selo)
}
break

case 'roletarussa': 
if(!isBotGroupAdmins) return reply("Eu Preciso Ta De Adm Pra Ter A Mira Mais Precisa, Pra Não Errar o Alvo 🤠")
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo')
if (!isGroupAdmins) return reply ('Você Não é digno de tal comando, pois so quem pode, é usuários com poder alto...')
arma = ["PARAFAL", "DESERT", "VAL", "Ak-47", "MP40", "M16", "M4A1", "Glock","Escopeta","AA12","G136","M1014","Barrete","MP5","G3","G17","AUG","MP7","P90","UZI","Kar93","AWM","PKM","M13","MP7"]
membrana = ["Na Perna","Na Cabeça","Na Bunda","Na Mão","No Braço","Na Boca","No Saco","Na Coxa","No Imbigo","Nos Peito","No Cutuvelo","No Nariz","Na Orelha"]
armon = arma[Math.floor(Math.random() * arma.length)]
menbro = membrana[Math.floor(Math.random() * membrana.length)]
reply(`Alguém Vai Morrer Jajá, Espera Só Eu Recarregar Minha ${armon}, Aguarde 5 Segundos...`)
await sleep(5000)
reply("Pronto, Agora Vamos lá, Minha Arma Ta Carregada Prontinha Para Matar Um, Quem Serar O(a) Sortudo(a)?!")
await sleep(2000)
await destiny.groupSettingUpdate(from, 'announcement')
await sleep(3000)
reply("Quem Eu Devo matar...\n\nJá me decidi...")
bah = fs.readFileSync('./audios/level.mp3');
destiny.sendMessage(from, {audio: bah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
await sleep(4000)
d = []
teks = `*[💥] PÁÁÁÁ!! [💥]*\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `O @${groupMembers[r].id.split('@')[0]} Foi baliado ${menbro} E Sangrou Até a Morte [☠️]`
d.push(groupMembers[r].id)
}
await sleep(4500)
destiny.sendMessage(from, {text: teks, mentions: d}, {quoted: selo})
destiny.groupParticipantsUpdate(from, d, 'remove')
await sleep(4000)
await destiny.groupSettingUpdate(from, 'not_announcement')
reply("[☠️] *Ninguém Viu Nada Em...* [👀]")
await sleep(180000)
for(i = 0; i < 1; i++) {
pruh = `Dps De 3 Minutos, O ${groupMembers[r].id.split('@')[0]} Foi Revivido Através Da Cura Suprema [💊]`
destiny.sendMessage(from, {text: pruh}, {quoted: selo})
d.push(groupMembers[r].id)
}
destiny.sendMessage(from, {text: teks, mentions: d}, {quoted:selo})
destiny.groupParticipantsUpdate(from, d, 'add')
reply('[💐] Bem Vindo de Volta, Você Foi Morto Pelo Comando Death [💐]')
break

case 'rolatanumber':
reply (' [️📍] Atenção ganha quem tirar o número mais alto')
var rand = Math.floor(Math.random() * (12 - 2) + 2);
bla = fs.readFileSync(`./armor/jogo/roleta/${rand}.webp`)
destiny.sendMessage(from, {sticker: bla}, {quoted: info})
buttons2 = [
  {buttonId: `${prefix}roletanumber`, buttonText: {displayText: '♻️「 Girar Novamente 」♻️'},  type: 1}]
buttonMessage2 = {
    text: "[️🎡] Estou girando a roleta para você, se quiser que eu jogue novamente, selecione uma opção abaixo:",
    footer: '👤roleta👤',
    buttons2: buttons2,
    headerType: 1
}
sendMsg =  destiny.sendMessage(from, buttonMessage2, {quoted: selo}) 
break

case 'flechas2':
case 'flechadas2':
sections = [
{title: "[☘]  boa sorte no seu disparo...",
rows: [
{title: "FELCHA 1🏹", rowId: `${prefix}flechadass2`, description: "[🤕]    boa sorte no seu disparo pra ganha uma remada do cacique."},
{title: "FLECHA 2🏹", rowId: `${prefix}flechadass2`, description: "[😍]    boa sorte no seu disparo pra ganha uma muie do cacique."},
{title: "FLECHA 3🏹", rowId: `${prefix}flechadass2`, description: "[🤨]    boa sorte no seu disparo pra ganha um beijo do cacique."},
{title: "FLECHA 4🏹", rowId: `${prefix}flechadass2`, description: "[🙈]    boa sorte no seu disparo pra ganha o neymar de calcinha do cacique."},
{title: "FLECHA 5🏹", rowId: `${prefix}flechadass2`, description: "[🏳️‍🌈]    boa sorte no seu disparo pra ganha um lgbt do cacique."},
{title: "FLECHA 6🏹", rowId: `${prefix}flechadass2`, description: "[♿]    boa sorte no seu disparo pra ganha um traveco do cacique."},
{title: "FLECHA 7🏹", rowId: `${prefix}flechadass2`, description: "[🖕]    boa sorte no seu disparo pra ganha uma dedada do cacique."},
{title: "FLECHA 8🏹", rowId: `${prefix}flechadass2`, description: "[🌚]    boa sorte no seu disparo pra ganha uma rola do cacique."},
{title: "FLECHA 9🏹", rowId: `${prefix}flechadass2`, description: "[🌝]  boa sorte no seu disparo pra ganha um homem do cacique."}]
}]
listMessage2 = {
text: `[️🏹] Escolha um número de 1 a 9 e jogue a flecha, está com sorte hoje?`,
  footer: `[️📍] CABANA DE FLECHAS  [️📍]`,
  title: `Olá ${pushname}`,
  buttonText: " [🗣] ESCOLHA" ,
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2)
break

case 'flechadass2':
var rand = Math.floor(Math.random() * (15 - 2) + 2);
bla = fs.readFileSync(`./armor/jogo/flecha/${rand}.webp`)
destiny.sendMessage(from, {sticker: bla}, {quoted: info})
break

case 'flechadas':
case 'flechas': {
var rand = Math.floor(Math.random() * (15 - 2) + 2);
bla = fs.readFileSync(`./armor/jogo/flecha/${rand}.webp`)
destiny.sendMessage(from, {sticker: bla}, {quoted: info})
let buttons = [
  {buttonId:`${prefix + command}`, buttonText: {displayText: '🏹「Jogue Novamente 」🏹' }, type: 1},
  {buttonId:`lsksksks`,
 buttonText: {displayText: 'CANCELAR DISPARO'}, type: 1}]
let buttonMessage = {
image: {url: `https://telegra.ph/file/da7a156a44b182d8dcccc.jpg`},
caption: "\n [️🏆]  Veja quando pontos você irá acertar e anote, desafie alguém pra vê quem ganha mais pontos, se quiser jogue novamente.",
buttons: buttons,
headerType: 1
}
sendMsg = await destiny.sendMessage(from, buttonMessage, {quoted: selo})}
break

case 'atirando':
var rand = Math.floor(Math.random() * (10 - 2) + 2);
bla = fs.readFileSync(`./armor/jogo/tiros/${rand}.webp`)
destiny.sendMessage(from, {sticker: bla}, {quoted: info})
break

case 'tiros2':
case 'tiro2':
case 'atirar2':
case 'disparar2':
sections = [
{title: "[️🥷]  boa sorte no seu disparo...",
rows: [
{title: "⚔️ARMA 1", rowId: `${prefix}atirando`, description: "[😈]  boa sorte no seu disparo, esta valendo o coll do adm."},
{title: "⚔️ARMA 2", rowId: `${prefix}atirando`, description: "[🧐]  boa sorte no seu disparo, está valendo uma rola no coll de quem vc marcar."},
{title: "⚔️ARMA 3", rowId: `${prefix}atirando`, description: "[😳]  boa sorte no seu disparo, está apostando seu coll."},
{title: "⚔️ARMA 4", rowId: `${prefix}atirando`, description: "[😏]  boa sorte no seu disparo, está valendo o Pablo Vitar de calcinha."},
{title: "⚔️ARMA 5", rowId: `${prefix}atirando`, description: "[🪀]  boa sorte no seu disparo, está valendo um sexo2."},
{title: "⚔️ARMA 6", rowId: `${prefix}atirando`, description: "[🐒]  boa sorte no seu disparo está valendo sua virgindade."},
{title: "⚔️ARMA 7", rowId: `${prefix}atirando`, description: "[🗿]  boa sorte no seu disparo, esta valendo o quanto vc e sigma."},
{title: "⚔️ARMA 8", rowId: `${prefix}atirando`, description: "[☘]  boa sorte no seu disparo..."}]
}]
listMessage2 = {
text: `[️🥷] Veja se você acertou o alvo, caso vc erre, dispare novamente.`,
  footer: `[️💢] BARRACA DE TIROS [️💢]`,
  title: `Olá ${pushname}`,
  buttonText: " [️🔢] NÚMERO DA ARMA  [️🔢]" ,
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2)
break

case 'tiros':
case 'tiro':
case 'atirar':
case 'disparar': {
var rand = Math.floor(Math.random() * (10 - 2) + 2);
bla = fs.readFileSync(`./armor/jogo/tiros/${rand}.webp`)
destiny.sendMessage(from, {sticker: bla}, {quoted: info})
let buttons = [
  {buttonId:`${prefix + command}`, buttonText: {displayText: ' [⏰] NOVO DISPARO [⏰] ' }, type: 1},
  {buttonId:`lsksksks`,
 buttonText: {displayText: 'CANCELAR DISPARO'}, type: 1}]
let buttonMessage = {
image: {url: `https://telegra.ph/file/da7a156a44b182d8dcccc.jpg`},
caption: "\n [️🥷] Veja se você acertou o alvo, caso vc erre, dispare novamente.",
buttons: buttons,
headerType: 1
}
sendMsg = await destiny.sendMessage(from, buttonMessage, {quoted: selo})}
break

//====(FIM-BRINCADEIRAS-JOGOS)====\\


//(CASE-SIMIH-INTELIGÊNCIA-ARTIFICIAL)\\

case 'simi':
if(isSimi) return reply('Desativado')
sduy = args.join(" ")
data = await fetchJson(`https://api.simsimi.net/v2/?text=${sduy}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break

case 'simih':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'simih2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./armor/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
samih2.splice(from, 1)
fs.writeFileSync('./armor/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

//===================================\\


//=(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)==\\



//================================\\


//===(ALTERADOR-DE-AUDIO/VIDEO)====\\

case 'videoreverse':
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
destiny.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
break 

case 'videolento':
case 'slowvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
destiny.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})
break

case 'videorapido':
case 'fastvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
destiny.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})		
break

case 'tupai':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.5,asetrate=65100"' ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'reverse':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'fat':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'deep':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=44500*2/3" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'earrape':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "volume=12'" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'blown':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "acrusher=.1:1:64:0:log" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'adolesc':
case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break  

case 'bass3':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'estourar': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'fast':
case 'audiorapido':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'audiolento': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(rano)
})
break



case 'robot':
if (!isQuotedAudio) return reply('[🔊] Marque um áudio.')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
destiny.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: selo})
fs.unlinkSync(ran)
})
break

//======(FIM-ALTERAR-AUDIO)========\\

//======(TEXTO PRO)=============\\

case 'logos':
if(!q) return reply(`Oiá ${pushname}\nDigite: ${prefix}logos seu nick`)
sections = [
    {
title: "𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒",
rows: [
{title: "Gato triste", rowId: `${prefix}sadcat ${q}`, description: `${NomeDoBot}`},
    {title: "Business", rowId: `${prefix}business ${q}`, description: `${NomeDoBot}`},
    {title: "Bear", rowId: `${prefix}bear ${q}`, description: `${NomeDoBot}`},
    {title: "Summery", rowId: `${prefix}summery ${q}`, description: `${NomeDoBot}`},
    {title: "Candy", rowId: `${prefix}candy ${q}`, description: `${NomeDoBot}`},
    {title: "Batman", rowId: `${prefix}batman ${q}`, description: `${NomeDoBot}`},
    {title: "Christmas", rowId: `${prefix}christmas ${q}`, description: `${NomeDoBot}`},
    {title: "3dchristmas", rowId: `${prefix}3dchristmas ${q}`, description: `${NomeDoBot}`},
    {title: "Sparklechristmas", rowId: `${prefix}sparklechristmas ${q}`, description: `${NomeDoBot}`},
    {title: "Deepsea", rowId: `${prefix}deepsea ${q}`, description: `${NomeDoBot}`},
    {title: "Scifi", rowId: `${prefix}scifi ${q}`, description: `${NomeDoBot}`},
    {title: "Rainbow", rowId: `${prefix}rainbow ${q}`, description: `${NomeDoBot}`},
    {title: "Waterpipe", rowId: `${prefix}waterpipe ${q}`, description: `${NomeDoBot}`},
    {title: "Spooky", rowId: `${prefix}spooky ${q}`, description: `${NomeDoBot}`},
    {title: "Pencil", rowId: `${prefix}pencil ${q}`, description: `${NomeDoBot}`},
    {title: "Circuit", rowId: `${prefix}circuit ${q}`, description: `${NomeDoBot}`},
    {title: "Discovery", rowId: `${prefix}discovery ${q}`, description: `${NomeDoBot}`},
    {title: "Metalic", rowId: `${prefix}metalic ${q}`, description: `${NomeDoBot}`},
    {title: "Fiction", rowId: `${prefix}fiction ${q}`, description: `${NomeDoBot}`},
    {title: "Demon", rowId: `${prefix}demon ${q}`, description: `${NomeDoBot}`},
    {title: "Transformer", rowId: `${prefix}transformer ${q}`, description: `${NomeDoBot}`},
    {title: "Berry", rowId: `${prefix}berry ${q}`, description: `${NomeDoBot}`},
    {title: "Thunder", rowId: `${prefix}thunder ${q}`, description: `${NomeDoBot}`},
    {title: "Magma", rowId: `${prefix}magma ${q}`, description: `${NomeDoBot}`},
    {title: "3dstone", rowId: `${prefix}3dstone ${q}`, description: `${NomeDoBot}`},
    {title: "Neonlight", rowId: `${prefix}neonlight ${q}`, description: `${NomeDoBot}`},
    {title: "Glitch", rowId: `${prefix}glitch ${q}`, description: `${NomeDoBot}`},
    {title: "Harrypotter", rowId: `${prefix}harrypotter ${q}`, description: `${NomeDoBot}`},
    {title: "Brokenglass", rowId: `${prefix}brokenglass ${q}`, description: `${NomeDoBot}`},
    {title: "Papercut", rowId: `${prefix}papercut ${q}`, description: `${NomeDoBot}`},
    {title: "Watercolor", rowId: `${prefix}watercolor ${q}`, description: `${NomeDoBot}`},
    {title: "Multicolor", rowId: `${prefix}multicolor ${q}`, description: `${NomeDoBot}`},
    {title: "Neondevil", rowId: `${prefix}neondevil ${q}`, description: `${NomeDoBot}`},
    {title: "Underwater", rowId: `${prefix}underwater ${q}`, description: `${NomeDoBot}`},
    {title: "Graffitibike", rowId: `${prefix}graffitibike ${q}`, description: `${NomeDoBot}`},
    {title: "Snow", rowId: `${prefix}snow ${q}`, description: `${NomeDoBot}`},
    {title: "Cloud", rowId: `${prefix}cloud ${q}`, description: `${NomeDoBot}`},
    {title: "Honey", rowId: `${prefix}honey ${q}`, description: `${NomeDoBot}`},
    {title: "Ice", rowId: `${prefix}ice ${q}`, description: `${NomeDoBot}`},
    {title: "Fruitjuice", rowId: `${prefix}fruitjuice ${q}`, description: `${NomeDoBot}`},
    {title: "Biscuit", rowId: `${prefix}biscuit ${q}`, description: `${NomeDoBot}`},
    {title: "Wood", rowId: `${prefix}wood ${q}`, description: `${NomeDoBot}`},
    {title: "Chocolate", rowId: `${prefix}chocolate ${q}`, description: `${NomeDoBot}`},
    {title: "Strawberry", rowId: `${prefix}strawberry ${q}`, description: `${NomeDoBot}`},
    {title: "Matrix", rowId: `${prefix}matrix ${q}`, description: `${NomeDoBot}`},
    {title: "Blood", rowId: `${prefix}blood ${q}`, description: `${NomeDoBot}`},
    {title: "Dropwater", rowId: `${prefix}dropwater ${q}`, description: `${NomeDoBot}`},
    {title: "Toxic", rowId: `${prefix}toxic ${q}`, description: `${NomeDoBot}`},
    {title: "Lava", rowId: `${prefix}lava ${q}`, description: `${NomeDoBot}`},
    {title: "Rock", rowId: `${prefix}rock ${q}`, description: `${NomeDoBot}`},
    {title: "Bloodglas", rowId: `${prefix}bloodglas ${q}`, description: `${NomeDoBot}`},
    {title: "Hallowen", rowId: `${prefix}hallowen ${q}`, description: `${NomeDoBot}`},
    {title: "Darkgold", rowId: `${prefix}darkgold ${q}`, description: `${NomeDoBot}`},
    {title: "Joker", rowId: `${prefix}joker ${q}`, description: `${NomeDoBot}`},
    {title: "Wicker", rowId: `${prefix}wicker ${q}`, description: `${NomeDoBot}`},
    {title: "Firework", rowId: `${prefix}firework ${q}`, description: `${NomeDoBot}`},
    {title: "Skeleton", rowId: `${prefix}skeleton ${q}`, description: `${NomeDoBot}`},
    {title: "Blackpink", rowId: `${prefix}blackpink ${q}`, description: `${NomeDoBot}`},
    {title: "Sand", rowId: `${prefix}sand ${q}`, description: `${NomeDoBot}`},
    {title: "Glue", rowId: `${prefix}glue ${q}`, description: `${NomeDoBot}`},
    {title: "1917", rowId: `${prefix}1917 ${q}`, description: `${NomeDoBot}`},
    {title: "Leaves", rowId: `${prefix}leaves ${q}`, description: `${NomeDoBot}`},
]
    },
 {
  title: "𝐏𝐋𝐀𝐐𝐔𝐈𝐍𝐇𝐀𝐒",
  rows: [
{title: "Plaq", rowId: `${prefix}plaq ${q}`, description: `${NomeDoBot}`},
{title: "Plaq2", rowId: `${prefix}plaq2 ${q}`, description: `${NomeDoBot}`},
{title: "Plaq3", rowId: `${prefix}plaq3 ${q}`, description: `${NomeDoBot}`},
{title: "Plaq4", rowId: `${prefix}plaq4 ${q}`, description: `${NomeDoBot}`},
{title: "Plaq5", rowId: `${prefix}plaq5 ${q}`, description: `${NomeDoBot}`},
{title: "Plaq6", rowId: `${prefix}plaq6 ${q}`, description: `${NomeDoBot}`},
]
 }
]
listMessage2 = {
  text: `${NomeDoBot}`,
  footer: `Olá ${pushname}, Essa é minha lista de logos2. Esses são de apenas para uma palavra, ou seja,  ${prefix}batman Saikyo\n\nDono: ${NickDono}\nDono: wa.me/+${setting.numerodono}`,
  title: "𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒",
  buttonText: "𝐶𝐿𝐼𝑄𝑈𝐸 𝐴𝑄𝑈𝐼",
  sections
}
sendMsg = await destiny.sendMessage(from, listMessage2, {quoted: selo})
break


case 'candy':
case 'batman':
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'business':
case 'bear':
case 'sand':
case 'summery':
case 'leaves': {
if (!q) return reply(`Exemplo: ${{prefix} + command} ${NomeDoBot}`) 
reply('loading...')
let link
if (/summery/.test(command)) link = 'https://textpro.me/create-a-summery-sand-writing-text-effect-988.html'
if (/sand/.test(command)) link = 'https://textpro.me/sand-writing-text-effect-online-990.html'
if (/bear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
if (/business/.test(command)) link = 'https://textpro.me/3d-business-sign-text-effect-1078.html'
if (/batman/.test(command)) link = 'https://textpro.me/make-a-batman-logo-online-free-1066.html'
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
Saikyo = `
By ${NomeDoBot} Para minha querida`
let buttons = [
{buttonId: `${prefix}dnd`, buttonText: {displayText: 'OBRIGADO'}, type: 1},
]
let buttonMessage = {
image: { url: anu },
caption: Saikyo,
footer: ``,
buttons: buttons,
}
destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break



//====(JOGO-DA-VELHA-COM-MAQUINA)====\\

case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
imgper = `https://telegra.ph/file/049e80a65e03bcb58c799.jpg`
sendBimg(from, imgper, tttme(pushname, getTTTwins (sender), getTTTdefeats (sender), getTTTties (sender), getTTTpoints (sender)), ' ', [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}])
break

case 'tttrank':
if (!isGroup) return reply(enviar.msg.grupo)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '*🔥Ranking dos melhores players🔥*\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
}
mentioned_jid.push(tictactoe[i].id)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await destiny.sendMessage(from, {text: `*É necessário 3 jogadores para se construir um ranking*`}, {quoted: info})
}
break

case 'jogar':
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`*O jogo não foi iniciado*\n*Digite ${prefix}ttt <dificukdade> para iniciar*`)
} else if (tttset.player != tttset.playertest) {
reply(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
  
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)

} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' && coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`*Diga a cordenada*\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
  
switch (args[0]) {
  
case 'a1':
if (esp.a1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if (esp.a2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if (esp.a3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b1':
if (esp.b1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b2':
if (esp.b2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b3':
if (esp.b3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c1':
if (esp.c1 != "🔲") {
 reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c2':
if (esp.c2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c3':
if (esp.c3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
            
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
              
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
                
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
destiny.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*\n\n *VOCÊ GANHOU ${randomTTTXP}XP*`})
} else {
destiny.sendMessage(from,{text: `*VOCÊ VENCEU, PARABENS*`},)
}

const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
				  
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break

}	
destiny.sendMessage(from, {text: `*Você perdeu*\n\n AGORA VC PAGARÁ: ${randomTTTXP}XP`})
	
} else {
destiny.sendMessage(from, {text: `*Você perdeu*`})
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
				
} else if (Tie()) {
if (isCmd) {
destiny.sendMessage(from, {text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`})
} else {
destiny.sendMessage(from, {text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`})
}

const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
	
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde o tempo de 30 segundos...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de 30 segundos...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = info
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
blat =  `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}\n\nCaso não saiba como jogar digite:\n${prefix}ttthelp`
Nero = await getBuffer('https://telegra.ph/file/eadde679257f4832a7a4b.jpg')
destiny.sendMessage(from, {image: Nero, caption: blat, footer: ``, mentions: [sender]}, {quoted: selo})
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 3000) //30 segundos 
addLimit(sender, daily)
}
break

case 'ttthelp':
if (!isGroup) return reply(enviar.msg.grupo)
img55 = `https://telegra.ph/file/c8ae72ef29360fbc68e69.jpg`
sendBimg(from, img55, ttthelp(prefix), '', [{buttonId: `nd`, buttonText: {displayText: `entendido 🚩`}, type: 1}])
break

//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
mp4 = await getBuffer(a)
destiny.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
fs.unlinkSync(buff)
}
break

case 'rename':
case 'roubar':  
if (!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
destiny.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

case 'calunia':
k = `${body.slice(10)}`
txt1 = k.split("/")[0];
txt2 = k.split("/")[1];
txt3 = k.split("/")[2];
if(!k.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} @marca-a-pessoa/Fala algo como fosse ele/Reação : nossaa..`)
 destiny.sendMessage(from, {text: `${txt3}`},{quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}}).catch(e => {
reply("Error!!")  
})
 break

case 'qr':
if (!SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
bla = fs.readFileSync("auth_info_multi.json")
destiny.sendMessage(from, {document: bla, mimetype: 'document/json', fileName: 'auth_info_multi.json'})
break

//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return destiny.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await destiny.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: selo})
await destiny.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
destiny.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
destiny.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await destiny.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
destiny.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await destiny.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await destiny.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await destiny.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await destiny.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await destiny.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await destiny.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return destiny.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await destiny.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await destiny.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
destiny.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
destiny.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await destiny.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
destiny.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await destiny.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await destiny.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await destiny.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await destiny.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await destiny.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await destiny.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return destiny.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: info})
await destiny.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await destiny.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
destiny.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
destiny.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await destiny.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
destiny.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await destiny.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await destiny.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await destiny.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await destiny.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await destiny.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await destiny.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return destiny.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: info})
await destiny.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await destiny.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
destiny.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
destiny.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await destiny.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
destiny.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await destiny.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await destiny.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await destiny.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await destiny.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await destiny.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await destiny.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if (budy.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(SoDono) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
destiny.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

//////// ANTIFLODE BAN /////////=

if (Banspam.includes(from)){
if (isGroup && !isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && isSpam == undefined){
var nero = { id: sender, contador: 1 }
spam.push(nero)
setTimeout( () => {
spam.splice(isSpam, 1)
}, 3000)
} else if (isGroup && !isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && spam[isSpam].contador < 9){
spam[isSpam].contador += 1
} else if (isGroup && !isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && spam[isSpam].contador >= 9){
reply('olá você acaba de floda muitas msg consecutivamente, por esse motivo você será banido')
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}
} 

/////


//INICIO DE COMANDOS SEM PREFIXO

switch(testat){
}


if (budy.toLowerCase().includes("destiny")){
if (info.key.fromMe) return
anu = await getBuffer('https://telegra.ph/file/8150a1c8fb64406e5919a.mp4')
destiny.sendMessage(from, {video: anu, mimetype: 'video/mp4', caption: `Olá maestro prazer, sou a ${NomeDoBot}-bot, pra utilizar meus comandos aperte o botão logo em baixo...💬`, templateButtons: [{index: 2, quickReplyButton: {displayText: `menu`, id: `${prefix}menu`}}]}, {quoted: info})
}

if (budy.toLowerCase().includes("nero")){
if (info.key.fromMe) return
anu = await getBuffer('https://telegra.ph/file/fdb4966139facca50e447.mp4')
destiny.sendMessage(from, {video: anu, mimetype: 'video/mp4', caption: `Olá Aguarde um momento logo vou responder, caso seja importante mande msg: Wa.me//559185841876 💬`, templateButtons: [{index: 2, quickReplyButton: {displayText: `menu`, id: `${prefix}menu`}}]}, {quoted: info})
}

if (budy.includes("bot corno") || (budy.includes("Bot corno"))){
reply("Corno é você, seu animal")
}

if (budy.includes("adivinha meu celular") || (budy.includes("Adivinha meu celular") || (budy.includes("Adivinha Meu celular") || (budy.includes("Adivinha Meu Celular") || (budy.includes("bot qual meu celular")))) )){
adivinha = info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅';
await destiny.sendMessage(from, {text: adivinha}, {quoted: info})
}

if(messagesC.includes('exec')) {
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

if (messagesC == "corno"){
tujuh = fs.readFileSync('./audios/corno.mp3');
await destiny.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

//===========(ANTILINK)============\\

switch(ants){
} 

 //======[--ANTI PALAVRÃO --]=======\\
 
if (isGroup && isPalavrao) { 
 if (palavra.includes(budy)) {
 if (!isGroupAdmins) {
 destiny.sendMessage(from, {text: `[🗿] SEM XINGAMENTOS [🗿]`}, {quoted : info}) 
setTimeout( () => {
destiny.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
destiny.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
destiny.sendMessage(from, {text: `[🗣️] ANTI PALAVRÃO [🗣️]\nVocê será banido do gp, Na proxima tenha ética ao falar no grupo‼️`}, {quoted : info}).catch(e => {
destiny.sendMessage(from, {text: `infelizmente, não sou um administrador desse grupo, então não posso te remover o indivíduo [ 🤬 ]`}, {quoted : info})
})       							
}, 0)
} else {
return reply(`somente o ${pushname} tem permissão`)
}
}
}

//===========(SIMIH-2)============\\

if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)

if (sami) destiny.sendMessage(from, {text: sami, thumbnail: fs.readFileSync('./logos/logo2.jpg', 'base64')}, {quoted: info});
}
}

 //===========(SIMIH-1)===========\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}

//================================\\
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
if (isCmd && lista.ativada == true){
lista.ativada = false
setTimeout( () => {
lista.ativada = true
}, 20000)
uptime = process.uptime()
try {
ppimg = await destiny.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
if(isCmd){
texto = `
┌┤
││⎔ suário: ${pushname}
││⎔ Comando Inexistente.
││⎔ Data: ${date}
││⎔ Hora: ${hora2}
└┤`
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'MENU COMPLETO'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: texto,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/818eac82842c6fe487133.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await destiny.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
}




//=================================\\

}
} catch (erro) {
console.log(erro)
}
})

destiny.ev.on('connection.update', (update) => {
require("./conect.js")(destiny, update)
})

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('A index foi editada, irei reiniciar..'));
process.exit()
}
})

fs.watchFile('./dono/settings.json', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('settings.json foi editado, irei reiniciar..'));
process.exit()
}
})

fs.watchFile('./dono/nescessario.json', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('nescessario.json foi editado, irei reiniciar..'));
process.exit()
}
})

fs.watchFile('./conect.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('conect.js foi editado, irei reiniciar..'));
process.exit()
}
})
 
fs.watchFile('./consts-func.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('consts-func.js foi editado, irei reiniciar..'));
process.exit()
}
}) 
 
}
  
startAle()

module.exports = {
startAle
}