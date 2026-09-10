#!/usr/bin/env node
/*
  WHITE CAT VAULT — build.js  v3.1
  Usage:
    node build.js            → Build + start dish server at :3000
    node build.js --port 8080→ Custom port
    node build.js --build    → Build only (dist/)
    node build.js --prod     → Production build only
    node build.js --clean    → Wipe dist/ first
*/
'use strict';
const fs=require('fs'),path=require('path'),http=require('http'),url=require('url'),crypto=require('crypto');

const ROOT=__dirname, OUT=path.join(ROOT,'dist'), PROD='https://whitecatvault.netlify.app';
const args=process.argv.slice(2);
const isProd=args.includes('--prod'), doBuild=args.includes('--build')||isProd;
const doClean=args.includes('--clean'), doServe=!doBuild;
const pArg=args.indexOf('--port'); const PORT=pArg!==-1?parseInt(args[pArg+1])||3000:3000;

const MIME={
  '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8',
  '.js':'application/javascript; charset=utf-8','.json':'application/json',
  '.webmanifest':'application/manifest+json','.svg':'image/svg+xml',
  '.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg',
  '.webp':'image/webp','.gif':'image/gif','.ico':'image/x-icon',
  '.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf',
  '.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8',
};

const G=s=>`\x1b[32m${s}\x1b[0m`, Y=s=>`\x1b[33m${s}\x1b[0m`,
      C=s=>`\x1b[36m${s}\x1b[0m`, D=s=>`\x1b[2m${s}\x1b[0m`,
      R=s=>`\x1b[31m${s}\x1b[0m`, U=s=>`\x1b[4m${s}\x1b[0m`;

const SKIP=new Set(['dist','node_modules','.git','.gitignore','build.js','package.json','package-lock.json','index.txt','.DS_Store','Thumbs.db']);

function mkd(d){if(!fs.existsSync(d))fs.mkdirSync(d,{recursive:true});}
function walk(dir,out,cb){
  fs.readdirSync(dir).forEach(n=>{
    if(SKIP.has(n))return;
    const s=path.join(dir,n),d=path.join(out,n);
    if(fs.statSync(s).isDirectory()){mkd(d);walk(s,d,cb);}
    else{ cb(s,d); }
  });
}
function pHTML(s){
  let t=fs.readFileSync(s,'utf8');
  if(isProd){t=t.replace(/https:\/\/whitecat-studio\.github\.io\/whitecatvault\.github\.io\//g,PROD+'/');
             t=t.replace(/<!--(?!\[if)[\s\S]*?-->/g,'');t=t.replace(/\n{3,}/g,'\n\n');}
  return t;
}
function pCSS(s){let t=fs.readFileSync(s,'utf8');if(isProd){t=t.replace(/\/\*[\s\S]*?\*\//g,'');t=t.replace(/\n{3,}/g,'\n');}return t;}
function pJS(s){let t=fs.readFileSync(s,'utf8');if(isProd)t=t.replace(/\n{3,}/g,'\n');return t;}

function runBuild(){
  console.log(`\n${C('◆')}  ${C('WHITE CAT VAULT')} — Build  [${isProd?G('PRODUCTION'):Y('dev')}]\n`);
  if(doClean&&fs.existsSync(OUT)){fs.rmSync(OUT,{recursive:true});console.log(`  ${G('✔')}  Cleaned dist/`);}
  mkd(OUT); let p=0,c=0;
  walk(ROOT,OUT,(s,d)=>{
    const e=path.extname(s).toLowerCase(); mkd(path.dirname(d));
    if(e==='.html'){fs.writeFileSync(d,pHTML(s),'utf8');p++;console.log(`  ${Y('●')}  ${path.relative(ROOT,s)}`);}
    else if(e==='.css'){fs.writeFileSync(d,pCSS(s),'utf8');p++;}
    else if(e==='.js'){fs.writeFileSync(d,pJS(s),'utf8');p++;}
    else if(['.webmanifest','.xml','.txt'].includes(e)){
      let t=fs.readFileSync(s,'utf8');
      if(isProd)t=t.replace(/https:\/\/whitecat-studio\.github\.io\/whitecatvault\.github\.io\//g,PROD+'/');
      t=t.replace(/<lastmod>[^<]+<\/lastmod>/g,`<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>`);
      fs.writeFileSync(d,t,'utf8');p++;
    } else{fs.copyFileSync(s,d);c++;}
  });
  const sw=path.join(OUT,'sw.js');
  if(fs.existsSync(sw)){
    const ver='wcv-'+crypto.createHash('md5').update(Date.now().toString()).digest('hex').slice(0,8);
    fs.writeFileSync(sw,fs.readFileSync(sw,'utf8').replace("'wcv-v2-fallback'","'"+ver+"'"),'utf8');
    console.log(`  ${G('✔')}  SW version: ${Y(ver)}`);
  }
  fs.writeFileSync(path.join(OUT,'_redirects'),'/*  /404.html  404\n','utf8');
  console.log(`  ${G('✔')}  _redirects`);
  console.log(`\n${G('✔  Build done')}  ${D('processed:'+p+'  copied:'+c)}\n`);
}

function runDish(port){
  const srv=http.createServer((req,res)=>{
    const pars=url.parse(req.url);
    let pn=decodeURIComponent(pars.pathname||'/').replace(/\.\./g,'');
    if(pn==='/'||pn==='')pn='/index.html';
    if(!path.extname(pn))pn=pn.replace(/\/?$/,'/index.html');
    const fp=path.join(ROOT,pn);
    const send=(fp2,st)=>{
      try{
        const d=fs.readFileSync(fp2);
        res.writeHead(st||200,{
          'Content-Type':MIME[path.extname(fp2).toLowerCase()]||'application/octet-stream',
          'Content-Length':d.length,'Cache-Control':'no-cache','X-Served-By':'WCV-Dish',
          ...(fp2.endsWith('sw.js')?{'Service-Worker-Allowed':'/'}:{})
        });
        res.end(d);
        const sc={200:G,404:Y,500:R};
        console.log(`  ${D('●')}  ${(sc[st||200]||D)(String(st||200))}  ${D(req.method)} ${pn}`);
      }catch(e){res.writeHead(500,{'Content-Type':'text/plain'});res.end('500: '+e.message);}
    };
    if(fs.existsSync(fp)&&fs.statSync(fp).isFile())send(fp);
    else{const p404=path.join(ROOT,'404.html');fs.existsSync(p404)?send(p404,404):(res.writeHead(404),res.end('404'));}
  });
  srv.on('error',e=>{
    if(e.code==='EADDRINUSE'){console.log(`  ${Y('◌')}  Port ${port} busy → trying ${port+1}`);runDish(port+1);}
    else{console.error(R(e.message));process.exit(1);}
  });
  srv.listen(port,()=>{
    const line='─'.repeat(54);
    console.log('\n'+line);
    console.log(`  ${C('◆')}  ${C('WHITE CAT VAULT')} — ${Y('Dish')} running`);
    console.log(line);
    console.log(`  ${D('URL')}      ${U(G('http://localhost:'+port))}`);
    console.log(`  ${D('Root')}     ${D(ROOT)}`);
    console.log(line);
    const pages=[
      ['/','Hub (Game Vault + Watch Vault + Tools)'],
      ['/game_index.html','Game Vault — 24 games'],
      ['/watch_index.html','Watch Vault — movies, anime, cartoons'],
      ['/tool_index.html','Tool Vault'],
      ['/about_index.html','About'],
    ];
    console.log('\n  Pages:');
    pages.forEach(([p,l])=>console.log(`  ${D('→')}  ${U('http://localhost:'+port+p)}  ${D(l)}`));
    console.log(`\n  ${D('Ctrl+C to stop')}\n`);
  });
}

runBuild();
if(doServe)runDish(PORT);
