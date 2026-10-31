import { images } from './images';

export interface CompletedProject {
  id: string;
  title: string;
  citySlug: string;
  cityName: string;
  neighborhood: string;
  serviceSlug: string;
  serviceName: string;
  completedYear: string;
  duration: string;
  summary: string;
  challenge: string;
  solution: string;
  equipmentUsed: string[];
  permitStatus: string;
  imageUrl: string;
  featured: boolean;
}

export const completedProjects: CompletedProject[] = [
  {
    id: 'proj-taylor-panel',
    title: '200-Amp Heavy-Up & Fuse Box Replacement',
    citySlug: 'taylor-mi',
    cityName: 'Taylor',
    neighborhood: 'Goddard & Telegraph Corridor',
    serviceSlug: 'electrical-panel-upgrades',
    serviceName: 'Electrical Panel Upgrades',
    completedYear: '2024',
    duration: '1 Day (8 Hours)',
    summary: 'Converted an obsolete 60-amp fuse box in a 1956 Taylor brick ranch to a modern 200-amp Square D breaker service to support a new central heat pump and Level 2 EV charging.',
    challenge: 'Original ungrounded cloth-insulated service entrance cable was cracked and weathered, and the existing 60-amp fuse block was severely overtaxed with multiple double-tapped screw-in fuses.',
    solution: 'Pulleld permits with City of Taylor Building Dept, coordinated with DTE Energy for overhead line disconnect, installed a new outdoor 200A meter enclosure, whole-home surge protection, and two 8-foot copper grounding rods.',
    equipmentUsed: ['Square D QO 200A 40-Space Panel', 'Whole-Home Type 2 Surge Protector', '2/0 Copper Service Entrance Cable', 'Dual 8ft Copper Ground Rods'],
    permitStatus: 'Permitted & Inspected by City of Taylor Building Dept (#ELEC-24-0412)',
    imageUrl: images.panelWiring,
    featured: true,
  },
  {
    id: 'proj-lincoln-park-troubleshoot',
    title: 'Intermittent Neutral Fault & Tripping Breaker Diagnosis',
    citySlug: 'lincoln-park-mi',
    cityName: 'Lincoln Park',
    neighborhood: 'Fort St & Southfield Rd Neighborhood',
    serviceSlug: 'electrical-troubleshooting',
    serviceName: 'Electrical Troubleshooting and Repair',
    completedYear: '2024',
    duration: '2.5 Hours',
    summary: 'Investigated severe voltage fluctuations and flickering lights across three bedroom circuits in a 1948 Lincoln Park bungalow.',
    challenge: 'Previous DIY renovations had concealed junction boxes behind wood paneling, resulting in a loose, oxidized neutral connection that caused 140V spikes on branch circuits when appliances ran.',
    solution: 'Used digital multimeters and circuit tracers to isolate the hidden junction box, remade connections with UL-listed copper-to-copper wire nuts, balanced the panel load, and brought circuits into full compliance.',
    equipmentUsed: ['Fluke True-RMS Multimeter', 'Amprobe Circuit Tracer', 'Steel Octagonal Junction Box', 'Ideal Twister Wire Connectors'],
    permitStatus: 'Safety Certificate & Diagnostic Test Report Issued',
    imageUrl: images.multimeter,
    featured: true,
  },
  {
    id: 'proj-allen-park-wiring',
    title: 'Knob-and-Tube Remediation & Whole-House Grounding',
    citySlug: 'allen-park-mi',
    cityName: 'Allen Park',
    neighborhood: 'Park Ave Historic District',
    serviceSlug: 'electrical-wiring',
    serviceName: 'Electrical Wiring and Rewiring',
    completedYear: '2024',
    duration: '4 Days',
    summary: 'Decommissioned active second-floor knob-and-tube circuits in an Allen Park colonial without breaching lath-and-plaster ceilings.',
    challenge: 'Homeowner could not secure standard home insurance coverage due to active knob-and-tube conductors buried beneath loose cellulose attic insulation.',
    solution: 'Carefully fished new 12/2 and 14/2 Romex through floor cavities from the basement to the attic, disconnected all legacy runs at the panel, installed AFCI safety protection, and provided full insurance clearance documentation.',
    equipmentUsed: ['Southwire 14/2 & 12/2 NM-B Romex', 'Eaton Dual AFCI/GFCI Breakers', 'Carlon Old-Work Receptacle Boxes'],
    permitStatus: 'Approved by City of Allen Park Building Inspector (#E-2024-118)',
    imageUrl: images.wiringWall,
    featured: true,
  },
  {
    id: 'proj-southgate-outlets',
    title: 'Whole-Home GFCI Protection & 3-Prong Grounding',
    citySlug: 'southgate-mi',
    cityName: 'Southgate',
    neighborhood: 'Northline & Allen Rd Subdivision',
    serviceSlug: 'outlet-switch-installation',
    serviceName: 'Outlet and Switch Installation',
    completedYear: '2024',
    duration: '6 Hours',
    summary: 'Updated 26 two-prong ungrounded outlets in a 1962 Southgate split-level to tamper-resistant GFCI and self-grounding receptacles.',
    challenge: 'Original ungrounded two-wire steel flex circuits prevented the family from safely plugging in modern home office computers, televisions, and kitchen appliances.',
    solution: 'Installed Leviton SmartlockPro GFCI receptacles at the first outlet of each branch circuit to provide downstream shock protection per NEC 406.4(D), labeled all protected outlets, and added dedicated 20A kitchen small-appliance circuits.',
    equipmentUsed: ['Leviton 15A & 20A Tamper-Resistant GFCI Receptacles', 'Commercial Grade Decora Wall Switches', 'NEC Warning Labels'],
    permitStatus: 'Full Circuit Verification & Load Balance Sign-Off',
    imageUrl: images.wiring,
    featured: true,
  },
  {
    id: 'proj-dearborn-fan',
    title: 'Ceiling Fan Installation with Structural Fan-Rated Box',
    citySlug: 'dearborn-mi',
    cityName: 'Dearborn',
    neighborhood: 'West Dearborn Historic District',
    serviceSlug: 'ceiling-fan-installation',
    serviceName: 'Ceiling Fan Installation',
    completedYear: '2024',
    duration: '3 Hours',
    summary: 'Replaced an unstable, wobbling antique ceiling fixture with a high-efficiency Hunter fan mounted to a heavy-duty structural brace.',
    challenge: 'Existing fixture was mounted to a 1940s shallow pancake electrical box fastened with only two wood screws into plaster, completely incapable of holding the 45-pound fan motor.',
    solution: 'Installed a retrofitted Westinghouse steel fan-rated spreader bar rated for 70 lbs dynamic load, pulled new 14/3 Romex to create dual wall-switch controls for motor speed and LED dimming, and precision-balanced the blades.',
    equipmentUsed: ['Westinghouse Heavy-Duty Fan Support Box', 'Southwire 14/3 Copper Romex', 'Lutron Maestro Dual Fan/Light Dimmer'],
    permitStatus: 'Tested & Vibration Verified to Zero Wobble at High RPM',
    imageUrl: images.glassLights,
    featured: true,
  },
  {
    id: 'proj-dearborn-heights-renovation',
    title: 'Finished Basement Electrical Build-Out & Subpanel',
    citySlug: 'dearborn-heights-mi',
    cityName: 'Dearborn Heights',
    neighborhood: 'Beech Daly & Warren Rd Corridor',
    serviceSlug: 'renovation-electrical',
    serviceName: 'Renovation Electrical Services',
    completedYear: '2024',
    duration: '2 Days',
    summary: 'Complete rough-in and finish electrical installation for a 900-sq-ft basement remodel including entertainment area, bathroom, and wet bar.',
    challenge: 'The existing main panel had zero open breaker slots, and low overhead plumbing runs required strategic conduit and wire routing to maintain headroom.',
    solution: 'Installed a dedicated 60-amp Siemens subpanel, wired 12 recessed ultra-thin LED lights on multi-way dimmers, ran dedicated 20A GFCI circuits for the wet bar and bathroom, and added smoke/CO detector interconnections.',
    equipmentUsed: ['Siemens 60A 12-Space Subpanel', 'Cooper B-Line Cable Supports', 'Wafer LED Downlights (3000K Warm White)', 'Leviton Arc-Fault Receptacles'],
    permitStatus: 'Passed Rough & Final Inspections, City of Dearborn Heights (#DH-EL-24-089)',
    imageUrl: images.wiringOpen,
    featured: false,
  },
  {
    id: 'proj-wyandotte-lighting',
    title: 'Architectural Recessed Lighting & Riverfront Exterior Illumination',
    citySlug: 'wyandotte-mi',
    cityName: 'Wyandotte',
    neighborhood: 'Biddle Ave Riverfront District',
    serviceSlug: 'lighting-installation',
    serviceName: 'Indoor and Outdoor Lighting',
    completedYear: '2024',
    duration: '1.5 Days',
    summary: 'Designed and installed flush-mount dimmable LED recessed lighting in living and dining rooms plus marine-grade exterior security lighting.',
    challenge: 'Solid wood timber joists and double-lath ceilings in a 1918 Wyandotte residence made traditional can light housing installation impossible.',
    solution: 'Utilized ultra-thin 1/2-inch IC-rated airtight wafer LED fixtures that clip directly into drywall without requiring joist modifications, paired with copper-shielded exterior floodlights resistant to river moisture.',
    equipmentUsed: ['Lithonia Wafer LED 6-Inch Fixtures', 'RAB Weatherproof Die-Cast Floodlights', 'Lutron Caseta Smart Wireless Dimmers'],
    permitStatus: 'Clean Installation Completed, Code Compliance Certificate Issued',
    imageUrl: images.globeLights,
    featured: false,
  },
  {
    id: 'proj-trenton-breaker',
    title: 'Main Busbar Pit Repair & Double-Pole Breaker Replacement',
    citySlug: 'trenton-mi',
    cityName: 'Trenton',
    neighborhood: 'West Road Residential Corridor',
    serviceSlug: 'circuit-breaker-repair',
    serviceName: 'Circuit Breaker Repair',
    completedYear: '2024',
    duration: '3.5 Hours',
    summary: 'Restored central air conditioning circuit after a 40-amp double-pole breaker overheated and melted its panel busbar contact shoe.',
    challenge: 'Severe busbar pitting caused arcing whenever the AC compressor engaged on humid summer afternoons, threatening the entire panel.',
    solution: 'Safely de-energized the panel, cleaned and dressed undamaged busbar stabs, relocated the 40-amp AC circuit to fresh bus positions, and installed an OEM Cutler-Hammer replacement breaker with thermal imaging verification.',
    equipmentUsed: ['Cutler-Hammer BR 40A 240V Two-Pole Breaker', 'Flir Thermal Infrared Camera', 'NO-OX-ID Electrical Contact Grease'],
    permitStatus: 'Thermal Scan Clear: Under 85°F Operating Temperature at Full Compressor Load',
    imageUrl: images.panelDrill,
    featured: false,
  },
  {
    id: 'proj-romulus-commercial',
    title: 'Commercial 3-Phase Equipment Drop & Warehouse LED Upgrade',
    citySlug: 'romulus-mi',
    cityName: 'Romulus',
    neighborhood: 'Metro Airport Commercial Hub',
    serviceSlug: 'commercial-electrical',
    serviceName: 'Commercial Electrical Services',
    completedYear: '2024',
    duration: '2 Days',
    summary: 'Installed dedicated 480V 3-phase machinery feeds in EMT conduit and retrofitted 18 high-bay fluorescent fixtures with industrial LEDs.',
    challenge: 'Customer needed the work completed over a weekend to avoid shutting down weekday fulfillment operations.',
    solution: 'Pre-bent 1.25-inch EMT conduit off-site, completed wire pulling on Saturday, installed NEMA 3R lockable safety disconnect switches, and replaced high-bay lights with 150W high-efficiency UFO LEDs.',
    equipmentUsed: ['Eaton NEMA 3R Heavy-Duty Disconnect Switches', 'Steel EMT Conduit & Compression Fittings', '150W 5000K Commercial UFO LED Fixtures'],
    permitStatus: 'City of Romulus Commercial Electrical Permit (#COM-ELEC-24-301) Passed',
    imageUrl: images.switchboard,
    featured: false,
  },
  {
    id: 'proj-detroit-inspection',
    title: 'Pre-Purchase Comprehensive Electrical Safety Audit',
    citySlug: 'detroit-mi',
    cityName: 'Detroit',
    neighborhood: 'Southwest Detroit (Vernor & Springwells)',
    serviceSlug: 'electrical-safety-inspection',
    serviceName: 'Electrical Safety Inspections',
    completedYear: '2024',
    duration: '2 Hours',
    summary: 'Conducted a detailed 33-point safety inspection on a 1924 two-family flat before real estate closing.',
    challenge: 'Found unbonded metal water piping, open wire splices in the crawlspace, and improper 30A fuses installed on 14-gauge lighting circuits.',
    solution: 'Produced a detailed photo-documented report outlining immediate fire hazards vs optional upgrades, providing the buyer with negotiation leverage for seller concessions.',
    equipmentUsed: ['Ideal SureTest Circuit Analyzer', 'Infrared Thermometer', 'Ground Resistance Clamp Meter'],
    permitStatus: 'Detailed Written Inspection Report Delivered Within 4 Hours',
    imageUrl: images.electricianGear,
    featured: false,
  },
];

export function getProjectsByCity(citySlug: string): CompletedProject[] {
  return completedProjects.filter((p) => p.citySlug === citySlug);
}

export function getProjectsByService(serviceSlug: string): CompletedProject[] {
  return completedProjects.filter((p) => p.serviceSlug === serviceSlug);
}

export function getRelevantProject(serviceSlug: string, citySlug: string): CompletedProject {
  // First attempt: match both
  const match = completedProjects.find((p) => p.serviceSlug === serviceSlug && p.citySlug === citySlug);
  if (match) return match;

  // Second attempt: match service
  const serviceMatch = completedProjects.find((p) => p.serviceSlug === serviceSlug);
  if (serviceMatch) return serviceMatch;

  // Third attempt: match city
  const cityMatch = completedProjects.find((p) => p.citySlug === citySlug);
  if (cityMatch) return cityMatch;

  // Default to Taylor panel project
  return completedProjects[0];
}

