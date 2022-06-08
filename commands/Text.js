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
  }if (message.content === 'กระต่ายม่อน') {
    message.channel.send('https://media.discordapp.net/attachments/742767431759429682/967433200567721984/unknown.png?width=380&height=676');
  }if (message.content === 'ไอจ๋ายขี่ม้า') {
    message.channel.send('https://images-ext-2.discordapp.net/external/ZDJdEGOvez5E658BrbQmJciUDKrgxEgDC3ZkQmpIsrQ/%3Fwidth%3D415%26height%3D676/https/media.discordapp.net/attachments/518654647960076297/967342446839234570/Screenshot_20220423-153305_Video_Player.jpg');
  }if (message.content === 'แมวม่อน') {
    message.channel.send('https://media.discordapp.net/attachments/742767431759429682/967430212230991912/unknown.png?width=380&height=676');
  }if (message.content === 'หมาม่อน') {
    message.channel.send('https://media.discordapp.net/attachments/742767431759429682/967425374231359498/unknown.png?width=380&height=676');
  }if (message.content === 'ชิม้าหัก') {
    message.channel.send('https://media.discordapp.net/attachments/622041735299858452/983378783350435890/unknown.png?width=507&height=676');
  }if (message.content === 'วาซัดกระสอบ') {
    message.channel.send('https://media.discordapp.net/attachments/956211010996420628/984097730379001936/unknown.png');
  }if (message.content === 'วาหลับใน') {
    message.channel.send('https://media.discordapp.net/attachments/956211010996420628/984097841146392636/unknown.png?width=379&height=676g');
  }if (message.content === 'หมา') {
    message.channel.send('https://media.discordapp.net/attachments/956211010996420628/984097552867676160/unknown.png?width=677&height=676');
});
bot.login('OTY3MDg5OTM1OTgxMDk3MDQx.YmLOsA.xDD_sJPBUxz3PoIzHBVdTcl1phc');
