import type { ServiceLink, ServicePage } from './services';

/** All services, in the order they appear in lists (English). */
export const serviceLinksEn: ServiceLink[] = [
  { slug: 'proiectare-drumuri', title: 'Road and platform design', short: 'Local, county and national roads' },
  { slug: 'proiectare-poduri-pasaje', title: 'Bridges, overpasses and footbridges', short: 'Road and pedestrian crossing structures' },
  { slug: 'lucrari-consolidare', title: 'Retaining works and stabilisation', short: 'Retaining walls, hillsides, slopes' },
  { slug: 'poduri-cale-ferata', title: 'Railway bridges and overpasses', short: 'Structures over and under the railway' },
  { slug: 'monumente-istorice', title: 'Works on historic monuments', short: 'Listed bridges and structures' },
  { slug: 'expertize-tehnice', title: 'Structural assessments', short: 'Evaluation of existing structures' },
  { slug: 'amenajari-hidrotehnice', title: 'Hydraulic engineering works', short: 'Canal culverting, riverbanks, port platforms' },
];

/** All service pages, generated from the same structure (English). */
export const servicePagesEn: ServicePage[] = [
  {
    slug: "proiectare-drumuri",
    title: "Road and platform design",
    short: "Roads, platforms, car parks, accesses and site grading",
    h1: "Road<br />and Platform Design",
    lead: "Complete design packages for local, county and national roads, from feasibility study to execution details.",
    description: "Design of local, county and national roads in Romania: pavement structures, junctions, roundabouts, car parks, platforms and site grading.",
    keywords: ["road design Romania", "local road upgrade design", "county road design", "roundabout design", "site grading design", "car park design", "highway engineering consultant Romania"],
    image: "/img/projects/proiectare-drumuri.webp",
    imageAlt: "Road and platform design",
    intro: [
      "ME Design provides integrated design services for every category of public road in Romania, in line with the technical standards in force (AND road standards, SR, STAS). We cover the whole design process, from preliminary studies and site investigations to the documentation needed for the building permit and the execution design.",
      "Each road project is treated on its own terms: ground conditions, expected traffic volume, the client's requirements and local and national regulations. We work with municipalities, county councils, private clients and contractors across the country.",
      "We deliver complete documentation at every stage: feasibility study (SF), intervention approval documentation (DALI), detailed technical design (PT) and execution details (DDE), plus technical assistance during construction.",
    ],
    lucrariTitlu: "Types of work",
    lucrari: [
      { title: "Local and county roads", desc: "Upgrading, rehabilitation and extension of local roads funded from EU funds or the local budget." },
      { title: "National roads", desc: "Design and rehabilitation of national roads in line with DRDP and CNAIR (Romanian national roads company) requirements." },
      { title: "Junctions and roundabouts", desc: "At-grade junctions, roundabouts and grade-separated crossings to keep traffic moving." },
      { title: "Car parks and platforms", desc: "Public and private car parks, industrial and logistics platforms, access roads and property accesses." },
      { title: "Site grading (vertical alignment)", desc: "Levels, falls and surface water drainage for platforms, car parks, industrial sites and property accesses, tied into the road and the existing drainage." },
      { title: "Cycle lanes", desc: "Urban and inter-urban cycle lanes with their own signage and marking systems." },
      { title: "Minor structures", desc: "Small culverts, gutters, storm drainage and traffic signals, integrated into the road design." },
    ],
    experienta: [
      {
        titlu: "Traffic ring closure, Craiova",
        text: "A new 2.18 km four-lane street with three roundabouts, cycle lanes and pedestrian areas, together with culverting of the Craiovița canal over 1,800 m.",
        href: "/en/portfolio/craiova-dolj",
        link: "View project",
      },
      {
        titlu: "Local roads in Cozieni, Buzău County",
        text: "Thirteen local and municipal roads totalling 10.35 km, treated as a network in hilly terrain where drainage decides how long the investment lasts.",
        href: "/en/portfolio/cozieni-buzau",
        link: "View project",
      },
      {
        titlu: "Production and storage hall, Brașov",
        text: "Site grading for a 6,088 m² industrial plot: a 46 x 40 m paved platform for traffic and parking, and a 50 m access road to the street with a pipe culvert and lined ditches.",
        href: "/en/portfolio/hala-timisul-sec-brasov",
        link: "View project",
      },
    ],
    faq: [
      {
        q: "What documents are needed for a road project?",
        a: "You need the land register extract, an up-to-date topographic survey, a geotechnical study and, where relevant, a traffic study. ME Design can coordinate obtaining these through licensed partners.",
      },
      {
        q: "How long does a detailed road design take?",
        a: "Depending on complexity, a full detailed technical design (PT) for a 5-10 km county road takes between 3 and 6 months. The feasibility study can be completed in 4-8 weeks.",
      },
      {
        q: "Do you design EU-funded roads?",
        a: "Yes. We have prepared documentation for projects funded under PNRR (Romania's Recovery and Resilience Plan), POR, POIM and other EU programmes, including the specific documents the funding bodies require.",
      },
      {
        q: "What is site grading (sistematizare verticală) and when do I need it?",
        a: "Site grading sets the finished levels of platforms, car parks, paths and accesses relative to the street, the existing ground and the building's ±0.00 level, so that rainwater is collected and kept away from the building and the neighbours. Under Romanian law (Annex 2 to Law 169/2026), the site plan in the building permit design must show natural and finished ground levels as absolute elevations.",
      },
      {
        q: "Do I need the road administrator's approval for a new access to my property?",
        a: "Yes, if the access is within the zone of a public road. Under Article 46(1) of Government Ordinance 43/1997, accesses require a building permit plus the prior agreement and the access permit issued by the road administrator: the municipality, the county council or CNAIR, depending on the road category.",
      },
      {
        q: "Can you design only the roads part of an architectural project?",
        a: "Yes. For architecture firms and private investors we prepare the roads discipline separately: the access and connection to the public road, platforms, car parks, site grading and surface water drainage, on the existing site plan, at building permit and detailed design stages.",
      },
    ],
  },
  {
    slug: "proiectare-poduri-pasaje",
    title: "Bridges, overpasses and footbridges",
    short: "Road and pedestrian crossing structures",
    h1: "Design of Bridges,<br />Overpasses and Footbridges",
    lead: "Crossing structures designed for any kind of obstacle, from watercourses to railways and main roads.",
    description: "Design of road and pedestrian bridges, grade-separated crossings, footbridges and culverts over watercourses, railways and main roads.",
    keywords: ["bridge design Romania", "overpass design", "pedestrian footbridge design", "road bridge design", "bridge engineering consultant"],
    image: "/img/projects/pod.jpg",
    imageAlt: "Bridge and overpass design",
    intro: [
      "ME Design designs crossing structures for any kind of obstacle: watercourses, railways, main roads or changes in level. Each technical solution is adapted to the site, the traffic volume, the clearances and the local hydrological or geotechnical conditions.",
      "We work with local authorities, county councils, private clients and construction contractors. Our documentation complies with Romanian technical standards (NP, SR, AND) and with the European EN standards that apply to bridge structures.",
      "Our services cover every design stage: feasibility study (SF), detailed technical design (PT) with technical reports, drawings and structural calculations, execution details (DDE) and technical assistance on site.",
    ],
    lucrariTitlu: "Types of structures",
    lucrari: [
      { title: "Road bridges", desc: "Reinforced or prestressed concrete bridges for local, county and national roads." },
      { title: "Pedestrian bridges", desc: "Pedestrian crossings in urban and peri-urban areas, with a design that fits the architectural context." },
      { title: "Grade-separated crossings", desc: "Structures passing over or under railways and main roads." },
      { title: "Pedestrian and cycle footbridges", desc: "Light steel or concrete footbridges over watercourses and existing infrastructure." },
      { title: "Culverts", desc: "Small structures carrying surface water under road embankments." },
      { title: "Strengthening existing structures", desc: "Structural assessment and strengthening design for existing bridges and overpasses." },
    ],
    experienta: [
      {
        titlu: "A0 overpass over the A2, km 53+069",
        text: "Fabrication and execution details for the steel structure of the overpass on the Bucharest motorway ring road, built without stopping traffic on the motorway below.",
        href: "/en/portfolio/pasaj-a0-a2-bucuresti",
        link: "View project",
      },
      {
        titlu: "“Clubul Văcarilor” overpass, Baia Mare – Recea",
        text: "Feasibility study for grade-separating the junction of DN1C with the bypass. The scheme was built with PNRR funding and opened to traffic in July 2026.",
        href: "/en/portfolio/pasaj-vacari-maramures",
        link: "View project",
      },
    ],
    faq: [
      {
        q: "What preliminary studies are needed to design a bridge?",
        a: "You need a topographic survey, a geotechnical study, a hydrological/hydraulic study (for river crossings), approvals from the river basin administration and, where relevant, an environmental impact assessment.",
      },
      {
        q: "Do you design bridges on roads funded through PNRR or EU funds?",
        a: "Yes, we have prepared documentation for projects co-financed from EU funds. We provide the full technical and economic documentation needed to submit and implement the project.",
      },
      {
        q: "What is the difference between an overpass and a footbridge?",
        a: "An overpass (or underpass) is a structure that lets vehicles or pedestrians cross over or under another route, a road or a railway. A footbridge is used only by pedestrians or cyclists.",
      },
    ],
  },
  {
    slug: "lucrari-consolidare",
    title: "Retaining works and stabilisation",
    short: "Retaining walls, hillsides, slopes",
    h1: "Retaining Works<br />and Stabilisation",
    lead: "Technical solutions for stabilising unstable ground and protecting infrastructure against landslides and erosion.",
    description: "Design of retaining walls, hillside and slope stabilisation, gabions, ground anchors and riverbank protection for road infrastructure.",
    keywords: ["retaining wall design", "slope stabilisation", "landslide remediation", "gabion walls", "ground stabilisation Romania"],
    image: "/img/projects/consolidare%20autostrada.jpg",
    imageAlt: "Retaining works and stabilisation",
    intro: [
      "ME Design designs retaining and stabilisation works for unstable ground, cuttings, embankments and hillsides affected by landslides, erosion or surcharge. We provide complete technical solutions, from investigating the causes of instability to designing the works and supervising their execution.",
      "We work both on retaining structures for existing or new roads and on ground stabilisation in areas of high geotechnical risk. We use licensed geotechnical engineers for site investigation and develop the solution that works best technically and economically.",
      "Our documentation follows the Romanian standards NP 124, P 70 and NP 112 and the applicable technical guidelines, so that it meets permitting and construction requirements.",
    ],
    lucrariTitlu: "Types of stabilisation work",
    lucrari: [
      { title: "Retaining walls", desc: "Reinforced concrete, mass concrete or stone masonry walls supporting slopes and ground next to roads." },
      { title: "Hillside stabilisation", desc: "Combined solutions for stabilising hillsides affected by landslides, with anchors and protective netting." },
      { title: "Slope stabilisation", desc: "Stabilisation design for cutting and embankment slopes on roads and railways." },
      { title: "Gabions", desc: "Flexible structures of wire baskets filled with stone, an economical and low-impact option for retaining and riverbank protection." },
      { title: "Anchors and micropiles", desc: "Deep ground anchoring systems to stabilise structures and soil masses." },
      { title: "Riverbank protection", desc: "Protection of riverbanks against scour and erosion, including gabions and sprayed concrete." },
    ],
    experienta: [
      {
        titlu: "Hillside protection on DN 7, Vâlcea County",
        text: "Detailed technical design and technical assistance on four sections totalling more than 20 km in the Olt gorge, with a different solution for each hillside.",
        href: "/en/portfolio/dn7-versanti-valcea",
        link: "View project",
      },
      {
        titlu: "Riverbank works, Bughea de Jos",
        text: "Retaining walls to shape and stabilise the riverbanks, designed together with the pavements, footbridges and adjoining public space.",
        href: "/en/portfolio/bughea-de-jos-arges",
        link: "View project",
      },
    ],
    faq: [
      {
        q: "When does a hillside need stabilisation works?",
        a: "When there are signs of ground instability: cracks in the ground or in buildings, settlement, visible movement of the soil mass, or when new infrastructure is to be built in an area of geotechnical risk.",
      },
      {
        q: "What investigations are needed before designing stabilisation works?",
        a: "A detailed geotechnical study (boreholes, trial pits), a topographic survey, monitoring of movements (if available) and, in some cases, a hydrological study. ME Design coordinates these investigations through specialist partners.",
      },
      {
        q: "Which is better: a concrete retaining wall or gabions?",
        a: "It depends on the site. Gabions are cheaper, flexible and lower-impact, but reinforced concrete walls are stronger and take up less space. We recommend a solution once we have looked at the ground conditions.",
      },
    ],
  },
  {
    slug: 'poduri-cale-ferata',
    title: 'Railway bridges and overpasses',
    short: 'Structures over and under the railway',
    h1: 'Railway bridges<br />and overpasses',
    lead: 'Structures crossing over and under the railway, designed for the specific requirements of rail infrastructure.',
    description:
      'Design of railway bridges and overpasses: rail loading, structure gauge clearance, electrified lines and construction without stopping train traffic.',
    keywords: ['railway bridge design', 'overpass over railway', 'railway structure gauge clearance', 'steel railway bridge design'],
    image: '/img/projects/Gurasada.png',
    imageAlt: '3D model of the steel structure for a railway overpass',
    intro: [
      'Designing a structure that crosses a railway is not a variant of road design. The loads are of a different nature, the structure gauge clearance is a hard constraint, and construction normally goes ahead without interrupting rail traffic.',
      'We prepare documentation for overbridges and underbridges, bridges and shop-fabricated steel structures at every stage, from the concept through to the fabrication details the workshop uses to make the members.',
      'On upgraded main lines, the funding body’s requirements and the standards committed to in the financing agreement come on top of the national standards.',
    ],
    lucrariTitlu: 'Types of structures',
    lucrari: [
      { title: 'Overbridges', desc: 'Structures spanning the line, with the clearance required by electrification and the associated protection measures.' },
      { title: 'Underbridges', desc: 'Crossings under the railway, using methods that keep trains running during construction.' },
      { title: 'Shop-fabricated steel structures', desc: 'Solutions built entirely in the workshop and erected during a short line possession.' },
      { title: 'Fabrication details', desc: 'Geometry, tolerances, connection details and erection sequence, issued directly to the fabrication workshop.' },
      { title: 'Work on existing structures', desc: 'Assessment and intervention documentation for railway bridges and overpasses in service.' },
      { title: 'Coordination with the track design', desc: 'Aligning the structure with the line upgrade design produced by other design teams.' },
    ],
    experienta: [
      {
        titlu: 'Gurasada–Simeria overbridge',
        text: 'Fabrication and execution details for the overbridge at railway km 506+217.83, part of Section 3 of the Frontieră–Curtici–Simeria line rehabilitation on Pan-European Corridor IV. End client: C.F.R. S.A. (Romanian Railways).',
        href: '/en/portfolio/pasaj-gurasada-hunedoara',
        link: 'View project',
      },
    ],
    faq: [
      {
        q: 'How does it differ from a road bridge?',
        a: 'Rail loads are concentrated and repetitive, which makes fatigue a governing design criterion. On top of that come the structure gauge clearance, protection against electric shock on electrified lines and the constraint of building without stopping traffic.',
      },
      {
        q: 'Why are steel structures used so often?',
        a: 'Because they are built entirely in the workshop and erected quickly, during a short line possession. On busy main lines a long closure is practically never available, and the structural solution is chosen around that constraint.',
      },
      {
        q: 'Do you work directly for CFR or through a contractor?',
        a: 'Both are common. On line upgrade schemes, the detailed design is often contracted by the main contractor or by the steelwork fabricator, while the end client remains the railway infrastructure manager.',
      },
    ],
  },
  {
    slug: 'monumente-istorice',
    title: 'Works on historic monuments',
    short: 'Listed bridges and structures',
    h1: 'Works on<br />historic monuments',
    lead: 'Structural assessment, permit documentation and execution design for listed bridges and structures, with solutions compatible with their heritage value.',
    description:
      'Design of works on bridges and structures listed as historic monuments: assessment, heritage approvals, compatible solutions and certified checking.',
    keywords: ['historic bridge rehabilitation', 'listed structure works', 'heritage bridge engineering', 'heritage approvals Romania'],
    image: '/img/projects/POD%20LUGOJ.jpg',
    imageAlt: 'Rehabilitated historic iron bridge',
    intro: [
      'On a listed structure, intervention solutions are not chosen on technical grounds alone. Original elements are kept as far as their condition allows, and any replacement has to be compatible with the historic construction.',
      'The documentation goes through an additional approval process. Under CATUC, Romania’s new Planning and Construction Code (Law 169/2026), the technical checking of intervention designs for structures on the List of Historic Monuments may only be done by design checkers with an additional certification in the protection of historic monuments.',
      'We have worked on century-old steel structures and on urban bridges in protected areas, where the organisation of the works matters as much as the solution itself.',
    ],
    lucrariTitlu: 'What the intervention involves',
    lucrari: [
      { title: 'Measured survey of the structure', desc: 'Measuring the actual geometry and identifying how the structure is really built, which often differs from the archived drawings.' },
      { title: 'Material investigations', desc: 'Determining the properties of old steel or concrete, which do not match current standards.' },
      { title: 'Assessment of connections', desc: 'Analysing how riveted connections behave, which is different from welds or high-strength bolts.' },
      { title: 'Fatigue check', desc: 'Explicit assessment of the fatigue accumulated over decades or centuries of service.' },
      { title: 'Compatible solutions', desc: 'Interventions that keep the character of the structure and meet the specific approval requirements.' },
      { title: 'Phasing of the works', desc: 'Site layout and traffic diversions worked out at design stage, not left to the contractor.' },
    ],
    experienta: [
      {
        titlu: 'The Iron Bridge over the Timiș, Lugoj',
        text: 'A 64.00 m parabolic truss girder built in 1902. Intervention approval documentation (DALI), building permit design (DTAC) and detailed technical design for the rehabilitation, starting from an actual measured survey of the structure.',
        href: '/en/portfolio/pod-fier-lugoj-timis',
        link: 'View project',
      },
      {
        titlu: 'Maria Theresa Bridge, Sibiu',
        text: 'Major repair of a structure in the Theresian district, with solutions matched to the heritage value of the area and to residents’ access during the works.',
        href: '/en/portfolio/pod-gladiolelor-sibiu',
        link: 'View project',
      },
    ],
    faq: [
      {
        q: 'What can and cannot be changed on a listed structure?',
        a: 'The general rule is to keep original elements where their condition allows and to make replacements compatible with the historic construction. The actual limits are set case by case through the structural assessment and the specific heritage approvals.',
      },
      {
        q: 'Who can check such a design?',
        a: 'Under CATUC, the technical checking of designs for interventions on structures on the List of Historic Monuments may only be done by design checkers with an additional certification in the protection of historic monuments, a certification organised by the ministry responsible for culture.',
      },
      {
        q: 'How much longer does it take than an ordinary project?',
        a: 'The difference does not come from the design but from the heritage approval process, which is added to the usual approvals. It has to be built into the programme from the start.',
      },
    ],
  },
  {
    slug: 'expertize-tehnice',
    title: 'Structural assessments',
    short: 'Evaluation of existing structures',
    h1: 'Structural assessments<br />of existing structures',
    lead: 'Assessing the actual condition and load-bearing capacity and setting out the acceptable intervention options. The starting point for any work on an existing structure.',
    description:
      'Structural assessment of bridges, roads and retaining works: actual condition, load-bearing capacity, acceptable solutions and extension of service life.',
    keywords: ['bridge structural assessment', 'existing structure assessment', 'load-bearing capacity assessment', 'service life extension'],
    image: '/img/projects/pod%20gogosu.jpg',
    imageAlt: 'Suspension bridge evaluated by structural assessment',
    intro: [
      'Interventions on existing structures are based on a structural assessment (expertiză tehnică) prepared by certified experts. The logic is simple: you cannot design an intervention without knowing the actual condition of the structure you are working on.',
      'The assessment establishes how the structure is actually built, the condition of the materials, the current load-bearing capacity and the acceptable intervention options, and, where the situation calls for it, immediate restrictions on use.',
      'Under CATUC, Romania’s new Planning and Construction Code (Law 169/2026), an assessment can also result in extending the structure’s design service life, with a monitoring programme and a deadline for the next evaluation.',
    ],
    lucrariTitlu: 'What an assessment covers',
    lucrari: [
      { title: 'Desk study', desc: 'Tracing the original design, the history of interventions and the conditions of use.' },
      { title: 'Measured survey of the structure', desc: 'Measuring the geometry and identifying the actual construction where drawings are missing or do not match.' },
      { title: 'Defect inventory', desc: 'Mapping cracks, exposed reinforcement, scour and defects at bearings and expansion joints.' },
      { title: 'Investigations and testing', desc: 'Material testing, locating reinforcement, taking samples and measuring deformations.' },
      { title: 'Verification by calculation', desc: 'Assessing the current load-bearing capacity against the applicable code loads.' },
      { title: 'Conclusions and solutions', desc: 'Technical condition, intervention options and, where needed, immediate restrictions on use.' },
    ],
    experienta: [
      {
        titlu: 'Suspension bridge over the Gogoșu branch',
        text: 'Structural assessment and intervention approval documentation (DALI) for an asset of Hidroelectrica S.A., Porțile de Fier Hydropower Plants Branch. On a suspension structure, the cables and anchorages are the critical elements.',
        href: '/en/portfolio/pod-gogosu-ostrovul-mare',
        link: 'View project',
      },
    ],
    faq: [
      {
        q: 'When is a structural assessment mandatory?',
        a: 'For any intervention on an existing structure, such as major repairs, strengthening, a change of load class or widening, and after exceptional events such as floods, impacts or landslides around the foundations.',
      },
      {
        q: 'Does the assessment replace the design?',
        a: 'No. The assessment says what has to be done and why; the technical design says how it is built, with what materials, in what order and in what quantities. Both are needed, and neither replaces the other.',
      },
      {
        q: 'What if the original drawings do not exist?',
        a: 'That is not an obstacle. The assessment relies on an actual measured survey of the structure and on site investigations. The amount of investigation goes up, and so do cost and time, but the evaluation is still possible.',
      },
    ],
  },
  {
    slug: 'amenajari-hidrotehnice',
    title: 'Hydraulic engineering works',
    short: 'Canal culverting, riverbanks, port platforms',
    h1: 'Hydraulic<br />engineering works',
    lead: 'Canal culverting, riverbank works and protection, port platforms: work where the water regime determines the whole solution.',
    description:
      'Design of hydraulic works: canal culverting, riverbank protection and shaping, port platforms and works integrated with road infrastructure.',
    keywords: ['canal culverting design', 'riverbank works', 'riverbank erosion protection', 'port platform design', 'hydraulic engineering Romania'],
    image: '/img/projects/PORT.png',
    imageAlt: 'Port works on the Danube',
    intro: [
      'Where water is involved, the hydraulic side is not an add-on to the road design. It sets the levels, the sizing of the structures and whether the scheme keeps working.',
      'We design culverting of canals under roads, riverbank works and protection, port platforms and water collection and discharge works, often integrated with the road component of the same scheme.',
      'A solution that treats the works separately from the water regime usually turns out not to work at the first flood.',
    ],
    lucrariTitlu: 'Types of work',
    lucrari: [
      { title: 'Canal culverting', desc: 'Covering open canals in urban areas, sized at the same time for design flows and for traffic loads.' },
      { title: 'Riverbank works', desc: 'Retaining walls and structures for riverbanks affected by erosion or floods.' },
      { title: 'Riverbank protection', desc: 'Works against scour and erosion, including gabions and flexible solutions suited to the watercourse regime.' },
      { title: 'Port platforms', desc: 'Works on the banks of navigable waterways, with levels set against the range of water levels.' },
      { title: 'Stormwater collection', desc: 'Ditches, gutters, culverts and outfall connections, sized on the basis of the hydrological study.' },
      { title: 'Watercourse crossings', desc: 'Matching the structures to the hydrological regime and to the specific approval requirements.' },
    ],
    experienta: [
      {
        titlu: 'Culverting of the Craiovița canal',
        text: 'Culverting of the open canal over 1,800 m, under a new four-lane road, as part of closing the traffic ring in southern Craiova. The hydraulic structure becomes part of the road foundation.',
        href: '/en/portfolio/craiova-dolj',
        link: 'View project',
      },
      {
        titlu: 'Green-blue infrastructure, Bughea de Jos',
        text: 'Riverbank works with retaining walls, pavements and footbridges to keep people moving, designed together with the adjoining public space.',
        href: '/en/portfolio/bughea-de-jos-arges',
        link: 'View project',
      },
    ],
    faq: [
      {
        q: 'What approvals are needed for works near a watercourse?',
        a: 'Usually the approval of the river basin water administration and the water management permit, plus, where relevant, the environmental agreement. The exact list comes from the zoning certificate (certificat de urbanism), and these approvals often drive the project programme.',
      },
      {
        q: 'Why does the range of water levels matter for a port platform?',
        a: 'Because it sets the platform levels and the bank protection solution. A platform built without allowing for the difference between high and low water becomes unusable for part of the season.',
      },
      {
        q: 'Is culverting a canal hydraulic work or road work?',
        a: 'Both, and that is the difficulty. The box has to be sized at the same time for the design flows and for the traffic loads above it. An error in either assumption compromises both functions.',
      },
    ],
  },
];
