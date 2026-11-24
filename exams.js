/* EXÁMENES PAU INGLÉS · COMUNITAT VALENCIANA (estructura modelo 2026)
   Textos originales escritos para practicar; no son exámenes oficiales.
   q1: 4 afirmaciones True/False con justificación {s, a:"T"|"F", ev: frase del texto}
   q2: 2 preguntas abiertas {q, m: respuesta modelo}
   q3: 4 palabras subrayadas en el texto con su sinónimo + 2 distractores {w:[[palabra, sinónimo]], x:[distractores]}
   q4: 3 preguntas de opción múltiple {q, o:[4 opciones], a: índice correcto}
   q5: {A, B, model: redacción modelo de la opción A} */
window.EXAMS = [
{
 id:"phones", cat:"Education", topic:"Phones at school", color:"#7ec9e6",
 title:"Switching Off to Tune In",
 text:[
 "When the bell rang at the start of the school year, students at a secondary school in the north of England faced an unusual rule: their phones had to stay locked in small pouches until the end of the day. At first, many of them were furious. \"I felt naked without it,\" admits sixteen-year-old Chloe. \"I kept reaching into my pocket for something that wasn't there.\"",
 "The school is not alone. Over the last few years, governments and head teachers across Europe have introduced restrictions on smartphones in classrooms, arguing that the devices damage concentration and contribute to anxiety. Supporters of the bans point out that the average teenager now spends several hours a day looking at a screen, and that constant notifications make it almost impossible to focus on a demanding task for long.",
 "Three months later, the atmosphere at Chloe's school has changed noticeably. Teachers report that lessons start more quickly and that fewer arguments break out during breaks, which used to be dominated by videos and group chats. \"The playground is noisy again,\" says the head teacher, Mr Patel. \"Students are actually talking to each other, playing football, even reading. It sounds old-fashioned, but it's what childhood should look like.\"",
 "Not everyone is convinced, however. Some parents worry that they cannot contact their children in an emergency, and critics argue that schools should teach young people to use technology responsibly rather than simply taking it away. \"Banning phones doesn't prepare students for the real world,\" says one education researcher. \"As soon as they leave the school gates, the phone comes straight back out. What they need is self-control, and you can't learn self-control if the choice is always made for you.\"",
 "The evidence so far is mixed. Several studies have found small improvements in exam results after a ban, particularly among lower-achieving students, while others have found no clear effect at all. What most experts agree on is that rules alone are not enough. Schools that combine restrictions with lessons on digital well-being, and that involve families in the decision, seem to see the most lasting benefits.",
 "As for Chloe, she has surprised herself. \"I still use my phone a lot at home,\" she says, \"but I don't miss it at school any more. I've even started leaving it in another room when I do my homework. I get everything done in half the time.\""
 ],
 q1:[
  {s:"Chloe was happy with the new rule from the beginning.",a:"F",ev:"At first, many of them were furious. \"I felt naked without it,\" admits sixteen-year-old Chloe."},
  {s:"Some people believe that phones make students more anxious.",a:"T",ev:"arguing that the devices damage concentration and contribute to anxiety"},
  {s:"All the studies show that phone bans improve exam results.",a:"F",ev:"while others have found no clear effect at all"},
  {s:"Chloe now finishes her homework more quickly.",a:"T",ev:"I get everything done in half the time."}
 ],
 q2:[
  {q:"Why do supporters of the bans want to restrict phones in schools?",m:"They think smartphones harm students' ability to concentrate and make them more anxious. Since teenagers spend many hours in front of a screen and keep receiving notifications, it is very hard for them to pay attention to difficult work for a long time."},
  {q:"What is the main argument of the people who are against the bans?",m:"They believe that removing phones does not teach young people how to manage technology. In their opinion, schools should help students use devices sensibly and develop self-discipline, because they will use their phones again as soon as they leave school."}
 ],
 q3:{w:[["furious","angry"],["restrictions","limits"],["noticeably","clearly"],["lasting","long-term"]],x:["briefly","weak"]},
 q4:[
  {q:"When the ban was introduced, students...",o:["could keep their phones in their pockets.","had to leave their phones at home.","had to keep their phones in locked pouches.","could use their phones during breaks."],a:2},
  {q:"According to Mr Patel, since the ban...",o:["students argue more during breaks.","breaks have become more active and sociable.","lessons start later than before.","students read less than before."],a:1},
  {q:"The education researcher thinks that...",o:["banning phones teaches self-control.","phones should be allowed in every lesson.","students need to learn to control their own phone use.","parents should decide when students use phones."],a:2}
 ],
 q5:{A:"Opinion essay: Should smartphones be banned in secondary schools? Give reasons and examples.",B:"Narrative: Write about a day when you could not use your phone. What happened and how did you feel?",
 model:"Smartphones are part of almost every teenager's life, so banning them at school is a controversial issue. In my opinion, they should not be used during lessons, although a total ban is not the best solution.\n\nFirstly, phones are a constant distraction. Even on silent, many students check them every few minutes, which makes it difficult to concentrate. Moreover, breaks are a good opportunity to talk to friends face to face.\n\nOn the other hand, phones can be useful learning tools. We can look up words, do quizzes or work on projects, and some families need to contact their children in an emergency.\n\nTo sum up, I believe phones should be kept in our bags during lessons, but teachers should also show us how to use them responsibly. That way, we would learn self-control instead of simply obeying rules."}
},
{
 id:"fashion", cat:"Environment", topic:"Fast fashion", color:"#7eb991",
 title:"The True Cost of a Cheap T-Shirt",
 text:[
 "It has never been easier, or cheaper, to buy new clothes. With a few taps on a phone, a teenager can order a dress, two pairs of trousers and a jacket for less than the price of a cinema ticket and a meal. Online retailers release thousands of new designs every week, and many shoppers now treat clothes as something to wear a few times and then throw away.",
 "This model, known as fast fashion, has a hidden price. The textile industry is one of the most polluting in the world. Growing cotton requires enormous quantities of water, while synthetic fabrics such as polyester are made from oil and release tiny plastic fibres every time they are washed. These microfibres end up in rivers and oceans, where they are swallowed by fish and eventually reach our own plates.",
 "The problem does not end when we get rid of our clothes. Only a small fraction of discarded garments are recycled into new ones. The rest are burned, buried in landfill sites or shipped to countries in Africa and South America, where second-hand markets are often overwhelmed. In some places, mountains of unwanted clothing now cover beaches and fields.",
 "There is also a human cost. Many garments are produced in factories where workers, mostly young women, earn very low wages and work long hours in unsafe conditions. Campaigners argue that when a T-shirt costs less than a sandwich, someone further down the supply chain is paying the difference.",
 "Yet there are signs that attitudes are beginning to shift. Second-hand apps have become hugely popular among young people, who often see buying vintage clothes as both stylish and ethical. Repair cafés, where volunteers teach people how to mend torn jeans or replace a broken zip, are appearing in cities across Europe. Some brands now offer to take back old clothes, although critics say these schemes are sometimes more about marketing than real change.",
 "Experts insist that the most sustainable garment is the one already in your wardrobe. \"We don't need to stop buying clothes altogether,\" says one researcher. \"We just need to buy less, choose better and make things last. If every piece of clothing were worn twice as often, the industry's environmental impact would fall dramatically.\""
 ],
 q1:[
  {s:"Fast fashion clothes are usually expensive.",a:"F",ev:"a teenager can order a dress, two pairs of trousers and a jacket for less than the price of a cinema ticket and a meal"},
  {s:"Plastic fibres from clothes never reach the food we eat.",a:"F",ev:"These microfibres end up in rivers and oceans, where they are swallowed by fish and eventually reach our own plates."},
  {s:"Most unwanted clothes are recycled into new garments.",a:"F",ev:"Only a small fraction of discarded garments are recycled into new ones."},
  {s:"Some critics doubt that brands' take-back schemes are sincere.",a:"T",ev:"critics say these schemes are sometimes more about marketing than real change"}
 ],
 q2:[
  {q:"In what ways is fast fashion harmful for the environment?",m:"Producing cotton uses a huge amount of water, and synthetic clothes release tiny pieces of plastic when we wash them, which pollute rivers and seas. Moreover, very few old clothes are recycled, so most of them are burned or end up in rubbish dumps."},
  {q:"What does the researcher recommend consumers should do?",m:"The researcher does not think we have to give up buying clothes completely. Instead, people should buy fewer items, choose them more carefully and use them for longer, because wearing clothes more often would greatly reduce the damage to the environment."}
 ],
 q3:{w:[["enormous","huge"],["wages","pay"],["mend","repair"],["shift","change"]],x:["reduce","cheap"]},
 q4:[
  {q:"According to the text, many shoppers today...",o:["keep their clothes for many years.","see clothes as something disposable.","prefer buying clothes in physical shops.","only buy second-hand clothes."],a:1},
  {q:"The writer compares a T-shirt to a sandwich to show that...",o:["food is more expensive than clothes.","workers are not paid fairly for cheap clothes.","young people spend too much money.","the fashion industry is growing quickly."],a:1},
  {q:"Repair cafés are places where...",o:["people can buy vintage clothes.","brands collect old clothes.","volunteers teach people to fix their clothes.","clothes are recycled into new ones."],a:2}
 ],
 q5:{A:"For and against essay: What are the advantages and disadvantages of fast fashion?",B:"Narrative: Write about a piece of clothing that is special to you and the story behind it.",
 model:"Fast fashion has changed the way young people buy clothes. Although it has some advantages, I believe its disadvantages are more important.\n\nOn the one hand, cheap clothes allow everyone to follow trends, even with little money. Students can renew their wardrobe for special occasions without spending a fortune, and online shopping is fast and convenient.\n\nOn the other hand, this model has a huge environmental cost. Producing clothes uses enormous amounts of water, and most garments end up in landfill after being worn only a few times. Furthermore, many workers in poor countries earn very low wages in unsafe factories.\n\nIn conclusion, fast fashion seems cheap, but someone else is paying the real price. In my view, we should buy fewer clothes, choose better quality and give second-hand shops a chance."}
},
{
 id:"sleep", cat:"Health", topic:"Teenage sleep", color:"#ef908a",
 title:"Night Owls in a Morning World",
 text:[
 "Every weekday morning, millions of teenagers drag themselves out of bed while it is still dark, swallow a quick breakfast and sit down in a classroom before their brains are fully awake. Parents often blame late nights on phones and video games, and they are partly right. But scientists say there is another, more surprising explanation: teenage bodies are simply programmed to sleep later.",
 "During adolescence, the body begins to release melatonin, the hormone that makes us feel sleepy, around two hours later than it does in children or adults. As a result, a typical sixteen-year-old may not feel tired until well after eleven at night, even if they are exhausted. Asking them to be alert at eight in the morning is, as one sleep researcher puts it, rather like asking an adult to perform at four in the morning.",
 "Experts recommend that teenagers get between eight and ten hours of sleep a night, yet surveys suggest that most get far less, especially during the school week. The consequences go well beyond yawning in maths lessons. Lack of sleep has been linked to poorer memory, difficulty controlling emotions, a weaker immune system and even a higher risk of accidents among young drivers.",
 "For this reason, some schools have experimented with later start times. In several American school districts, moving the first lesson from around half past seven to after half past eight led to better attendance and fewer students falling asleep in class. Teachers also noticed that pupils seemed calmer and more motivated. However, changing the timetable is not always easy, since it affects families' work schedules, school buses and after-school activities.",
 "While they wait for the system to change, teenagers can still take steps to protect their sleep. Specialists advise keeping a regular routine, even at weekends, and avoiding caffeine in the afternoon. Perhaps most importantly, they suggest switching off screens at least an hour before going to bed, as the light they give off tricks the brain into thinking it is still daytime.",
 "\"Sleep is not a luxury or a sign of laziness,\" says one doctor. \"It is when the brain stores what we have learned and repairs itself. Students who sacrifice sleep to study more are often making their own lives harder.\""
 ],
 q1:[
  {s:"Phones and video games are partly responsible for teenagers going to bed late.",a:"T",ev:"Parents often blame late nights on phones and video games, and they are partly right. But scientists say there is another, more surprising explanation"},
  {s:"Teenagers' bodies produce the sleep hormone later than adults' bodies.",a:"T",ev:"the body begins to release melatonin, the hormone that makes us feel sleepy, around two hours later than it does in children or adults"},
  {s:"Most teenagers sleep the recommended number of hours.",a:"F",ev:"yet surveys suggest that most get far less, especially during the school week"},
  {s:"Changing school timetables can cause problems for families.",a:"T",ev:"changing the timetable is not always easy, since it affects families' work schedules, school buses and after-school activities"}
 ],
 q2:[
  {q:"Why do teenagers find it difficult to fall asleep early?",m:"Their bodies produce the hormone that causes sleepiness about two hours later than those of children and adults. Because of this, many teenagers do not feel sleepy until late at night, even when they are very tired."},
  {q:"What practical advice do specialists give teenagers to sleep better?",m:"They recommend going to bed and getting up at the same time every day, including weekends, and not drinking coffee or other drinks with caffeine in the afternoon. Above all, they should stop using screens at least one hour before bedtime."}
 ],
 q3:{w:[["exhausted","worn out"],["alert","awake"],["linked","connected"],["tricks","fools"]],x:["lazy","improves"]},
 q4:[
  {q:"According to a sleep researcher, asking teenagers to be alert at eight in the morning is like...",o:["asking children to stay up late.","asking adults to perform at four in the morning.","asking adults to skip breakfast.","asking teachers to start earlier."],a:1},
  {q:"Lack of sleep has been linked to...",o:["better emotional control.","a stronger immune system.","memory problems.","fewer road accidents."],a:2},
  {q:"Specialists recommend that teenagers...",o:["sleep until midday at weekends.","stop using screens before going to bed.","study late at night.","drink coffee in the afternoon."],a:1}
 ],
 q5:{A:"Opinion essay: Should secondary schools start later in the morning?",B:"Narrative: Write about a night when you could not sleep. What happened?",
 model:"Most secondary schools start at around eight o'clock, so many students get up when it is still dark. In my opinion, schools should start later, as this would benefit students' health and results.\n\nFirst of all, scientists have shown that teenagers naturally fall asleep later than adults. As a result, an early start forces them to sleep fewer hours than they need, and lack of sleep affects memory and concentration.\n\nNevertheless, changing the timetable would not be easy. Classes would finish later, leaving less time for homework, sport or part-time jobs, and many parents need their children to be at school before work.\n\nAll things considered, I believe a slightly later start, for example at nine, would be reasonable. Students would be more awake and the school day would be more productive for everyone."}
},
{
 id:"tourism", cat:"Society", topic:"Overtourism", color:"#f6bb83",
 title:"When Visitors Become Too Many",
 text:[
 "On a summer morning in some of Europe's most famous cities, it can be difficult to see the monuments for the crowds. Narrow streets fill with tour groups following raised umbrellas, cruise ships unload thousands of passengers at once, and residents struggle to get to work. The phenomenon even has a name: overtourism.",
 "Tourism is, of course, a vital source of income. It creates millions of jobs, from hotel staff to tour guides, and it allows small businesses to survive in places that might otherwise be abandoned. Few people want to return to a world in which only the rich could afford to travel abroad. The problem is not tourism itself, but its concentration in a handful of destinations during a few months of the year.",
 "For local people, the effects can be exhausting. In many historic centres, apartments that used to house families have been converted into holiday rentals, pushing up prices and forcing long-term residents to move out. Traditional shops are replaced by souvenir stores and fast-food chains, and the neighbourhood slowly loses the character that attracted visitors in the first place. In recent years, some residents have even organised protests, holding banners asking tourists to go home.",
 "Authorities have responded in different ways. Venice has started charging day-trippers an entry fee on its busiest days, while other cities have limited the number of new tourist flats or kept large cruise ships away from their historic centres. Some popular natural sites now require visitors to book a time slot in advance, in order to protect fragile landscapes from being damaged.",
 "Travellers can also make a difference. Experts encourage tourists to visit popular places outside the peak season, to stay longer in one place rather than rushing between cities, and to explore lesser-known towns and villages, which often welcome the extra income. Choosing locally owned restaurants and accommodation helps ensure that the money spent actually benefits the community.",
 "\"Travel is one of the best ways to understand other cultures,\" says a tourism researcher. \"But if we treat cities like theme parks, we risk destroying the very things we came to see. The goal should be for both visitors and residents to feel at home.\""
 ],
 q1:[
  {s:"The writer believes that tourism itself is the problem.",a:"F",ev:"The problem is not tourism itself, but its concentration in a handful of destinations during a few months of the year."},
  {s:"Some holiday rentals used to be family homes.",a:"T",ev:"apartments that used to house families have been converted into holiday rentals"},
  {s:"Venice charges all visitors an entry fee every day.",a:"F",ev:"Venice has started charging day-trippers an entry fee on its busiest days"},
  {s:"Small villages usually reject tourists' money.",a:"F",ev:"lesser-known towns and villages, which often welcome the extra income"}
 ],
 q2:[
  {q:"In what ways does overtourism affect the people who live in popular cities?",m:"Many flats are rented to tourists instead of families, so housing becomes more expensive and some residents have to leave the area. In addition, traditional shops disappear and the neighbourhood loses its identity."},
  {q:"How can travellers help to reduce the negative effects of tourism?",m:"They can travel when there are fewer tourists, spend more time in a single destination and visit smaller, less famous places. They should also use restaurants and hotels owned by local people so that the community benefits economically."}
 ],
 q3:{w:[["vital","essential"],["abandoned","deserted"],["fragile","delicate"],["rushing","hurrying"]],x:["crowded","expensive"]},
 q4:[
  {q:"According to the text, the main problem of tourism is that...",o:["it does not create enough jobs.","too many tourists visit the same places at the same time.","only rich people can travel.","tourists spend too little money."],a:1},
  {q:"Some residents of historic centres have...",o:["opened souvenir shops.","protested against tourism.","moved to the coast.","become tour guides."],a:1},
  {q:"Some natural sites ask visitors to...",o:["pay a fee on busy days.","visit only in winter.","book a time to visit in advance.","stay longer than one day."],a:2}
 ],
 q5:{A:"For and against essay: Is tourism good or bad for the place where you live?",B:"Narrative: Write about a trip that did not go as planned.",
 model:"Tourism is one of the most important industries in the Valencian Community. Although it causes some problems, I believe it is generally positive for my town.\n\nOn the one hand, visitors bring money and jobs. Many local people work in restaurants, hotels or shops which depend on tourists, and young people can easily find summer jobs. What is more, tourism encourages the council to look after monuments and organise cultural events.\n\nOn the other hand, in summer the beaches and streets are so crowded that residents avoid going out. Rents have also risen because many flats have become holiday apartments.\n\nTo conclude, tourism is positive as long as it is well managed. If visitors were spread throughout the year and tourist flats were limited, both residents and tourists would benefit."}
},
{
 id:"workweek", cat:"Work", topic:"Four-day week", color:"#b3a5cc",
 title:"Four Days a Week",
 text:[
 "For more than a century, the five-day working week has been treated as a fact of life, as fixed as the number of days in a week itself. But a growing number of companies are now asking a question that once seemed absurd: what would happen if employees worked only four days, without any reduction in pay?",
 "In recent years, several countries, including the United Kingdom, Spain and Iceland, have run trials to find out. The idea is simple. Workers keep their full salary and are expected to maintain the same level of productivity, but they gain an extra day off every week. To make this possible, companies cut unnecessary meetings, reduce distractions and look carefully at how time is actually spent.",
 "The early results have impressed many observers. In a number of trials, the majority of participating companies decided to continue with the shorter week once the experiment had ended. Employees reported feeling less stressed and less likely to suffer from burnout, and many said they used their extra day to exercise, spend time with their families or deal with household tasks they had previously squeezed into the weekend. Some firms also found it easier to attract and keep talented staff.",
 "Sceptics, however, warn against drawing conclusions too quickly. Most of the companies that took part chose to do so voluntarily, which suggests they were already well suited to the change. A four-day week may work well in an office, they argue, but it is far harder to apply in hospitals, schools, shops or factories, where someone has to be present at all times. In these sectors, a shorter week might simply mean hiring more staff, which many businesses cannot afford.",
 "There are also concerns that squeezing five days of work into four could make each day more intense. Some workers in the trials admitted that they felt under greater pressure to complete tasks quickly, and that there was less time for informal conversations with colleagues, which are often important for creativity and teamwork.",
 "Whatever happens, the debate is forcing employers to rethink old habits. As one manager put it, \"We used to measure work by the hours people spent at their desks. Now we are learning to measure what they actually achieve.\""
 ],
 q1:[
  {s:"Workers in the trials kept their full salary.",a:"T",ev:"Workers keep their full salary"},
  {s:"Many companies kept the shorter week after the trials.",a:"T",ev:"the majority of participating companies decided to continue with the shorter week once the experiment had ended"},
  {s:"The four-day week is easy to apply in hospitals and schools.",a:"F",ev:"it is far harder to apply in hospitals, schools, shops or factories"},
  {s:"Some workers felt more pressure during the trials.",a:"T",ev:"Some workers in the trials admitted that they felt under greater pressure to complete tasks quickly"}
 ],
 q2:[
  {q:"Why do sceptics believe that the results of the trials could be misleading?",m:"The companies decided to take part on their own, so they were probably already the type of business where a shorter week would work. Moreover, the model is much more difficult to apply in jobs where staff must always be present, such as hospitals or shops."},
  {q:"What benefits did employees mention after working four days a week?",m:"They felt less stressed and were less likely to become exhausted from work. They also had more time to do sport, be with their families or do housework that they previously had to do at the weekend."}
 ],
 q3:{w:[["absurd","ridiculous"],["maintain","keep"],["voluntarily","willingly"],["afford","pay for"]],x:["reduce","quickly"]},
 q4:[
  {q:"To make the four-day week possible, companies...",o:["hire more employees.","cut unnecessary meetings and distractions.","pay workers less.","work longer hours on Fridays."],a:1},
  {q:"Sceptics think the results may not be reliable because...",o:["the trials were too short.","the companies chose to take part voluntarily.","workers did not tell the truth.","the trials only took place in Iceland."],a:1},
  {q:"The manager's final comment suggests that work should be measured by...",o:["the hours spent at a desk.","the number of meetings.","what workers achieve.","how many days people work."],a:2}
 ],
 q5:{A:"For and against essay: A four-day working week.",B:"Narrative: Write about your first experience of working or helping in a job (real or imaginary).",
 model:"The idea of working only four days a week sounds attractive to almost everyone. However, it has both advantages and disadvantages.\n\nThe main advantage is that workers would have more free time to rest, do sport or be with their families. As a consequence, they would probably feel less stressed and be more productive at work. Companies could also save money on energy.\n\nOn the other hand, not all jobs can be organised in this way. Doctors, teachers or shop assistants need to be available every day. Besides, doing the same amount of work in fewer days could make each day longer and more exhausting.\n\nPersonally, I would love to work four days a week, provided that the workload was reasonable. However, I think the model should be adapted to each sector rather than imposed on everyone."}
},
{
 id:"ai", cat:"Technology", topic:"AI in education", color:"#cc7da7",
 title:"A Tutor in Every Pocket",
 text:[
 "It is midnight, the exam is tomorrow and there is a chemistry problem that refuses to make sense. A few years ago, a stressed student would have had to wait until the next lesson or hope that a friend was still awake. Today, they can type the question into an artificial intelligence chatbot and receive a patient, step-by-step explanation within seconds.",
 "Since chatbots became widely available, they have spread through classrooms faster than almost any previous technology. Supporters believe they could offer every student something that has traditionally been available only to the wealthy: a personal tutor. Unlike a human teacher with thirty pupils, an AI assistant never gets tired, never loses its temper and can adapt its explanations to each learner's level and speed.",
 "Teachers, too, are finding uses for the technology. Some use it to prepare exercises, translate materials for students who have recently arrived from abroad or suggest ideas for lessons. Many say it saves them hours of administrative work, giving them more time for what matters most: talking to their students.",
 "Yet the same tools have created serious headaches. When a machine can produce a well-organised essay in a few seconds, it becomes harder for teachers to know whether the work handed in is really the student's own. Some schools have returned to handwritten exams in class, while others have rewritten their assignments to focus on the process of learning rather than the final product.",
 "A deeper worry is that students may stop thinking for themselves. Learning often depends on struggling with a difficult problem, making mistakes and trying again. If an answer is always one click away, there is a risk that young people will skip this effort and remember very little. Chatbots can also make errors with great confidence, presenting false information as if it were fact, so users need to check what they are told.",
 "Most educators now agree that banning AI completely is neither realistic nor desirable. Instead, they argue that schools should teach students how to use it wisely: to ask good questions, to question the answers and to treat the chatbot as a study partner rather than a shortcut. \"A calculator didn't destroy maths,\" says one teacher. \"But we still had to teach people when to use it, and when to put it away.\""
 ],
 q1:[
  {s:"Chatbots can give students step-by-step explanations.",a:"T",ev:"receive a patient, step-by-step explanation within seconds"},
  {s:"AI assistants get tired when they have many students.",a:"F",ev:"an AI assistant never gets tired"},
  {s:"Some schools have gone back to handwritten exams.",a:"T",ev:"Some schools have returned to handwritten exams in class"},
  {s:"Most educators want to ban AI completely.",a:"F",ev:"Most educators now agree that banning AI completely is neither realistic nor desirable."}
 ],
 q2:[
  {q:"Why do supporters compare AI assistants to personal tutors?",m:"Private tutors used to be something only rich families could pay for, but now any student can get individual help. Unlike teachers with large classes, an AI assistant does not get tired or angry and can adjust its explanations to the needs and pace of each student."},
  {q:"Why might AI stop some students from learning properly?",m:"Students learn by working hard on difficult problems, getting things wrong and trying again. If they can get the answer immediately, they may avoid this effort and forget what they have studied. Besides, the information chatbots give is sometimes wrong."}
 ],
 q3:{w:[["wealthy","rich"],["adapt","adjust"],["headaches","problems"],["skip","avoid"]],x:["check","teach"]},
 q4:[
  {q:"Some teachers use AI to...",o:["mark exams automatically.","replace their lessons.","save time on administrative work.","write their students' essays."],a:2},
  {q:"According to the text, it is now harder for teachers to...",o:["prepare exercises.","know whether students wrote their work themselves.","translate materials.","talk to their students."],a:1},
  {q:"The teacher compares AI to a calculator to say that...",o:["AI will destroy education.","students should learn when to use AI and when not to.","calculators are more useful than AI.","maths is no longer important."],a:1}
 ],
 q5:{A:"Opinion essay: Is artificial intelligence a good or a bad thing for education?",B:"Narrative: Write about a time when technology helped you or let you down.",
 model:"Artificial intelligence has arrived in our classrooms very quickly. In my opinion, it can be extremely useful for education, but only if it is used responsibly.\n\nOn the positive side, chatbots can explain difficult concepts at any time and adapt to each student's level. For example, when I don't understand a maths problem at night, I can ask for a step-by-step explanation instead of waiting for the next lesson.\n\nHowever, there are clear risks. Some students simply copy the answers without thinking, so they learn very little. What is more, chatbots sometimes give false information, which can be dangerous if nobody checks it.\n\nTo sum up, AI is neither good nor bad in itself; it depends on how we use it. Schools should teach us to use it as a study partner, not as a way to avoid effort."}
},
{
 id:"influencers", cat:"Technology", topic:"Influencers", color:"#7ec9e6",
 title:"The Influencer Dream",
 text:[
 "Ask a group of teenagers what they want to be when they grow up, and a surprising number will give an answer that did not exist twenty years ago: influencer. The idea is easy to understand. Successful content creators appear to earn a living by doing what they love, travelling to beautiful places and receiving free products, all while being admired by millions of followers.",
 "The reality, however, is far less glamorous. Only a tiny percentage of creators make enough money to live on, and even those who do often describe their work as exhausting. Because social media platforms reward constant activity, many feel obliged to post every day, answer messages late into the night and share details of their private lives. Taking a holiday can mean losing followers, and a change in a platform's rules can wipe out a creator's income overnight.",
 "There are also concerns about the effect influencers have on their audiences. Psychologists warn that carefully edited photos can create unrealistic expectations about appearance and lifestyle, especially among young people who are still developing their sense of identity. Some influencers have been criticised for promoting products they had never actually used, or for failing to make it clear when a post was paid advertising.",
 "In response, several countries have introduced stricter rules. Influencers are now generally required to label sponsored content clearly, and some governments have restricted the promotion of risky products such as gambling or cosmetic surgery. A number of platforms have also started to show warnings when images have been digitally altered.",
 "Not all influence is negative, though. Many creators use their platforms to share useful knowledge, from cooking and science to mental health and languages. Teachers report that students sometimes arrive in class having learned about history or climate change from a well-made video. For some young people from small towns, online communities offer a sense of belonging that they cannot find around them.",
 "Experts agree that the key is critical thinking. \"Social media is not the enemy,\" says one media educator. \"But young people need to ask themselves who is speaking, why they are saying it and who is paying for it. If they can do that, they can enjoy the content without being controlled by it.\""
 ],
 q1:[
  {s:"Most influencers earn enough money to live on.",a:"F",ev:"Only a tiny percentage of creators make enough money to live on"},
  {s:"Influencers may lose followers if they stop posting for a while.",a:"T",ev:"Taking a holiday can mean losing followers"},
  {s:"Edited images can affect the way young people see themselves.",a:"T",ev:"carefully edited photos can create unrealistic expectations about appearance and lifestyle, especially among young people who are still developing their sense of identity"},
  {s:"Influencers can promote any product without restrictions.",a:"F",ev:"some governments have restricted the promotion of risky products such as gambling or cosmetic surgery"}
 ],
 q2:[
  {q:"Why is the life of an influencer not as attractive as it seems?",m:"Very few creators earn enough money, and the job is very tiring. They feel they have to publish content constantly, reply to messages at night and reveal their private lives, and they can lose followers or money if they take a break or a platform changes its rules."},
  {q:"According to the text, what positive aspects can social media content have?",m:"Many creators teach useful things about subjects such as science, cooking, languages or mental health, and some students learn from good videos. Online communities can also make young people from small places feel that they belong to a group."}
 ],
 q3:{w:[["obliged","forced"],["wipe out","destroy"],["risky","dangerous"],["altered","changed"]],x:["honest","improve"]},
 q4:[
  {q:"According to the text, the job of influencer...",o:["has existed for more than twenty years.","is often more demanding than people imagine.","is well paid for most content creators.","allows creators to take long holidays."],a:1},
  {q:"Psychologists are worried that influencers...",o:["make young people buy too many products.","give unrealistic ideas about appearance and lifestyle.","spend too much time travelling.","do not know enough about mental health."],a:1},
  {q:"The media educator believes that young people should...",o:["stop using social media completely.","only follow creators who share useful knowledge.","question the content they see online.","become content creators themselves."],a:2}
 ],
 q5:{A:"Opinion essay: Would you like to be an influencer? Why or why not?",B:"Narrative: Write a story that begins: \"The video had been online for only an hour when my phone started to ring...\"",
 model:"Many teenagers dream of becoming influencers, and I understand why. However, I would not like to have this job, for several reasons.\n\nFirstly, although influencers seem to live a perfect life, very few of them earn enough money. Their income depends on platforms that can change their rules at any moment, so it is a very unstable profession.\n\nSecondly, I value my privacy. Influencers are expected to share every detail of their lives and to be connected all the time. I think this would be exhausting, and it could affect my mental health.\n\nNevertheless, I admire creators who use social media to teach useful things, such as science or languages.\n\nIn conclusion, I prefer to use social media as a hobby rather than as a job. I would rather have a career that gives me stability and free time."}
},
{
 id:"diet", cat:"Health", topic:"Plant-based diets", color:"#7eb991",
 title:"Rethinking the Plate",
 text:[
 "Walk into any supermarket today and you will find shelves full of products that would have been hard to imagine a decade ago: burgers made from peas, milk made from oats and sausages that contain no meat at all. Plant-based eating, once seen as a choice for a small minority, has become a mainstream trend, particularly among young people.",
 "The reasons behind this change vary. For some, it is a question of animal welfare. Others are motivated by health, as diets rich in vegetables, beans and whole grains are associated with a lower risk of heart disease and some types of cancer. However, the argument that has gained most attention in recent years is environmental. Producing meat, especially beef, requires large amounts of land and water and generates a significant share of the world's greenhouse gas emissions.",
 "Not everyone is convinced. Farmers point out that livestock has been part of rural life for thousands of years, and that grazing animals can help maintain certain landscapes. Nutritionists also warn that cutting out animal products without proper planning can lead to deficiencies in nutrients such as vitamin B12, iron or calcium. In addition, some processed meat alternatives contain high levels of salt and additives, which means they are not automatically healthier.",
 "For many families, the main obstacle is practical rather than ideological. Meat substitutes are often more expensive than the products they replace, and traditional recipes are deeply rooted in culture. In Spain, where dishes such as paella or cocido have been passed down through generations, the idea of giving up meat completely can feel like losing part of one's identity.",
 "This is why many experts recommend a flexible approach. Instead of becoming strictly vegetarian or vegan, people can simply eat less meat and choose better quality when they do. The traditional Mediterranean diet, based on vegetables, legumes, olive oil and fish, with meat eaten only occasionally, is often presented as a good model.",
 "Schools and universities are also playing a part. Some canteens now offer a meat-free day each week, and cooking workshops teach students how to prepare cheap, tasty meals with lentils or chickpeas. \"Nobody likes being told what to eat,\" says one dietitian. \"But when people discover that vegetables can be delicious, change happens naturally.\""
 ],
 q1:[
  {s:"Plant-based eating has always been popular.",a:"F",ev:"Plant-based eating, once seen as a choice for a small minority, has become a mainstream trend"},
  {s:"Producing beef needs a lot of land and water.",a:"T",ev:"Producing meat, especially beef, requires large amounts of land and water"},
  {s:"All meat alternatives are healthier than meat.",a:"F",ev:"which means they are not automatically healthier"},
  {s:"No school canteens offer days without meat.",a:"F",ev:"Some canteens now offer a meat-free day each week"}
 ],
 q2:[
  {q:"Why do nutritionists warn about plant-based diets?",m:"If people stop eating animal products without planning their diet carefully, they may not get enough of some nutrients, such as vitamin B12, iron or calcium. Besides, some processed meat substitutes have a lot of salt and additives."},
  {q:"Why is it difficult for many Spanish families to give up meat?",m:"Meat substitutes usually cost more than meat, so they are not always affordable. In addition, meat is an important part of traditional Spanish dishes, so abandoning it can make people feel that they are losing part of their culture."}
 ],
 q3:{w:[["vary","differ"],["deficiencies","shortages"],["obstacle","barrier"],["occasionally","sometimes"]],x:["rarely","advantage"]},
 q4:[
  {q:"The argument for plant-based diets that has received most attention recently is...",o:["animal welfare.","health.","the environment.","price."],a:2},
  {q:"Farmers argue that...",o:["meat alternatives are too expensive.","animals have long been part of rural life.","vegetables are healthier than meat.","people should eat more fish."],a:1},
  {q:"Many experts recommend...",o:["becoming vegan.","eating only processed meat alternatives.","reducing meat consumption.","eating meat every day."],a:2}
 ],
 q5:{A:"Opinion essay: Should people eat less meat? Give your opinion.",B:"Narrative: Write about a special meal that you will never forget.",
 model:"In recent years, more and more people have decided to reduce the amount of meat they eat. In my opinion, eating less meat is a good idea, although I do not think everyone has to become vegetarian.\n\nFirstly, producing meat has a huge impact on the environment, since it uses large amounts of land and water. Secondly, a diet based on vegetables, legumes and fish is healthier, as the Mediterranean diet shows.\n\nHowever, meat is part of our culture. Traditional dishes like paella are an important part of family meals, and meat substitutes are often expensive and full of additives.\n\nTo sum up, I believe the best solution is to find a balance. If we ate meat only a few times a week and chose local products, we would protect both our health and the planet."}
},
{
 id:"volunteering", cat:"Society", topic:"Volunteering", color:"#cc7da7",
 title:"Giving Time, Gaining More",
 text:[
 "Every Saturday morning, while most of her friends are still asleep, seventeen-year-old Lucía walks to a food bank near her home in Valencia. For three hours she sorts donations, packs boxes and helps families carry their shopping to the car. \"At first I did it because a teacher suggested it,\" she explains. \"Now it's the part of the week I look forward to most.\"",
 "Lucía is one of thousands of young Spaniards who give up some of their free time to help others. Volunteers work in hospitals, animal shelters, environmental projects and organisations that support elderly people or refugees. In many cases, their work allows charities to offer services that would otherwise be impossible to fund.",
 "The benefits, however, are not only for those who receive help. Research suggests that volunteering can reduce stress and improve mood, partly because helping others gives people a sense of purpose. Young volunteers also develop skills that are difficult to learn in a classroom, such as teamwork, communication and problem-solving. Many employers value this experience, and some universities take it into account when they assess applications.",
 "Volunteering can also break down barriers between generations and social groups. In one project in Madrid, teenagers visit older people who live alone to teach them how to use video calls. \"I expected to be the teacher,\" says one participant, \"but I've learned far more from them than they have from me. They have told me stories about the city that I'd never read in a book.\"",
 "Despite these advantages, some experts warn that volunteering should not be used to replace paid jobs or public services. They argue that when governments rely too heavily on volunteers, essential work may not be done properly. Others point out that not every young person can afford to work for free, especially if they need a part-time job to support their studies or their family.",
 "For organisations, the challenge is to make volunteering flexible and accessible. Some now offer short projects or online tasks, such as translating documents or designing posters, which can be done from home. As Lucía puts it, \"You don't have to save the world. Even a couple of hours can make a real difference to someone.\""
 ],
 q1:[
  {s:"Lucía started volunteering on her own initiative.",a:"F",ev:"At first I did it because a teacher suggested it"},
  {s:"Volunteering may help people feel less stressed.",a:"T",ev:"Research suggests that volunteering can reduce stress and improve mood"},
  {s:"In the Madrid project, teenagers learn from older people.",a:"T",ev:"I've learned far more from them than they have from me."},
  {s:"Experts agree that governments should depend more on volunteers.",a:"F",ev:"They argue that when governments rely too heavily on volunteers, essential work may not be done properly."}
 ],
 q2:[
  {q:"What skills can young people develop through volunteering?",m:"They can learn to work with other people, to communicate better and to solve problems, which are abilities that are not easy to acquire at school. Companies and some universities appreciate this kind of experience."},
  {q:"Why do some experts have doubts about volunteering?",m:"They are afraid that volunteers might be used instead of paid workers or public services, which could mean that important work is not done well. Moreover, some young people cannot work without being paid because they need money for their studies or family."}
 ],
 q3:{w:[["donations","gifts"],["fund","finance"],["assess","evaluate"],["rely","depend"]],x:["ignore","volunteer"]},
 q4:[
  {q:"At the food bank, Lucía...",o:["cooks meals for families.","sorts and packs donations.","drives families home.","teaches older people."],a:1},
  {q:"Some universities...",o:["only accept students who volunteer.","consider volunteering when they assess applications.","pay students to volunteer.","organise volunteering projects in Madrid."],a:1},
  {q:"Some organisations make volunteering more accessible by...",o:["paying volunteers.","offering short projects and online tasks.","asking volunteers to work every day.","giving volunteers university credits."],a:1}
 ],
 q5:{A:"Opinion essay: Should volunteering be compulsory for secondary school students?",B:"Narrative: Write about a time when you helped someone or someone helped you.",
 model:"Volunteering is a great way to help others, and some people believe it should be compulsory at school. Personally, I think it should be encouraged, but not imposed.\n\nOn the one hand, volunteering teaches values such as solidarity and responsibility. Students who help at a food bank or an animal shelter learn about real problems and develop useful skills like teamwork and communication.\n\nOn the other hand, if volunteering were compulsory, it would lose its meaning. Helping others should be a personal choice, not another obligation. Furthermore, many students already have a heavy workload, and some need part-time jobs to support their families.\n\nIn conclusion, schools should offer volunteering opportunities and give students time to take part, for example through short projects. In this way, more young people would discover how rewarding it is to help others."}
},
{
 id:"space", cat:"Science", topic:"Space tourism", color:"#8c92cb",
 title:"Holidays Beyond the Sky",
 text:[
 "For most of history, only a few hundred highly trained astronauts had ever seen the Earth from space. In recent years, however, that has begun to change. Private companies now sell seats on rockets and spacecraft to anyone who can afford them, and a new industry, space tourism, is slowly taking off.",
 "The experience on offer varies enormously. Some flights last only about ten minutes, rising just above the boundary of space before returning to Earth. Passengers float weightlessly for a few minutes and enjoy a breathtaking view of the planet's curve. Other, far more expensive trips take visitors into orbit for several days. Companies are even planning hotels in space, although these projects remain, for now, on the drawing board.",
 "Supporters argue that space tourism could bring important benefits. The money paid by wealthy customers helps to develop technology that could later make space travel cheaper and safer. Some former passengers also describe a powerful change in perspective, sometimes called the \"overview effect\". Seeing the Earth as a small, fragile ball floating in darkness, they say, makes national borders and conflicts seem unimportant.",
 "Critics, on the other hand, see space tourism as a symbol of inequality. Tickets cost hundreds of thousands of dollars or more, putting them far beyond the reach of ordinary people. At a time when the world faces serious problems such as poverty and climate change, many believe that the money and resources involved could be used more wisely.",
 "The environmental impact is another concern. Although space flights currently produce far less pollution than the global aviation industry as a whole, scientists warn that rocket launches release particles high in the atmosphere, where their effects are not yet fully understood. If the number of flights increases significantly, the impact could become harder to ignore.",
 "Safety, too, remains an issue. Space travel is still far riskier than flying on a commercial plane, and passengers must accept that something could go wrong. Even so, demand appears to be growing. Whether space tourism becomes an everyday holiday option or remains a luxury for a privileged few, it has already changed the way many people imagine the future of travel."
 ],
 q1:[
  {s:"Today only professional astronauts can travel to space.",a:"F",ev:"Private companies now sell seats on rockets and spacecraft to anyone who can afford them"},
  {s:"Hotels in space are already open to tourists.",a:"F",ev:"although these projects remain, for now, on the drawing board"},
  {s:"Some passengers say the trip changed the way they see the world.",a:"T",ev:"Some former passengers also describe a powerful change in perspective"},
  {s:"Scientists do not fully understand how rocket particles affect the atmosphere.",a:"T",ev:"where their effects are not yet fully understood"}
 ],
 q2:[
  {q:"What benefits does space tourism have, according to its supporters?",m:"The money that rich tourists pay can be used to develop new technology, which may make space travel safer and less expensive in the future. In addition, seeing the planet from space can make people realise how small and vulnerable it is, so borders and wars seem less important."},
  {q:"Why are some people worried about the environmental impact of space tourism?",m:"Rockets send particles into the upper atmosphere, and scientists still do not know exactly what effects they have. If many more flights take place in the future, the damage could become a serious problem."}
 ],
 q3:{w:[["breathtaking","spectacular"],["wealthy","rich"],["wisely","sensibly"],["privileged","fortunate"]],x:["dangerous","cheap"]},
 q4:[
  {q:"The shortest space flights...",o:["last several days.","take passengers to a hotel.","last around ten minutes.","go around the Earth several times."],a:2},
  {q:"Critics believe that space tourism...",o:["is too short to be enjoyable.","reflects the inequality in the world.","will help to solve climate change.","should be free for everyone."],a:1},
  {q:"According to the last paragraph, space travel...",o:["is now as safe as flying.","is no longer popular.","is still more dangerous than commercial flights.","has become an everyday holiday option."],a:2}
 ],
 q5:{A:"For and against essay: Space tourism.",B:"Narrative: Imagine you have just returned from a trip to space. Describe your experience.",
 model:"Travelling to space used to be a dream reserved for astronauts, but today private companies offer flights to tourists. This new industry has both advantages and disadvantages.\n\nOn the one hand, space tourism helps to develop new technology. The money paid by rich passengers could make space travel cheaper and safer in the future. Moreover, seeing the Earth from space may make people more aware of how fragile our planet is.\n\nOn the other hand, tickets are extremely expensive, so only a privileged few can enjoy this experience. In addition, rocket launches pollute the atmosphere, and the money could be used to fight poverty or climate change.\n\nIn my opinion, space tourism is exciting, but it should not be a priority. I would rather governments invested in solving the problems we have here on Earth."}
},
{
 id:"housing", cat:"Society", topic:"Leaving home", color:"#f6bb83",
 title:"Still Living at Home",
 text:[
 "In many northern European countries, it is common for young people to leave their parents' home at around twenty. In Spain, the picture is very different. On average, Spaniards become independent around the age of thirty, one of the latest ages in Europe. For many, this is not a matter of choice but of necessity.",
 "The main reason is economic. Rents in large cities have risen much faster than salaries, and young workers are more likely to have temporary contracts and low wages. In some neighbourhoods, a single person would need to spend more than half of their income on rent, which leaves little money for food, transport or savings. Buying a home is even more difficult, since banks usually require a large deposit that few young people can afford.",
 "Cultural factors also play a part. Family ties in southern Europe are traditionally strong, and many parents are happy for their children to stay at home while they study or save money. Living with family can provide emotional support and help young adults avoid debt. Nevertheless, surveys show that most young Spaniards would prefer to have their own place if they could.",
 "Experts warn that delayed independence can have serious consequences. Young people who cannot leave home often postpone important decisions, such as starting a family. Some also report feeling frustrated or stuck, as if their adult life had been put on hold. In the long term, this trend may contribute to the country's falling birth rate.",
 "Different solutions have been proposed. Some governments offer rental assistance for young people or build public housing with affordable rents. Others encourage new forms of living, such as co-living buildings, where residents have a private room but share kitchens, workspaces and gardens. In some cities, older people who live alone rent a room to students at a low price in exchange for company and help with small tasks.",
 "For now, many young people are adapting as best they can. Sharing a flat with friends has become the norm well into people's thirties, and some move to smaller towns where housing is cheaper. As one 29-year-old put it, \"I don't need a big house. I just want a door I can close that's mine.\""
 ],
 q1:[
  {s:"Young Spaniards leave home earlier than young people in northern Europe.",a:"F",ev:"On average, Spaniards become independent around the age of thirty, one of the latest ages in Europe."},
  {s:"Rents have increased more quickly than salaries.",a:"T",ev:"Rents in large cities have risen much faster than salaries"},
  {s:"Most young Spaniards prefer to live with their parents.",a:"F",ev:"surveys show that most young Spaniards would prefer to have their own place if they could"},
  {s:"In some cities, students live with older people.",a:"T",ev:"older people who live alone rent a room to students at a low price in exchange for company and help with small tasks"}
 ],
 q2:[
  {q:"What economic reasons explain why young Spaniards stay at home?",m:"Rents have gone up much more than salaries, and many young people have unstable jobs with low pay, so renting alone would take most of their income. Buying a flat is also very hard, because banks ask for a big initial payment."},
  {q:"What consequences can delayed independence have?",m:"Young people who live with their parents for a long time often delay decisions such as having children, and some feel frustrated because they cannot start their adult lives. In the future, this could make the birth rate fall even more."}
 ],
 q3:{w:[["necessity","need"],["postpone","delay"],["stuck","trapped"],["affordable","inexpensive"]],x:["permanent","encourage"]},
 q4:[
  {q:"Buying a home is difficult for young people because...",o:["banks ask for a large deposit.","there are no homes for sale.","young people prefer renting.","their parents do not allow it."],a:0},
  {q:"Living with family can...",o:["increase young people's debt.","give young people emotional support.","make young people more independent.","help young people start a family earlier."],a:1},
  {q:"In co-living buildings, residents...",o:["share a bedroom.","have a private room but share common spaces.","live with older people.","do not pay rent."],a:1}
 ],
 q5:{A:"For and against essay: Living with your parents until your late twenties.",B:"Narrative: Write about your first day living away from home (real or imaginary).",
 model:"In Spain, many young people live with their parents until they are almost thirty. This situation has both advantages and disadvantages.\n\nOn the one hand, staying at home allows young people to save money while they study or find a stable job. They also receive emotional support from their families and avoid getting into debt.\n\nOn the other hand, living with your parents for so long can delay your independence. Young adults may find it difficult to make their own decisions, and many feel frustrated because they cannot start their own lives. Furthermore, it may cause them to have children later.\n\nIn my opinion, the problem is not living with your parents, but not having a choice. If housing were more affordable, young people could decide freely when to leave home."}
},
{
 id:"videogames", cat:"Leisure & culture", topic:"Video games", color:"#ef908a",
 title:"More Than a Game",
 text:[
 "For decades, video games were blamed for almost everything that worried parents: poor school results, aggressive behaviour and a lack of fresh air. Today, with billions of players worldwide, gaming is one of the biggest entertainment industries on the planet, larger than film and music combined, and attitudes towards it are slowly changing.",
 "Research has found that some types of games can improve certain mental skills. Action games, for example, appear to train players to react quickly and pay attention to several things at once, while strategy and puzzle games encourage planning and problem-solving. Some surgeons even play games to warm up before operations, and pilots have long used simulations as part of their training.",
 "Games are also increasingly social. Instead of playing alone in a dark bedroom, many young people play online with friends, cooperating to complete missions or chatting while they explore virtual worlds. During the pandemic, these online spaces became a lifeline for teenagers who could not meet in person. Competitive gaming, or esports, now fills stadiums, and some universities even offer scholarships to talented players.",
 "However, the picture is not entirely positive. A small proportion of players develop problematic habits, playing for so many hours that their sleep, studies and relationships suffer. The World Health Organization recognises \"gaming disorder\" as a medical condition. Critics also point to the design of some games, which include \"loot boxes\", paid rewards whose contents are random, and argue that these features resemble gambling and can encourage young people to spend money they do not have.",
 "Many experts believe the key issue is not whether people play but how much and what they play. Parents are advised to show interest in their children's games rather than simply banning them, to agree on clear time limits and to keep consoles out of bedrooms at night.",
 "Schools, too, are starting to see potential in games. Teachers use historical strategy games to bring the past to life, and building games to teach geometry or teamwork. \"A good game is like a good book,\" says one teacher. \"It can take you somewhere new and make you think. The problem is never the medium itself, but how we use it.\""
 ],
 q1:[
  {s:"The video game industry is bigger than the film and music industries together.",a:"T",ev:"larger than film and music combined"},
  {s:"Video games have no benefits for players' mental skills.",a:"F",ev:"Research has found that some types of games can improve certain mental skills."},
  {s:"Most players develop gaming problems.",a:"F",ev:"A small proportion of players develop problematic habits"},
  {s:"Some teachers use games in their lessons.",a:"T",ev:"Teachers use historical strategy games to bring the past to life"}
 ],
 q2:[
  {q:"In what ways can video games be social, according to the text?",m:"Many young people play online with their friends, working together to achieve goals or talking while they play. During the pandemic these games helped teenagers stay in contact, and nowadays esports competitions attract large audiences to stadiums."},
  {q:"Why are some people worried about video games?",m:"Some players spend so much time playing that they sleep badly, neglect their studies and have problems with other people. Moreover, some games include paid rewards with random contents, which are similar to betting and can make young people spend too much money."}
 ],
 q3:{w:[["lifeline","support"],["scholarships","grants"],["resemble","look like"],["banning","prohibiting"]],x:["rewards","increase"]},
 q4:[
  {q:"Some surgeons play video games to...",o:["relax after work.","prepare before operations.","train pilots.","learn geometry."],a:1},
  {q:"Critics say that loot boxes...",o:["help players finish missions.","are similar to gambling.","are free rewards.","improve problem-solving."],a:1},
  {q:"Experts advise parents to...",o:["ban video games completely.","play games with their children every night.","be interested in their children's games and set limits.","put consoles in their children's bedrooms."],a:2}
 ],
 q5:{A:"For and against essay: Are video games good for teenagers?",B:"Narrative: Write a story that begins: \"When I pressed START, I had no idea that this game would change my life...\"",
 model:"Video games are one of the most popular hobbies among teenagers. Some people think they are a waste of time, while others believe they have many benefits.\n\nOn the one hand, games can improve skills such as concentration, quick reactions and problem-solving. Moreover, many games are social: we play online with friends, cooperate to complete missions and even make new friends from other countries.\n\nOn the other hand, playing for too many hours can affect our sleep, studies and relationships. In addition, some games encourage players to spend money on random rewards, which is similar to gambling.\n\nIn my opinion, video games are positive as long as we play responsibly. If teenagers set clear limits and chose good games, they could enjoy this hobby without neglecting other important activities."}
},
{
 id:"erasmus", cat:"Education", topic:"Studying abroad", color:"#7ec9e6",
 title:"A Year Away",
 text:[
 "When Marc left his home town near Castellón to spend a year studying engineering in Poland, he could barely say hello in Polish and had never cooked anything more complicated than pasta. \"The first week was terrible,\" he remembers. \"I didn't understand the transport system, I got lost twice and I phoned my mum every night.\" Ten months later, he came home with friends from a dozen countries, a much better level of English and, as he puts it, \"a completely different idea of what I'm capable of\".",
 "Marc's experience is typical of the millions of students who have taken part in Erasmus, the European Union's exchange programme, since it began in 1987. Spain has long been one of the most popular destinations and one of the countries that sends the most students abroad.",
 "Studying in another country offers obvious academic advantages, from access to different teaching methods to the chance to master a foreign language. But many participants say the most important lessons happen outside the classroom. Living independently, managing a budget and adapting to unfamiliar customs help young people become more confident and flexible. Employers often value these qualities, and studies suggest that former exchange students find jobs more easily.",
 "Yet not everyone can take advantage of these opportunities. Although Erasmus provides grants, they rarely cover the full cost of living in another country, particularly in expensive cities. As a result, students from lower-income families are less likely to apply. Others are discouraged by bureaucracy, fear of failing courses taught in another language, or family and work responsibilities at home.",
 "Homesickness and loneliness are also common, especially in the first weeks. Universities have responded by organising welcome events, language exchanges and \"buddy\" programmes in which local students help newcomers settle in. Experts advise students to accept that difficult moments are a normal part of the experience rather than a sign that they have made the wrong decision.",
 "For Marc, the hardest moment came at the end. \"Saying goodbye was much more difficult than arriving,\" he admits. \"But I know I'll see my friends again. Now I have a sofa to sleep on in half of Europe.\""
 ],
 q1:[
  {s:"Marc adapted easily during his first week in Poland.",a:"F",ev:"The first week was terrible"},
  {s:"Spain is not a popular destination for Erasmus students.",a:"F",ev:"Spain has long been one of the most popular destinations"},
  {s:"Erasmus grants usually pay for all of a student's expenses.",a:"F",ev:"they rarely cover the full cost of living in another country"},
  {s:"Some universities have programmes to help new international students.",a:"T",ev:"in which local students help newcomers settle in"}
 ],
 q2:[
  {q:"What personal skills can students develop by studying abroad?",m:"By living on their own in another country, they learn to organise their money and to adapt to different habits. As a result, they become more self-confident and adaptable, qualities that companies appreciate."},
  {q:"Why don't all students take part in exchange programmes?",m:"The grants are usually not enough to pay for everything, so students from poorer families often cannot afford it. Other students are put off by paperwork, are afraid of failing subjects in a foreign language or have responsibilities at home."}
 ],
 q3:{w:[["barely","hardly"],["master","perfect"],["unfamiliar","strange"],["discouraged","put off"]],x:["encouraged","rarely"]},
 q4:[
  {q:"Before leaving for Poland, Marc...",o:["spoke some Polish.","had little cooking experience.","had already lived abroad.","knew the transport system well."],a:1},
  {q:"According to the text, students from lower-income families...",o:["receive bigger grants.","are less likely to apply for Erasmus.","prefer expensive cities.","find jobs more easily."],a:1},
  {q:"For Marc, the most difficult moment was...",o:["his first week.","getting lost.","saying goodbye to his friends.","taking exams in another language."],a:2}
 ],
 q5:{A:"Opinion essay: Would you like to study abroad? Why or why not?",B:"Narrative: Write about a time when you were in a new place and felt lost.",
 model:"Studying abroad is a dream for many young people, and I would definitely like to have this experience during my university studies.\n\nFirstly, living in another country is the best way to improve a foreign language. Instead of studying English only in class, I would have to use it every day. Secondly, I would learn to be more independent, since I would have to manage my own money and solve problems without my family.\n\nHowever, I know it would not be easy. I would probably feel homesick at first, and Erasmus grants are not enough to cover all the costs, so I would need to save money beforehand.\n\nIn conclusion, despite these difficulties, I think studying abroad would help me grow as a person. If I had the opportunity, I would not hesitate to take it."}
},
{
 id:"greencities", cat:"Environment", topic:"Green cities", color:"#7eb991",
 title:"Cities Turn Green",
 text:[
 "On the roof of an old factory in the centre of the city, tomatoes, lettuces and herbs grow in long wooden boxes. A few metres below, traffic moves slowly along a busy avenue. The garden is run by a group of neighbours who, five years ago, decided to transform an empty, grey space into something useful. Today it supplies vegetables to a local school and a community kitchen.",
 "Projects like this one are appearing in cities all over the world. As more than half of the global population now lives in urban areas, planners are looking for ways to make cities healthier and more pleasant places to live. Green roofs, vertical gardens on the walls of buildings and new parks are no longer seen as decoration but as essential infrastructure.",
 "The benefits are considerable. Plants absorb rainwater, which reduces the risk of flooding during heavy storms. Trees provide shade and cool the air, an important advantage in Mediterranean cities, where summer heatwaves are becoming longer and more intense. Green spaces also improve air quality and offer a home to birds, bees and other wildlife.",
 "Perhaps less obviously, nature in the city also benefits people's mental health. Studies have found that living near parks is associated with lower levels of stress and anxiety, and that even short walks among trees can improve concentration. Community gardens add a social dimension, bringing together neighbours of different ages and backgrounds who might otherwise never speak to each other.",
 "Nevertheless, greening cities is not without problems. Space is limited and expensive, and maintaining gardens requires water, money and long-term commitment. Some researchers have also identified an unexpected side effect known as \"green gentrification\": when a neighbourhood becomes greener and more attractive, property prices may rise, forcing the people who originally lived there to move out.",
 "To avoid this, experts recommend involving local residents from the beginning and combining green projects with policies that protect affordable housing. \"A park should be for everyone,\" says one urban planner. \"If the people who fought for it can no longer afford to live next to it, then something has gone wrong.\""
 ],
 q1:[
  {s:"The rooftop garden is managed by local neighbours.",a:"T",ev:"The garden is run by a group of neighbours"},
  {s:"Plants can help to prevent floods.",a:"T",ev:"Plants absorb rainwater, which reduces the risk of flooding during heavy storms."},
  {s:"Green spaces have no effect on people's mental health.",a:"F",ev:"Studies have found that living near parks is associated with lower levels of stress and anxiety"},
  {s:"Greener neighbourhoods can become more expensive to live in.",a:"T",ev:"property prices may rise"}
 ],
 q2:[
  {q:"What environmental benefits do green spaces bring to cities?",m:"Plants soak up rain, so floods are less likely, and trees make cities cooler during heatwaves by giving shade. In addition, they make the air cleaner and provide a habitat for animals such as birds and bees."},
  {q:"How can community gardens help people socially?",m:"They bring together people from the same neighbourhood who are of different ages and come from different backgrounds. Without these gardens, many of them would probably never have the chance to meet and talk."}
 ],
 q3:{w:[["supplies","provides"],["absorb","soak up"],["intense","extreme"],["commitment","dedication"]],x:["decorate","release"]},
 q4:[
  {q:"The vegetables from the rooftop garden go to...",o:["a supermarket.","a local school and a community kitchen.","the neighbours only.","a restaurant."],a:1},
  {q:"Trees are especially important in Mediterranean cities because...",o:["they attract tourists.","they provide shade during longer heatwaves.","they produce fruit.","they reduce traffic."],a:1},
  {q:"Green gentrification happens when...",o:["parks are closed.","neighbours plant too many trees.","rising prices force original residents to leave.","cities build fewer houses."],a:2}
 ],
 q5:{A:"Opinion essay: What could be done to make your town or city greener?",B:"Narrative: Write about a special place in nature that you remember.",
 model:"Like many Mediterranean towns, mine has long, hot summers and few green spaces. In my opinion, there are several things that could be done to make it greener.\n\nFirst of all, the council should plant more trees in the streets and squares. Trees provide shade, reduce the temperature and improve air quality, which would make summers more bearable.\n\nSecondly, empty spaces and rooftops could be turned into community gardens. Not only would they produce food, but they would also bring neighbours together. Schools could take part, so that students learn how to grow vegetables.\n\nFinally, it is essential to reduce traffic in the town centre by creating more pedestrian streets and bike lanes.\n\nTo sum up, a greener town would be healthier and more pleasant for everyone. Small changes could make a big difference."}
},
{
 id:"citizenscience", cat:"Science", topic:"Citizen science", color:"#8c92cb",
 title:"Scientists Without Lab Coats",
 text:[
 "Late on a summer evening, a group of teenagers lies on the grass in a village in Teruel, staring at the sky and counting shooting stars. They are not just enjoying the view. The data they record will be sent to astronomers who are studying meteor showers. Without realising it, these students have become part of a growing movement known as citizen science.",
 "Citizen science invites ordinary people to collect or analyse information for real research projects. Volunteers count birds in their gardens, photograph insects, measure air pollution on their balconies or report jellyfish on the beach using a mobile app. Others help from home by classifying images of distant galaxies or transcribing old documents online.",
 "For scientists, the advantages are enormous. No research team could ever observe every forest, river or coastline at the same time, but thousands of volunteers can. Their observations have helped to track the arrival of invasive species, map the spread of plant diseases and measure the effects of climate change on bird migration. In some cases, amateurs have even made discoveries of their own, such as new planets or previously unknown species.",
 "The benefits for participants are just as important. Taking part in a project teaches people how science actually works, from the need for careful measurement to the importance of checking results. Many volunteers say they pay more attention to their surroundings and feel more connected to nature. Teachers have found that students who take part in real research become more motivated and are more likely to consider a scientific career.",
 "There are, however, some challenges. Data collected by non-experts can contain mistakes, so projects must include methods to check its accuracy, for example by asking several volunteers to analyse the same image. Researchers also have to keep participants interested, since many people sign up enthusiastically but lose interest after a few weeks.",
 "Despite these difficulties, citizen science is growing quickly, helped by smartphones and the internet. \"Science is not just something that happens in laboratories,\" says one ecologist who coordinates a bird-counting project. \"Anyone who is curious and willing to observe carefully can make a real contribution to what we know about the world.\""
 ],
 q1:[
  {s:"The teenagers in Teruel are only watching the stars for fun.",a:"F",ev:"They are not just enjoying the view."},
  {s:"All citizen science projects require volunteers to go outdoors.",a:"F",ev:"Others help from home by classifying images of distant galaxies or transcribing old documents online."},
  {s:"Amateurs have never made scientific discoveries.",a:"F",ev:"In some cases, amateurs have even made discoveries of their own"},
  {s:"Some volunteers lose interest after a short time.",a:"T",ev:"many people sign up enthusiastically but lose interest after a few weeks"}
 ],
 q2:[
  {q:"How can citizen science help scientists?",m:"Researchers cannot watch so many places at once, but large numbers of volunteers can. Thanks to them, scientists have followed the spread of invasive species and plant diseases and studied how climate change affects birds, and some volunteers have even discovered new species or planets."},
  {q:"What do participants gain from taking part in these projects?",m:"They learn how real research is done, for example why it is necessary to measure carefully and to check results. They also notice nature more and feel closer to it, and students become more interested in science."}
 ],
 q3:{w:[["staring","gazing"],["track","follow"],["surroundings","environment"],["accuracy","precision"]],x:["ignore","mistake"]},
 q4:[
  {q:"Citizen science is...",o:["research done only by professional scientists.","ordinary people helping with real research.","a new science subject at school.","a mobile app for astronomers."],a:1},
  {q:"Scientists use volunteers because...",o:["volunteers are cheaper than computers.","they cannot observe so many places at once.","volunteers never make mistakes.","professional research is too slow."],a:1},
  {q:"To check the accuracy of the data, projects may...",o:["ask several volunteers to analyse the same image.","only accept data from teachers.","pay volunteers more.","use only smartphones."],a:0}
 ],
 q5:{A:"Opinion essay: Should students take part in real scientific projects at school?",B:"Narrative: Write about a day when you discovered something surprising in nature.",
 model:"Science is often taught through textbooks, but I believe students should also take part in real scientific projects at school.\n\nFirstly, participating in real research would make science more interesting. Counting birds or measuring pollution in our town is much more motivating than memorising facts, because we can see that our work is useful.\n\nSecondly, these projects teach important skills. We would learn to observe carefully, to collect data and to check results, which are essential not only in science but in many other areas.\n\nIt is true that students might make mistakes, and teachers would need time and training to organise these activities. However, scientists already have methods to check the data.\n\nIn conclusion, citizen science projects could help many students discover a passion for science. Schools should include them in their programmes."}
},
{
 id:"generations", cat:"Society", topic:"Ageing society", color:"#cc7da7",
 title:"Old and Young Under One Roof",
 text:[
 "When eighty-two-year-old Carmen's husband died, the silence in her large flat became unbearable. Her children lived in other cities and she spent whole days without speaking to anyone. Then a local programme put her in touch with Andrés, a twenty-year-old nursing student who was struggling to find an affordable room. Two years later, they share breakfast every morning, and Carmen says she has \"a grandson I chose myself\".",
 "Stories like this reflect one of the biggest changes in European society: the population is ageing. Thanks to better healthcare and living conditions, people live much longer than in the past, while birth rates have fallen sharply. In Spain, there are now more people over sixty-five than children under sixteen, and the proportion of older people is expected to keep rising for decades.",
 "This change brings important challenges. With fewer young workers, governments will find it harder to pay pensions and provide healthcare for an increasing number of retired people. Many older people also suffer from loneliness, which doctors now consider a serious health risk, comparable in some studies to smoking or obesity.",
 "At the same time, older people have a great deal to offer. Many are healthy and active long after retirement, and they look after grandchildren, volunteer in their communities and pass on knowledge and traditions. Some experts argue that society should stop seeing ageing only as a problem and start valuing the experience that older generations bring.",
 "Intergenerational programmes try to do exactly that. Apart from home-sharing schemes like Carmen's, some cities have built residences for older people next to nursery schools, so that children and residents can do activities together. In others, teenagers teach pensioners to use smartphones, while pensioners help teenagers with cooking, gardening or reading.",
 "Participants describe the benefits on both sides, and many programmes now have waiting lists. Older people feel useful and less isolated, while young people learn patience and gain a different perspective on life. \"We tend to live in bubbles of people our own age,\" says one coordinator. \"When those bubbles burst, everyone discovers that they have more in common than they thought.\""
 ],
 q1:[
  {s:"Carmen's children lived near her.",a:"F",ev:"Her children lived in other cities"},
  {s:"Andrés had difficulty finding a room he could pay for.",a:"T",ev:"who was struggling to find an affordable room"},
  {s:"In Spain, there are more children under sixteen than people over sixty-five.",a:"F",ev:"In Spain, there are now more people over sixty-five than children under sixteen"},
  {s:"Doctors consider loneliness a danger to health.",a:"T",ev:"which doctors now consider a serious health risk"}
 ],
 q2:[
  {q:"What problems does an ageing population create?",m:"As there are fewer young people working, it will be more difficult for governments to pay for pensions and medical care for a growing number of retired people. In addition, many elderly people feel lonely, which can seriously damage their health."},
  {q:"How do intergenerational programmes benefit both young and old people?",m:"Elderly people feel that they are useful and less alone. Young people, on the other hand, become more patient and learn to see life from a different point of view."}
 ],
 q3:{w:[["unbearable","intolerable"],["sharply","dramatically"],["pass on","transmit"],["isolated","lonely"]],x:["slightly","welcome"]},
 q4:[
  {q:"The population is ageing because...",o:["young people are leaving Spain.","people live longer and fewer babies are born.","there are fewer hospitals.","older people move to the cities."],a:1},
  {q:"According to some experts, society should...",o:["see ageing only as a problem.","value the experience of older people.","make people retire later.","build more hospitals."],a:1},
  {q:"In some cities, residences for older people have been built...",o:["far from the city centre.","next to nursery schools.","inside universities.","next to hospitals."],a:1}
 ],
 q5:{A:"Opinion essay: Should young people and older people spend more time together?",B:"Narrative: Write about an older person who has been important in your life.",
 model:"Nowadays, young and older people often live in separate worlds. In my opinion, they should spend more time together, because both generations would benefit.\n\nFirstly, older people have a lot of experience and knowledge to share. My grandmother, for instance, has taught me traditional recipes and told me stories about how life was when she was young, which I could never learn from a book.\n\nSecondly, many elderly people suffer from loneliness. If teenagers visited them or helped them with technology, they would feel more useful and connected to society.\n\nOf course, it is not always easy, since young people are busy with their studies and hobbies. However, schools could organise activities with residences or neighbourhood associations.\n\nTo conclude, spending time together would break stereotypes and help both generations understand each other better."}
},
{
 id:"plastic", cat:"Environment", topic:"Plastic in the ocean", color:"#7eb991",
 title:"A Sea of Plastic",
 text:[
 "Every year, millions of tonnes of plastic end up in the world's oceans. Some of it is clearly visible: bottles floating near the shore, bags caught in rocks or fishing nets drifting for hundreds of kilometres. But much of the problem cannot be seen at all. Over time, sunlight and waves break plastic into tiny particles, called microplastics, which are now found everywhere from Arctic ice to the deepest parts of the ocean.",
 "The consequences for marine life are severe. Turtles mistake plastic bags for jellyfish, seabirds feed bottle tops to their chicks, and whales have been found with stomachs full of plastic waste. Smaller animals swallow microplastics, which then move up the food chain. Scientists are still investigating the effects on human health, but microplastics have already been detected in drinking water, salt and even human blood.",
 "Most ocean plastic comes from land. It is carried by rivers, blown by the wind from rubbish dumps or dropped directly by people on beaches. The Mediterranean Sea is particularly affected because it is almost enclosed, so waste that enters it takes a long time to leave. Tourism, crowded coastlines and heavy shipping all add to the pressure.",
 "In recent years, governments have taken action. The European Union has banned several single-use plastic items, including straws, cutlery and cotton buds, and many countries now charge for plastic bags. Some supermarkets have introduced refill stations where customers can bring their own containers. Meanwhile, inventors have designed floating barriers to collect rubbish from rivers before it reaches the sea.",
 "However, many environmental groups argue that cleaning up is not enough. As long as companies keep producing huge amounts of plastic packaging, they say, the problem will continue to grow. They are calling for an international agreement to reduce plastic production, not just to improve recycling, which in practice deals with only a small percentage of the plastic we use.",
 "Individuals can also make a difference. Carrying a reusable bottle, refusing unnecessary packaging and taking part in beach clean-ups may seem like small gestures, but when millions of people change their habits, the effect can be significant. As one marine biologist puts it, \"The ocean doesn't need a few people doing everything perfectly. It needs everyone doing something.\""
 ],
 q1:[
  {s:"All the plastic in the oceans can be easily seen.",a:"F",ev:"But much of the problem cannot be seen at all."},
  {s:"Microplastics have been found in human blood.",a:"T",ev:"microplastics have already been detected in drinking water, salt and even human blood"},
  {s:"Most of the plastic in the sea comes from land.",a:"T",ev:"Most ocean plastic comes from land."},
  {s:"The EU has prohibited some single-use plastic products.",a:"T",ev:"The European Union has banned several single-use plastic items"}
 ],
 q2:[
  {q:"How does plastic affect marine animals?",m:"Some animals confuse plastic with food: turtles eat bags because they look like jellyfish and birds give bottle tops to their young. Large animals like whales can die with their stomachs full of rubbish, and small creatures eat microplastics, which then pass to other animals."},
  {q:"Why do environmental groups think that cleaning up is not enough?",m:"They believe that the problem will keep getting worse if companies continue to make so much plastic packaging. That is why they want countries to agree to produce less plastic, since recycling only solves a very small part of the problem."}
 ],
 q3:{w:[["severe","serious"],["detected","found"],["gestures","actions"],["significant","considerable"]],x:["harmless","removed"]},
 q4:[
  {q:"Microplastics are formed when...",o:["plastic is recycled.","sunlight and waves break plastic into small pieces.","animals eat plastic.","factories produce new bottles."],a:1},
  {q:"The Mediterranean is particularly affected because...",o:["it is very deep.","it is almost enclosed, so waste stays there for a long time.","it has no rivers.","there are no tourists."],a:1},
  {q:"Environmental groups believe that...",o:["recycling is the only solution.","beach clean-ups are useless.","plastic production must be reduced.","companies are doing enough."],a:2}
 ],
 q5:{A:"Opinion essay: Should single-use plastics be completely banned?",B:"Narrative: Write about a day at the beach that you will never forget.",
 model:"Plastic pollution is one of the most serious threats to our oceans. In my opinion, single-use plastics should be completely banned, although this should be done gradually.\n\nFirstly, most single-use items, like straws, bags or cutlery, are used for only a few minutes but remain in the environment for hundreds of years. They kill marine animals and break into microplastics that even reach our food.\n\nSecondly, there are already good alternatives. We can use reusable bottles, cloth bags and containers, and many shops in my town already sell products without packaging.\n\nIt is true that some plastics are necessary, for example in hospitals, and that alternatives can be more expensive. However, these cases could be exceptions.\n\nTo sum up, banning single-use plastics would protect the sea, and it would encourage everyone to change their habits."}
},
{
 id:"streaming", cat:"Leisure & culture", topic:"Music streaming", color:"#ef908a",
 title:"The Price of a Song",
 text:[
 "Twenty years ago, music fans who wanted to listen to a new album had to buy a CD or download it, legally or illegally. Today, millions of songs are available instantly on a smartphone for a small monthly subscription, or even for free with adverts. Streaming has transformed the way we listen to music, and it has saved an industry that piracy had almost destroyed.",
 "For listeners, the advantages are obvious. Streaming platforms offer access to almost every song ever recorded, and their algorithms suggest new artists based on our tastes. A teenager in Alicante can discover a band from Nigeria or Korea in seconds, something unimaginable for previous generations. Many people say they listen to a wider variety of music than ever before.",
 "For musicians, however, the situation is more complicated. Platforms pay artists a tiny amount each time a song is played, usually a fraction of a cent. As a result, only the most popular stars earn significant income from streaming alone. A song that is played a million times may earn just a few thousand euros, which then has to be shared with record labels, producers and songwriters.",
 "This has changed how artists make a living. Live concerts and merchandise, such as T-shirts and posters, have become their main source of income, which partly explains why ticket prices for big tours have risen so sharply. Some musicians also connect directly with fans through crowdfunding platforms, where supporters pay a monthly fee in exchange for exclusive content.",
 "Critics also worry about the influence of algorithms. Because platforms reward songs that keep listeners from skipping, some producers now write shorter tracks with the chorus appearing within the first few seconds. Others fear that recommendation systems push everyone towards the same popular songs, making it harder for new or unusual artists to be heard.",
 "Some fans have responded by returning to physical formats. Sales of vinyl records have grown steadily for more than fifteen years, partly because buyers want to own something they can touch and support their favourite artists more directly. \"Streaming is convenient,\" says one record shop owner, \"but people still want to hold music in their hands. A playlist will never replace the feeling of opening a new record.\""
 ],
 q1:[
  {s:"Before streaming, piracy had seriously damaged the music industry.",a:"T",ev:"it has saved an industry that piracy had almost destroyed"},
  {s:"Musicians receive a lot of money each time a song is played.",a:"F",ev:"Platforms pay artists a tiny amount each time a song is played"},
  {s:"Concert ticket prices have gone up.",a:"T",ev:"ticket prices for big tours have risen so sharply"},
  {s:"Vinyl sales have been falling in recent years.",a:"F",ev:"Sales of vinyl records have grown steadily for more than fifteen years"}
 ],
 q2:[
  {q:"Why is streaming a problem for many musicians?",m:"Platforms give artists very little money every time someone listens to a song, so only the most famous singers earn a lot. Even a song with a million plays generates a small amount, and this has to be divided among several people."},
  {q:"Why have some fans gone back to buying vinyl records?",m:"They like having a physical object that they can touch, and buying records is a more direct way of helping the artists they love. For many people, it is also a more special experience than simply listening to a playlist."}
 ],
 q3:{w:[["instantly","immediately"],["unimaginable","inconceivable"],["steadily","gradually"],["convenient","practical"]],x:["expensive","suddenly"]},
 q4:[
  {q:"Streaming platforms help listeners to...",o:["buy CDs more cheaply.","discover music from different countries.","meet musicians.","write their own songs."],a:1},
  {q:"Nowadays, most artists earn their main income from...",o:["streaming.","CD sales.","concerts and merchandise.","adverts."],a:2},
  {q:"Some producers write shorter songs because...",o:["listeners prefer instrumental music.","platforms reward songs that people don't skip.","they are cheaper to record.","vinyl records are short."],a:1}
 ],
 q5:{A:"For and against essay: Music streaming platforms.",B:"Narrative: Write about a concert or musical event you will never forget.",
 model:"Music streaming has completely changed the way we listen to music. Like most things, it has advantages and disadvantages.\n\nOn the one hand, platforms give us access to millions of songs for a small monthly fee. We can listen to music anywhere, and algorithms help us discover new artists from all over the world. Moreover, streaming has reduced illegal downloads.\n\nOn the other hand, most musicians earn very little money from streaming. Only famous stars make a living from it, so many artists depend on concerts, which have become more and more expensive. In addition, algorithms may make everyone listen to the same songs.\n\nIn my opinion, streaming is very convenient, but we should also support artists in other ways. For example, we could go to local concerts or buy their merchandise."}
},
{
 id:"nomads", cat:"Work", topic:"Remote work", color:"#b3a5cc",
 title:"The Office Is Anywhere",
 text:[
 "Laura begins her working day at nine o'clock, like millions of other people. The difference is that her office is a café overlooking the sea in a small town in Portugal. Last month it was a shared flat in Mexico City, and next month it will probably be somewhere in Asia. Laura is a graphic designer and one of a growing number of \"digital nomads\", professionals who use technology to work from wherever they want.",
 "The trend accelerated during the pandemic, when companies discovered that many jobs could be done remotely. Although some firms have since asked employees to return to the office, others have embraced flexible arrangements, and several countries, including Spain, now offer special visas to attract foreign remote workers.",
 "Supporters of this lifestyle highlight the freedom it offers. Without the need to commute, workers save time and money, and they can organise their day around their personal needs. Living in different places also allows them to experience new cultures and, in many cases, to enjoy a lower cost of living than in their home countries.",
 "However, the reality is not always as idyllic as social media photos suggest. Many nomads admit that they feel lonely, as it is difficult to build lasting friendships when you move every few months. Unreliable internet connections, different time zones and complicated tax rules can turn work into a constant headache. Some also find that, without clear boundaries between work and leisure, they end up working longer hours than before.",
 "The arrival of remote workers is also changing the places they move to. Local businesses welcome the extra income, but in popular destinations such as Lisbon or some Spanish islands, residents complain that rents have risen as landlords prefer to rent to foreigners who can pay more. In some neighbourhoods, cafés full of laptops have replaced traditional shops.",
 "Experts believe that remote work is here to stay, although probably in a hybrid form, combining days at home and in the office. For Laura, the lifestyle is worth the difficulties. \"It isn't a permanent holiday,\" she says. \"I work hard, and sometimes I miss my family terribly. But I've learned more in the last three years than in the previous ten.\""
 ],
 q1:[
  {s:"Laura works in the same place every month.",a:"F",ev:"Last month it was a shared flat in Mexico City, and next month it will probably be somewhere in Asia."},
  {s:"Spain offers special visas for foreign remote workers.",a:"T",ev:"several countries, including Spain, now offer special visas to attract foreign remote workers"},
  {s:"Digital nomads never feel lonely.",a:"F",ev:"Many nomads admit that they feel lonely"},
  {s:"Remote workers have made rents cheaper in popular destinations.",a:"F",ev:"residents complain that rents have risen as landlords prefer to rent to foreigners who can pay more"}
 ],
 q2:[
  {q:"What advantages does working remotely offer, according to its supporters?",m:"Since they do not have to travel to an office, remote workers save both time and money and can plan their day according to their needs. They can also get to know other cultures and often live more cheaply than in their own countries."},
  {q:"How are digital nomads affecting the places where they live?",m:"Local shops and businesses earn more money, but in popular areas housing has become more expensive because owners prefer foreign tenants who can pay higher rents. In some areas, traditional shops have been replaced by cafés for people working with laptops."}
 ],
 q3:{w:[["accelerated","sped up"],["embraced","adopted"],["idyllic","perfect"],["Unreliable","unstable"]],x:["rejected","slowed down"]},
 q4:[
  {q:"The digital nomad trend grew because...",o:["the internet became cheaper.","during the pandemic, companies discovered that many jobs could be done remotely.","Portugal offered free flats.","people stopped using offices completely."],a:1},
  {q:"One problem for digital nomads is that...",o:["they cannot use social media.","they always earn less money.","they may end up working longer hours.","they must return to the office every month."],a:2},
  {q:"Experts think that in the future remote work will probably...",o:["disappear completely.","combine working at home and in the office.","only exist in Portugal.","be forbidden."],a:1}
 ],
 q5:{A:"Opinion essay: Would you prefer to work from home or in an office? Why?",B:"Narrative: Imagine you are a digital nomad. Describe one day of your life.",
 model:"Since the pandemic, many people have started working from home. If I had the choice, I would prefer a combination of both, although I would choose the office for most days.\n\nOn the one hand, working from home has clear advantages. You do not waste time travelling, you can organise your day more freely and you can spend more time with your family.\n\nOn the other hand, I think I would feel lonely without colleagues. In the office, it is easier to share ideas, ask for help and make friends. Moreover, at home it is difficult to separate work from free time, so many people end up working longer hours.\n\nIn conclusion, I believe a hybrid model is the best option. Working from home two days a week would give me flexibility without losing contact with my colleagues."}
},
{
 id:"football", cat:"Leisure & culture", topic:"Women's football", color:"#ef908a",
 title:"A Game for Everyone",
 text:[
 "When Spain won the Women's World Cup in 2023, millions of people across the country celebrated. For many of the players, it was the result of years of sacrifice in a sport that had long ignored them. Some had grown up as the only girl in boys' teams, while others had combined training with part-time jobs because their salaries were too low to live on.",
 "Women's football has a longer history than many people realise. In the early twentieth century, women's matches in England attracted crowds of tens of thousands. However, in 1921 the English football association banned women from playing on its members' grounds, claiming that the sport was unsuitable for them. Similar restrictions in other countries held back the women's game for decades.",
 "In recent years, the situation has changed dramatically. Attendance at women's matches has broken records, television companies compete for broadcasting rights and major clubs have invested in professional women's teams. In Spain, the women's league became professional in 2021, which guaranteed players a minimum salary and better working conditions.",
 "Despite this progress, significant inequalities remain. Female players still earn far less than their male counterparts, and many clubs dedicate fewer resources to women's teams in areas such as medical care, facilities and travel. Women are also under-represented in coaching, refereeing and leadership positions. Players have increasingly used their visibility to demand change, sometimes through strikes and public protests.",
 "Supporters of the women's game argue that its growth benefits society as a whole. Successful female athletes act as role models, encouraging girls to take up sport at an age when many abandon physical activity. Research shows that teenage girls are much more likely than boys to give up sport, often because they feel uncomfortable or unwelcome.",
 "Schools and local clubs can play a key role in changing this. Mixed teams, more female coaches and equal access to sports facilities help girls feel that sport is for them too. As one young player from a Valencian club puts it, \"When I was small, I didn't have posters of women footballers on my wall. Girls today do, and that changes everything.\""
 ],
 q1:[
  {s:"Some players had to work part-time to earn enough money.",a:"T",ev:"others had combined training with part-time jobs because their salaries were too low to live on"},
  {s:"Women's football was not popular in England in the early twentieth century.",a:"F",ev:"women's matches in England attracted crowds of tens of thousands"},
  {s:"Female players now earn the same as male players.",a:"F",ev:"Female players still earn far less than their male counterparts"},
  {s:"Teenage girls are more likely to stop doing sport than boys.",a:"T",ev:"teenage girls are much more likely than boys to give up sport"}
 ],
 q2:[
  {q:"What inequalities still exist in women's football?",m:"Women footballers are paid much less than men, and clubs spend less money on their medical care, training facilities and travel. In addition, there are few women working as coaches, referees or managers."},
  {q:"How can schools and clubs encourage girls to do sport?",m:"They can create teams where boys and girls play together, hire more women as coaches and make sure that girls can use sports facilities as much as boys. This way, girls will feel that sport is also for them."}
 ],
 q3:{w:[["unsuitable","inappropriate"],["dramatically","considerably"],["counterparts","equivalents"],["abandon","quit"]],x:["encourage","slightly"]},
 q4:[
  {q:"In 1921, the English football association...",o:["created a women's league.","banned women from playing on its members' grounds.","organised a women's World Cup.","invested in women's teams."],a:1},
  {q:"Since the Spanish women's league became professional, players...",o:["earn the same as men.","have a guaranteed minimum salary.","do not need to train.","play in England."],a:1},
  {q:"According to the text, successful female athletes...",o:["discourage girls from doing sport.","act as role models for girls.","prefer mixed teams.","earn more than men."],a:1}
 ],
 q5:{A:"Opinion essay: Should men's and women's sport receive the same media attention and investment?",B:"Narrative: Write about a sporting event you took part in or watched.",
 model:"Although women's sport has grown enormously in recent years, it still receives much less attention and money than men's sport. In my opinion, both should be treated equally.\n\nFirstly, female athletes train as hard as male athletes and achieve great results. The Spanish women's football team, for example, won the World Cup in 2023, but its players still earn far less than men.\n\nSecondly, media attention is essential to inspire girls. If they never see women playing sport on television, they may think that sport is not for them, and many girls give up sport as teenagers.\n\nSome people argue that men's sport attracts bigger audiences. However, this is partly because women's competitions have received less publicity for decades.\n\nTo sum up, equal investment would be fairer and would encourage more girls to do sport."}
},
{
 id:"languages", cat:"Education", topic:"Learning languages", color:"#7ec9e6",
 title:"The Multilingual Advantage",
 text:[
 "Nerea grew up in Elche speaking Spanish with her mother, Valencian at school and English with her Irish father. \"As a child, I didn't think it was special,\" she says. \"I just switched from one language to another without noticing.\" Today she studies translation and works part-time as a guide for international visitors. Her story is far from unusual: more than half of the world's population is thought to speak at least two languages.",
 "For a long time, many parents and teachers believed that learning several languages at once could confuse children and slow down their development. Research has largely proved this idea wrong. While bilingual children may sometimes mix languages or have a slightly smaller vocabulary in each one at first, they usually catch up quickly and end up with a valuable skill for life.",
 "Some scientists believe that speaking more than one language also benefits the brain. Because bilinguals constantly have to choose which language to use and ignore the other, they may develop stronger control over attention. Several studies have suggested that lifelong bilingualism can delay the first symptoms of dementia by several years, although other researchers argue that the evidence is mixed and that more research is needed.",
 "The practical advantages are less controversial. Speaking other languages opens doors to jobs, travel and study abroad, and helps people understand other cultures from the inside. Employers in tourism, trade, science and technology increasingly look for candidates who can communicate in several languages, and English in particular has become the main language of international communication.",
 "However, learning a language as a teenager or an adult requires patience. Many students in Spain study English for more than ten years at school but still feel unable to hold a conversation. Experts suggest that the problem is often a lack of real practice. Watching series in their original version, joining language exchanges, reading for pleasure and, above all, losing the fear of making mistakes can make a huge difference.",
 "Nerea agrees. \"People think you need a special talent,\" she says, \"but the secret is to use the language every day, even when you get things wrong. Every mistake you make is a step forward.\""
 ],
 q1:[
  {s:"As a child, Nerea thought that speaking three languages was special.",a:"F",ev:"As a child, I didn't think it was special"},
  {s:"Bilingual children may have a smaller vocabulary in each language at first.",a:"T",ev:"have a slightly smaller vocabulary in each one at first"},
  {s:"All researchers agree that bilingualism delays dementia.",a:"F",ev:"other researchers argue that the evidence is mixed and that more research is needed"},
  {s:"Experts believe that students already get enough real practice in English.",a:"F",ev:"the problem is often a lack of real practice"}
 ],
 q2:[
  {q:"What are the practical advantages of speaking several languages?",m:"Knowing other languages gives people more opportunities to find a job, travel or study in another country, and it helps them understand other cultures better. Many companies prefer workers who can communicate in different languages, especially English."},
  {q:"What do experts recommend to improve a foreign language?",m:"They suggest practising in real situations, for example by watching series in the original language, taking part in conversation exchanges and reading for fun. Most importantly, learners should not be afraid of making mistakes."}
 ],
 q3:{w:[["switched","changed"],["confuse","puzzle"],["delay","postpone"],["controversial","debatable"]],x:["accelerate","obvious"]},
 q4:[
  {q:"Many parents used to believe that learning several languages at once...",o:["was easy for adults.","could confuse children.","improved children's development.","was only useful for translators."],a:1},
  {q:"Bilinguals may develop stronger control over attention because...",o:["they study more hours.","they constantly have to choose which language to use.","they travel a lot.","they sleep better."],a:1},
  {q:"Nerea thinks that the secret to learning a language is...",o:["having a special talent.","never making mistakes.","using it every day.","studying grammar for ten years."],a:2}
 ],
 q5:{A:"Opinion essay: Is it important to learn foreign languages today? Why?",B:"Narrative: Write about a situation in which you had to communicate in English.",
 model:"In today's globalised world, learning foreign languages has become more important than ever. In my opinion, speaking at least one foreign language is essential for young people.\n\nFirstly, languages open doors to better jobs. Many companies, especially in tourism and technology, look for employees who can communicate in English and other languages. Secondly, speaking other languages allows us to travel, study abroad and make friends from different countries.\n\nMoreover, learning a language helps us understand other cultures. When you speak someone's language, you can understand their way of thinking much better.\n\nIt is true that learning a language requires time and effort, and many students feel frustrated. However, if we practised more in real situations and lost our fear of making mistakes, we would make faster progress.\n\nIn conclusion, learning languages is an investment for the future."}
}
];
