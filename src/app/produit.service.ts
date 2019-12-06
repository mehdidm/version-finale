import { Injectable } from "@angular/core";
import { produit } from "./produit";

@Injectable({
  providedIn: "root"
})
export class ProduitService {
  /*
  produits = [
    new produit(12345, 'fromage blanc', "assets/p1.png", 50.2 , true, new Date("2019-01-10") ),
    new produit(18345, 'fromage noir', "assets/p2.png", 450.2 , true, new Date("2019-01-10") ),
    new produit(12345, 'fromage blanc', "assets/p1.png", 50.2 , true, new Date("2019-01-10") ),
    new produit(18345, 'fromage noir', "assets/p2.png", 450.2 , true, new Date("2019-01-10") ),
    new produit(12345, 'fromage blanc', "assets/p1.png", 50.2 , true, new Date("2019-01-10") ),
    new produit(18345, 'fromage noir', "assets/p2.png", 450.2 , false, new Date("2019-01-10") )
  ];*/
  produits = [
    //id, name, description, image path, price, nb in stock, in stock or not, date
    new produit(
      12345,
      "The Chita Single Grain",
      "Japanese single grain whisky from the Chita distillery, one of the selection of fantastic distilleries owned by Suntory. This is their main expression - a whisky matured in a combination of Sherry, bourbon and (interestingly) wine casks. Good whisky for the summer months.",
      "assets/TheChitaSingleGrain.jpg",
      50.2,
      50,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "The Hakushu Single Malt",
      "From the Hakushu distillery in the foothills of Mount Kaikomagatake comes their Distiller's Reserve single malt whisky, a no-age-statement expression, that captures the smoky, herbaceous characteristics of their whiskies. Both lightly-peated and heavily-peated malts were used for this complex and deeply enjoyable whisky. One of two Spring 2014 release from Suntory.",
      "assets/TheHakushuSingleMalt.jpg",
      50.52,
      60,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      12345,
      "Ballentine's Blended",
      "Ballantine's Finest is a complex, refined and elegant blended scotch whisky. It is regarded as the taste to satisfy a modern style. The original flavor, complexity and refinement comes from more than 50 single malt flavors. The unmistakable Ballantine's flavor is dependent on these 50 single malts, 4 single grains and in particular the fingerprint malts from Miltonduff and Glenburgie. It is balanced because no one single component dominates.",
      "assets/BallentinesBlended.jpg",
      50.2,
      50,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Hibiki Suntory Jpanaese Harmony",
      "Hibiki Japanese Harmony is a blend of Japanese malt and grain whiskies from Yamazaki, Hakushu and Chita. Presented in the brand's trademark 24-faceted bottle representing the Japanese seasons, this is light, approachable and moreish with enticing notes of orange peel and white chocolate.",
      "assets/HibikiSantory.jpeg",
      450.2,
      10,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      12345,
      "Jack Daniels Gentleman Jack",
      "Well worth the extra, Gentleman Jack is charcoal-mellowed twice, before and after the ageing process, resulting in a cleaner, more refined end product. Packaged in a smart monogram-esque bottle.",
      "assets/JackDanielsGentlemanJack.jpg",
      32.2,
      6,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Jack Daniels Honey",
      "Long awaited in the UK and with a big following in the USA, this is Jack Daniel's honey and whiskey liqueur. A mix of regular Old No 7 and a spiced honey liqueur, it's got spice, sweetness, floral undertones and a long smooth finish. Drink over ice, chilled or even in a cup of coffee – it's rather tasty.",
      "assets/JackDanielsHoney.jpg",
      24.2,
      80,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Jack Daniels Old N° 7",
      "The original all-conquering cola-friendly colossus, Jack Daniel's No. 7 commands a legion of fans worldwide, thanks to the sweet smoothness imparted by the Lincoln County Process of charcoal-mellowing the spirit before maturation.",
      "assets/JackDanielsOldN7.jpg",
      24.2,
      90,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Jameson",
      "The original all-conquering cola-friendly colossus, Jack Daniel's No. 7 commands a legion of fans worldwide, thanks to the sweet smoothness imparted by the Lincoln County Process of charcoal-mellowing the spirit before maturation.",
      "assets/Jameson.jpg",
      450.2,
      58,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Johnnie Walker Black Label",
      "Johnnie Walker Black Label's iconic square bottle makes it one of the world's most recognisable Scotch whiskies - and it's also one of whisky critic Jim Murray's favourite blends: 'If there is a silkier delivery on the market today, I have not seen it: this is sublime stuff...one of the world's most masterful whiskies back in all its complex glory'",
      "assets/JohnieWalkerBlackLabel.jpg",
      30.25,
      15,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Johnnie Walker Blue Label",
      "Johnnie Walker Black Label's iconic square bottle makes it one of the world's most recognisable Scotch whiskies - and it's also one of whisky critic Jim Murray's favourite blends: 'If there is a silkier delivery on the market today, I have not seen it: this is sublime stuff...one of the world's most masterful whiskies back in all its complex glory'",
      "assets/JohnieWalkerBlueLabel.jpg",
      150,
      30,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Johnnie Walker Double Black",
      "An interesting twist on Johnnie Walker Black Label, Double Black was rolled out for general release in 2011 after a successful launch in travel retail. Double Black adds to the normal Black Label profile by including more Islay whisky and casks that have been heavily charred, giving a more intense flavour with a greater emphasis on smoke while keeping true to the sophisticated Johnnie Walker style.",
      "assets/JohnieWalkerDoubleBlack.jpg",
      32.75,
      20,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Johnnie Walker Green Label",
      "Green Label is arguably the richest horse in the Johnnie Walker stable. This blended malt whisky travels the regions of Scottish whisky production and conveys the whirlwind of flavours to your mouth. Hearty.",
      "assets/JohnieWalkerGreenLabel.jpg",
      41.75,
      13,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Johnnie Walker Red Label",
      "Don't mind this, this is shit ",
      "assets/JohnieWalkerRedLabel.jpg",
      15,
      0,
      false,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Nikka Blended Whiskey ",
      "The simply named Nikka Blended Whisky shows off the skills of the company's blenders more than any of their other bottlings. Packed full of fruit and more refined than their other blends this is a perfect entry point into the world of Japanese whisky.",
      "assets/NikkaBlended2.jpg",
      30,
      69,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Nikka 70TH Anniversary Set(4 Bottles) ",
      "1 x 12yo Master Blender's Blended Whisky, 1 x 12yo Single Coffey Grain ,1 x 12yo Miyagikyo, 1 x 12yo Yoichi",
      "assets/Nikka70ThAnniversary.jpg",
      4000,
      69,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Nikka Coffey Grain ",
      "A gift set of grain whisky from Japan's Nikka – produced mainly from corn using one of their continuous Coffey stills – and a stylish Nikka tasting glass. Rather than the rare and limited releases they have done before, this is a larger release to further show off this key component in the Nikka family of whiskies.",
      "assets/NikkaCoffeyGrain.jpg",
      60,
      9,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Nikka Taketsuru Pure Malt 25  ",
      "Taketsuru's no-age-statement blended malt contains a high percentage of malt from Miyagikyo, with the reminder coming from Yoichi. Aged on average for around 10 years in a variety of different cask types, including some sherry wood for extra richness.",
      "assets/NikkaTaketsuru25.jpg",
      1500.0,
      13,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Nikka From The Barrel",
      "Nikka from the Barrel is big-boned and bursting with character. Not averse to a drop of water, either. A real star, winning top prize in its category at the World Whisky Awards in 2007 and 2010.",
      "assets/NikkaFromTheBarrel.jpg",
      43,
      4,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Chivas Regal 12",
      "'The blend for grown-ups, for people who have made their rites of passage and are ready to enjoy their success. Sweet, but not cloying. Buxom, but not overblown. Balanced. 9/10.' Paul Pacult in Whisky Magazine April 2000",
      "assets/ChivasRegal12.jpg",
      26.5,
      34,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Chivas Regal 18",
      "Premium aged mix of some of Scotland's finest whiskies with an above-average proportion of malt and an extended ageing period producing a truly fine blend.",
      "assets/ChivasRegal18.jpg",
      59.95,
      76,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Chivas Regal Extra",
      "Chivas Regal Extra is the most rich and intense Chivas. With Chivas Regal Extra discover an exceptionally rich and generous Chivas blend, a real tribute to the Chivas' brothers pioneering mastery in the art of blending legendary and generous whiskies. Chivas Regal Extra takes the unequalled Chivas house-style taste and its renowned unique quality to a whole new level.",
      "assets/ChivasRegalExtra.jpg",
      199,
      16,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Moez Ben Hassen",
      "Moez un jeune tunisien de 20 ans , n'aime pas nirvana ni Dragon Ball Z (oui c'est trés bizzare ) toujours souriant en plus il est hyperactif ,  adore iset charguia et surtout l'ambiance du fac  .",
      "assets/moez.jpg",
      123587,
      1,
      true,
      new Date("1999-01-10")
    ),
       new produit(
      696969,
      "Mehdi Dimassi",
      "Mehdi dimassi, Jeune tunisien age de 20 ans, passe sa vie da 2eme Charguia, precisement ISET CHARGUIA, oui la fameuse faculte d'elite, provenant de la region du s7el il aime la sa7fa thoum et Kaki b350dt, il dort dans les HACKATHONS",
      "assets/MehdiDimassi.jpg",
      696969,
      1,
      true,
      new Date("2019-01-10")
    ),
    new produit(
      18345,
      "Chivas Regal 25 Years Old",
      "A very old original bottle of Chivas Regal 25 Year Old in the unusual 1.13-litre size favoured in the UK at the time. A bona fide collector's item, this is a beautiful piece of whisky history that we estimate dates from the early 1930s.",
      "assets/ChivasRegal25.jpg",
      5000,
      2,
      true,
      new Date("2019-01-10")
    )
  ];

  public getProduitId(id: number): produit {
    let i: number;
    for (i = 0; i < this.produits.length; i++) {
      if (id == this.produits[i].id) {
        return this.produits[i];
      }
    }
    return null;
  }

  public addProduit(id: number, libelle: string,description: string, image: string, prix: number,nbStock:number, stock: boolean, date: Date): boolean {
    if (this.getProduitId(id) == null) {
      const nouveau: produit = new produit(id, libelle,description, image, prix,nbStock, stock, date);
      this.produits.push(nouveau);
      return true;
    }
    return false;


  }
  DeleteProduit(id:number):produit[]
  {
    let i:number
    for(i=0;i<this.produits.length;i++)
    {
      if(id==this.produits[i].id)
      this.produits.splice(i,1);

    }
    return this.produits;

  }
  editerProduitserv(
    id: number,
    libelle: string,
    description:string,
    image: string,
    prix: number,
    nbStock:number,
    stock: boolean,
    date: Date
  ) {
    let obj: produit = this.getProduitId(id);

    if (id >= 100 && id < 1000) obj.id = id;

    if (libelle != null) obj.libelle = libelle;
    if  (description != null) obj.description = description;

    if (image.length != 0) obj.image = image;

    if (prix != null) obj.prix = prix;
    if (nbStock != null) obj.nbStock = nbStock;
    if (date != null) obj.date = date;


    if (stock == true || stock == false) obj.stock = stock;
  }
  getAllProduits():produit[]{
    return this.produits;
  }
  constructor() {}
}

/* LOGIN PART */
