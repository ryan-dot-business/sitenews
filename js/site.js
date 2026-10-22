(function(){
var IMG = {
  antlogo:'assets/img/ant-logo.png',
  ant:'assets/img/ant.jpg', carney:'assets/img/carney.jpg', nickel:'assets/img/nickel.jpg',
  fortis:'assets/img/fortis.jpg', port:'assets/img/port.jpg', forty:'assets/img/forty.jpg', avatar:'assets/img/avatar.png', truck:'assets/img/ant-truck.jpg', pmsept:'assets/img/pm-sept.jpg', emav:'assets/img/em-avatar.png', wsp:'assets/img/wsp.png', em40:'assets/img/em-40.jpg', emcity:'assets/img/em-city.jpg', merger:'assets/img/merger.jpg', careers:'assets/img/careers.jpg', pomerleau:'assets/img/pomerleau.jpg', bell:'assets/img/bell.jpg', ellisdon:'assets/img/ellisdon.jpg', pacific:'assets/img/pacific.jpg', lng:'assets/img/lng.jpg', lang:'assets/img/ant-langston.jpg', pod:'assets/img/podcast-art.png', podart:'assets/img/pod-cover-sm.jpg', podcover:'assets/img/pod-cover.jpg', podhero:'assets/img/pod-hero.jpg'
};
var RH='Russell Hixson', ST='Staff';
function P(t){return{k:'p',t:t}} function N(t){return{k:'note',t:t}} function S(h,t){return{k:'s',h:h,t:t}}
function L(pre,link,post,to){return{k:'lead',pre:pre,link:link||'',post:post||'',to:to||''}} function M(n,r){return{k:'mv',n:n,r:r}}
var NL={k:'nl'};
function KT(a){return{k:'kt',items:a}} var WS={k:'ws'}; function H3(t){return{k:'h3',t:t}} function TL(a){return{k:'tl',items:a}}
function Q(t,first){return{k:'q',t:t,first:!!first}} function A2(n,t){return{k:'ans',n:n,t:t}} function FIG(src,cap,alt){return{k:'fig',src:src,cap:cap,alt:alt||''}}
function J(n,title,sal,quip,t){return{k:'job',n:n,title:title,sal:sal,quip:quip,t:t}}
function PM(name,verb,org,tail){return{k:'pm',name:name,verb:verb,org:org,tail:tail}}
function li(u){return 'https://www.linkedin.com/search/results/people/?keywords='+encodeURIComponent(u)} function gs(u){return 'https://www.google.com/search?q='+encodeURIComponent(u)}
var A = {
 bcs:{tag:'Economy',topic:'Economy',title:'5 big takeaways from the Building Canada Strong Act',dek:'Ottawa has a bold legislative foundation to attract $1 trillion in investment.',author:RH,av:1,date:'Oct 6, 2026',img:'carney',alt:'Prime Minister Mark Carney greets construction workers in hard hats',credit:'via X @MarkJCarney',b:[
  L('The federal government introduced landmark legislation this month designed to overhaul Canada’s infrastructure ','approvals process',', expedite regulatory reviews and accelerate the flow of private capital into major national projects.','pacific'),
  P('Bill C-39, titled the Building Canada Strong Act, aims to transform how critical infrastructure, transport corridors and energy projects are built across the country. Accompanied by a binding Cabinet directive, the proposed reforms establish a faster, more predictable framework designed to eliminate regulatory gridlock and attract large-scale investment while maintaining environmental standards and upholding Indigenous rights.'),
  P('For construction industry professionals, here are the top five takeaways from the proposed legislation.'),NL,
  S('1.  Strict one-year ceiling','The central reform of Bill C-39 is the establishment of a binding 12-month limit for federal reviews and final decisions on major infrastructure applications. Under the new legislation and parallel Cabinet directive, federal authorities must complete all environmental and regulatory evaluations within one year of receiving a comprehensive application from a proponent. For project developers and capital allocators, this structural shift eliminates multi-year delays, reduces carrying costs during front-end engineering design, and provides a clear timeline for capital deployment.'),
  S('2.  Designated corridors & streamlined office','To eliminate chronic supply chain bottlenecks and modernize logistical gateways, the legislation establishes designated strategic trade corridors and creates a specialized Transportation Project Office. This new office will coordinate federal permitting to advance priority transit and shipping assets within the target one-year window. Additionally, legislative updates to port governance and supply chain digitalization aim to cut administrative overhead, enhance port competitiveness and create predictable conditions for private infrastructure financing.'),
  S('3.  Structured Indigenous consultation and standardized mitigation','Bill C-39 restructures regulatory engagement to provide clearer rules for proponents and Indigenous groups participating in project consultations. While maintaining Canada’s constitutional duty to consult, the bill introduces standardized timelines and formalizes a mitigation hierarchy policy aligned with Canada’s Nature Strategy. This framework gives developers clear, upfront guidelines regarding environmental offsetting and project design, significantly reducing late-stage legal and regulatory risk for institutional investors.'),
  S('4.  Altering labour frameworks','The proposed legislation updates the Canada Labour Code to foster stable labour relations and protect project timelines from costly disputes. The changes emphasize early dispute resolution during collective bargaining while explicitly safeguarding the right to strike. To support safer worksites and enforce fair practices, Ottawa is adding 100 new health and safety inspectors—increasing inspection capacity by roughly 70%—alongside 26 new staff at the Canada Industrial Relations Board and increased enforcement against worker misclassification.'),
  S('5.  A legislative foundation to unlock $1 trillion in capital','Bill C-39 serves as the statutory engine driving the federal government’s broader economic strategy, which aims to leverage $280 billion in public capital and incentives over five years to unlock more than $1 trillion in total public, private and institutional investment. The legislation codifies the work of the Major Projects Office, which has managed 27 nation-building proposals representing $200 billion in immediate capital since September 2025, providing developers and investors with a designated pipeline toward $500 billion in future private sector investment opportunities.')]},
 ant:{tag:'Sponsored',topic:'Technology',sp:1,cs:1,title:'ANT Equipment Group’s approach to cutting jobsite downtime',dek:'We sat down with COO Mike Langston to talk uptime, independence from any single manufacturer, and what’s driving ANT’s growth across Western Canada.',homeDek:'Inside the independent dealer’s playbook for keeping fleets running.',author:'Site. Content Studio',date:'Oct 5, 2026',img:'ant',alt:'A row of orange ANT boom lifts against a blue sky',credit:'ANT Equipment Group',b:[
  L('For contractors, a machine that won’t start is a schedule that won’t hold. ANT Equipment Group has built its business around that problem, growing from a single Burnaby yard into Western Canada’s largest independent equipment source.'),
  P('We spoke with COO Mike Langston about how the company keeps fleets running, why staying independent of any one manufacturer matters, and where ANT goes next.'),
  Q('What makes ANT different from a traditional dealer?',1),
  A2('Mike Langston, Chief Operating Officer','We aren’t tied to a single manufacturer, so we start with what the job actually needs and source the right machine from there. Rentals, sales, service and parts all live under one roof, which lets us support a contractor’s whole fleet instead of one piece of it.'),
  Q('ANT started in Burnaby. What does the footprint look like today?'),
  A2('Langston','We now serve the West from Vancouver, Kelowna, Calgary and Edmonton. The goal through all that growth has been to keep the habits we had as a small shop: pick up the phone and move fast.'),
  NL,
  Q('How do you keep service consistent as you scale?'),
  A2('Langston','It comes down to people and accountability. Each region has its own leadership, but the branches talk constantly, so equipment and technicians can move to wherever they’re needed.'),
  Q('How do you decide where to invest in the fleet?'),
  A2('Langston','We follow utilization and what contractors are asking for, not a growth target. That has taken us into aerial work platforms, telehandlers, forklifts and earthmoving, plus specialty gear like spider and atrium lifts.'),
  FIG('truck','',"An ANT Rentals truck hauling a telehandler and compact track loader"),
  Q('What trends are you seeing from contractors right now?'),
  A2('Langston','Productivity, uptime and cost control. More crews want one partner across several equipment categories, and how fast you respond to a service call now matters as much as the rate.'),
  Q('Why the push into specialized access equipment?'),
  A2('Langston','Jobs keep getting tighter. Spider lifts, atrium lifts and rail-capable machines get into places conventional equipment can’t, and demand for them keeps climbing.'),
  FIG('lang','Mike Langston, Chief Operating Officer, ANT Equipment Group.',"Mike Langston beside a red spider lift"),
  Q('What’s next for ANT?'),
  A2('Langston','Disciplined growth across our Western markets, then expansion east. We want to be a truly Canadian independent equipment company that still moves like an entrepreneur.')]},
 nickel:{tag:'Mining',topic:'Projects',title:'Ottawa greenlights $5B Crawford Nickel Mine in Northern Ontario',dek:'The project is expected to create 4,000 jobs and position Canada as an EV battery leader.',author:ST,date:'Jul 31, 2026',img:'nickel',alt:'Close-up of nickel-bearing ore rock',credit:'SiteNews',b:[
  KT(['Ottawa has approved Canada Nickel Company’s Crawford project near Timmins, Ont.','The open-pit mine and mill would be one of the largest nickel developments in Canada.','The approval is pitched as a pillar of a domestic EV battery supply chain.']),
  WS,
  L('The federal government has approved Canada Nickel Company’s Crawford project near Timmins, Ont., clearing the way for one of the largest nickel developments in the country.'),
  P('The decision closes out a multi-year federal impact assessment of the open-pit mine and on-site processing plant. Ottawa framed the approval as a cornerstone of a domestic critical-minerals supply chain feeding electric-vehicle battery production.'),
  NL,
  P('Plans call for an open-pit operation, a mill and supporting site infrastructure in the Timmins mining camp, with thousands of workers expected on site at peak construction.'),
  P('Mine construction at this scale means sustained demand for earthworks, structural steel, electrical and mechanical trades, along with camp services and housing for a largely remote workforce.')]},
 fortis:{tag:'Mining',topic:'Projects',title:'FortisBC’s $2B Tilbury expansion clears major regulatory hurdle',dek:'Work could begin as early as 2027.',author:ST,date:'Jul 24, 2026',img:'fortis',alt:'Two FortisBC workers in orange coveralls and hard hats beside a service truck',credit:'FortisBC',b:[
  KT(['B.C. has cleared an accelerated path for FortisBC’s Tilbury LNG expansion in Delta.','The roughly $2-billion Phase 2 adds liquefaction and storage capacity.','Construction could start as early as 2027.']),
  WS,
  L('The B.C. government has cleared an accelerated path for FortisBC’s roughly $2-billion expansion of its Tilbury LNG facility in Delta.'),
  P('The Phase 2 expansion would add liquefaction and storage capacity at the Fraser River site, supplying LNG as a lower-emission marine fuel and strengthening regional gas reliability.'),
  NL,
  P('With the provincial step complete, FortisBC says construction could start as early as 2027. Expect civil, mechanical, cryogenic tank and electrical packages, with local trades in high demand through the build.')]},
 merger:{tag:'Economy',topic:'Economy',title:'Merger to create $72B utility giant',dek:'Emera and Canadian Utilities are combining in one of the largest Canadian corporate deals ever.',author:RH,av:1,date:'Oct 6, 2026',img:'merger',alt:'Emera logo on a stock exchange display screen',credit:'Supplied',b:[
  KT(['Emera and Canadian Utilities will merge in a $72-billion enterprise value deal, forming a Top 20 North American utility with $45 billion in rate base and six million customers.','ATCO will spin off its housing, defense, and logistics businesses into a separate publicly traded company, New ATCO, led by Chair and CEO Nancy Southern.','The merged utility will operate as Emera under CEO Scott Balfour, maintaining public headquarters in Halifax and corporate hubs in Calgary, Edmonton, Tampa, and Perth.']),
  WS,
  P('Halifax-based Emera and Calgary-based Canadian Utilities Limited have entered into a definitive agreement to combine, creating a North American energy utility and infrastructure powerhouse with a combined enterprise value of approximately $72 billion.'),
  P('The transaction, valued at approximately $14.3 billion for the acquisition of Canadian Utilities shares, will rank among the largest utility mergers in Canadian corporate history. The combined entity will oversee $45 billion in rate base assets and serve roughly six million customers across 12 regulated utilities operating in Canada, the United States, and Australia.'),
  P('In a parallel restructuring, parent company ATCO will spin off its non-utility assets into a standalone, publicly traded industrial services firm. The new entity will hold ATCO’s modular housing (ATCO Structures), defense support (ATCO Frontec), port logistics, and retail energy operations.'),
  P('The merged company will retain the Emera corporate name. Public corporate headquarters will remain in Halifax, Nova Scotia, while Canadian Utilities’ corporate and operational offices will continue in Calgary, Edmonton, and Perth, Australia. Emera’s U.S. operations will remain headquartered in Tampa, Florida.'),
  P('Emera President and CEO Scott Balfour will serve as CEO of the combined utility. ATCO Chair and CEO Nancy Southern will serve as Co-Chair of the Board alongside current Emera Chair Karen Sheriff. Southern will also serve as Chair and CEO of the newly spun-off New ATCO.'),
  P('“This merger creates a Canadian utility and energy infrastructure powerhouse with the scale, financial capacity and expertise to invest in the systems our customers will rely on for decades,” said Scott Balfour, President and CEO of Emera. “As demand rises from electrification trends and major infrastructure development, the combined company will be better positioned to help meet growing energy needs and power Canada’s growth ambitions.”'),
  P('Nancy Southern, Chair and CEO of ATCO, emphasized the dual-entity strategy: “ATCO shareowners will participate in two focused and compelling companies. The combined Emera/Canadian Utilities company will have the scale, capabilities and capital to invest in critical energy and infrastructure projects… while New ATCO will be positioned to accelerate growth in housing, defence and industrial services.”'),
  P('Closing is targeted for the third or fourth quarter of 2027.')]},
 careers:{tag:'Economy',topic:'Recruitment',title:'Canada’s 12 highest-paying construction careers',dek:'Cha-ching! Looking to strike it rich in the construction sector?',author:RH,av:1,date:'Oct 6, 2026',img:'careers',alt:'A powerline technician working at the top of a utility pole',credit:'Supplied',b:[
  L('Construction has no shortage of well-paid work, and some roles pay a lot more than others. We ranked 12 of the top earners using federal Job Bank wage data.'),
  P('Where you work matters as much as what you do. The figures below mostly use the highest recorded regional wage, so the same trade can pay very differently from one province to the next.'),
  P('A quick caveat: this list is numbers only. It doesn’t weigh cost of living, lifestyle, or the years of training some of these jobs require.'),
  NL,
  J(12,'Heavy equipment operators','$99,216','The big-machine whisperers.','Operators run excavators, dozers and graders on everything from roadbuilds to mine sites. Most learn through an apprenticeship or college program, and the best-paid regions reward experience on specialized machines.'),
  J(11,'Plumbers','$104,790','Water flows downhill, and so does the money.','Commercial plumbers install the water, drainage and gas systems in large buildings. It’s a Red Seal trade, and demand tracks closely with housing and institutional construction.'),
  J(10,'Commercial and industrial electricians','$106,912','Plenty of spark.','These electricians design, install and maintain complex power systems in plants, towers and infrastructure. Industrial work and northern postings push wages toward the top of the range.'),
  J(9,'Crane operators','$108,555','The view from the top pays.','Crane operators lift steel, precast and equipment into place, and a single mistake can be catastrophic. This one uses a national wage figure rather than a regional high.'),
  J(8,'Boilermakers','$110,052','Pressure is part of the job.','Boilermakers build, test and repair boilers, tanks and pressure vessels, often on heavy industrial and energy projects with long shutdown shifts.'),
  J(7,'Reinforcing ironworkers','$113,006','The steel inside the concrete.','Rodbusters place and tie the rebar that gives concrete its strength. The work is physical, and the pay climbs on large civil and high-rise jobs.'),
  J(6,'Pipefitters and steamfitters','$124,800','High pressure, high pay.','Fitters assemble the piping that carries steam, chemicals and fuel in plants and refineries. This annual figure was updated using Job Bank wage data.'),
  J(5,'Heavy-duty equipment mechanics','$135,200','Keeping the fleet alive.','These mechanics diagnose and repair diesel and hydraulic machinery, often in remote camps where downtime is costly.'),
  J(4,'Elevator constructors and mechanics','$145,600','Going up.','One of the most specialized trades on any tower, with a long apprenticeship and strong union rates.'),
  J(3,'Powerline technicians','$163,300','Working with live wires.','Powerline techs build and maintain high-voltage transmission and distribution lines, in every kind of weather. This annual figure was also updated using Job Bank data.'),
  J(2,'Construction managers','$208,998','The ones holding the schedule.','Construction managers run job sites, coordinate subcontractors and keep projects on time and on budget.'),
  J(1,'Construction general managers','$244,420','The corner office.','Senior government and construction managers set strategy and oversee multi-site operations, and they top the list by a wide margin.')]},
 pomerleau:{tag:'Economy',topic:'Economy',title:'Pomerleau acquires water project expert Groupe ALLEN',dek:'The move positions Pomerleau to capitalize on surging demand for water infrastructure upgrades.',author:RH,av:1,date:'Oct 5, 2026',img:'pomerleau',alt:'Crew and excavator working on a waterside site',credit:'Supplied',b:[
  KT(['Pomerleau has completed its acquisition of Quebec contractor Groupe ALLEN.','Groupe ALLEN keeps its brand, leadership team and operational independence.','The deal adds water treatment, drilling and civil expertise to Pomerleau.']),
  WS,
  L('Pomerleau has completed its purchase of Groupe ALLEN, a Quebec contractor specializing in municipal water treatment, process mechanics, directional drilling, civil earthworks and formwork.'),
  P('Groupe ALLEN becomes a wholly owned subsidiary but keeps its brand, leadership team and day-to-day independence.'),
  P('The deal positions Pomerleau to meet rising municipal and provincial demand for water infrastructure, driven by aging systems, population growth and tougher environmental rules.'),
  NL,
  P('“Together, we will be better positioned to meet the growing needs of communities,” said Pomerleau president and CEO Philippe Adam.'),
  P('Groupe ALLEN CEO Jean-Philippe Lefebvre said the deal lets the company accelerate its growth while keeping the identity that built it.'),
  P('Founded in 1945, Groupe ALLEN brings nearly 80 years of civil and water treatment experience. Pomerleau expects about $7.5 billion in 2026 revenue, with more than 5,000 employees across 220 job sites. Canaccord Genuity advised the sellers.')]},
 bell:{tag:'Projects',topic:'Projects',title:'Bell showcases progress on 300 MW data centre campus in Sask.',dek:'The multi-building buildout currently employs more than 500 workers on-site.',author:RH,av:1,date:'Oct 5, 2026',img:'bell',alt:'Officials in hard hats and safety vests touring the Bell data centre site',credit:'Supplied',b:[
  KT(['Structural steel is going up on Bell’s 300 MW AI data centre campus in Sherwood, Sask.','More than 500 workers and 30-plus local partners are on the job, led by Bird Construction.','The first data hall is on track to open in the first half of 2027.']),
  WS,
  L('Steel is rising at Bell’s 300-megawatt AI Fabric data centre campus in the Rural Municipality of Sherwood, Sask., with all four first-phase building shells advancing.'),
  P('The project is on schedule to bring its first data hall online in the first half of 2027.'),
  P('More than 500 workers are on site, supported by over 30 local contractors, suppliers and Indigenous partners, including Dynamo Electric, Prairie Steel and George Gordon Developments. Bird Construction is the lead construction partner.'),
  NL,
  P('Sherwood is phase one of a potential 1.2-gigawatt AI compute hub. Full development could exceed $50 billion in capital spending, the largest single investment in Saskatchewan’s history.'),
  P('Bell projects 1,200 construction and technical jobs, 500 permanent operating roles and around 3,000 indirect jobs, plus a new AI Fabric headquarters in Regina with up to 100 management positions.'),
  P('Bell group president John Watson said the goal is to create “lasting economic opportunities while earning the trust of the community.”'),
  P('Provincial and federal officials pointed to the project as an example of government, industry and local partners working together on Canadian AI infrastructure.')]},
 ellisdon:{tag:'Projects',topic:'Projects',title:'EllisDon to execute massive EV factory in Ontario',dek:'Site preparation has been underway since groundbreaking in 2025.',author:RH,av:1,date:'Oct 1, 2026',img:'ellisdon',alt:'Aerial view of the PowerCo gigafactory site under construction',credit:'Supplied',b:[
  KT(['PowerCo Canada has hired EllisDon as general contractor for its St. Thomas, Ont. gigafactory.','Startup has moved to 2029 to adopt next-generation cell technology.','The workforce will grow from about 60 to roughly 1,300 trades at peak.']),
  WS,
  L('PowerCo Canada, Volkswagen Group’s battery manufacturing subsidiary, has named EllisDon general contractor for its gigafactory in St. Thomas, Ont.'),
  P('EllisDon will manage the structural and core infrastructure work, including the production-building shell, mechanical, electrical and plumbing systems, utility connections and site infrastructure.'),
  NL,
  P('PowerCo chief procurement officer Joel Karlsberg said the partnership keeps construction moving while giving the company room to scale as the market develops.'),
  P('EllisDon president of construction Max Mantha said the project will have a lasting impact on skilled trades and local businesses across the region.'),
  P('Once complete, the multi-billion-dollar plant aims to support 3,000 direct jobs and supply batteries for up to one million electric vehicles a year.')]},
 pacific:{tag:'Projects',topic:'Projects',title:'West Coast pipeline deemed ‘project of national interest’',dek:'The project, owned by Ottawa and Alberta, will reserve a 10% equity stake for Indigenous partners.',author:RH,av:1,date:'Oct 1, 2026',img:'pacific',alt:'Prime Minister Mark Carney speaking at a podium',credit:'Supplied',b:[
  KT(['Pacific Link has been designated a project of national interest.','Ottawa, Alberta, Trans Mountain and Pembina share ownership, with at least 10% for Indigenous partners.','Federal reviewers are targeting final permits by Sept. 1, 2027.']),
  WS,
  L('Prime Minister Mark Carney has formally designated the Pacific Link pipeline, formerly the West Coast Oil Pipeline, a project of national interest under the Building Canada Act.'),
  P('The announcement came in Fort McMurray alongside Alberta Premier Danielle Smith. The designation speeds up regulatory review of a one-million-barrel-per-day crude export corridor.'),
  P('Ownership is shared among the federal government, Alberta, Trans Mountain Corporation and Pembina Pipeline Corporation. Indigenous communities along the route are guaranteed at least a 10% equity stake, backed by federal and provincial loan guarantees.'),
  NL,
  P('The southern route through B.C. avoids sensitive areas including the Great Bear Sea and the North Coast. The Major Projects Office and Canada Energy Regulator will run an integrated review, targeting final permits by Sept. 1, 2027.'),
  P('Backers estimate the project would support 140,000 direct and indirect jobs, add more than $20 billion a year to GDP and generate $100 billion in government revenue by 2060.'),
  P('Carney called the pipeline critical to Canada’s ambitions as an energy superpower, while Smith described it as “a significant victory for Alberta’s and Canada’s energy future.”')]},
 lng:{tag:'Projects',topic:'Projects',title:'LNG Canada greenlights Phase 2 expansion at B.C. terminal',dek:'The work is expected to create 4,000 site construction jobs in Kitimat.',author:RH,av:1,date:'Sep 29, 2026',img:'lng',alt:'Workers in hard hats at the LNG Canada terminal in Kitimat',credit:'Supplied',b:[
  KT(['LNG Canada will double the Kitimat terminal’s capacity to 28 million tonnes a year.','Five First Nations can invest up to $1 billion to own the Phase 2 storage tank.','The build brings 4,000 site jobs, 2,100 pipeline jobs and over $50 billion in public revenue.']),
  WS,
  L('The joint venture partners behind LNG Canada (Shell, PETRONAS, PetroChina, Mitsubishi Corporation and KOGAS) have taken a final investment decision on Phase 2 of the Kitimat terminal.'),
  P('The expansion doubles capacity from 14 to 28 million tonnes per annum, putting Canada among the world’s top five LNG exporters.'),
  P('Phase 2 adds two liquefaction trains, a second LNG storage tank, a condensate tank, a dedicated loading berth and expanded utilities. Coastal GasLink will add five compressor stations along its 670-kilometre pipeline.'),
  NL,
  P('An equity option agreement with MNT Investments LP, representing the Gitga’at, Gitxaała, Haisla, Kitselas and Kitsumkalum First Nations, enables up to $1 billion in Indigenous investment to acquire the Phase 2 storage tank.'),
  P('Construction will create about 4,000 jobs in Kitimat and 2,100 on the pipeline, with 240 permanent roles added to the facility’s existing 400-person workforce.'),
  H3('Project timeline'),
  TL([['November 2011','Partners form LNG Canada to pursue an export terminal in Kitimat.'],['June 2015','B.C. grants environmental approval following community consultation.'],['October 2018','Final investment decision on Phase 1 and the Coastal GasLink pipeline.'],['June 2025','Operations begin, with the first cargo shipped overseas.'],['November 2025','The second train comes online and Phase 1 reaches full capacity.'],['July 2026','Equity option agreement signed with five First Nations.'],['September 2026','Partners approve Phase 2, doubling capacity to 28 mtpa.']])]},
 port:{tag:'Projects',topic:'Projects',title:'$500M port expansion underway in Vancouver',dek:'The investment will fund comprehensive upgrades, equipment replacements, and refurbishment work.',author:RH,av:1,date:'Sep 28, 2026',img:'port',alt:'Officials in hard hats and safety vests inside a potash storage building',credit:'Canpotex',b:[
  KT(['Canpotex has started a $500-million upgrade at Neptune Bulk Terminals.','Saskatchewan potash exports reached $9 billion in 2025, up 13.5%.','The work supports Canada’s push to grow trade beyond the U.S.']),
  WS,
  L('Canpotex, the Saskatoon-based export company for potash producers Nutrien and Mosaic, has started a $500-million infrastructure program at Neptune Bulk Terminals in the Port of Vancouver.'),
  P('The work covers equipment replacements and terminal upgrades designed to increase bulk handling capacity and export efficiency.'),
  NL,
  P('Saskatchewan potash exports reached $9 billion in 2025, a 13.5% increase over the year before, as global demand for crop nutrients climbs.'),
  P('Premier Scott Moe said the investment will help get more of the province’s potash to the farmers who need it, while creating jobs in Saskatchewan and across Canada.'),
  P('Canpotex president and CEO Gordon McKenzie said the upgrade lets the company reliably ship Saskatchewan potash overseas for decades to come.'),
  P('Vancouver Fraser Port Authority leadership said modernizing the terminal supports the federal goal of growing commodity exports to the Indo-Pacific, South America and Europe.')]},
 mactaquac:{tag:'Projects',topic:'Sustainability',title:'NB Power awards Mactaquac early development phase contract',dek:'A FlatironDragados-led partnership will help plan the life extension of New Brunswick’s largest hydro station.',author:ST,date:'Jul 30, 2026',b:[
  KT(['NB Power has signed a development phase agreement for the Mactaquac Life Achievement Project.','A FlatironDragados-led partnership will lead early planning and engineering.','Equipment suppliers are being lined up for the next phase.']),
  WS,
  L('NB Power has signed a development phase agreement with a FlatironDragados-led partnership for the Mactaquac Life Achievement Project on the Saint John River.'),
  P('The early-phase work focuses on planning, engineering and constructability as the utility prepares to extend the life of the generating station near Fredericton.'),
  NL,
  P('Equipment suppliers are being lined up for the next phase as NB Power advances toward full construction.')]},
 procore:{tag:'Technology',topic:'Technology',title:'Procore to acquire DroneDeploy in $845M cash deal',dek:'The construction software giant is buying its way into drone and reality-capture data.',author:ST,date:'',b:[
  KT(['Procore has agreed to buy DroneDeploy for about $845 million in cash.','The deal brings drone and 360° reality capture into Procore’s platform.','AI will be used to flag progress, quantities and issues from site imagery.']),
  WS,
  L('Procore has agreed to acquire DroneDeploy for about $845 million in cash, bringing aerial and ground-level reality capture into its construction management platform.'),
  P('The companies pitch the combination as a direct line from jobsite imagery to project records, with AI used to flag progress, quantities and issues automatically.'),
  NL,
  P('For contractors already on Procore, drone maps and 360° captures could feed schedules and pay applications without manual re-entry.')]},
 people:{tag:'People',topic:'People',img:'pmsept',tall:1,alt:'People Moves September: four portraits in orange and black-and-white',credit:'SiteNews',title:'People Moves: Sept. 2026',dek:'All the biggest hires, promotions and professional achievements in Canadian construction.',author:RH,av:1,date:'Oct 1, 2026',gate:7,b:[
  PM('Susan Reisbord','has been appointed president and CEO of','Stantec','.'),
  PM('Matthew Travers','is now chief operating officer for North America at','Stantec','.'),
  PM('Michele Harradence','will become president and CEO of','Enbridge',', effective Jan. 1, 2027.'),
  PM('Paul Maarek','has been named CEO of the Americas-Oceania division at','VINCI Construction','.'),
  PM('Brad Rogers','will take over as president and CEO of','North American Construction Group',' on Dec. 1, 2026.'),
  PM('Dylan Hemmings','has joined','WSP in Canada',' as senior vice-president, market leader and growth leader.'),
  PM('Dominic Barton','has been named board chair of','Invest in Canada',', with Gurinder Grewal stepping in as CEO.'),
  NL,
  PM('Justo Molina Balsera','is now senior vice-president, large projects, at','FlatironDragados','.'),
  PM('Gavin Ingram','has been appointed executive vice-president, commercial infrastructure, at the','Canada Infrastructure Bank','.'),
  PM('Lynette Lefsrud','has been named chief sustainability and development officer at','Finning','.'),
  PM('Melissa Di Marco','has joined','Pomerleau',' as vice-president, national business development.'),
  PM('Riccardo Cosentino','is now senior vice-president, nuclear financing, at','AtkinsRéalis','.'),
  {k:'pmg',org:'Crozier',t:' has announced a slate of promotions: Jon Proctor as partner and executive vice-president, Alex Fleming as vice-president, Toronto, and Brittany Robertson as partner and vice-president, GTA North.'},
  PM('Ben Chalmers','will become president and CEO of the','Mining Association of Canada',', effective Jan. 1, 2027.'),
  PM('Marc Lantos','has been named senior vice-president, finance, at','EllisDon','.'),
  PM('Mackenzie Lubberding','has joined','PCL',' as a project manager.')]},
 steiman:{tag:'People',topic:'People',title:'Q&A: Trades advocate Carly Steiman on building movements',dek:'[Dek from the published Q&A]',author:ST,date:'',b:[
  L('[Intro paragraph from the published interview on readsitenews.com.]'),
  Q('[Question 1]',1),A2('Carly Steiman','[Answer]'),NL,Q('[Question 2]'),A2('Steiman','[Answer]')]},
 newsletter:{tag:'Newsletter',topic:'All',title:'Great pipes',dek:'A pipeline stretching from Alberta to B.C.’s coast will be the first test of Ottawa’s ambitious framework to get projects started faster.',author:'The SiteNews team',date:'Oct 6, 2026',b:[
  L('Good morning. Ottawa just put a crude pipeline on the fast track, two utilities agreed to become one very large utility, and Saskatchewan is raising steel for the AI boom. Here’s what you need to know.'),
  S('Great pipes','Pacific Link has been designated a project of national interest. The one-million-barrel-a-day line from Alberta to the B.C. coast is targeting final permits by September 2027, with at least 10% equity reserved for Indigenous partners.'),
  S('Power couple','Emera and Canadian Utilities are merging in a roughly $72-billion deal that would serve six million customers across three countries.'),NL,
  S('Rising on the Prairies','Bell’s 300 MW data centre campus near Regina has 500+ workers on site, with Bird Construction leading the build and the first data hall due in 2027.'),
  S('Pay day','Construction general managers top the list of Canada’s highest-paying construction careers at $244,420. Powerline technicians come in third at $163,300.'),
  N('Forwarded this email? Sign up for free. It takes five minutes a week.')]}
};
// Focal point for square (1:1) crops on large cards: keeps the subject in frame
var FOCUS={bcs:'68% 50%',nickel:'76% 50%',ant:'45% 50%',fortis:'27% 50%',port:'50% 50%',merger:'50% 50%',careers:'55% 50%',pomerleau:'60% 50%',bell:'40% 50%',ellisdon:'50% 50%',pacific:'38% 50%',lng:'50% 50%',people:'50% 50%'};
var ORDER=['merger','careers','pomerleau','bell','ant','people','ellisdon','pacific','lng','port','bcs','mactaquac','nickel','fortis','procore','steiman'];
/* Real SiteNews articles from js/feat.js join the prototype's own */
(window.FEAT||[]).forEach(function(f){var o={};for(var k in f)if(k!=='id')o[k]=f[k];A[f.id]=o;ORDER.push(f.id)});
for(var fk in (window.FEAT_IMG||{}))IMG[fk]=FEAT_IMG[fk];
for(var ff in (window.FEAT_FILL||{}))if(A[ff])for(var fv in FEAT_FILL[ff])A[ff][fv]=FEAT_FILL[ff][fv];
/* Home lead: a random one of the 17 SiteNews pack stories each page load */
var PACK=(window.FEAT_PACK||['bcs']).filter(function(id){return A[id]&&A[id].img});
var LEAD=PACK[Math.floor(Math.random()*PACK.length)]||'bcs';
var TOPICS=['People','Projects','Technology','Sustainability','Recruitment','Economy'];
var DESC={People:'Hires, promotions, profiles and the faces shaping the industry.',Projects:'The builds, bids and approvals moving Canadian infrastructure.',Technology:'Tools, software and machines changing how the job gets done.',Sustainability:'Lower-carbon building, energy transition and green infrastructure.',Recruitment:'Careers, pay, training and the skilled-trades talent race.',Economy:'Deals, policy and the money behind construction.',All:'The projects, the players, the price tags. Skimmable by lunch.'};
var TREND=['mactaquac','procore','people','steiman'];

var subscribed=false, email='';
try{subscribed=localStorage.getItem('sn-sub')==='1'}catch(e){}

var PLANE='<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 2 9.6l7.4 3.1L20 4l-8.7 10.6 3.1 7.4z" fill="#fff"/></svg>';
var TREND_ICON='<svg width="28" height="24" viewBox="0 0 28 24" aria-hidden="true"><path d="M26.5322 10.8633L23.6641 8.85156L15.6172 20.3193L10.3193 14.7441L3.2666 23.1943L0 20.623L0.308594 20.2363L9.87109 8.68066L15.1689 14.2559L20.5127 6.63965L17.6426 4.62793L27.6396 0L26.5322 10.8633Z" fill="#FF6A29"/></svg>';
function by(a){return a.author+(a.date?' · '+a.date:'')}

// ---- Recirculation: "Bigger story" packages + more from the same category ----
// Related ReadSiteNews coverage that isn't in this prototype; links out to the live site.
var RS='https://readsitenews.com/';
var EXT={
 pl1:{tag:'Projects',title:'Ottawa considers fast-tracking West Coast Oil Pipeline',date:'Aug 4, 2026',url:RS+'ottawa-considers-fast-tracking-west-coast-oil-pipeline/'},
 pl2:{tag:'Economy',title:'Alberta reveals oil pipeline plans for B.C.’s southwest coast',date:'Jul 3, 2026',url:RS+'alberta-reveals-oil-pipeline-plans-for-b-c-s-southwest-coast/'},
 pl3:{tag:'Projects',title:'Carbon pricing deal reached to advance new oil pipeline in Alberta',date:'May 15, 2026',url:RS+'carbon-pricing-deal-reached-to-advance-new-oil-pipeline-in-alberta/'},
 nb1:{tag:'Projects',title:'Carney announces second round of ‘nation building’ projects',date:'Nov 13, 2025',url:RS+'carney-announces-second-round-of-nation-building-projects/'},
 nb2:{tag:'Projects',title:'Roberts Bank Terminal 2 referred to Major Projects Office',date:'Jul 16, 2026',url:RS+'roberts-bank-terminal-2-referred-to-major-projects-office/'},
 nb3:{tag:'Projects',title:'Canada Nickel signs $1.5B deal with Komatsu for Crawford fleet',date:'Sep 14, 2026',url:RS+'canada-nickel-signs-1-5b-deal-with-komatsu-for-crawford-fleet/'},
 lg1:{tag:'Economy',min:3,title:'Coastal GasLink expansion moves forward',date:'Sep 29, 2026',url:RS+'coastal-gaslink-expansion-moves-forward/'},
 lg2:{tag:'Projects',title:'LNG Canada launches historic partnership with First Nations',date:'Jul 15, 2026',url:RS+'lng-canada-launches-historic-partnership-with-first-nations/'},
 dc1:{tag:'Economy',title:'Saskatchewan mandates Canadian builders for data centres',date:'Sep 1, 2026',url:RS+'saskatchewan-mandates-canadian-builders-for-data-centre-projects/'},
 dc2:{tag:'Technology',min:3,title:'Meta planning $13B AI data centre campus in Alberta',date:'Jul 8, 2026',url:RS+'meta-planning-13b-ai-data-centre-campus-in-alberta/'},
 dc3:{tag:'Sustainability',title:'TELUS developing three-site AI cluster in B.C.',date:'May 11, 2026',url:RS+'telus-developing-three-site-ai-cluster-in-b-c/'},
 md1:{tag:'Economy',title:'Suncor sells off major East Coast oil projects for $1.5B',date:'Oct 5, 2026',url:RS+'suncor-sells-off-major-east-coast-oil-projects/'},
 md2:{tag:'Economy',title:'Englobe to acquire engineering firm Crozier',date:'Oct 2, 2026',url:RS+'englobe-to-acquire-ontario-based-engineering-firm-crozier/'},
 md3:{tag:'Economy',title:'GFL inks $6.4B deal to acquire Calgary-based Secure Waste Infrastructure',date:'Apr 13, 2026',url:RS+'gfl-inks-6-4b-deal-to-acquire-calgary-based-secure-waste-infrastructure/'}
};
var XIMG={pl1:'assets/img/rs/pl1.webp',pl2:'assets/img/rs/pl2.webp',pl3:'assets/img/rs/pl3.webp',nb1:'assets/img/rs/nb1.webp',nb2:'assets/img/rs/nb2.webp',nb3:'assets/img/rs/nb3.webp',lg1:'assets/img/rs/lg1.webp',lg2:'assets/img/rs/lg2.webp',dc1:'assets/img/rs/dc1.webp',dc2:'assets/img/rs/dc2.webp',dc3:'assets/img/rs/dc3.webp',md1:'assets/img/rs/md1.webp',md2:'assets/img/rs/md2.webp',md3:'assets/img/rs/md3.webp'};
for(var ek in EXT){EXT[ek].ext=1;IMG['x'+ek]=XIMG[ek];EXT[ek].img='x'+ek;}
// Each package: a label and its members (our article ids, or 'x:' + EXT id for live-site stories)
var STORIES=[
 {label:'Pacific Link Pipeline',ids:['pacific','x:pl1','x:pl2','x:pl3']},
 {label:'Nation-Building Projects',ids:['bcs','nickel','x:nb3','x:nb2','x:nb1']},
 {label:'B.C. LNG',ids:['lng','fortis','x:lg1','x:lg2']},
 {label:'AI Data Centres',ids:['bell','x:dc1','x:dc2','x:dc3']},
 {label:'Mergers & Acquisitions',ids:['merger','pomerleau','procore','edacq','gip','x:md1','x:md2','x:md3']}
];
function rcGet(ref){return ref.indexOf('x:')===0?EXT[ref.slice(2)]:A[ref]}
function rcTime(it){var t=Date.parse(it&&it.date||'');return isNaN(t)?0:t}
function rcDate(d){return (d||'').replace(/,\s*2026$/,'')}
function storyOf(id){for(var i=0;i<STORIES.length;i++){if(STORIES[i].ids.indexOf(id)>=0)return STORIES[i]}return null}
// Reading time: live-site stories carry the site's own estimate; ours are counted at ~225 words a minute
function readMin(it){if(it.min)return it.min;var w=0;JSON.stringify(it.b||[]).replace(/<[^>]+>/g,' ').replace(/[^\s"]+/g,function(){w++});return Math.max(1,Math.ceil(w/225))}
function rcItem(ref,cat){var it=rcGet(ref),id=ref.replace(/^x:/,'');
  return '<a class="press" href="'+(it.ext?it.url+'" target="_blank" rel="noopener':'#a-'+id)+'"><div class="body">'+(cat?'':'<span class="k">'+it.tag+'</span>')+'<span class="h">'+it.title+'</span><span class="by">'+(cat?readMin(it)+' Min Read':rcDate(it.date))+'</span></div>'+(it.img?'<img class="thumb" src="'+IMG[it.img]+'" alt="" style="object-position:'+(FOCUS[id]||'50% 50%')+'">':'')+'</a>'}
function rcSection(label,refs,cat){if(!refs.length)return '';
  return '<section class="sec" style="gap:23px"><div class="rule"></div><div class="rc-wrap"><div class="sechead"><h2>MORE<b>'+label.toUpperCase()+'</b></h2></div><div class="rc'+(cat?' rc-cat':'')+'">'+refs.map(function(r){return rcItem(r,cat)}).join('')+'</div></div></section>'}
function biggerStory(id){var s=storyOf(id);if(!s)return {html:'',shown:[]};
  var refs=s.ids.filter(function(r){return r!==id}).sort(function(a,b){return rcTime(rcGet(b))-rcTime(rcGet(a))}).slice(0,3);
  return {html:rcSection(s.label,refs),shown:refs}}
function moreCategory(id,shown){var a=A[id],tag=a.tag;
  var inStory=function(r){return !!storyOf(r.replace(/^x:/,''))||STORIES.some(function(s){return s.ids.indexOf(r)>=0})};
  var pool=Object.keys(A).filter(function(k){return k!==id&&A[k].tag===tag&&k!=='newsletter'})
    .concat(Object.keys(EXT).filter(function(k){return EXT[k].tag===tag&&!Object.keys(A).some(function(j){return normT(A[j].title)===normT(EXT[k].title)})}).map(function(k){return 'x:'+k}))
    .filter(function(r){return shown.indexOf(r)<0});
  // Stories that aren't part of any bigger-story package come first, newest first
  pool.sort(function(x,y){return (inStory(x)-inStory(y))||(rcTime(rcGet(y))-rcTime(rcGet(x)))});
  return rcSection(tag,pool.slice(0,3),true)}
function signup(id,dark,label){
  if(subscribed) return '<div class="done"><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" style="flex:none"><circle cx="11" cy="11" r="11" fill="#ff6a29"/><path d="m6.5 11.3 3 3 6-6.3" fill="none" stroke="#fff" stroke-width="2"/></svg><div><strong>You’re in.</strong><br>Your first issue lands Monday morning.</div></div>';
  return '<form data-signup novalidate><label class="sr" for="'+id+'">Work email</label><input id="'+id+'" type="email" placeholder="Work email" autocomplete="email" value="'+email.replace(/"/g,'&quot;')+'" required><button class="btn-or press" type="submit">'+(label||'Join free')+' '+PLANE+'</button></form>';
}
/* Latest Stories: newest first, skipping whatever already has a slot on the home page */
function homeRiver(){var skip={nickel:1,fortis:1,ant:1,newsletter:1};skip[LEAD]=1;TREND.forEach(function(t){skip[t]=1});
  return ORDER.filter(function(id){var a=A[id];return a&&!skip[id]&&a.date&&a.img&&!a.sp&&a.topic!=='Newsletter'})
    .sort(function(x,y){return pdate(A[y].date)-pdate(A[x].date)})}
function riverItem(id){var a=A[id];return '<a class="press" href="#a-'+id+'"><div class="body"><span class="k">'+a.tag+'</span><span class="h">'+a.title+'</span><span class="rd">'+(a.homeDek||a.dek)+'</span><span class="by">'+(a.date||'').replace(/,\s*\d{4}$/,'')+'</span></div>'+(a.img?'<img class="thumb" src="'+IMG[a.img]+'" alt="">':'')+'</a>'}
function card(id,first,r10,tagStyle){var a=A[id];return '<a class="card'+(r10?' r10':'')+'" href="#a-'+id+'" style="'+(first?'padding-top:20px':'')+'"><div class="txt px">'+(first?'':'<div class="rule"></div>')+'<div class="stack">'+(a.sp?'<span class="ptag">PARTNER CONTENT</span>':'')+'<span class="t20">'+a.title+'</span><span class="d14">'+(a.homeDek||a.dek)+'</span>'+(a.sp?'':'<span class="tag"'+(tagStyle?' style="'+tagStyle+'"':'')+'>'+a.tag+'</span>')+'</div></div><div class="pic"><img src="'+IMG[a.img]+'" alt="'+a.alt+'" loading="lazy" style="object-position:'+(FOCUS[id]||'50% 50%')+'"></div></a>'}

function trending(){return '<section class="sec" style="gap:23px"><div class="rule"></div><div><div class="sechead">'+TREND_ICON+'<h2>TRENDING STORIES</h2></div><ol class="trend">'+TREND.map(function(id,i){return '<li><a class="press" href="#a-'+id+'"><span class="n">'+(i+1)+'<span class="nd">.</span></span><span>'+A[id].title+'</span></a></li>'}).join('')+'<li class="tr5"><a class="press" href="'+RS+'ottawa-launches-430m-program-to-prep-workers-for-building-boom/" target="_blank" rel="noopener"><span class="n">'+(TREND.length+1)+'<span class="nd">.</span></span><span>Ottawa launches $430M effort to prep workers for building boom</span></a></li></ol></div></section>';}
var LOGO_DARK='<svg width="172" height="32" viewBox="0 0 491 91" role="img" aria-label="SiteNews"><defs><clipPath id="lgE"><rect width="91" height="91"/></clipPath></defs><g clip-path="url(#lgE)"><rect x="19.9297" y="58.3145" width="73.8927" height="34.6337" rx="11" transform="rotate(-51.6581 19.9297 58.3145)" fill="white"/><rect x="-20" y="76.9561" width="73.8927" height="34.6337" rx="11" transform="rotate(-51.6581 -20 76.9561)" fill="white"/><path d="M91 0L0.00606799 0.111743L0 69.1901L23.8013 36.834L39.9864 53.866L56.3126 30.6L47.5437 24.4541L78.0849 10.3156L74.7032 43.5033L65.9402 37.3575L41.3567 72.3918L25.1716 55.3598L0.00615554 88.9862L0 91H91V0Z" fill="#FF6A29"/></g><path d="M155.155 77.8479C139.185 77.8479 129.651 70.0257 129.57 57.2331H143.014C143.177 65.2183 149.044 67.0109 155.725 67.0109C161.674 67.0109 165.748 64.5664 165.748 60.3294C165.748 57.0701 163.955 54.9516 152.466 52.996C137.229 50.5516 130.792 44.9294 130.792 34.4183C130.792 24.4775 139.429 17.2257 153.851 17.2257C169.251 17.2257 177.725 24.4775 178.296 37.1072H165.096C164.77 30.9146 161.185 28.0627 153.851 28.0627C148.392 28.0627 144.888 30.3442 144.888 33.8479C144.888 37.2701 146.844 39.5516 157.274 41.2627C174.711 44.1146 180.007 49.7368 180.007 59.5146C180.007 71.7368 169.333 77.8479 155.155 77.8479ZM183.927 76.8701V34.4997H196.72V76.8701H183.927ZM183.927 28.7146V18.2034H196.72V28.7146H183.927ZM207.227 21.4627H220.019V34.4997H230.286V43.8701H220.019V63.8331C220.019 66.359 220.916 67.4997 223.849 67.4997H230.286V76.8701H220.345C213.338 76.8701 207.227 75.159 207.227 65.1368V43.8701H200.138V34.4997H207.227V21.4627ZM253.769 77.8479C239.836 77.8479 232.014 68.3146 232.014 55.6849C232.014 43.0553 239.836 33.522 253.769 33.522C267.784 33.522 275.606 42.4849 275.606 57.0701V59.5146H244.399C245.377 65.0553 248.636 68.3146 253.769 68.3146C258.332 68.3146 261.021 66.7664 262.651 63.8331H274.873C272.103 72.2257 264.688 77.8479 253.769 77.8479ZM244.48 51.2849H263.14C261.999 46.0701 258.74 43.0553 253.769 43.0553C248.88 43.0553 245.621 46.0701 244.48 51.2849ZM317.314 76.8701L294.01 37.5146V76.8701H280.81V18.2034H295.722L319.025 57.722V18.2034H332.225V76.8701H317.314ZM357.576 77.8479C343.642 77.8479 335.82 68.3146 335.82 55.6849C335.82 43.0553 343.642 33.522 357.576 33.522C371.59 33.522 379.413 42.4849 379.413 57.0701V59.5146H348.205C349.183 65.0553 352.442 68.3146 357.576 68.3146C362.138 68.3146 364.827 66.7664 366.457 63.8331H378.679C375.909 72.2257 368.494 77.8479 357.576 77.8479ZM348.287 51.2849H366.946C365.805 46.0701 362.546 43.0553 357.576 43.0553C352.687 43.0553 349.427 46.0701 348.287 51.2849ZM420.713 76.8701L413.217 50.0627L405.72 76.8701H392.276L377.854 34.4997H391.624L399.854 62.2034L407.268 34.4997H419.165L426.58 62.2034L434.809 34.4997H448.58L434.076 76.8701H420.713ZM468.948 77.8479C456.889 77.8479 449.229 73.8553 448.578 62.9368H460.8C461.37 67.9072 464.466 69.3738 469.518 69.3738C473.348 69.3738 476.281 67.9886 476.281 65.3812C476.281 62.8553 475.222 61.796 466.911 60.3294C453.466 57.9664 449.311 53.8109 449.311 46.8034C449.311 38.3294 456.563 33.522 468.215 33.522C481.578 33.522 487.444 39.6331 487.77 48.1886H476.118C475.955 43.1368 472.126 41.996 468.215 41.996C464.385 41.996 461.696 43.4627 461.696 45.9886C461.696 48.5146 463.57 49.6553 471.718 50.8775C485 52.9146 488.911 57.396 488.911 64.4849C488.911 73.2035 480.763 77.8479 468.948 77.8479Z" fill="#282828"/></svg>';
function nlIssue(){
  var RS='https://www.readsitenews.com/';
  function L(t,href){return '<a class="eu" href="'+(href||RS)+'"'+(href&&href.charAt(0)==='#'?'':' target="_blank" rel="noopener"')+'>'+t+'</a>'}
  function P(t,b){return '<a class="eu'+(b?' nb':'')+'" href="'+t[1]+'" target="_blank" rel="noopener">'+t[0]+'</a>'}
  var O='https://site.omeclk.com/portal/wts/ue%5EcnQDcwqecyqy';
  var moves=[
    [['Greg Northcott',O+'T%7ChADEc'],' has been appointed Chief Executive Officer of ',['Allnorth Consultants',O+'TmhADEc'],', effective August 17, 2026. Greg brings more than 25 years of leadership experience across Canada’s engineering, construction, and environmental services sectors.'],
    [['Sara Wadlow',O+'RDhADEc'],' has been appointed Senior Vice President &amp; National Director Structures at ',['Egis in Canada',O+'SehADEc'],', effective July 6, 2026. Based in Calgary, she will lead the firm’s Transportation Structures division.'],
    [['Ryan Jagger',O+'S%7ChADEc'],' is stepping down from his role as Vice President of Real Estate Finance at ',['Anthem Properties',O+'SmhADEc'],' after nine years with the company.'],
    [['Erin Kowalchuk',O+'SqhADEc'],' has been promoted to Chief of Staff at ',['Falkbuilt',O+'S%5EhADEc'],', where she will support CEO Mogens Smed and President Thom Hinton. With over 25 years of experience supporting C-suite executives, Erin will oversee critical corporate services and lead the Concierge team.'],
    [['Shane Ulmer',O+'SyhADEc'],' has been promoted to Chief Financial Officer at The ',['RMC Group of Companies',O+'S2hADEc'],'.'],
    [['Joseph Lenz',O+'S6hADEc'],' has joined ',['Graham’s building’s division',O+'S-hADEc'],' where he will be leading a 50-storey tower and community hub project in Burnaby.'],
    [['David Garcia',O+'SDhADEc'],' will become the new General Manager of ',['Vancouver Pile Driving',O+'TehADEc'],'.'],
    [['Kevin George',O+'TqhADEc'],' has been promoted to lead ',['EXP’s',O+'T%5EhADEc'],' Major Projects sector. In his expanded role, he will oversee major pursuits strategy, market growth, client engagement and project delivery across transportation, transit, energy and critical infrastructure markets.'],
    [['Quinton Lewko',O+'TyhADEc'],' has joined ',['Technica',O+'T2hADEc'],' as Area Manager for the Saskatoon office. With more than 15 years of underground potash mining experience, Quinton brings expertise in leadership, safety, operational excellence, and team building.'],
    [['Geoff Schmidtler',O+'T6hADEc'],' has been promoted to Director, Preconstruction &amp; Project Delivery at ',['Weston Manufacturing',O+'T-hADEc'],'.'],
    [['Jennifer Krochak',O+'TDhADEc'],' is now Chief Projects Officer for ',['Egis in Canada',O+'%5BehADEc'],'.']
  ];
  var bar='<div class="em-bar"></div>';
  return '<div class="em">'+
   '<div class="em-from"><img src="'+IMG.emav+'" width="36" height="36" alt=""><div class="em-meta"><div><b>Site News</b><span>7:07 AM</span></div><button type="button" class="em-to" aria-label="Show sender details">to me<svg width="9" height="6" viewBox="0 0 9 6" aria-hidden="true"><path d="m1 1 3.5 3.5L8 1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></div>'+
   '<section class="em-card"><div class="em-px em-head"><span>October 6, 2026</span><button class="em-share" type="button" data-copy><span>Share</span></button></div>'+
    '<div class="em-px"><div class="em-logo">'+LOGO_DARK+'</div></div>'+
    '<div class="em-px em-body"><div class="em-pres"><span>PRESENTED BY</span><a href="https://www.wsp.com/en-ca" target="_blank" rel="noopener"><img src="'+IMG.wsp+'" width="78" height="34" alt="WSP"></a></div><p><b>Good morning! 🤖</b> Thinking of using AI for your next big campaign? Think again. Recent data shows that 78% of global consumers believe AI makes ads “'+L('feel less authentic')+'” and the same amount said they find brands “cringey” when over-using AI.</p><p>Today’s read: <b>5 mins</b></p>'+bar+'</div></section>'+
   '<section class="em-card"><div class="em-px"><h2 class="em-lab">BY THE NUMBERS</h2></div>'+
    '<div class="em-px em-body"><p>Widely viewed as a primary bellwether for the industrial economy, Caterpillar (CAT-N) signaled sustained momentum in the AI-led infrastructure boom by delivering a '+L('24% surge in second-quarter revenue')+' to an all-time high of $20.54 billion alongside an adjusted profit of $8.17 per share—far exceeding Wall Street expectations of $6.20.</p>'+bar+'</div></section>'+
   '<section class="em-card"><div class="em-px"><h2 class="em-lab">AWARDS</h2><h3 class="em-h">40 Under 40 Industrial Leaders shortlist just dropped</h3></div>'+
    '<img class="em-img" src="'+IMG.em40+'" alt="Nine of the 2026 40 Under 40 Industrial Leaders finalists" loading="lazy">'+
    '<div class="em-px em-body"><p><b>40 Under 40 Industrial Leaders</b> finalists have been named — and the suspense is officially on.</p><p>Out of a remarkable, record number of nominations from across the Canadian industrial ecosystem, this year’s shortlist has been selected. It’s a stacked group of young professionals doing exceptional work across construction, infrastructure, energy, manufacturing, and more. The winners will be revealed in September. Until then, go meet the contenders.</p><p><b>Early bird tickets</b> are now available for the October 29 celebration at BREWHALL in Vancouver. '+L('Get yours today','#forty')+'.</p><p>'+L('Meet the Finalists','#forty')+'</p>'+bar+'</div></section>'+
   '<section class="em-card"><div class="em-px"><h2 class="em-lab">TALENT</h2><h3 class="em-h">People Moves</h3></div>'+
    '<div class="em-px em-body">'+moves.map(function(m){return '<p>'+P(m[0],1)+m[1]+P(m[2])+m[3]+'</p>'}).join('')+bar+'</div></section>'+
   '<section class="em-card"><div class="em-px"><h2 class="em-lab">NEED TO KNOW</h2><h3 class="em-h">This week’s headlines</h3></div>'+
    '<img class="em-img em-wide" src="'+IMG.emcity+'" alt="Toronto skyline at dusk" loading="lazy">'+
    '<div class="em-px em-body"><p><b>Homebuilding surge:</b> Ottawa and Toronto have partnered to invest over '+L('$2.7 billion')+' to build more than 5,600 new rental homes across 18 housing projects in Toronto over the next three years, with construction starting on over 4,500 units before the end of the year.</p>'+
    '<p><b>Fast track:</b> Federal officials are considering designating the '+L('1,250-kilometre West Coast Oil Pipeline','#a-pacific')+' as a project of national interest under the Building Canada Act to streamline regulatory approvals. It’s being advanced by Trans Mountain, the Alberta Petroleum Marketing Commission, and Pembina Pipeline Corporation.</p>'+
    '<p><b>Good prognosis:</b> Three years after groundbreaking, construction of the 1.3-million-square-foot South Niagara Hospital remains '+L('on time and on budget')+', with over 2.6 million of the expected 4 million labor hours completed by project partner EllisDon.</p>'+
    '<p><b>Capital idea:</b> Vancouver-based Beedie Capital has acquired a 50% ownership stake in Vistara Growth and committed up to '+L('US$125 million')+' as the anchor investor for Vistara’s new US$500 million Vistara Growth Structured Opportunities Fund.</p>'+bar+'</div></section>'+
   '<section class="em-card"><div class="em-px"><h2 class="em-lab">INSIGHTS &amp; LEADERSHIP</h2></div><div class="em-px em-body em-ins">'+[['Engineers are ','burying plastic honeycombs'],['Why most construction projects ','finish late'],['Inside Canada’s ','oldest sawmill'],['How two homes ','survived extreme wildfires'],['The benefits of creating a ','psychologically safe workplace']].map(function(x){return '<p>'+x[0]+L(x[1])+' <svg class="ext" width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="1" width="14" height="14" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M6 10l4.5-4.5M6.5 5.5h4v4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></p>'}).join('')+bar+'</div></section>'+'<figure class="em-quote"><span class="q" aria-hidden="true">“</span><blockquote>My network is what has compounded the most in my lifetime. Using that generously, to help others with their goals feels great and then when the time comes to pitch my mission, they listen, consider and hopefully amplify it by sharing it with others. That’s the power of kindness and generosity.</blockquote><figcaption><a href="#a-steiman">Carly Steiman</a><span>Entrepreneur, electrician and activist</span></figcaption></figure>'+'<footer class="em-foot"><div class="em-flogo"><svg width="22" height="22" viewBox="0 0 28 24" aria-hidden="true"><path d="M26.5322 10.8633L23.6641 8.85156L15.6172 20.3193L10.3193 14.7441L3.2666 23.1943L0 20.623L0.308594 20.2363L9.87109 8.68066L15.1689 14.2559L20.5127 6.63965L17.6426 4.62793L27.6396 0L26.5322 10.8633Z" fill="#FF6A29"/></svg><span>SiteNews</span></div><p><a href="#home">SiteNews</a> is the leading provider of news and events for construction leaders in Canada. SiteNews is part of the <a href="https://site.omeclk.com/portal/wts/ue%5EcnQDcwqecyqyQ6hADEc" target="_blank" rel="noopener">SiteMedia</a> platform that provides news and premium events for the Canadian construction and industrial sectors. Affiliate publications include <a href="https://site.omeclk.com/portal/wts/ug%5EcnQDcwqecyqyQ-hADE6w8tprBv%5BGnC8a" target="_blank" rel="noopener">ReNew Canada</a>, <a href="https://site.omeclk.com/portal/wts/ug%5EcnQDcwqecyqyQDhADE6w8tprBv%5BGnC8a" target="_blank" rel="noopener">STOREYS</a>, <a href="https://site.omeclk.com/portal/wts/ue%5EcnQDcwqecyqyRehADEc" target="_blank" rel="noopener">Environment Journal</a>, <a href="https://site.omeclk.com/portal/wts/ue%5EcnQDcwqecyqyR%7ChADEc" target="_blank" rel="noopener">Water Canada</a>, <a href="https://site.omeclk.com/portal/wts/ue%5EcnQDcwqecyqyRmhADEc" target="_blank" rel="noopener">Waste &amp; Recycling</a>, and <a href="https://site.omeclk.com/portal/wts/ue%5EcnQDcwqecyqyRqhADEc" target="_blank" rel="noopener">HAZMAT Magazine</a>.</p><p>Address: 150 Eglinton Ave. E., #806, Toronto, ON M4P 1E8</p></footer>'+
  '</div>';
}
// Muted autoplay video card (Digging In). Plays when on screen; dark overlay + Replay when it ends.
var REPLAY_ICON='<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z" fill="currentColor"/></svg>';
function videoCard(){
  return '<div class="card vcard"><div class="txt px"><div class="rule"></div><div class="stack"><span class="tag vtag">Video</span><span class="t20">Great pipes</span><span class="d14">A pipeline stretching from Alberta to B.C.’s coast will be the first test of Ottawa’s ambitious framework to get projects started faster.</span><span class="tag">Digging In</span></div></div>'+
   '<div class="pic"><div class="vwrap"><video id="dgVid" src="assets/video/digging-in.mp4" poster="assets/img/digging-in-poster.jpg" muted playsinline preload="metadata" aria-label="Digging In: Great pipes"></video>'+
   '<div class="vend" hidden><button class="replay press" type="button">'+REPLAY_ICON+'Replay?</button></div></div></div></div>';
}
var vidObs=null;
function wireVideo(){
  if(vidObs){vidObs.disconnect();vidObs=null}
  var v=document.getElementById('dgVid'); if(!v) return;
  var end=v.parentNode.querySelector('.vend'), done=false;
  v.muted=true; v.defaultMuted=true;
  v.addEventListener('ended',function(){done=true; end.hidden=false});
  end.querySelector('button').addEventListener('click',function(){done=false; end.hidden=true; v.currentTime=0; v.play().catch(function(){})});
  if(!('IntersectionObserver' in window)){v.play().catch(function(){});return}
  vidObs=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting&&!done) v.play().catch(function(){}); else if(!e.isIntersecting) v.pause();
  })},{threshold:.5});
  vidObs.observe(v);
}
function home(){
  // One DOM for every width. Below 1024px the wrappers flatten (display:contents) and each block's
  // CSS `order` restores the mobile sequence; at desktop they become the lead row, main column and sidebar.
  return ''+
  '<div class="home">'+
   '<div class="h-top">'+
    '<div class="h-lead o1">'+card(LEAD,true)+'</div>'+
    '<div class="h-trend o5">'+trending()+'</div>'+
   '</div>'+
   '<div class="h-body">'+
    '<div class="h-main">'+
     '<div class="h-c o3">'+card('nickel',true)+'</div>'+
     '<div class="h-c o7">'+card('fortis',false,true)+'</div>'+
     '<div class="h-c o4">'+card('ant')+'</div>'+
     '<section id="forty" class="o9"><div class="px" style="display:flex;flex-direction:column;gap:12px"><div class="rule"></div><div class="stack"><span class="tag or">40 Under 40</span><h2 class="t20" style="margin:0">2026 Finalists Announced</h2><span class="d14">Stars shaping the future of Canadian Construction</span></div></div><div class="px"><img src="'+IMG.forty+'" alt="Four of the 2026 Top 40 Under 40 finalists" style="width:100%;aspect-ratio:370/247;object-fit:cover;border-radius:10px" loading="lazy"></div></section>'+
     '<div class="ad-mpu ad-m2"><p class="ad-lab">ADVERTISEMENT</p><a class="ad-slot ad-300" href="#home" aria-label="Advertisement"><span>300 × 250</span></a></div>'+
     '<section class="px river lat1 o10"><div class="rule"></div><div class="sechead" style="justify-content:space-between;padding:15px 0 0"><h2>LATEST STORIES</h2><a class="allbtn press" href="#t-All" aria-label="All stories">All <svg width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><path d="M0.5 5.5h10.5M6.8 1.2l4.3 4.3-4.3 4.3" fill="none" stroke="#080808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>'+homeRiver().slice(0,4).map(riverItem).join('')+'</section>'+
     '<section class="sec o8" id="podcast"><div class="rule"></div><div style="display:flex;flex-direction:column;gap:16px;padding-top:14px"><div class="sechead" style="gap:6px">'+SPEAKER+'<h2>PODCAST</h2></div>'+
   spPlayer(EPS[0])+'</div></section>'+
     '<section class="px river lat2 o11">'+homeRiver().slice(4,8).map(riverItem).join('')+'</section>'+
     '<section class="ss o12" id="summit"><a class="ss-card press" href="https://www.readsitenews.com/" target="_blank" rel="noopener" aria-label="SiteSummit 2026: tickets available"><div class="ss-txt"><span class="ss-logo">Site<br>Summit</span><span class="ss-t">Tickets Available</span><span class="ss-d">Join 600+ of construction’s heaviest hitters on the Toronto waterfront.</span><span class="ss-btn">Buy now</span></div><div class="ss-vid"><video src="assets/video/sitesummit.mp4" poster="assets/img/sitesummit-poster.jpg" autoplay muted loop playsinline preload="metadata" aria-hidden="true"></video></div></a></section>'+
    '</div>'+
    '<aside class="h-side">'+
     '<div class="ad-mpu"><p class="ad-lab">ADVERTISEMENT</p><a class="ad-slot ad-300" href="#home" aria-label="Advertisement"><span>300 × 250</span></a></div>'+
     '<div class="nl-wrap o2"><section class="hero" id="signup"><h1>NEWS<br>TRENDS<br><span class="hi">INSIGHTS</span></h1><p class="for">FOR CONSTRUCTION</p><p class="pitch">Get smarter in just 5 minutes. Sign up for the free weekly newsletter that will keep you up to speed.</p><div class="signup">'+signup('heroEmail')+'</div></section>'+
     '<a class="nl-card press" href="#newsletter"><div class="top"><span class="nl-pill">Latest Newsletter</span></div><div class="nl-title"><b>⚡️ Supernova Scotia</b><span class="date"><svg width="13" height="13" viewBox="0 0 12 12" aria-hidden="true"><rect x=".6" y="1.6" width="10.8" height="9.8" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M.6 4.4h10.8M3.4 0v2.8M8.6 0v2.8" stroke="currentColor" stroke-width="1.2"/></svg>Oct 6</span></div><p class="nl-dek">EverWind has announced a $10-billion development at Point Tupper—the largest privately funded development in Nova Scotia’s history—combining a 420-megawatt AI data centre campus with a $2-billion, four-site onshore wind energy buildout.</p></a></div>'+
     '<div class="o6">'+videoCard()+'</div>'+
    '</aside>'+
   '</div>'+
  '</div>';
}

function block(b){
  switch(b.k){
    case 'lead': return '<p><span class="sq">■</span>&nbsp; '+b.pre+(b.link?'<a href="#a-'+b.to+'">'+b.link+'</a>':'')+b.post+'</p>';
    case 'p': return '<p>'+b.t+'</p>';
    case 'note': return '<p class="note">'+b.t+'</p>';
    case 's': return '<div class="s"><h2 style="white-space:pre-wrap">'+b.h+'</h2><p>'+b.t+'</p></div>';
    case 'mv': return '<div class="mv"><b>'+b.n+'</b>'+b.r+'</div>';
    case 'kt': return '<aside class="kt" aria-label="Key takeaways"><h2>Key Takeaways</h2><ul>'+b.items.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></aside>';
    case 'ws': return '<h2 class="ws">Whole Story</h2>';
    case 'ul': return '<ul class="ul">'+b.items.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>';
    case 'h3': return '<h3 class="h3">'+b.t+'</h3>';
    case 'tl': return '<ul class="tl">'+b.items.map(function(x){return '<li><b>'+x[0]+':</b> '+x[1]+'</li>'}).join('')+'</ul>';
    case 'q': return '<p class="q"><b>'+(b.first?'SiteNews:':'SN:')+'</b> <i>'+b.t+'</i></p>';
    case 'ans': return '<p class="ans"><b>'+b.n+':</b> '+b.t+'</p>';
    case 'fig': return '<figure class="inl">'+(IMG[b.src]?'<img src="'+IMG[b.src]+'" alt="'+b.alt+'" loading="lazy">':'<div class="ph">Inline photo</div>')+(b.cap?'<figcaption class="ic">'+b.cap+'</figcaption>':'')+'</figure>';
    case 'job': return '<div class="job"><h3><span class="jn">'+b.n+'.</span> '+b.title+' <span class="sal">– '+b.sal+'</span></h3><p class="quip">'+b.quip+'</p><p>'+b.t+'</p></div>';
    case 'pm': return '<p class="pm"><a class="pmn" href="'+li(b.name)+'" target="_blank" rel="noopener">'+b.name+'</a> '+b.verb+' <a href="'+gs(b.org)+'" target="_blank" rel="noopener">'+b.org+'</a>'+b.tail+'</p>';
    case 'pmg': return '<p class="pm"><a href="'+gs(b.org)+'" target="_blank" rel="noopener">'+b.org+'</a>'+b.t+'</p>';
    case 'nl': return '<section class="nlbox2" aria-label="Newsletter signup"><h2>News, trends, &amp; insights in Canadian construction</h2><p class="nl2-d">Get smarter in just 5 minutes. Sign up for the free weekly newsletter that will keep you up to speed.</p><div class="signup nl2">'+signup('nlIn','',"Subscribe")+'</div><p class="nl2-f">Be more valuable, weekly</p></section>';
  }
  return '';
}
function shareRow(top){return '<div class="share'+(top?'':' share-end')+'"><button class="circ press" type="button" aria-label="Comments"><svg width="16" height="15" viewBox="0 0 16 15" aria-hidden="true"><path d="M8 0C3.6 0 0 2.8 0 6.3c0 2 1.2 3.8 3 5L2.3 15l4-2.5c.6.1 1.1.1 1.7.1 4.4 0 8-2.8 8-6.3S12.4 0 8 0z" fill="#1d1d1f"/></svg></button><button class="circ press" type="button" data-copy aria-label="Copy link to share by email"><svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M0 1.2C0 .5.5 0 1.2 0h13.6c.7 0 1.2.5 1.2 1.2v.3L8 6.6 0 1.5z" fill="#1d1d1f"/><path d="M0 3.2v7.6c0 .7.5 1.2 1.2 1.2h13.6c.7 0 1.2-.5 1.2-1.2V3.2L8 8.4z" fill="#1d1d1f"/></svg></button><div class="pill"><a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="Share on LinkedIn" style="width:32px;height:32px;display:grid;place-items:center"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect width="16" height="16" rx="2" fill="#6e6e6e"/><path d="M3.4 6.2h2v6.4h-2zM4.4 3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM6.7 6.2h1.9v.9c.3-.5.9-1 1.9-1 2 0 2.4 1.3 2.4 3v3.5h-2V9.5c0-.7 0-1.6-1-1.6s-1.2.8-1.2 1.6v3.1h-2z" fill="#fbf7f6"/></svg></a><a href="https://x.com/" target="_blank" rel="noopener" aria-label="Share on X" style="width:32px;height:32px;display:grid;place-items:center;opacity:.5"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect width="16" height="16" rx="2" fill="#6e6e6e"/><path d="M4 4h2.3l2 2.8L10.6 4h1.2L8.9 7.5 12.2 12H9.9L7.7 9 5.2 12H4l3.1-3.7z" fill="#fbf7f6"/></svg></a><a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Share on Facebook" style="width:32px;height:32px;display:grid;place-items:center"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="9" fill="#6e6e6e"/><path d="M10 18v-6.5h2.1l.3-2.5H10V7.5c0-.7.2-1.2 1.2-1.2h1.3V4.1c-.2 0-1-.1-1.9-.1-1.9 0-3.1 1.1-3.1 3.2V9H5.4v2.5h2.1V18z" fill="#fbf7f6"/></svg></a></div>'+(top?'<span id="copied" ':'<span ')+'class="d14" style="font-size:12px" hidden>Link copied</span></div>';}
/* Article body: newsletter CTA after the key takeaways box (or after 3 paragraphs), then an ad every 3 paragraphs. */
var UNIT={ul:1,lead:1,p:1,s:1,q:1,ans:1,pm:1,mv:1,job:1,tl:1,fig:1};
function adIn(){return '<div class="ad-in" role="complementary" aria-label="Advertisement"><p class="ad-lab">ADVERTISEMENT</p><a class="ad-slot ad-300" href="#home" aria-label="Advertisement"><span>300 × 250</span></a></div>'}
function withAds(list,render,startCount){
  var out='',n=startCount||0,ads=0;
  list.forEach(function(x,i){out+=render(x);if(UNIT[x.k]){n++;var nx=list[i+1];
    if(n>=3&&ads<6&&nx&&nx.k!=='ans'&&list.slice(i+1).some(function(y){return UNIT[y.k]})){out+=adIn();ads++;n=0}}});
  return out;
}
function body(a){
  var bl=a.b.filter(function(x){return x.k!=='nl'});
  if(bl.length&&bl[0].k==='kt'&&!a.gate){
    var rest=bl.slice(1).filter(function(x){return x.k!=='ws'});
    return block(bl[0])+block({k:'nl'})+'<div class="ws-sec">'+block({k:'ws'})+'<div class="ws-body">'+withAds(rest,function(x){return x.k==='lead'?'<p>'+x.pre+(x.link?'<a href="#a-'+x.to+'">'+x.link+'</a>':'')+x.post+'</p>':block(x)})+'</div></div>';
  }
  if(a.gate&&!subscribed){return a.b.slice(0,a.gate).map(block).join('')+'<div class="gate"><div class="gatebox"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2.5" fill="#ff6a29"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10" fill="none" stroke="#ff6a29" stroke-width="2"/></svg><h2>This exclusive content? Only for subscribers.</h2><p>Join free to unlock the full list, plus the 5-minute weekly newsletter on Canadian construction.</p><div class="signup">'+signup('gateEmail')+'</div></div></div>';}
  var head='',seen=0,cut=bl.length;
  for(var q=0;q<bl.length;q++){if(UNIT[bl[q].k])seen++;if(seen===3){cut=q+1;break}}
  if(a.b.some(function(x){return x.k==='nl'})||bl.length>cut){head=bl.slice(0,cut).map(block).join('')+(cut<bl.length?block({k:'nl'}):'');return head+withAds(bl.slice(cut),block)}
  return bl.map(block).join('');
}
function endmods(){ return shareRow(false); }
function promo40(){
  return '<div class="px" style="padding-bottom:36px"><a class="promo press" href="#forty"><img src="'+IMG.forty+'" alt="2026 Top 40 Under 40 finalists"><div class="stack" style="gap:6px"><span class="tag or">40 Under 40</span><h4>The 2026 finalists are here!</h4><p class="d14" style="margin:0">Meet the rising stars shaping the future of Canadian construction.</p><span class="see">See the finalists →</span></div></a></div>';
}
var CS_SVG='<svg class="cs" width="36" height="36" viewBox="0 0 277 268" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="277" height="268" fill="#292929"/><path d="M204.822 143.231L180.733 126.337L113.154 222.646L68.6621 175.825L0 267.57V213.117L64.8945 124.898L109.387 171.719L154.268 107.761L130.162 90.8662L214.118 52L204.822 143.231Z" fill="#8C8C8C"/></svg>';
var STAFF_SVG='<svg class="cs" width="36" height="36" viewBox="0 0 277 268" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="277" height="268" fill="#FF6A29"/><path d="M204.822 143.231L180.733 126.337L113.154 222.646L68.6621 175.825L0 267.57V213.117L64.8945 124.898L109.387 171.719L154.268 107.761L130.162 90.8662L214.118 52L204.822 143.231Z" fill="#fff"/></svg>';
var current='';
function article(id){ current=id;
  var a=A[id]; if(!a) return home();
  var nid=id==='fortis'?'nickel':'fortis', n=A[nid];
  var topicLink=a.topic==='All'||a.topic==='Newsletter'?'All':a.topic;
  var big=biggerStory(id);
  var who=a.sp?'<span class="avs">'+CS_SVG+'<img src="'+IMG.antlogo+'" alt=""></span><span>Content Studio &amp; Ant Equipment</span>'
   :(a.av?'<img src="'+IMG.avatar+'" alt="">':a.cs?CS_SVG:STAFF_SVG)+'<span>'+a.author+'</span>';
  return '<article class="art"><div class="lead-hd"><div class="hd">'+(a.sp?'<span class="ptag">PARTNER CONTENT</span>':'')+'<h1>'+a.title+'</h1><p class="dek">'+a.dek+'</p>'+(a.sp?'':'<a class="atag" href="#t-'+topicLink+'">'+a.tag+'</a>')+'</div>'+
   '<div class="byline">'+who+'</div></div>'+
   shareRow(true)+
   '<div class="hair lead-rule"></div>'+
   (a.img?'<figure'+(a.tall?' class="tall"':'')+'><img src="'+IMG[a.img]+'" alt="'+a.alt+'"><figcaption>'+a.credit+'</figcaption></figure>':'<div style="height:8px"></div>')+
   '<div class="prose">'+body(a)+'</div>'+endmods()+'</article>'+
   big.html+'<div class="adband ad-rc"><p class="ad-lab">ADVERTISEMENT</p><a class="ad-slot ad-970" href="#home" aria-label="Advertisement"><span>970 × 90</span></a></div>'+trending()+moreCategory(id,big.shown)+promo40();
}
function topic(t){
  var sub=null, parts=t.split('/'); t=parts[0];
  if(t!=='All'&&TOPICS.indexOf(t)<0) t='All';
  var subs=SUBS[t]||[];
  if(parts[1]){subs.forEach(function(s){if(slug(s[0])===parts[1])sub=s})}
  var all=topicPool(t), list=all;
  if(sub&&sub[1]){var f=all.filter(function(x){return sub[1].test(x.title+' '+(x.dek||''))});if(f.length)list=f}
  var name=t==='All'?'News':t, PAGE=8;
  var head='<header class="tp-hd">'+(sub?'<a class="tp-crumb" href="#t-'+t+'">'+name+'</a>':'')+'<div class="tp-ttl">'+(NAV_ICONS[t==='All'?'News':t]?'<svg class="tp-ic" width="52" height="52" viewBox="0 0 25 25" aria-hidden="true">'+NAV_ICONS[t==='All'?'News':t]+'</svg>':'')+'<h1>'+(sub?sub[0]:name)+'</h1></div>'+(sub?'':'<p>'+(TDESC[t]||DESC[t])+'</p>')+'</header>';
  var nav='<nav class="tp-subs tp-pills'+(t==='All'?' tp-icons':'')+'" aria-label="'+name+' sections">'+(t==='All'
     ?['Technology','Projects','Recruitment','Economy','Sustainability','People','Forty'].map(function(x){
        var f=x==='Forty';return '<a class="chip-nav press" href="'+(f?'#forty':'#t-'+x)+'"><svg width="25" height="'+(f?24:25)+'" viewBox="'+(f?'0 0 26 24':'0 0 25 25')+'" aria-hidden="true">'+NAV_ICONS[x]+'</svg>'+(f?'40 Under 40':x)+'</a>'})
     :subs.map(function(s){return '<a class="tp-pill press" href="#t-'+t+'/'+slug(s[0])+'"'+(s===sub?' aria-current="page"':'')+'>'+s[0]+'</a>'})).join('')+'</nav>';
  var rows=list.map(function(x,i){return tpRow(x,i>=PAGE+1)}).join('');
  return '<div class="tp">'+head+
   '<div class="tp-main">'+nav+
     '<div class="tp-list">'+rows+'</div>'+
     (list.length>PAGE+1?'<div class="tp-more"><button class="tp-morebtn press" type="button" data-more>See More</button></div>':'')+
     (list.length?'':'<p class="d14" style="padding:24px 0">No stories in this section yet.</p>')+
   '</div></div>';
}
function slug(s){return s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function pdate(d){var t=Date.parse(d||'');return isNaN(t)?0:t}
function fmtDate(iso){var d=new Date(iso+'T12:00:00');return isNaN(d)?'':d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}
function normT(x){return (x||'').toLowerCase().replace(/&amp;/g,'&').replace(/[‘’'"“”]/g,'').replace(/\s+/g,' ').trim()}
function topicPool(t){
  /* Live ReadSiteNews stories (RSN_TOPICS); any that exist as articles in this prototype link to the local page */
  var local={}; ORDER.forEach(function(id){if(A[id])local[normT(A[id].title)]=id});
  var P=window.RSN_POSTS||{}, T=window.RSN_TOPICS||{}, seen={}, out=[];
  var ids=t==='All'?[].concat.apply([],TOPICS.map(function(k){return T[k]||[]})):(T[t]||[]);
  var catOf=function(pid){for(var i=0;i<TOPICS.length;i++){if((T[TOPICS[i]]||[]).indexOf(pid)>=0)return TOPICS[i]}return 'News'};
  ids.forEach(function(pid){if(seen[pid]||!P[pid])return;seen[pid]=1;var p=P[pid], lid=local[normT(p[2])], a=lid&&A[lid];
    out.push({href:a?'#a-'+lid:RS+p[0]+'/',ext:!a,tag:t==='All'?catOf(pid):t,title:p[2],dek:p[3],date:fmtDate(p[1]),iso:p[1],img:a&&a.img?IMG[a.img]:((window.RSN_IMG&&RSN_IMG[pid])||window.RSN_DIR+pid+'.webp'),focus:a?FOCUS[lid]:null})});
  /* prototype-only articles that aren't on the live site yet */
  ORDER.forEach(function(id){var a=A[id];if(!a||a.topic==='Newsletter'||!a.date)return;if(t!=='All'&&a.topic!==t)return;
    if(out.some(function(x){return x.href==='#a-'+id}))return;
    out.push({href:'#a-'+id,tag:a.sp?'Partner content':(t==='All'?a.topic:t),title:a.title,dek:a.homeDek||a.dek,date:a.date,img:a.img?IMG[a.img]:null,focus:FOCUS[id]})});
  return out.sort(function(a,b){return pdate(b.iso||b.date)-pdate(a.iso||a.date)});
}
function tpAttrs(x){return 'href="'+x.href+'"'+(x.ext?' target="_blank" rel="noopener"':'')}
function tpRow(x,hidden,isLead){
  return '<a class="tp-row press'+(isLead?' tp-row-lead':'')+'" '+tpAttrs(x)+(hidden?' hidden data-extra':'')+'><div class="tp-txt"><span class="tp-k">'+x.tag+'</span><span class="tp-t">'+x.title+'</span>'+(x.dek?'<span class="tp-d">'+x.dek+'</span>':'')+'<span class="tp-dt">'+(x.date||'').replace(/,\s*\d{4}$/,'')+'</span></div>'+(x.img?'<img class="tp-img" src="'+x.img+'" alt=""'+(x.focus?' style="object-position:'+x.focus+'"':'')+' loading="lazy">':'')+'</a>';
}
var TDESC={
 People:'Meet the leaders shaping Canadian construction, with executive moves, candid interviews and insights from the industry’s rising talent.',
 Projects:'Track the construction projects transforming Canada, from major infrastructure investments to the developments creating your next business opportunity.',
 Economy:'Understand the market forces, policy decisions and business moves shaping demand, costs and growth in Canadian construction.',
 Technology:'Explore the tools, technologies and building methods helping Canadian construction companies improve productivity and gain a competitive edge.',
 Sustainability:'Stay ahead of the materials, practices and standards driving lower-carbon construction and better-performing buildings across Canada.',
 Recruitment:'Build a stronger workforce with the latest on construction hiring, trades training, compensation and strategies to attract and retain talent.'
};
/* Sub-sections per topic: [label, keyword filter used until real tagging exists] */
var SUBS={
 People:[['Executive Appointments & People Moves',/people moves|appoint|names|hire|ceo|coo|president/i],['Construction Leadership',/leader|ceo|coo|q&a|sat down/i],['Women in Construction',/women|woman/i],['Indigenous Construction Leaders',/indigenous|first nations/i],['Emerging Leaders & 40 Under 40',/40 under 40|emerging|rising/i],['Construction Awards & Recognition',/award|recogni|finalist/i],['Worker Health & Safety',/safety|health|pain/i]],
 Projects:[['Housing & Residential Construction',/housing|home|residential/i],['Transportation Infrastructure',/transit|subway|skytrain|rail|highway|port|terminal|bridge/i],['Energy & Utilities',/pipeline|lng|gas|oil|power|hydro|mactaquac|nuclear|utilit|energy/i],['Industrial & Manufacturing',/factory|plant|industrial|manufactur|ev |data centre/i],['Mining & Critical Minerals',/mine|mining|nickel|mineral/i],['Healthcare Construction',/hospital|health|care/i],['Commercial & Institutional Buildings',/commercial|institution|school|office|campus/i],['Water & Wastewater Infrastructure',/water|wastewater/i]],
 Economy:[['Construction Outlook & Market Trends',/outlook|boom|market|productiv|trend/i],['Construction Costs & Materials',/cost|material|price|lumber|diesel/i],['Trade & Tariffs',/tariff|trade/i],['Government Policy & Regulation',/ottawa|act\b|policy|regulat|mandate|government|federal|carbon pricing/i],['Infrastructure Investment & Funding',/\$|invest|fund|loan|capital/i],['Mergers, Acquisitions & Business Expansion',/merger|acquir|buy|sells|deal/i],['Housing Economics & Development',/housing|home|residential/i]],
 Technology:[['AI in Construction',/\bai\b|artificial/i],['Construction Software & Digital Transformation',/software|procore|digital|app\b/i],['BIM & Digital Twins',/bim|digital twin/i],['Drones, Scanning & Reality Capture',/drone|scan|reality capture/i],['Robotics & Automation',/robot|automat/i],['Modular & Prefabricated Construction',/modular|prefab/i],['Innovative Building Materials & Systems',/material|system|innovat/i]],
 Sustainability:[['Low-Carbon Concrete & Building Materials',/concrete|low-carbon|cement/i],['Mass Timber & Wood Construction',/timber|wood/i],['Net-Zero & High-Performance Buildings',/net-zero|net zero|high-performance/i],['Building Retrofits & Decarbonization',/retrofit|decarboni|heat pump/i],['Construction Waste & Circular Economy',/waste|circular|recycl/i],['Clean Equipment & Jobsite Emissions',/electric|emission|equipment/i],['Green Building Standards & Policy',/standard|policy|code|green/i]],
 Recruitment:[['Labour Shortages & Workforce Planning',/shortage|workforce|labour/i],['Apprenticeships & Trades Training',/apprentic|trades|training/i],['Hiring & Talent Acquisition',/hiring|hire|talent|recruit/i],['Employee Retention & Workplace Culture',/retention|culture|mental health/i],['Construction Salaries & Benefits',/salar|pay|career|benefit/i],['Immigration & International Recruitment',/immigra|international/i],['Construction Jobs & Career Paths',/job|career/i]]
};

/* ---------- podcast: Digging In ---------- */
var POD_OVERVIEW='Canada’s construction industry moves fast. Digging In helps you lead through it. Join veteran journalist Russell Hixson for sharp analysis and candid conversations with industry decision-makers. From policy and economic shifts to emerging technology and major projects, SiteNews’ podcast digs into what matters to your business—and what’s coming next.';
var POD_LINKS={apple:'https://podcasts.apple.com/ca/podcast/digging-in/id1824516328',spotify:'https://open.spotify.com/show/29D6cddZI3smjQYGbls0xK'};
/* durations are placeholders until the feed is wired up */
var EPS=[
 {id:'boom',title:'$200B boom',date:'Oct 13, 2026',short:'Oct 13',len:1709,d:'Is Canada on the cusp of a $200B construction boom? Bay du Nord offshore oil project has a new investor. Ottawa is rolling out a $2B heat pump program. Nuclear reactors are on the move. The Build Canada Strong act has its first major legal challenge.'},
 {id:'pipeline',title:'In the Pipeline',date:'Oct 5, 2026',short:'Oct 5',len:1445,d:'What are the biggest Canadian construction stories of the week? Don’t get up. We have it all sorted for you. Here are the headlines you should be tracking: The Pacific Link pipeline has been designated a project of national interest. LNG Canada moves to Phase 2. EllisDon snags a massive EV factory build in Ontario.'},
 {id:'law',title:'Laying down the law',date:'Sep 28, 2026',short:'Sep 28',len:1872,d:'It was a historic week for Canadian construction. Here are the headlines we dug into for this pod: Ottawa has tabled the Building Canada Strong Act and we broke down the top three things the industry needs to know. Diesel prices are spiking, adding costs to jobs and creating a new target for thieves. U.S. Lumber tariffs could have a silver lining for Canadian homebuilders.'},
 {id:'pitch',title:'Pitch Perfect',date:'Sep 21, 2026',short:'Sep 21',len:1608,d:'Here’s what stories we are chasing down this week: Carney is inviting the world’s capital to invest in Canadian projects. The new ‘Mega Productivity’ tax deduction aims to sweeten the deal. Another piece of the puzzle is streamlining environmental approvals for certain projects. New data shows Canada’s construction productivity has stagnated (and how we can fix it). Finally, we detail a major nuclear project story that has just begun taking shape in Ontario.'},
 {id:'forty40',title:'40 Under 40',date:'Sep 14, 2026',short:'Sep 14',len:1350,d:'Here are the biggest construction headlines we were chasing down last week: 40 Under 40 Industrial Leaders winners have been revealed! Massive capital is opening up for the industrial sector to increase Canada’s resilience. The nation’s biggest GCs are running a campaign on mental health. A massive carbon capture project just got underway.'},
 {id:'pain',title:'Pain Relief w James Boseley',date:'Aug 7, 2026',short:'Aug 7',len:2296,guest:'James Boseley, Pain BC',d:'Sometimes construction hurts. This week we had a deep conversation with James Boseley of Pain BC about the hidden reality of chronic pain in the trades, how workers are often taught to ignore injuries and “tough it out,” and why that silence can lead to worsening physical and mental health. James shares his own experience with severe, long-ignored injuries, the stigma around pain in industrial work, and the importance of self-advocacy, documentation, and having the right support systems.'}
];
var EP={}; EPS.forEach(function(e){EP[e.id]=e});
var EP_LINKS=[[/Pacific Link pipeline/,'#a-pacific'],[/LNG Canada moves to Phase 2/,'#a-lng'],[/EllisDon/,'#a-ellisdon'],[/Build(ing)? Canada Strong (A|a)ct/,'#a-bcs'],[/40 Under 40 Industrial Leaders/,'#forty']];
function linkify(s){for(var i=0;i<EP_LINKS.length;i++){var m=s.match(EP_LINKS[i][0]);if(m)return s.replace(m[0],'<a href="'+EP_LINKS[i][1]+'">'+m[0]+'</a>')}return s}
function epMin(e){return Math.round(e.len/60)+' min'}
var SPEAKER='<svg class="spk" width="26" height="25" viewBox="0 0 26 25" fill="none" aria-hidden="true"><path d="M14.8052 24.1655C14.4097 24.1655 14.0405 24.0864 13.6978 23.9282C13.3638 23.77 13.0078 23.5107 12.6299 23.1504L7.29053 18.1406C7.22021 18.0791 7.13232 18.0483 7.02686 18.0483H3.36182C2.28076 18.0483 1.4502 17.7495 0.870117 17.1519C0.290039 16.5454 0 15.6709 0 14.5283V9.65039C0 8.5166 0.290039 7.65088 0.870117 7.05322C1.4502 6.44678 2.28076 6.14355 3.36182 6.14355H7.04004C7.12793 6.14355 7.21582 6.1084 7.30371 6.03809L12.6299 1.06787C13.0342 0.681152 13.3989 0.408691 13.7241 0.250488C14.0493 0.0834961 14.4009 0 14.7788 0C15.3853 0 15.8862 0.206543 16.2817 0.619629C16.6772 1.02393 16.875 1.52051 16.875 2.10938V22.1089C16.875 22.689 16.6772 23.1768 16.2817 23.5723C15.8862 23.9678 15.394 24.1655 14.8052 24.1655ZM21.5288 18.3384C21.1245 18.0747 20.8872 17.7144 20.8169 17.2573C20.7466 16.8003 20.8784 16.2993 21.2124 15.7544C21.5376 15.2446 21.7881 14.6733 21.9639 14.0405C22.1484 13.4077 22.2407 12.7529 22.2407 12.0762C22.2407 11.3906 22.1528 10.7314 21.9771 10.0986C21.8013 9.46582 21.5464 8.89893 21.2124 8.39795C20.8696 7.85303 20.7334 7.35205 20.8037 6.89502C20.8828 6.4292 21.1245 6.06885 21.5288 5.81396C21.9067 5.57666 22.3022 5.49756 22.7153 5.57666C23.1284 5.65576 23.458 5.8623 23.7041 6.19629C24.2754 6.9873 24.7192 7.88818 25.0356 8.89893C25.3608 9.90967 25.5234 10.9688 25.5234 12.0762C25.5234 13.1748 25.3608 14.2295 25.0356 15.2402C24.7192 16.251 24.2754 17.1475 23.7041 17.9297C23.458 18.2812 23.1284 18.4966 22.7153 18.5757C22.3022 18.646 21.9067 18.5669 21.5288 18.3384Z" fill="#FF6A29"/></svg>';
var APPLE_SVG='<img src="assets/img/ic-apple.png" width="29" height="30" alt="">';
var SPOT_SVG='<img src="assets/img/ic-spotify.png" width="30" height="30" alt="">';
function listenOn(){return '<div class="lsn"><div class="lsn-h">'+SPEAKER+'<span>LISTEN ON</span></div><div class="lsn-b"><a class="lsn-btn press" href="'+POD_LINKS.apple+'" target="_blank" rel="noopener">'+APPLE_SVG+'Apple Podcasts</a><a class="lsn-btn press" href="'+POD_LINKS.spotify+'" target="_blank" rel="noopener">'+SPOT_SVG+'Spotify</a></div></div>'}
function spPlayer(e,big){
  return '<div class="spp'+(big?' spp-big':'')+'" data-ep="'+e.id+'"><img class="spp-art" src="'+(big?IMG.podcover:IMG.podart)+'" alt="Digging In cover art">'+
   '<svg class="spp-logo" width="20" height="20" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="15" fill="#fff"/><path d="M7.6 11.2c4.9-1.4 10.6-.9 14.9 1.6M8.4 15.2c4-1.1 8.7-.7 12.3 1.4M9.2 19c3.2-.8 6.6-.5 9.4 1.1" fill="none" stroke="#282828" stroke-width="2.4" stroke-linecap="round"/></svg>'+
   '<div class="spp-meta"><a class="spp-t" href="#ep-'+e.id+'">'+e.title+'</a><span class="spp-s">'+e.short+' · Digging In</span><button class="spp-save" type="button" data-save aria-pressed="false"></button></div>'+
   '<div class="spp-ctl"><button class="spp-sk" type="button" data-skip="-15" aria-label="Back 15 seconds"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 2.5A6.5 6.5 0 1 1 2.5 9" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round"/><path d="M9 .5v4L6.3 2.5z" fill="#bbb"/><text x="9" y="12.2" font-size="6.5" font-family="system-ui" font-weight="700" fill="#bbb" text-anchor="middle">15</text></svg></button>'+
   '<div class="spp-bar" data-seek role="slider" tabindex="0" aria-label="Seek" aria-valuemin="0" aria-valuemax="'+e.len+'"><i data-prog></i></div>'+
   '<button class="spp-sk" type="button" data-skip="15" aria-label="Forward 15 seconds"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 2.5A6.5 6.5 0 1 0 15.5 9" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round"/><path d="M9 .5v4l2.7-2z" fill="#bbb"/><text x="9" y="12.2" font-size="6.5" font-family="system-ui" font-weight="700" fill="#bbb" text-anchor="middle">15</text></svg></button>'+
   '<span class="spp-time" data-left></span><span class="spp-more" aria-hidden="true">•••</span>'+
   '<button class="spp-play" type="button" data-play aria-label="Play episode"></button></div></div>';
}
function epRow(e,hidden){
  return '<a class="eprow" href="#ep-'+e.id+'"'+(hidden===true?' hidden data-extra':'')+'><div class="ep-txt"><span class="ep-t">'+e.title+'</span><span class="ep-d">'+e.d+'</span><span class="ep-dt">'+e.date+'<span class="ep-len"> · '+epMin(e)+'</span></span></div><img class="ep-art" src="'+IMG.podart+'" alt=""></a>';
}
function podShowHead(){return '<div class="pod-hd"><span class="pod-tag">Podcast</span><h1>Digging In</h1><p class="pod-host">with Russell Hixson</p></div>'}
var EP_PAGE=4; /* episodes shown before See More */
function podcastPage(){
  var latest=EPS[0];
  return '<div class="pod">'+podShowHead()+
   '<div class="pod-grid"><div class="pod-main">'+
     '<div class="pod-hero"><img src="'+IMG.podhero+'" alt="Digging In with Russell Hixson, a SiteNews podcast"></div>'+
     '<h2 class="pod-sh pod-eph">Episodes</h2>'+
     '<div class="eplist">'+EPS.map(function(e,i){return epRow(e,i>=EP_PAGE)}).join('')+
       (EPS.length>EP_PAGE?'<div class="tp-more ep-more"><button class="tp-morebtn press" type="button" data-more>See More</button></div>':'')+'</div>'+
   '</div><aside class="pod-side">'+
     '<div class="ad-mpu pod-ad"><p class="ad-lab">ADVERTISEMENT</p><a class="ad-slot ad-300" href="#podcast" aria-label="Advertisement"><span>300 × 250</span></a></div>'+
     listenOn()+'<div class="pod-rule pod-rule2"></div>'+
     '<div class="pod-latest"><h2 class="pod-sh">Latest</h2>'+spPlayer(latest)+'</div>'+
     '<div class="pod-rule"></div>'+
     '<div class="pod-ov"><h2 class="pod-sh">Overview</h2><p>'+POD_OVERVIEW+'</p></div>'+
   '</aside></div></div>';
}
function episodePage(id){
  var e=EP[id], i=EPS.indexOf(e), more=EPS.filter(function(x){return x!==e}).slice(0,4);
  var parts=e.d.split(/(?<=[.!?”])\s+(?=[A-Z“])/), intro=[], heads=[];
  var ci=parts.findIndex(function(p){return /:\s*\S/.test(p)});
  if(ci>=0){var c=parts[ci].split(/:\s*/);intro=parts.slice(0,ci).concat([c[0]+':']);heads=[c.slice(1).join(': ')].concat(parts.slice(ci+1))}
  else {intro=parts}
  var nav=(i>0?'<a class="ep-nav-b press" href="#ep-'+EPS[i-1].id+'"><span>Newer</span>'+EPS[i-1].title+'</a>':'<span></span>')+(i<EPS.length-1?'<a class="ep-nav-b nx press" href="#ep-'+EPS[i+1].id+'"><span>Older</span>'+EPS[i+1].title+'</a>':'<span></span>');
  return '<div class="pod epi">'+
   '<div class="epi-hd"><a class="pod-tag" href="#podcast">Digging In · Podcast</a><h1>'+e.title+'</h1>'+
     '<div class="epi-by"><div class="byline"><img src="'+IMG.avatar+'" alt=""><span>Russell Hixson'+(e.guest?' with '+e.guest:'')+'</span></div><span class="epi-dt">'+e.date+' · '+epMin(e)+'</span></div></div>'+
   '<div class="pod-grid"><div class="pod-main">'+
     spPlayer(e,true)+
     '<div class="epi-lsn">'+listenOn()+'</div>'+
     '<div class="epi-notes"><h2 class="pod-sh">Show notes</h2>'+
       '<p>'+intro.map(linkify).join(' ')+'</p>'+
       (heads.length?'<ol class="epi-heads">'+heads.map(function(h){return '<li><span>'+linkify(h)+'</span></li>'}).join('')+'</ol>':'')+
     '</div>'+
     shareRow(false)+
     '<nav class="ep-nav" aria-label="Episodes">'+nav+'</nav>'+
   '</div><aside class="pod-side">'+
     '<div class="epi-sub">'+block({k:'nl'})+'</div>'+
     '<div class="pod-ov"><h2 class="pod-sh">About the show</h2><p>'+POD_OVERVIEW+'</p><a class="pod-all" href="#podcast">All episodes →</a></div>'+
   '</aside></div>'+
   '<section class="epi-more"><div class="pod-rule"></div><h2 class="pod-sh">More episodes</h2><div class="eplist">'+more.map(epRow).join('')+'</div></section>'+
  '</div>';
}


/* ---------- ads: a random creative per slot on every page load ---------- */
var ADS={
 lb:[{src:'assets/img/ads/lb-studson.jpg',alt:'Studson: Advanced head protection built for the job site'},{src:'assets/img/ads/lb-arkance.jpg',alt:'ARKANCE: Need additional project support?'},{src:'assets/img/ads/lb-mobilization.jpg',alt:'Mobilization Funding: Field Tested, pre-order today'}],
 mpu:[{src:'assets/img/ads/mpu-brady.jpg',alt:'Brady: Built for tough jobs and inspections'},{src:'assets/img/ads/mpu-dell.jpg',alt:'Dell Pro Rugged laptops'}]
};
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
var AD_PICK={lb:shuffle(ADS.lb),mpu:shuffle(ADS.mpu)};
function adImg(x){return '<img src="'+x.src+'" alt="'+x.alt+'">'}
function fillAds(){
  var lb=[].slice.call(document.querySelectorAll('#adTop .ad-slot, main .ad-970, #adBot .ad-slot'));
  lb.forEach(function(sl,i){if(!sl.querySelector('img'))sl.innerHTML=adImg(AD_PICK.lb[i%AD_PICK.lb.length])});
  [].slice.call(document.querySelectorAll('.ad-300')).forEach(function(sl,i){if(!sl.querySelector('img'))sl.innerHTML=adImg(AD_PICK.mpu[i%AD_PICK.mpu.length])});
}
/* ---------- routing ---------- */
var app=document.getElementById('app');
function route(){
  var h=(location.hash||'').slice(1);
  closeAll();
  var scrollTo=null, t='Site News — for construction';
  if(h.indexOf('a-')===0&&A[h.slice(2)]){app.innerHTML=article(h.slice(2)); t=A[h.slice(2)].title+' | SiteNews';}
  else if(h==='newsletter'){app.innerHTML=nlIssue(); t='Great pipes | SiteNews newsletter';}
  else if(h==='podcast'){app.innerHTML=podcastPage(); t='Digging In — Site News';}
  else if(h.indexOf('ep-')===0&&EP[h.slice(3)]){var ep=EP[h.slice(3)];app.innerHTML=episodePage(ep.id); t=ep.title+' | Digging In | SiteNews';}
  else if(h.indexOf('t-')===0){var tn=decodeURIComponent(h.slice(2)); app.innerHTML=topic(tn); t=app.querySelector('.tp-hd h1').textContent+' — Site News';}
  else {app.innerHTML=home(); if(h==='summit'||h==='signup'||h==='forty') scrollTo=h;}
  document.title=t;
  document.body.classList.toggle('art-pg',h.indexOf('a-')===0&&!!A[h.slice(2)]);
  var isPod=h==='podcast'||(h.indexOf('ep-')===0&&!!EP[h.slice(3)]);
  setLogoMode(!(h.indexOf('a-')===0&&A[h.slice(2)])&&h.indexOf('t-')!==0&&h!=='newsletter'&&!isPod);
  document.body.classList.toggle('pod-pg',isPod);
  document.body.classList.toggle('tp-pg',h.indexOf('t-')===0);
  if(scrollTo){var el=document.getElementById(scrollTo); if(el){var y=el.getBoundingClientRect().top+window.scrollY-12; window.scrollTo(0,Math.max(0,y)); if(scrollTo==='signup'){var i=document.getElementById('heroEmail'); i&&i.focus({preventScroll:true});}}}
  else window.scrollTo(0,0);
  wirePlayer();
  wireVideo();
  fillAds();
}
window.addEventListener('hashchange',route);

/* ---------- overlays ---------- */
var logoBtn=document.getElementById('logoBtn'), menuBtn=document.getElementById('menuBtn');
var brandsL=document.getElementById('brandsLayer'), menuL=document.getElementById('menuLayer');
function placeLayers(){var b=document.querySelector('.hdr').getBoundingClientRect().bottom;document.querySelectorAll('.layer').forEach(function(l){l.style.top=Math.max(0,b)+'px'})}
function setBrands(on){if(on&&window.scrollY)window.scrollTo(0,0);if(on)placeLayers();if(on&&innerWidth>=800){var lb=logoBtn.getBoundingClientRect(),br=brandsL.querySelector('.brands'),lt=parseFloat(brandsL.style.top)||0;br.style.top=(lb.bottom+3-lt)+'px';br.style.left=Math.max(16,lb.left-10)+'px'}brandsL.hidden=!on;if(onHome)logoBtn.setAttribute('aria-expanded',on);if(on)setMenu(false);}
function setMenu(on){if(on&&window.scrollY)window.scrollTo(0,0);if(on)placeLayers();menuL.hidden=!on;menuBtn.setAttribute('aria-expanded',on);menuBtn.setAttribute('aria-label',on?'Close menu':'Menu');document.body.style.overflow=on?'hidden':'';if(on){setBrands(false);}else{q.value='';search('');}}
function closeAll(){setBrands(false);setMenu(false);if(typeof tPop!=='undefined'&&tPop){setTopicsPop(false);setMorePop(false)}}
var onHome=true;
function setLogoMode(home){onHome=home;document.body.classList.toggle('inner',!home);
  if(home){logoBtn.setAttribute('aria-expanded','false');logoBtn.setAttribute('aria-controls','brandsLayer');logoBtn.setAttribute('aria-label','SiteNews — switch publication');}
  else{logoBtn.removeAttribute('aria-expanded');logoBtn.removeAttribute('aria-controls');logoBtn.setAttribute('aria-label','SiteNews home');}}
logoBtn.addEventListener('click',function(){if(onHome){setBrands(brandsL.hidden)}else{location.hash='home'}});
menuBtn.addEventListener('click',function(e){if(isDesk()){e.stopPropagation();setMorePop(mPop.hidden);return}setMenu(menuL.hidden)});
brandsL.querySelector('[data-close]').addEventListener('click',function(){setBrands(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll()});
brandsL.addEventListener('click',function(e){var a=e.target.closest('a[href="#home"]'); if(a&&location.hash===''||a&&location.hash==='#home'){setBrands(false)}});

var mt=document.getElementById('menuTopics'), ft=document.getElementById('footTopics');
var NAV_ICONS={
  Forty:'<path d="M7.44517 12.2162C7.02456 12.218 6.76324 12.6839 6.76157 13.0599L6.75864 18.1937L0.820166 18.1908C0.411057 18.1908 0.107951 18.4688 -0.000146608 18.8666L0.0994623 23.9857L0.103369 23.9837L25.1268 24.0003C25.3844 24.0003 25.7272 23.7277 25.7176 23.5414C25.6179 21.8623 25.6062 20.5008 25.7176 18.8334C25.7343 18.5904 25.4196 18.1937 25.1668 18.1937L19.0233 18.1937L19.0233 12.8998C19.023 12.5587 18.569 12.2162 18.2049 12.2162L7.44517 12.2162ZM12.9667 0.0052295C12.7805 -0.0396542 12.3819 0.213407 12.2967 0.416362L11.1571 3.12632L7.95786 3.57066C7.80819 3.59063 7.48727 3.82348 7.48228 3.94664C7.47734 4.06982 7.58981 4.31809 7.70786 4.42124L10.0614 6.50621L9.41587 9.57652C9.37098 9.78782 9.83476 10.3468 10.0477 10.224L12.8553 8.59312L15.5526 10.1253C15.6572 10.1852 16.0257 10.1958 16.1327 10.1361C16.2391 10.0762 16.336 9.72774 16.3094 9.58628L15.7206 6.5648L18.0702 4.40953C18.1566 4.32964 18.2651 4.01788 18.2352 3.91636C18.2051 3.81482 17.9586 3.64071 17.829 3.62242L14.5985 3.16734L13.4754 0.46812C13.4022 0.293384 13.1213 0.0418307 12.9667 0.0052295Z" fill="#F36F21"/>',
  News:'<path d="M17.6895 5.58984L17.7383 5.78613L17.7969 6.10449C17.8289 6.14372 17.8595 6.20499 17.8779 6.26465L17.9922 6.62402L18.1064 6.78125L18.2148 6.94824L18.3242 7.13867C18.3524 7.18806 18.4671 7.22753 18.4414 7.33203L18.6074 7.46387C18.6232 7.51385 18.654 7.61746 18.6914 7.64648L18.9473 7.84473C19.0384 7.91567 19.1219 7.9552 19.1777 8.06055L19.3291 8.11914C19.3796 8.22072 19.4685 8.27675 19.5879 8.29395L19.6787 8.41992C19.7866 8.39253 19.8777 8.4455 19.9033 8.54102L20.1191 8.58887L20.332 8.64453C20.4103 8.6654 20.4698 8.6851 20.5244 8.72461L20.79 8.7793L21.0127 8.84082L21.9521 8.84863C22.0502 8.78207 22.1926 8.779 22.2881 8.80469L22.3057 8.96484C22.3111 9.01526 22.3228 9.03372 22.292 9.08789L22.2891 20.416C22.2008 20.4568 22.1925 20.4994 22.1963 20.5811C22.212 20.9464 22.0836 21.0671 22.0283 21.1875L21.8672 21.5371L21.7451 21.707L21.5664 21.8916L21.4658 22.0361C21.4469 22.0629 21.3871 22.1181 21.3604 22.1387L21.208 22.2598L21.0332 22.4102C20.9947 22.4434 20.9029 22.4896 20.8535 22.5176L20.7012 22.6045L20.3682 22.7646C20.3406 22.778 20.279 22.8201 20.249 22.8252L19.9229 22.8779H19.9238C19.8273 23.0264 19.6504 22.8886 19.4531 23H2.74414L2.47461 22.9238C2.43131 22.9112 2.37556 22.8562 2.30859 22.8604C2.12794 22.8722 2.01887 22.8122 1.89844 22.7568L1.58301 22.6123L1.44336 22.5264L1.19922 22.3506L1.00293 22.1914L0.813477 22.0029L0.681641 21.8604L0.588867 21.7715C0.536821 21.6405 0.471784 21.5185 0.381836 21.417C0.362815 21.1786 0.229331 21.1301 0.177734 20.9316C0.0937226 20.6095 0.186989 20.4845 0.0654297 20.4141L0.0126953 20.0947C-0.000280559 20.0167 -0.00441738 19.8813 0.015625 19.8164C0.0540425 19.6908 0.0473919 19.6183 0.0175781 19.4932C-0.00626382 19.3933 -0.00599812 19.2199 0.015625 19.1172L0.0488281 18.9658V10.9766L0.00390625 10.8828L0.0117188 10.1953C0.0122613 10.1346 0.0756254 10.0615 0.00292969 9.99805L0.00195312 8.74121L0.0439453 8.65137L0.0517578 7.61719C0.220134 7.54728 0.0734077 7.34137 0.171875 7.12012C0.196288 7.00779 0.22559 6.88877 0.308594 6.80762C0.327553 6.68741 0.371522 6.55942 0.447266 6.45898C0.528099 6.26765 0.660706 6.07827 0.801758 5.93262L0.930664 5.79785C0.944227 5.78388 0.95638 5.72668 0.958008 5.7041L1.21777 5.49219C1.30218 5.43963 1.37397 5.37985 1.44434 5.31445C1.50455 5.29887 1.56467 5.2473 1.60156 5.20215L1.98926 5.01465C2.22415 4.90125 2.47742 4.91098 2.57617 4.80566C2.6825 4.79062 2.77095 4.78353 2.87891 4.7373L17.6699 4.73633L17.6895 5.58984ZM7.04688 18.5693L6.80566 18.6113L6.17871 18.623L6.07031 18.5752H4.58887C4.50107 18.6418 4.38917 18.6466 4.30078 18.5742L3.0752 18.5752C3.04052 18.6498 2.93902 18.6653 2.90039 18.7012L2.71484 18.874C2.67633 18.91 2.64551 18.9838 2.62598 19.0488L2.5459 19.1094L2.55273 19.4893C2.67562 19.5231 2.5811 19.5913 2.72461 19.7803C2.86831 19.9694 3.02439 20.0146 3.26074 20.0146H18.1992L18.3516 19.9424L18.5605 19.7383C18.6823 19.585 18.6998 19.2511 18.6533 19.1221L18.5479 18.8291L18.3945 18.7334C18.3517 18.7 18.2808 18.6231 18.2158 18.623L16.1797 18.624C16.1244 18.624 16.0576 18.6052 15.999 18.5762V18.5752H15.0498C14.9973 18.6063 14.9424 18.623 14.877 18.623L10.9785 18.6211C10.8853 18.5916 10.7782 18.5555 10.6807 18.5693L10.4033 18.6094L10.1045 18.627C10.0611 18.6295 9.98026 18.6001 9.93848 18.5781L8.42969 18.5723L8.32129 18.623L7.28906 18.6211C7.21748 18.5883 7.1271 18.5554 7.04688 18.5693ZM8.68359 15.0928L8.50684 15.1299L2.9873 15.1318C2.94448 15.1736 2.8865 15.2123 2.84375 15.2412L2.69043 15.3447C2.66548 15.4506 2.65192 15.5524 2.55273 15.6143L2.5498 15.9863C2.6078 16.0288 2.61741 16.059 2.63965 16.124L2.70996 16.3271L2.91016 16.4541C2.9412 16.4735 3.02173 16.5233 3.08984 16.5234H18.2314L18.4082 16.4531L18.583 16.2764C18.6242 16.2351 18.657 16.1053 18.6582 16.0439L18.6699 15.5566L18.5518 15.3408C18.4639 15.2758 18.4064 15.2222 18.3457 15.1309L9.54688 15.1299L9.43066 15.085L8.68359 15.0928ZM3.37598 7.60938L3.20312 7.69727C3.0816 7.72844 3.0396 7.78608 2.96094 7.86133C2.88241 7.93644 2.80727 8.00846 2.75684 8.11621L2.69531 8.18066L2.63867 8.37598V12.1133L2.7002 12.3672C2.72575 12.4349 2.81221 12.5575 2.86426 12.6074L3.03906 12.7754L3.30566 12.915C3.36587 12.9312 3.44264 12.9468 3.50879 12.9785H9.22852L9.42383 12.9053L9.51855 12.8516C9.72239 12.7334 9.92214 12.5524 9.98242 12.3135C10.0426 12.2753 10.071 12.2108 10.0547 12.1211C10.0461 12.0534 10.0977 11.9474 10.0977 11.8809L10.1006 8.45703L10.0518 8.31152C10.0431 8.28528 10.0066 8.23425 9.99512 8.20996L9.87891 7.95508C9.79769 7.89337 9.74342 7.84351 9.68652 7.75977L9.49707 7.68359L9.36621 7.60938L9.1748 7.54297L3.63477 7.54199L3.37598 7.60938ZM12.6221 11.4326C12.5727 11.4692 12.4772 11.5572 12.4463 11.6104C12.4186 11.6572 12.3771 11.7746 12.376 11.832L12.3672 12.3047L12.4902 12.502C12.5119 12.5368 12.5751 12.6085 12.6094 12.626L12.7783 12.7109H19.2871V12.71L19.4531 12.6455C19.5676 12.6928 19.6254 12.6245 19.6602 12.5342C19.741 12.5379 19.8272 12.4728 19.8262 12.3799L19.8203 11.6455L19.5732 11.4277C19.5418 11.3998 19.4627 11.3753 19.4258 11.3184H12.7734L12.6221 11.4326ZM17.1104 7.90234C17.0259 7.85788 16.9561 7.84352 16.876 7.9082L12.7969 7.91211L12.625 7.9834L12.4521 8.14258L12.3662 8.33789L12.3691 8.89844L12.4941 9.10547L12.627 9.22754L12.7793 9.2998L18.5254 9.29883C18.6055 9.26188 18.6686 9.24848 18.7412 9.23828L18.7422 9.19043L18.4971 9.02051L18.3145 8.9043L18.1533 8.75879C18.1181 8.72708 18.0497 8.71114 18.0264 8.6875L17.834 8.49707L17.6748 8.33496L17.46 8.08789L17.333 7.91895L17.1104 7.90234ZM22.0596 2C22.2017 2.22624 22.4737 2.0419 22.6885 2.24707C22.7638 2.27335 22.9037 2.2981 22.9727 2.35059C23.137 2.47635 23.2274 2.43409 23.2969 2.56738C23.4379 2.60286 23.5176 2.69882 23.6152 2.79395L23.7832 2.95801C23.8819 3.05361 23.96 3.16476 24.0283 3.27539L24.1426 3.43652L24.25 3.60059C24.2956 3.66938 24.3116 3.76542 24.3154 3.8584C24.5129 4.05081 24.4058 4.25904 24.498 4.40039L24.4932 5.25L24.4502 5.43359L24.4121 5.63574C24.4023 5.6868 24.359 5.75732 24.333 5.79492L24.2383 6.05957L24.1436 6.23047C24.1072 6.29546 24.0772 6.34506 24.0176 6.38965C23.9677 6.49821 23.89 6.60776 23.7939 6.7002C23.7829 6.80577 23.668 6.8258 23.623 6.87305C23.5202 6.98133 23.4228 7.03096 23.3086 7.11621L23.0684 7.2959L22.9189 7.37305C22.8267 7.42088 22.7077 7.45243 22.6084 7.4707C22.571 7.50076 22.5006 7.54514 22.4502 7.55273L22.2119 7.58984C22.1838 7.59414 22.1556 7.61515 22.1172 7.67188V7.67285H21.2744C21.2402 7.60567 21.2058 7.59454 21.1445 7.58594L20.9375 7.55566L20.7617 7.52441C20.6787 7.42176 20.4483 7.43773 20.2812 7.3125L20.0918 7.17676C20.004 7.10163 19.9437 7.03892 19.8398 6.99219L19.6826 6.83301L19.4883 6.6377C19.4509 6.60011 19.4414 6.49888 19.3555 6.47559L19.2432 6.21973L19.1562 6.0752C19.1135 6.00434 19.0896 5.93378 19.0527 5.85059L18.9805 5.6875C18.9441 5.60424 18.9581 5.52836 18.9424 5.43652L18.9023 5.19922C18.8486 4.87948 18.8758 4.29775 19.0146 3.96289C19.0646 3.84304 19.1411 3.74077 19.1416 3.59082L19.2607 3.50488C19.2609 3.37597 19.3718 3.20479 19.4629 3.11133L19.5996 2.9707L19.8066 2.77539C19.8555 2.69911 19.9189 2.64229 20.0127 2.62402C20.0984 2.50632 20.2271 2.43822 20.3682 2.3877C20.4435 2.32971 20.5433 2.28853 20.6436 2.25684C20.7249 2.17353 20.824 2.12905 20.9531 2.13281C21.0667 2.13589 21.3122 2.07682 21.3203 2.00488L22.0596 2Z" fill="#F36F21"/>',
  People:'<path d="M25 17.5H0V21H25V17.5Z" fill="#F36F21"/><path d="M23.4043 15.1568C23.4043 10.9008 20.6515 7.251 16.732 5.69604V13.9532H15.2985V4.37726C14.3943 4.1267 13.456 4 12.5001 4C11.6668 4 10.8442 4.09648 10.0459 4.28796V13.9532H8.61396V5.56505C4.50999 7.038 1.59576 10.777 1.59576 15.1568V16.5H23.4043V15.1568Z" fill="#F36F21"/>',
  Projects:'<path d="M21.1364 0.409073C21.3703 0.409073 21.5727 0.494537 21.7436 0.665465C21.9146 0.836394 22 1.03881 22 1.27271V23.7273C22 23.9612 21.9146 24.1636 21.7436 24.3345C21.5727 24.5055 21.3703 24.5909 21.1364 24.5909H3.86364C3.62974 24.5909 3.42732 24.5055 3.25639 24.3345C3.08546 24.1636 3 23.9612 3 23.7273V1.27271C3 1.03881 3.08546 0.836394 3.25639 0.665465C3.42732 0.494537 3.62974 0.409073 3.86364 0.409073H21.1364ZM9.9091 4.29544V5.15908C9.9091 5.28503 9.94958 5.38848 10.0305 5.46945C10.1115 5.55042 10.215 5.5909 10.3409 5.5909H11.2046C11.3305 5.5909 11.434 5.55042 11.5149 5.46945C11.5959 5.38848 11.6364 5.28503 11.6364 5.15908V4.29544C11.6364 4.16949 11.5959 4.06604 11.5149 3.98507C11.434 3.90411 11.3305 3.86362 11.2046 3.86362H10.3409C10.215 3.86362 10.1115 3.90411 10.0305 3.98507C9.94958 4.06604 9.9091 4.16949 9.9091 4.29544ZM9.9091 7.74999V8.61363C9.9091 8.73958 9.94958 8.84303 10.0305 8.924C10.1115 9.00497 10.215 9.04545 10.3409 9.04545H11.2046C11.3305 9.04545 11.434 9.00497 11.5149 8.924C11.5959 8.84303 11.6364 8.73958 11.6364 8.61363V7.74999C11.6364 7.62405 11.5959 7.52059 11.5149 7.43962C11.434 7.35866 11.3305 7.31817 11.2046 7.31817H10.3409C10.215 7.31817 10.1115 7.35866 10.0305 7.43962C9.94958 7.52059 9.9091 7.62405 9.9091 7.74999ZM9.9091 11.2045V12.0682C9.9091 12.1941 9.94958 12.2976 10.0305 12.3785C10.1115 12.4595 10.215 12.5 10.3409 12.5H11.2046C11.3305 12.5 11.434 12.4595 11.5149 12.3785C11.5959 12.2976 11.6364 12.1941 11.6364 12.0682V11.2045C11.6364 11.0786 11.5959 10.9751 11.5149 10.8942C11.434 10.8132 11.3305 10.7727 11.2046 10.7727H10.3409C10.215 10.7727 10.1115 10.8132 10.0305 10.8942C9.94958 10.9751 9.9091 11.0786 9.9091 11.2045ZM9.9091 14.6591V15.5227C9.9091 15.6487 9.94958 15.7521 10.0305 15.8331C10.1115 15.9141 10.215 15.9545 10.3409 15.9545H11.2046C11.3305 15.9545 11.434 15.9141 11.5149 15.8331C11.5959 15.7521 11.6364 15.6487 11.6364 15.5227V14.6591C11.6364 14.5331 11.5959 14.4297 11.5149 14.3487C11.434 14.2678 11.3305 14.2273 11.2046 14.2273H10.3409C10.215 14.2273 10.1115 14.2678 10.0305 14.3487C9.94958 14.4297 9.9091 14.5331 9.9091 14.6591ZM8.18183 18.9773V18.1136C8.18183 17.9877 8.14134 17.8842 8.06038 17.8033C7.97941 17.7223 7.87595 17.6818 7.75001 17.6818H6.88637C6.76042 17.6818 6.65697 17.7223 6.576 17.8033C6.49503 17.8842 6.45455 17.9877 6.45455 18.1136V18.9773C6.45455 19.1032 6.49503 19.2067 6.576 19.2877C6.65697 19.3686 6.76042 19.4091 6.88637 19.4091H7.75001C7.87595 19.4091 7.97941 19.3686 8.06038 19.2877C8.14134 19.2067 8.18183 19.1032 8.18183 18.9773ZM8.18183 15.5227V14.6591C8.18183 14.5331 8.14134 14.4297 8.06038 14.3487C7.97941 14.2678 7.87595 14.2273 7.75001 14.2273H6.88637C6.76042 14.2273 6.65697 14.2678 6.576 14.3487C6.49503 14.4297 6.45455 14.5331 6.45455 14.6591V15.5227C6.45455 15.6487 6.49503 15.7521 6.576 15.8331C6.65697 15.9141 6.76042 15.9545 6.88637 15.9545H7.75001C7.87595 15.9545 7.97941 15.9141 8.06038 15.8331C8.14134 15.7521 8.18183 15.6487 8.18183 15.5227ZM8.18183 12.0682V11.2045C8.18183 11.0786 8.14134 10.9751 8.06038 10.8942C7.97941 10.8132 7.87595 10.7727 7.75001 10.7727H6.88637C6.76042 10.7727 6.65697 10.8132 6.576 10.8942C6.49503 10.9751 6.45455 11.0786 6.45455 11.2045V12.0682C6.45455 12.1941 6.49503 12.2976 6.576 12.3785C6.65697 12.4595 6.76042 12.5 6.88637 12.5H7.75001C7.87595 12.5 7.97941 12.4595 8.06038 12.3785C8.14134 12.2976 8.18183 12.1941 8.18183 12.0682ZM8.18183 8.61363V7.74999C8.18183 7.62405 8.14134 7.52059 8.06038 7.43962C7.97941 7.35866 7.87595 7.31817 7.75001 7.31817H6.88637C6.76042 7.31817 6.65697 7.35866 6.576 7.43962C6.49503 7.52059 6.45455 7.62405 6.45455 7.74999V8.61363C6.45455 8.73958 6.49503 8.84303 6.576 8.924C6.65697 9.00497 6.76042 9.04545 6.88637 9.04545H7.75001C7.87595 9.04545 7.97941 9.00497 8.06038 8.924C8.14134 8.84303 8.18183 8.73958 8.18183 8.61363ZM8.18183 5.15908V4.29544C8.18183 4.16949 8.14134 4.06604 8.06038 3.98507C7.97941 3.90411 7.87595 3.86362 7.75001 3.86362H6.88637C6.76042 3.86362 6.65697 3.90411 6.576 3.98507C6.49503 4.06604 6.45455 4.16949 6.45455 4.29544V5.15908C6.45455 5.28503 6.49503 5.38848 6.576 5.46945C6.65697 5.55042 6.76042 5.5909 6.88637 5.5909H7.75001C7.87595 5.5909 7.97941 5.55042 8.06038 5.46945C8.14134 5.38848 8.18183 5.28503 8.18183 5.15908ZM15.0909 22.4318V19.8409C15.0909 19.715 15.0504 19.6115 14.9695 19.5306C14.8885 19.4496 14.7851 19.4091 14.6591 19.4091H10.3409C10.215 19.4091 10.1115 19.4496 10.0305 19.5306C9.94958 19.6115 9.9091 19.715 9.9091 19.8409V22.4318C9.9091 22.5578 9.94958 22.6612 10.0305 22.7422C10.1115 22.8232 10.215 22.8636 10.3409 22.8636H14.6591C14.7851 22.8636 14.8885 22.8232 14.9695 22.7422C15.0504 22.6612 15.0909 22.5578 15.0909 22.4318ZM15.0909 15.5227V14.6591C15.0909 14.5331 15.0504 14.4297 14.9695 14.3487C14.8885 14.2678 14.7851 14.2273 14.6591 14.2273H13.7955C13.6695 14.2273 13.5661 14.2678 13.4851 14.3487C13.4041 14.4297 13.3637 14.5331 13.3637 14.6591V15.5227C13.3637 15.6487 13.4041 15.7521 13.4851 15.8331C13.5661 15.9141 13.6695 15.9545 13.7955 15.9545H14.6591C14.7851 15.9545 14.8885 15.9141 14.9695 15.8331C15.0504 15.7521 15.0909 15.6487 15.0909 15.5227ZM15.0909 12.0682V11.2045C15.0909 11.0786 15.0504 10.9751 14.9695 10.8942C14.8885 10.8132 14.7851 10.7727 14.6591 10.7727H13.7955C13.6695 10.7727 13.5661 10.8132 13.4851 10.8942C13.4041 10.9751 13.3637 11.0786 13.3637 11.2045V12.0682C13.3637 12.1941 13.4041 12.2976 13.4851 12.3785C13.5661 12.4595 13.6695 12.5 13.7955 12.5H14.6591C14.7851 12.5 14.8885 12.4595 14.9695 12.3785C15.0504 12.2976 15.0909 12.1941 15.0909 12.0682ZM15.0909 8.61363V7.74999C15.0909 7.62405 15.0504 7.52059 14.9695 7.43962C14.8885 7.35866 14.7851 7.31817 14.6591 7.31817H13.7955C13.6695 7.31817 13.5661 7.35866 13.4851 7.43962C13.4041 7.52059 13.3637 7.62405 13.3637 7.74999V8.61363C13.3637 8.73958 13.4041 8.84303 13.4851 8.924C13.5661 9.00497 13.6695 9.04545 13.7955 9.04545H14.6591C14.7851 9.04545 14.8885 9.00497 14.9695 8.924C15.0504 8.84303 15.0909 8.73958 15.0909 8.61363ZM15.0909 5.15908V4.29544C15.0909 4.16949 15.0504 4.06604 14.9695 3.98507C14.8885 3.90411 14.7851 3.86362 14.6591 3.86362H13.7955C13.6695 3.86362 13.5661 3.90411 13.4851 3.98507C13.4041 4.06604 13.3637 4.16949 13.3637 4.29544V5.15908C13.3637 5.28503 13.4041 5.38848 13.4851 5.46945C13.5661 5.55042 13.6695 5.5909 13.7955 5.5909H14.6591C14.7851 5.5909 14.8885 5.55042 14.9695 5.46945C15.0504 5.38848 15.0909 5.28503 15.0909 5.15908ZM18.5455 18.9773V18.1136C18.5455 17.9877 18.505 17.8842 18.424 17.8033C18.3431 17.7223 18.2396 17.6818 18.1137 17.6818H17.25C17.1241 17.6818 17.0206 17.7223 16.9396 17.8033C16.8587 17.8842 16.8182 17.9877 16.8182 18.1136V18.9773C16.8182 19.1032 16.8587 19.2067 16.9396 19.2877C17.0206 19.3686 17.1241 19.4091 17.25 19.4091H18.1137C18.2396 19.4091 18.3431 19.3686 18.424 19.2877C18.505 19.2067 18.5455 19.1032 18.5455 18.9773ZM18.5455 15.5227V14.6591C18.5455 14.5331 18.505 14.4297 18.424 14.3487C18.3431 14.2678 18.2396 14.2273 18.1137 14.2273H17.25C17.1241 14.2273 17.0206 14.2678 16.9396 14.3487C16.8587 14.4297 16.8182 14.5331 16.8182 14.6591V15.5227C16.8182 15.6487 16.8587 15.7521 16.9396 15.8331C17.0206 15.9141 17.1241 15.9545 17.25 15.9545H18.1137C18.2396 15.9545 18.3431 15.9141 18.424 15.8331C18.505 15.7521 18.5455 15.6487 18.5455 15.5227ZM18.5455 12.0682V11.2045C18.5455 11.0786 18.505 10.9751 18.424 10.8942C18.3431 10.8132 18.2396 10.7727 18.1137 10.7727H17.25C17.1241 10.7727 17.0206 10.8132 16.9396 10.8942C16.8587 10.9751 16.8182 11.0786 16.8182 11.2045V12.0682C16.8182 12.1941 16.8587 12.2976 16.9396 12.3785C17.0206 12.4595 17.1241 12.5 17.25 12.5H18.1137C18.2396 12.5 18.3431 12.4595 18.424 12.3785C18.505 12.2976 18.5455 12.1941 18.5455 12.0682ZM18.5455 8.61363V7.74999C18.5455 7.62405 18.505 7.52059 18.424 7.43962C18.3431 7.35866 18.2396 7.31817 18.1137 7.31817H17.25C17.1241 7.31817 17.0206 7.35866 16.9396 7.43962C16.8587 7.52059 16.8182 7.62405 16.8182 7.74999V8.61363C16.8182 8.73958 16.8587 8.84303 16.9396 8.924C17.0206 9.00497 17.1241 9.04545 17.25 9.04545H18.1137C18.2396 9.04545 18.3431 9.00497 18.424 8.924C18.505 8.84303 18.5455 8.73958 18.5455 8.61363ZM18.5455 5.15908V4.29544C18.5455 4.16949 18.505 4.06604 18.424 3.98507C18.3431 3.90411 18.2396 3.86362 18.1137 3.86362H17.25C17.1241 3.86362 17.0206 3.90411 16.9396 3.98507C16.8587 4.06604 16.8182 4.16949 16.8182 4.29544V5.15908C16.8182 5.28503 16.8587 5.38848 16.9396 5.46945C17.0206 5.55042 17.1241 5.5909 17.25 5.5909H18.1137C18.2396 5.5909 18.3431 5.55042 18.424 5.46945C18.505 5.38848 18.5455 5.28503 18.5455 5.15908Z" fill="#F36F21"/>',
  Technology:'<g clip-path="url(#nav_Technology_40_502)"><path d="M14.1929 1L14.8934 3.10152C15.4772 3.21827 16.0609 3.45178 16.6447 3.80203L18.3959 2.51777L21.0812 4.73604L20.264 6.83756C20.6142 7.30457 20.9645 7.88832 21.198 8.47208L23.2995 8.70558L24 12.0914L22.0152 13.1421C21.8985 13.7259 21.7817 14.4264 21.665 15.0102L23.1827 16.5279L21.4315 19.5635L19.2132 19.0964C18.7462 19.4467 18.2792 19.9137 17.8122 20.264L17.9289 22.4822L14.6599 23.6497L13.2589 21.7817C12.6751 21.8985 12.0914 21.8985 11.5076 21.7817L10.2234 23.6497L6.95431 22.4822L7.07107 20.1472C6.48731 19.797 6.13706 19.4467 5.67005 18.9797L3.45178 19.4467L1.81726 16.5279L3.33503 14.7766C3.10152 14.3096 2.98477 13.6091 2.98477 13.0254L1 12.0914L1.58376 8.70558L3.80203 8.35533C4.03553 7.77157 4.38579 7.30457 4.73604 6.72081L3.91878 4.73604L6.48731 2.51777L8.35533 3.68528C8.93909 3.45178 9.52284 3.21827 10.1066 3.10152L10.8071 1H14.1929ZM12.4416 5.7868C16.0609 5.7868 18.9797 8.70558 18.9797 12.3249C18.9797 15.9442 16.0609 18.7462 12.4416 18.7462C8.93909 18.7462 6.0203 15.9442 6.0203 12.3249C6.0203 8.70558 8.93909 5.7868 12.4416 5.7868Z" fill-rule="evenodd" clip-rule="evenodd" fill="#F36F21"/></g><defs><clipPath id="nav_Technology_40_502"><rect width="23" height="23" fill="white" transform="translate(1 1)"/></clipPath></defs>',
  Sustainability:'<g clip-path="url(#nav_Sustainability_40_517)"><path d="M17.1847 11.5695C17.3473 11.4017 17.4286 11.2029 17.4286 10.9731C17.4286 10.7434 17.3473 10.5446 17.1847 10.3767C17.0221 10.2089 16.8296 10.1249 16.6071 10.1249C15.1354 10.1249 13.7749 10.3436 12.5257 10.781C11.2764 11.2183 10.1662 11.8103 9.19503 12.5569C8.22387 13.3035 7.21633 14.2732 6.17243 15.466C6.00986 15.6516 5.92857 15.8504 5.92857 16.0624C5.92857 16.2921 6.00986 16.4909 6.17243 16.6588C6.33501 16.8267 6.52753 16.9106 6.75 16.9106C6.95536 16.9106 7.14788 16.8267 7.32757 16.6588C7.55859 16.4468 7.87519 16.1331 8.27734 15.7178C8.6795 15.3026 8.96615 15.011 9.13728 14.8431C10.3095 13.7475 11.4582 12.97 12.5834 12.5105C13.7086 12.0511 15.0499 11.8213 16.6071 11.8213C16.8296 11.8213 17.0221 11.7374 17.1847 11.5695ZM24 8.34897C24 9.18835 23.9144 10.041 23.7433 10.9069C23.3497 12.886 22.5604 14.578 21.3753 15.9829C20.1902 17.3878 18.6607 18.5717 16.7868 19.5348C14.9557 20.489 13.0818 20.9662 11.1652 20.9662C9.89881 20.9662 8.67522 20.7585 7.49442 20.3432C7.36607 20.2991 6.98958 20.1135 6.36496 19.7866C5.74033 19.4597 5.32961 19.2962 5.13281 19.2962C4.99591 19.2962 4.82692 19.4376 4.62584 19.7203C4.42476 20.0031 4.23224 20.3123 4.04827 20.6481C3.8643 20.9838 3.63969 21.2931 3.37444 21.5758C3.10919 21.8585 2.85249 21.9999 2.60435 21.9999C2.23642 21.9999 1.96475 21.9226 1.78934 21.768C1.61393 21.6134 1.41927 21.3505 1.20536 20.9794C1.18824 20.9441 1.16257 20.8955 1.12835 20.8336C1.09412 20.7718 1.07059 20.7276 1.05776 20.7011C1.04492 20.6746 1.03209 20.6326 1.01925 20.5752C1.00642 20.5178 1 20.4581 1 20.3963C1 20.087 1.13263 19.7623 1.39788 19.4221C1.66313 19.082 1.95406 18.7926 2.27065 18.554C2.58724 18.3155 2.87816 18.0681 3.14342 17.8119C3.40867 17.5556 3.54129 17.3436 3.54129 17.1757C3.54129 17.1404 3.4814 16.9725 3.36161 16.6721C3.24182 16.3717 3.17336 16.1773 3.15625 16.0889C3.07924 15.6383 3.04074 15.1789 3.04074 14.7106C3.04074 13.6945 3.22684 12.7226 3.59905 11.7948C3.97126 10.8671 4.48038 10.052 5.12639 9.3496C5.77241 8.64717 6.50186 8.0331 7.31473 7.50738C8.1276 6.98166 9.00037 6.55977 9.93304 6.24169C10.4036 6.08265 11.024 5.96999 11.7941 5.90373C12.5642 5.83746 13.3321 5.7977 14.0979 5.78445C14.8637 5.77119 15.6274 5.74469 16.389 5.70493C17.1505 5.66517 17.85 5.55914 18.4874 5.38685C19.1249 5.21455 19.6105 4.96495 19.9442 4.63803C20.0298 4.54968 20.156 4.41935 20.3228 4.24706C20.4897 4.07476 20.6159 3.95107 20.7015 3.87596C20.787 3.80086 20.9025 3.71251 21.048 3.6109C21.1935 3.50929 21.3496 3.4386 21.5165 3.39884C21.6833 3.35908 21.8694 3.3392 22.0748 3.3392C22.4085 3.3392 22.7101 3.54242 22.9796 3.94886C23.2492 4.35529 23.4524 4.85008 23.5893 5.43323C23.7262 6.01638 23.8289 6.56418 23.8973 7.07665C23.9658 7.58911 24 8.01322 24 8.34897Z" fill="#F36F21"/></g><defs><clipPath id="nav_Sustainability_40_517"><rect width="23" height="19" fill="white" transform="translate(1 3)"/></clipPath></defs>',
  Recruitment:'<g clip-path="url(#nav_Recruitment_40_533)"><path d="M14.0333 12.4999C16.5628 12.4999 18.7977 10.3917 19.0166 7.80001C19.1254 6.49801 18.664 5.2838 17.7171 4.38173C16.7804 3.49069 15.4708 3 14.0333 3C12.5843 3 11.2738 3.48772 10.3437 4.37325C9.40313 5.26853 8.94457 6.48529 9.04999 7.79916C9.26513 10.3913 11.4995 12.4999 14.0333 12.4999ZM23.9703 20.2933C23.5658 18.3076 22.3032 16.6396 20.3195 15.4691C18.5576 14.4296 16.3252 13.8571 14.0333 13.8571C11.7415 13.8571 9.50903 14.4296 7.74714 15.4687C5.76339 16.6392 4.50079 18.3072 4.09637 20.2928C4.00389 20.7479 4.12943 21.1979 4.44089 21.5274C4.72699 21.8315 5.1529 22.0051 5.59999 21.9999H22.4666C22.914 22.0055 23.3403 21.832 23.6267 21.5278C23.9372 21.1983 24.0627 20.7483 23.9703 20.2933ZM5.21666 13.8571V12.1607H7.13332C7.55674 12.1607 7.89999 11.8568 7.89999 11.4821C7.89999 11.1073 7.55674 10.8035 7.13332 10.8035H5.21666V9.1071C5.21666 8.73234 4.87341 8.42853 4.44999 8.42853C4.02658 8.42853 3.68333 8.73234 3.68333 9.1071V10.8035H1.76667C1.34325 10.8035 1 11.1073 1 11.4821C1 11.8568 1.34325 12.1607 1.76667 12.1607H3.68333V13.8571C3.68333 14.2318 4.02658 14.5356 4.44999 14.5356C4.87341 14.5356 5.21666 14.2318 5.21666 13.8571Z" fill="#F36F21"/></g><defs><clipPath id="nav_Recruitment_40_533"><rect width="23" height="19" fill="white" transform="translate(1 3)"/></clipPath></defs>',
  Economy:'<g clip-path="url(#nav_Economy_40_551)"><path d="M23.8571 19.4999V20.9285H1V3.78564H2.42857V19.4999H23.8571ZM22.4286 5.57136V10.4263C22.4286 10.5825 22.356 10.6923 22.2109 10.7555C22.0658 10.8188 21.9338 10.7909 21.8147 10.6718L20.4643 9.32136L13.3996 16.3861C13.3251 16.4605 13.2396 16.4977 13.1429 16.4977C13.0461 16.4977 12.9606 16.4605 12.8862 16.3861L10.2857 13.7856L5.64286 18.4285L3.5 16.2856L10.029 9.75663C10.1034 9.68222 10.189 9.64502 10.2857 9.64502C10.3824 9.64502 10.468 9.68222 10.5424 9.75663L13.1429 12.3571L18.3214 7.1785L16.971 5.82806C16.8519 5.70901 16.824 5.57694 16.8873 5.43185C16.9505 5.28676 17.0603 5.21422 17.2165 5.21422H22.0714C22.1756 5.21422 22.2612 5.2477 22.3281 5.31466C22.3951 5.38163 22.4286 5.46719 22.4286 5.57136Z" fill="#F36F21"/></g><defs><clipPath id="nav_Economy_40_551"><rect width="23" height="18" fill="white" transform="translate(1 3.5)"/></clipPath></defs>'
};
mt.innerHTML=['News'].concat(TOPICS).map(function(t){return '<a class="chip-nav press" href="#t-'+(t==='News'?'All':t)+'"><svg width="25" height="25" viewBox="0 0 25 25" aria-hidden="true">'+NAV_ICONS[t]+'</svg>'+t+'</a>'}).join('');
ft.innerHTML=['News'].concat(TOPICS).map(function(t){return '<a href="#t-'+(t==='News'?'All':t)+'">'+t+'</a>'}).join('');
menuL.addEventListener('click',function(e){var a=e.target.closest('a'); if(a&&a.getAttribute('href')===location.hash) setMenu(false);});

/* ---------- desktop nav (800px+) ---------- */
var isDesk=function(){return window.matchMedia('(min-width:800px)').matches};
var dnT=document.getElementById('dnTopics'), tPop=document.getElementById('topicsPop'), mPop=document.getElementById('morePop');
document.getElementById('topicsPopChips').innerHTML=['News','Technology','Projects','Recruitment','Economy','Sustainability','Forty','People'].map(function(t){
  var href=t==='News'?'#t-All':t==='Forty'?'#forty':'#t-'+t, label=t==='Forty'?'40 Under 40':t, vb=t==='Forty'?'0 0 26 24':'0 0 25 25';
  return '<a class="chip-nav press" href="'+href+'"><svg width="25" height="'+(t==='Forty'?24:25)+'" viewBox="'+vb+'" aria-hidden="true">'+NAV_ICONS[t]+'</svg>'+label+'</a>'}).join('');
function placePop(pop,btn,alignRight){var r=btn.getBoundingClientRect();pop.style.top=(r.bottom+window.scrollY+(alignRight?6:3))+'px';
  if(alignRight){pop.style.left='auto';pop.style.right=Math.max(16,document.documentElement.clientWidth-r.right-24)+'px'}
  else{var w=pop.offsetWidth||313;pop.style.right='auto';pop.style.left=Math.max(16,Math.min(r.left-10,document.documentElement.clientWidth-w-16))+'px'}}
function setTopicsPop(on){tPop.hidden=!on;dnT.setAttribute('aria-expanded',on);if(on){setMorePop(false);placePop(tPop,dnT,false)}}
function setMorePop(on){mPop.hidden=!on;menuBtn.setAttribute('aria-expanded',on);menuBtn.classList.toggle('dopen',on);if(on){setTopicsPop(false);placePop(mPop,menuBtn,true)}}
dnT.addEventListener('click',function(e){e.stopPropagation();setBrands(false);setTopicsPop(tPop.hidden)});
/* desktop: publications popover closes on any click outside it (its layer lets clicks through) */
document.addEventListener('click',function(e){if(innerWidth>=800&&!brandsL.hidden&&!brandsL.querySelector('.brands').contains(e.target)&&!logoBtn.contains(e.target))setBrands(false)});
document.addEventListener('click',function(e){if(!tPop.hidden&&!tPop.contains(e.target))setTopicsPop(false);if(!mPop.hidden&&!mPop.contains(e.target)&&!menuBtn.contains(e.target))setMorePop(false)});
[tPop,mPop].forEach(function(p){p.addEventListener('click',function(e){if(e.target.closest('a')){setTopicsPop(false);setMorePop(false)}})});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){setTopicsPop(false);setMorePop(false)}});
window.addEventListener('resize',function(){if(!isDesk()){setTopicsPop(false);setMorePop(false)}else if(!menuL.hidden)setMenu(false)});
var mtb=document.querySelector('.mtopics'), mtp=document.getElementById('topicsPanel');
mtb.addEventListener('click',function(){var on=mtp.hidden;mtp.hidden=!on;mtb.setAttribute('aria-expanded',on)});
var ms=document.getElementById('menuSignup'); if(ms) ms.innerHTML=signup('menuEmail');
var q=document.getElementById('q'), results=document.getElementById('results'), menuMain=document.getElementById('menuMain');
function search(v){
  var s=v.trim().toLowerCase();
  results.hidden=!s; menuMain.hidden=!!s;
  if(!s){results.innerHTML='';return}
  var hits=ORDER.filter(function(id){var a=A[id];return (a.title+' '+a.dek+' '+a.tag+' '+a.author).toLowerCase().indexOf(s)>-1});
  results.innerHTML='<span class="eyebrow" style="padding:18px 0 4px">'+(hits.length?hits.length+(hits.length===1?' result':' results'):'No stories match “'+v.replace(/</g,'&lt;')+'”')+'</span><div class="river">'+hits.map(riverItem).join('')+'</div>';
}
q.addEventListener('input',function(){search(q.value)});

/* ---------- signup + share ---------- */
document.addEventListener('input',function(e){if(e.target.matches('[data-signup] input'))email=e.target.value});
document.addEventListener('submit',function(e){
  var f=e.target.closest('[data-signup]'); if(!f) return; e.preventDefault();
  var inp=f.querySelector('input');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value.trim())){inp.setCustomValidity('Enter a work email like name@company.com');inp.reportValidity();inp.addEventListener('input',function c(){inp.setCustomValidity('');inp.removeEventListener('input',c)});return}
  subscribed=true; try{localStorage.setItem('sn-sub','1')}catch(err){}
  if(document.querySelector('.gate')&&current){var y=window.scrollY;app.innerHTML=article(current);window.scrollTo(0,y);wirePlayer();return}
  document.querySelectorAll('.signup').forEach(function(w){w.innerHTML=signup('x')});
});
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-copy]'); if(!b) return;
  var url='https://www.readsitenews.com/'+(location.hash||'');
  var show=function(){var sp=b.classList.contains('copybtn')&&b.querySelector('span');if(sp){sp.textContent='Copied!';b.classList.add('ok');setTimeout(function(){sp.textContent='Copy link';b.classList.remove('ok')},1800);return}var c=document.getElementById('copied');if(c){c.hidden=false;setTimeout(function(){c.hidden=true},1800)}};
  try{navigator.clipboard.writeText(url).then(show,show)}catch(err){show()}
});

document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-more]');if(!b)return;document.querySelectorAll('[data-extra]').forEach(function(r){r.hidden=false});b.parentNode.remove()});

/* ---------- podcast player (Spotify-style, simulated playback) ---------- */
var PST={}, ptimer=null, pnow=null;
function mmss(n){n=Math.max(0,Math.round(n));var h=Math.floor(n/3600),m=Math.floor(n%3600/60),s=n%60;return (h?h+':':'')+(m<10&&h?'0':'')+(m<10&&!h?'0':'')+m+':'+(s<10?'0':'')+s}
function pstate(id){if(!PST[id])PST[id]={pos:id==='boom'?EP.boom.len-509:0,playing:false,saved:false};return PST[id]}
function wirePlayer(){
  document.querySelectorAll('.spp').forEach(function(el){
    var id=el.dataset.ep, e=EP[id], st=pstate(id);
    var pb=el.querySelector('[data-play]'), sv=el.querySelector('[data-save]'), bar=el.querySelector('[data-seek]');
    var paint=function(){el.querySelector('[data-prog]').style.width=(st.pos/e.len*100).toFixed(2)+'%';el.querySelector('[data-left]').textContent=mmss(e.len-st.pos);bar.setAttribute('aria-valuenow',Math.round(st.pos));bar.setAttribute('aria-valuetext',mmss(st.pos)+' of '+mmss(e.len))};
    var icon=function(){pb.innerHTML=st.playing?'<svg width="12" height="13" viewBox="0 0 12 13" aria-hidden="true"><path d="M1.5 0h3v13h-3zM7.5 0h3v13h-3z" fill="#000"/></svg>':'<svg width="13" height="14" viewBox="0 0 13 14" aria-hidden="true"><path d="M2 .8v12.4L12.5 7z" fill="#000"/></svg>';pb.setAttribute('aria-label',st.playing?'Pause episode':'Play episode');el.classList.toggle('on',st.playing)};
    var sicon=function(){sv.setAttribute('aria-pressed',st.saved);sv.innerHTML=(st.saved?'<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#1ed760"/><path d="m5.8 10.2 2.8 2.8 5.6-5.8" fill="none" stroke="#000" stroke-width="1.8"/></svg>':'<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M10 6v8M6 10h8" stroke="#fff" stroke-width="1.5"/></svg>')+'<span>'+(st.saved?'Saved on Spotify':'Save on Spotify')+'</span>'};
    el._paint=paint; el._icon=icon; paint(); icon(); sicon();
    pb.onclick=function(){
      var go=!st.playing; Object.keys(PST).forEach(function(k){PST[k].playing=false}); clearInterval(ptimer);
      document.querySelectorAll('.spp').forEach(function(o){o._icon&&o._icon()});
      if(go){st.playing=true;pnow=id;ptimer=setInterval(function(){st.pos=Math.min(e.len,st.pos+1);document.querySelectorAll('.spp[data-ep="'+id+'"]').forEach(function(o){o._paint()});if(st.pos>=e.len){st.playing=false;clearInterval(ptimer);icon()}},1000)}
      icon();
    };
    el.querySelectorAll('[data-skip]').forEach(function(b){b.onclick=function(){st.pos=Math.min(e.len,Math.max(0,st.pos+ +b.dataset.skip));paint()}});
    bar.onclick=function(ev){var r=bar.getBoundingClientRect();st.pos=Math.round(Math.min(1,Math.max(0,(ev.clientX-r.left)/r.width))*e.len);paint()};
    bar.onkeydown=function(ev){if(ev.key==='ArrowRight'||ev.key==='ArrowLeft'){ev.preventDefault();st.pos=Math.min(e.len,Math.max(0,st.pos+(ev.key==='ArrowRight'?5:-5)));paint()}};
    sv.onclick=function(){st.saved=!st.saved;sicon()};
  });
}

route();
})();
