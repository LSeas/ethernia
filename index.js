const Discord = require("discord.js")
const client = new Discord.Client()
client.commands = new Discord.Collection();


let prefix = "."

client.login(process.env.TOKEN)

client.on("ready", () => {
    console.log("Je suis désormais connectée Théo !")
    client.user.setStatus("online")
    client.user.setActivity("LSeas c'est le best ! <3 ", (type => 3))
})

client.on("message", message => {
    // Invitation
    if (message.content === prefix + "invite")
        message.reply("https://discordapp.com/oauth2/authorize?client_id=637003496607973457&scope=bot&permissions=8")


    // Help
    if (message.content === prefix + "help")
           message.channel.send({embed: {
               color: 3447003,
               author: {
                   name: client.user.usename,
                   icon_url: client.user.avatarURL
               },
               fields: [{
                   name: "Lien d'invitation",
                   value: ".invite",
               },
               {
                   name: "Votre avatar",
                   value: ".avatar",
               },
               {
                   name: "Nombre aléatoire",
                   value: ".roll <nombre>",
               },
               {
                   name: "Réactions",
                   value: ".hug | .sleep | .handholding | .kiss",
               },
               {
                   name: "Love Calculator",
                   value: ".ship",
               }
                ],
               timestamp: new Date(),
               footer: {
                   icon_url: client.user.avatarURl
               }
           }});


    // Avatar
    if (message.content === prefix + "avatar")
        message.reply("Voici ton bel Avatar ! " + message.author.avatarURL)


    // Je sais pas mdr
    if (message.content === "T'es d'accord Ethernia ?")
        message.reply("Evidemment !")



    //Roll aléatoire + Critique  
    const roll = message.content.split(' ')
    var array = (Number(roll[1]))
    var random = (Math.floor(Math.random() * array) + 1)
    if (message.content.startsWith(prefix + "roll"))
        message.reply("Tu as obtenu " + random)
        if (random * 100 / array < 10 )
        {
            message.channel.send("Échec Critique !")
        }
        if (random * 100 / array > 90 )
        {
            message.channel.send("Réussite Critique !")
        }


    //Love Calc
    if (message.content.startsWith(prefix + "ship")){
        LovRand = Math.floor (Math.random() * (100 - 1 + 1)) + 1;
        message.channel.send("**" + message.author.username + "** aime à " + LovRand + "% :heart: " + message.mentions.members.first())
        if ( LovRand < 10){
            message.channel.send("Oula, je pense que tu devrais trouver quelqu'un d'autre :broken_heart:")
        }
        if (LovRand > 90){
            message.channel.send("Wow, de vrais tourteraux !")
        }
    }

    //Kiss
      if (message.content.startsWith(prefix + "kiss")) {
        number = 5;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " est super mignion avec " + message.mentions.members.first() );
        message.channel.send ( {files: ["./Gifs/Kiss/" + imageNumber + ".gif"]} )
}


    //Hug
    if (message.content.startsWith(prefix + "hug")) {
        number = 4;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send(message.author.username + " prends dans ses bras " + message.mentions.members.first() );
        message.channel.send ( {files: ["./Gifs/Hug/" + imageNumber + ".gif"]} )
}


    //Sleep
    if (message.content.startsWith(prefix + "sleep")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send( " Chuuuut ! " + message.author.username + " et " + message.mentions.members.first() + " dorment ! ");
        message.channel.send ( {files: ["./Gifs/Sleep/" + imageNumber + ".gif"]} )
}

    //Handholding
if (message.content.startsWith(prefix + "handholding")) {
        number = 1;
       imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
       message.channel.send(message.author.username + " prends la main de " + message.mentions.members.first() );
      message.channel.send ( {files: ["./Gifs/Handholding/" + imageNumber + ".gif"]} )
}

    //Calcul de roll

        //Roll de base
        if (message.content.startsWith(prefix + "myroll")){
            var aujourdhui = new Date();
            var heures = aujourdhui.getUTCHours() + 1;
            var MonRoll = 0
            var MonRollForce = 0
            var MonRollAgilité = 0
            var MonRollPrécision = 0
            var MonRollDéfense = 0
            var MonRollMagie = 0
            var bete = 0
            var bete2 = 0
            var bete3 = 0
            var bete4 = 0
            var bete5 = 0
            if (message.member.roles.some(role => role.name === '『🙏』Parrain / Marraine')){
                MonRoll = MonRoll + 10000
            }
            if (message.member.roles.some(role => role.name === '『👑』Souverain de Faction')){
                MonRoll = MonRoll + 7500
            }
            if (message.member.roles.some(role => role.name === '『💠』Séraphin')){
                MonRoll = MonRoll + 5000
            }
            if (message.member.roles.some(role => role.name === '『🏛』Pilier')){
                MonRoll = MonRoll + 5000
            }
            if (message.member.roles.some(role => role.name === '『💎』Principauté')){
                MonRoll = MonRoll + 2500
            }
            if (message.member.roles.some(role => role.name === '『🔗』Domination')){
                MonRoll = MonRoll + 2500
            }
            if (message.member.roles.some(role => role.name === '『👥』Membre Confirmé')){
                MonRoll = MonRoll + 1000
            }
            if (message.member.roles.some(role => role.name === '『👥』Apprenti Etherion')){
                MonRoll = MonRoll + 500
            }
            if (message.member.roles.some(role => role.name === '『👥』Apprenti Asturoth')){
                MonRoll = MonRoll + 500
            }
            if (message.member.roles.some(role => role.name === '『∭』Dieu Suprême')){
                MonRoll = MonRoll + 20000
            }
            if (message.member.roles.some(role => role.name === '『∬』Dieu Majeur')){
                MonRoll = MonRoll + 10000
            }
            if (message.member.roles.some(role => role.name === '『✩』Dieu Mineur')){
                MonRoll = MonRoll + 5000
            }
            if (message.member.roles.some(role => role.name === '『✩』Demi Dieu')){
                MonRoll = MonRoll + 2500
            }
            if (message.member.roles.some(role => role.name === 'Ω')){
                MonRoll = MonRoll + 25000
            }
            if (message.member.roles.some(role => role.name === 'α')){
                MonRoll = MonRoll + 20000
            }
            if (message.member.roles.some(role => role.name === 'β')){
                MonRoll = MonRoll + 15000
            }
            if (message.member.roles.some(role => role.name === 'Δ')){
                MonRoll = MonRoll + 12500
            }
            if (message.member.roles.some(role => role.name === 'X')){
                MonRoll = MonRoll + 10000
            }
            if (message.member.roles.some(role => role.name === 'Y')){
                MonRoll = MonRoll + 7500
            }
            if (message.member.roles.some(role => role.name === 'Z')){
                MonRoll = MonRoll + 6000
            }
            if (message.member.roles.some(role => role.name === 'SSSS')){
                MonRoll = MonRoll + 5000
            }
            if (message.member.roles.some(role => role.name === 'SSS')){
                MonRoll = MonRoll + 4000
            }
            if (message.member.roles.some(role => role.name === 'SS')){
                MonRoll = MonRoll + 3000
            }
            if (message.member.roles.some(role => role.name === 'S')){
                MonRoll = MonRoll + 2000
            }
            if (message.member.roles.some(role => role.name === 'A')){
                MonRoll = MonRoll + 1000
            }
            if (message.member.roles.some(role => role.name === 'B')){
                MonRoll = MonRoll + 800
            }
            if (message.member.roles.some(role => role.name === 'C')){
                MonRoll = MonRoll + 600
            }
            if (message.member.roles.some(role => role.name === 'D')){
                MonRoll = MonRoll + 400
            }
            if (message.member.roles.some(role => role.name === 'E')){
                MonRoll = MonRoll + 200
            }
            if (message.member.roles.some(role => role.name === '『✧』Esprit')){
                MonRollForce = MonRollForce - 500
            }
            if (message.member.roles.some(role => role.name === '『👥』Membre des Dix Commandements')){
                if (message.member.roles.some(role => role.name === 'S')){    
                    MonRoll = MonRoll + 250
                }
                if (message.member.roles.some(role => role.name === 'SS')){
                    MonRoll = MonRoll + 500
                }
                if (message.member.roles.some(role => role.name === 'SSS')){
                    MonRoll = MonRoll + 1000
                }
                if (message.member.roles.some(role => role.name === 'SSSS')){
                    MonRoll = MonRoll + 1000
                }
                if (message.member.roles.some(role => role.name === 'Z')){
                    MonRoll = MonRoll + 2500
                }
                if (message.member.roles.some(role => role.name === 'X')){
                    MonRoll = MonRoll + 5000
                }
                if (message.member.roles.some(role => role.name === 'Δ')){
                    MonRoll = MonRoll + 10000
                }
                if (message.member.roles.some(role => role.name === 'β')){
                    MonRoll = MonRoll + 10000
                }
                if (message.member.roles.some(role => role.name === 'α')){
                    MonRoll = MonRoll + 10000
                }
                if (message.member.roles.some(role => role.name === 'Ω')){
                    MonRoll = MonRoll + 10000
                }}
            if (message.member.roles.some(role => role.name === '『₪』Chef des Dix Commandements')){
                if (message.member.roles.some(role => role.name === 'S')){
                    MonRoll = MonRoll + 500
                }
                if (message.member.roles.some(role => role.name === 'SS')){
                    MonRoll = MonRoll + 1000
                }
                if (message.member.roles.some(role => role.name === 'SSS')){
                    MonRoll = MonRoll + 2500
                }
                if (message.member.roles.some(role => role.name === 'SSS')){
                    MonRoll = MonRoll + 2500
                }
                if (message.member.roles.some(role => role.name === 'Z')){
                    MonRoll = MonRoll + 5000
                }
                if (message.member.roles.some(role => role.name === 'X')){
                    MonRoll = MonRoll + 10000
                }
                if (message.member.roles.some(role => role.name === 'Δ')){
                    MonRoll = MonRoll + 15000
                }
                if (message.member.roles.some(role => role.name === 'β')){
                    MonRoll = MonRoll + 15000
                }
                if (message.member.roles.some(role => role.name === 'α')){
                    MonRoll = MonRoll + 15000
                }
                if (message.member.roles.some(role => role.name === 'Ω')){
                    MonRoll = MonRoll + 15000
                }}
            if (message.member.roles.some(role => role.name === '『👥』Membre des Sept Péchés Capitaux')){
                    if (message.member.roles.some(role => role.name === 'S')){    
                        MonRoll = MonRoll + 250
                    }
                    if (message.member.roles.some(role => role.name === 'SS')){
                        MonRoll = MonRoll + 500
                    }
                    if (message.member.roles.some(role => role.name === 'SSS')){
                        MonRoll = MonRoll + 1000
                    }
                    if (message.member.roles.some(role => role.name === 'SSSS')){
                        MonRoll = MonRoll + 1000
                    }
                    if (message.member.roles.some(role => role.name === 'Z')){
                        MonRoll = MonRoll + 2500
                    }
                    if (message.member.roles.some(role => role.name === 'X')){
                        MonRoll = MonRoll + 5000
                    }
                    if (message.member.roles.some(role => role.name === 'Δ')){
                        MonRoll = MonRoll + 10000
                    }
                    if (message.member.roles.some(role => role.name === 'β')){
                        MonRoll = MonRoll + 10000
                    }
                    if (message.member.roles.some(role => role.name === 'α')){
                        MonRoll = MonRoll + 10000
                    }
                    if (message.member.roles.some(role => role.name === 'Ω')){
                        MonRoll = MonRoll + 10000
                    }}
            if (message.member.roles.some(role => role.name === '『₪』Chef des Sept Péchés Capitaux')){
                    if (message.member.roles.some(role => role.name === 'S')){
                        MonRoll = MonRoll + 500
                    }
                    if (message.member.roles.some(role => role.name === 'SS')){
                        MonRoll = MonRoll + 1000
                    }
                    if (message.member.roles.some(role => role.name === 'SSS')){
                        MonRoll = MonRoll + 2500
                    }
                    if (message.member.roles.some(role => role.name === 'SSSS')){
                        MonRoll = MonRoll + 2500
                    }
                    if (message.member.roles.some(role => role.name === 'Z')){
                        MonRoll = MonRoll + 5000
                    }
                    if (message.member.roles.some(role => role.name === 'X')){
                        MonRoll = MonRoll + 10000
                    }
                    if (message.member.roles.some(role => role.name === 'Δ')){
                        MonRoll = MonRoll + 15000
                    }
                    if (message.member.roles.some(role => role.name === 'β')){
                        MonRoll = MonRoll + 15000
                    }
                    if (message.member.roles.some(role => role.name === 'α')){
                        MonRoll = MonRoll + 15000
                    }
                    if (message.member.roles.some(role => role.name === 'Ω')){
                        MonRoll = MonRoll + 15000
                    }}
            //Escouades

            if (message.member.roles.some(role => role.name === '『♦️』Carreau')){
                if (message.member.roles.some(role => role.name === '『『👥』Chiffre / Soldat')){
                    MonRollForce = MonRollForce + 250
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♦️』Carreau')){
                if (message.member.roles.some(role => role.name === '『V』Valet / Sergent')){
                    MonRollForce = MonRollForce + 500
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♦️』Carreau')){
                if (message.member.roles.some(role => role.name === '『Q』Dame / Lieutenant')){
                    MonRollForce = MonRollForce + 750
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♦️』Carreau')){
                if (message.member.roles.some(role => role.name === '『K』Roi / Commandant')){
                    MonRollForce = MonRollForce + 1000
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♦️』Carreau')){
                if (message.member.roles.some(role => role.name === '『A』As / Général')){
                    MonRollForce = MonRollForce + 2000
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♠️』Pique')){
                if (message.member.roles.some(role => role.name === '『『👥』Chiffre / Soldat')){
                    MonRollForce = MonRollForce + 250
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♠️』Pique')){
                if (message.member.roles.some(role => role.name === '『V』Valet / Sergent')){
                    MonRollForce = MonRollForce + 500
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♠️』Pique')){
                if (message.member.roles.some(role => role.name === '『Q』Dame / Lieutenant')){
                    MonRollForce = MonRollForce + 750
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♠️』Pique')){
                if (message.member.roles.some(role => role.name === '『K』Roi / Commandant')){
                    MonRollForce = MonRollForce + 1000
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♠️』Pique')){
                if (message.member.roles.some(role => role.name === '『A』As / Général')){
                    MonRollForce = MonRollForce + 2000
                
                }
            }
            if (message.member.roles.some(role => role.name === '『❤』Cœur')){
                if (message.member.roles.some(role => role.name === '『『👥』Chiffre / Soldat')){
                    MonRollMagie = MonRollMagie + 250
                
                }
            }
            if (message.member.roles.some(role => role.name === '『❤』Cœur')){
                if (message.member.roles.some(role => role.name === '『V』Valet / Sergent')){
                    MonRollMagie = MonRollMagie + 500
                    
                }
            }
            if (message.member.roles.some(role => role.name === '『❤』Cœur')){
                if (message.member.roles.some(role => role.name === '『Q』Dame / Lieutenant')){
                    MonRollMagie = MonRollMagie + 750
                           
                }
            }
            if (message.member.roles.some(role => role.name === '『❤』Cœur')){
                if (message.member.roles.some(role => role.name === '『K』Roi / Commandant')){
                    MonRollMagie = MonRollMagie + 10000
                
                }
            }
            if (message.member.roles.some(role => role.name === '『❤』Cœur')){
                if (message.member.roles.some(role => role.name === '『A』As / Général')){
                    MonRollMagie = MonRollMagie + 2000
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♣️』Trèfle')){
                if (message.member.roles.some(role => role.name === '『『👥』Chiffre / Soldat')){
                    MonRollMagie = MonRollMagie + 250
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♣️』Trèfle')){
                if (message.member.roles.some(role => role.name === '『V』Valet / Sergent')){
                    MonRollMagie = MonRollMagie + 500
                    
                }
            }
            if (message.member.roles.some(role => role.name === '『♣️』Trèfle')){
                if (message.member.roles.some(role => role.name === '『Q』Dame / Lieutenant')){
                    MonRollMagie = MonRollMagie + 750
                           
                }
            }
            if (message.member.roles.some(role => role.name === '『♣️』Trèfle')){
                if (message.member.roles.some(role => role.name === '『K』Roi / Commandant')){
                    MonRollMagie = MonRollMagie + 10000
                
                }
            }
            if (message.member.roles.some(role => role.name === '『♣️』Trèfle')){
                if (message.member.roles.some(role => role.name === '『A』As / Général')){
                    MonRollMagie = MonRollMagie + 2000
                
                }
            }
            if (message.member.roles.some(role => role.name === '『🔶️』Altariel')){
                if (message.member.roles.some(role => role.name === '『『👥』Chiffre / Soldat')){
                    MonRollAgilité = MonRollAgilité + 250
                
                }
            }
            if (message.member.roles.some(role => role.name === '『🔶️』Altariel')){
                if (message.member.roles.some(role => role.name === '『V』Valet / Sergent')){
                    MonRollAgilité = MonRollAgilité + 500
                    
                }
            }
            if (message.member.roles.some(role => role.name === '『『🔶️』Altariel')){
                if (message.member.roles.some(role => role.name === '『Q』Dame / Lieutenant')){
                    MonRollAgilité = MonRollAgilité + 750

                }
            }
            if (message.member.roles.some(role => role.name === '『🔶️』Altariel')){
                if (message.member.roles.some(role => role.name === '『K』Roi / Commandant')){
                    MonRollAgilité = MonRollAgilité + 1000
                
                }
            }

            if (message.member.roles.some(role => role.name === '『🔶️』Altariel')){
                if (message.member.roles.some(role => role.name === '『A』As / Général')){
                    MonRollAgilité = MonRollAgilité + 2000
                
                }
            }
            if (message.member.roles.some(role => role.name === '『🔷️』Inquisition')){
                if (message.member.roles.some(role => role.name === '『『👥』Chiffre / Soldat')){
                    MonRollAgilité = MonRollAgilité + 250
                
                }
            }
            if (message.member.roles.some(role => role.name === '『🔷️』Inquisition')){
                if (message.member.roles.some(role => role.name === '『V』Valet / Sergent')){
                    MonRollAgilité = MonRollAgilité + 500
                    
                }
            }
            if (message.member.roles.some(role => role.name === '『『🔷️』Inquisition')){
                if (message.member.roles.some(role => role.name === '『Q』Dame / Lieutenant')){
                    MonRollAgilité = MonRollAgilité + 750
                    
                }
            }
            if (message.member.roles.some(role => role.name === '『🔷️』Inquisition')){
                if (message.member.roles.some(role => role.name === '『K』Roi / Commandant')){
                    MonRollAgilité = MonRollAgilité + 1000
                
                }
            }

            if (message.member.roles.some(role => role.name === '『🔷️』Inquisition')){
                if (message.member.roles.some(role => role.name === '『A』As / Général')){
                    MonRollAgilité = MonRollAgilité + 2000
                
                }
            }
            
            //Roll Force
            if (message.member.roles.some(role => role.name === '『👊』Force Ω')){
                MonRollForce = MonRollForce + 20000
            }
            if (message.member.roles.some(role => role.name === '『👊』Force α')){
                MonRollForce = MonRollForce + 15000
            }
            if (message.member.roles.some(role => role.name === '『👊』Force β')){
                MonRollForce = MonRollForce + 10000
            }
            if (message.member.roles.some(role => role.name === '『👊』Force Δ')){
                MonRollForce = MonRollForce + 75000
            }
            if (message.member.roles.some(role => role.name === '『👊』Force X')){
                MonRollForce = MonRollForce + 5000
            }
            if (message.member.roles.some(role => role.name === '『👊』Force Y')){
                MonRollForce = MonRollForce + 4000
            }
            if (message.member.roles.some(role => role.name === '『👊』Force Z')){
                MonRollForce = MonRollForce + 3000
            }
            if (message.member.roles.some(role => role.name === '『👊』Force SSSS')){
                MonRollForce = MonRollForce + 2000
            }
            if (message.member.roles.some(role => role.name === '『👊』Force SSS')){
                MonRollForce = MonRollForce + 1500
            }
            if (message.member.roles.some(role => role.name === '『👊』Force SS')){
                MonRollForce = MonRollForce + 1000
            }
            if (message.member.roles.some(role => role.name === '『👊』Force S')){
                MonRollForce = MonRollForce + 750
            }
            if (message.member.roles.some(role => role.name === '『👊』Force A')){
                MonRollForce = MonRollForce + 500
            }
            if (message.member.roles.some(role => role.name === '『👊』Force B')){
                MonRollForce = MonRollForce + 400
            }
            if (message.member.roles.some(role => role.name === '『👊』Force C')){
                MonRollForce = MonRollForce + 300
            }
            if (message.member.roles.some(role => role.name === '『👊』Force D')){
                MonRollForce = MonRollForce + 200
            }
            if (message.member.roles.some(role => role.name === '『👊』Force E')){
                MonRollForce = MonRollForce + 100
            }
            if (message.member.roles.some(role => role.name === '『👊』Prestige 1')){
                MonRollForce = MonRollForce + 750
            }
            if (message.member.roles.some(role => role.name === '『👊』Prestige 2')){
                MonRollForce = MonRollForce + 2500
            }
            if (message.member.roles.some(role => role.name === '『👊』Prestige 3')){
                MonRollForce = MonRollForce + 6000
            }
            //roll Agilité
            if (message.member.roles.some(role => role.name === '『💨』Agilité Ω')){
                MonRollAgilité = MonRollAgilité + 20000
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité α')){
                MonRollAgilité = MonRollAgilité + 15000
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité β')){
                MonRollAgilité = MonRollAgilité + 10000
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité Δ')){
                MonRollAgilité = MonRollAgilité + 7500
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité X')){
                MonRollAgilité = MonRollAgilité + 5000
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité Y')){
                MonRollAgilité = MonRollAgilité + 4000
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité Z')){
                MonRollAgilité = MonRollAgilité + 3000
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité SSSS')){
                MonRollAgilité = MonRollAgilité + 2000
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité SSS')){
                MonRollAgilité = MonRollAgilité + 1500
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité SS')){
                MonRollAgilité = MonRollAgilité + 1000
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité S')){
                MonRollAgilité = MonRollAgilité + 750
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité A')){
                MonRollAgilité = MonRollAgilité + 500
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité B')){
                MonRollAgilité = MonRollAgilité + 400
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité C')){
                MonRollAgilité = MonRollAgilité + 300
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité D')){
                MonRollAgilité = MonRollAgilité + 200
            }
            if (message.member.roles.some(role => role.name === '『💨』Agilité E')){
                MonRollAgilité = MonRollAgilité + 100
            }
            if (message.member.roles.some(role => role.name === '『💨』Prestige 1')){
                MonRollAgilité = MonRollAgilité + 750
            }
            if (message.member.roles.some(role => role.name === '『💨』Prestige 2')){
                MonRollAgilité = MonRollAgilité + 2500
            }
            if (message.member.roles.some(role => role.name === '『💨』Prestige 3')){
                MonRollAgilité= MonRollAgilité + 6000
            }

            //roll Précision
            if (message.member.roles.some(role => role.name === '『🏹』Précision Ω')){
                MonRollPrécision = MonRollPrécision + 20000
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision α')){
                MonRollPrécision = MonRollPrécision + 15000
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision β')){
                MonRollPrécision = MonRollPrécision + 10000
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision Δ')){
                MonRollPrécision = MonRollPrécision + 7500
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision X')){
                MonRollPrécision = MonRollPrécision + 5000
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision Y')){
                MonRollPrécision = MonRollPrécision + 4000
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision Z')){
                MonRollPrécision = MonRollPrécision + 3000
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision SSSS')){
                MonRollPrécisioné = MonRollPrécision + 2000
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision SSS')){
                MonRollPrécision = MonRollPrécision + 1500
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision SS')){
                MonRollPrécision = MonRollPrécision + 1000
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision S')){
                MonRollPrécision = MonRollPrécision + 750
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision A')){
                MonRollPrécision = MonRollPrécision + 500
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision B')){
                MonRollPrécision = MonRollPrécision + 400
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision C')){
                MonRollPrécision = MonRollAgilité + 300
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision D')){
                MonRollPrécision = MonRollPrécision + 200
            }
            if (message.member.roles.some(role => role.name === '『🏹』Précision E')){
                MonRollPrécision = MonRollPrécision + 100
            }
            if (message.member.roles.some(role => role.name === '『🏹』Prestige 1')){
                MonRollPrécision = MonRollPrécision + 750
            }
            if (message.member.roles.some(role => role.name === '『🏹』Prestige 2')){
                MonRollPrécision = MonRollPrécision + 2500
            }
            if (message.member.roles.some(role => role.name === '『🏹』Prestige 3')){
                MonRollPrécision = MonRollPrécision + 6000
            }

            //roll Défense
            if (message.member.roles.some(role => role.name === '『🛡』Défense Ω')){
                MonRollDéfense = MonRollDéfense + 20000
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense α')){
                MonRollDéfense = MonRollDéfense + 15000
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense β')){
                MonRollDéfense = MonRollDéfense + 10000
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense Δ')){
                MonRollDéfense = MonRollDéfense + 7500
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense X')){
                MonRollDéfense = MonRollDéfense + 5000
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense Y')){
                MonRollDéfense = MonRollDéfense + 4000
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense Z')){
                MonRollDéfense = MonRollDéfense + 3000
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense SSSS')){
                MonRollDéfense = MonRollDéfense + 2000
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense SSS')){
                MonRollDéfense = MonRollDéfense + 1500
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense SS')){
                MonRollDéfense = MonRollDéfense + 1000
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense S')){
                MonRollDéfense = MonRollDéfense + 750
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense A')){
                MonRollDéfense = MonRollDéfense + 500
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense B')){
                MonRollDéfense = MonRollDéfense + 400
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense C')){
                MonRollDéfense = MonRollDéfense + 300
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense D')){
                MonRollDéfense = MonRollDéfense + 200
            }
            if (message.member.roles.some(role => role.name === '『🛡』Défense E')){
                MonRollDéfense = MonRollDéfense + 100
            }
            if (message.member.roles.some(role => role.name === '『🛡』Prestige 1')){
                MonRollDéfense = MonRollDéfense + 750
            }
            if (message.member.roles.some(role => role.name === '『🛡』Prestige 2')){
                MonRollDéfense = MonRollDéfense + 2500
            }
            if (message.member.roles.some(role => role.name === '『🛡』Prestige 3')){
                MonRollDéfense = MonRollDéfense + 6000
            }
            
            //roll Magie
            if (message.member.roles.some(role => role.name === '『🔮』Magie Ω')){
                MonRollMagie = MonRollMagie + 20000
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie α')){
                MonRollMagie = MonRollMagie + 15000
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie β')){
                MonRollMagie = MonRollMagie + 10000
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie Δ')){
                MonRollMagie = MonRollMagie + 7500
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie X')){
                MonRollMagie = MonRollMagie + 5000
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie Y')){
                MonRollMagie = MonRollMagie + 4000
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie Z')){
                MonRollMagie = MonRollMagie + 3000
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie SSSS')){
                MonRollMagie = MonRollMagie + 2000
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie SSS')){
                MonRollMagie = MonRollMagie + 1500
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie SS')){
                MonRollMagie = MonRollMagie + 1000
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie S')){
                MonRollMagie = MonRollMagie + 750
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie A')){
                MonRollMagie = MonRollMagie + 500
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie B')){
                MonRollMagie = MonRollMagie + 400
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie C')){
                MonRollMagie = MonRollMagie + 300
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie D')){
                MonRollMagie = MonRollMagie + 200
            }
            if (message.member.roles.some(role => role.name === '『🔮』Magie E')){
                MonRollMagie = MonRollMagie + 100
            }
            if (message.member.roles.some(role => role.name === '『🔮』Prestige 1')){
                MonRollMagie = MonRollMagie + 750
            }
            if (message.member.roles.some(role => role.name === '『🔮』Prestige 2')){
                MonRollMagie = MonRollMagie + 2500
            }
            if (message.member.roles.some(role => role.name === '『🔮』Prestige 3')){
                MonRollMagie = MonRollMagie + 6000
            }
            message.channel.send({embed: {
                color: 0654,
                author: {
                    name: client.user.usename,
                    icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Magie",
                    value: MonRollMagie + MonRoll,
                },
                {
                    name: "Défense",
                    value: MonRollDéfense + MonRoll,
                },
                {
                    name: "Force",
                    value: MonRollForce + MonRoll,
                },
                {
                    name: "Agilité",
                    value: MonRollAgilité + MonRoll,
                },
                {
                    name: "Précision",
                    value: MonRollPrécision + MonRoll,
                },
                {
                    name: "Attention !",
                    value: "Il sagit de vos roll sans les boost de trésor ou de pouvoir caché !",
                }
                 ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURl
                }
            }});
            if (message.member.roles.some(role => role.name === '『✧』Homme-Bête')){
                if (heures >= 10 ){
                    message.channel.send(" Pour vous mes chers hommes bêtes, vous bénéfissiez jusqu'à 6h d'un boost de 5% sur vos roll !")
                    var bete = (MonRollMagie + MonRoll) * ( 1 + 5 / 100)
                    var bete2 = (MonRollDéfense + MonRoll) * ( 1 + 5 / 100)
                    var bete3 = (MonRollForce + MonRoll) * ( 1 + 5 / 100)
                    var bete4 = (MonRollAgilité + MonRoll) * ( 1 + 5 / 100)
                    var bete5 = (MonRollPrécision + MonRoll) * ( 1 + 5 / 100)
                    message.channel.send({embed: {
                        color: 0654,
                        author: {
                            name: client.user.usename,
                            icon_url: client.user.avatarURL
                        },
                        fields: [{
                            name: "Magie",
                            value: Math.floor(bete),
                        },
                        {
                            name: "Défense",
                            value: Math.floor(bete2),
                        },
                        {
                            name: "Force",
                            value: Math.floor(bete3),
                        },
                        {
                            name: "Agilité",
                            value: Math.floor(bete4),
                        },
                        {
                            name: "Précision",
                            value: Math.floor(bete5),
                        },
                        {
                            name: "Attention !",
                            value: "Il sagit de vos roll sans les boost de trésor ou de pouvoir caché !",
                        }
                         ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURl
                        }
                    }});
                if (heures <= 6 ){
                    message.channel.send("Pour vous mes chers hommes bêtes,  vous bénéficiez de 19h jusqu'à 6h d'un boost de 5% sur vos roll !")
                    var bete = (MonRollMagie + MonRoll) * ( 1 + 5 / 100)
                    var bete2 = (MonRollDéfense + MonRoll) * ( 1 + 5 / 100)
                    var bete3 = (MonRollForce + MonRoll) * ( 1 + 5 / 100)
                    var bete4 = (MonRollAgilité + MonRoll) * ( 1 + 5 / 100)
                    var bete5 = (MonRollPrécision + MonRoll) * ( 1 + 5 / 100)
                    message.channel.send({embed: {
                            color: 0654,
                            author: {
                                name: client.user.usename,
                                icon_url: client.user.avatarURL
                            },
                            fields: [{
                                name: "Magie",
                                value: Math.floor(bete),
                            },
                            {
                                name: "Défense",
                                value: Math.floor(bete2),
                            },
                            {
                                name: "Force",
                                value: Math.floor(bete3),
                            },
                            {
                                name: "Agilité",
                                value: Math.floor(bete4),
                            },
                            {
                                name: "Précision",
                                value: Math.floor(bete5),
                            },
                            {
                                name: "Attention !",
                                value: "Il sagit de vos roll sans les boost de trésor ou de pouvoir caché !",
                            }
                             ],
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURl
                            }
                        }});
            if (message.member.roles.some(role => role.name === '『✧』Homme-Bête')){
                message.channel.send("Pour rappel, vous bénéfissiez d'un bonus de 700")
            }
                    
        }}}}});
