/* GRAMMAR UNITS — In Order Words · 2º Bachillerato
   Para añadir material: copia un bloque de unidad o añade elementos a mc / gap / tr.
   mc:  {q: pregunta, o: [opciones], a: índice correcto (0 = primera), e: explicación}
   gap: {q: frase con ___ , a: [respuestas aceptadas]}
   tr:  {o: frase original, s: comienzo dado  (o bien k: palabra clave), a: [respuestas aceptadas]} */
window.GRAMMAR = [
{
 id:"tenses", name:"Verb tenses", es:"Tiempos verbales", color:"#ef908a",
 theory:`
 <h4>Present perfect vs past simple</h4>
 <p><b>Present perfect</b> (have + past participle): experiencias, acciones con resultado presente o periodo no terminado. Con <i>ever, never, already, yet, just, for, since</i>.<br><b>Past simple</b>: acción terminada en un momento concreto (<i>yesterday, in 2020, ago</i>).</p>
 <p class="ex">I <b>have lost</b> my keys (and I can't find them). / I <b>lost</b> my keys yesterday.</p>
 <h4>Continuous forms</h4>
 <ul><li><b>Present perfect continuous</b>: duración hasta ahora. <i>I've been studying for three hours.</i></li>
 <li><b>Past continuous</b>: acción en progreso interrumpida. <i>I was walking home when it started to rain.</i></li>
 <li><b>Past perfect (continuous)</b>: anterior a otra acción pasada. <i>When we arrived, the film had started.</i></li></ul>
 <h4>Future</h4>
 <table><tr><td><b>will</b></td><td>predicción, decisión espontánea, promesa</td></tr>
 <tr><td><b>be going to</b></td><td>planes / evidencia presente</td></tr>
 <tr><td><b>present continuous</b></td><td>planes fijos con hora y lugar</td></tr>
 <tr><td><b>present simple</b></td><td>horarios: <i>The train leaves at 6.</i></td></tr>
 <tr><td><b>future continuous</b></td><td>acción en progreso en el futuro: <i>This time tomorrow I'll be flying.</i></td></tr>
 <tr><td><b>future perfect</b></td><td>terminado antes de un momento futuro: <i>By June I'll have finished.</i></td></tr></table>
 <p class="tip">PAU: <i>It's the first time I've…</i> → <i>I have never … before</i>; <i>The last time I saw…</i> → <i>I haven't seen … since/for</i>.</p>`,
 mc:[
  {q:"By the time we arrived, the film ___.",o:["has started","had started","started","was starting"],a:1,e:"Past perfect: una acción anterior a otra en pasado."},
  {q:"I ___ English for six years and I still love it.",o:["study","studied","have been studying","had studied"],a:2,e:"Duración que empieza en el pasado y continúa ahora."},
  {q:"This time next week we ___ on a beach in Greece.",o:["will lie","will be lying","will have lain","lie"],a:1,e:"Future continuous: acción en progreso en un momento futuro."},
  {q:"Hopefully, by 2035 scientists ___ a cure for the disease.",o:["will find","will have found","are finding","find"],a:1,e:"Future perfect con 'by + momento futuro'."},
  {q:"She ___ her keys, so she can't get into the flat.",o:["lost","has lost","had lost","was losing"],a:1,e:"Present perfect: resultado visible en el presente."},
  {q:"When I phoned him, he ___ dinner.",o:["had","has had","was having","has been having"],a:2,e:"Past continuous: acción en progreso interrumpida."},
  {q:"How long ___ each other before they got married?",o:["did they know","had they known","have they known","were they knowing"],a:1,e:"Past perfect: duración antes de otro momento pasado. 'Know' es un verbo de estado."},
  {q:"Look at those clouds! It ___ rain.",o:["will","is going to","rains","is raining"],a:1,e:"Be going to: predicción basada en una evidencia presente."}
 ],
 gap:[
  {q:"I ___ (never / see) such a beautiful sunset before last night.",a:["had never seen"]},
  {q:"They ___ (wait) for over an hour when the bus finally came.",a:["had been waiting"]},
  {q:"We ___ (live) here since 2019.",a:["have lived","have been living","'ve lived","'ve been living"]},
  {q:"Don't call at eight: I ___ (have) dinner.",a:["will be having","'ll be having"]},
  {q:"By the end of the course, you ___ (write) over twenty essays.",a:["will have written"]},
  {q:"She ___ (just / finish) her homework, so now she can go out.",a:["has just finished"]},
  {q:"While I ___ (walk) home, it started to snow.",a:["was walking"]},
  {q:"The train ___ (leave) at 6.15 tomorrow morning, so don't be late.",a:["leaves"]}
 ],
 tr:[
  {o:"I started learning the guitar three years ago.",s:"I have",a:["I have been learning the guitar for three years","I have learned the guitar for three years","I have learnt the guitar for three years","I have been learning the guitar for 3 years","I have been learning to play the guitar for three years"]},
  {o:"The last time I saw Mark was in 2023.",s:"I haven't",a:["I haven't seen Mark since 2023"]},
  {o:"This is the first time I have flown.",s:"I have never",a:["I have never flown before"]},
  {o:"It's ages since we went to the cinema.",s:"We haven't",a:["We haven't been to the cinema for ages","We haven't gone to the cinema for ages","We haven't been to the cinema in ages","We haven't gone to the cinema in ages"]},
  {o:"She finished the report and then she went home.",s:"After she had",a:["After she had finished the report, she went home"]},
  {o:"When did you start working here?",s:"How long",a:["How long have you been working here?","How long have you worked here?"]}
 ]
},
{
 id:"modals", name:"Modal verbs", es:"Verbos modales", color:"#7ec9e6",
 theory:`
 <table>
 <tr><td><b>Ability</b></td><td>can, could, be able to</td><td><i>I'll be able to drive next year.</i></td></tr>
 <tr><td><b>Obligation</b></td><td>must (interna), have to (externa), need to</td><td><i>I have to wear a uniform.</i></td></tr>
 <tr><td><b>No obligation</b></td><td>don't have to, don't need to, needn't</td><td><i>You needn't come.</i></td></tr>
 <tr><td><b>Prohibition</b></td><td>mustn't, can't, not be allowed to</td><td><i>You mustn't smoke here.</i></td></tr>
 <tr><td><b>Advice</b></td><td>should, ought to, had better</td><td><i>You'd better hurry.</i></td></tr>
 <tr><td><b>Deduction</b></td><td>must (seguro), might/may/could (posible), can't (imposible)</td><td><i>He can't be at home.</i></td></tr>
 <tr><td><b>Permission</b></td><td>can, could, may, be allowed to</td><td><i>May I come in?</i></td></tr>
 </table>
 <p class="tip">Ojo: <b>mustn't</b> = prohibido; <b>don't have to</b> = no es necesario. <i>Ought</i> y <i>be able</i> llevan <b>to</b>; <i>had better</i> va sin to.</p>`,
 mc:[
  {q:"You ___ wear a uniform at our school; it's optional.",o:["mustn't","don't have to","can't","shouldn't"],a:1,e:"Ausencia de obligación: don't have to."},
  {q:"He ___ be at home: the lights are off and his car isn't there.",o:["must","can't","should","has to"],a:1,e:"Deducción negativa segura: can't."},
  {q:"After years of practice, she ___ to speak four languages.",o:["can","is able","could","must"],a:1,e:"Solo 'be able' va seguido de 'to'."},
  {q:"You ___ better leave now or you'll miss the bus.",o:["would","had","should","must"],a:1,e:"Had better + infinitivo sin to."},
  {q:"Students ___ use their phones during the exam. It's forbidden.",o:["don't have to","needn't","mustn't","might not"],a:2,e:"Prohibición: mustn't."},
  {q:"Take an umbrella. It ___ rain later.",o:["must","might","can't","has to"],a:1,e:"Posibilidad: might / may / could."},
  {q:"When I was five, I ___ swim, but I couldn't ride a bike.",o:["could","can","was able","must"],a:0,e:"Habilidad general en el pasado: could."},
  {q:"You ___ to see a doctor about that cough.",o:["should","ought","must","had"],a:1,e:"Ought to: consejo."}
 ],
 gap:[
  {q:"You ___ smoke in hospitals. It's against the law.",a:["mustn't","must not","can't","cannot"]},
  {q:"I ___ to finish this project by Friday; my boss insists.",a:["have","need"]},
  {q:"We ___ hurry. The film doesn't start until nine.",a:["needn't","don't need to","don't have to","need not"]},
  {q:"___ I borrow your pen, please?",a:["Can","Could","May"]},
  {q:"She's been working all day. She ___ be exhausted.",a:["must"]},
  {q:"I'm afraid I won't ___ to come to your party.",a:["be able"]},
  {q:"You ___ apologise to her. You were really rude.",a:["should","ought to","must"]},
  {q:"Visitors are not ___ to take photos inside the museum.",a:["allowed","permitted"]}
 ],
 tr:[
  {o:"It isn't necessary for you to bring any food.",k:"NEED",a:["You don't need to bring any food","You needn't bring any food"]},
  {o:"I'm sure she is telling the truth.",s:"She must",a:["She must be telling the truth"]},
  {o:"It's not possible that he is the thief.",s:"He can't",a:["He can't be the thief","He cannot be the thief"]},
  {o:"It's a good idea to revise every day.",s:"You should",a:["You should revise every day"]},
  {o:"Perhaps they will win the match.",s:"They",a:["They might win the match","They may win the match","They could win the match"]},
  {o:"Smoking is not allowed in this building.",s:"You",a:["You mustn't smoke in this building","You can't smoke in this building","You aren't allowed to smoke in this building","You are not allowed to smoke in this building"]}
 ]
},
{
 id:"modal-perfects", name:"Modal perfects", es:"Modales perfectos", color:"#7eb991",
 theory:`
 <p>Modal + <b>have + past participle</b> para hablar del pasado.</p>
 <table>
 <tr><td><b>must have</b></td><td>deducción segura</td><td><i>The ground is wet. It must have rained.</i></td></tr>
 <tr><td><b>can't / couldn't have</b></td><td>imposible</td><td><i>She can't have seen me.</i></td></tr>
 <tr><td><b>may / might / could have</b></td><td>posibilidad</td><td><i>I might have left it at home.</i></td></tr>
 <tr><td><b>should / ought to have</b></td><td>crítica, arrepentimiento</td><td><i>You should have told me.</i></td></tr>
 <tr><td><b>shouldn't have</b></td><td>se hizo, pero fue un error</td><td><i>I shouldn't have eaten so much.</i></td></tr>
 <tr><td><b>needn't have</b></td><td>se hizo, pero no era necesario</td><td><i>You needn't have cooked.</i></td></tr>
 <tr><td><b>could have</b></td><td>posibilidad que no ocurrió</td><td><i>You could have been hurt.</i></td></tr>
 </table>
 <p class="tip">Diferencia: <i>I needn't have bought it</i> (lo compré, innecesariamente) / <i>I didn't need to buy it</i> (no era necesario; normalmente no lo compré).</p>`,
 mc:[
  {q:"The ground is wet. It ___ rained last night.",o:["must have","can't have","should have","needn't have"],a:0,e:"Deducción segura sobre el pasado."},
  {q:"You ___ told me it was your birthday! I'd have bought you a present.",o:["must have","should have","might have","can't have"],a:1,e:"Crítica: should have + participio."},
  {q:"She ___ seen me; she was looking the other way.",o:["must have","can't have","should have","needn't have"],a:1,e:"Imposibilidad en el pasado."},
  {q:"I ___ cooked so much food. Only three people came.",o:["mustn't have","needn't have","can't have","couldn't have"],a:1,e:"Se hizo pero no era necesario."},
  {q:"I'm not sure where my wallet is. I ___ left it at the café.",o:["must have","might have","should have","can't have"],a:1,e:"Posibilidad: might have."},
  {q:"You were lucky. You ___ had a serious accident.",o:["could have","must have","should have","needn't have"],a:0,e:"Posibilidad que no llegó a ocurrir."},
  {q:"He failed the exam. He ___ studied harder.",o:["might have","ought to have","can't have","needn't have"],a:1,e:"Crítica / consejo tardío."}
 ],
 gap:[
  {q:"They aren't answering the phone. They ___ (go) out.",a:["must have gone"]},
  {q:"You ___ (not / shout) at him. He's only a child.",a:["shouldn't have shouted","should not have shouted"]},
  {q:"Marta ___ (not / write) this essay. It's full of mistakes and she's an excellent writer.",a:["can't have written","couldn't have written","cannot have written","could not have written"]},
  {q:"I'm not sure, but I think I ___ (leave) the oven on.",a:["may have left","might have left","could have left"]},
  {q:"We ___ (take) a taxi. The station was only five minutes away.",a:["needn't have taken","need not have taken"]},
  {q:"Thanks for your help. I ___ (not / finish) without you.",a:["couldn't have finished","could not have finished","wouldn't have finished","would not have finished"]}
 ],
 tr:[
  {o:"I'm sure he forgot about the meeting.",s:"He must",a:["He must have forgotten about the meeting"]},
  {o:"It was a mistake to sell the car.",s:"We shouldn't",a:["We shouldn't have sold the car"]},
  {o:"It's impossible that she saw the email.",s:"She can't",a:["She can't have seen the email","She cannot have seen the email"]},
  {o:"Perhaps they missed the train.",s:"They",a:["They may have missed the train","They might have missed the train","They could have missed the train"]},
  {o:"It wasn't necessary for me to buy a ticket, but I did.",s:"I needn't",a:["I needn't have bought a ticket"]}
 ]
},
{
 id:"passive", name:"The passive", es:"La voz pasiva", color:"#fee67c",
 theory:`
 <p>Estructura: <b>be</b> (en el tiempo del verbo activo) + <b>past participle</b>. El agente con <b>by</b> solo si es importante.</p>
 <table>
 <tr><td>present continuous</td><td><i>The road is being repaired.</i></td></tr>
 <tr><td>present perfect</td><td><i>My bike has been stolen.</i></td></tr>
 <tr><td>past perfect</td><td><i>The tickets had been sold.</i></td></tr>
 <tr><td>future / modal</td><td><i>It will be built. It must be done.</i></td></tr>
 <tr><td>modal perfect</td><td><i>It should have been sent.</i></td></tr>
 </table>
 <h4>Dos objetos</h4><p class="ex">They gave <b>us</b> homework → <b>We were given</b> homework.</p>
 <h4>Pasiva impersonal (muy frecuente en la PAU)</h4>
 <ul><li><i>People say that he is rich</i> → <b>It is said that</b> he is rich / <b>He is said to be</b> rich.</li>
 <li>Acción anterior: <i>People believe he stole it</i> → <b>He is believed to have stolen</b> it.</li></ul>`,
 mc:[
  {q:"The new hospital ___ next year.",o:["will build","will be built","is building","will be building"],a:1,e:"Futuro pasivo: will be + participio."},
  {q:"The suspect ___ by the police at the moment.",o:["is questioned","is being questioned","has questioned","questions"],a:1,e:"Presente continuo pasivo."},
  {q:"The letter should ___ yesterday.",o:["have sent","be sent","have been sent","been sent"],a:2,e:"Modal perfecto pasivo: should have been + participio."},
  {q:"It ___ that the company will close.",o:["says","is said","is saying","has said"],a:1,e:"Pasiva impersonal: It is said that…"},
  {q:"She is believed ___ the country last week.",o:["to leave","to have left","leaving","that she left"],a:1,e:"Acción anterior: to have + participio."},
  {q:"I ___ a job in London, but I turned it down.",o:["offered","was offered","have offered","was offering"],a:1,e:"Pasiva con objeto de persona."},
  {q:"By the time we got there, all the tickets ___.",o:["sold","had sold","had been sold","were selling"],a:2,e:"Past perfect pasivo."}
 ],
 gap:[
  {q:"English ___ (speak) all over the world.",a:["is spoken"]},
  {q:"The Mona Lisa ___ (paint) by Leonardo da Vinci.",a:["was painted"]},
  {q:"A new law ___ (just / pass) by Parliament.",a:["has just been passed"]},
  {q:"The results ___ (announce) tomorrow.",a:["will be announced","are going to be announced","are being announced"]},
  {q:"The road ___ (repair) when we drove past.",a:["was being repaired"]},
  {q:"This problem must ___ (solve) immediately.",a:["be solved"]}
 ],
 tr:[
  {o:"Someone has stolen my bike.",s:"My bike",a:["My bike has been stolen"]},
  {o:"People say that the castle is haunted.",s:"It is said",a:["It is said that the castle is haunted","It is said the castle is haunted"]},
  {o:"People say that the castle is haunted.",s:"The castle is said",a:["The castle is said to be haunted"]},
  {o:"They will publish the results online.",s:"The results",a:["The results will be published online"]},
  {o:"People believe that he stole the money.",s:"He is believed",a:["He is believed to have stolen the money"]},
  {o:"The teacher gave us a lot of homework.",s:"We",a:["We were given a lot of homework","We were given a lot of homework by the teacher"]}
 ]
},
{
 id:"causative", name:"Causative", es:"Have / get something done", color:"#f8d2da",
 theory:`
 <ul><li><b>have / get + objeto + participio</b>: otra persona lo hace por nosotros. <i>I had my hair cut.</i></li>
 <li>Experiencias negativas: <i>She <b>had her bag stolen</b>.</i></li>
 <li><b>have + persona + infinitivo sin to</b>: <i>I had the mechanic check the brakes.</i></li>
 <li><b>get + persona + to + infinitivo</b>: <i>I got my brother to help me.</i></li></ul>
 <p class="tip">El verbo <i>have</i> cambia de tiempo: <i>I'm having / I'll have / I've had my car repaired.</i></p>`,
 mc:[
  {q:"I'm going to ___ my hair cut tomorrow.",o:["make","have","do","let"],a:1,e:"have + objeto + participio."},
  {q:"We had our house ___ last month.",o:["paint","painted","painting","to paint"],a:1,e:"Participio después del objeto."},
  {q:"I'll get my brother ___ me with the move.",o:["help","helped","to help","helping"],a:2,e:"get + persona + to + infinitivo."},
  {q:"She ___ her phone stolen on the bus.",o:["had","made","got to","did"],a:0,e:"Experiencia negativa: had + objeto + participio."},
  {q:"The manager had his assistant ___ the documents.",o:["print","printed","to print","printing"],a:0,e:"have + persona + infinitivo sin to."},
  {q:"You should get your eyes ___.",o:["test","tested","to test","testing"],a:1,e:"get + objeto + participio."}
 ],
 gap:[
  {q:"My car broke down, so I ___ (it / repair) at the garage.",a:["had it repaired","got it repaired"]},
  {q:"She is ___ (her wedding dress / make) by a famous designer.",a:["having her wedding dress made","getting her wedding dress made"]},
  {q:"We ___ (our windows / clean) every month.",a:["have our windows cleaned","get our windows cleaned"]},
  {q:"He ___ (his wallet / steal) while he was on holiday.",a:["had his wallet stolen","got his wallet stolen"]},
  {q:"I need to ___ (my passport / renew) before the trip.",a:["have my passport renewed","get my passport renewed"]}
 ],
 tr:[
  {o:"A mechanic is checking my car.",s:"I'm having",a:["I'm having my car checked","I'm having my car checked by a mechanic"]},
  {o:"Somebody cut my sister's hair yesterday.",s:"My sister had",a:["My sister had her hair cut yesterday"]},
  {o:"A professional photographer will take our wedding photos.",s:"We will have",a:["We will have our wedding photos taken","We will have our wedding photos taken by a professional photographer"]},
  {o:"Someone stole his bike last night.",s:"He had",a:["He had his bike stolen last night"]},
  {o:"I persuaded my dad to lend me the car.",s:"I got",a:["I got my dad to lend me the car"]}
 ]
},
{
 id:"reported", name:"Reported speech", es:"Estilo indirecto", color:"#cc7da7",
 theory:`
 <h4>Cambios de tiempo (backshift)</h4>
 <table><tr><td>present simple → past simple</td><td>will → would</td></tr>
 <tr><td>present perfect / past simple → past perfect</td><td>can → could · must → had to</td></tr>
 <tr><td>today → that day · tomorrow → the next day</td><td>ago → before · here → there</td></tr></table>
 <h4>Preguntas y órdenes</h4>
 <ul><li>Orden de afirmación: <i>She asked me <b>where I lived</b>.</i> Sí/no: <b>if / whether</b>.</li>
 <li>Órdenes: <i>He told me <b>(not) to</b> touch it.</i></li></ul>
 <h4>Reporting verbs</h4>
 <table>
 <tr><td>+ to inf.</td><td>offer, promise, refuse, agree, threaten</td></tr>
 <tr><td>+ sb + to inf.</td><td>advise, tell, ask, warn, remind, encourage</td></tr>
 <tr><td>+ -ing</td><td>suggest, deny, admit, recommend</td></tr>
 <tr><td>+ prep + -ing</td><td>apologise for, accuse sb of, insist on, blame sb for</td></tr>
 </table>
 <p class="tip"><b>suggest</b> nunca lleva <i>to</i>: suggest going / suggest that we (should) go.</p>`,
 mc:[
  {q:"She said she ___ the film the week before.",o:["has seen","had seen","saw","sees"],a:1,e:"Backshift: past simple → past perfect."},
  {q:"He asked me where ___.",o:["did I live","I lived","do I live","I live"],a:1,e:"Pregunta indirecta: orden de afirmación y backshift."},
  {q:"My teacher advised me ___ more.",o:["read","reading","to read","that read"],a:2,e:"advise + persona + to + infinitivo."},
  {q:"Tom suggested ___ to the beach.",o:["to go","going","we go to","go"],a:1,e:"suggest + -ing."},
  {q:"She denied ___ the window.",o:["to break","breaking","that break","broke"],a:1,e:"deny + -ing."},
  {q:"They asked me ___ I could help them.",o:["that","whether","what","do"],a:1,e:"Pregunta de sí/no: if / whether."},
  {q:"He told us ___ late again.",o:["not be","to not being","not to be","don't be"],a:2,e:"Orden negativa: not to + infinitivo."}
 ],
 gap:[
  {q:"'I'm tired,' she said. → She said that she ___ tired.",a:["was"]},
  {q:"'We will call you tomorrow.' → They said they would call me ___.",a:["the next day","the following day","the day after"]},
  {q:"'Have you finished?' → She asked me ___ finished.",a:["if I had","whether I had"]},
  {q:"'Don't touch that!' → He told me ___ that.",a:["not to touch"]},
  {q:"'I'm sorry I'm late.' → He apologised ___ late.",a:["for being"]},
  {q:"'I'll help you with your homework.' → My sister offered ___ me with my homework.",a:["to help"]}
 ],
 tr:[
  {o:"'Where do you work?' she asked me.",s:"She asked me",a:["She asked me where I worked"]},
  {o:"'You should see a doctor,' he said to me.",s:"He advised",a:["He advised me to see a doctor"]},
  {o:"'Let's go to the museum,' said Ana.",s:"Ana suggested",a:["Ana suggested going to the museum","Ana suggested that we go to the museum","Ana suggested that we should go to the museum","Ana suggested we go to the museum","Ana suggested we should go to the museum","Ana suggested that they go to the museum","Ana suggested that they should go to the museum"]},
  {o:"'I didn't take the money,' said Paul.",s:"Paul denied",a:["Paul denied taking the money","Paul denied having taken the money","Paul denied that he had taken the money"]},
  {o:"'Are you coming to the party?' Lucy asked us.",s:"Lucy asked us",a:["Lucy asked us if we were coming to the party","Lucy asked us whether we were coming to the party"]},
  {o:"'You broke my phone!' Sara said to Leo.",s:"Sara accused",a:["Sara accused Leo of breaking her phone","Sara accused Leo of having broken her phone"]}
 ]
},
{
 id:"conditionals", name:"Conditionals", es:"Oraciones condicionales", color:"#b9c3df",
 theory:`
 <table>
 <tr><td><b>Zero</b></td><td>If + present, present</td><td><i>If you heat ice, it melts.</i></td></tr>
 <tr><td><b>First</b></td><td>If + present, will</td><td><i>If it rains, we'll stay in.</i></td></tr>
 <tr><td><b>Second</b></td><td>If + past, would</td><td><i>If I were you, I'd go.</i></td></tr>
 <tr><td><b>Third</b></td><td>If + past perfect, would have + pp</td><td><i>If I had known, I'd have come.</i></td></tr>
 <tr><td><b>Mixed</b></td><td>If + past perfect, would + inf.</td><td><i>If I had studied medicine, I'd be a doctor now.</i></td></tr>
 </table>
 <h4>Otros conectores</h4>
 <ul><li><b>unless</b> = if … not (el verbo va en afirmativa): <i>Unless you hurry, you'll be late.</i></li>
 <li><b>as long as / provided (that)</b> = siempre que · <b>in case</b> = por si · <b>otherwise</b> = si no.</li></ul>`,
 mc:[
  {q:"If I ___ more time, I would learn Japanese.",o:["have","had","would have","had had"],a:1,e:"Segunda condicional."},
  {q:"If you heat ice, it ___.",o:["melts","will melt","would melt","melted"],a:0,e:"Condicional cero: verdad general."},
  {q:"If she had left earlier, she ___ the train.",o:["wouldn't miss","won't miss","wouldn't have missed","hadn't missed"],a:2,e:"Tercera condicional."},
  {q:"___ you hurry, you'll be late.",o:["If","Unless","Provided","As long as"],a:1,e:"Unless = if you don't."},
  {q:"If I had studied medicine, I ___ a doctor now.",o:["would be","would have been","will be","am"],a:0,e:"Condicional mixta: pasado → presente."},
  {q:"I'll lend you my notes ___ you give them back tomorrow.",o:["unless","as long as","in case","otherwise"],a:1,e:"As long as = con la condición de que."},
  {q:"Take a jacket ___ it gets cold.",o:["if","unless","in case","provided"],a:2,e:"In case = por si acaso."}
 ],
 gap:[
  {q:"If it ___ (rain) tomorrow, we'll stay at home.",a:["rains"]},
  {q:"If I ___ (be) you, I would apologise.",a:["were","was"]},
  {q:"If they ___ (not / lose) the map, they wouldn't have got lost.",a:["hadn't lost","had not lost"]},
  {q:"We ___ (go) to the concert if we had bought tickets.",a:["would have gone"]},
  {q:"If I won the lottery, I ___ (travel) around the world.",a:["would travel"]},
  {q:"If he hadn't stayed up so late, he ___ (not / be) so tired now.",a:["wouldn't be","would not be"]}
 ],
 tr:[
  {o:"I don't have a car, so I can't drive you home.",s:"If I",a:["If I had a car, I could drive you home","If I had a car, I would drive you home","If I had a car, I would be able to drive you home"]},
  {o:"She didn't study, so she failed the exam.",s:"If she had",a:["If she had studied, she wouldn't have failed the exam","If she had studied, she would have passed the exam"]},
  {o:"You won't pass unless you work harder.",s:"If you",a:["If you don't work harder, you won't pass"]},
  {o:"We missed the bus because we got up late.",s:"If we hadn't",a:["If we hadn't got up late, we wouldn't have missed the bus","If we hadn't gotten up late, we wouldn't have missed the bus"]},
  {o:"I'll go to the party only if you come with me.",k:"PROVIDED",a:["I'll go to the party provided you come with me","I'll go to the party provided that you come with me"]}
 ]
},
{
 id:"wishes", name:"Wishes & regrets", es:"Wish, if only, I'd rather", color:"#c3a48e",
 theory:`
 <table>
 <tr><td><b>wish / if only + past simple</b></td><td>deseo sobre el presente</td><td><i>I wish I were taller.</i></td></tr>
 <tr><td><b>wish / if only + past perfect</b></td><td>arrepentimiento del pasado</td><td><i>I wish I hadn't said that.</i></td></tr>
 <tr><td><b>wish + would</b></td><td>queja: quiero que otro cambie</td><td><i>I wish you would stop.</i></td></tr>
 <tr><td><b>wish + could</b></td><td>habilidad deseada</td><td><i>I wish I could fly.</i></td></tr>
 </table>
 <ul><li><b>It's (high) time</b> + sujeto + past simple: <i>It's time we went home.</i></li>
 <li><b>I'd rather</b> + infinitivo (yo): <i>I'd rather stay.</i> · <b>I'd rather</b> + otra persona + past: <i>I'd rather you didn't tell her.</i></li></ul>`,
 mc:[
  {q:"I wish I ___ taller.",o:["am","were","would be","had been"],a:1,e:"Deseo presente: past simple (were)."},
  {q:"I wish I ___ so much last night. I feel sick.",o:["didn't eat","hadn't eaten","wouldn't eat","don't eat"],a:1,e:"Arrepentimiento del pasado: past perfect."},
  {q:"I wish you ___ interrupting me!",o:["stopped","would stop","had stopped","stop"],a:1,e:"Queja sobre otra persona: would."},
  {q:"It's high time you ___ a job.",o:["get","got","will get","have got"],a:1,e:"It's time + past simple."},
  {q:"I'd rather you ___ anyone about this.",o:["don't tell","didn't tell","not tell","won't tell"],a:1,e:"I'd rather + otra persona + past."},
  {q:"If only I ___ how to fix it!",o:["know","knew","would know","have known"],a:1,e:"If only + past simple."}
 ],
 gap:[
  {q:"I wish I ___ (can) speak French.",a:["could"]},
  {q:"If only we ___ (not / sell) our old house. Prices have doubled!",a:["hadn't sold","had not sold"]},
  {q:"I wish my neighbours ___ (turn) the music down.",a:["would turn"]},
  {q:"It's time we ___ (go) home.",a:["went"]},
  {q:"I'd rather ___ (stay) in tonight, if you don't mind.",a:["stay"]}
 ],
 tr:[
  {o:"I regret not going to university.",s:"I wish I",a:["I wish I had gone to university"]},
  {o:"It's a pity I don't have a bigger flat.",s:"I wish",a:["I wish I had a bigger flat"]},
  {o:"I want you to stop complaining all the time.",s:"I wish you",a:["I wish you would stop complaining all the time","I wish you wouldn't complain all the time"]},
  {o:"You should start revising now.",s:"It's time you",a:["It's time you started revising","It's time you started revising now"]},
  {o:"I'd prefer you not to smoke in here.",s:"I'd rather you",a:["I'd rather you didn't smoke in here"]}
 ]
},
{
 id:"relatives", name:"Relative clauses", es:"Oraciones de relativo", color:"#f6bb83",
 theory:`
 <table>
 <tr><td><b>who / that</b></td><td>personas</td><td><b>which / that</b></td><td>cosas</td></tr>
 <tr><td><b>whose</b></td><td>posesión</td><td><b>where</b></td><td>lugar</td></tr>
 <tr><td><b>when</b></td><td>tiempo</td><td><b>whom</b></td><td>persona, tras preposición</td></tr>
 </table>
 <ul><li><b>Defining</b>: información esencial, sin comas. Se puede omitir el pronombre si es objeto: <i>The book (that) I'm reading…</i></li>
 <li><b>Non-defining</b>: información extra, <b>entre comas</b>, nunca <i>that</i> ni omisión: <i>My sister, who lives in Rome, …</i></li>
 <li><b>which</b> puede referirse a toda la oración: <i>He didn't call, which annoyed me.</i></li></ul>`,
 mc:[
  {q:"The woman ___ car was stolen called the police.",o:["who","whose","which","that"],a:1,e:"Posesión: whose."},
  {q:"Madrid, ___ is the capital of Spain, has over three million inhabitants.",o:["that","which","where","who"],a:1,e:"Non-defining: nunca 'that'."},
  {q:"That's the restaurant ___ we had our first date.",o:["which","where","when","that"],a:1,e:"Lugar: where."},
  {q:"I failed my driving test, ___ was really disappointing.",o:["that","what","which","who"],a:2,e:"'which' se refiere a toda la oración."},
  {q:"The man to ___ I spoke was very helpful.",o:["who","whom","that","which"],a:1,e:"Tras preposición: whom."},
  {q:"2020 was the year ___ everything changed.",o:["where","when","which","what"],a:1,e:"Tiempo: when."}
 ],
 gap:[
  {q:"The students ___ passed the exam will receive a certificate.",a:["who","that"]},
  {q:"My grandmother, ___ is 90, still goes swimming every day.",a:["who"]},
  {q:"This is the town ___ I grew up.",a:["where","in which"]},
  {q:"Do you know the girl ___ brother plays for Real Madrid?",a:["whose"]},
  {q:"The book ___ I'm reading is fascinating.",a:["that","which"]}
 ],
 tr:[
  {o:"That's the man. His dog bit me.",s:"That's the man",a:["That's the man whose dog bit me"]},
  {o:"I met a girl. She speaks five languages.",s:"I met a girl",a:["I met a girl who speaks five languages","I met a girl that speaks five languages"]},
  {o:"Lisbon is a beautiful city. We spent our holidays there.",s:"Lisbon, where",a:["Lisbon, where we spent our holidays, is a beautiful city"]},
  {o:"He didn't call me. This made me angry.",s:"He didn't call me,",a:["He didn't call me, which made me angry"]},
  {o:"The film was boring. We watched it last night.",s:"The film",a:["The film we watched last night was boring","The film that we watched last night was boring","The film which we watched last night was boring"]}
 ]
},
{
 id:"gerunds", name:"Gerunds & infinitives", es:"-ing o to + infinitivo", color:"#b3a5cc",
 theory:`
 <table>
 <tr><td><b>-ing</b></td><td>tras preposición; enjoy, avoid, mind, deny, suggest, finish, can't stand, look forward to, be used to; como sujeto</td></tr>
 <tr><td><b>to + inf.</b></td><td>want, decide, refuse, manage, afford, promise, expect, hope, seem; finalidad; tras adjetivos</td></tr>
 <tr><td><b>inf. sin to</b></td><td>modales; make / let + persona; had better; would rather</td></tr>
 </table>
 <h4>Cambian de significado</h4>
 <ul><li><b>remember / forget + -ing</b>: recuerdo del pasado · <b>+ to</b>: algo que hay que hacer.</li>
 <li><b>stop + -ing</b>: dejar de · <b>stop + to</b>: parar para.</li>
 <li><b>try + -ing</b>: probar · <b>try + to</b>: intentar.</li>
 <li><b>regret + -ing</b>: arrepentirse · <b>regret + to</b>: lamentar comunicar.</li></ul>`,
 mc:[
  {q:"I'm looking forward to ___ you.",o:["see","seeing","to see","seen"],a:1,e:"'to' es preposición: look forward to + -ing."},
  {q:"She stopped ___ a coffee on her way to work.",o:["buying","to buy","buy","bought"],a:1,e:"stop + to: parar para hacer algo."},
  {q:"My parents let me ___ out until midnight.",o:["to stay","staying","stay","stayed"],a:2,e:"let + persona + infinitivo sin to."},
  {q:"He's used to ___ up early.",o:["get","getting","got","to get"],a:1,e:"be used to + -ing."},
  {q:"I'll never forget ___ the Eiffel Tower for the first time.",o:["to see","seeing","see","to seeing"],a:1,e:"forget + -ing: recuerdo del pasado."},
  {q:"We can't afford ___ a new car.",o:["buying","to buy","buy","bought"],a:1,e:"afford + to + infinitivo."},
  {q:"Remember ___ the lights before you leave.",o:["turning off","to turn off","turn off","turned off"],a:1,e:"remember + to: algo que hay que hacer."}
 ],
 gap:[
  {q:"I really enjoy ___ (read) in bed.",a:["reading"]},
  {q:"They decided ___ (move) to the countryside.",a:["to move"]},
  {q:"Would you mind ___ (open) the window?",a:["opening"]},
  {q:"The teacher made us ___ (rewrite) the essay.",a:["rewrite"]},
  {q:"I regret ___ (not / study) harder at school.",a:["not studying","not having studied"]},
  {q:"She managed ___ (finish) the marathon in under four hours.",a:["to finish"]}
 ],
 tr:[
  {o:"It's difficult for me to get up early.",k:"FIND",a:["I find it difficult to get up early","I find getting up early difficult"]},
  {o:"I'm not accustomed to working at night.",s:"I'm not used",a:["I'm not used to working at night"]},
  {o:"'Shall we go out for dinner?' she said.",s:"She suggested",a:["She suggested going out for dinner","She suggested that we go out for dinner","She suggested that we should go out for dinner","She suggested we go out for dinner"]},
  {o:"He said that he would definitely call me.",s:"He promised",a:["He promised to call me"]},
  {o:"My parents won't allow me to go to the festival.",s:"My parents won't let",a:["My parents won't let me go to the festival"]}
 ]
},
{
 id:"linkers", name:"Linkers", es:"Conectores", color:"#7ecfd0",
 theory:`
 <table>
 <tr><td><b>Contraste</b></td><td>although / even though + oración · despite / in spite of + nombre / -ing / the fact that · however, nevertheless · whereas, while</td></tr>
 <tr><td><b>Causa</b></td><td>because, as, since + oración · because of, due to, owing to + nombre</td></tr>
 <tr><td><b>Finalidad</b></td><td>to, in order to, so as to (+ not to) · so that + sujeto + can/could</td></tr>
 <tr><td><b>Consecuencia</b></td><td>so, therefore, as a result, consequently · so + adj + that · such + (a) + adj + noun + that</td></tr>
 <tr><td><b>Adición</b></td><td>moreover, furthermore, in addition, besides, what's more</td></tr>
 <tr><td><b>Conclusión</b></td><td>to sum up, in conclusion, all in all</td></tr>
 </table>
 <p class="tip">Nunca <i>despite of</i>. <i>However</i> va al principio de frase seguido de coma.</p>`,
 mc:[
  {q:"___ the rain, we went for a walk.",o:["Although","Despite","However","Even though"],a:1,e:"Despite + nombre."},
  {q:"She studied hard. ___, she failed the exam.",o:["Although","Despite","However","Because"],a:2,e:"However une dos oraciones separadas."},
  {q:"The flight was cancelled ___ the storm.",o:["because","due to","so that","although"],a:1,e:"Due to + nombre."},
  {q:"I left early ___ miss the traffic.",o:["so that","in order not to","in order to not","for not"],a:1,e:"Finalidad negativa: in order not to / so as not to."},
  {q:"It was ___ a good film that I watched it twice.",o:["so","such","too","very"],a:1,e:"such + a + adjetivo + nombre + that."},
  {q:"Some people love winter, ___ others prefer summer.",o:["whereas","despite","because","so"],a:0,e:"Contraste entre dos ideas: whereas."},
  {q:"___ being tired, he kept working.",o:["Although","In spite of","However","Even though"],a:1,e:"In spite of + -ing."}
 ],
 gap:[
  {q:"___ he was ill, he went to work.",a:["Although","Even though","Though"]},
  {q:"We stayed at home ___ the bad weather.",a:["because of","due to","owing to"]},
  {q:"I saved money ___ that I could travel in summer.",a:["so"]},
  {q:"The exam was ___ difficult that nobody finished it.",a:["so"]},
  {q:"Public transport is cheap. ___, it is environmentally friendly.",a:["Moreover","Furthermore","In addition","Besides","What's more"]}
 ],
 tr:[
  {o:"Although it was expensive, she bought the dress.",s:"Despite",a:["Despite the fact that it was expensive, she bought the dress","Despite it being expensive, she bought the dress","Despite being expensive, she bought the dress","Despite its price, she bought the dress","Despite the price, she bought the dress","Despite the high price, she bought the dress"]},
  {o:"He was tired, but he finished the race.",s:"In spite of",a:["In spite of being tired, he finished the race","In spite of the fact that he was tired, he finished the race","In spite of his tiredness, he finished the race"]},
  {o:"The match was cancelled because it rained heavily.",s:"The match was cancelled due to",a:["The match was cancelled due to the heavy rain","The match was cancelled due to heavy rain","The match was cancelled due to the fact that it rained heavily"]},
  {o:"It was such a hot day that we stayed indoors.",s:"The day was so",a:["The day was so hot that we stayed indoors","The day was so hot we stayed indoors"]},
  {o:"She whispered because she didn't want to wake the baby.",s:"She whispered so as",a:["She whispered so as not to wake the baby","She whispered so as not to wake up the baby"]}
 ]
}
];
