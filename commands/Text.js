const Discord = require('discord.js'); //เรียก discord.js มาใช้
const bot = new Discord.Client();
//event นี้ทำงานเมื่อ login สำเร็จ
bot.on('ready', () => {
  console.log('ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
bot.on('message', message => { 
  if (message.content === '>จ๋าย') {
    message.channel.send('เห้ยยย !! อชิระ วงศ์กระแสมงคล');
  }if (message.content === '1คอ2ไหล่') {
    message.channel.send('ผมก็เลยไหล่มากกว่าคอ หล่อมากกว่าใครไงละ');
  }if (message.content === '>ม่อน') {
    message.channel.send('D kub สิรวิชญ์ วงศ์- เอ้ย ม้าทองคำกุล');
  }if (message.content === '>วา') {
    message.channel.send('D ka ภูริชยา นิ่มนิร-นาม-มงคล');
  }if (message.content === 'ยักษ์') {
    message.reply('ว่าไงคนน่ายัก ><');
  }if (message.content === '>สพล') {
    message.channel.send('คบไม่ได้ ૮ – ﻌ–ა');
  }if (message.content === 'ขับรถระวังหลับใน') {
    message.channel.send('แตถ้านอกใจระวังหลับยาว ');
  }if (message.content === '>เอาออก') {
    message.channel.send('เอาม่อนออกไปจากชีวิตน่าจะดีที่สุด');
  }if (message.content === 'เหนื่อย') {
    message.channel.send('เหนื่อยได้ ท้อได้ แต่อย่ายอมแพ้นะ (•̀o•́)ง');
  }if (message.content === 'กำลังใจ') {
    message.channel.send('สู้ๆนะ คนเก่ง (๑˃̵ᴗ˂̵)و');
  }if (message.content === 'ชีวิต') {
    message.channel.send('แย้อะ');
  }if (message.content === '>นิก') {
    message.channel.send('นกปีกหัก');
  }if (message.content === '>โอ๊ต') {
    message.channel.send('โอ๊ตโสด');
    message.channel.send('โอ๊ตเหงา');
    message.channel.send('โอ๊ตอยากมีแฟน จีบได้ Naaaa');
  }if (message.content === '>ม่วน') {
    message.channel.send('ม่อนนี่ที่รักเค้าเลย (づ ᴗ _ᴗ)づ♡');
  }if (message.content === 'Cringe') {
    message.channel.send('https://media.discordapp.net/attachments/518654647960076297/967333546295435364/unknown.png');
  }if (message.content === 'ไอโอ๊ตเบื่อโลก') {
    message.channel.send('https://media.discordapp.net/attachments/518654647960076297/967335984540819476/0.jpg');
  }if (message.content === 'ไอโอ๊ตน่ายัก') {
    message.channel.send('https://media.discordapp.net/attachments/518654647960076297/967337698970984448/IMG_0616.png?width=672&height=676');
  }if (message.content === 'ไอจ๋าย') {
    message.channel.send('https://media.discordapp.net/attachments/518654647960076297/967337741081788436/IMG_1739.png?width=881&height=676');
  }if (message.content === 'ไอนิกหลับในห้อง') {
    message.channel.send('https://media.discordapp.net/attachments/518654647960076297/967341928700051486/IMG_20190110_124433.jpg?width=507&height=676');
  }if (message.content === 'ไอจ๋ายขี่ม้า') {
    message.channel.send('https://images-ext-2.discordapp.net/external/ZDJdEGOvez5E658BrbQmJciUDKrgxEgDC3ZkQmpIsrQ/%3Fwidth%3D415%26height%3D676/https/media.discordapp.net/attachments/518654647960076297/967342446839234570/Screenshot_20220423-153305_Video_Player.jpg');
  }if (message.content === 'ไอนิกเหนียง') {
    message.channel.send('https://images-ext-1.discordapp.net/external/BgtRFOw3LBNGR-exLg28MB719k5OC9DNSze9k3yWARI/https/media.discordapp.net/attachments/518654647960076297/967343901591625768/Screenshot_2562_0525_233417.png');
  }
});
bot.login('OTY3MDg5OTM1OTgxMDk3MDQx.YmLOsA.xDD_sJPBUxz3PoIzHBVdTcl1phc');