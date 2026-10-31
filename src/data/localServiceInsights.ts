export interface DedicatedServiceInsight {
  heading: string;
  heroDescription: string;
  leadParagraph: string;
  highIntentTagline: string;
}

// Service-specific insights for Taylor (addressing the critical repeated-content issue on Taylor pages)
const taylorServiceInsights: Record<string, { lead: string; hero: string; tagline: string }> = {
  'electrical-wiring': {
    hero: 'Looking for a whole house rewiring contractor near me in Taylor, MI? Master Electrician Jim Whipple replaces ungrounded cloth Romex and outdated circuits with modern copper wiring.',
    lead: 'In Taylor, post-war 1950s ranch subdivisions along Telegraph Rd, Eureka Rd, and Goddard Rd were predominantly built with two-wire ungrounded cloth Romex. Decades of heat in shallow attics have left the rubber and cloth jackets brittle and flaking, posing hidden short-circuit hazards. As an experienced whole house rewiring contractor in Taylor, MI, Whipple Electric Inc replaces aging circuits with modern grounded copper NM-B Romex, routing cables cleanly through basement joists without disturbing finished plasterboard.',
    tagline: 'Hiring a whole house rewiring contractor near me in Taylor, MI ensures 100% equipment grounding and AFCI arc-fault protection.',
  },
  'outlet-switch-installation': {
    hero: 'Need GFCI outlet installation near me in Taylor, MI? We convert ungrounded 2-prong outlets to 3-prong safety receptacles and install tamper-resistant GFCI outlets to code.',
    lead: 'Many mid-century homes in Taylor still have original two-prong receptacles that lack an equipment ground wire, preventing homeowners from safely powering laptops, home entertainment systems, or large kitchen appliances. If you are searching for GFCI outlet installation near me in Taylor, MI, Master Electrician Jim Whipple retrofits code-compliant GFCI receptacles per NEC 406.4(D), installs tamper-resistant safety receptacles, and runs dedicated 20-amp small appliance circuits in kitchens and bathrooms.',
    tagline: 'Get expert GFCI outlet installation near me in Taylor to protect your family from shocks in kitchens, baths, and outdoors.',
  },
  'ceiling-fan-installation': {
    hero: 'Professional ceiling fan installation near me in Taylor, MI with structural fan-rated box mounting, new wall-switch wiring, and wobble-free blade balancing.',
    lead: 'Original ceiling electrical boxes in 1950s Taylor homes are almost exclusively shallow pancake boxes or lightweight metal octagons secured with thin nails, designed only to support 5-pound light fixtures. Installing a modern 30-to-40-pound ceiling fan on these boxes creates dynamic rotational vibration that will fatigue the fasteners and cause the fan to fall. In Taylor, Jim Whipple retrofits heavy-duty steel fan-rated spreader bars (UL-listed for 70 lbs dynamic load) and fishes new 14/3 Romex to create dual wall-switch controls.',
    tagline: 'Safe ceiling fan installation with structural fan-rated box mounting and vibration-free blade balancing in Taylor, MI.',
  },
  'electrical-panel-upgrades': {
    hero: 'Searching for a 200 amp electrical panel upgrade near me in Taylor, MI? Replace obsolete fuse boxes and dangerous panels with code-compliant Square D 200A service.',
    lead: 'Many homes across Taylor still operate on obsolete 60-amp or 100-amp fuse boxes or recalled breaker panels (such as Federal Pacific Stab-Lok or Zinsco) that cannot handle modern electrical demands. If you are searching for a 200 amp electrical panel upgrade near me in Taylor, MI, Whipple Electric Inc upgrades your service heavy-up with modern Square D equipment, dual 8-foot copper ground rods, and coordinates permits directly with the City of Taylor Building Department on Goddard Rd.',
    tagline: 'Reliable 200 amp electrical panel upgrade near me in Taylor with same-day DTE disconnect and power restoration.',
  },
  'circuit-breaker-repair': {
    hero: 'Need a licensed electrician for breaker keeps tripping in Taylor, MI? Rapid diagnostic testing, short-circuit isolation, and OEM breaker replacements.',
    lead: 'When a circuit breaker in your Taylor home buzzes, trips repeatedly, or refuses to latch into the ON position, it indicates a severe branch overload, line-to-ground short, or busbar contact pitting. If you need an electrician for breaker keeps tripping in Taylor, MI, our Master Electrician performs true-RMS diagnostic amp testing to isolate the root cause and installs genuine OEM manufacturer-listed replacements.',
    tagline: 'Hire a licensed electrician for breaker keeps tripping in Taylor, MI to resolve overheating busbars and nuisance trips.',
  },
  'lighting-installation': {
    hero: 'Custom indoor and outdoor lighting installation near me in Taylor, MI. Recessed LED wafer lights, dimmer controls, chandeliers, and exterior security lighting.',
    lead: 'Upgrading the lighting in Taylor\'s post-war ranches often involves replacing central dated surface fixtures with flush, canless LED wafer pot lights. Because Taylor ranches feature accessible attic framing or unfinished basements, we fish Romex between joists cleanly with zero drywall channel cutting, installing smooth electronic LED dimmers.',
    tagline: 'Professional indoor and outdoor lighting installation near me in Taylor, MI with energy-efficient LED fixtures.',
  },
  'electrical-safety-inspection': {
    hero: 'Schedule an electrical inspection for home purchase, insurance renewal, or Certificate of Occupancy (C of O) clearance in Taylor, MI. 33-point code audit.',
    lead: 'Whether buying a home in Taylor or preparing for a municipal Certificate of Occupancy (C of O) inspection, our 33-point safety evaluation targets common local issues: double-tapped breakers, unbonded water meters, ungrounded outlets, and open crawlspace junction boxes.',
    tagline: 'Comprehensive electrical inspection for home purchase, insurance certification, or municipal C of O clearance in Taylor.',
  },
  'commercial-electrical': {
    hero: 'Looking for a licensed commercial electrical contractor in Taylor, MI? 3-phase power distribution, tenant buildouts, machinery drops, and LED retrofits.',
    lead: 'For retail centers, automotive facilities, and commercial storefronts along Telegraph Rd, Eureka Rd, and Ecorse Rd in Taylor, we deliver 3-phase power distribution, surface EMT conduit runs, motor safety disconnects, and industrial LED high-bay retrofits scheduled outside regular business hours.',
    tagline: 'Experienced commercial electrical contractor in Taylor, MI for 3-phase distribution, tenant buildouts, and equipment drops.',
  },
  'renovation-electrical': {
    hero: 'Licensed remodeling electrician in Taylor, MI for kitchen, bathroom, and finished basement electrical rough-in and finish wiring.',
    lead: 'Remodeling a kitchen or finishing a basement in Taylor requires careful coordination with City of Taylor building inspectors. We plan and rough-in dedicated 20A appliance circuits, island pop-up receptacles, bathroom ventilation fans, and auxiliary subpanels, ensuring smooth rough and final electrical inspection sign-offs.',
    tagline: 'Licensed remodeling electrician in Taylor, MI for kitchen, bathroom, and finished basement electrical buildouts.',
  },
  'electrical-troubleshooting': {
    hero: 'Fast emergency electrical repair and troubleshooting near me in Taylor, MI. Pinpointing flickering lights, dead outlets, and open neutrals safely.',
    lead: 'Flickering lights and intermittent power loss in Taylor post-war homes typically originate from loose neutral splices in older junction boxes or voltage drop caused by aging service drops. If you need emergency electrical repair near me in Taylor, we use digital circuit tracers and thermal imaging to locate the root cause without destructive drywall cuts.',
    tagline: 'Fast emergency electrical repair and troubleshooting near me in Taylor, MI by a licensed Master Electrician.',
  },
};

// City-specific housing traits for other Downriver municipalities
const cityHousingAngles: Record<string, { characteristic: string; commonNeed: string }> = {
  'southgate-mi': {
    characteristic: '1950s–1970s split-levels, quad-levels, and ranches along Northline, Eureka, and Allen Roads with original 100A panels and late-1960s aluminum branch wiring',
    commonNeed: 'CPSC-approved AlumiConn pigtailing, 200A heavy-up upgrades to support central AC, and pool/hot tub dedicated circuits',
  },
  'allen-park-mi': {
    characteristic: '1930s–1950s brick bungalows and colonial revivals near Park Ave and Southfield Rd with plaster-and-lath walls, knob-and-tube remnants, and ungrounded circuits',
    commonNeed: 'Non-destructive wire fishing through stud bays to protect historic plaster, knob-and-tube abatement, and 200A service upgrades',
  },
  'dearborn-mi': {
    characteristic: 'Pre-war brick Tudors and mid-century residences in West and East Dearborn featuring rigid metal conduit, historic knob-and-tube runs, and dense tree-canopy service drops',
    commonNeed: 'Airtight remodel LED downlights, high-capacity appliance circuits, and service mast weatherhead replacements after storms',
  },
  'dearborn-heights-mi': {
    characteristic: 'Post-war ranches and tri-levels along Beech Daly and Telegraph with active finished basement projects and expanding household power demands',
    commonNeed: 'Auxiliary subpanel installations, AFCI bedroom/basement breaker retrofits, and dedicated 240V heat pump circuits',
  },
  'romulus-mi': {
    characteristic: 'Suburban acreage and properties near Detroit Metro Airport with detached workshops, pole barns, and flight-corridor acoustic vibration',
    commonNeed: '100A underground feeder conduit runs to detached garages, terminal torquing on busbars, and heavy machinery power drops',
  },
  'wyandotte-mi': {
    characteristic: 'Historic Detroit River waterfront homes and century-old two-story residences along Biddle Ave with legacy screw-in fuse boxes and riverfront moisture',
    commonNeed: 'Fuse-to-breaker panel conversions, corrosion-resistant exterior disconnects, and whole-house surge suppression',
  },
  'lincoln-park-mi': {
    characteristic: 'Compact 1940s–1950s post-war bungalows and starter homes between Fort St and Dix Hwy with crowded 60A/100A panels and ungrounded two-prong outlets',
    commonNeed: 'City Certificate of Occupancy (C of O) inspection repairs, GFCI safety conversions near sinks, and affordable panel upgrades',
  },
  'trenton-mi': {
    characteristic: 'Picturesque riverfront estates and mid-century subdivisions along West Jefferson and West Rd requiring marine-grade outdoor feeds and storm resilience',
    commonNeed: 'Manual generator transfer interlock switches, waterfront dock power pedestals per NEC Article 555, and 200A panel heavy-ups',
  },
  'detroit-mi': {
    characteristic: 'Historic brick two-family flats and craftsman homes in Southwest Detroit (Vernor Hwy / Springwells) with active knob-and-tube and obsolete 60A fuse boxes',
    commonNeed: 'Safety inspections for home purchase, 60A-to-100A/200A breaker upgrades, and ungrounded wiring hazard corrections',
  },
};

export function getDedicatedServiceHousingInsight(
  serviceSlug: string,
  locationSlug: string,
  cityName: string,
  serviceName: string
): DedicatedServiceInsight {
  // If Taylor, use the dedicated, handcrafted Taylor service insight
  if (locationSlug === 'taylor-mi') {
    const taylor = taylorServiceInsights[serviceSlug];
    if (taylor) {
      return {
        heading: `Taylor, MI Housing Architecture & ${serviceName} Considerations`,
        heroDescription: taylor.hero,
        leadParagraph: taylor.lead,
        highIntentTagline: taylor.tagline,
      };
    }
  }

  // If another Downriver city, dynamically generate an authentic local narrative
  const cityAngle = cityHousingAngles[locationSlug] || {
    characteristic: `residential and commercial properties across ${cityName}`,
    commonNeed: 'code-compliant electrical upgrades and safety modernizations',
  };

  const highIntentMap: Record<string, string> = {
    'electrical-panel-upgrades': `Looking for a 200 amp electrical panel upgrade near me in ${cityName}, MI? Whipple Electric Inc upgrades obsolete boxes to modern 200A service.`,
    'circuit-breaker-repair': `Need an electrician for breaker keeps tripping in ${cityName}, MI? We troubleshoot branch overloads, buzzing panels, and faulty breakers.`,
    'electrical-wiring': `Searching for a whole house rewiring contractor near me in ${cityName}, MI? Master Electrician Jim Whipple replaces ungrounded circuits safely.`,
    'outlet-switch-installation': `Get fast GFCI outlet installation near me in ${cityName}, MI to convert 2-prong ungrounded outlets and protect against shocks.`,
    'lighting-installation': `Professional indoor and outdoor lighting installation near me in ${cityName}, MI, from canless LED wafers to security floodlights.`,
    'ceiling-fan-installation': `Ceiling fan installation near me in ${cityName}, MI with structural fan-rated box mounting and dynamic blade balancing.`,
    'electrical-safety-inspection': `Schedule a comprehensive electrical inspection for home purchase, insurance renewal, or code compliance in ${cityName}, MI.`,
    'commercial-electrical': `Experienced commercial electrical contractor in ${cityName}, MI for 3-phase power, tenant improvements, and equipment lines.`,
    'renovation-electrical': `Licensed remodeling electrician in ${cityName}, MI for kitchen, bathroom, and finished basement electrical rough-ins.`,
    'electrical-troubleshooting': `Need fast emergency electrical repair near me in ${cityName}, MI? We isolate intermittent faults, open neutrals, and flickering lights.`,
  };

  const heroDesc = highIntentMap[serviceSlug] || `Professional ${serviceName} in ${cityName}, MI by licensed Master Electrician Jim Whipple. Call for upfront estimates.`;

  const lead = `Properties in ${cityName} feature ${cityAngle.characteristic}. When executing ${serviceName.toLowerCase()} in ${cityName}, our Master Electrician accounts for these architectural nuances, focusing on ${cityAngle.commonNeed}. All work strictly adheres to the Michigan Residential Code and is coordinated directly with the local ${cityName} building department.`;

  const tagline = `Trusted local electrical contractor serving ${cityName}, MI with Master Electrician craftsmanship, upfront pricing, and proper permits.`;

  return {
    heading: `${cityName}, MI Housing Architecture & ${serviceName} Considerations`,
    heroDescription: heroDesc,
    leadParagraph: lead,
    highIntentTagline: tagline,
  };
}

