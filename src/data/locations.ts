export interface LocationDetail {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  zipCodes: string[];
  localContext: string;
  faqs: { question: string; answer: string }[];
}

export const locations: LocationDetail[] = [
  {
    slug: 'taylor-mi',
    name: 'Taylor, Michigan',
    shortName: 'Taylor',
    description:
      'Whipple Electric Inc is headquartered in Taylor, Michigan (14800 Burr St), providing licensed residential electrical services for over 40 years. Led by Master Electrician Jim Whipple, we specialize in 200-amp electrical panel upgrades, emergency circuit breaker troubleshooting, modern GFCI grounding, and code-compliant rewiring across all Taylor neighborhoods along Telegraph Rd, Eureka Rd, and Goddard Rd.',
    zipCodes: ['48180', '48161'],
    localContext:
      'Taylor features a large concentration of post-war 1950s ranch homes and expanding subdivisions. Many original homes operate on obsolete 60-amp or 100-amp fuse/breaker boxes that cannot handle modern appliances, central air conditioning, or Level 2 EV chargers. Our Taylor electrical team provides rapid on-site diagnostics, pulls all required City of Taylor municipal electrical permits, and ensures 100% compliance with the Michigan Residential Electrical Code.',
    faqs: [
      { question: 'Where is Whipple Electric Inc based in Taylor, MI?', answer: 'Our physical headquarters is at 14800 Burr St, Taylor, MI 48180. Because we are locally based right here in Taylor, our Master Electrician can respond rapidly to urgent electrical repairs and estimate consultations throughout Wayne County.' },
      { question: 'Do you handle City of Taylor electrical permits and inspections?', answer: 'Yes. For major electrical upgrades — including 200-amp service replacements, sub-panel additions, and whole-home rewiring — we submit the permit applications directly to the City of Taylor Building Department and coordinate final inspection sign-offs.' },
      { question: 'Why are breakers constantly tripping in older Taylor ranch homes?', answer: 'Mid-century Taylor homes were wired when electrical demands were low. Running modern microwaves, space heaters, computers, and AC units simultaneously easily overloads 15-amp branch circuits. We perform root-cause circuit tracing and balance electrical loads safely.' },
      { question: 'Can you upgrade ungrounded 2-prong outlets in Taylor homes?', answer: 'Yes. Many 1950s homes lack ground wires. We install code-compliant GFCI receptacles and grounded wiring so you can safely plug in modern sensitive electronics and heavy appliances.' },
    ],
  },
  {
    slug: 'southgate-mi',
    name: 'Southgate, Michigan',
    shortName: 'Southgate',
    description:
      'Looking for a trusted residential electrician in Southgate, MI? Whipple Electric Inc provides certified electrical repairs, 200-amp service upgrades, troubleshooting, and indoor/outdoor lighting installations for Southgate homeowners. Dispatched directly from our nearby Taylor headquarters, we deliver prompt, code-compliant workmanship backed by 40+ years of Master Electrician experience.',
    zipCodes: ['48195'],
    localContext:
      'Southgate comprises established neighborhoods built predominantly between the 1950s and 1970s. Homeowners frequently encounter aging circuit breaker boxes, flickering lights when central AC kicks on, and ungrounded receptacles in bedrooms and living rooms. We deliver systematic electrical upgrades tailored to Southgate housing stock, including dedicated 240V appliance circuits and whole-home safety inspections.',
    faqs: [
      { question: 'How quickly can an electrician arrive in Southgate, MI?', answer: 'Because our headquarters is directly adjacent in Taylor, MI, we offer prompt dispatch to Southgate residents (Zip Code 48195), often accommodating urgent electrical service calls within hours.' },
      { question: 'What are the most common electrical issues in Southgate homes?', answer: 'Common issues include overloaded 100-amp panels, outdated Federal Pacific or Zinsco breaker boxes, loose neutral connections causing light dimming, and the need for dedicated circuits for kitchen appliances and hot tubs.' },
      { question: 'Do you install EV home charging stations in Southgate?', answer: 'Yes. We evaluate your current panel capacity and install dedicated 240V NEMA 14-50 outlets or hardwired Level 2 electric vehicle (EV) charging stations with proper load protection.' },
    ],
  },
  {
    slug: 'allen-park-mi',
    name: 'Allen Park, Michigan',
    shortName: 'Allen Park',
    description:
      'Whipple Electric Inc is the premier residential electrical contractor serving Allen Park, Michigan. From historic brick bungalows to mid-century ranches, Master Electrician Jim Whipple brings over 40 years of hands-on expertise to every electrical troubleshooting, panel replacement, recessed lighting, and whole-home rewiring project.',
    zipCodes: ['48101'],
    localContext:
      'Allen Park features charming brick bungalows and ranches, many built in the 1940s and 1950s. A significant number still contain older two-wire ungrounded branch circuits, aging service drops, or panels that have reached the end of their operational lifespan. We specialize in bringing older Allen Park properties up to modern National Electrical Code (NEC) standards without damaging historic plaster or interior finishes.',
    faqs: [
      { question: 'Are you licensed to perform electrical work in Allen Park, MI?', answer: 'Yes. Whipple Electric Inc is fully licensed as a Michigan Electrical Contractor, operated by a certified Master Electrician, and fully insured with comprehensive liability protection.' },
      { question: 'Can you rewire an older Allen Park bungalow without tearing down plaster walls?', answer: 'Yes. We utilize specialized fishing techniques and modern tools to route new copper wiring and install junction boxes with minimal wall disruption, preserving your home interior.' },
      { question: 'What should I do if my Allen Park home has a fuse box?', answer: 'Fuse boxes cannot safely support modern electrical loads and frequently present fire insurance liabilities. We replace obsolete fuse boxes with modern, expandable 200-amp circuit breaker panels with whole-home surge protection.' },
    ],
  },
  {
    slug: 'dearborn-mi',
    name: 'Dearborn, Michigan',
    shortName: 'Dearborn',
    description:
      'Need an experienced, licensed electrician in Dearborn, Michigan? Whipple Electric Inc delivers expert residential electrical troubleshooting, historic home rewiring, 200A breaker box replacements, and custom lighting installations across West Dearborn, East Dearborn, and surrounding neighborhoods.',
    zipCodes: ['48120', '48124', '48126', '48128'],
    localContext:
      'Dearborn possesses a rich and diverse architectural heritage, ranging from historic pre-war brick homes to mid-century developments. These residences often contain complex legacy wiring — such as knob-and-tube remnants, rigid metal conduit systems, and ungrounded circuits. Master Electrician Jim Whipple understands the intricacies of Dearborn homes and provides code-compliant modernization that protects property value.',
    faqs: [
      { question: 'Do you work on historic homes with knob-and-tube wiring in Dearborn?', answer: 'Yes. We perform comprehensive inspections to locate active knob-and-tube wiring, evaluate insulation degradation, and safely replace hazardous runs with modern grounded NM cable.' },
      { question: 'Do you service all areas of Dearborn, MI?', answer: 'Yes. We serve homeowners across West Dearborn, East Dearborn, the Springwells area, and neighborhoods surrounding Ford Road and Michigan Avenue.' },
      { question: 'Can you install recessed lighting in Dearborn homes with plaster ceilings?', answer: 'Yes. We use specialized remodel-rated LED fixtures and precise cutting equipment to install recessed pot lights cleanly in older plaster and lath ceilings.' },
    ],
  },
  {
    slug: 'dearborn-heights-mi',
    name: 'Dearborn Heights, Michigan',
    shortName: 'Dearborn Heights',
    description:
      'Whipple Electric Inc delivers dependable residential electrical services to homeowners in Dearborn Heights, MI. Whether you need electrical panel upgrades, kitchen remodel wiring, basement electrical buildouts, or fast troubleshooting, our licensed Master Electrician ensures safe, prompt, code-compliant solutions.',
    zipCodes: ['48125', '48127'],
    localContext:
      'Dearborn Heights features extensive post-war residential subdivisions, split-levels, and ranches along Beech Daly and Telegraph corridors. Many families are updating kitchens, remodeling basements, or adding modern HVAC systems that demand upgraded sub-panels, dedicated appliance circuits, and Arc-Fault Circuit Interrupter (AFCI) safety breakers.',
    faqs: [
      { question: 'Do you handle kitchen and bathroom remodel electrical in Dearborn Heights?', answer: 'Yes. We coordinate with homeowners and remodeling contractors to install dedicated GFCI circuits, under-cabinet LED task lighting, ventilation exhaust fans, and modern island receptacles.' },
      { question: 'What electrical permits are needed in Dearborn Heights, MI?', answer: 'Panel upgrades, service drop increases, and adding new circuits require permits from the Dearborn Heights Building and Engineering Department. We manage the permitting process from start to finish.' },
      { question: 'Why does my breaker buzz when running multiple appliances in Dearborn Heights?', answer: 'A buzzing breaker indicates either severe mechanical vibration from heavy overloads or arcing contacts inside the breaker. Turn off the affected circuit and contact our Master Electrician immediately for inspection.' },
    ],
  },
  {
    slug: 'romulus-mi',
    name: 'Romulus, Michigan',
    shortName: 'Romulus',
    description:
      'Looking for a skilled residential electrician in Romulus, MI? Whipple Electric Inc provides complete electrical troubleshooting, 200-amp panel upgrades, pole barn wiring, garage sub-panels, and lighting installations throughout Romulus and the Detroit Metro Airport corridor.',
    zipCodes: ['48174'],
    localContext:
      'Romulus features a diverse blend of suburban subdivisions and spacious rural properties with workshops, detached garages, and pole barns. Properties located near flight paths and transport corridors frequently experience ground and structural vibrations that can loosen screw terminals in panels over decades. We provide comprehensive safety checkups, terminal torquing, and high-amperage sub-panel runs.',
    faqs: [
      { question: 'Can you wire a detached garage or pole barn in Romulus, MI?', answer: 'Yes. We trench underground conduit, run heavy-gauge feeder wire from your main house panel, and install dedicated sub-panels with breakers for heavy tools, welders, lighting, and vehicle lifts.' },
      { question: 'Do you provide emergency electrical troubleshooting in Romulus?', answer: 'Yes. If you experience sudden power loss on half your home circuits, smoke smells near a breaker box, or buzzing switches, we provide 24-hour urgent response.' },
      { question: 'Are you familiar with Romulus residential electrical codes?', answer: 'Yes. We have worked in Wayne County for over 40 years and ensure all work adheres to local Romulus code ordinances and National Electrical Code standards.' },
    ],
  },
  {
    slug: 'wyandotte-mi',
    name: 'Wyandotte, Michigan',
    shortName: 'Wyandotte',
    description:
      'Homeowners in Wyandotte, Michigan rely on Whipple Electric Inc for professional residential electrical solutions. From historic riverfront homes to classic bungalows, Master Electrician Jim Whipple delivers meticulous electrical troubleshooting, 200A service upgrades, circuit repairs, and custom lighting.',
    zipCodes: ['48192'],
    localContext:
      'Wyandotte is a historic Detroit River community boasting classic architecture, turn-of-the-century two-story homes, and mid-century residences. Many properties still rely on legacy fuse boxes, ungrounded wiring systems, or outdated meters. We preserve the architectural character of Wyandotte homes while bringing their electrical safety, grounding, and ampacity up to contemporary living standards.',
    faqs: [
      { question: 'Can you replace an old fuse box in a historic Wyandotte home?', answer: 'Yes. We specialize in converting century-old fuse boxes into modern 100A or 200A circuit breaker panels with clean wiring, labeled circuits, and surge protection.' },
      { question: 'Do you install outdoor waterfront and security lighting in Wyandotte?', answer: 'Yes. We install weather-resistant, corrosion-proof outdoor lighting, motion sensors, and landscape illumination designed to withstand riverfront climate conditions.' },
      { question: 'How do I know if my Wyandotte home wiring is safe?', answer: 'We conduct full Electrical Safety Inspections that test branch circuit grounding, panel connections, GFCI functionality in kitchens and baths, and check for hidden heat or arcing.' },
    ],
  },
  {
    slug: 'lincoln-park-mi',
    name: 'Lincoln Park, Michigan',
    shortName: 'Lincoln Park',
    description:
      'Whipple Electric Inc provides reliable, licensed residential electrical services to homeowners across Lincoln Park, MI. From panel upgrades and breaker repairs to outlet grounding and ceiling fan installation, our local team brings 40+ years of Master Electrician expertise directly to your door.',
    zipCodes: ['48146'],
    localContext:
      'Lincoln Park features compact, post-war brick and frame ranches and bungalows built during the 1940s and 1950s. Common electrical challenges include undersized 60-amp services, double-tapped circuit breakers in crowded panels, and ungrounded two-prong outlets throughout bedrooms. We provide affordable, safety-first electrical modernization for Lincoln Park families.',
    faqs: [
      { question: 'How much does it cost to upgrade an electrical panel in Lincoln Park, MI?', answer: 'Panel upgrade costs depend on whether your service drop needs upgrading from 100A to 200A, the meter base condition, and permit fees. We provide clear, straightforward estimates on-site before starting any work.' },
      { question: 'Can you fix dead outlets or tripping breakers in Lincoln Park?', answer: 'Yes. We utilize systematic diagnostic meters to track down open neutrals, short circuits, or worn-out receptacle contacts and repair them safely.' },
      { question: 'Do you install GFCI outlets for Lincoln Park home sales?', answer: 'Yes. City inspections and home purchase appraisals often require GFCI protection near sinks and in garages. We install code-compliant GFCI outlets quickly to satisfy inspection contingencies.' },
    ],
  },
  {
    slug: 'trenton-mi',
    name: 'Trenton, Michigan',
    shortName: 'Trenton',
    description:
      'Looking for a top-rated residential electrician in Trenton, MI? Whipple Electric Inc provides expert electrical panel upgrades, emergency repairs, outdoor lighting, and whole-home safety inspections for Trenton homeowners along the Detroit River and inland neighborhoods.',
    zipCodes: ['48183'],
    localContext:
      'Trenton features picturesque riverfront homes, modern subdivisions, and established mid-century neighborhoods. Proximity to water creates specific electrical demands — including outdoor GFCI weatherproofing, marine dock electrical feeds, heavy heat pump/AC electrical demands, and whole-home backup generator transfer switch connections.',
    faqs: [
      { question: 'Do you install outdoor dock and waterfront electrical feeds in Trenton, MI?', answer: 'Yes. We install outdoor-rated, waterproof GFCI pedestals, conduit, and safety disconnects for boat lifts, docks, and patio entertaining spaces in Trenton.' },
      { question: 'Can you install a manual generator transfer switch in Trenton?', answer: 'Yes. We install code-compliant interlock kits and generator transfer switches so you can safely power your furnace, refrigerator, and sump pump during storm outages without backfeeding the grid.' },
      { question: 'Do you serve all Trenton neighborhoods?', answer: 'Yes, we provide full coverage throughout Trenton (Zip Code 48183), from West Grange down to the riverfront.' },
    ],
  },
  {
    slug: 'detroit-mi',
    name: 'Detroit, Michigan',
    shortName: 'Detroit',
    description:
      'Whipple Electric Inc provides focused residential electrical services to homeowners in Southwest Detroit and adjacent neighborhoods. Dispatched from our nearby Taylor base, Master Electrician Jim Whipple delivers honest diagnostics, 200A panel upgrades, and historic home wiring safety inspections.',
    zipCodes: ['48210', '48209', '48217', '48228'],
    localContext:
      'Detroit boasts expansive historic housing stock alongside newly renovated properties. Older homes in Southwest Detroit frequently feature active knob-and-tube wiring, ungrounded electrical systems, or hazardous DIY modifications completed over decades. We provide honest safety evaluations, code violation corrections, and panel upgrades tailored to older urban homes.',
    faqs: [
      { question: 'Which specific areas of Detroit do you service?', answer: 'We focus our residential services on Southwest Detroit and adjacent neighborhoods within Zip Codes 48209, 48210, 48217, and 48228, where we can provide prompt dispatch from our Taylor headquarters.' },
      { question: 'Can you inspect older wiring in a Detroit home before I buy?', answer: 'Yes. We perform pre-purchase electrical evaluations to identify dangerous wiring, ungrounded circuits, overloaded panels, and estimate what will be needed to bring the home up to safety code.' },
      { question: 'Do you upgrade 60-amp fuse boxes in Detroit homes?', answer: 'Yes. We replace outdated 60-amp fuse boxes with modern 100-amp or 200-amp breaker panels that meet modern insurance and appliance requirements.' },
    ],
  },
];

export function getLocation(slug: string): LocationDetail | undefined {
  return locations.find((l) => l.slug === slug);
}
