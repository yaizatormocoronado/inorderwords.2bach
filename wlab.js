/* Writing Lab: approximate PAU (Comunitat Valenciana) marking of question 5 */
(function(){
const ERR=[
 [/\bpeople (is|was|has)\b/gi,'people + plural verb (people are / were / have).','people + verbo en plural (people are / were / have).','Grammar'],
 [/\b(everybody|everyone|nobody|somebody) (have|are|were|do|don't|think|want|need|like)\b/gi,'everybody / everyone take a singular verb (everybody has / is / thinks).','everybody / everyone llevan verbo en singular (everybody has / is / thinks).','Grammar'],
 [/\b(he|she|it) (have|do|go|want|think|say|like|need|make|live|work|study|play|feel|know|seem)\b/g,'Third person singular needs -s (he has, she thinks, it seems).','La tercera persona del singular lleva -s (he has, she thinks, it seems).','Grammar'],
 [/\b(he|she|it) don't\b/gi,'he / she / it doesn\'t.','he / she / it doesn\'t.','Grammar'],
 [/\bthere (is|was) (many|several|lots of|a lot of \w+s\b|some \w+s\b)/gi,'Plural nouns need there are / there were.','Los sustantivos en plural llevan there are / there were.','Grammar'],
 [/\b(must|can|could|should|would|might|may|will) to\b/gi,'Modal verbs are followed by the bare infinitive (must go, not must to go).','Los modales van seguidos de infinitivo sin to (must go, no must to go).','Grammar'],
 [/\b(would|could|should|must|might) of\b/gi,'Write would have / should have (never “of”).','Se escribe would have / should have (nunca “of”).','Grammar'],
 [/\bif (i|you|he|she|it|we|they|people|students) will\b/gi,'No will after if in conditionals (If it rains…, not If it will rain…).','No se usa will después de if en las condicionales (If it rains…).','Grammar'],
 [/\b(enjoy|enjoys|enjoyed|avoid|avoids|avoided|finish|finished|mind|suggest|suggests|suggested|consider|considered|keep|keeps) to [a-z]+/gi,'This verb is followed by -ing (enjoy reading, suggest going).','Este verbo va seguido de -ing (enjoy reading, suggest going).','Grammar'],
 [/\b(want|wants|wanted|decide|decided|refuse|refused|hope|hopes|plan|plans|planned|expect|expected|need|needs|needed) (?!to\b)[a-z]+ing\b/gi,'This verb is followed by to + infinitive (want to go, decide to study).','Este verbo va seguido de to + infinitivo (want to go, decide to study).','Grammar'],
 [/\blook(s|ing|ed)? forward to (?![a-z]+ing\b)(?!the\b|a\b|an\b|your\b|my\b|it\b|this\b|that\b|hearing\b)[a-z]+/gi,'look forward to + -ing (I look forward to hearing from you).','look forward to + -ing (I look forward to hearing from you).','Grammar'],
 [/\bmore (better|worse|bigger|easier|harder|cheaper|faster|older|younger|happier)\b/gi,'Don\'t use more with -er comparatives (better, not more better).','No se usa more con comparativos en -er (better, no more better).','Grammar'],
 [/\b(am|is|are) agree\b/gi,'agree is a verb: I agree (not I am agree).','agree es un verbo: I agree (no I am agree).','Grammar'],
 [/\bdespite of\b/gi,'despite has no of (despite the rain / in spite of the rain).','despite no lleva of (despite the rain / in spite of the rain).','Grammar'],
 [/\bdepend(s|ed|ing)? of\b/gi,'depend on (not depend of).','depend on (no depend of).','Grammar'],
 [/\bdiscuss(es|ed|ing)? about\b/gi,'discuss has no preposition (discuss the problem).','discuss no lleva preposición (discuss the problem).','Grammar'],
 [/\bexplain(s|ed|ing)? (me|us|him|her|them)\b/gi,'explain something to somebody (explain it to me).','explain something to somebody (explain it to me).','Grammar'],
 [/\bsince (\d+|two|three|four|five|six|many|several|a few) (years|months|weeks|days|hours)\b/gi,'Use for with a period of time (for three years); since with a point in time (since 2020).','Usa for con un periodo (for three years) y since con un momento (since 2020).','Grammar'],
 [/\b(an? )(information|advice|news|homework|furniture|equipment|research|evidence|progress)\b/gi,'Uncountable noun: no a/an (some information, a piece of advice).','Sustantivo incontable: sin a/an (some information, a piece of advice).','Grammar'],
 [/\b(informations|advices|furnitures|homeworks|evidences|researches|equipments|knowledges)\b/gi,'This noun is uncountable: no plural -s.','Este sustantivo es incontable: no lleva -s de plural.','Grammar'],
 [/\bmost of (people|students|teenagers|young people|adults|children)\b/gi,'most people / most students (without of).','most people / most students (sin of).','Grammar'],
 [/\bthe (society|nature|technology|money|education|happiness|life) (is|has|have|was|can|should|must)\b/gi,'Abstract nouns in general have no “the” (Society is…, Technology has…).','Los sustantivos abstractos en sentido general no llevan “the” (Society is…).','Grammar'],
 [/\bin the other hand\b/gi,'on the other hand.','on the other hand.','Vocabulary'],
 [/\bin my opinion,? i think\b/gi,'Redundant: use In my opinion OR I think, not both.','Redundante: usa In my opinion O I think, no los dos.','Vocabulary'],
 [/\b(make|makes|made|making) (homework|an exam|exams|sport|sports|a photo|photos|a question|questions)\b/gi,'Collocation: do homework / take an exam / do sport / take a photo / ask a question.','Colocación: do homework / take an exam / do sport / take a photo / ask a question.','Vocabulary'],
 [/\bassist(s|ed)? (to|at)\b/gi,'False friend: attend a class / an event (assist = help).','Falso amigo: attend a class / an event (assist = ayudar).','Vocabulary'],
 [/\b(the )?last years\b/gi,'in recent years / over the last few years.','in recent years / over the last few years.','Vocabulary'],
 [/\bin a future\b/gi,'in the future.','in the future.','Vocabulary'],
 [/\b(que|pero|porque|muy|también|entonces|bueno)\b/gi,'Spanish word in the text.','Palabra en español en el texto.','Vocabulary'],
 [/(^|[.!?]\s+|\s)i\b(?!\.)/g,'The pronoun I is always a capital letter.','El pronombre I siempre va en mayúscula.','Strategic'],
 [/,(?=[A-Za-z])/g,'Leave a space after a comma.','Deja un espacio después de la coma.','Strategic'],
 [/\b(Moreover|Furthermore|However|Nevertheless|Therefore|Consequently|Nowadays|Firstly|Secondly|Finally|In addition|On the other hand|To sum up|In conclusion|All in all)(?! *,)\s/g,'Put a comma after a linker at the start of a sentence.','Pon una coma después del conector al principio de la frase.','Strategic']];
const CONTR=/\b(\w+n't|I'm|you're|we're|they're|it's|that's|there's|I've|you've|we've|they've|I'll|you'll|we'll|they'll|he's|she's|I'd|you'd|we'd|they'd|gonna|wanna)\b/gi;
const ADV=[[/\bif\b[^.]*\b(would|'d|will|could|might)\b/i,'conditional'],[/\b(is|are|was|were|been|be|being)\s+\w+(ed|en|wn|ght|ade|ld|ne)\b/i,'passive'],[/\b(who|which|whose|where|whom)\b/i,'relative clause'],[/\b(have|has|had)\s+(\w+ly\s+)?(been|\w+ed|\w+en|done|made|seen|gone|known|had|got|become|grown|brought|thought|taught|bought|built|left|lost|told|said|felt|kept|found)\b/i,'perfect tense'],[/\b(must|might|may|could|should|can't|couldn't|would)\s+have\s+\w+/i,'modal perfect'],[/\b(wish|if only)\b/i,'wish / if only'],[/\b(although|even though|despite|in spite of|whereas|while)\b/i,'subordinate contrast'],[/\b(not only|never have|rarely|hardly|no sooner|only when)\b/i,'inversion / emphasis'],[/\b(the \w+er\b[^,]*, the \w+er|so \w+ that|such an? \w+ \w+ that|too \w+ to|\w+ enough to)\b/i,'so/such/too/enough or comparative'],[/\b(had|have|has|get|got)\s+(my|his|her|their|our|the)\s+\w+\s+\w+(ed|en|t|cut)\b/i,'causative'],[/\b(said|told|asked|suggested|advised)\b/i,'reported speech'],[/\b(would rather|had better|'d rather|'d better)\b/i,'would rather / had better']];
const LINK={addition:/\b(moreover|furthermore|in addition|besides|what is more|what's more|additionally|also)\b/i,contrast:/\b(however|nevertheless|nonetheless|on the other hand|although|even though|despite|in spite of|whereas|while)\b/i,result:/\b(therefore|consequently|as a result|thus|for this reason|that is why|so that)\b/i,opinion:/\b(in my opinion|in my view|i believe|i strongly believe|from my point of view|as far as i am concerned|personally)\b/i,sequence:/\b(firstly|first of all|secondly|finally|to begin with|then|afterwards|after that|eventually|lastly)\b/i,conclusion:/\b(to sum up|in conclusion|to conclude|all in all|taking everything into account|in short|overall)\b/i,example:/\b(for example|for instance|such as|like)\b/i};
const BASIC=/\b(good|bad|very|thing|things|nice|big|a lot|lots|get|got|stuff|really|so much)\b/gi;
const STOP=new Set('the a an and or but of to in on at for with is are was were be been it this that these those i you he she we they my your his her our their me him us them not no as by from so if than then there here have has had do does did can could will would should may might must also more most very just about into out up which who what when where how all some any one'.split(' '));
const round4=x=>Math.round(x*4)/4;
function mark(text){
 const t=text.replace(/\r/g,''),words=(t.match(/[A-Za-z']+/g)||[]),n=words.length;
 const paras=t.split(/\n\s*\n|\n/).map(s=>s.trim()).filter(s=>s.length>20).length;
 const sentences=t.split(/[.!?]+\s/).filter(s=>s.trim().length>3);
 const errs=[];ERR.forEach(([re,en,es,cat])=>{re.lastIndex=0;let m;while((m=re.exec(t))){errs.push({i:m.index+(m[1]&&cat==='Strategic'&&re.source.startsWith('(^')?m[1].length:0),len:m[0].length-(m[1]&&cat==='Strategic'&&re.source.startsWith('(^')?m[1].length:0),txt:m[0].trim(),en,es,cat});if(!re.global)break}});
 const contr=(t.match(CONTR)||[]);
 const adv=ADV.filter(([re])=>re.test(t)).map(x=>x[1]);
 const links=Object.entries(LINK).filter(([,re])=>re.test(t)).map(x=>x[0]);
 const lw=words.map(w=>w.toLowerCase()),content=lw.filter(w=>!STOP.has(w)&&w.length>2);
 const ttr=content.length?new Set(content).size/content.length:0;
 const longw=lw.filter(w=>w.length>=8).length/(n||1);
 const freq={};content.forEach(w=>freq[w]=(freq[w]||0)+1);const rep=Object.entries(freq).filter(([w,c])=>c>=4&&w.length>3).sort((a,b)=>b[1]-a[1]).slice(0,4);
 const basic=(t.match(BASIC)||[]).map(x=>x.toLowerCase());
 const gErr=errs.filter(e=>e.cat==='Grammar').length,vErr=errs.filter(e=>e.cat==='Vocabulary').length,sErr=errs.filter(e=>e.cat==='Strategic').length;
 // criteria
 const lenOK=n>=115&&n<=170;
 const strat=(paras>=3&&lenOK&&sErr<=1&&contr.length<=2)?.25:0;
 let gram=1-gErr*.15-(adv.length<2?.25:0)-(adv.length<1?.25:0);if(sentences.length&&n/sentences.length>38)gram-=.25;gram=Math.max(0,round4(Math.min(1,gram)));
 let org=.75;if(paras<3)org-=.25;if(links.length<3)org-=.25;if(links.length<2)org-=.25;if(!links.includes('conclusion')&&!links.includes('opinion')&&!links.includes('sequence'))org-=.25;org=Math.max(0,round4(org));
 let voc=0;voc+=ttr>=.72?.5:ttr>=.62?.35:ttr>=.52?.2:.1;voc+=longw>=.12?.35:longw>=.08?.25:longw>=.05?.15:0;voc+=basic.length<=2?.15:basic.length<=5?.05:0;voc-=vErr*.15+rep.length*.05;voc=Math.max(0,round4(Math.min(1,voc)));
 let total=strat+gram+org+voc;
 if(n<60)total=Math.min(total,1);else if(n<100)total-=.5;
 total=Math.max(0,Math.round(total*4)/4);
 return{n,paras,sentences:sentences.length,errs,contr,adv,links,ttr,longw,rep,basic,lenOK,scores:{strat,gram,org,voc},total};
}
window.WLAB={mark};
})();
