(function(){
  function set(id,v){var e=document.getElementById(id);if(e)e.textContent=v;}
  function run(){
    var g=window.GAME_STATS; var w=window.WATCH_STATS; var t=window.TOOL_STATS;
    if(g){set('stat-games',g.totalGames);set('stat-shots',g.totalShots);
          set('home-games-count',g.totalGames+' Games');set('home-games-shots',g.totalShots+' Screenshots');}
    if(w){set('stat-total',w.collections);set('stat-items',w.totalItems);
          set('home-watch-count',w.collections+' Collections');set('home-watch-items',w.totalItems+' Items');}
    if(t){set('stat-tools',t.totalTools);set('home-tools-count',t.totalTools+' Tools');}
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}
})();
