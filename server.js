const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#100d08">
<meta name="description" content="SCHOOL FRIENDS SSC 2027 — memories, friendship and golden moments.">
<title>SCHOOL FRIENDS | SSC 2027</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
<style>
:root{--bg:#100d08;--panel:#19140c;--gold:#e8bd62;--gold2:#ffe7a8;--muted:#b9ad95;--line:rgba(232,189,98,.2);--white:#fff8e9}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:radial-gradient(ellipse at 80% 0%,rgba(151,103,24,.17),transparent 36%),var(--bg);color:var(--white);font-family:"DM Sans",Arial,sans-serif}
a{color:inherit;text-decoration:none}
button,input,textarea{font:inherit}
button{cursor:pointer}
.container{width:min(1120px,92%);margin:auto}
.nav{position:sticky;top:0;z-index:20;background:rgba(16,13,8,.88);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:76px}
.brand{display:flex;align-items:center;gap:11px;font-weight:800;letter-spacing:1px}
.brand-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:14px;color:#191006;background:linear-gradient(135deg,var(--gold2),#b98127);font-size:21px;box-shadow:0 0 25px #e8bd6225}
.brand small{display:block;color:var(--gold);font-size:10px;letter-spacing:3px;margin-top:3px}
.nav-links{display:flex;gap:23px;color:#d8cdb8;font-size:13px}
.nav-links a:hover{color:var(--gold2)}
.menu-btn{display:none;background:none;border:1px solid var(--line);color:var(--gold);padding:9px 12px;border-radius:10px}
.hero{padding:88px 0 70px;position:relative;overflow:hidden}
.hero:before{content:"";position:absolute;width:390px;height:390px;border:1px solid #e8bd6219;border-radius:50%;right:-100px;top:10px;box-shadow:0 0 0 35px #e8bd6208,0 0 0 70px #e8bd6205;pointer-events:none}
.eyebrow{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--line);padding:9px 13px;border-radius:30px;color:var(--gold2);font-size:11px;letter-spacing:2px;text-transform:uppercase;background:#e8bd6208}
.dot{width:7px;height:7px;border-radius:50%;background:#e8bd62;box-shadow:0 0 12px #e8bd62}
h1,h2,h3{font-family:"Playfair Display",Georgia,serif}
h1{font-size:clamp(42px,7vw,82px);line-height:1.03;letter-spacing:-2px;margin:25px 0 20px;max-width:760px}
.gold-text{background:linear-gradient(100deg,#fff0bf 0%,#e8bd62 42%,#b98127 75%,#ffe7a8 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero p{max-width:610px;color:var(--muted);font-size:16px;line-height:1.85}
.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:29px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:13px 19px;border-radius:12px;font-weight:700;font-size:13px;transition:transform .2s,box-shadow .2s}
.btn:hover{transform:translateY(-2px)}
.btn-gold{color:#1b1205;background:linear-gradient(135deg,var(--gold2),#c28a2d);box-shadow:0 8px 30px #d9a74420;border:0}
.btn-outline{border:1px solid var(--line);color:var(--gold2);background:#ffffff04}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:680px;margin-top:50px}
.stat{padding:18px;border:1px solid var(--line);background:linear-gradient(145deg,#ffffff06,#ffffff01);border-radius:15px}
.stat strong{display:block;font:700 26px "Playfair Display",Georgia,serif;color:var(--gold2)}
.stat span{display:block;color:var(--muted);font-size:11px;margin-top:5px;letter-spacing:.5px}
section{padding:65px 0}
.section-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:28px}
.kicker{font-size:10px;color:var(--gold);letter-spacing:3px;text-transform:uppercase;font-weight:700}
h2{font-size:clamp(29px,4vw,44px);margin:10px 0 0}
.section-copy{max-width:480px;color:var(--muted);font-size:13px;line-height:1.8}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.card{border:1px solid var(--line);background:linear-gradient(145deg,#211a0f,#151109);border-radius:18px;padding:22px;position:relative;overflow:hidden;transition:transform .25s,border-color .25s}
.card:hover{transform:translateY(-5px);border-color:#e8bd6277}
.card:after{content:"";position:absolute;width:90px;height:90px;border-radius:50%;background:#e8bd6208;right:-35px;top:-35px}
.card-icon{width:47px;height:47px;display:grid;place-items:center;border-radius:15px;background:#e8bd6215;border:1px solid var(--line);font-size:23px}
.card h3{font-size:21px;margin:18px 0 8px}
.card p{color:var(--muted);font-size:13px;line-height:1.75;margin:0}
.tag{display:inline-block;color:var(--gold2);font-size:10px;letter-spacing:1px;border:1px solid var(--line);padding:6px 9px;border-radius:20px;margin-top:17px}
.search-row{display:flex;gap:10px;margin-bottom:18px}
.search{width:100%;padding:13px 15px;border:1px solid var(--line);background:#ffffff06;color:var(--white);border-radius:12px;outline:none}
.search:focus,textarea:focus,input:focus{border-color:var(--gold)}
.friend-list{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}
.friend{padding:17px;border:1px solid var(--line);border-radius:15px;background:#ffffff04;display:flex;gap:12px;align-items:center}
.avatar{width:44px;height:44px;flex-shrink:0;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#ffe7a8,#b98127);color:#211505;font-weight:800;font-size:18px}
.friend h3{font-family:"DM Sans",Arial,sans-serif;font-size:14px;margin:0 0 4px}
.friend p{margin:0;color:var(--muted);font-size:11px}
.empty{color:var(--muted);padding:18px;border:1px dashed var(--line);border-radius:12px;grid-column:1/-1}
.memory-layout{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.memory-feature{min-height:265px;padding:28px;border-radius:20px;border:1px solid var(--line);background:radial-gradient(circle at 80% 15%,#d9a74420,transparent 35%),linear-gradient(145deg,#211a0f,#141008);display:flex;flex-direction:column;justify-content:space-between}
.memory-feature .big{font-size:55px}
.memory-feature h3{font-size:27px;margin:15px 0 8px}
.memory-feature p{color:var(--muted);line-height:1.8;font-size:13px;max-width:420px}
.form-panel{border:1px solid var(--line);border-radius:20px;padding:25px;background:#ffffff03}
.form-panel h3{font-size:24px;margin:0 0 7px}
.form-panel>p{font-size:12px;color:var(--muted);line-height:1.7;margin-bottom:20px}
.field{display:grid;gap:7px;margin-bottom:13px}
.field label{font-size:11px;color:var(--gold2)}
.field input,.field textarea{width:100%;background:#100d08;border:1px solid var(--line);border-radius:10px;padding:12px;color:var(--white);outline:none}
.field textarea{min-height:90px;resize:vertical}
.notice{font-size:11px;color:var(--muted);line-height:1.6;margin-top:12px}
.quote{text-align:center;padding:42px 20px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:linear-gradient(90deg,transparent,#e8bd6209,transparent)}
.quote blockquote{font:600 clamp(23px,4vw,38px) "Playfair Display",Georgia,serif;max-width:780px;margin:0 auto 15px;line-height:1.45}
.quote span{font-size:10px;letter-spacing:3px;color:var(--gold)}
footer{padding:28px 0;color:var(--muted);font-size:11px}
.footer-inner{display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}
.toast{position:fixed;bottom:20px;left:50%;transform:translate(-50%,20px);opacity:0;pointer-events:none;background:#f1ce7b;color:#1a1206;padding:12px 17px;border-radius:12px;font-size:12px;font-weight:700;transition:.25s;z-index:50;box-shadow:0 10px 35px #0008}
.toast.show{opacity:1;transform:translate(-50%,0)}
.reveal{animation:rise .65s both}
@keyframes rise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:760px){.nav-links{display:none;position:absolute;top:76px;left:0;right:0;padding:20px 4%;background:#100d08;border-bottom:1px solid var(--line);flex-direction:column}.nav-links.open{display:flex}.menu-btn{display:block}.hero{padding:62px 0 48px}.stats{margin-top:32px}.grid,.friend-list{grid-template-columns:1fr 1fr}.memory-layout{grid-template-columns:1fr}.section-head{align-items:start;flex-direction:column}section{padding:48px 0}}
@media(max-width:480px){.grid,.friend-list{grid-template-columns:1fr}.stats{gap:8px}.stat{padding:13px}.stat strong{font-size:22px}.hero p{font-size:14px}.btn{width:100%}.actions{gap:9px}.brand{font-size:12px}.brand-mark{width:38px;height:38px}}
</style>
</head>
<body>
<header class="nav">
  <div class="container nav-inner">
    <a class="brand" href="#home"><span class="brand-mark">✦</span><span>SCHOOL FRIENDS<small>SSC • 2027</small></span></a>
    <nav class="nav-links" id="navLinks"><a href="#home">Home</a><a href="#about">About Us</a><a href="#friends">Friends</a><a href="#memories">Memories</a><a href="#wall">Friend Wall</a></nav>
    <button class="menu-btn" id="menuBtn" aria-label="Open menu">☰</button>
  </div>
</header>
<main>
<section class="hero" id="home">
 <div class="container reveal">
  <span class="eyebrow"><span class="dot"></span> ONE CLASS • A THOUSAND MEMORIES</span>
  <h1>Friends today.<br><span class="gold-text">Memories forever.</span></h1>
  <p>Welcome to our little corner of the world — a place for SCHOOL FRIENDS SSC 2027 to celebrate friendship, share memories, and keep our school days close to heart.</p>
  <div class="actions"><a class="btn btn-gold" href="#friends">✦ Meet Our Friends</a><a class="btn btn-outline" href="#wall">＋ Leave a Message</a></div>
  <div class="stats">
   <div class="stat"><strong>SSC</strong><span>OUR BIG MILESTONE</span></div>
   <div class="stat"><strong>2027</strong><span>OUR BATCH YEAR</span></div>
   <div class="stat"><strong>∞</strong><span>MEMORIES TO KEEP</span></div>
  </div>
 </div>
</section>
<section id="about">
 <div class="container">
  <div class="section-head"><div><div class="kicker">THE STORY OF US</div><h2>More than classmates.</h2></div><p class="section-copy">School is not only about lessons and exams. It is also laughter between classes, shared notes, inside jokes, and friendships we hope to carry for years.</p></div>
  <div class="grid">
   <article class="card"><div class="card-icon">🤝</div><h3>Real Friendship</h3><p>Different personalities, one unforgettable journey. We grow together and support each other.</p><span class="tag">STRONGER TOGETHER</span></article>
   <article class="card"><div class="card-icon">📚</div><h3>SSC Journey</h3><p>Every class, every challenge, and every little win is a part of our story as the SSC 2027 batch.</p><span class="tag">BATCH • 2027</span></article>
   <article class="card"><div class="card-icon">🌟</div><h3>Golden Memories</h3><p>Years may pass, but the moments we share today can remain special for a lifetime.</p><span class="tag">FOREVER IN OUR HEARTS</span></article>
  </div>
 </div>
</section>
<div class="quote"><blockquote>“The best part of school is not the building — it is the people who make it feel like home.”</blockquote><span>SCHOOL FRIENDS • SSC 2027</span></div>
<section id="friends">
 <div class="container">
  <div class="section-head"><div><div class="kicker">OUR PEOPLE</div><h2>Meet the friend circle.</h2></div><p class="section-copy">Search the sample list below. You can edit these sample names in the code and add your own classmates.</p></div>
  <div class="search-row"><input id="friendSearch" class="search" type="search" placeholder="🔎  Search friends..." aria-label="Search friends"></div>
  <div class="friend-list" id="friendList">
   <div class="friend" data-name="Hamim"><div class="avatar">H</div><div><h3>Hamim</h3><p>SSC 2027 • School Friend</p></div></div>
   <div class="friend" data-name="Friend One"><div class="avatar">F</div><div><h3>Friend One</h3><p>SSC 2027 • School Friend</p></div></div>
   <div class="friend" data-name="Friend Two"><div class="avatar">F</div><div><h3>Friend Two</h3><p>SSC 2027 • School Friend</p></div></div>
   <div class="friend" data-name="Friend Three"><div class="avatar">F</div><div><h3>Friend Three</h3><p>SSC 2027 • School Friend</p></div></div>
   <div class="friend" data-name="Friend Four"><div class="avatar">F</div><div><h3>Friend Four</h3><p>SSC 2027 • School Friend</p></div></div>
   <div class="friend" data-name="Friend Five"><div class="avatar">F</div><div><h3>Friend Five</h3><p>SSC 2027 • School Friend</p></div></div>
  </div>
 </div>
</section>
<section id="memories">
 <div class="container">
  <div class="section-head"><div><div class="kicker">KEEP THESE DAYS CLOSE</div><h2>Our memory corner.</h2></div></div>
  <div class="memory-layout">
   <div class="memory-feature"><div class="big">📸</div><div><h3>Moments worth remembering</h3><p>Classroom laughter, annual events, group photos, and the little moments that turn into the biggest memories.</p></div></div>
   <div class="memory-feature"><div class="big">🏆</div><div><h3>Dream big, batch 2027</h3><p>Let’s encourage each other, work hard for our goals, and make our school journey something we can be proud of.</p></div></div>
  </div>
 </div>
</section>
<section id="wall">
 <div class="container">
  <div class="section-head"><div><div class="kicker">SAY SOMETHING NICE</div><h2>Leave a golden message.</h2></div></div>
  <div class="memory-layout">
   <div class="form-panel"><h3>Friend Wall ✨</h3><p>Write a short greeting or memory for your classmates. Messages are saved in this browser only, not shared between visitors.</p>
    <form id="messageForm"><div class="field"><label for="friendName">YOUR NAME</label><input id="friendName" maxlength="40" required placeholder="Enter your name"></div><div class="field"><label for="friendMessage">YOUR MESSAGE</label><textarea id="friendMessage" maxlength="240" required placeholder="Write a friendly message..."></textarea></div><button class="btn btn-gold" type="submit">Post Message ✦</button></form>
    <p class="notice">Privacy note: do not post phone numbers, passwords, or other private information.</p>
   </div>
   <div class="form-panel"><h3>Messages from friends</h3><p>Messages added on this device appear here.</p><div id="messages"><p class="notice">Your group’s first message can start here. Be kind and keep it positive! 🌟</p></div></div>
  </div>
 </div>
</section>
</main>
<footer><div class="container footer-inner"><span>© <span id="year"></span> SCHOOL FRIENDS SSC 2027</span><span>Made with friendship & a little golden magic ✦</span></div></footer>
<div class="toast" id="toast" role="status"></div>
<script>
const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const search=document.getElementById("friendSearch");
search.addEventListener("input",()=>{
 const term=search.value.trim().toLowerCase();
 document.querySelectorAll("#friendList .friend").forEach(card=>{
  card.style.display=card.dataset.name.toLowerCase().includes(term)?"flex":"none";
 });
});

function showToast(message){
 const toast=document.getElementById("toast");
 toast.textContent=message;toast.classList.add("show");
 setTimeout(()=>toast.classList.remove("show"),2600);
}
function escapeHtml(value){
 return value.replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function renderMessages(){
 const root=document.getElementById("messages");
 let list=[];
 try{list=JSON.parse(localStorage.getItem("schoolFriendsMessages")||"[]")}catch(e){}
 if(!list.length){root.innerHTML='<p class="notice">Your group’s first message can start here. Be kind and keep it positive! 🌟</p>';return}
 root.innerHTML="";
 list.slice().reverse().forEach(item=>{
  const div=document.createElement("div");
  div.className="card";div.style.marginBottom="10px";div.style.padding="16px";
  div.innerHTML='<h3 style="font:700 14px DM Sans,Arial;margin:0 0 8px;color:#ffe7a8">'+escapeHtml(item.name)+'</h3><p style="white-space:pre-wrap;overflow-wrap:anywhere">'+escapeHtml(item.message)+'</p>';
  root.appendChild(div);
 });
}
document.getElementById("messageForm").addEventListener("submit",event=>{
 event.preventDefault();
 const name=document.getElementById("friendName").value.trim();
 const message=document.getElementById("friendMessage").value.trim();
 if(!name||!message){showToast("Please fill in both fields.");return}
 let list=[];
 try{list=JSON.parse(localStorage.getItem("schoolFriendsMessages")||"[]")}catch(e){}
 list.push({name:name,message:message});
 try{localStorage.setItem("schoolFriendsMessages",JSON.stringify(list.slice(-30)))}catch(e){showToast("Could not save on this device.");return}
 document.getElementById("friendMessage").value="";
 renderMessages();showToast("Your message was added on this device!");
});
renderMessages();
</script>
</body>
</html>`);
});

app.get("/health", (req, res) => {
  res.json({ status: "online", website: "SCHOOL FRIENDS SSC 2027" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("SCHOOL FRIENDS SSC 2027 website is running on port " + PORT);
});
