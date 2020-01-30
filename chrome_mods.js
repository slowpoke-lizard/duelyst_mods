function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function injector() {
  console.log('Taking a break before injecting scripts...');
  await sleep(8 * 1000);

  // SDK's Gauntlet helper
  // $.getScript('https://duelyst.world/scripts/gauntletHelper.js', function(){});

  // T2k5's Scripts
  $.getScript('https://duelyststats.info/scripts/collectionEnhancement.js', function(){var collectionMod = new CollectionEnhancementModule();});
  $.getScript('https://duelyststats.info/scripts/rememberChat.js', function(){});
  $.getScript('https://duelyststats.info/scripts/UIHelper.js', function(){var UIHelperMod = new UIHelperModule();});
  // $.getScript('https://duelyststats.info/scripts/newstatscript.js', function(){});
  $.getScript('https://duelyststats.info/scripts/autotip.js', function(){});
  $.getScript('https://duelyststats.info/scripts/speedhack.js', function(){});
 //  $.getScript('https://duelyststats.info/scripts/gauntletLogger.js', function(){});
  $.getScript('https://duelyststats.info/scripts/deckTracker.js', function(){});



  setTimeout(function(){SDK.PlayModeFactory.playModes.sandbox.isHiddenInUI = false;},5000);


$(function () {
    var confirmObserver = new MutationObserver(function (mutations) {
        // Auto click OK on confirmation dialogs
        if ($('.confirm-dialog').is(':visible')) {
            $('.confirm-dialog').click();
	    return;
        }
    	// Auto click Got It on Crafting Rewards dialogs
        if ($('.modal-title:contains("Crafting Rewards")').is(':visible')) {
            $('.cancel-dialog').click();
	    return;
        }

    });
    confirmObserver.observe(document.getElementById('app-main'), {attributes: true, childList: false, characterData: false});
});

  const DC_API_KEY = 'api_1524467581512_aRwqHbb14BwViRU';
  $.getScript('https://duelyst.cards/public/dc_tracker.js');

  // Autofill login and password
  $.getScript("https://raw.githubusercontent.com/dwachss/bililiteRange/master/bililiteRange.js");
  setTimeout(function() {$.getScript("https://raw.githubusercontent.com/dwachss/bililiteRange/master/jquery.sendkeys.js");}, 2000);
  setTimeout(function() {
      $('.login-email:first').sendkeys('email@provider.tld');
      $('.login-password:first').sendkeys('patapwouet');
  },1500);



$(function () {
    addCustomDeckTrackerTemplate();
    function addCustomDeckTrackerTemplate() {
        console.log('Trying to add template');
        if (typeof deckTracker !== 'undefined' && Object(deckTracker)) {
            console.log('Adding template');
            // You can send these to me if you think they're good enough for public use
            deckTracker.addTemplate(
            {
                // ***EDITABLE AREA START*** //
                // Human readable name
                name: 'Sample theme',
                // UNIQUE machine name, so you can deckTracker.setTemplate('tracker_sample');
                machineName: 'tracker_sample',
                // Your name
                creator: 'Bepoest',
                styles: {
                    // Tracker container
                    'playerCardsContainer': {
                        'color': '#FFFFFF',
                        'width': '30rem'
                        },
                    // Single card container
                    'card': {
                        'padding': '0.2em 0.1em 0.2em 0.4em',
                        'line-height': '4.5rem',
                        'width': '100%',
                        'height': '5.3rem',
                        // Always use deckTracker.resourcePath if you want to load assets from the game files.
                        'background-image': 'url(' + deckTracker.resourcePath + '/card_backgrounds/deck_builder_card_bg.png)',
                        'background-position': '0',
                        'border-radius': '0 .6rem .6rem 0',
                        'background-size': 'contain',
                        'background-repeat': 'no-repeat'
                        },
                    // These are used a bit differently, only modify the color values here (make all the same value to disable rarity coloring).
                    'colors': {
                        rarity: {
                            '0': '#FFFFFF',
                            '1': '#FFFFFF',
                            '2': '#00faff',
                            '3': '#c78fe1',
                            '4': '#ffd723'
                            },
                        // Cards created by L'Kian etc. are colored by this.
                        extraCard: 'rgb(225, 140, 90)'
                        },
                    // Card count container
                    'cardCount': {
                        'float': 'left',
                        'width': '2rem',
                        'height': '100%',
                        'font-size': '150%'
                        },
                    // Card name container
                    'cardName': {
                        'float': 'left',
                        'height': '100%',
                        'overflow': 'hidden'
                        },
                    // Card cost container
                    'cardCost': {
                        'float': 'left',
                        'width': '3.4rem',
                        'height': '100%',
                        'text-align': 'center',
                        'margin-right': '2rem',
                        'font-size': '120%',
                        'color': '#0C52A1'
                        }
                    }
                // ***EDITABLE AREA END*** //
                }
            );
            } else {
            setTimeout(function () {
                addCustomDeckTrackerTemplate();
                }, 2000);
            }
        }
    });


    function putExpansionNames() {
        var cards = GameDataManager.getInstance().cardsCollection.models;
        for (i = 0; i < cards.length; i++) {
            var card = cards[i].attributes;
            var tag = card.cardSetName;
            
            var tooltip = {"name": tag, "description": ""};
            card.keywordDescriptions.unshift(tooltip);
            // card.description += "<img src='https://d1u5p3l4wpay3k.cloudfront.net/duelyst_gamepedia/thumb/d/dd/Spirit_orb.png/75px-Spirit_orb.png'>";
            // card.description += "<div style='position:relative;padding-bottom:54%'><iframe src='https://gfycat.com/ifr/BruisedFormalIndianpangolin' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0' allowfullscreen></iframe></div><p>";
        }
    }
    setTimeout(putExpansionNames, 8000);



  console.log('Done injecting scripts');
  // alert('Injected script executed');
  
}

const DC_API_KEY = 'api_1524467581512_aRwqHbb14BwViRU';


// Go directly to the play site instead of the welcome screen
if(window.location.href.indexOf("welcome") != -1) {
  window.location.href = "https://play.duelyst.com/";
}


// Do not mess with the replay, it gets broken
if(window.location.href.indexOf("replay") == -1) {
  // Only run if the window location has "play"
  if(window.location.href.indexOf("play.duelyst.com") != -1) {
  	alert("Couper le son");
    injector();
  }
}








function getCardsJSON() {

    console.log("-------------------------------")
    console.log("CARDS")

    var cards = GameDataManager.getInstance().cardsCollection.models
    var data = [];

    for (i = 0; i < cards.length; i++) {
        var attributes = cards[i].attributes

        // Skip Unavailable, Hidden, Token, Training Teacher
        if (attributes.isAvailable === false) { continue }
        if (attributes.isHiddenInCollection) { continue }
        if (attributes.rarityName === "Token") { continue }
        if (attributes.factionId === 200) { continue }

        // Card
        card = {}
        //card.animations = {}
        //card.keywords = []

        // Basic
        card.id = attributes.id
        card.name = attributes.name
        if (!attributes.isGeneral)
            card.mana = attributes.manaCost

        // Category
        if (attributes.isArtifact) { card.category = "artifact" }
        if (attributes.isSpell) { card.category = "spell" }
        if (attributes.isTile) { card.category = "tile" }
        if (attributes.isUnit) { card.category = "unit" }

        // Description
        // Note: Spells have a description, Units do not
        card.description = attributes.description

        // Faction
        //card.faction = attributes.factionName
        //card.factionId = attributes.factionId
        card.faction = attributes.factionName.split(" ")[0]

        // Keywords
        /*var keywords = attributes.keywordDescriptions
         if (keywords.length) {
             for (var ii = 0; ii < keywords.length; ii++) {
                 card.keywords[ii] = keywords[ii].name
             }
         }*/

        // Race
        //card.race = attributes.raceName
        card.setName = attributes.cardSetName
        var type = card.category == 'unit' ? '_active' : '_idle';
        card.localGif = card.id + type;
        switch (card.setName) {
            case "Core":
                card.gifUrl = "https://cards.duelyst.com/img/cards/core/" + card.id + type + ".gif";
                break;
            case "Shim'Zar":
                card.gifUrl = "https://cards.duelyst.com/img/cards/shimzar/" + card.id + type + ".gif";
                break;
            case "Bloodbound":
                card.gifUrl = "https://cards.duelyst.com/img/cards/bloodstorm/" + card.id + type + ".gif";
                break;
            case "Ancients":
                card.gifUrl = "https://cards.duelyst.com/img/cards/unity/" + card.id + type + ".gif";
                break;
            case "Unearthed":
                card.gifUrl = "https://cards.duelyst.com/img/cards/unearthed-prophecy/" + card.id + type + ".gif";
                break;
            case "Immortal":
                card.gifUrl = "https://cards.duelyst.com/img/cards/wartech/" + card.id + type + ".gif";
                break;
            case "Mythron":
                card.gifUrl = "https://cards.duelyst.com/img/cards/coreshatter/" + card.id + type + ".gif";
        }

        // Rarity
        card.rarity = attributes.rarityName
        //card.rarityId = attributes.rarityId

        // Search
        var atk = attributes.atk ? attributes.atk + 'atk ' + attributes.atk + 'attack' : ''
        var hp = attributes.hp ? attributes.hp + 'hp ' + attributes.hp + 'health' : ''
        var manaCost = attributes.manaCost ? attributes.manaCost + 'mana' : ''

        card.searchableContent = attributes.searchableContent + ' ' + atk + ' ' + hp + ' ' + manaCost

        // Type
        if (attributes.raceName) {
            card.type = attributes.raceName
        } else if (attributes.isGeneral) {
            card.type = "General"
        } else if (attributes.isArtifact) {
            card.type = "Artifact"
        } else if (attributes.isSpell) {
            card.type = "Spell"
        } else {
            card.type = "Minion"
        }

        // Unit
        if (card.category == "unit") {
            card.attack = attributes.atk
            card.hp = attributes.hp
        }

        card.isGeneral = attributes.isGeneral

        // Visibility
        //card.isHidden = attributes.isHiddenInCollection

        // Assets
        var animations = attributes.card._private.baseAnimResource
        var animationId = animations["idle"]
        var resource = RSX[animationId]
        //card.frame = resource.framePrefix
        //card.plist = resource.plist
        var sprite = resource.img

        // Slug
        if (card.isGeneral) {
            var url = sprite
            var pieces = url.split("/")
            var filename = pieces[pieces.length - 1]
            var slug = filename.split(".")[0]
            card.slug = slug
        }
        /*
        var cardTypeAttack = attributes.isArtifact || attributes.isSpell ? "_active.gif" : "_attack.gif"
        var cardTypeIdle = attributes.isArtifact || attributes.isSpell ? "_idle.png" : "_idle.gif"
 
        // Card GIF
        card.attackAnim = "icons/" + card.id + cardTypeAttack
        card.idleAnim = "icons/" + card.id + cardTypeIdle
        */
        // Save
        if (card["id"] < 1000000)
            data.push(card)

        //console.log("-------------------------------")
        //console.log(card.name + " - " + card.category + " - " + card.id)
        //console.log(cards[i])
        //console.log(card)

    }

    console.log("-------------------------------")
    console.log("TOTAL: " + Object.keys(data).length);

    return data;
}


/* copy(getCardsJSON()); */




/*console.log(Object.keys(card_list))
        card_list.forEach((key)=>{
            if(key.setName == "Immortal"){
            var link = document.createElement('a');
            link.href = key.gifUrl;
            link.download = key.localGif + '.gif';
            link.className = "link";
            link.innerHTML = key.gifUrl;
            console.log(link)
            document.body.appendChild(link);
            link.click();
            //document.body.removeChild(link);
            }
            
        })*/
