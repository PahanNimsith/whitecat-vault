(function () {
  var watchLibrary = [


  /* ━━━━━━━━ MOVIES ━━━━━━━━ */
  {
    id:'maze_runner', title:'MAZE RUNNER', type:'Movies', lang:'en',
    year:'2014', rating:9.0, price:'Rs.300',
    desc:'Young survivors trapped in a deadly giant maze. Intense dystopian thriller trilogy — complete.',
    tags:['Sci-Fi','Thriller','Dystopian'], cover:'watch/movies/maze_runner/maze_runner.webp',
    children:[
      { title:'The Maze Runner', year:'2014', count:'1 Movie', rating:7.1, price:'Rs.100', lang:'en',
        desc:'Thomas wakes in the Glade with no memory. The maze has a way out — but no one has survived finding it.',
        tags:['Sci-Fi','Thriller','Action'], cover:'watch/movies/maze_runner/maze_runner_1.webp' },
      { title:'Maze Runner: The Scorch Trials', year:'2015', count:'1 Movie', rating:6.3, price:'Rs.100', lang:'en',
        desc:'The survivors escape only to face a world devastated by the Flare virus. Real danger begins.',
        tags:['Sci-Fi','Thriller','Action'], cover:'watch/movies/maze_runner/maze_runner_2.webp' },
      { title:'Maze Runner: The Death Cure', year:'2018', count:'1 Movie', rating:6.3, price:'Rs.100', lang:'en',
        desc:'The final battle for freedom and the cure. Thomas and WCKD face off in an explosive conclusion.',
        tags:['Sci-Fi','Action','Drama'], cover:'watch/movies/maze_runner/maze_runner_3.webp' }
    ]
  },

  {
    id:'johnny_english', title:'JOHNNY ENGLISH', type:'Movies', lang:'en',
    year:'2003', rating:8.9, price:'Rs.300',
    desc:"Mr. Bean plays a spy. Pure comedy gold across all three films. Perfect for family movie nights.",
    tags:['Comedy','Spy','Action'], cover:'watch/movies/johnny_english/johnny_english.webp',
    children:[
      { title:'Johnny English', year:'2003', count:'1 Movie', rating:6.2, price:'Rs.100', lang:'en',
        desc:"Britain's least qualified spy hunts the Crown Jewels thief. Gloriously incompetent.",
        tags:['Comedy','Spy'], cover:'watch/movies/johnny_english/johnny_english_1.webp' },
      { title:'Johnny English Reborn', year:'2011', count:'1 Movie', rating:6.3, price:'Rs.100', lang:'en',
        desc:'English returns from exile to stop an assassination plot. Sharp suits, bad decisions.',
        tags:['Comedy','Spy','Action'], cover:'watch/movies/johnny_english/johnny_english_2.webp' },
      { title:'Johnny English Strikes Again', year:'2018', count:'1 Movie', rating:6.3, price:'Rs.100', lang:'en',
        desc:'A cyber attack forces MI7 to bring English out of retirement. Sharpest of the trilogy.',
        tags:['Comedy','Spy','Action'], cover:'watch/movies/johnny_english/johnny_english_3.webp' }
    ]
  },

  {
    id:'moon_knight', title:'MOON KNIGHT', type:'Movies', lang:'en',
    year:'2022', rating:9.1, price:'Rs.200',
    desc:"Oscar Isaac as Marvel's most complex hero. DID, Egyptian gods and a gripping psychological mystery — 6 episodes.",
    tags:['Superhero','Mystery','Marvel'], cover:'watch/movies/moon_knight.webp',
    children:[]
  },

  {
    id:'batman_begins', title:'BATMAN BEGINS', type:'Movies', lang:'en',
    year:'2005', rating:9.4, price:'Rs.150',
    desc:"Nolan's dark reinvention of Batman. Gritty, grounded and absolutely cinematic from the first frame.",
    tags:['Superhero','Action','Drama'], cover:'watch/movies/batman_begins.webp',
    children:[]
  },

  {
    id:'titanic', title:'TITANIC', type:'Movies', lang:'si',
    year:'1997', rating:9.5, price:'Rs.150',
    desc:"James Cameron's timeless romance-disaster epic. Jack and Rose — in Sinhala dubbed version.",
    tags:['Romance','Drama','Classic'], cover:'watch/movies/titanic.webp',
    children:[]
  },

  {
    id:'avatar_fire_ash', title:'AVATAR: FIRE AND ASH', type:'Movies', lang:'en',
    year:'2025', rating:8.8, price:'Rs.200',
    desc:"James Cameron's third Avatar chapter. Pandora's fire nation with stunning next-level visuals.",
    tags:['Sci-Fi','Action','Adventure'], cover:'watch/movies/avatar_fire_ash.webp',
    children:[]
  },

  {
    id:'black_adam', title:'BLACK ADAM', type:'Movies', lang:'en',
    year:'2022', rating:8.2, price:'Rs.150',
    desc:"DC's anti-hero origin. The Rock delivers raw power in a massive-scale action spectacle.",
    tags:['Superhero','Action','DC'], cover:'watch/movies/black_adam.webp',
    children:[]
  },

  {
    id:'blue_beetle', title:'BLUE BEETLE', type:'Movies', lang:'en',
    year:'2023', rating:8.0, price:'Rs.150',
    desc:'A heartfelt superhero origin story with a Latin family at its core. Fresh new energy in DC.',
    tags:['Superhero','Action','DC'], cover:'watch/movies/blue_beetle.webp',
    children:[]
  },

  {
    id:'predator_badlands', title:'PREDATOR: BADLANDS', type:'Movies', lang:'en',
    year:'2025', rating:8.5, price:'Rs.150',
    desc:'The Predator franchise returns with a brutal survival story set in hostile uncharted territory.',
    tags:['Sci-Fi','Action','Thriller'], cover:'watch/movies/predator_badlands.webp',
    children:[]
  },

  /* ━━━━━━━━ CARTOON MOVIES ━━━━━━━━ */
  {
    id:'ice_age', title:'ICE AGE', type:'Cartoon Movies', lang:'si',
    year:'2002', rating:9.1, price:'Rs.500',
    desc:'Manny, Sid and Diego across all five ice age adventures. Complete collection in Sinhala dub.',
    tags:['Animation','Comedy','Family'], cover:'watch/cartoon_movies/ice_age/ice_age.webp',
    children:[
      { title:'Ice Age', year:'2002', count:'1 Movie', rating:8.4, price:'Rs.100', lang:'si',
        desc:'Manny the mammoth, Sid the sloth and Diego escort a human baby home. The classic that started it all.',
        tags:['Animation','Comedy','Family'], cover:'watch/cartoon_movies/ice_age/ice_age_1.webp' },
      { title:'Ice Age: The Meltdown', year:'2006', count:'1 Movie', rating:7.9, price:'Rs.100', lang:'si',
        desc:'The ice is melting and the herd must find higher ground. More laughs, new friends.',
        tags:['Animation','Comedy','Family'], cover:'watch/cartoon_movies/ice_age/ice_age_2.webp' },
      { title:'Ice Age: Dawn of the Dinosaurs', year:'2009', count:'1 Movie', rating:7.8, price:'Rs.100', lang:'si',
        desc:'The gang discovers a lost world of dinosaurs beneath the ice. Buck steals every scene.',
        tags:['Animation','Adventure'], cover:'watch/cartoon_movies/ice_age/ice_age_3.webp' },
      { title:'Ice Age: Continental Drift', year:'2012', count:'1 Movie', rating:7.3, price:'Rs.100', lang:'si',
        desc:'Manny, Sid and Diego set sail on a drifting iceberg and encounter pirates on the high seas.',
        tags:['Animation','Adventure'], cover:'watch/cartoon_movies/ice_age/ice_age_4.webp' },
      { title:'Ice Age: Collision Course', year:'2016', count:'1 Movie', rating:5.9, price:'Rs.100', lang:'si',
        desc:'A massive asteroid threatens Earth and the herd must save the world. Wild finale.',
        tags:['Animation','Comedy'], cover:'watch/cartoon_movies/ice_age/ice_age_5.webp' }
    ]
  },

  {
    id:'despicable_me', title:'DESPICABLE ME', type:'Cartoon Movies', lang:'en',
    year:'2010', rating:9.0, price:'Rs.400',
    desc:'Gru and the Minions across four hilarious adventures. Perfect family animated comedy.',
    tags:['Animation','Comedy','Family'], cover:'watch/cartoon_movies/despicable_me/despicable_me.webp',
    children:[
      { title:'Despicable Me', year:'2010', count:'1 Movie', rating:7.6, price:'Rs.100', lang:'en',
        desc:'Supervillain Gru adopts three little girls to use in his scheme — and they change his life.',
        tags:['Animation','Comedy','Family'], cover:'watch/cartoon_movies/despicable_me/despicable_me_1.webp' },
      { title:'Despicable Me 2', year:'2013', count:'1 Movie', rating:7.3, price:'Rs.100', lang:'en',
        desc:'Gru is recruited by the Anti-Villain League to stop a new global threat. Minions everywhere.',
        tags:['Animation','Comedy','Action'], cover:'watch/cartoon_movies/despicable_me/despicable_me_2.webp' },
      { title:'Despicable Me 3', year:'2017', count:'1 Movie', rating:6.3, price:'Rs.100', lang:'en',
        desc:'Gru meets his long-lost twin brother Dru. Double the trouble and double the laughs.',
        tags:['Animation','Comedy','Family'], cover:'watch/cartoon_movies/despicable_me/despicable_me_3.webp' },
      { title:'Despicable Me 4', year:'2024', count:'1 Movie', rating:6.2, price:'Rs.100', lang:'en',
        desc:'A new villain targets the family and the Minions get super powers. Bigger and louder.',
        tags:['Animation','Comedy','Action'], cover:'watch/cartoon_movies/despicable_me/despicable_me_4.webp' }
    ]
  },

  {
    id:'htyd', title:'HOW TO TRAIN YOUR DRAGON', type:'Cartoon Movies', lang:'en',
    year:'2010', rating:9.4, price:'Rs.400',
    desc:'Hiccup and Toothless — one of the most heartwarming animated trilogies ever created.',
    tags:['Animation','Adventure','Dragons'], cover:'watch/cartoon_movies/htyd/htyd.webp',
    children:[
      { title:'How to Train Your Dragon', year:'2010', count:'1 Movie', rating:8.1, price:'Rs.150', lang:'en',
        desc:'Hiccup befriends a dragon named Toothless in a village that hunts them. A legendary bond begins.',
        tags:['Animation','Adventure','Dragons'], cover:'watch/cartoon_movies/htyd/htyd_1.webp' },
      { title:'How to Train Your Dragon 2', year:'2014', count:'1 Movie', rating:7.9, price:'Rs.150', lang:'en',
        desc:'Five years later, Hiccup discovers a hidden world of dragons and secrets about his past.',
        tags:['Animation','Adventure','Dragons'], cover:'watch/cartoon_movies/htyd/htyd_2.webp' },
      { title:'HTTYD: Snoggletog Log', year:'2019', count:'Holiday Special', rating:7.5, price:'Rs.100', lang:'en',
        desc:'A cozy holiday special — Toothless and the dragons warm up your screen.',
        tags:['Animation','Family'], cover:'watch/cartoon_movies/htyd/htyd_snoggletog.webp' }
    ]
  },

  {
    id:'white_snake', title:'WHITE SNAKE', type:'Cartoon Movies', lang:'en',
    year:'2021', rating:8.8, price:'Rs.300',
    desc:'Chinese animated fantasy rooted in ancient mythology. Gorgeous visuals and emotional storytelling.',
    tags:['Animation','Fantasy','Romance'], cover:'watch/cartoon_movies/white_snake/white_snake.webp',
    children:[
      { title:'White Snake 2: Green Snake', year:'2021', count:'1 Movie', rating:7.2, price:'Rs.150', lang:'en',
        desc:'Xiao Qing\'s spirit is trapped in a dystopian world and must fight her way out. Visually dazzling.',
        tags:['Animation','Fantasy','Action'], cover:'watch/cartoon_movies/white_snake/green_snake.webp' },
      { title:'White Snake: Afloat', year:'2024', count:'1 Movie', rating:7.0, price:'Rs.150', lang:'en',
        desc:'The ancient white snake legend continues with breathtaking animation and an emotional new chapter.',
        tags:['Animation','Fantasy','Romance'], cover:'watch/cartoon_movies/white_snake/white_snake_2.webp' }
    ]
  },

  {
    id:'moana_2', title:'MOANA 2', type:'Cartoon Movies', lang:'en',
    year:'2024', rating:8.5, price:'Rs.200',
    desc:'Moana sets sail on a new voyage with new allies and an even bigger ocean to explore.',
    tags:['Animation','Adventure','Music'], cover:'watch/cartoon_movies/moana_2.webp',
    children:[]
  },

  {
    id:'ne_zha_2', title:'NE ZHA II', type:'Cartoon Movies', lang:'en',
    year:'2025', rating:9.1, price:'Rs.200',
    desc:'Jaw-dropping Chinese animated epic. Visuals, mythology and battle sequences at an insane level.',
    tags:['Animation','Action','Mythology'], cover:'watch/cartoon_movies/ne_zha_2.webp',
    children:[]
  },

  {
    id:'spiderman_sv', title:'SPIDER-MAN: ACROSS THE SPIDER-VERSE', type:'Cartoon Movies', lang:'en',
    year:'2023', rating:9.8, price:'Rs.200',
    desc:'Visually the most revolutionary animated film ever made. Miles Morales at his absolute peak.',
    tags:['Animation','Superhero','Action'], cover:'watch/cartoon_movies/spiderman_spider_verse_2.webp',
    children:[]
  },

  {
    id:'bad_guys_2', title:'THE BAD GUYS 2', type:'Cartoon Movies', lang:'en',
    year:'2025', rating:8.7, price:'Rs.200',
    desc:'The gang returns with more heists, style and laughs. Slick animated fun for the whole family.',
    tags:['Animation','Comedy','Action'], cover:'watch/cartoon_movies/bad_guys_2.webp',
    children:[]
  },

  /* ━━━━━━━━ ANIME ━━━━━━━━ */
  {
    id:'jjk', title:'JUJUTSU KAISEN', type:'Anime', lang:'en',
    year:'2020', rating:9.3, price:'Rs.450',
    desc:'Yuji Itadori swallows a cursed finger and enters the brutal world of jujutsu sorcerers. A modern masterpiece.',
    tags:['Action','Horror','Dark'], cover:'watch/anime/jjk/jjk.webp',
    children:[
      { title:'Jujutsu Kaisen — Season 1', year:'2020', count:'24 Episodes', rating:8.6, price:'Rs.200', lang:'en',
        desc:'Yuji joins Jujutsu High and trains under Gojo Satoru while cursed spirits grow stronger.',
        tags:['Action','Horror','Dark'], cover:'watch/anime/jjk/jjk_s1.webp' },
      { title:'Jujutsu Kaisen 0 (Movie)', year:'2021', count:'1 Movie', rating:8.2, price:'Rs.100', lang:'en',
        desc:'A prequel following Yuta Okkotsu and his cursed spirit Rika before the series.',
        tags:['Action','Horror'], cover:'watch/anime/jjk/jjk_movie.webp' },
      { title:'Jujutsu Kaisen — Season 2', year:'2023', count:'23 Episodes', rating:9.0, price:'Rs.150', lang:'en',
        desc:'The Shibuya Incident arc. Absolute chaos, incredible animation and the most devastating moments in anime.',
        tags:['Action','Dark','Drama'], cover:'watch/anime/jjk/jjk_s2.webp' }
    ]
  },

  {
    id:'opm', title:'ONE PUNCH MAN', type:'Anime', lang:'en',
    year:'2015', rating:9.0, price:'Rs.400',
    desc:'Saitama can defeat any enemy with a single punch — and it has completely ruined his will to live.',
    tags:['Action','Comedy','Superhero'], cover:'watch/anime/opm/opm.webp',
    children:[
      { title:'One Punch Man — Season 1', year:'2015', count:'12 Episodes', rating:8.8, price:'Rs.150', lang:'en',
        desc:'Saitama the overpowered hero who feels nothing and destroys everything. A masterclass in satire.',
        tags:['Action','Comedy','Superhero'], cover:'watch/anime/opm/opm_s1.webp' },
      { title:'One Punch Man — Season 2', year:'2019', count:'12 Episodes', rating:7.9, price:'Rs.150', lang:'en',
        desc:'The Hero Association faces new threats while Saitama continues his existential boredom.',
        tags:['Action','Comedy'], cover:'watch/anime/opm/opm_s2.webp' },
      { title:'One Punch Man — Season 3', year:'2025', count:'Ongoing', rating:8.4, price:'Rs.100', lang:'en',
        desc:'The monster arc kicks into overdrive. New animation studio, huge upgrade in visuals.',
        tags:['Action','Comedy','Superhero'], cover:'watch/anime/opm/opm_s3.webp' }
    ]
  },

  {
    id:'komi', title:"KOMI CAN'T COMMUNICATE", type:'Anime', lang:'en',
    year:'2021', rating:8.8, price:'Rs.300',
    desc:'Komi Shoko is the most beautiful girl in school — and she has extreme social anxiety. Heartwarming comedy.',
    tags:['Comedy','Romance','Slice of Life'], cover:'watch/anime/komi/komi.webp',
    children:[
      { title:"Komi Can't Communicate — Season 1", year:'2021', count:'12 Episodes', rating:8.5, price:'Rs.150', lang:'en',
        desc:'Tadano discovers Komi\'s secret and helps her make 100 friends. An incredibly wholesome journey.',
        tags:['Comedy','Romance','Slice of Life'], cover:'watch/anime/komi/komi_s1.webp' },
      { title:"Komi Can't Communicate — Season 2", year:'2022', count:'12 Episodes', rating:8.7, price:'Rs.150', lang:'en',
        desc:'More friend-making adventures. The chemistry between Komi and Tadano grows beautifully.',
        tags:['Comedy','Romance','Slice of Life'], cover:'watch/anime/komi/komi_s2.webp' }
    ]
  },

  {
    id:'spy_family', title:'SPY × FAMILY', type:'Anime', lang:'en',
    year:'2022', rating:9.1, price:'Rs.500',
    desc:'A spy, an assassin and a telepath child form a fake family — none knowing each other\'s secrets.',
    tags:['Action','Comedy','Family'], cover:'watch/anime/spy_x_family/spy_x_family.webp',
    children:[
      { title:'Spy × Family — Season 1', year:'2022', count:'25 Episodes', rating:8.6, price:'Rs.150', lang:'en',
        desc:'Operation Strix begins. Loid, Yor and Anya must survive as a convincing family. Anya carries every scene.',
        tags:['Action','Comedy','Family'], cover:'watch/anime/spy_x_family/spy_x_family_s1.webp' },
      { title:'Spy × Family — Season 2', year:'2023', count:'12 Episodes', rating:8.5, price:'Rs.150', lang:'en',
        desc:'Operation Cruise takes the Forger family on a luxury liner. Dangers escalate, warmth never fades.',
        tags:['Action','Comedy','Drama'], cover:'watch/anime/spy_x_family/spy_x_family_s2.webp' },
      { title:'Spy × Family — Season 3', year:'2025', count:'Ongoing', rating:8.7, price:'Rs.100', lang:'en',
        desc:'The Forger saga continues. New missions, deeper threats and more Anya reactions than ever.',
        tags:['Action','Comedy','Family'], cover:'watch/anime/spy_x_family/spy_x_family_s3.webp' }
    ]
  },

  {
    id:'grieving_soul', title:'LET THIS GRIEVING SOUL RETIRE', type:'Anime', lang:'en',
    year:'2024', rating:8.8, price:'Rs.350',
    desc:'The most feared Dark Lord just wants to retire — his party keeps misreading every move he makes.',
    tags:['Fantasy','Comedy','Isekai'], cover:'watch/anime/grieving_soul/grieving_soul.webp',
    children:[
      { title:'Let This Grieving Soul Retire — S1', year:'2024', count:'13 Episodes', rating:8.5, price:'Rs.200', lang:'en',
        desc:'Krai Andis, the most feared Dark Lord, tries to retire while his party misreads him as heroic.',
        tags:['Fantasy','Comedy','Isekai'], cover:'watch/anime/grieving_soul/grieving_soul_s1.webp' },
      { title:'Let This Grieving Soul Retire — S2', year:'2025', count:'Ongoing', rating:8.6, price:'Rs.150', lang:'en',
        desc:'The retirement plan gets even more complicated. Still airing with fresh chaos each episode.',
        tags:['Fantasy','Comedy','Isekai'], cover:'watch/anime/grieving_soul/grieving_soul_s2.webp' }
    ]
  },

  {
    id:'to_be_hero_x', title:'TO BE HERO X', type:'Anime', lang:'en',
    year:'2024', rating:9.1, price:'Rs.350',
    desc:'Superheroes, dark secrets and explosive action in a world where power comes at a great cost.',
    tags:['Action','Superhero','Drama'], cover:'watch/anime/to_be_hero_x.webp',
    children:[]
  },

  {
    id:'black_bullet', title:'BLACK BULLET', type:'Anime', lang:'en',
    year:'2014', rating:8.5, price:'Rs.200',
    desc:'In a world infected by alien parasites, only cursed children can fight back. Dark and gripping.',
    tags:['Action','Sci-Fi','Dark'], cover:'watch/anime/black_bullet.webp',
    children:[]
  },

  /* ━━━━━━━━ ANIME MOVIES ━━━━━━━━ */
  {
    id:'whisker_away', title:'A WHISKER AWAY', type:'Anime Movies', lang:'en',
    year:'2020', rating:8.9, price:'Rs.150',
    desc:'A girl who can turn into a cat pursues her crush — until the line between human and feline blurs.',
    tags:['Romance','Fantasy','Drama'], cover:'watch/anime_movies/whisker_away.webp',
    children:[]
  },

  {
    id:'suzume', title:"SUZUME'S DOOR-LOCKING", type:'Anime Movies', lang:'en',
    year:'2022', rating:9.2, price:'Rs.150',
    desc:"Makoto Shinkai's breathtaking road trip adventure. Suzume closes ancient doors that unleash disasters.",
    tags:['Fantasy','Adventure','Drama'], cover:'watch/anime_movies/suzume.webp',
    children:[]
  }

  /* ── ADD NEW TITLES BELOW ── */
  ];

  watchLibrary.forEach(function (item) {
    item.rating = Number(item.rating) || 0;
    item.price = item.price || 'TBA';
    item.children = Array.isArray(item.children) ? item.children : [];

    item.children.forEach(function (child) {
      child.rating = Number(child.rating) || 0;
      child.price = child.price || 'TBA';
      child.count = child.count || '1 Item';
    });
  });

  var watchPriceRating = {};
  var byType = {};

  watchLibrary.forEach(function (item) {
    var itemCount = item.children.length ? item.children.length : 1;

    watchPriceRating[item.id] = {
      rating: item.rating,
      price: item.price,
      count: itemCount,
      type: item.type
    };

    item.children.forEach(function (child, index) {
      watchPriceRating[item.id + '#' + index] = {
        rating: child.rating,
        price: child.price,
        count: child.count || '1 Item',
        type: item.type,
        title: child.title
      };
    });

    if (!byType[item.type]) {
      byType[item.type] = { collections: 0, totalItems: 0 };
    }
    byType[item.type].collections += 1;
    byType[item.type].totalItems += itemCount;
  });

  var totalItems = watchLibrary.reduce(function (sum, item) {
    return sum + (item.children.length ? item.children.length : 1);
  }, 0);

  window.WATCH_LIBRARY = watchLibrary;
  window.WATCH_PRICE_RATING = watchPriceRating;
  window.WATCH_STATS = {
    collections: watchLibrary.length,
    totalItems: totalItems,
    byType: byType
  };
})();
