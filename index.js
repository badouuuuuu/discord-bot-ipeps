const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '!';


// On Start start
bot.on('ready', () => { 
  console.log("GEEKSTA Robot is started !");
  bot.user.setActivity('Node.JS'), {type: 'Coding'}
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return  channel.send('Bienvenue sur GEEKSTA server'+ " " + member.displayName
        + '\n' 
        + "\n`!cmd` pour afficher la liste des commandes")
        + '\n';
    }).catch(console.error)
});


// Markdown

bot.on('message', message => {
    if (message.content === '!cmd') {
        message.channel.send ({embed: {
            color: 3447003,
            description: 'La liste des commandes est :' + 
            '\n'+
            '\n`!cmd` --> Affiche la liste des commandes.'+
            '\n`!horaire` --> Affichage du planning 1er Info Gestion.'+
            '\n`!agenda` --> Affichage du planning des examens - UE1'+
            '\n`!exo` --> Affiche les excercices par matieres.'
        }});

          }

// Commande 

    if (message.content === '!horaire') {
        message.channel.send ({embed: {
            title: '1er Info Gestion - Planning',
            description: '` Horaire en .PDF`',
            color: 0xE60A0A,
            url: 'http://www.seraingsup.be/documents/Horaire-info-gestion-2018-2019.pdf',   
        
         } });
      };
    
      if (message.content === '!agenda') {
        message.channel.send ({embed: {
            title: 'Examens: ',
            description: '`Agenda des evaluations`',
            color: 0xC30AE6,
            fields: [
                {
                    name:'Structure des ordinateurs:',
                    value:`
                          -> 27/09/2018 : 
                          -> 30/10/2018 : 
                          -> xx/xx/xx : 
                          `,

                    inline:true
                },

                {
                    name:'Statistiques:',
                    value:`
                            -> xx/xx/xx : 
                            -> xx/xx/xx : 
                            -> xx/xx/xx : 
                    `,
                    inline:false
                },

                {
                    name:'BD & SGBD',
                    value:`
                          -> xx/xx/xx : 
                          -> xx/xx/xx : 
                          -> xx/xx/xx : 
                          `,

                    inline:true
                },

                {
                    name:'Algo & Programmation:',
                    value:`
                          -> xx/xx/xxx : 
                          -> xx/xx/xx : 
                          -> xx/xx/xx : 
                          `,
                    inline:false
                },

            ] 
        
         } });
      };
    



}
  );

bot.login('process.env.TOKEN')  // Token

