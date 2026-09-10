(function () {
  var gameCatalog = [
    {
        "folder":  "games/hollow/hollow_knight",
        "title":  "HOLLOW KNIGHT",
        "genre":  "Indie",
        "year":  "2017",
        "rating":  9.8,
        "price":  "Rs.800",
        "priceOld":  "Rs.1800",
        "tags":  [
                     "M"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Team Cherry • A Hand-Drawn Descent into Darkness",
        "photos":  27,
        "page":  "games/hollow/hollow_knight/hollow_knight.html"
    },
    {
        "folder":  "games/hollow/hollow_knight_silksong",
        "title":  "HOLLOW KNIGHT: SILKSONG",
        "genre":  "Indie",
        "year":  "TBA",
        "rating":  9.5,
        "price":  "Rs.1200",
        "priceOld":  "",
        "tags":  [
                     "Action-Adventure",
                     "A New Kingdom"
                 ],
        "tagsBlue":  [

                     ],
        "note":  "Team Cherry • Ascend to a Kingdom of Silk and Song",
        "photos":  6,
        "page":  "games/hollow/hollow_knight_silksong/hollow_knight_silksong.html"
    },
    {
        "folder":  "games/ori/ori_1",
        "title":  "ORI AND THE BLIND FOREST",
        "genre":  "Platformer",
        "year":  "2015",
        "rating":  9.6,
        "price":  "Rs.900",
        "priceOld":  "",
        "tags":  [
                     "A"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Moon Studios • A visually stunning, emotional journey.",
        "photos":  10,
        "page":  "games/ori/ori_1/ori_1.html"
    },
    {
        "folder":  "games/ori/ori_2",
        "title":  "ORI AND THE WILL OF THE WISPS",
        "genre":  "Platformer",
        "year":  "2020",
        "rating":  9.7,
        "price":  "Rs.1250",
        "priceOld":  "",
        "tags":  [
                     "S"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Moon Studios • Unravel Ori\u0027s True Destiny",
        "photos":  16,
        "page":  "games/ori/ori_2/ori_2.html"
    },
    {
        "folder":  "games/open_world/minecraft",
        "title":  "MINECRAFT",
        "genre":  "Open World",
        "year":  "2011",
        "rating":  9.9,
        "price":  "Rs.750",
        "priceOld":  "",
        "tags":  [
                     "A"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Mojang Studios • Build Anything. Explore Everything.",
        "photos":  12,
        "page":  "games/open_world/minecraft/minecraft.html"
    },
    {
        "folder":  "games/mirrors/mirrors_edge",
        "title":  "MIRROR\u0027S EDGE",
        "genre":  "Action Parkour",
        "year":  "2008",
        "rating":  9,
        "price":  "Rs.900",
        "priceOld":  "",
        "tags":  [
                     "C"
                 ],
        "tagsBlue":  [
                         "Very Positive"
                     ],
        "note":  "DICE • Run. Leap. Survive.",
        "photos":  9,
        "page":  "games/mirrors/mirrors_edge/mirrors_edge.html"
    },
    {
        "folder":  "games/mafia/mafia_2",
        "title":  "MAFIA II",
        "genre":  "Action",
        "year":  "2010",
        "rating":  9.3,
        "price":  "Rs.900",
        "priceOld":  "Rs.2500",
        "tags":  [
                     "C"
                 ],
        "tagsBlue":  [
                         "Very Positive"
                     ],
        "note":  "2K Czech • Welcome to Empire Bay",
        "photos":  9,
        "page":  "games/mafia/mafia_2/mafia_2.html"
    },
    {
        "folder":  "games/gta/gta_san",
        "title":  "GTA: SAN ANDREAS",
        "genre":  "Action",
        "year":  "2004",
        "rating":  9.5,
        "price":  "Rs.850",
        "priceOld":  "",
        "tags":  [
                     "C"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Rockstar Games • Welcome to the 90s",
        "photos":  8,
        "page":  "games/gta/gta_san/gta_san.html"
    },
    {
        "folder":  "games/gta/gta_vc",
        "title":  "GRAND THEFT AUTO: VICE CITY",
        "genre":  "Action",
        "year":  "2002",
        "rating":  9.2,
        "price":  "Rs.500",
        "priceOld":  "",
        "tags":  [
                     "C"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Rockstar North • Welcome to the 1980s",
        "photos":  5,
        "page":  "games/gta/gta_vc/gta_vc.html"
    },
    {
        "folder":  "games/survival/the_forest",
        "title":  "THE FOREST",
        "genre":  "Survival",
        "year":  "2018",
        "rating":  9.1,
        "price":  "Rs.1350",
        "priceOld":  "",
        "tags":  [
                     "S"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Endnight Games • Survive, Build, Explore",
        "photos":  19,
        "page":  "games/survival/the_forest/the_forest.html"
    },
    {
        "folder":  "games/far_cry/far_cry_3",
        "title":  "FAR CRY 3",
        "genre":  "FPS",
        "year":  "2012",
        "rating":  9.4,
        "price":  "Rs.900",
        "priceOld":  "Rs.3000",
        "tags":  [
                     "M"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Ubisoft Montreal • Discover the definition of insanity.",
        "photos":  16,
        "page":  "games/far_cry/far_cry_3/far_cry_3.html"
    },
    {
        "folder":  "games/far_cry/far_cry_4",
        "title":  "FAR CRY 4",
        "genre":  "Action",
        "year":  "2014",
        "rating":  9,
        "price":  "Rs.1200",
        "priceOld":  "Rs.3500",
        "tags":  [
                     "O"
                 ],
        "tagsBlue":  [
                         "Very Positive"
                     ],
        "note":  "Ubisoft • Welcome to Kyrat",
        "photos":  14,
        "page":  "games/far_cry/far_cry_4/far_cry_4.html"
    },
    {
        "folder":  "games/far_cry/far_cry_1",
        "title":  "FAR CRY",
        "genre":  "FPS",
        "year":  "2004",
        "rating":  8.8,
        "price":  "Rs.400",
        "priceOld":  "",
        "tags":  [
                     "T"
                 ],
        "tagsBlue":  [
                         "Very Positive"
                     ],
        "note":  "Crytek • Welcome to the jungle.",
        "photos":  14,
        "page":  "games/far_cry/far_cry_1/far_cry.html"
    },
    {
        "folder":  "games/call_of_duty/cod_mw_2",
        "title":  "CALL OF DUTY: MW2",
        "genre":  "FPS",
        "year":  "2022",
        "rating":  9.5,
        "price":  "Rs.1000",
        "priceOld":  "Rs.4500",
        "tags":  [
                     "M"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Infinity Ward • The Ultimate Modern Warfare Experience",
        "photos":  12,
        "page":  "games/call_of_duty/cod_mw_2/cod_mw_2.html"
    },
    {
        "folder":  "games/call_of_duty/cod_mw_3",
        "title":  "CALL OF DUTY: MW3",
        "genre":  "FPS",
        "year":  "2023",
        "rating":  9,
        "price":  "Rs.1250",
        "priceOld":  "Rs.4500",
        "tags":  [
                     "M"
                 ],
        "tagsBlue":  [
                         "Very Positive"
                     ],
        "note":  "Sledgehammer Games • The Final Chapter of Modern Warfare",
        "photos":  13,
        "page":  "games/call_of_duty/cod_mw_3/cod_mw_3.html"
    },
    {
        "folder":  "games/halo/halo_1",
        "title":  "HALO: COMBAT EVOLVED",
        "genre":  "FPS",
        "year":  "2001",
        "rating":  9.3,
        "price":  "Rs.600",
        "priceOld":  "",
        "tags":  [
                     "S"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "Bungie • The definitive sci-fi shooter that changed gaming forever.",
        "photos":  10,
        "page":  "games/halo/halo_1/halo_1.html"
    },
    {
        "folder":  "games/halo/halo_ss",
        "title":  "HALO: SPARTAN STRIKE",
        "genre":  "Twin-Stick Shooter",
        "year":  "2015",
        "rating":  8.5,
        "price":  "Rs.550",
        "priceOld":  "",
        "tags":  [
                     "T"
                 ],
        "tagsBlue":  [
                         "Mostly Positive"
                     ],
        "note":  "343 Industries • A New Chapter in the Halo Universe",
        "photos":  10,
        "page":  "games/halo/halo_ss/halo_ss.html"
    },
    {
        "folder":  "games/battlefield/bf_2_bc",
        "title":  "BATTLEFIELD BC2",
        "genre":  "Action",
        "year":  "2010",
        "rating":  9.2,
        "price":  "Rs.1000",
        "priceOld":  "",
        "tags":  [
                     "Must-Play Classic",
                     "Destruction 2.0"
                 ],
        "tagsBlue":  [

                     ],
        "note":  "EA DICE • Destruction Redefined",
        "photos":  15,
        "page":  "games/battlefield/bf_2_bc/bf_2_bc.html"
    },
    {
        "folder":  "games/battlefield/bf_2_cc",
        "title":  "BATTLEFIELD 2: COMPLETE COLLECTION",
        "genre":  "FPS",
        "year":  "2005",
        "rating":  9,
        "price":  "Rs.800",
        "priceOld":  "",
        "tags":  [
                     "M"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "EA DICE • The Pinnacle of Classic Modern Warfare",
        "photos":  13,
        "page":  "games/battlefield/bf_2_cc/bf_2_cc.html"
    },
    {
        "folder":  "games/cs/csgo_beta",
        "title":  "CS:GO BETA 2012",
        "genre":  "FPS",
        "year":  "2012",
        "rating":  9.1,
        "price":  "Rs.750",
        "priceOld":  "",
        "tags":  [
                     "Historic Beta Build",
                     "Rare Edition"
                 ],
        "tagsBlue":  [

                     ],
        "note":  "Valve • Hidden Path Entertainment • The Birth of a Legend",
        "photos":  10,
        "page":  "games/cs/csgo_beta/csgo_beta.html"
    },
    {
        "folder":  "games/cs/cs_cz",
        "title":  "COUNTER-STRIKE: CONDITION ZERO",
        "genre":  "FPS",
        "year":  "2004",
        "rating":  8.6,
        "price":  "Rs.300",
        "priceOld":  "",
        "tags":  [
                     "C"
                 ],
        "tagsBlue":  [
                         "Mostly Positive"
                     ],
        "note":  "Valve • Turtle Rock Studios • A Classic Tactical Shooter Reborn",
        "photos":  7,
        "page":  "games/cs/cs_cz/cs_cz.html"
    },
    {
        "folder":  "games/car/nfsmw",
        "title":  "NFS: MOST WANTED",
        "genre":  "Racing",
        "year":  "2005",
        "rating":  9.6,
        "price":  "Rs.600",
        "priceOld":  "",
        "tags":  [
                     "A"
                 ],
        "tagsBlue":  [
                         "Overwhelmingly Positive"
                     ],
        "note":  "EA Black Box • Electronic Arts • Rockport City\u0027s Most Dangerous Race",
        "photos":  5,
        "page":  "games/car/nfsmw/nfsmw.html"
    },
    {
        "folder":  "games/car/gtr_2",
        "title":  "GTR 2 – FIA GT RACING GAME",
        "genre":  "Racing",
        "year":  "2006",
        "rating":  8.8,
        "price":  "Rs.300",
        "priceOld":  "",
        "tags":  [
                     "S"
                 ],
        "tagsBlue":  [
                         "Very Positive"
                     ],
        "note":  "SimBin Studios • The Ultimate GT Racing Simulation",
        "photos":  5,
        "page":  "games/car/gtr_2/gtr_2.html"
    },
    {
        "folder":  "games/car/splitsecond",
        "title":  "SPLIT/SECOND",
        "genre":  "Racing",
        "year":  "2010",
        "rating":  9,
        "price":  "Rs.900",
        "priceOld":  "",
        "tags":  [
                     "E"
                 ],
        "tagsBlue":  [
                         "Very Positive"
                     ],
        "note":  "Black Rock Studio • The ultimate reality show where survival is the only objective.",
        "photos":  11,
        "page":  "games/car/splitsecond/splitsecond.html"
    }
];

  var priceRating = {};
  var totalShots = 0;

  gameCatalog.forEach(function (game) {
    game.folder = String(game.folder || '').replace(/\\/g, '/');
    game.genre = String(game.genre || 'Game').trim();
    game.year = String(game.year || 'TBA').trim();
    game.title = String(game.title || '').trim();
    game.note = String(game.note || '').trim();

    var ratingValue = Number(game.rating);
    game.rating = Number.isFinite(ratingValue) ? Number(ratingValue.toFixed(1)) : 0;
    game.price = game.price || 'TBA';
    game.priceOld = game.priceOld || '';
    game.photos = Number(game.photos) || 0;
    game.tags = Array.isArray(game.tags) ? game.tags : [];
    game.tagsBlue = Array.isArray(game.tagsBlue) ? game.tagsBlue : [];

    game.tags = game.tags
      .map(function (tag) { return String(tag || '').trim(); })
      .filter(function (tag) { return tag.length > 2; });

    game.tagsBlue = game.tagsBlue
      .map(function (tag) { return String(tag || '').trim(); })
      .filter(function (tag) { return tag.length > 2; });

    if (!game.tags.length) {
      game.tags = [game.genre];
    }

    totalShots += game.photos;

    priceRating[game.page] = {
      rating: game.rating,
      price: game.price,
      priceOld: game.priceOld,
      shots: game.photos
    };
  });

  window.GAME_CATALOG = gameCatalog;
  window.GAME_PRICE_RATING = priceRating;
  window.GAME_STATS = {
    totalGames: gameCatalog.length,
    totalShots: totalShots
  };
})();
