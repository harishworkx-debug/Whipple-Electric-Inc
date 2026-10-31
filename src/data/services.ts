export interface TechnicalTopic {
  title: string;
  keywordTarget: string;
  summary: string;
  technicalDetails: string;
  necCodeReference?: string;
}

export interface ServiceCostAndPermits {
  timeline: string;
  permitRequired: boolean;
  permitDetails: string;
  keyCostDrivers: string[];
  inspectionMilestones: string[];
}

export interface ServiceDetail {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: string;
  imageQuery: string;
  searchIntentKeywords: string[];
  technicalTopics: TechnicalTopic[];
  costAndPermits: ServiceCostAndPermits;
  benefits: string[];
  signs: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'electrical-troubleshooting',
    name: 'Electrical Troubleshooting and Repair',
    shortName: 'Electrical Troubleshooting',
    description: 'Systematic diagnosis and precision repair of electrical faults — flickering lights, dead outlets, buzzing breakers, and intermittent power loss.',
    longDescription:
      'Electrical faults can be elusive, frustrating, and potentially hazardous if left unresolved. Our systematic troubleshooting process goes far beyond swapping parts. Utilizing True-RMS digital multimeters, thermal infrared imaging, and circuit tracing analyzers, Master Electrician Jim Whipple isolates the exact root cause behind intermittent failures, voltage drops, and loose neutrals across Downriver homes.',
    icon: 'Search',
    imageQuery: 'electrician troubleshooting electrical panel',
    searchIntentKeywords: [
      'electrical troubleshooting Taylor MI',
      'flickering lights electrician Downriver',
      'intermittent power loss diagnosis',
      'open neutral wire repair',
      'burning smell electrical outlet',
      'tripping breaker diagnostic',
    ],
    technicalTopics: [
      {
        title: 'Flickering & Dimming Lights Diagnosis',
        keywordTarget: 'flickering lights diagnostic',
        summary: 'Pinpointing voltage drop, loose neutral conductors, or failing utility connections.',
        technicalDetails: 'When lights flicker when the refrigerator, furnace blower, or air conditioner kicks in, it indicates excessive inrush voltage drop or a high-resistance loose neutral connection. We measure branch circuit voltage under simulated load conditions to verify that terminal lugs, busbars, and wire splices remain within the safe NEC 3% voltage drop allowance.',
        necCodeReference: 'NEC 210.19(A) Informational Note (Voltage Drop)',
      },
      {
        title: 'Open Neutral & Multi-Wire Branch Circuit Tracing',
        keywordTarget: 'open neutral repair',
        summary: 'Resolving severe 80V/160V voltage swings that destroy household electronics.',
        technicalDetails: 'An open neutral on a 120/240V multi-wire branch circuit (MWBC) causes floating voltages where some devices receive dangerously low power while others receive destructive overvoltage. We trace branch lines back to the shared neutral splice in junction boxes and panels, ensuring safe continuous copper bonding.',
        necCodeReference: 'NEC 300.13(B) (Device Removal on Multi-Wire Circuits)',
      },
      {
        title: 'Hot Outlets & Thermal Infrared Diagnostics',
        keywordTarget: 'hot outlet burning smell',
        summary: 'Detecting resistive heating and arcing behind finished walls before fire breaks out.',
        technicalDetails: 'Outlets or switch plates that feel warm indicate oxidized copper wire, loose terminal screws, or worn internal spring brass contacts causing micro-arcing. We utilize calibrated thermal infrared cameras to visualize heat anomalies inside junction boxes without tearing down plaster or drywall.',
      },
      {
        title: 'Intermittent Dead Outlets & GFCI Tripping Loops',
        keywordTarget: 'dead outlets troubleshooting',
        summary: 'Isolating downstream ground faults and hidden tripped GFCI devices.',
        technicalDetails: 'Frequently, dead outlets in bedrooms or garages are wired downstream from an unnoticed tripped GFCI receptacle in a bathroom, basement, or outdoor box. We map out branch circuit daisy-chains and rectify hidden junction splices to restore continuous power.',
      },
    ],
    costAndPermits: {
      timeline: '1 to 3 Hours for Standard Diagnostics & Immediate Repairs',
      permitRequired: false,
      permitDetails: 'Standard troubleshooting and repair of existing branch circuits do not require municipal permits. If a major subpanel replacement or new home run circuit is required, permits are pulled directly.',
      keyCostDrivers: [
        'Accessibility of hidden junction boxes behind drywall or in crawlspaces',
        'Intermittent nature of the fault (frequency of symptoms)',
        'Extensiveness of wire replacement or device upgrading required',
      ],
      inspectionMilestones: [
        'Initial voltage and polarity line testing at affected fixtures',
        'Thermal imaging scan of main breaker panel and branch terminals',
        'Full load testing under operating conditions after repair completion',
      ],
    },
    benefits: [
      'True-RMS multimeter and thermal infrared diagnostic accuracy',
      'Systematic root-cause identification — no temporary guesswork',
      'Direct work by licensed Master Electrician with 40+ years experience',
      'Upfront transparent explanation and pricing before any work proceeds',
    ],
    signs: [
      'Circuit breakers trip repeatedly without an obvious cause',
      'Lights flicker or dim when heavy appliances turn on',
      'Outlets or switches feel warm to the touch or emit faint buzzing',
      'Burning plastic or fishy electrical odors near outlets or the breaker panel',
      'Multiple outlets on the same wall stop delivering power simultaneously',
      'Visible arcing or sparking when plugging in electrical devices',
    ],
    process: [
      { title: 'Symptom & History Assessment', description: 'We review when the issue started, what appliances run concurrently, and recent renovations.' },
      { title: 'Precision Meter & Thermal Testing', description: 'We test circuit voltage drop, continuity, insulation resistance, and thermal profiles under load.' },
      { title: 'Clear Root-Cause Explanation', description: 'We explain exactly what failed (loose neutral, worn contacts, internal ground fault) and provide repair options.' },
      { title: 'Safe Repair & Load Verification', description: 'We execute code-compliant repairs with commercial-grade components and perform final voltage verification.' },
    ],
    faqs: [
      { question: 'Why do my lights flicker when the central air conditioner turns on?', answer: 'Flickering during compressor start-up is usually caused by momentary voltage drop. While a minor dip is common, prominent flickering indicates loose service entrance lugs, undersized feeder cables, or an aging breaker connection that needs tightening or replacement.' },
      { question: 'What does it mean when half the power in my house goes out?', answer: 'This almost always indicates the loss of one 120V "leg" of your 240V main service. The issue may originate at your main breaker or the DTE Energy utility transformer connection outside. We test both incoming phases to determine whether the utility or your panel is at fault.' },
      { question: 'Can you troubleshoot an intermittent electrical issue that only happens occasionally?', answer: 'Yes. Intermittent issues are typically caused by thermal expansion loosening a terminal screw or a vibrating appliance jarring a splice. We use circuit analyzers, current clamps, and load testing to pinpoint the fault even when it is not actively failing.' },
      { question: 'Is a warm wall outlet an immediate fire hazard?', answer: 'Yes. Wall outlets should never feel hot to the touch. Heat indicates high electrical resistance and micro-arcing inside the receptacle box, which can ignite framing studs or insulation. Turn off the circuit breaker immediately and call us.' },
    ],
  },
  {
    slug: 'electrical-panel-upgrades',
    name: 'Electrical Panel Upgrades',
    shortName: 'Panel Upgrades',
    description: 'Heavy-up your home to modern 200-amp service. Replace obsolete fuse boxes, Federal Pacific, or Zinsco panels with code-compliant Square D or Eaton equipment.',
    longDescription:
      'Your electrical panel is the central nervous system of your home. Homes built before 1980 across Taylor and Downriver were designed for 60-amp or 100-amp loads — completely inadequate for today’s central AC, induction ranges, electric vehicle (EV) chargers, and high-draw appliances. We replace dangerous fuse boxes and recalled panels with modern 200-amp service, coordinating municipal permits and DTE utility disconnects from start to finish.',
    icon: 'LayoutGrid',
    imageQuery: 'electrical panel breaker box upgrade',
    searchIntentKeywords: [
      'electrical panel upgrade Taylor MI',
      '100 amp to 200 amp upgrade cost Downriver',
      'fuse box replacement Wayne County',
      'Federal Pacific panel replacement',
      'Zinsco breaker box fire hazard',
      'DTE meter disconnect electrical permit',
    ],
    technicalTopics: [
      {
        title: '100-Amp to 200-Amp Heavy-Up Upgrades',
        keywordTarget: '100 amp to 200 amp upgrade',
        summary: 'Doubling household electrical capacity for modern HVAC, EV chargers, and appliances.',
        technicalDetails: 'Modern electrical demands require calculating whole-home load per NEC Article 220. Upgrading to 200A involves replacing the outdoor meter socket, installing 2/0 copper or 4/0 aluminum service entrance conductors, a new 40-circuit indoor panel, and dual 8-foot copper grounding electrodes spaced 6 feet apart.',
        necCodeReference: 'NEC Article 220 (Branch-Circuit, Feeder, and Service Load Calculations)',
      },
      {
        title: 'Fuse Box to Modern Circuit Breaker Conversion',
        keywordTarget: 'fuse box replacement',
        summary: 'Eliminating outdated screw-in Edison fuses and double-tapped fire hazards.',
        technicalDetails: 'Fuse boxes from the 1940s and 1950s pose severe risks when homeowners install oversized 20A or 30A fuses on 14AWG lighting circuits to prevent blowing. We systematically map each circuit, remove the obsolete fuse block, install modern arc-fault and ground-fault circuit breakers, and balance phase loads cleanly.',
      },
      {
        title: 'Federal Pacific Stab-Lok & Zinsco Safety Replacements',
        keywordTarget: 'Federal Pacific panel replacement',
        summary: 'Replacing defective panels documented to fail to trip during dead shorts.',
        technicalDetails: 'Federal Pacific Stab-Lok panels and Zinsco/Sylvania panels have documented breaker failure rates exceeding 25% to 60% during direct overcurrent conditions, often melting directly to the aluminum busbar. Many Michigan insurance carriers refuse coverage until these hazard panels are replaced.',
        necCodeReference: 'Consumer Product Safety Commission (CPSC) Advisory on FPE Panels',
      },
      {
        title: 'DTE Energy Utility Coordination & Municipal Permitting',
        keywordTarget: 'DTE meter disconnect permit',
        summary: 'Turnkey handling of Wayne County building permits and power utility reconnects.',
        technicalDetails: 'A 200-amp heavy-up requires pulling permits with the local city building department (e.g., City of Taylor, City of Southgate, BSEED in Detroit), coordinating the morning meter disconnect with DTE Energy, completing the panel change, and securing inspector sign-off the same day so power is restored before evening.',
      },
    ],
    costAndPermits: {
      timeline: '1 Full Day (Typically 8:00 AM to 4:00 PM same-day power restoration)',
      permitRequired: true,
      permitDetails: 'Mandatory municipal electrical permit and utility coordination. We submit all applications, pay permit fees, and meet the city electrical inspector on site.',
      keyCostDrivers: [
        'Overhead vs. underground service lateral from DTE utility pole',
        'Need for meter socket replacement or service mast height extension',
        'Subpanel additions for detached garages or finished basements',
        'Upgrading grounding electrode conductors to dual 8-foot copper rods',
      ],
      inspectionMilestones: [
        'Morning DTE meter unlock and service de-energization',
        'Rough & service grounding electrode inspection by municipal inspector',
        'Final inspector sticker sign-off and DTE permanent meter reconnect/tagging',
      ],
    },
    benefits: [
      'Substantial 200-amp capacity to power modern central AC, heat pumps, and EV chargers',
      'Elimination of fire hazards associated with FPE Stab-Lok, Zinsco, and fuse boxes',
      'Whole-home surge protection integrated directly into the panel to protect sensitive electronics',
      'Full compliance with Michigan Residential Code and seamless home insurance clearance',
    ],
    signs: [
      'Your home still operates on screw-in fuses or a 60-amp/100-amp service',
      'Breakers trip frequently when the microwave and hairdryer or AC run together',
      'Your panel is an uninsurable brand (Federal Pacific Stab-Lok, Zinsco, Bulldog Pushmatic)',
      'You are adding a Level 2 EV charging station, central heat pump, or hot tub',
      'The panel enclosure feels warm, smells of hot ozone, or shows rust and corrosion',
      'Flickering lights occur across multiple rooms during heavy appliance cycling',
    ],
    process: [
      { title: 'Electrical Load Calculation', description: 'We calculate your household wattage demand according to NEC Article 220 to determine optimal service sizing.' },
      { title: 'Permitting & Utility Scheduling', description: 'We file for city electrical permits and schedule the temporary meter disconnect with DTE Energy.' },
      { title: 'Panel Installation & Grounding', description: 'We mount the 200A breaker panel, install dual 8ft copper ground rods, wire surge protection, and label all circuits.' },
      { title: 'Inspection & Same-Day Reconnection', description: 'The municipal inspector inspects and signs off on the installation, and DTE restores full power before dinner.' },
    ],
    faqs: [
      { question: 'How much does a 200-amp electrical panel upgrade cost in Taylor and Downriver?', answer: 'A complete residential 200-amp panel upgrade in the Downriver area generally ranges between $2,200 and $3,800 depending on service mast height, overhead vs underground utility feeds, meter base replacement, and municipal permit fees. We provide clear, itemized upfront estimates on site.' },
      { question: 'Will my power be shut off all day during a panel upgrade?', answer: 'Power is typically off between 8:30 AM and 3:30 PM while our Master Electrician installs the new service entrance cable, panel, and grounding system. Power is restored the very same afternoon once the municipal electrical inspector completes the sign-off.' },
      { question: 'Why won’t insurance companies write policies for Federal Pacific or fuse panels?', answer: 'Extensive testing has demonstrated that Federal Pacific Stab-Lok breakers fail to trip up to 60% of the time during direct short circuits, acting as fire hazards. Fuse boxes are prone to over-fusing. Most Michigan insurers require certified replacement before binding coverage.' },
      { question: 'Do I get whole-home surge protection with a new panel?', answer: 'Yes! Current Michigan Residential Electrical Code (NEC Article 242) requires Type 1 or Type 2 whole-home surge protective devices (SPDs) on all new service panel installations to protect smart TVs, computers, and appliances from utility voltage spikes.' },
    ],
  },
  {
    slug: 'circuit-breaker-repair',
    name: 'Circuit Breaker Repair and Replacement',
    shortName: 'Circuit Breaker Repair',
    description: 'Diagnose and replace faulty circuit breakers that trip repeatedly, buzz, fail to reset, or overheat on aging busbars.',
    longDescription:
      'A circuit breaker that trips constantly, feels hot, or will not reset is warning you of an active electrical problem. We identify whether the issue is a genuine branch circuit overload, an arc fault, a ground short, or a degraded breaker that has reached the end of its mechanical lifespan. We install exact OEM manufacturer-rated breakers (Square D, Eaton, Siemens, GE) to ensure code compliance and maximum safety.',
    icon: 'ToggleRight',
    imageQuery: 'circuit breaker replacement electrical',
    searchIntentKeywords: [
      'circuit breaker keeps tripping Taylor MI',
      'breaker won\'t reset Downriver',
      'buzzing circuit breaker repair',
      'circuit breaker replacement cost',
      'short circuit vs overload diagnosis',
      'AFCI breaker tripping troubleshooting',
    ],
    technicalTopics: [
      {
        title: 'Overload vs. Short Circuit vs. Ground Fault Diagnostics',
        keywordTarget: 'breaker keeps tripping',
        summary: 'Determining the exact electrical mechanism triggering the breaker trip.',
        technicalDetails: 'An overload occurs when current draw gradually exceeds breaker ampacity (e.g., 18A on a 15A breaker), tripping via bimetallic thermal strip after minutes. A short circuit (hot touching neutral) creates an instantaneous magnetic trip. A ground fault (hot touching bare ground) triggers instantaneous tripping. We use clamp meters to measure live amperage and megohmmeters to check conductor insulation.',
        necCodeReference: 'NEC 240.4 (Protection of Conductors Against Overcurrent)',
      },
      {
        title: 'AFCI & GFCI Dual-Function Breaker Troubleshooting',
        keywordTarget: 'AFCI breaker tripping',
        summary: 'Diagnosing micro-arcing, shared neutrals, or faulty appliance electronic filters.',
        technicalDetails: 'Modern Arc-Fault Circuit Interrupters (AFCIs) detect hazardous electrical arcing signatures behind walls. However, legacy multi-wire branch circuits with shared neutrals or damaged motor brushes on vacuum cleaners can trigger nuisance tripping. We isolate circuit legs to identify whether the cause is arcing wiring or appliance interference.',
        necCodeReference: 'NEC 210.12 (Arc-Fault Circuit-Interrupter Protection)',
      },
      {
        title: 'Panel Busbar Pitting & Heat Damage Restoration',
        keywordTarget: 'buzzing circuit breaker busbar',
        summary: 'Repairing burned busbar stabs caused by loose breaker clip tension.',
        technicalDetails: 'When a breaker clips loosely to the copper or aluminum busbar, high electrical resistance produces localized temperatures exceeding 250°F, creating black oxidation and pitting. If unaddressed, the entire panel interior can be ruined. We clean undamaged stabs, apply dielectric compound, or relocate circuits to pristine busbar spaces.',
      },
      {
        title: 'Safe Replacement with Correct Manufacturer-Listed Breakers',
        keywordTarget: 'circuit breaker replacement',
        summary: 'Eliminating dangerous mismatched breakers that violate panel UL listing.',
        technicalDetails: 'Forcing a GE breaker into an Eaton panel or an improper thin tandem breaker into a non-CTL slot violates UL listing and NEC 110.3(B). We carry genuine Square D QO, Homeline, Eaton BR/CH, and Siemens breakers engineered specifically for your panel brand.',
        necCodeReference: 'NEC 110.3(B) (Installation and Use of Listed Equipment)',
      },
    ],
    costAndPermits: {
      timeline: '1 to 2 Hours for Diagnostic and Breaker Replacement',
      permitRequired: false,
      permitDetails: 'Individual breaker replacements do not require municipal building permits unless part of a wider panel modification or new circuit run.',
      keyCostDrivers: [
        'Single-pole (120V) vs. double-pole (240V) vs. dual-function AFCI/GFCI breaker type',
        'Need to dress or relocate busbar connections due to thermal damage',
        'Tracing hidden downstream branch shorts behind drywall',
      ],
      inspectionMilestones: [
        'Amp-clamp draw measurement under full household branch load',
        'Thermal scan of breaker contacts and terminal lug torquing',
        'Trip-test verification of GFCI/AFCI sensing electronics',
      ],
    },
    benefits: [
      'Rapid isolation of true circuit overloads versus dangerous internal short circuits',
      'Use of 100% genuine OEM factory-matched breakers (Square D, Eaton, Siemens)',
      'Elimination of burning smells, buzzing noises, and nuisance trip interruptions',
      'Safety verification performed with True-RMS digital meters and thermal imaging',
    ],
    signs: [
      'A circuit breaker trips immediately upon flipping the switch to the ON position',
      'The breaker lever feels spongy, loose, or fails to latch into the ON position',
      'Noticeable humming, clicking, or buzzing sounds emanating from inside the panel',
      'The breaker body or surrounding metal cover feels noticeably hot to the touch',
      'Visible scorching or melted plastic around a breaker casing',
      'Appliances on the circuit turn off unpredictably when multiple loads run',
    ],
    process: [
      { title: 'Circuit Load Testing', description: 'We clamp an amp meter around the branch conductor to measure exact current draw under operating conditions.' },
      { title: 'Short Circuit Isolation', description: 'We disconnect connected loads and test continuity between hot, neutral, and ground to isolate branch faults.' },
      { title: 'Busbar Inspection', description: 'We unseat the breaker and inspect the underlying panel busbar stabs for signs of pitting, arcing, or corrosion.' },
      { title: 'OEM Replacement & Torquing', description: 'We install the correct OEM-listed breaker, torque terminal screws to manufacturer spec, and test operation.' },
    ],
    faqs: [
      { question: 'Why won’t my circuit breaker reset even after I unplug everything?', answer: 'A breaker that refuses to reset usually indicates one of three things: an internal short circuit in wall wiring (such as a nail through a wire), a failed breaker with damaged internal latching springs, or failure to firmly push the lever fully to the "OFF" position before flipping back to "ON".' },
      { question: 'Why does my circuit breaker buzz when the dryer or microwave runs?', answer: 'Buzzing is caused by either 60Hz alternating-current vibration under extreme electrical overload or micro-arcing between loose breaker contacts and the busbar. This requires prompt attention to prevent busbar melting.' },
      { question: 'Can I replace a 15-amp breaker with a 20-amp breaker to stop it from tripping?', answer: 'NEVER do this unless the branch wiring is verified to be 12-gauge copper throughout! Installing a 20-amp breaker on 14-gauge wire allows the wires inside your walls to overheat and catch fire before the breaker trips, violating NEC 240.4(D).' },
      { question: 'What is the difference between standard breakers and AFCI breakers?', answer: 'Standard breakers only trip when current exceeds the rated limit (overload) or when wires short. AFCI (Arc-Fault) breakers contain microprocessors that detect sparking and electrical arcing behind walls, stopping electrical fires before they start.' },
    ],
  },
  {
    slug: 'electrical-wiring',
    name: 'Electrical Wiring and Rewiring',
    shortName: 'Wiring and Rewiring',
    description: 'Whole-house rewiring, aluminum wiring mitigation, knob-and-tube remediation, and dedicated appliance branch circuits for older Michigan homes.',
    longDescription:
      'The electrical wiring inside your walls is your home’s most critical infrastructure. In older communities like Taylor, Allen Park, Dearborn, and Wyandotte, residences built before 1975 frequently contain deteriorated cloth-sheathed Romex, hazardous aluminum branch wiring, or active knob-and-tube conductors. Whipple Electric Inc specializes in clean, non-destructive copper rewiring that brings your home to current Michigan Residential Code standards without ruining historic architectural finishes.',
    icon: 'Cable',
    imageQuery: 'electrical wiring installation home',
    searchIntentKeywords: [
      'whole house rewiring cost Taylor MI',
      'aluminum wiring replacement Downriver',
      'knob and tube wiring removal Allen Park',
      'cloth wiring replacement Michigan',
      'rewiring older home without tearing down walls',
      'dedicated appliance circuit installation',
    ],
    technicalTopics: [
      {
        title: 'Whole-House Rewiring & Modern Copper NM-B Romex',
        keywordTarget: 'whole house rewiring',
        summary: 'Replacing degraded ungrounded wiring with code-compliant modern copper circuits.',
        technicalDetails: 'We plan and execute whole-house rewiring using 99.9% pure copper NM-B Romex cable. We install dedicated circuits for kitchens, bathrooms, laundry, and HVAC, routing conductors through floor joists and stud bays using flexible drill bits to preserve interior plaster and drywall.',
        necCodeReference: 'NEC Article 334 (Nonmetallic-Sheathed Cable: Types NM and NMC)',
      },
      {
        title: 'Aluminum Wiring Remediation & CPSC-Approved AlumiConn',
        keywordTarget: 'aluminum wiring replacement',
        summary: 'Mitigating 1965–1973 aluminum branch wiring hazards permanently.',
        technicalDetails: 'Single-strand aluminum wiring expands at more than 30% greater rate than copper under electrical load, causing terminal connections to loosen, oxidize, and ignite wall boxes. We provide CPSC-recommended AlumiConn mechanical lug pigtailing with calibrated torque screwdrivers and antioxidant paste, or complete copper rewiring.',
        necCodeReference: 'CPSC Publication #516 (Repairing Aluminum Wiring)',
      },
      {
        title: 'Knob-and-Tube Wiring Abatement & Insurance Compliance',
        keywordTarget: 'knob and tube wiring removal',
        summary: 'Decommissioning pre-1940 ungrounded porcelain insulator circuits.',
        technicalDetails: 'Knob-and-tube wiring lacks an equipment ground wire and features rubber-cloth insulation that becomes brittle and flakes away when touched. When covered by attic insulation, it cannot dissipate heat safely. We locate active runs, trace circuits back to the panel, decommission them completely, and pull fresh grounded Romex.',
        necCodeReference: 'NEC 394.12 (Knob-and-Tube Uses Not Permitted)',
      },
      {
        title: 'Dedicated 240V Appliance Home-Run Circuits',
        keywordTarget: 'dedicated appliance circuit installation',
        summary: 'Installing dedicated heavy-gauge lines for EV chargers, heat pumps, and induction ranges.',
        technicalDetails: 'Modern electric appliances require independent circuits with zero shared loads. We run dedicated copper lines: 50A 6/3 Romex for Level 2 EV chargers, 30A 10/3 Romex for electric water heaters and dryers, and 40A/50A 8/3 Romex for modern induction ranges.',
        necCodeReference: 'NEC 210.19 (Conductors - Minimum Ampacity and Size)',
      },
    ],
    costAndPermits: {
      timeline: '2 to 5 Days for Full Home Rewire; 4 to 8 Hours for Dedicated Circuits',
      permitRequired: true,
      permitDetails: 'Whole-home rewiring and dedicated circuit runs require municipal electrical permits and rough-in plus final inspection sign-offs.',
      keyCostDrivers: [
        'Single-story ranch vs. two-story colonial with finished plaster ceilings',
        'Basement and attic accessibility for routing new home-run cables',
        'Number of branch circuits being replaced and drywall patching scope',
      ],
      inspectionMilestones: [
        'Filing of electrical contractor permit with municipal building department',
        'Open-wall / rough-in inspection for cable staple spacing and nail plate protection',
        'Final polarity, ground-fault, and continuity testing by city inspector',
      ],
    },
    benefits: [
      'Elimination of high-risk fire hazards from active knob-and-tube and aluminum wiring',
      'Clean non-destructive installation techniques preserving historic plaster and woodwork',
      'Equipment grounding across 100% of household receptacles for computer and appliance safety',
      'Signed Master Electrician certificate of completion for insurance underwriters',
    ],
    signs: [
      'Your home was built before 1975 and has never been rewired',
      'You have two-prong ungrounded outlets throughout living areas and bedrooms',
      'Home purchase inspection notes active knob-and-tube wiring or cloth-insulated Romex',
      'Your home insurance policy is threatened or canceled due to older wiring types',
      'Extension cords and power strips are required in every room due to lack of outlets',
      'Visible cables in the attic or basement appear frayed, blackened, or dried out',
    ],
    process: [
      { title: 'Comprehensive Wiring Survey', description: 'We inspect the attic, basement, crawlspaces, and outlets to map existing wiring paths and circuit loads.' },
      { title: 'Non-Destructive Routing Plan', description: 'We determine routing paths using wall cavities and basement joists to avoid unnecessary wall cuts.' },
      { title: 'Conductor Installation & Box Mounting', description: 'We pull new copper NM-B Romex, install steel nail-plate protectors on studs, and mount sturdy boxes.' },
      { title: 'Panel Connection & Code Inspection', description: 'We wire circuits into the panel with AFCI breakers, coordinate city inspection, and deliver written certification.' },
    ],
    faqs: [
      { question: 'How much does whole-house rewiring cost in Taylor and Downriver?', answer: 'Whole-home rewiring typically ranges from $4,500 to $9,500 for a single-story ranch, and $8,000 to $15,000 for a larger two-story historic home with plaster walls. Cost depends on square footage, accessibility through attics/crawlspaces, and the number of circuits.' },
      { question: 'Do you have to tear down my plaster or drywall to rewire my home?', answer: 'No! Master Electrician Jim Whipple uses specialized flexible drill bits, fiberglass fish rods, and strategic small access points that keep cutting to a bare minimum. We preserve historic plaster and original trim molding.' },
      { question: 'Is aluminum wiring really dangerous, or is that a myth?', answer: 'It is a well-documented fire hazard. Aluminum wire connections fail at terminal screws because aluminum expands and contracts more than copper, creating high-resistance oxidized gaps that overheat. Remediating with AlumiConn connectors or full copper rewiring resolves this danger permanently.' },
      { question: 'Can I add insulation over knob-and-tube wiring in my attic?', answer: 'No! The National Electrical Code (NEC 394.12) strictly forbids placing thermal insulation around active knob-and-tube wiring because it relies on free air circulation to dissipate heat. Covering it can cause insulation fires.' },
    ],
  },
  {
    slug: 'outlet-switch-installation',
    name: 'Outlet and Switch Installation',
    shortName: 'Outlet and Switch Installation',
    description: 'Modernize to tamper-resistant GFCI and AFCI outlets, convert 2-prong ungrounded receptacles, and install smart LED dimmers.',
    longDescription:
      'Outlets and light switches are the most frequently used parts of your electrical system. Worn, loose outlets with weak internal spring contacts can spark, overheat, or drop voltage. We replace aging two-prong receptacles with code-compliant GFCI outlets, add tamper-resistant safety receptacles, install dedicated 20-amp kitchen circuits, and wire modern smart dimmers for enhanced comfort and safety.',
    icon: 'Plug',
    imageQuery: 'electric outlet switch installation',
    searchIntentKeywords: [
      'GFCI outlet installation Taylor MI',
      'convert 2 prong to 3 prong outlet Downriver',
      'tamper resistant outlet electrician',
      'smart dimmer switch installation',
      'kitchen bathroom outlet code requirements',
      'USB-C wall outlet installation',
    ],
    technicalTopics: [
      {
        title: 'GFCI (Ground Fault Circuit Interrupter) Protection',
        keywordTarget: 'GFCI outlet installation',
        summary: 'Installing rapid-trip shock protection in kitchens, bathrooms, basements, and exteriors.',
        technicalDetails: 'NEC 210.8 requires GFCI protection in all wet or damp locations. GFCIs monitor balance between hot and neutral conductors, shutting off current in less than 25 milliseconds if an imbalance as small as 4 to 6 milliamperes is detected. We install commercial-grade self-testing GFCI receptacles that test their own internal circuitry automatically.',
        necCodeReference: 'NEC 210.8 (Ground-Fault Circuit-Interrupter Protection for Personnel)',
      },
      {
        title: 'Converting 2-Prong Ungrounded Outlets to 3-Prong Code Solutions',
        keywordTarget: 'convert 2 prong to 3 prong outlet',
        summary: 'Providing safe equipment grounding or GFCI shock protection per NEC 406.4(D).',
        technicalDetails: 'Plugging 3-prong appliances into ungrounded 2-prong outlets creates shock and surge hazards. Per NEC 406.4(D)(2), we can legally and safely install GFCI receptacles on ungrounded two-wire circuits, labeled "No Equipment Ground", providing complete personal shock protection without tearing open walls.',
        necCodeReference: 'NEC 406.4(D)(2) (Non-Grounding-Type Receptacles Replacement)',
      },
      {
        title: 'Tamper-Resistant Receptacles & Child Safety',
        keywordTarget: 'tamper resistant outlet',
        summary: 'Installing spring-loaded shutter mechanisms that prevent foreign object insertion.',
        technicalDetails: 'NEC 406.12 mandates Tamper-Resistant (TR) receptacles in all residential dwelling units. Internal sliding shutters only open when equal pressure is applied simultaneously by the two prongs of an electrical plug, preventing accidental electrocution from hairpins, keys, or wire.',
        necCodeReference: 'NEC 406.12 (Tamper-Resistant Receptacles)',
      },
      {
        title: 'Smart Switches, 3-Way Dimmers & Neutral Wire Routing',
        keywordTarget: 'smart switch installation neutral wire',
        summary: 'Wiring Lutron Caseta, Leviton, and WiFi smart lighting controls seamlessly.',
        technicalDetails: 'Most modern smart switches require a continuous neutral conductor inside the switch box to power their internal wireless radios. In older homes with single switch-loop wiring, we route dedicated neutrals or install smart switches compatible with neutral-free setups.',
      },
    ],
    costAndPermits: {
      timeline: '2 to 4 Hours for Whole-Home Outlet Upgrades or Smart Switch Suites',
      permitRequired: false,
      permitDetails: 'Direct replacement of existing receptacles and switches does not require a municipal permit. Adding new dedicated home-run circuits requires a minor electrical trade permit.',
      keyCostDrivers: [
        'Total number of devices being replaced (bulk vs. individual outlets)',
        'Presence or absence of equipment grounding wire inside switch boxes',
        'Device type (standard tamper-resistant vs. smart Wi-Fi dimmer vs. GFCI/USB)',
      ],
      inspectionMilestones: [
        'Polarity, ground fault trip time, and tension resistance testing with circuit analyzer',
        'Verification of line-load connection on all daisy-chained GFCI outlets',
        'Flush box alignment and secure mechanical fastening',
      ],
    },
    benefits: [
      'Full protection against fatal shocks near water sources (sinks, baths, outdoors)',
      'Tamper-resistant shutter protection safeguarding children from electrical hazards',
      'Elimination of loose plugs that sag, spark, or cause intermittent connection loss',
      'Integrated USB-A and USB-C high-speed charging receptacles eliminating adapter clutter',
    ],
    signs: [
      'Plugs fall out of outlets or fit loosely inside the receptacle contacts',
      'Two-prong outlets prevent you from plugging in modern electronics and appliances',
      'Kitchen or bathroom outlets lack a "TEST" and "RESET" button (no GFCI protection)',
      'Light switches feel hot to the touch, crackle, or make buzzing sounds when flipped',
      'Outlets show brown or black scorch marks on the plastic faceplate',
      'You get a minor shock or tingling sensation when touching an appliance plugged into an outlet',
    ],
    process: [
      { title: 'Circuit & Box Inspection', description: 'We test for proper polarity, box grounding, wire condition, and line/load configuration.' },
      { title: 'Device Removal & Wire Prep', description: 'We de-energize the circuit, trim back brittle wire ends, and install proper ground pigtails.' },
      { title: 'Device Installation', description: 'We mount commercial-grade receptacles or smart switches with proper torque and box spacing.' },
      { title: 'Analyzer Safety Testing', description: 'We verify trip thresholds (4-6mA on GFCIs), correct polarity, and mechanical plug tension.' },
    ],
    faqs: [
      { question: 'Where are GFCI outlets legally required in my home?', answer: 'The Michigan Residential Code and NEC 210.8 require GFCI protection in kitchens (all countertop outlets), bathrooms, garages, outdoor receptacles, unfinished basements, crawlspaces, and anywhere within 6 feet of a water source or sink.' },
      { question: 'Can you install 3-prong outlets if my home doesn’t have ground wires?', answer: 'Yes! Per NEC 406.4(D), we can install a GFCI receptacle on an ungrounded 2-wire circuit. The GFCI provides full human shock protection and allows 3-prong plugs to be safely used, marked with a "No Equipment Ground" label.' },
      { question: 'Why does my outlet spark when I plug something in?', answer: 'Small sparking can occur when plugging in an active load, but noticeable sparks, arcing, or sizzling indicate worn-out internal copper contacts or loose terminal screws. Worn outlets must be replaced to prevent electrical fires.' },
      { question: 'Can I install smart switches if my switch boxes do not have neutral wires?', answer: 'Yes. While many smart switches require a neutral wire, we can install no-neutral smart dimmers (such as Lutron Caseta) or fish a dedicated neutral conductor to the switch box.' },
    ],
  },
  {
    slug: 'lighting-installation',
    name: 'Indoor and Outdoor Lighting Installation',
    shortName: 'Lighting Installation',
    description: 'Transform your home with recessed LED wafer lights, designer chandeliers, under-cabinet illumination, and weatherproof outdoor security lighting.',
    longDescription:
      'Lighting dramatically elevates the comfort, safety, aesthetic elegance, and energy efficiency of your home. Whether retrofitting clean recessed LED pot lights into an existing living room ceiling, mounting a heavy dining room chandelier, or installing motion-activated security floodlights outside, Master Electrician Jim Whipple delivers meticulous layout, non-destructive wire fishing, and perfect dimmer calibration.',
    icon: 'Lightbulb',
    imageQuery: 'lighting installation electrician recessed lights',
    searchIntentKeywords: [
      'recessed lighting installation Taylor MI',
      'LED pot lights Downriver electrician',
      'outdoor security lighting Wayne County',
      'under cabinet LED lighting',
      'chandelier installation high ceiling',
      'dimmer switch lighting retrofit',
    ],
    technicalTopics: [
      {
        title: 'Recessed Canless LED Wafer Lighting Layout & Installation',
        keywordTarget: 'recessed lighting installation',
        summary: 'Installing ultra-thin, airtight, IC-rated LED downlights with zero ceiling damage.',
        technicalDetails: 'Modern canless LED wafer downlights feature integrated junction boxes and spring clips, requiring only a 2-inch ceiling clearance without bulky metal housings. We calculate lumens per square foot and beam spread angles, select color-temperature switches (2700K warm to 5000K daylight), and fish wiring neatly through ceiling joists.',
        necCodeReference: 'NEC 410.116 (Clearances and Installation in Recessed Fixtures)',
      },
      {
        title: 'Heavy Chandelier & Pendant Fixture Structural Mounting',
        keywordTarget: 'chandelier installation heavy fixture',
        summary: 'Securing structural fixture-rated steel boxes for luminaires over 50 pounds.',
        technicalDetails: 'Mounting heavy glass or crystal chandeliers to standard light boxes violates NEC 410.36. We install heavy-duty steel fan/fixture-rated support bars securely anchored across structural joists, capable of supporting fixtures up to 150 pounds safely.',
        necCodeReference: 'NEC 410.36(B) (Suspended Fixtures and Weight Support)',
      },
      {
        title: 'Exterior Motion Security & Landscape Illumination',
        keywordTarget: 'outdoor security lighting',
        summary: 'Installing weatherproof NEMA 3R floodlights, photocells, and accent fixtures.',
        technicalDetails: 'Exterior lighting requires wet-location ratings, UV-resistant gaskets, and proper drainage weep holes. We install dual-head motion detector floodlights, dusk-to-dawn photocell luminaires, and low-voltage architectural landscape lighting that withstands harsh Michigan winters.',
      },
      {
        title: 'LED Dimmer Compatibility & Phase Control Calibration',
        keywordTarget: 'LED dimmer switch installation',
        summary: 'Eliminating buzzing, strobing, and dropped dimming ranges on LED circuits.',
        technicalDetails: 'LED fixtures require specialized electronic low-voltage (ELV) or reverse-phase dimmers. Standard incandescent dimmers cause high-frequency buzzing and strobing. We adjust trim dials to ensure smooth, flicker-free dimming from 1% to 100% brightness.',
      },
    ],
    costAndPermits: {
      timeline: '4 to 8 Hours for Multi-Room Recessed Lighting; 2 to 3 Hours for Chandelier/Exterior Lights',
      permitRequired: false,
      permitDetails: 'Replacing or retrofitting existing fixtures does not require a permit. Adding multiple brand-new lighting circuits requires standard municipal trade permits.',
      keyCostDrivers: [
        'Ceiling height and attic accessibility for running interconnecting Romex',
        'Number of recessed LED downlights installed (typically packages of 4, 6, or 8 lights)',
        'Weight and hanging height of specialized designer chandeliers',
      ],
      inspectionMilestones: [
        'Verification of IC (Insulation Contact) and airtight ratings on recessed fixtures',
        'Load calculations on lighting branch circuits to maintain safe ampacity',
        'Dimmer calibration and zero-flicker test throughout the full dimming spectrum',
      ],
    },
    benefits: [
      'Modern sleek aesthetics that make rooms feel larger, brighter, and more inviting',
      'Up to 85% reduction in lighting electricity consumption with commercial-grade LEDs',
      'Enhanced home security with motion-activated perimeter floodlights',
      'Zero ceiling repair needed — clean installation with precision hole saws',
    ],
    signs: [
      'Rooms feel dim, shadowy, or rely on outdated floor lamps for illumination',
      'Existing ceiling light fixtures flicker, buzz, or hum when turned on',
      'You are remodeling and want seamless, built-in recessed ceiling downlights',
      'Exterior property corners, driveways, or rear entries are dark and unlit at night',
      'Current dimmer switches cause your LED bulbs to flash or fail to dim smoothly',
      'You purchased a heavy chandelier that requires specialized structural hanging support',
    ],
    process: [
      { title: 'Room Illumination Layout', description: 'We map out fixture spacing and focal points to eliminate shadows and optimize ambient lighting.' },
      { title: 'Precision Cutting & Wire Fishing', description: 'We cut clean circular openings using dust-shrouded hole saws and fish copper Romex between joists.' },
      { title: 'Fixture Mounting & Wiring', description: 'We connect IC-rated driver boxes, set color temperatures, and snap fixtures flush into ceilings.' },
      { title: 'Dimmer Installation & Testing', description: 'We wire compatible LED dimmers, calibrate low-end trim, and verify smooth operation.' },
    ],
    faqs: [
      { question: 'Can you install recessed lighting in ceilings without attic access above?', answer: 'Yes! We use ultra-thin canless LED wafer lights that are only 1/2-inch thick. We fish wires cleanly between ceiling joists from below without cutting extensive drywall channels, leaving your ceiling intact.' },
      { question: 'What color temperature should I choose for my recessed lights?', answer: 'We recommend 2700K (Warm White) for cozy bedrooms and living rooms, 3000K (Soft White) for open-concept kitchens and dining spaces, and 4000K (Cool White) for home offices, garages, and laundry areas. Many of our fixtures include adjustable switches so you can change the look anytime.' },
      { question: 'Why do my new LED bulbs buzz when I turn on the wall dimmer?', answer: 'Buzzing occurs when an older incandescent dimmer is paired with modern LED bulbs. LEDs require specialized electronic LED dimmers (such as Lutron Diva or Caseta) with pulse-width modulation to eliminate coil hum and flickering.' },
      { question: 'Can standard ceiling electrical boxes hold a heavy crystal chandelier?', answer: 'No. Standard plastic or lightweight metal ceiling boxes are only rated for fixtures up to 35-50 pounds. Heavier chandeliers require steel fan/fixture-rated structural support bars anchored directly to ceiling framing per NEC 410.36.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    name: 'Ceiling Fan Installation',
    shortName: 'Ceiling Fan Installation',
    description: 'Expert ceiling fan installation with structural fan-rated metal boxes, new wall switch wiring, dynamic blade balancing, and remote setup.',
    longDescription:
      'Installing a ceiling fan is not as simple as swapping a light fixture. Ceiling fans exert severe continuous rotational torque and vibration. Mounting a fan to a lightweight pancake light box creates an imminent collapse hazard. Whipple Electric Inc retrofits heavy-duty structural fan-rated steel junction boxes, routes dedicated dual-switch wiring, pairs wireless remote controls, and dynamically balances blades for silent, wobble-free operation.',
    icon: 'Fan',
    imageQuery: 'ceiling fan installation electrician',
    searchIntentKeywords: [
      'ceiling fan installation Taylor MI',
      'fan rated electrical box replacement Downriver',
      'ceiling fan wiring electrician Wayne County',
      'wobbling ceiling fan repair',
      'install ceiling fan where no light exists',
      'ceiling fan remote control installation',
    ],
    technicalTopics: [
      {
        title: 'Structural Fan-Rated Junction Box Retrofitting',
        keywordTarget: 'fan rated electrical box',
        summary: 'Replacing standard light boxes with heavy-duty steel boxes rated for 70 lbs dynamic load.',
        technicalDetails: 'NEC 314.27(C) mandates that any box supporting a ceiling fan must be specifically listed and marked for fan support. Standard plastic or nail-on octagon boxes will fatigue and break under rotational vibration. We install heavy-gauge steel expansion spreader bars that lock between ceiling joists, supporting up to 70 pounds of dynamic motor force.',
        necCodeReference: 'NEC 314.27(C) (Boxes at Ceiling-Suspended Paddle Fan Outlets)',
      },
      {
        title: 'Dedicated Dual-Switch Wiring (14/3 Romex)',
        keywordTarget: 'ceiling fan dual switch wiring',
        summary: 'Enabling independent wall control over fan motor speeds and light dimming.',
        technicalDetails: 'Older homes often only have 14/2 Romex (one switched hot wire) at the ceiling, forcing homeowners to rely on pull chains. We pull new 14/3 copper Romex (black wire for fan motor, red wire for lighting) so you can control fan speed and light dimming from separate wall switches.',
      },
      {
        title: 'Vaulted & High Ceiling Downrod Extensions',
        keywordTarget: 'tall ceiling fan installation downrod',
        summary: 'Installing structural ball-hangers and correct downrod lengths for high ceilings.',
        technicalDetails: 'For vaulted, cathedral, or 10-foot+ ceilings, standard downrods cause the fan to wobble or trap air above living space. We calculate proper downrod lengths (maintaining blades 8 to 9 feet above finished floor) and install slope-ceiling canopy adapters that accommodate angles up to 45 degrees safely.',
      },
      {
        title: 'Dynamic Blade Balancing & Silent Operation',
        keywordTarget: 'wobbling ceiling fan repair',
        summary: 'Eliminating motor noise, clicking, and wobbling through blade weight calibration.',
        technicalDetails: 'Even minor factory weight discrepancies between blades create severe wobble at medium and high speeds. We test blade pitch alignment and apply precision self-adhesive balancing counterweights to ensure completely silent, vibration-free rotation.',
      },
    ],
    costAndPermits: {
      timeline: '2 to 3 Hours for Standard Installation & Fan-Box Retrofit',
      permitRequired: false,
      permitDetails: 'Direct ceiling fan installations on existing circuits do not require a building permit. Running brand-new home run circuits to an un-wired ceiling requires standard permit registration.',
      keyCostDrivers: [
        'Ceiling height (standard 8-foot ceiling vs. two-story vaulted foyer)',
        'Need to replace an existing non-fan-rated plastic box with a structural spreader bar',
        'Running new 14/3 Romex through finished walls for independent wall controls',
      ],
      inspectionMilestones: [
        'UL-listed fan-rated structural support verification (70 lb rating)',
        'Grounding continuity verification on fan motor chassis and canopy',
        'High-speed RPM vibration balance and remote receiver frequency check',
      ],
    },
    benefits: [
      'Zero collapse hazard — mounted securely to structural steel joist brackets',
      'Significantly lowers summer cooling and winter heating energy bills by circulating conditioned air',
      'Silent, wobble-free rotation calibrated by a Master Electrician',
      'Clean wall-switch or remote control operation with zero annoying pull chains',
    ],
    signs: [
      'Your existing ceiling fan visibly wobbles or shakes violently on high speed',
      'The fan clicks, squeaks, or makes rubbing noises while rotating',
      'You want to replace a simple flush-mount light with a heavy ceiling fan',
      'The ceiling box moves or feels loose when you pull the fan speed chains',
      'You have no existing ceiling fixture and want a fan wired into an un-wired room',
      'The remote control receiver is unresponsive or has burned out',
    ],
    process: [
      { title: 'Ceiling Box Inspection', description: 'We remove the old fixture and verify whether the electrical box is structural fan-rated or must be replaced.' },
      { title: 'Support Bracket Retrofit', description: 'We expand a steel spreader bar between joists and secure a heavy-duty steel fan box.' },
      { title: 'Motor Assembly & Wiring', description: 'We hang the motor from a safety hook, wire motor and light leads, and install remote receivers.' },
      { title: 'Dynamic Blade Balancing', description: 'We attach blades, test all speed settings, and apply precision counterweights to eliminate wobble.' },
    ],
    faqs: [
      { question: 'Can I install a ceiling fan on a standard ceiling light fixture box?', answer: 'ABSOLUTELY NOT. Standard ceiling light boxes are held by lightweight nails or flimsy plaster brackets. Rotational vibration from a 30-40 pound fan motor will fatigue the fasteners, causing the fan to crash down. NEC 314.27(C) requires an approved fan-rated metal box.' },
      { question: 'Can you install a ceiling fan in a room with no existing ceiling light?', answer: 'Yes! We fish new 14/2 or 14/3 Romex from a nearby wall switch or power source through the ceiling framing, install a structural fan-rated box, and add a clean wall switch control.' },
      { question: 'Why does my ceiling fan wobble on high speed?', answer: 'Wobbling is caused by unequal blade weights, warped blade irons, or an unsecured ceiling box. We use precision balancing kits and digital levels to eliminate wobble and ensure silent operation.' },
      { question: 'Can you wire my ceiling fan so the fan and light are controlled by two separate wall switches?', answer: 'Yes, provided a 3-wire cable (14/3 Romex) connects the wall switch to the ceiling box. If your home currently has 2-wire Romex, we can fish a new cable or install a smart wireless dual wall control.' },
    ],
  },
  {
    slug: 'electrical-safety-inspection',
    name: 'Electrical Safety Inspections',
    shortName: 'Safety Inspections',
    description: 'Comprehensive 33-point National Electrical Code compliance evaluations, infrared panel scans, and pre-purchase home audits.',
    longDescription:
      'Hidden electrical hazards cause thousands of residential structure fires every year. Whether purchasing a home in Taylor, dealing with an older Downriver residence, or needing an inspection for homeowner insurance underwriting, Whipple Electric Inc delivers exhaustive 33-point electrical safety inspections. Master Electrician Jim Whipple personally inspects service panels, grounding electrodes, branch wiring, GFCI/AFCI devices, and smoke detection systems.',
    icon: 'ShieldCheck',
    imageQuery: 'electrical inspection safety electrician',
    searchIntentKeywords: [
      'electrical safety inspection Taylor MI',
      'pre purchase home electrical inspection Downriver',
      'electrical inspection for home insurance Wayne County',
      'thermal imaging electrical panel scan',
      'Michigan electrical code violation inspection',
      'certificate of occupancy electrical inspection',
    ],
    technicalTopics: [
      {
        title: '33-Point National Electrical Code (NEC) Compliance Audit',
        keywordTarget: 'electrical safety inspection checklist',
        summary: 'Exhaustive examination of panels, grounding, branch conductors, and devices.',
        technicalDetails: 'Our inspection systematically verifies service entrance capacity, panel busbar health, proper circuit breaker sizing, branch conductor ampacity, box fill calculations, grounding electrode resistance, water meter bonding, GFCI/AFCI operation, and tamper-resistant outlet compliance.',
        necCodeReference: 'NFPA 70B (Recommended Practice for Electrical Equipment Maintenance)',
      },
      {
        title: 'Infrared Thermal Imaging of Breaker Panels & Service Drops',
        keywordTarget: 'thermal imaging electrical panel scan',
        summary: 'Detecting invisible loose terminal lugs and overloaded busbars before arcing.',
        technicalDetails: 'Using calibrated infrared thermal imaging cameras, we scan every breaker terminal, main lug, and neutral bus under full household load. High-resistance connections appear as distinct bright hotspots (often exceeding 160°F) that indicate imminent connection failure or fire hazards.',
      },
      {
        title: 'Grounding Electrode & Cold Water Pipe Bonding Verification',
        keywordTarget: 'grounding electrode inspection',
        summary: 'Ensuring your home has an unbroken path to earth for lightning and utility surges.',
        technicalDetails: 'Many older homes lost their electrical ground when original metal water pipes were replaced with PEX plastic tubing. We verify that dual copper ground rods are installed and that bonding jumpers are clamped securely across water meters and gas piping per NEC Article 250.',
        necCodeReference: 'NEC Article 250 (Grounding and Bonding)',
      },
      {
        title: 'Pre-Purchase Home Inspection & C of O Certification',
        keywordTarget: 'pre purchase home electrical inspection',
        summary: 'Providing written diagnostic reports for real estate negotiation and city sign-offs.',
        technicalDetails: 'Standard home inspectors often miss dangerous concealed wiring flaws. We produce prioritized written reports detailing critical safety defects (e.g., active knob-and-tube, double-tapped breakers, ungrounded circuits) versus routine upgrades, giving buyers powerful repair negotiation leverage.',
      },
    ],
    costAndPermits: {
      timeline: '1.5 to 2.5 Hours on Site; Written Report Delivered Same Day',
      permitRequired: false,
      permitDetails: 'Inspections do not require permits. If repairs or panel upgrades are needed, permits are pulled subsequently with the respective municipal building department.',
      keyCostDrivers: [
        'Square footage and overall age of the residential property',
        'Number of subpanels, detached garages, or auxiliary outbuildings',
        'Depth of documentation required (verbal summary vs. formal written insurance report)',
      ],
      inspectionMilestones: [
        'Main service entrance, meter base, and grounding electrode verification',
        'Thermal scan of all panels and branch circuit ampacity testing',
        'Outlet tension, polarity, and GFCI trip-time testing in every room',
      ],
    },
    benefits: [
      'Complete peace of mind knowing your home electrical system is safe for your family',
      'Unbiased, objective findings directly from an independent Master Electrician',
      'Prioritized written report identifying immediate fire hazards versus optional improvements',
      'Clearance documentation for home insurance carriers and municipal Certificates of Occupancy',
    ],
    signs: [
      'You are buying or selling a home and need an authoritative electrical inspection',
      'Your home is over 30 years old and has never had a professional electrical audit',
      'Your home insurance company is requesting proof of safe wiring or panel replacement',
      'You experience frequent unexplained breaker trips, buzzing sounds, or light flickering',
      'You are planning a major home renovation, basement finishing, or central AC installation',
      'Previous owners performed unpermitted, amateur DIY wiring in basements or attics',
    ],
    process: [
      { title: 'Service & Panel Examination', description: 'We remove the deadfront cover to inspect breakers, busbars, wiring sizing, and thermal signatures.' },
      { title: 'Grounding & Bonding Audit', description: 'We test ground rods, water meter bonding jumpers, and intersystem bonding termination points.' },
      { title: 'Branch Circuit & Device Sampling', description: 'We test receptacles in all rooms for grounding, polarity, GFCI trip times, and tamper resistance.' },
      { title: 'Written Report & Consultation', description: 'We walk you through every finding on site and provide a clear, photo-documented written safety report.' },
    ],
    faqs: [
      { question: 'Why should I hire a Master Electrician instead of relying on a general home inspector?', answer: 'General home inspectors have broad surface knowledge, but they cannot open panels extensively, perform thermal imaging under load, or diagnose complex grounding faults. Master Electrician Jim Whipple has 40+ years of dedicated electrical expertise to catch subtle fire hazards general inspectors overlook.' },
      { question: 'What does an electrical safety inspection cover?', answer: 'Our 33-point audit covers: service drop clearance, meter base condition, breaker panel busbars, breaker sizing, wire condition (knob-and-tube, cloth Romex, aluminum), grounding electrode systems, water pipe bonding, GFCI/AFCI operation, outlet polarity, and smoke detector compliance.' },
      { question: 'Can an inspection help resolve issues with my homeowner insurance company?', answer: 'Yes! If an insurance underwriter flags your electrical panel or questions older wiring, we conduct an inspection and provide formal documentation verifying code compliance or detailing required remediation.' },
      { question: 'Do you provide an estimate for repairs if hazards are found?', answer: 'Yes. Our written report categorizes findings into immediate safety hazards, code violations, and advisory upgrades, complete with straightforward itemized estimates for any necessary repairs.' },
    ],
  },
  {
    slug: 'commercial-electrical',
    name: 'Commercial Electrical Services',
    shortName: 'Commercial Electrical',
    description: 'Electrical solutions for commercial properties — 3-phase power, tenant buildouts, panel maintenance, machinery drops, and commercial LED retrofits.',
    longDescription:
      'Commercial electrical systems require specialized expertise in 3-phase power distribution, surface EMT conduit bending, strict NFPA 70 commercial codes, and minimal business disruption. Whipple Electric Inc provides dependable commercial electrical services for retail storefronts, offices, medical clinics, and light industrial facilities across Wayne County. We coordinate work schedules to ensure your doors stay open.',
    icon: 'Building2',
    imageQuery: 'commercial electrical wiring building',
    searchIntentKeywords: [
      'commercial electrician Taylor MI',
      'commercial 3 phase panel upgrade Downriver',
      'commercial tenant buildout electrician',
      'commercial LED lighting retrofit Wayne County',
      'machinery dedicated circuit conduit',
      'commercial electrical troubleshooting',
    ],
    technicalTopics: [
      {
        title: '3-Phase 120/208V & 277/480V Power Distribution',
        keywordTarget: '3 phase electrical commercial',
        summary: 'Installing and maintaining commercial switchgear, transformers, and panelboards.',
        technicalDetails: 'Commercial facilities rely on 3-phase power to operate heavy HVAC units, refrigeration systems, and industrial machinery efficiently. We balance phase loads across A, B, and C phases to prevent transformer overheating, install step-down dry-type transformers, and service heavy commercial distribution switchgear.',
        necCodeReference: 'NEC Article 408 (Switchboards, Switchgear, and Panelboards)',
      },
      {
        title: 'Tenant Improvements & Retail Buildout Rough-Ins',
        keywordTarget: 'commercial tenant buildout electrician',
        summary: 'Custom conduit bending and circuit distribution for new commercial spaces.',
        technicalDetails: 'We install electrical rough-ins for retail stores, professional offices, and commercial kitchens, including bending electrical metallic tubing (EMT), installing surface raceways, wiring dedicated point-of-sale registers, and configuring emergency egress illumination with 90-minute battery backups.',
        necCodeReference: 'NEC 700.12 (Emergency Lighting Illumination)',
      },
      {
        title: 'Commercial High-Bay LED Lighting Retrofits',
        keywordTarget: 'commercial LED lighting retrofit',
        summary: 'Replacing outdated metal-halide and T12 fluorescents with high-efficiency LEDs.',
        technicalDetails: 'Upgrading warehouse high-bay fixtures or retail troffers to high-efficiency industrial LEDs slashes operating power bills by up to 65%. We handle ballast bypass rewiring, install 5000K commercial UFO fixtures, and wire occupancy sensors for automated energy management.',
      },
      {
        title: 'Dedicated Machinery Drops & Motor Disconnect Switches',
        keywordTarget: 'commercial machinery circuit drop',
        summary: 'Installing heavy-gauge motor circuits and NEMA 3R lockable safety disconnects.',
        technicalDetails: 'Motors require specialized circuit sizing per NEC Article 430, factoring in locked-rotor inrush currents and thermal overload protection. We install fused safety disconnect switches within line-of-sight of commercial air compressors, hydraulic vehicle lifts, and packaging equipment.',
        necCodeReference: 'NEC Article 430 (Motors, Motor Circuits, and Controllers)',
      },
    ],
    costAndPermits: {
      timeline: 'Flexible Scheduling Including Evenings & Weekends to Minimize Downtime',
      permitRequired: true,
      permitDetails: 'Commercial electrical installations require plan reviews and commercial trade permits filed with the municipal building department.',
      keyCostDrivers: [
        'Voltage requirements (120/208V vs. 277/480V 3-phase)',
        'Conduit routing length (EMT vs. rigid steel) across open warehouse ceilings',
        'Need for off-hours, weekend, or holiday execution',
      ],
      inspectionMilestones: [
        'Commercial electrical permit filing and architectural plan submittal',
        'Rough-in conduit and junction box inspection prior to ceiling closure',
        'Final load test, emergency lighting test, and municipal inspector sign-off',
      ],
    },
    benefits: [
      'Minimized business interruption with evening and weekend scheduling availability',
      'Code-compliant 3-phase installations tailored for heavy machinery and commercial HVAC',
      'Dramatic reductions in monthly facility utility bills through commercial LED retrofits',
      'Over 40 years of commercial electrical contractor experience in Wayne County',
    ],
    signs: [
      'You are leasing a new commercial space and require tenant improvement electrical work',
      'Commercial breaker panels hum loudly, trip during business hours, or run hot',
      'Outdated fluorescent troffers or metal-halide fixtures flicker and raise utility costs',
      'You are adding new manufacturing equipment, commercial ovens, or air compressors',
      'Municipal fire marshals or building inspectors cited emergency lighting violations',
      'Commercial retail or office outlets lack dedicated circuits for computer servers',
    ],
    process: [
      { title: 'Facility Electrical Survey', description: 'We evaluate your available transformer capacity, voltage, phase loads, and operational schedule.' },
      { title: 'Commercial Engineering Plan', description: 'We map out EMT conduit paths, circuit ampacities, and equipment disconnect locations.' },
      { title: 'Conduit Bending & Wire Pulling', description: 'We run neat, professional EMT conduit runs and pull THHN copper conductors to equipment drops.' },
      { title: 'Testing & Inspector Sign-Off', description: 'We perform motor rotation checks, balance phase loads, and secure the municipal certificate of approval.' },
    ],
    faqs: [
      { question: 'Can you perform commercial electrical work after hours so my business isn’t disrupted?', answer: 'Yes! We understand that shutting down power during standard business hours costs you money. We routinely schedule commercial panel replacements, machinery drops, and LED retrofits during evenings and weekends.' },
      { question: 'What is the advantage of 3-phase power over single-phase for commercial buildings?', answer: 'Three-phase power delivers constant, balanced power using smaller conductors, operating heavy electric motors, commercial air conditioners, and industrial machinery much more efficiently without voltage drop.' },
      { question: 'Do commercial emergency lights and exit signs require electrical permits?', answer: 'Yes. Commercial emergency egress lighting must provide at least 90 minutes of illuminated backup power during outages under NEC 700.12 and NFPA 101 Life Safety Code, requiring proper trade permitting and inspection.' },
      { question: 'Do you handle commercial electrical permits in Wayne County?', answer: 'Yes. We handle commercial electrical permits with all local municipal building departments across Downriver and Wayne County, including BSEED in Detroit, Taylor, and Southgate.' },
    ],
  },
  {
    slug: 'renovation-electrical',
    name: 'Electrical Installation for Renovations',
    shortName: 'Renovation Electrical',
    description: 'Complete electrical rough-in and finish wiring for kitchen remodels, finished basements, bathroom additions, and home renovations.',
    longDescription:
      'Home renovations are the single best opportunity to modernize your electrical system. Whether expanding a gourmet kitchen with dedicated appliance circuits, finishing an entertainment basement with an auxiliary subpanel, or adding a luxury master bath, Whipple Electric Inc coordinates seamlessly with your timeline. We ensure rough-in wiring, outlet spacing, and finish trim strictly meet modern Michigan Residential Code.',
    icon: 'Hammer',
    imageQuery: 'home renovation electrical wiring kitchen',
    searchIntentKeywords: [
      'kitchen remodel electrical Taylor MI',
      'finished basement wiring Downriver',
      'bathroom remodel electrical code',
      'electrical rough in contractor Wayne County',
      'kitchen island outlet code requirements',
      'basement subpanel installation',
    ],
    technicalTopics: [
      {
        title: 'Kitchen Remodel Electrical & Dedicated Appliance Circuits',
        keywordTarget: 'kitchen remodel electrical wiring',
        summary: 'Installing high-capacity circuits for microwaves, dishwashers, and induction cooktops.',
        technicalDetails: 'Modern kitchens require extensive dedicated branch circuits: two 20A small-appliance circuits for countertops (NEC 210.52(B)), a 20A circuit for the dishwasher/disposal, a dedicated 20A microwave circuit, and 40A/50A 240V circuits for ranges or induction cooktops.',
        necCodeReference: 'NEC 210.52(B) (Small Appliance Circuit Requirements)',
      },
      {
        title: 'Kitchen Island Receptacle Code Updates (NEC 2023)',
        keywordTarget: 'kitchen island outlet code',
        summary: 'Complying with the latest provisions for island countertops and pop-up outlets.',
        technicalDetails: 'The latest electrical codes restrict mounting outlets below countertop overhangs due to cord-pull child hazards. We install code-compliant pop-up countertop receptacles listed for kitchen surfaces or plan dedicated cabinet end-panel receptacle placement.',
        necCodeReference: 'NEC 210.52(C)(2) (Island and Peninsular Countertops)',
      },
      {
        title: 'Finished Basement Electrical & Subpanel Buildouts',
        keywordTarget: 'finished basement electrical wiring',
        summary: 'Subpanel distribution, AFCI living area branch circuits, and wet bar GFCI circuits.',
        technicalDetails: 'Finishing a basement adds major electrical loads. We install a 60A or 100A subpanel to supply new basement lighting, home theater entertainment circuits, egress smoke/CO detector loops, and bathroom GFCI circuits without overloading the main panel.',
      },
      {
        title: 'Bathroom Remodel Electrical & Dedicated 20A GFCI Circuits',
        keywordTarget: 'bathroom remodel electrical code',
        summary: 'Wiring exhaust ventilation fans, heated towel bars, and vanity lighting.',
        technicalDetails: 'NEC 210.11(C)(3) requires a dedicated 20-amp branch circuit for bathroom receptacles. We install quiet, high-CFM exhaust fans with integrated humidity sensors, radiant floor heating thermostats, and dual GFCI vanity receptacles.',
        necCodeReference: 'NEC 210.11(C)(3) (Bathroom Branch Circuits)',
      },
    ],
    costAndPermits: {
      timeline: '1 to 2 Days for Rough-In; 1 Day for Finish Trim-Out',
      permitRequired: true,
      permitDetails: 'Residential remodel wiring requires municipal building permits, consisting of a rough-in inspection before insulation/drywall and a final inspection after trim.',
      keyCostDrivers: [
        'Main panel capacity to accept new circuits vs. need for a subpanel',
        'Scope of remodel (single bathroom vs. full kitchen vs. 1,000 sq ft basement)',
        'High-end fixture selections (recessed LED zones, under-cabinet lighting, pop-ups)',
      ],
      inspectionMilestones: [
        'Electrical rough-in inspection verifying nail plates, box securement, and wire stapling',
        'Insulation and vapor barrier inspection by local building authority',
        'Final trim-out inspection verifying GFCI/AFCI operation and cover plates',
      ],
    },
    benefits: [
      '100% Code-compliant wiring designed to pass municipal rough and final inspections effortlessly',
      'Seamless coordination with your general contractor or DIY remodeling schedule',
      'Dedicated high-capacity circuits prevent future breaker trips when running modern appliances',
      'Expert design advice for optimal receptacle placement and layered ambient lighting',
    ],
    signs: [
      'You are planning a kitchen, bathroom, or basement remodel and need electrical rough-in',
      'Your general contractor needs a licensed Master Electrician to pull permits and wire the project',
      'You want to add recessed ceiling lighting, under-cabinet LEDs, or island pop-up outlets',
      'Your existing breaker panel is full and needs an auxiliary subpanel for the renovation',
      'You are adding luxury features such as heated tile floors, steam showers, or EV charging',
      'You need to relocate outlets, switches, or lighting fixtures to match a new room floor plan',
    ],
    process: [
      { title: 'Plan Review & Electrical Design', description: 'We review your architectural plans, discuss appliance specifications, and design the circuit layout.' },
      { title: 'Permit Filing & Rough-In', description: 'We pull municipal trade permits, install boxes, run Romex cables, and meet the city inspector.' },
      { title: 'Drywall Phase Pause', description: 'Walls are insulated and drywalled by your builder or contractor while wiring remains safely protected.' },
      { title: 'Trim-Out & Final Inspection', description: 'We install designer receptacles, switches, light fixtures, test every circuit, and pass final inspection.' },
    ],
    faqs: [
      { question: 'When should I contact an electrician during my remodeling project?', answer: 'As early as possible in the planning phase! Involving Master Electrician Jim Whipple before framing or drywall ensures you have sufficient panel capacity, allows ideal outlet and lighting layout, and avoids costly change orders.' },
      { question: 'Do I need a separate subpanel for my finished basement?', answer: 'If your existing main electrical panel is full with no spare breaker slots, installing a 60-amp or 100-amp subpanel is the cleanest, most practical solution. It provides dedicated local breaker control for your basement entertainment, wet bar, and bathroom.' },
      { question: 'Do kitchen and bathroom remodels require two separate inspections?', answer: 'Yes. Michigan residential building codes require a "Rough-In Inspection" after all wiring and boxes are secured before drywall is hung, followed by a "Final Electrical Inspection" after all switches, outlets, and fixtures are installed.' },
      { question: 'What electrical circuits are required for a modern kitchen remodel?', answer: 'Current codes require: at least two 20-amp countertop small-appliance circuits, a dedicated 20-amp microwave circuit, a dedicated 20-amp dishwasher/disposal circuit, an independent refrigerator circuit, and a 40A or 50A 240V circuit for an electric/induction range.' },
    ],
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
