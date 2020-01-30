function putExpansionNames() {
    var cards = GameDataManager.getInstance().cardsCollection.models;
    for (i = 0; i < cards.length; i++) {
        var card = cards[i].attributes;
        var tag = card.cardSetName;
        switch (card.cardSetName) {
            case "Core":
                tag = "Core";
                break;
            case "ShimZar":
                tag = "Denizens of Shim'Zar";
                break;
            case "Bloodbound":
                tag = "Bloodbound Ancients";
                break;
            case "Ancients":
                tag = "Bloodbound Ancients";
                break;
            case "Unearthed":
                tag = "Unearthed Prophecy";
                break;
            case "Immortal":
                tag = "Immortal Vanguard";
                break;
            case "Mythron":
                tag = "Trials of Mythron";
                break;
        }

        var tooltip = {"name": tag, "description": ""};
        card.keywordDescriptions.unshift(tooltip);
    }
}
setTimeout(putExpansionNames, 8000);
