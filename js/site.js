(function(){
var IMG = {
  ant:'assets/img/ant.jpg', carney:'assets/img/carney.jpg', nickel:'assets/img/nickel.jpg',
  fortis:'assets/img/fortis.jpg', port:'assets/img/port.jpg', forty:'assets/img/forty.jpg', avatar:'assets/img/avatar.png', truck:'assets/img/ant-truck.jpg', pmsept:'assets/img/pm-sept.jpg', emav:'assets/img/em-avatar.png', wsp:'assets/img/wsp.png', em40:'assets/img/em-40.jpg', emcity:'assets/img/em-city.jpg', merger:'assets/img/merger.jpg', careers:'assets/img/careers.jpg', pomerleau:'assets/img/pomerleau.jpg', bell:'assets/img/bell.jpg', ellisdon:'assets/img/ellisdon.jpg', pacific:'assets/img/pacific.jpg', lng:'assets/img/lng.jpg', lang:'assets/img/ant-langston.jpg', pod:'assets/img/podcast-art.png'
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
  A2('Mike Langston','We aren’t tied to a single manufacturer, so we start with what the job actually needs and source the right machine from there. Rentals, sales, service and parts all live under one roof, which lets us support a contractor’s whole fleet instead of one piece of it.'),
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
var FOCUS={bcs:'68% 50%',nickel:'76% 50%',ant:'45% 50%',fortis:'58% 50%',port:'50% 50%',merger:'50% 50%',careers:'55% 50%',pomerleau:'60% 50%',bell:'40% 50%',ellisdon:'50% 50%',pacific:'38% 50%',lng:'50% 50%',people:'50% 50%'};
var ORDER=['merger','careers','pomerleau','bell','ant','people','ellisdon','pacific','lng','port','bcs','mactaquac','nickel','fortis','procore','steiman'];
var TOPICS=['People','Projects','Technology','Sustainability','Recruitment','Economy'];
var DESC={People:'Hires, promotions, profiles and the faces shaping the industry.',Projects:'The builds, bids and approvals moving Canadian infrastructure.',Technology:'Tools, software and machines changing how the job gets done.',Sustainability:'Lower-carbon building, energy transition and green infrastructure.',Recruitment:'Careers, pay, training and the skilled-trades talent race.',Economy:'Deals, policy and the money behind construction.',All:'Every story, newest first.'};
var TREND=['mactaquac','procore','people','steiman'];

var subscribed=false, email='';
try{subscribed=localStorage.getItem('sn-sub')==='1'}catch(e){}

var PLANE='<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 2 9.6l7.4 3.1L20 4l-8.7 10.6 3.1 7.4z" fill="#fff"/></svg>';
var TREND_ICON='<svg width="28" height="24" viewBox="0 0 28 24" aria-hidden="true"><path d="M26.5322 10.8633L23.6641 8.85156L15.6172 20.3193L10.3193 14.7441L3.2666 23.1943L0 20.623L0.308594 20.2363L9.87109 8.68066L15.1689 14.2559L20.5127 6.63965L17.6426 4.62793L27.6396 0L26.5322 10.8633Z" fill="#FF6A29"/></svg>';
function by(a){return a.author+(a.date?' · '+a.date:'')}
function signup(id,dark){
  if(subscribed) return '<div class="done"><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" style="flex:none"><circle cx="11" cy="11" r="11" fill="#ff6a29"/><path d="m6.5 11.3 3 3 6-6.3" fill="none" stroke="#fff" stroke-width="2"/></svg><div><strong>You’re in.</strong><br>Your first issue lands Monday morning.</div></div>';
  return '<form data-signup novalidate><label class="sr" for="'+id+'">Work email</label><input id="'+id+'" type="email" placeholder="Work email" autocomplete="email" value="'+email.replace(/"/g,'&quot;')+'" required><button class="btn-or press" type="submit">Join free '+PLANE+'</button></form>';
}
function riverItem(id){var a=A[id];return '<a class="press" href="#a-'+id+'"><div class="body"><span class="k">'+a.tag+'</span><span class="h">'+a.title+'</span><span class="by">'+(a.date||'').replace(/,\s*\d{4}$/,'')+'</span></div>'+(a.img?'<img class="thumb" src="'+IMG[a.img]+'" alt="">':'')+'</a>'}
function card(id,first,r10,tagStyle){var a=A[id];return '<a class="card'+(r10?' r10':'')+'" href="#a-'+id+'" style="'+(first?'padding-top:20px':'')+'"><div class="txt px">'+(first?'':'<div class="rule"></div>')+'<div class="stack"><span class="t20">'+a.title+'</span><span class="d14">'+(a.homeDek||a.dek)+'</span><span class="tag"'+(tagStyle?' style="'+tagStyle+'"':'')+'>'+a.tag+'</span></div></div><div class="pic"><img src="'+IMG[a.img]+'" alt="'+a.alt+'" loading="lazy" style="object-position:'+(FOCUS[id]||'50% 50%')+'"></div></a>'}

function trending(){return '<section class="sec" style="gap:23px"><div class="rule"></div><div><div class="sechead">'+TREND_ICON+'<h2>TRENDING STORIES</h2></div><ol class="trend">'+TREND.map(function(id,i){return '<li><a class="press" href="#a-'+id+'"><span class="n">'+(i+1)+'.</span><span>'+A[id].title+'</span></a></li>'}).join('')+'</ol></div></section>';}
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
function home(){
  return ''+
  '<div style="display:flex;flex-direction:column;gap:14px">'+
   '<div>'+card('bcs',true)+'</div>'+
   '<div class="nl-wrap"><section class="hero" id="signup"><h1>NEWS<br>TRENDS<br><span class="hi">INSIGHTS</span></h1><p class="for">FOR CONSTRUCTION</p><p class="pitch">Get smarter in just 5 minutes. Sign up for the free weekly newsletter that will keep you up to speed.</p><div class="signup">'+signup('heroEmail')+'</div></section>'+
   '<a class="nl-card press" href="#newsletter"><div class="top"><span class="nl-pill">Latest Newsletter</span></div><div class="nl-title"><b>🛢️ Great pipes</b><span class="date"><svg width="13" height="13" viewBox="0 0 12 12" aria-hidden="true"><rect x=".6" y="1.6" width="10.8" height="9.8" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M.6 4.4h10.8M3.4 0v2.8M8.6 0v2.8" stroke="currentColor" stroke-width="1.2"/></svg>Oct 6</span></div><p class="nl-dek">'+A.newsletter.dek+'</p></a></div>'+
   '<div>'+card('nickel',true)+card('ant')+'</div>'+
  '</div>'+
  trending()+
  card('fortis',false,true)+
  '<section class="sec" id="podcast" style="gap:8px;padding-bottom:44px"><div class="rule"></div><div style="display:flex;flex-direction:column;gap:16px;padding-top:14px"><div class="sechead" style="gap:6px"><svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true"><path d="M0 5h4l6-5v16l-6-5H0z" fill="#ff6a29"/><path d="M13.5 4.5a5 5 0 0 1 0 7" fill="none" stroke="#ff6a29" stroke-width="1.8" stroke-linecap="round"/></svg><h2>PODCAST</h2></div>'+
   '<img src="assets/img/player.png" width="370" height="132" alt="Digging In podcast: In the pipeline, Oct 5, on Spotify" style="width:100%;height:auto;display:block"></div></section>'+
  '<section id="forty" style="padding-bottom:34px;display:flex;flex-direction:column;gap:14px"><div class="px" style="display:flex;flex-direction:column;gap:12px"><div class="rule"></div><div class="stack"><span class="tag or">40 Under 40</span><h2 class="t20" style="margin:0">2026 Finalists Announced</h2><span class="d14">Stars shaping the future of Canadian Construction</span></div></div><div class="px"><img src="'+IMG.forty+'" alt="Four of the 2026 Top 40 Under 40 finalists" style="width:100%;aspect-ratio:370/247;object-fit:cover;border-radius:10px" loading="lazy"></div></section>'+
  '<section class="px river" style="padding-top:22px;padding-bottom:32px"><div class="rule"></div><div class="sechead" style="justify-content:space-between;padding:15px 0 0"><h2>LATEST STORIES</h2><a class="allbtn press" href="#t-All" aria-label="All stories">All <svg width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><path d="M0.5 5.5h10.5M6.8 1.2l4.3 4.3-4.3 4.3" fill="none" stroke="#080808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>'+['merger','careers','pomerleau','bell','ellisdon','pacific','lng','port'].map(riverItem).join('')+'</section>'+
  '<section class="event" id="summit"><svg width="230" height="197" viewBox="0 0 28 24" aria-hidden="true"><path d="M26.5322 10.8633L23.6641 8.85156L15.6172 20.3193L10.3193 14.7441L3.2666 23.1943L0 20.623L0.308594 20.2363L9.87109 8.68066L15.1689 14.2559L20.5127 6.63965L17.6426 4.62793L27.6396 0L26.5322 10.8633Z" fill="#fff"/></svg><span style="font-size:12px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:rgba(255,255,255,.88)">Upcoming event · Toronto</span><h2>SITESUMMIT<br>YEAR 2</h2><p>Join 600+ of construction’s heaviest hitters on the Toronto waterfront.</p><a class="go press" href="https://www.readsitenews.com/" target="_blank" rel="noopener">Get tickets</a></section>';
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
    case 'h3': return '<h3 class="h3">'+b.t+'</h3>';
    case 'tl': return '<ul class="tl">'+b.items.map(function(x){return '<li><b>'+x[0]+':</b> '+x[1]+'</li>'}).join('')+'</ul>';
    case 'q': return '<p class="q"><b>'+(b.first?'SiteNews:':'SN:')+'</b> '+b.t+'</p>';
    case 'ans': return '<p class="ans"><b>'+b.n+':</b> '+b.t+'</p>';
    case 'fig': return '<figure class="inl">'+(IMG[b.src]?'<img src="'+IMG[b.src]+'" alt="'+b.alt+'" loading="lazy">':'<div class="ph">Inline photo</div>')+(b.cap?'<figcaption class="ic">'+b.cap+'</figcaption>':'')+'</figure>';
    case 'job': return '<div class="job"><h3><span class="jn">'+b.n+'.</span> '+b.title+' <span class="sal">– '+b.sal+'</span></h3><p class="quip">'+b.quip+'</p><p>'+b.t+'</p></div>';
    case 'pm': return '<p class="pm"><a class="pmn" href="'+li(b.name)+'" target="_blank" rel="noopener">'+b.name+'</a> '+b.verb+' <a href="'+gs(b.org)+'" target="_blank" rel="noopener">'+b.org+'</a>'+b.tail+'</p>';
    case 'pmg': return '<p class="pm"><a href="'+gs(b.org)+'" target="_blank" rel="noopener">'+b.org+'</a>'+b.t+'</p>';
    case 'nl': return '<section class="nlbox" aria-label="Newsletter signup"><img src="'+IMG.nickel+'" alt=""><div><h2>News, trends, &amp; insights in Canadian construction</h2><p>Get smarter in just 5 minutes. Sign up for the free weekly newsletter that will keep you up to speed.</p></div><div class="signup">'+signup('inlineEmail')+'</div></section><div class="hair"></div>';
  }
  return '';
}
function shareRow(top){return '<div class="share'+(top?'':' share-end')+'"><button class="circ press" type="button" aria-label="Comments"><svg width="16" height="15" viewBox="0 0 16 15" aria-hidden="true"><path d="M8 0C3.6 0 0 2.8 0 6.3c0 2 1.2 3.8 3 5L2.3 15l4-2.5c.6.1 1.1.1 1.7.1 4.4 0 8-2.8 8-6.3S12.4 0 8 0z" fill="#1d1d1f"/></svg></button><button class="circ press" type="button" data-copy aria-label="Copy link to share by email"><svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M0 1.2C0 .5.5 0 1.2 0h13.6c.7 0 1.2.5 1.2 1.2v.3L8 6.6 0 1.5z" fill="#1d1d1f"/><path d="M0 3.2v7.6c0 .7.5 1.2 1.2 1.2h13.6c.7 0 1.2-.5 1.2-1.2V3.2L8 8.4z" fill="#1d1d1f"/></svg></button><div class="pill"><a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="Share on LinkedIn" style="width:32px;height:32px;display:grid;place-items:center"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect width="16" height="16" rx="2" fill="#6e6e6e"/><path d="M3.4 6.2h2v6.4h-2zM4.4 3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM6.7 6.2h1.9v.9c.3-.5.9-1 1.9-1 2 0 2.4 1.3 2.4 3v3.5h-2V9.5c0-.7 0-1.6-1-1.6s-1.2.8-1.2 1.6v3.1h-2z" fill="#fbf7f6"/></svg></a><a href="https://x.com/" target="_blank" rel="noopener" aria-label="Share on X" style="width:32px;height:32px;display:grid;place-items:center;opacity:.5"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect width="16" height="16" rx="2" fill="#6e6e6e"/><path d="M4 4h2.3l2 2.8L10.6 4h1.2L8.9 7.5 12.2 12H9.9L7.7 9 5.2 12H4l3.1-3.7z" fill="#fbf7f6"/></svg></a><a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Share on Facebook" style="width:32px;height:32px;display:grid;place-items:center"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="9" fill="#6e6e6e"/><path d="M10 18v-6.5h2.1l.3-2.5H10V7.5c0-.7.2-1.2 1.2-1.2h1.3V4.1c-.2 0-1-.1-1.9-.1-1.9 0-3.1 1.1-3.1 3.2V9H5.4v2.5h2.1V18z" fill="#fbf7f6"/></svg></a></div>'+(top?'<span id="copied" ':'<span ')+'class="d14" style="font-size:12px" hidden>Link copied</span></div>';}
function body(a){
  if(a.b.length&&a.b[0].k==='kt'&&!a.gate){
    var rest=a.b.slice(1).filter(function(x){return x.k!=='ws'&&x.k!=='nl'});
    return block(a.b[0])+block({k:'nl'})+'<div class="ws-sec">'+block({k:'ws'})+'<div class="ws-body">'+rest.map(function(x){return x.k==='lead'?'<p>'+x.pre+(x.link?'<a href="#a-'+x.to+'">'+x.link+'</a>':'')+x.post+'</p>':block(x)}).join('')+'</div></div>';
  }
  if(a.gate&&!subscribed){return a.b.slice(0,a.gate).map(block).join('')+'<div class="gate"><div class="gatebox"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2.5" fill="#ff6a29"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10" fill="none" stroke="#ff6a29" stroke-width="2"/></svg><h2>This exclusive content? Only for subscribers.</h2><p>Join free to unlock the full list, plus the 5-minute weekly newsletter on Canadian construction.</p><div class="signup">'+signup('gateEmail')+'</div></div></div>';}
  return a.b.map(block).join('');
}
function endmods(){ return shareRow(false); }
function promo40(){
  return '<div class="px" style="padding-bottom:36px"><a class="promo press" href="#forty"><img src="'+IMG.forty+'" alt="2026 Top 40 Under 40 finalists"><div class="stack" style="gap:6px"><span class="tag or">40 Under 40</span><h4>The 2026 finalists are here!</h4><p class="d14" style="margin:0">Meet the rising stars shaping the future of Canadian construction.</p><span class="see">See the finalists →</span></div></a></div>';
}
var current='';
function article(id){ current=id;
  var a=A[id]; if(!a) return home();
  var nid=id==='fortis'?'nickel':'fortis', n=A[nid];
  var topicLink=a.topic==='All'||a.topic==='Newsletter'?'All':a.topic;
  return '<article class="art"><div style="display:flex;flex-direction:column;gap:20px"><div class="stack"><div class="kicker">'+(a.sp?'<span class="partner">PARTNER CONTENT</span>':'<a href="#t-'+topicLink+'">'+a.tag+'</a>')+'</div><div style="display:flex;flex-direction:column;gap:8px"><h1>'+a.title+'</h1><p class="dek">'+a.dek+'</p></div></div>'+
   '<div class="byline">'+(a.av?'<img src="'+IMG.avatar+'" alt="">':a.cs?'<svg class="cs" width="36" height="36" viewBox="0 0 277 268" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="277" height="268" fill="#292929"/><path d="M204.822 143.231L180.733 126.337L113.154 222.646L68.6621 175.825L0 267.57V213.117L64.8945 124.898L109.387 171.719L154.268 107.761L130.162 90.8662L214.118 52L204.822 143.231Z" fill="#8C8C8C"/></svg>':'<svg class="cs" width="36" height="36" viewBox="0 0 277 268" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="277" height="268" fill="#FF6A29"/><path d="M204.822 143.231L180.733 126.337L113.154 222.646L68.6621 175.825L0 267.57V213.117L64.8945 124.898L109.387 171.719L154.268 107.761L130.162 90.8662L214.118 52L204.822 143.231Z" fill="#fff"/></svg>')+'<span>'+a.author+(a.date?'<span class="dt">&nbsp; · &nbsp;'+a.date+'</span>':'')+'</span></div></div>'+
   shareRow(true)+
   '<div class="hair lead-rule"></div>'+
   (a.img?'<figure'+(a.tall?' class="tall"':'')+'><img src="'+IMG[a.img]+'" alt="'+a.alt+'"><figcaption><b>PHOTO:</b> '+a.credit+'</figcaption></figure>':'<div style="height:8px"></div>')+
   '<div class="prose">'+body(a)+'</div>'+endmods()+'</article>'+
   trending()+promo40();
}
function topic(t){
  if(t!=='All'&&TOPICS.indexOf(t)<0) t='All';
  var ids=t==='All'?ORDER:ORDER.filter(function(id){return A[id].topic===t});
  var lead=null; for(var i=0;i<ids.length;i++){if(A[ids[i]].img){lead=ids[i];break}}
  var rest=ids.filter(function(id){return id!==lead});
  var la=lead&&A[lead];
  return '<div class="topic"><div class="stack" style="gap:6px;padding-bottom:18px"><span class="tag or" style="letter-spacing:.6px">'+(t==='All'?'All stories':'Topic')+'</span><h1>'+(t==='All'?'Latest':t)+'</h1><p class="d14" style="margin:4px 0 0">'+DESC[t]+'</p></div>'+
   '<nav class="chips" aria-label="Topics">'+['All'].concat(TOPICS).map(function(c){return '<a class="chip press" href="#t-'+c+'"'+(c===t?' aria-current="page"':'')+'>'+(c==='All'?'All stories':c)+'</a>'}).join('')+'</nav>'+
   '<div class="rule"></div>'+
   (la?'<a class="lead" href="#a-'+lead+'"><img src="'+IMG[la.img]+'" alt="'+la.alt+'" style="object-position:'+(FOCUS[lead]||'50% 50%')+'"><div class="stack"><span class="river"><span class="k">'+la.tag+'</span></span><span class="t20">'+la.title+'</span><span class="d14">'+la.dek+'</span><span class="river"><span class="by">'+by(la)+'</span></span></div></a>':'')+
   '<div class="river">'+rest.map(riverItem).join('')+'</div>'+
   (ids.length?'':'<p class="d14" style="padding:24px 0">No stories in this section yet.</p>')+'</div>';
}

/* ---------- routing ---------- */
var app=document.getElementById('app');
function route(){
  var h=(location.hash||'').slice(1);
  closeAll();
  var scrollTo=null, t='SiteNews';
  if(h.indexOf('a-')===0&&A[h.slice(2)]){app.innerHTML=article(h.slice(2)); t=A[h.slice(2)].title+' | SiteNews';}
  else if(h==='newsletter'){app.innerHTML=nlIssue(); t='Great pipes | SiteNews newsletter';}
  else if(h.indexOf('t-')===0){var tn=h.slice(2); app.innerHTML=topic(tn); t=(tn==='All'?'Latest':tn)+' | SiteNews';}
  else {app.innerHTML=home(); if(h==='podcast'||h==='summit'||h==='signup'||h==='forty') scrollTo=h;}
  document.title=t;
  setLogoMode(!(h.indexOf('a-')===0&&A[h.slice(2)])&&h.indexOf('t-')!==0&&h!=='newsletter');
  if(scrollTo){var el=document.getElementById(scrollTo); if(el){var y=el.getBoundingClientRect().top+window.scrollY-12; window.scrollTo(0,Math.max(0,y)); if(scrollTo==='signup'){var i=document.getElementById('heroEmail'); i&&i.focus({preventScroll:true});}}}
  else window.scrollTo(0,0);
  wirePlayer();
}
window.addEventListener('hashchange',route);

/* ---------- overlays ---------- */
var logoBtn=document.getElementById('logoBtn'), menuBtn=document.getElementById('menuBtn');
var brandsL=document.getElementById('brandsLayer'), menuL=document.getElementById('menuLayer');
function setBrands(on){if(on&&window.scrollY)window.scrollTo(0,0);brandsL.hidden=!on;if(onHome)logoBtn.setAttribute('aria-expanded',on);if(on)setMenu(false);}
function setMenu(on){if(on&&window.scrollY)window.scrollTo(0,0);menuL.hidden=!on;menuBtn.setAttribute('aria-expanded',on);menuBtn.setAttribute('aria-label',on?'Close menu':'Menu');document.body.style.overflow=on?'hidden':'';if(on){setBrands(false);}else{q.value='';search('');}}
function closeAll(){setBrands(false);setMenu(false);}
var onHome=true;
function setLogoMode(home){onHome=home;document.body.classList.toggle('inner',!home);
  if(home){logoBtn.setAttribute('aria-expanded','false');logoBtn.setAttribute('aria-controls','brandsLayer');logoBtn.setAttribute('aria-label','SiteNews — switch publication');}
  else{logoBtn.removeAttribute('aria-expanded');logoBtn.removeAttribute('aria-controls');logoBtn.setAttribute('aria-label','SiteNews home');}}
logoBtn.addEventListener('click',function(){if(onHome){setBrands(brandsL.hidden)}else{location.hash='home'}});
menuBtn.addEventListener('click',function(){setMenu(menuL.hidden)});
brandsL.querySelector('[data-close]').addEventListener('click',function(){setBrands(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll()});
brandsL.addEventListener('click',function(e){var a=e.target.closest('a[href="#home"]'); if(a&&location.hash===''||a&&location.hash==='#home'){setBrands(false)}});

var mt=document.getElementById('menuTopics'), ft=document.getElementById('footTopics');
mt.innerHTML=TOPICS.map(function(t){return '<a class="trow press" href="#t-'+t+'">'+t+'<svg width="9" height="14" viewBox="0 0 9 14" aria-hidden="true"><path d="m1.5 1.5 5.5 5.5-5.5 5.5" fill="none" stroke="#c4c0be" stroke-width="2"/></svg></a>'}).join('');
ft.insertAdjacentHTML('beforeend',TOPICS.map(function(t){return '<a href="#t-'+t+'">'+t+'</a>'}).join(''));
menuL.addEventListener('click',function(e){var a=e.target.closest('a'); if(a&&a.getAttribute('href')===location.hash) setMenu(false);});

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

/* ---------- podcast player ---------- */
var total=1470, pos=880, playing=false, timer=null, saved=false;
function mmss(n){n=Math.max(0,n);var m=Math.floor(n/60),s=n%60;return (m<10?'0':'')+m+':'+(s<10?'0':'')+s}
function paint(){var p=document.getElementById('prog'),t=document.getElementById('tleft');if(p)p.style.width=(pos/total*100).toFixed(1)+'%';if(t)t.textContent=mmss(total-pos)}
function wirePlayer(){
  var pb=document.getElementById('playBtn'); if(!pb) return; paint();
  var icon=function(){pb.innerHTML=playing?'<svg width="11" height="12" viewBox="0 0 11 12" aria-hidden="true"><path d="M1 0h3v12H1zM7 0h3v12H7z" fill="#000"/></svg>':'<svg width="12" height="13" viewBox="0 0 12 13" aria-hidden="true"><path d="M1 .5v12l10.5-6z" fill="#000"/></svg>';pb.setAttribute('aria-label',playing?'Pause episode':'Play episode')};
  icon();
  pb.onclick=function(){playing=!playing;clearInterval(timer);if(playing)timer=setInterval(function(){pos=Math.min(total,pos+1);paint();if(pos>=total){playing=false;clearInterval(timer);icon()}},1000);icon()};
  document.querySelectorAll('[data-skip]').forEach(function(s){s.onclick=function(){pos=Math.min(total,Math.max(0,pos+ +s.dataset.skip));paint()}});
  var sb=document.getElementById('saveBtn');
  var sicon=function(){sb.setAttribute('aria-pressed',saved);sb.innerHTML=(saved?'<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#1ed760"/><path d="m5.8 10.2 2.8 2.8 5.6-5.8" fill="none" stroke="#000" stroke-width="1.8"/></svg>':'<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M10 6v8M6 10h8" stroke="#fff" stroke-width="1.5"/></svg>')+'<span>'+(saved?'Saved':'Save on Spotify')+'</span>'};
  sicon(); sb.onclick=function(){saved=!saved;sicon()};
}

route();
})();
