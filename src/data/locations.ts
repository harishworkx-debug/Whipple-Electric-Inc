export interface PermitOfficeInfo {
  department: string;
  address: string;
  phone: string;
  inspectionRequirements: string[];
  inspectorNotes: string;
}

export interface HousingStockProfile {
  era: string;
  architecturalStyle: string;
  commonWiringTypes: string[];
  commonHazards: string[];
  modernizationFocus: string;
}

export interface DispatchDetails {
  distanceFromTaylorHQ: string;
  avgResponseTime: string;
  emergencyAvailable: boolean;
  serviceCorridor: string;
}

export interface LocalTestimonial {
  author: string;
  neighborhood: string;
  service: string;
  quote: string;
  rating: number;
}

export interface LocationDetail {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  zipCodes: string[];
  localContext: string;
  permitOffice: PermitOfficeInfo;
  housingStock: HousingStockProfile;
  dispatchDetails: DispatchDetails;
  localTestimonial: LocalTestimonial;
  faqs: { question: string; answer: string }[];
}

export const locations: LocationDetail[] = [
  {
    slug: 'taylor-mi',
    name: 'Taylor, Michigan',
    shortName: 'Taylor',
    description:
      'Whipple Electric Inc is headquartered right here in Taylor, Michigan (14800 Burr St), providing licensed residential and commercial electrical services for over 40 years. Led by Master Electrician Jim Whipple, we specialize in 200-amp service heavy-ups, fuse box conversions, emergency troubleshooting, code-compliant rewiring, and lighting across all Taylor neighborhoods along Telegraph Rd, Eureka Rd, and Goddard Rd.',
    zipCodes: ['48180', '48174'],
    localContext:
      'Taylor features a dense concentration of post-war 1950s brick and frame ranch homes. Many original residences were built with 60-amp or 100-amp fuse boxes and ungrounded two-wire cloth Romex that struggles to support modern air conditioners, microwaves, and EV chargers. Dispatched directly from Burr St, our team delivers same-day diagnostics, coordinates utility disconnects with DTE Energy, and pulls permits directly with the City of Taylor Building Department.',
    permitOffice: {
      department: 'City of Taylor Building and Safety Department',
      address: '23555 Goddard Rd, Taylor, MI 48180',
      phone: '(734) 374-1360',
      inspectionRequirements: [
        'Electrical permit required for all panel replacements, heavy-ups, and new branch circuits',
        'Rough-in inspection required before insulating or drywalling remodels',
        'Final electrical inspection sign-off required for meter re-energization by DTE Energy',
      ],
      inspectorNotes: 'Taylor electrical inspectors require dual 8-foot copper ground rods spaced at least 6 feet apart and cold-water bonding on all 200A service heavy-ups.',
    },
    housingStock: {
      era: '1950s–1970s Post-War Subdivisions & Ranches',
      architecturalStyle: 'Brick Ranches, Cape Cods, and Split-Level Residences',
      commonWiringTypes: ['Cloth-Sheathed Romex (NM 2-Wire)', 'Original 60A/100A Fuse Panels', 'Early PVC Romex with Reduced-Sized Grounds'],
      commonHazards: ['Double-tapped screw-in fuses', 'Overloaded 15A branch circuits', 'Ungrounded two-prong receptacles in bedrooms'],
      modernizationFocus: '200-Amp service panel upgrades, whole-home surge protection, and GFCI grounding retrofits.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: 'Local HQ (0 - 5 Miles)',
      avgResponseTime: '15 - 30 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'Burr St, Telegraph Rd, Eureka Rd, Goddard Rd, Ecorse Rd',
    },
    localTestimonial: {
      author: 'Jo Shaheen',
      neighborhood: 'Taylor Central Subdivisions',
      service: 'Emergency Panel Upgrade & Insurance Clearance',
      quote: 'Jim is very knowledgeable and very honest. I trust him completely. He updated an aging electric panel for us and dealt with our insurance company. He even came in on Sunday so we wouldn\'t have to shut down.',
      rating: 5,
    },
    faqs: [
      { question: 'Where is Whipple Electric Inc based in Taylor, MI?', answer: 'Our physical headquarters is at 14800 Burr St, Taylor, MI 48180. Because our workshop and dispatch base are in Taylor, our Master Electrician responds promptly across Wayne County.' },
      { question: 'Do you handle City of Taylor electrical permits and inspections?', answer: 'Yes. For panel upgrades, rewires, and additions, we submit permit applications directly to the City of Taylor Building Dept (23555 Goddard Rd) and meet the inspector on site.' },
      { question: 'Why are breakers constantly tripping in older Taylor ranch homes?', answer: 'Post-war ranches were wired for 600-watt iron loads, not 1,500-watt microwaves, space heaters, and gaming computers. We balance circuits and run dedicated lines to resolve nuisance trips.' },
      { question: 'Can you convert 2-prong ungrounded outlets in Taylor homes?', answer: 'Yes. Per NEC 406.4(D), we install GFCI receptacles that provide shock protection even without a continuous equipment ground, or run new grounded NM-B Romex.' },
    ],
  },
  {
    slug: 'southgate-mi',
    name: 'Southgate, Michigan',
    shortName: 'Southgate',
    description:
      'Looking for a trusted residential electrician in Southgate, MI? Whipple Electric Inc delivers certified electrical repairs, 200-amp service heavy-ups, troubleshooting, and lighting installations for Southgate homeowners. Dispatched directly from our adjacent Taylor base, we deliver prompt, code-compliant workmanship backed by 40+ years of Master Electrician craftsmanship.',
    zipCodes: ['48195'],
    localContext:
      'Southgate comprises established neighborhoods built predominantly between the 1950s and 1970s along Northline, Eureka, and Allen Roads. Homes commonly feature original 100-amp panels that overheat when central air conditioning and laundry units cycle together. We specialize in panel modernization, dedicated 240V heat pump circuits, and resolving late-1960s aluminum branch wiring connections safely.',
    permitOffice: {
      department: 'City of Southgate Building Inspections Department',
      address: '14400 Dix-Toledo Rd, Southgate, MI 48195',
      phone: '(734) 258-3030',
      inspectionRequirements: [
        'Electrical contractor registration and permit filing prior to commencing work',
        'DTE service coordination notice required for overhead-to-underground conversions',
        'Tamper-resistant and AFCI protection required on all bedroom circuit additions',
      ],
      inspectorNotes: 'Southgate inspectors verify proper arc-fault circuit interrupter (AFCI) breaker installation on all living room and bedroom branch replacements.',
    },
    housingStock: {
      era: '1955–1975 Suburban Boom',
      architecturalStyle: 'Brick Ranches, Tri-Levels, and Quad-Level Family Homes',
      commonWiringTypes: ['100A Pushmatic & Bryant Panels', '12/2 Copper Romex', 'Late 1960s Aluminum Branch Conductors'],
      commonHazards: ['Pushmatic breakers failing to trip', 'Oxidized aluminum splices causing flickering', 'Overheated busbars behind main breakers'],
      modernizationFocus: 'Pushmatic-to-Square D QO panel upgrades, AlumiConn copper pigtailing, and dedicated 240V circuits.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: 'Adjacent City (3 - 6 Miles)',
      avgResponseTime: '20 - 35 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'Eureka Rd, Northline Rd, Allen Rd, Dix-Toledo Hwy',
    },
    localTestimonial: {
      author: 'Dan Egelton',
      neighborhood: 'Northline Rd Neighborhood, Southgate',
      service: 'Wiring Diagnostic & Wall Live Wire Repair',
      quote: 'Jim Whipple is an excellent Master Electrician. He came over on short notice, found a cut live wire concealed in the wall, fixed our problems, and charged a fair price. Look no further.',
      rating: 5,
    },
    faqs: [
      { question: 'How quickly can an electrician arrive in Southgate, MI?', answer: 'Because our headquarters is directly adjacent on Burr St in Taylor, travel time to Southgate (48195) is typically only 15 to 25 minutes for emergency diagnostics and consultations.' },
      { question: 'Do Southgate homes have aluminum wiring?', answer: 'Some homes built between 1965 and 1973 in Southgate contain branch aluminum wiring. We perform CPSC-approved AlumiConn torque conversions to eliminate fire hazards permanently.' },
      { question: 'Do you install EV home charging stations in Southgate?', answer: 'Yes. We evaluate existing panel loads and install dedicated 50-amp 240V NEMA 14-50 receptacles or hardwired Tesla/Universal Level 2 EV charging stations with municipal permit verification.' },
    ],
  },
  {
    slug: 'allen-park-mi',
    name: 'Allen Park, Michigan',
    shortName: 'Allen Park',
    description:
      'Whipple Electric Inc is the premier residential electrical contractor serving Allen Park, Michigan. From historic brick bungalows on Park Avenue to mid-century ranches near Southfield Rd, Master Electrician Jim Whipple brings over 40 years of hands-on expertise to panel upgrades, troubleshooting, recessed lighting, and knob-and-tube rewiring.',
    zipCodes: ['48101'],
    localContext:
      'Allen Park features charming 1930s to 1950s brick bungalows and colonials with plaster-and-lath walls. Many older properties still house active knob-and-tube conductors or original ungrounded service drops. We use specialized non-destructive wire fishing techniques that preserve historic plaster ceilings and decorative woodwork while bringing the electrical system to current Michigan Residential Code.',
    permitOffice: {
      department: 'City of Allen Park Building Department',
      address: '15915 Southfield Rd, Allen Park, MI 48101',
      phone: '(313) 928-4441',
      inspectionRequirements: [
        'Master Electrician license on file with the City of Allen Park',
        'Permit required for service changes, subpanel installations, and whole-home rewires',
        'Final inspection required before panel cover seal application',
      ],
      inspectorNotes: 'Allen Park building inspectors strictly enforce NEC 300.4 regarding nail plates on bored studs in historic lath-and-plaster retrofits.',
    },
    housingStock: {
      era: '1930s–1955 Classic Bungalow & Pre-War Architecture',
      architecturalStyle: 'Brick Bungalows, Tudor Revivals, and Stately Colonials',
      commonWiringTypes: ['Knob-and-Tube Wiring in Attics', 'Black Cloth Two-Wire Romex', 'Ungrounded Metallic Conduit (BX Armor)'],
      commonHazards: ['Brittle cloth insulation crumbling in junction boxes', 'Knob-and-tube covered by insulation', 'Absence of GFCI protection near plumbing'],
      modernizationFocus: 'Knob-and-tube decommissioning, non-destructive copper Romex fishing, and 200A service replacements.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: '4 - 7 Miles',
      avgResponseTime: '20 - 35 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'Southfield Rd, Allen Rd, Pelham Rd, Park Ave',
    },
    localTestimonial: {
      author: 'Dennis Michigan',
      neighborhood: 'Park Ave Residential District, Allen Park',
      service: 'Fuse-to-Breaker Conversion & Basement Electrical',
      quote: 'Jim Whipple upgraded my house from fuses to circuit breakers and enhanced my basement plant room. He went the extra mile to make sure I was satisfied. Honest, respectful, and fair pricing.',
      rating: 5,
    },
    faqs: [
      { question: 'Can you rewire an Allen Park bungalow without destroying plaster walls?', answer: 'Yes. With 40+ years of experience, we route new copper wiring through crawlspaces, attics, and interior stud bays with specialized flexible drill bits, keeping wall cuts minimal.' },
      { question: 'Will active knob-and-tube wiring cancel my Allen Park home insurance?', answer: 'Many insurance carriers refuse or surcharge policies for homes with active knob-and-tube wiring. We replace or decommission these circuits and issue signed completion certificates.' },
      { question: 'What electrical permits are needed in Allen Park, MI?', answer: 'Panel heavy-ups, service changes, and adding new circuits require permits filed with the Allen Park Building Dept at 15915 Southfield Rd. We handle all paperwork.' },
    ],
  },
  {
    slug: 'dearborn-mi',
    name: 'Dearborn, Michigan',
    shortName: 'Dearborn',
    description:
      'Need an experienced Master Electrician in Dearborn, Michigan? Whipple Electric Inc delivers expert residential electrical troubleshooting, historic home rewiring, 200A breaker box replacements, and custom lighting across West Dearborn, East Dearborn, and neighborhoods surrounding Michigan Ave and Ford Rd.',
    zipCodes: ['48120', '48124', '48126', '48128'],
    localContext:
      'Dearborn possesses a rich architectural heritage, spanning pre-war brick Tudors to mid-century modern residences. Many older homes feature legacy rigid metal conduit, knob-and-tube runs, and dense overhead tree canopies that damage aging service drops during Downriver windstorms. Jim Whipple understands the nuances of Dearborn homes and delivers code-compliant modernization that preserves property value.',
    permitOffice: {
      department: 'City of Dearborn Department of Buildings and Safety',
      address: '16901 Michigan Ave, Dearborn, MI 48126',
      phone: '(313) 943-2150',
      inspectionRequirements: [
        'Electrical permits mandatory for all service changes, rewiring, and major alterations',
        'State of Michigan Master Electrician and Electrical Contractor license registration',
        'Rough and final inspections required on all residential renovations',
      ],
      inspectorNotes: 'Dearborn inspectors require strict adherence to service riser clearance over driveways and whole-home surge suppression on panel replacements.',
    },
    housingStock: {
      era: '1920s–1960s Historic & Established Neighborhoods',
      architecturalStyle: 'Brick Tudors, Center-Entrance Colonials, and Mid-Century Moderns',
      commonWiringTypes: ['Knob-and-Tube remnants', 'Rigid Metal Conduit (EMT)', 'Early Cloth-Insulated NM Cable'],
      commonHazards: ['Compromised grounding paths in aged conduit', 'Overloaded 60A/100A services', 'Storm damage to aging service entrance heads'],
      modernizationFocus: '200A heavy-up service upgrades, high-capacity appliance circuits, and recessed LED wafer installations.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: '6 - 10 Miles',
      avgResponseTime: '25 - 40 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'Telegraph Rd, Michigan Ave, Ford Rd, Outer Drive',
    },
    localTestimonial: {
      author: 'K J',
      neighborhood: 'West Dearborn Historic District',
      service: 'Panel Diagnostic & Master Electrician Consultation',
      quote: 'Jim did a great job for me. Great phone communication, on time, and extremely knowledgeable, honest, and friendly. I chose to go with the Master Electrician for the 40+ years experience. Well done.',
      rating: 5,
    },
    faqs: [
      { question: 'Do you work on historic homes with knob-and-tube wiring in Dearborn?', answer: 'Yes. We inspect and trace knob-and-tube conductors, test insulation integrity, and safely replace live circuits with modern NM-B Romex while respecting historical architectural details.' },
      { question: 'Do you service both East and West Dearborn?', answer: 'Yes. We regularly service homes in West Dearborn, East Dearborn, Springwells Park, and properties along Ford Rd and Michigan Ave.' },
      { question: 'Can you install recessed lighting in Dearborn homes with plaster ceilings?', answer: 'Yes. We use airtight, ultra-thin remodel LED wafer downlights that fit neatly within lath-and-plaster ceilings without requiring structural joist cutting.' },
    ],
  },
  {
    slug: 'dearborn-heights-mi',
    name: 'Dearborn Heights, Michigan',
    shortName: 'Dearborn Heights',
    description:
      'Whipple Electric Inc delivers dependable residential electrical services to homeowners in Dearborn Heights, MI. Whether you need electrical panel upgrades, basement buildout wiring, kitchen remodel rough-ins, or fast circuit troubleshooting, our licensed Master Electrician provides safe, prompt, code-compliant solutions.',
    zipCodes: ['48125', '48127'],
    localContext:
      'Dearborn Heights features sprawling residential subdivisions, ranches, and tri-levels along Beech Daly, Telegraph, and Ford Roads. Many local homeowners are finishing basements, remodeling kitchens, or adding central heat pumps that push original 100-amp panels past capacity. We install code-compliant 200A services, dedicated appliance lines, and AFCI safety breakers coordinated with city inspectors.',
    permitOffice: {
      department: 'City of Dearborn Heights Building and Engineering Department',
      address: '6045 Fenton St, Dearborn Heights, MI 48127',
      phone: '(313) 791-3470',
      inspectionRequirements: [
        'Electrical permits required for panel changes, service upgrades, and circuit extensions',
        'Plan review required for full basement finishing and commercial installations',
        'Final electrical inspection required for certificate of completion',
      ],
      inspectorNotes: 'Dearborn Heights inspectors inspect AFCI breakers in all finished living spaces and verify proper smoke/carbon monoxide interconnections.',
    },
    housingStock: {
      era: '1950s–1970s Post-War Subdivisions',
      architecturalStyle: 'Brick Ranches, Tri-Levels, and Split-Entry Homes',
      commonWiringTypes: ['100A Breaker & Fuse Panels', 'Early NM Romex with Ungrounded Runs', 'Multi-Wire Branch Circuits (MWBC)'],
      commonHazards: ['Shared neutrals causing breaker trips on AFCI circuits', 'Crowded panels with tandem breakers', 'Basement moisture near older panels'],
      modernizationFocus: 'Basement finish subpanels, kitchen dedicated 20A circuits, and 200A heavy-ups.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: '4 - 8 Miles',
      avgResponseTime: '20 - 35 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'Beech Daly Rd, Telegraph Rd, Van Born Rd, Warren Rd',
    },
    localTestimonial: {
      author: 'Robert M.',
      neighborhood: 'Beech Daly Subdivisions, Dearborn Heights',
      service: 'Finished Basement Electrical & Subpanel Installation',
      quote: 'Jim handled our entire basement electrical rough-in and subpanel. Passed city inspection on the very first visit. Clean, meticulous wiring and honest advice throughout.',
      rating: 5,
    },
    faqs: [
      { question: 'Do you handle kitchen and basement remodel electrical in Dearborn Heights?', answer: 'Yes. We plan and install dedicated GFCI small-appliance circuits, microwave lines, subpanels, and recessed LED illumination for kitchen and basement renovations.' },
      { question: 'What electrical permits are needed in Dearborn Heights?', answer: 'Permits from the Dearborn Heights Building Dept (6045 Fenton St) are required for all panel replacements and added circuits. We handle the submission and inspection scheduling.' },
      { question: 'Why does my breaker buzz when running the microwave and AC?', answer: 'A buzzing breaker indicates mechanical vibration from heavy overloads or arcing contacts inside an aging breaker. Call us right away for thermal diagnostic testing.' },
    ],
  },
  {
    slug: 'romulus-mi',
    name: 'Romulus, Michigan',
    shortName: 'Romulus',
    description:
      'Looking for a skilled residential and commercial electrician in Romulus, MI? Whipple Electric Inc provides electrical troubleshooting, 200-amp panel upgrades, pole barn subpanels, garage wiring, and commercial electrical services throughout Romulus and the Detroit Metro Airport corridor.',
    zipCodes: ['48174'],
    localContext:
      'Romulus combines suburban neighborhoods with spacious properties, detached garages, workshops, and pole barns. Properties near airport corridors experience low-frequency acoustic and ground vibration that can loosen screw terminals in panels over decades. We provide comprehensive safety checkups, terminal torquing, high-amperage subpanel feeds, and underground trenching.',
    permitOffice: {
      department: 'City of Romulus Building and Safety Department',
      address: '11111 Wayne Rd, Romulus, MI 48174',
      phone: '(734) 942-7550',
      inspectionRequirements: [
        'Electrical permits required for service heavy-ups, trenching, and outbuilding wiring',
        'Underground trench inspection required before backfilling conduit runs',
        'Coordination with DTE Energy for overhead service drop modifications',
      ],
      inspectorNotes: 'Romulus inspectors verify minimum 18-inch burial depth on Schedule 40 PVC conduit for detached garages and workshops.',
    },
    housingStock: {
      era: '1960s–1990s Suburban & Semi-Rural Acreage',
      architecturalStyle: 'Ranches, Custom Colonials, and Homes with Detached Outbuildings',
      commonWiringTypes: ['100A/200A Breaker Boxes', 'Underground Feeder (UF-B) Cable', 'Conduit Runs to Detached Barns'],
      commonHazards: ['Vibration-loosened neutral lugs', 'Undersized feeder wires to pole barns', 'Weathered exterior disconnects'],
      modernizationFocus: '100A subpanel drops for garages/workshops, heavy machinery circuits, and terminal torquing.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: '5 - 9 Miles',
      avgResponseTime: '20 - 35 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'Eureka Rd, Goddard Rd, Wayne Rd, Merriman Rd, I-94 Corridor',
    },
    localTestimonial: {
      author: 'Mark S.',
      neighborhood: 'Goddard Rd Acreage Properties, Romulus',
      service: 'Pole Barn Underground Feeder & Subpanel',
      quote: 'Whipple Electric trenched and wired my 30x40 pole barn with a 100-amp subpanel for my welder and car lift. Professional, safe, and done right to code. Highly recommended.',
      rating: 5,
    },
    faqs: [
      { question: 'Can you wire a detached garage or pole barn in Romulus, MI?', answer: 'Yes. We trench underground PVC conduit, pull heavy-gauge copper feeders from your main panel, and install a dedicated subpanel with breakers for 240V welders, vehicle lifts, and lighting.' },
      { question: 'Do you provide emergency electrical troubleshooting in Romulus?', answer: 'Yes. If you lose power to essential circuits, detect burning odors near your breaker box, or experience sparking outlets, we offer rapid emergency diagnostic response.' },
      { question: 'Are you familiar with Romulus residential electrical codes?', answer: 'Yes. We have worked in Wayne County for over 40 years and guarantee all work passes City of Romulus inspections and meets the 2023 National Electrical Code.' },
    ],
  },
  {
    slug: 'wyandotte-mi',
    name: 'Wyandotte, Michigan',
    shortName: 'Wyandotte',
    description:
      'Homeowners in Wyandotte, Michigan rely on Whipple Electric Inc for meticulous residential electrical services. From historic Detroit River waterfront homes on Biddle Ave to mid-century bungalows, Master Electrician Jim Whipple delivers honest troubleshooting, 200A panel upgrades, circuit repairs, and custom lighting.',
    zipCodes: ['48192'],
    localContext:
      'Wyandotte is a historic Detroit River community boasting classic late 19th-century and early 20th-century architecture. Many riverfront homes still feature legacy fuse boxes, ungrounded wiring systems, and high ambient riverfront humidity that accelerates corrosion on exterior meter sockets and disconnects. We modernize electrical infrastructure while safeguarding the historic character of Wyandotte properties.',
    permitOffice: {
      department: 'City of Wyandotte Engineering and Building Department',
      address: '3200 Biddle Ave, Wyandotte, MI 48192',
      phone: '(734) 324-4580',
      inspectionRequirements: [
        'Electrical contractor registration and trade permit filing',
        'Coordination with Wyandotte Municipal Services (WMS) or DTE Energy for meter disconnects',
        'Safety ground electrode and water meter bonding inspection',
      ],
      inspectorNotes: 'Wyandotte inspectors check for bonding jumpers across water meters and verify marine-grade weatherproofing on riverfront exterior services.',
    },
    housingStock: {
      era: '1890s–1950s Historic Riverfront & Industrial Boom',
      architecturalStyle: 'Victorian Two-Stories, Craftsman Bungalows, and Brick Ranches',
      commonWiringTypes: ['Screw-in Fuse Blocks', 'Knob-and-Tube remnants', 'Cloth-Jacketed NM Cable', 'WMS Electric Meter Stacks'],
      commonHazards: ['Corrosion on exterior meter bases from river humidity', 'Brittle knob-and-tube insulation', 'Lack of GFCI protection in older basements'],
      modernizationFocus: 'Fuse-to-breaker upgrades, weather-sealed outdoor electrical drops, and historic house rewires.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: '6 - 10 Miles',
      avgResponseTime: '25 - 40 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'Eureka Rd, Biddle Ave, Fort St, Pennsylvania Rd',
    },
    localTestimonial: {
      author: 'Sarah L.',
      neighborhood: 'Biddle Ave Riverfront District, Wyandotte',
      service: 'Fuse Box Replacement & Recessed Lighting',
      quote: 'Jim transformed our 1920s riverfront home. Replaced the scary old fuse box with a clean 200A breaker panel and installed gorgeous recessed lights without damaging our vintage plaster. A true craftsman.',
      rating: 5,
    },
    faqs: [
      { question: 'Can you replace an old fuse box in a historic Wyandotte home?', answer: 'Yes. We specialize in replacing century-old screw-in fuse boxes with modern 100A or 200A circuit breaker panels with labeled circuits and whole-home surge suppression.' },
      { question: 'Do you install outdoor waterfront and security lighting in Wyandotte?', answer: 'Yes. We install marine-grade, corrosion-resistant exterior lighting, floodlights, and GFCI-protected weatherproof outlets built to withstand Detroit River moisture.' },
      { question: 'Does Wyandotte have its own electric utility?', answer: 'Wyandotte operates Wyandotte Municipal Services (WMS) for electricity in parts of the city, alongside DTE Energy. We coordinate seamlessly with both utilities for service upgrades.' },
    ],
  },
  {
    slug: 'lincoln-park-mi',
    name: 'Lincoln Park, Michigan',
    shortName: 'Lincoln Park',
    description:
      'Whipple Electric Inc provides reliable, licensed residential electrical services to homeowners across Lincoln Park, MI. From 200-amp panel upgrades and breaker repairs to outlet grounding, Certificate of Occupancy (C of O) corrections, and ceiling fan installations, our local team brings 40+ years of Master Electrician expertise directly to your door.',
    zipCodes: ['48146'],
    localContext:
      'Lincoln Park features compact, post-war brick and frame ranches and bungalows built in the 1940s and 1950s between Fort St and Dix Hwy. Common electrical challenges include undersized 60-amp services, double-tapped circuit breakers in crowded panels, open junction boxes in crawlspaces, and ungrounded two-prong outlets throughout bedrooms. We provide affordable, safety-first electrical modernization that passes real estate appraisal and city inspection checks.',
    permitOffice: {
      department: 'City of Lincoln Park Department of Building and Inspections',
      address: '1355 Southfield Rd, Lincoln Park, MI 48146',
      phone: '(313) 386-1800',
      inspectionRequirements: [
        'Electrical permit required for service upgrades, panel replacements, and safety code corrections',
        'Certificate of Occupancy (C of O) electrical repairs require certified contractor sign-off',
        'Ground fault (GFCI) and tamper-resistant outlet compliance checks',
      ],
      inspectorNotes: 'Lincoln Park building inspectors strictly review panel directory labeling and verify GFCI protection within 6 feet of all sinks and laundry basins.',
    },
    housingStock: {
      era: '1940s–1955 Post-War Starter Homes',
      architecturalStyle: 'Brick Ranches, Compact Bungalows, and Cape Cods',
      commonWiringTypes: ['60A/100A Zinsco, Federal Pacific, or Murray Panels', 'Cloth Romex with No Ground Wire', 'Exposed basement wiring runs'],
      commonHazards: ['Double-tapped breakers', 'Over-fused branch circuits', 'Ungrounded two-prong outlets in bedrooms and living rooms'],
      modernizationFocus: '100A-to-200A panel upgrades, C of O inspection fixes, and whole-house GFCI safety conversions.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: '4 - 7 Miles',
      avgResponseTime: '20 - 30 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'Southfield Rd, Fort St, Dix Hwy, Emmons Blvd',
    },
    localTestimonial: {
      author: 'David P.',
      neighborhood: 'Dix Hwy & Emmons Area, Lincoln Park',
      service: 'C of O Inspection Repairs & Panel Upgrade',
      quote: 'We were selling our Lincoln Park home and failed the city electrical inspection due to double-tapped breakers and ungrounded outlets. Jim came out immediately, fixed every violation, pulled the permit, and got us our C of O on time.',
      rating: 5,
    },
    faqs: [
      { question: 'How much does it cost to upgrade an electrical panel in Lincoln Park, MI?', answer: 'Costs typically depend on whether the service drop needs upgrading from 100A to 200A, meter base replacement, and permit fees. We provide clear, transparent upfront pricing on site before work begins.' },
      { question: 'Can you fix electrical violations for a Lincoln Park Certificate of Occupancy (C of O)?', answer: 'Yes. We regularly help buyers and sellers clear city inspection checklists, including GFCI updates, missing junction box covers, open grounds, and panel directory labeling.' },
      { question: 'Can you troubleshoot intermittent power loss in Lincoln Park bungalows?', answer: 'Yes. We use advanced digital multimeters and circuit tracers to isolate loose neutrals, faulty splices, and worn breaker shoes without damaging finished walls.' },
    ],
  },
  {
    slug: 'trenton-mi',
    name: 'Trenton, Michigan',
    shortName: 'Trenton',
    description:
      'Looking for a top-rated residential electrician in Trenton, MI? Whipple Electric Inc provides expert electrical panel upgrades, emergency repairs, outdoor waterfront lighting, generator transfer switches, and whole-home safety inspections for Trenton homeowners along the Detroit River and inland neighborhoods.',
    zipCodes: ['48183'],
    localContext:
      'Trenton features picturesque riverfront homes, modern subdivisions, and established mid-century neighborhoods along West Jefferson and West Road. Proximity to the water creates unique electrical requirements — including outdoor GFCI weatherproofing, marine dock power disconnects, heavy heat pump loads, and manual generator interlock switches to safeguard against storm power outages.',
    permitOffice: {
      department: 'City of Trenton Engineering and Building Department',
      address: '2800 Third St, Trenton, MI 48183',
      phone: '(734) 675-8251',
      inspectionRequirements: [
        'Electrical permits mandatory for service changes, generator interlocks, and outbuilding wiring',
        'Marine dock electrical must comply with NEC Article 555 waterfront standards',
        'Final inspection required for all residential panel heavy-ups',
      ],
      inspectorNotes: 'Trenton inspectors enforce strict weatherproofing and NEMA 3R/4X enclosure ratings on all exterior and river-adjacent installations.',
    },
    housingStock: {
      era: '1950s–1980s Riverfront & Suburban Neighborhoods',
      architecturalStyle: 'Riverfront Estates, Mid-Century Ranches, and Modern Colonials',
      commonWiringTypes: ['100A/150A Breaker Boxes', 'Underground Feeder (UF) Cable to Docks', 'Whole-House Generator Inlets'],
      commonHazards: ['Corrosion on waterfront outlets and disconnects', 'Outdated 100A panels running central AC and pool equipment', 'Improper generator backfeeding without interlocks'],
      modernizationFocus: '200A service heavy-ups, generator transfer interlock switches, and marine-grade outdoor lighting.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: '7 - 12 Miles',
      avgResponseTime: '25 - 40 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'West Rd, Fort St, West Jefferson Ave, King Rd',
    },
    localTestimonial: {
      author: 'Thomas G.',
      neighborhood: 'West Jefferson Waterfront Corridor, Trenton',
      service: 'Generator Interlock & 200A Panel Replacement',
      quote: 'Jim installed a 200-amp panel and a generator interlock switch for our home on the river. During the last big storm outage, we ran our furnace, sump pump, and fridge effortlessly. Master craftsmanship at its best.',
      rating: 5,
    },
    faqs: [
      { question: 'Do you install dock and waterfront electrical feeds in Trenton, MI?', answer: 'Yes. We install weatherproof, corrosion-proof GFCI pedestals, conduit feeds, and safety disconnect switches for boat lifts and waterfront docks in compliance with NEC Article 555.' },
      { question: 'Can you install a portable generator transfer switch in Trenton?', answer: 'Yes. We install code-compliant mechanical interlock kits and generator inlet boxes that let you safely power essential household circuits during outages without backfeeding the utility grid.' },
      { question: 'Do you serve all Trenton neighborhoods?', answer: 'Yes, we provide full coverage throughout Trenton (48183), from West Grange down to the Detroit River waterfront.' },
    ],
  },
  {
    slug: 'detroit-mi',
    name: 'Detroit, Michigan',
    shortName: 'Detroit',
    description:
      'Whipple Electric Inc provides focused residential electrical services to homeowners in Southwest Detroit and adjacent Wayne County communities. Dispatched from our nearby Taylor base, Master Electrician Jim Whipple delivers honest diagnostics, 200A panel upgrades, knob-and-tube inspections, and insurance safety compliance.',
    zipCodes: ['48210', '48209', '48217', '48228'],
    localContext:
      'Southwest Detroit features expansive historic housing stock, multi-family flats, and craftsman homes built in the 1910s to 1940s. Older properties along Vernor Hwy and Michigan Ave frequently retain active knob-and-tube wiring, obsolete 60-amp fuse boxes, ungrounded outlets, and decades of amateur DIY splices. We deliver honest safety evaluations, code violation corrections, and panel upgrades tailored to older urban homes.',
    permitOffice: {
      department: 'City of Detroit Buildings, Safety Engineering, and Environmental Department (BSEED)',
      address: 'Coleman A. Young Municipal Center, 2 Woodward Ave #401, Detroit, MI 48226',
      phone: '(313) 224-2733',
      inspectionRequirements: [
        'Licensed Master Electrician and Electrical Contractor registration with City of Detroit BSEED',
        'Electrical trade permits required for service replacements, re-energization, and circuit rewires',
        'BSEED rough and final inspection sign-offs before meter reconnection by DTE',
      ],
      inspectorNotes: 'Detroit BSEED inspectors verify full compliance with grounding electrode systems, water meter bonding, and Arc-Fault Circuit Interrupter (AFCI) protection on modernized circuits.',
    },
    housingStock: {
      era: '1900s–1940s Historic Urban & Multi-Family Flats',
      architecturalStyle: 'Brick Two-Family Flats, Craftsman Bungalows, and Urban Colonials',
      commonWiringTypes: ['Knob-and-Tube Wiring', '60A Fuse Blocks', 'Rigid Metal Conduit (BX/EMT)', 'Ungrounded Two-Wire Circuits'],
      commonHazards: ['Oversized 30A fuses on 14AWG branch lines', 'Hazardous uncontained wire splices in basements', 'Lack of grounding creating shock hazards'],
      modernizationFocus: '60A-to-100A/200A panel upgrades, ungrounded circuit rewiring, and pre-purchase home safety inspections.',
    },
    dispatchDetails: {
      distanceFromTaylorHQ: '8 - 14 Miles',
      avgResponseTime: '30 - 45 Minutes',
      emergencyAvailable: true,
      serviceCorridor: 'I-94, I-75, Michigan Ave, Vernor Hwy, Springwells St',
    },
    localTestimonial: {
      author: 'Maria C.',
      neighborhood: 'Vernor & Springwells Corridor, Southwest Detroit',
      service: '60-Amp Fuse Box Replacement & Safety Audit',
      quote: 'Jim helped us buy our historic two-family home by inspecting the dangerous old wiring and replacing the obsolete 60A fuse box with a modern panel. Honest, experienced, and very patient in explaining everything.',
      rating: 5,
    },
    faqs: [
      { question: 'Which specific areas of Detroit do you service?', answer: 'We focus our residential services on Southwest Detroit and adjacent neighborhoods within Zip Codes 48209, 48210, 48217, and 48228, where we can provide prompt dispatch from our Taylor headquarters.' },
      { question: 'Can you inspect older wiring in a Detroit home before I buy?', answer: 'Yes. We perform pre-purchase electrical evaluations to identify dangerous wiring, ungrounded circuits, overloaded panels, and provide written estimates for required safety repairs.' },
      { question: 'Do you upgrade 60-amp fuse boxes in Detroit homes?', answer: 'Yes. We replace outdated 60-amp fuse boxes with modern 100-amp or 200-amp breaker panels that satisfy modern homeowner insurance and appliance demands.' },
    ],
  },
];

export function getLocation(slug: string): LocationDetail | undefined {
  return locations.find((l) => l.slug === slug);
}
