const Discord = require('discord.js')
const bot = new Discord.Client();

const token = 'NzI5NjA5MzYzMDUxOTA1MDY2.XwLb2w.7Z4_l2rp0uB5l1sNPgCSPt4KDwI';

const PREFIX = '>';



var version = 'ver 0.0.1';







bot.on('ready', () =>{
    console.log('Ready To Play!');
    function randomStatus() {
        let status = ["Sehat semua kan?", ">//<", "Aku mau jalan jalan", "Oi!", "Lockdon jadi nolep"]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: "PLAYING"});

    }; setInterval(randomStatus, 15000)
    
})



bot.on('message', message=>{
    mesage = message.content.toLowerCase();
    let args = mesage.substring(PREFIX.length).split(" ");
    const images = ["https://bit.ly/2B5cBPc", "https://bit.ly/2ZdX7Ae", "https://bit.ly/2Zb8JUz", "https://bit.ly/2YACsHr", "https://bit.ly/2BBGsOZ", "https://bit.ly/2NtsSzS", "https://bit.ly/3dAsSbZ", "https://bit.ly/2Z8T6gE"]
    const image = images[Math.floor(Math.random() * images.length)];
    const atitt = ("https://bit.ly/aatit");
    const unyu = ["https://bit.ly/2AyEMFL", "https://bit.ly/3izTU72", "https://bit.ly/31R8kJY", "https://bit.ly/31NMp6l", "https://bit.ly/3f2J5Z7"]
    const unyu1 = unyu[Math.floor(Math.random() * unyu.length)];
    const ngap = ["aku lagi gabut", "ngeliatin kamu <3", "melihat bintang bintang disana", "main game :>", "ngasih makan kucing :>"]
    const ngap1 = ngap[Math.floor(Math.random() * ngap.length)];
    switch(args[0]){


        

        
        case 'info':
            if(args[1] === 'version'){
                message.channel.send(version)

            }
            else if(args[1] === 'author'){
                message.channel.send('Aku dibuat oleh Faralha!')
            }
            else{
                message.channel.send('Perintah tidak diketahui. Ketik A! help untuk melihat command')
            }
             break;
         //case 'kick':
             if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Kamu gapunya ijinnya kaka <3')
             const user = message.mentions.users.first();
             
             if(user){
                 const member = message.mentions.members.first();  
                 if(member){
                    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Sesama admin jangan saling kick donk :>') 
                    member.kick('Kamu telah melanggar salah satu aturan dan dikeluarkan dari Grealm!').then(() =>{
                         message.channel.send(`\`${user.tag} berhasil dikeluarkan!\``);
                     }).catch(err =>{
                         message.channel.send('Saya gagal menendang player keluar. Gomenne!');
                         console.log(err);
                     });
                 } else{
                     message.channel.send(`Ye kontol orgnya kgk di server ini cukk`)
                 }
             } else{
                 message.channel.send('Orangnya gaada di serper ini su / kosong?!!')
             }
             break;
         case 'poll':
             const Embed = new Discord.MessageEmbed()
             .setColor(1752220)
             .setTitle("Memulai Polling")
             .setDescription("Ketik >poll (yg ingin dipolling) untuk memulai polling!")

             if(!args[1]){
                 message.channel.send(Embed);
                 break;
             }

             let msgArgs = args.slice(1).join(" ");
             message.channel.send("**" + msgArgs + "**").then(messageReaction => {
                 messageReaction.react("👍");
                 messageReaction.react("👎");
                // message.channel.bulkDelete(message.member);
             });
             break;
         case 'help':
             const helpEmbed = new Discord.MessageEmbed()
             .setColor(1752220)
             .setTitle("Command List")
             .addFields(
                 { name : 'info author', value : 'Melihat siapa yg membuat bot ini uWu'},
                 { name : 'info version', value : 'Untuk melihat versi berapakah bot ini uWu'},
                 { name : 'kick', value : '**KHUSUS ADMIN** Berfungsi... ya buat kick lah gmna si uWu'},
                 { name : 'clear', value : 'Buat ngapus message player yang suka ngespam. uWu'},
                 { name : 'poll', value : 'buat ngevote \'iya\' atau \'tidak\' uWu'},
                 { name : 'lagi ngapain', value: 'ngasih tau kamu aku lagi ngapain :3'},
                 

             )
             message.channel.send(helpEmbed);
             break;
         case 'clear':
             if(!args[1]) return message.channel.send('Mau berapa cukk tulisin lah')
             message.channel.bulkDelete(args[1]);
             break;
         case 'nsfw':
             const nsfwEmbed = new Discord.MessageEmbed()
             .setColor(1752220)
             .setTitle("...")
             .setDescription("Jangan diulangin lagi ya kaka :)")
             .setImage(image)
             message.channel.send(nsfwEmbed);
             break;    
         case 'mute' :
            if(!message.member.roles.cache.some(r => r.name === "Staff")) return message.channel.send('Kamu gapunya ijinnya kaka <3')
            else if(args[0]){
                return message.channel.send("Orang mana yang ingin kamu mute?")
            }   
            break;
         case 'slap' :
             
             const slapped1 = new Discord.MessageEmbed()
             .setColor(1752220)  
             .setTitle("Sakiiitt...")
             .setImage(atitt)
             message.channel.send(slapped1);
             break;
         case 'lagi' :
             if(args[1] === 'ngapain'){
                 const gabut = new Discord.MessageEmbed()
                 .setColor(1752220)
                 .setDescription(ngap1)
                 .setImage(unyu1)
                 message.channel.send(gabut);
                 break;
             } message.channel.send("Perintah kurang lengkap.")
             break;  
         case 'test' :
             const Test22 = new Discord.MessageEmbed()
             .setColor(1752220)
             .setTitle("Test")
             .addFields(
                 { name : '>Poll', value : 'Untuk polling'},
                 { name : '>info', value : 'melihat info bot ini'},
                 { name : '>kick', value : 'buat kick member goblok'},
             )
             message.channel.send(Test22);
             break;
         
            
             
             
         
    
            


    }

})


bot.login(token);



