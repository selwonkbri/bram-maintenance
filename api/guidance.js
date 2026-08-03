// Per-task how-to guidance and lubricant specs for the Brinkley i275 and the Ram 2500.
//
// This is deliberately code and not Notion. The content is long-form reference that
// changes rarely, reads badly inside a 2000 character rich_text property, and wants
// version control. Notion stays the record of what is due and what was done.
//
// Keys are slugs derived from the Notion task title by slugify() below. If a title
// changes in Notion, the entry falls through and the UI shows "no guidance written
// yet" rather than showing the wrong steps.

export function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ---------------------------------------------------------------------------
// Lubricant catalogue
// ---------------------------------------------------------------------------

export const LUBE = {
  "dry-graphite": {
    name: "Dry graphite",
    form: "Puffer bottle or powder aerosol",
    where: "Lock cylinders only, never hinges",
    examples: "AGS MZ-2, Lock-Ease, Panef dry graphite",
    note: "Never put graphite in a cylinder that has had oil in it, and never put oil in a cylinder that has had graphite. The two combine into a black paste that seizes the wafers. If a lock has already seen oil or WD-40, switch it to dry PTFE lock lube and stay there permanently.",
  },
  "dry-ptfe": {
    name: "Dry PTFE film lube",
    form: "Aerosol, flashes off wet and leaves a dry film",
    where: "Any exposed metal pivot, latch, slide, or track",
    examples: "DuPont Teflon Non-Stick Dry-Film, WD-40 Specialist Dry Lube with PTFE, Blaster Dry Lube",
    note: "The workhorse for anything living outside. It does not stay wet, so it does not collect road grit and turn into grinding paste. Let it flash off fully before working the part.",
  },
  "dry-silicone": {
    name: "Silicone spray or seal conditioner",
    form: "Aerosol or pump, non-petroleum",
    where: "EPDM rubber and plastic. Slide seals, door seals, window seals, slam-latch strikers",
    examples: "Thetford Premium RV Slide Out Rubber Seal Conditioner, 303 Rubber Seal Protectant, 100% silicone spray",
    note: "Petroleum products swell and eventually destroy EPDM. Nothing petroleum based touches a seal.",
  },
  "white-lithium": {
    name: "White lithium grease",
    form: "Aerosol or tube",
    where: "Load-bearing metal on metal that is not a wheel bearing. Jack screws, gearboxes, coupler mechanism",
    examples: "Lucas White Lithium, CRC White Lithium, any NLGI #2 white lithium",
    note: "Stays wet, so keep it off anything that sees road spray unless it is inside a housing.",
  },
  "bearing-grease": {
    name: "NLGI #2 wheel bearing grease",
    form: "Tub or cartridge, lithium complex",
    where: "Trailer wheel bearings only",
    examples: "Lucas Red 'N' Tacky #2, Valvoline Palace Grease, Timken GR224",
    note: "Never mix grease types in a hub. If you do not know what is in there, clean it out completely rather than pumping new grease on top of old.",
  },
  "dielectric": {
    name: "Dielectric grease",
    form: "Tube",
    where: "Electrical connectors and terminals. 7-pin, breakaway plug, battery posts, bulb sockets",
    examples: "Permatex 22058, CRC 05113",
    note: "Goes on the outside of the mating surfaces to seal out moisture. It is an insulator, so it does not replace a clean tight metal-to-metal connection.",
  },
  "3in1": {
    name: "3-in-1 classic oil",
    form: "Drip can, petroleum based",
    where: "Interior only. Cabinet hinges, drawer hardware, furniture pivots",
    examples: "3-IN-ONE Multi-Purpose Oil, blue can",
    note: "Fine inside where there is no grit and no rubber. Wrong everywhere outside, because it stays wet and collects dust. Keep it away from every seal in the rig.",
  },
  "slide-lube": {
    name: "Slide-out mechanism lube",
    form: "Depends entirely on which slide system the rig has",
    where: "Slide rails, tracks, and gear racks",
    examples: "Lippert Slide-Out Dry Lube for in-wall Schwintek, Lippert Slide Out Lube for through-frame rack and pinion",
    note: "Schwintek in-wall systems take dry lube on the vertical tracks only. Grease on a Schwintek collects grit and chews the nylon gear teeth. Through-frame rack and pinion takes a light grease on the gear rack. Same manufacturer, opposite instruction, so confirm which system the i275 uses before spraying anything.",
  },
  "valve-lube": {
    name: "Holding tank valve lubricant",
    form: "Bottle, poured down the drain",
    where: "Black and gray gate valves",
    examples: "Thetford Drain Valve Lubricant, Valterra Gate Valve Lubricant",
    note: "Purpose built to swell nothing and to keep the blade sliding. Oil in a gate valve destroys the seal.",
  },
  "seal-lube": {
    name: "Toilet seal lubricant",
    form: "Tube or spray, non-petroleum",
    where: "Toilet ball seal and flush mechanism",
    examples: "Dometic Toilet Seal Lubricant, Thetford Toilet Seal Lubricant",
    note: "Petroleum swells the seal and causes it to stop holding water in the bowl. This is one of the most common self-inflicted RV toilet failures.",
  },
  "ptfe-tape": {
    name: "PTFE thread tape",
    form: "Roll",
    where: "Threaded water fittings and the anode rod",
    examples: "Any potable-water rated PTFE tape",
    note: "Three to four wraps clockwise looking at the male threads. Do not use tape on flare or compression fittings.",
  },
  none: {
    name: "No lubricant",
    form: "",
    where: "",
    examples: "",
    note: "This task does not involve lubrication.",
  },
};

// ---------------------------------------------------------------------------
// Rig facts that several tasks lean on
// ---------------------------------------------------------------------------

export const RIG = {
  trailer:
    "2025 Brinkley Model I 275 travel trailer, bumper pull, 30.8 ft hitch to bumper, tandem axle. 460Ah Vatrer LiFePO4 house bank, Renogy MPPT solar controller, Furrion Arctic compressor fridge, Furrion Chill Cube 18K variable speed AC with heat pump, Champion 4000W dual fuel inverter generator.",
  truck:
    "2018 Ram 2500 with the 6.7L Cummins turbodiesel. Tows near capacity continuously, so every Ram interval on this list is the severe duty number, not the normal one. Hot Shot's Secret EDT goes in at every fillup.",
};

// ---------------------------------------------------------------------------
// Task guidance
// ---------------------------------------------------------------------------

export const GUIDANCE = {
  // ======================= EXTERIOR =======================

  "lube-entry-door-hinges": {
    lube: ["dry-ptfe", "dry-silicone", "3in1"],
    avoid: "No 3-in-1 or any petroleum oil on the exterior hinges or anywhere near the door seal. It stays wet, grabs road dust, and turns into grinding paste.",
    time: "20 min for the whole door circuit",
    tools: ["Dry PTFE aerosol", "Silicone spray or seal conditioner", "3-in-1 oil for the interior only", "Clean rags", "Small flat screwdriver"],
    steps: [
      "Wipe each hinge barrel clean first. Spraying lube over grit just grinds the grit in.",
      "Dry PTFE into the entry door hinge barrels, the latch mechanism, the deadbolt throw, and the strike plate. Work the door ten times, then wipe the overspray off the paint.",
      "Same treatment on every baggage door and the cargo passthrough hinges. These are the ones that squeal first because they live in road spray.",
      "Silicone conditioner on the entry door bulb seal and on every baggage door seal. Wipe it on with a rag rather than blasting it, so you are not coating the paint.",
      "Inside the rig, 3-in-1 on cabinet hinges, the bathroom door pivots, and any drawer hardware that is not already dry-lubed.",
      "Check hinge screws while you are there. The entry door hinge screws back out from road vibration and a sagging door will chew its own seal.",
    ],
    specs: [],
    watch: [
      "Do the door seal before every hard freeze. A dry EPDM bulb seal welds itself to the frame overnight and tears when you open the door in the morning.",
      "Locks are a separate job with a separate product. Never spray PTFE or oil into a lock cylinder that you keep graphited.",
    ],
  },

  "spray-baggage-door-lock-tumblers-with-dry-graphite": {
    lube: ["dry-graphite"],
    avoid: "No oil, no WD-40, no PTFE spray into any cylinder that is on the graphite program. Mixing the two makes a black paste that jams the wafers and usually ends in drilling the lock out.",
    time: "10 min",
    tools: ["Dry graphite puffer bottle", "Compressed air or a can of duster", "Rag"],
    steps: [
      "Blow each cylinder out with air first to clear grit and old residue.",
      "One short puff of graphite straight into the keyway. More is not better. Excess graphite packs and binds.",
      "Insert the key and work it in and out ten or twelve times, rotating the cam through its full travel each way.",
      "Wipe the black residue off the door skin immediately. It stains gelcoat if it sits and gets wet.",
      "Repeat on every baggage door cam lock, the cargo passthrough locks, and the entry door deadbolt.",
    ],
    specs: [],
    watch: [
      "If a cylinder has ever had oil or WD-40 in it, do not graphite it. Flush it with an aerosol lock cleaner, let it dry fully, and switch that lock to a dry PTFE lock lube permanently.",
      "The hinges on these same doors want dry PTFE, not graphite. Two different products on the same door.",
    ],
  },

  "clean-and-lube-awning-moving-parts": {
    lube: ["dry-ptfe"],
    avoid: "No white lithium or wet grease on the arms. It runs down the fabric in the sun and leaves stains you will not get out.",
    time: "45 min",
    tools: ["Dry PTFE aerosol", "Bucket of mild soap and water", "Soft brush", "Step stool"],
    steps: [
      "Extend the awning fully on a dry day with no wind in the forecast.",
      "Wash the arms, the roller tube ends, and the fabric with mild soap. Rinse and let everything dry completely.",
      "Dry PTFE into the arm pivots, the elbow joints, the slider channels, and the roller tube end caps.",
      "Retract and extend three full cycles to work the lube through the travel.",
      "Check the arm mounting screws into the sidewall and the lag bolts at the top rail. These loosen from tow vibration.",
      "Inspect the fabric hem and the roller tube spring tension. Slack fabric on the road is what tears an awning off.",
    ],
    specs: [],
    watch: [
      "Never retract a wet awning and leave it. Mildew on acrylic is permanent.",
      "If the awning is a powered Carefree or Dometic, do not lube the motor gearbox. It is sealed.",
    ],
  },

  "adjust-screen-door-and-latch": {
    lube: ["dry-ptfe"],
    avoid: "No wet lube in the slider track. It collects sand and jams the door.",
    time: "20 min",
    tools: ["Dry PTFE aerosol", "Phillips screwdriver", "Vacuum or compressed air"],
    steps: [
      "Vacuum the bottom track and the slider channel. Sand in the track is almost always the actual complaint.",
      "Dry PTFE into the slider rollers, the track, and the latch tongue.",
      "Check the screen door hinge screws and the latch strike alignment. If the latch does not catch cleanly, loosen the strike, shift it, and retighten.",
      "Work the door twenty cycles and confirm it latches on its own without a shove.",
    ],
    specs: [],
    watch: [
      "A screen door that will not latch on its own will swing open at highway speed if the main door is left open at a stop. Fix the alignment, do not live with it.",
    ],
  },

  "clean-and-lube-entry-steps": {
    lube: ["dry-ptfe", "dielectric"],
    avoid: "No wet grease on the step arms. They sit directly in road spray and salt.",
    time: "30 min",
    tools: ["Dry PTFE aerosol", "Dielectric grease", "Wire brush", "Degreaser", "Socket set"],
    steps: [
      "Retract and extend the steps and watch where the motion is stiff or noisy.",
      "Wire brush any surface rust off the arms and the pivot brackets, then wipe with degreaser.",
      "Dry PTFE into every pivot point and linkage joint. Cycle five times.",
      "Check the mounting bolts to the frame. Step brackets loosen and then crack the mount.",
      "If the steps are electric, pull the motor connector, clean it, and put dielectric grease on it before reseating. Water in that plug is the usual cause of an intermittent step.",
    ],
    specs: [],
    watch: [
      "Rust on the arms is normal and cosmetic until it reaches a pivot or a weld. Watch the bracket welds specifically.",
    ],
  },

  "confirm-baggage-doors-seal-tight-and-are-not-leaking": {
    lube: ["dry-silicone"],
    avoid: "Nothing petroleum on the seals.",
    time: "20 min",
    tools: ["Flashlight", "Paper strip or dollar bill", "Silicone seal conditioner", "Phillips screwdriver"],
    steps: [
      "Close each door on a strip of paper and pull. If it slides out with no drag, the seal is not compressing there.",
      "Where it fails, adjust the cam on the latch or shim the strike so the door pulls in tighter.",
      "Look inside each compartment with a flashlight for water staining on the walls and floor, especially the lower corners.",
      "Condition the bulb seals with silicone.",
      "Check that the compartment drain holes are open. A blocked drain turns a small leak into standing water.",
    ],
    specs: [],
    watch: [
      "The passthrough is the compartment to watch. It runs the width of the rig and a leak there wicks into the underbelly insulation where you will not see it.",
    ],
  },

  "wash-exterior-fiberglass-and-metal": {
    lube: ["none"],
    time: "2 to 3 hours",
    tools: ["RV-specific wash soap", "Soft wash brush on an extension pole", "Two buckets", "Microfiber drying towels", "Step ladder"],
    steps: [
      "Work in the shade or early morning. Soap drying on hot gelcoat leaves streaks that need polishing out.",
      "Rinse top down first to carry the loose grit off before any brush touches the surface.",
      "Wash in sections top to bottom, rinsing each section before it dries.",
      "Pay attention to the front cap, which takes the bug load, and the rear, which takes the road film. Bug remover on the front cap before the brush.",
      "Rinse thoroughly and towel dry the horizontal surfaces to avoid water spots.",
      "While you are up close, look at every sealant bead. This is the best free inspection you get.",
    ],
    specs: [],
    watch: [
      "No automotive dish soap and nothing with degreaser. It strips wax and dulls gelcoat.",
      "Keep the brush off the decals or you will lift the edges.",
    ],
  },

  "apply-non-abrasive-wax-to-exterior": {
    lube: ["none"],
    time: "4 to 6 hours",
    tools: ["Non-abrasive RV wax or a marine-grade sealant", "Applicator pads", "Microfiber buffing towels", "Step ladder"],
    steps: [
      "Wash and fully dry the rig first. Waxing over grit is sanding.",
      "Work one panel at a time in the shade. Thin coats, not thick ones.",
      "Let it haze, then buff off with clean microfiber, flipping to a dry side often.",
      "Skip the roof unless the product is rated for it. Wax on a walkable roof is a fall hazard.",
      "Keep wax off the decals unless it is decal safe.",
    ],
    specs: [],
    watch: [
      "Non-abrasive is the operative word. Polishing compound on a thin gelcoat front cap will burn through it.",
      "This is the lowest priority item on the whole list. Skipping it costs appearance, not integrity.",
    ],
  },

  // ======================= ROOF & SEALS =======================

  "inspect-roof-seams-and-sealants": {
    lube: ["none"],
    time: "1 to 2 hours",
    tools: ["Ladder", "Flashlight", "Self-leveling lap sealant for horizontal surfaces", "Non-sag sealant for vertical surfaces", "Denatured alcohol", "Plastic putty knife"],
    steps: [
      "Confirm the roof is rated to walk before getting on it, and stay over the trusses.",
      "Work the whole perimeter first, then every penetration: vents, fans, AC shroud, antenna, solar mounts, refrigerator vent, plumbing stacks, and the front and rear caps.",
      "You are looking for cracking, chalking, lifted edges, pinholes, and any place the sealant has pulled away from the substrate.",
      "Clean any area you plan to reseal with denatured alcohol and let it flash off.",
      "Self-leveling sealant on horizontal surfaces only. Non-sag on the vertical walls and cap seams. They are not interchangeable.",
      "Match the sealant chemistry to the existing bead and the roof membrane type. Wrong chemistry will not bond and will lift within a season.",
    ],
    specs: [],
    watch: [
      "This is the single highest-value item on the whole list. Water intrusion is what totals trailers, and it does it slowly and invisibly.",
      "Solar mounts are the newest penetrations on this roof, so they get extra attention.",
      "Do not reseal over failed sealant. Pull the loose material first or you are just capping the leak path.",
    ],
  },

  "clean-roof": {
    lube: ["none"],
    time: "2 hours",
    tools: ["Roof-safe cleaner matched to the membrane", "Medium bristle brush", "Hose", "Ladder"],
    steps: [
      "Confirm the membrane type before picking a cleaner. Petroleum solvents and citrus cleaners destroy EPDM.",
      "Rinse first to clear loose debris, then work in sections front to back.",
      "Scrub gently. Aggressive scrubbing on EPDM accelerates chalking.",
      "Rinse thoroughly and make sure runoff is not sheeting down the sidewalls carrying dirt.",
      "Clear the AC shroud drains and the gutter spouts while you are up there.",
    ],
    specs: [],
    watch: [
      "Do this before the seam inspection, not after. You cannot see a hairline crack through a layer of grime.",
      "Never use a pressure washer on the roof or on any sealant bead.",
    ],
  },

  "clean-and-lube-roof-vent-mechanisms": {
    lube: ["dry-ptfe", "dry-silicone"],
    avoid: "No wet oil on the scissor arms. It drips onto the ceiling panel below.",
    time: "30 min",
    tools: ["Dry PTFE aerosol", "Silicone conditioner", "Soft brush", "Screwdriver", "Ladder"],
    steps: [
      "Open each vent fully and brush the debris out of the scissor mechanism and the crank gears.",
      "Dry PTFE on the scissor pivots, the crank worm gear, and the hinge points.",
      "Silicone conditioner on the vent lid gasket where it meets the flange.",
      "Cycle each vent five times and confirm it seats flat and even when closed.",
      "On the Maxxair or Fan-Tastic style powered fans, clean the blade and check the lid arms for cracking. UV kills those arms before anything else fails.",
    ],
    specs: [],
    watch: [
      "A vent lid that does not seat flat is a slow leak that shows up as a stained ceiling panel months later.",
      "Vent covers change the game here. If you have them installed, check that the cover mounting screws have not backed out.",
    ],
  },

  // ======================= CHASSIS =======================

  "check-and-clean-all-slide-seals": {
    lube: ["dry-silicone"],
    avoid: "Absolutely nothing petroleum based. Petroleum swells EPDM, the seal loses its shape, and then it does not seal at all.",
    time: "45 min",
    tools: ["Silicone seal conditioner or Thetford slide seal conditioner", "Mild soap and water", "Clean rags", "Soft brush"],
    steps: [
      "Extend the slide fully.",
      "Wash the wiper seals and the bulb seals with mild soap and water. Get the grit out of the seal lip specifically.",
      "Let them dry completely. Conditioner over water does nothing.",
      "Wipe conditioner on with a rag, working it into the full profile of both the top wiper and the bulb seal.",
      "Do the same on the seal face of the slide box itself, not just the wall side.",
      "Cycle the slide once and check that the wipers lay flat rather than folding under.",
    ],
    specs: [],
    watch: [
      "Do this before every hard freeze without exception. A dry seal freezes to the slide box and tears off the first time you retract.",
      "A folded-under wiper seal will leak on the first rain. Check the corners specifically.",
    ],
  },

  "check-hitch-and-coupler-clean-and-lubricate": {
    lube: ["white-lithium", "dry-ptfe"],
    avoid: "Do not grease the ball if you run an Equal-i-zer or any weight distribution hitch that specifies a dry ball. Grease on a dry-ball WD hitch defeats the sway control entirely.",
    time: "45 min",
    tools: ["White lithium grease", "Dry PTFE", "Wire brush", "Degreaser", "Torque wrench", "Rags"],
    steps: [
      "Degrease and wire brush the coupler throat, the latch mechanism, and the ball.",
      "Inspect the coupler for cracks, elongation of the throat, and any deformation. Check the coupler bolts or welds to the A-frame.",
      "White lithium into the coupler latch mechanism and the pivot of the latch handle. Work it through the full lock and unlock travel.",
      "White lithium on the tongue jack acme screw. Extend the jack fully to expose the screw, apply, then run it through three full cycles.",
      "Dry PTFE on the safety chain hooks and the breakaway cable clip.",
      "Pull the breakaway pin and confirm the brakes actually lock. Reset it. Most people never test this.",
      "Clean and dielectric grease the 7-pin connector, then confirm all functions with the truck: running lights, left, right, brake, and reverse.",
      "Ball: dry if your WD hitch calls for dry, greased if it does not. Follow the hitch manufacturer, not the trailer manual.",
    ],
    specs: [
      ["Ball size", "Confirm against the coupler stamping, do not assume"],
      ["Coupler latch", "Must lock with the pin fully seated and no play in the throat"],
    ],
    watch: [
      "The i275 is a bumper pull at 30.8 ft, which is a lot of trailer behind a ball. Weight distribution and sway control setup matters more here than on a short box trailer.",
      "Check the receiver pin and clip, and the shank bolts on the WD head, at the same time. They walk loose.",
    ],
  },

  "check-frame-for-chipped-paint-and-rust": {
    lube: ["none"],
    time: "45 min",
    tools: ["Creeper or ground pad", "Flashlight", "Wire brush or wire cup brush on a drill", "Rust converter", "Rust-inhibiting primer", "Topcoat"],
    steps: [
      "Work the full length of both frame rails, the A-frame, the crossmembers, and every bracket weld.",
      "Surface rust on a rail is cosmetic. Scaling rust, pitting, and any rust at a weld is not.",
      "Wire brush the affected area back to sound metal.",
      "Rust converter, then rust-inhibiting primer, then topcoat. Skipping the converter means it bleeds back through in months.",
      "Pay attention to where the underbelly fasteners and bracket bolts penetrate. Dissimilar metal contact is where it starts.",
    ],
    specs: [],
    watch: [
      "Anywhere the rig has seen road salt, this moves from routine to important.",
      "Spring hangers and shackle brackets are the welds that matter. Rust there is a structural finding, not a paint finding.",
    ],
  },

  "check-frame-and-underbelly-for-damage-and-loose-wires": {
    lube: ["none"],
    time: "1 hour",
    tools: ["Creeper", "Flashlight", "Zip ties", "Underbelly repair tape", "Socket set"],
    steps: [
      "Walk the full underside looking for tears, sagging, or separated seams in the coroplast underbelly.",
      "Any sagging panel is holding water or has lost fasteners. Both matter.",
      "Look for wiring that has come loose from its clips and is hanging where it can chafe on a crossmember or catch road debris.",
      "Check that plumbing lines are still supported and are not resting on a sharp edge.",
      "Confirm the tank straps and their bolts are tight. A full black tank is a lot of weight on those straps.",
      "Repair underbelly tears with proper underbelly tape, not duct tape. Open underbelly lets rodents into the insulation.",
    ],
    specs: [],
    watch: [
      "A chafed wire under an RV is a fire risk and it is invisible from above. This inspection is worth doing carefully.",
      "New rodent entry points show up as chewed insulation hanging through a tear.",
    ],
  },

  "slide-out-room-adjustment-by-certified-rv-technician": {
    lube: ["slide-lube"],
    avoid: "Do not put grease on a Schwintek in-wall system. Confirm which system the i275 runs before anyone sprays anything on it.",
    time: "Shop visit",
    tools: ["Shop job"],
    steps: [
      "Before the appointment, note exactly what the slide is doing: hesitation, uneven travel, one side leading, unusual noise, or a gap at a corner when closed.",
      "Confirm the slide system type and tell the shop. Schwintek in-wall and through-frame rack and pinion get opposite lubrication and opposite adjustment procedures.",
      "Ask them to check the seal contact all the way around when the room is in, not just the mechanism travel.",
      "Get the specific adjustment made written on the invoice so the next shop has a starting point.",
    ],
    specs: [],
    watch: [
      "A slide that is out of adjustment eats its own seals and then leaks. The mechanism complaint and the water complaint are the same problem.",
      "Between shop visits, keep the rails clean and use the right lube for the system. That is most of what keeps it in adjustment.",
    ],
    shop: true,
  },

  // ======================= RUNNING GEAR =======================

  "repack-wheel-bearings": {
    lube: ["bearing-grease"],
    avoid: "Never mix grease types in a hub. If you cannot confirm what is in there, clean every trace out rather than pumping new grease on old.",
    time: "3 to 4 hours for all four, or a shop visit",
    tools: ["Jack and jack stands rated for the load", "Torque wrench", "Bearing packer or patience", "New seals", "NLGI #2 lithium complex grease", "Brake cleaner", "Cotter pins"],
    steps: [
      "Chock the wheels that stay down and support the frame properly. Never work under a trailer on a bottle jack alone.",
      "Pull the hub, remove the old grease completely, and clean the bearings and races in solvent.",
      "Inspect the races for pitting, scoring, bluing, or spalling. Any of those means the race and bearing get replaced as a set, not repacked.",
      "Repack both the inner and outer bearing fully, working grease through from the wide side until it comes out the narrow side.",
      "Always install a new grease seal. Reusing a seal is how you end up with grease on the brake shoes.",
      "Reinstall and set the preload: tighten the castle nut while rotating the hub to seat the bearings, back off to just loose, then snug finger tight and back to the nearest cotter pin slot. The hub should turn freely with no perceptible play.",
      "New cotter pin every time. Never reuse one.",
      "Inspect the brake shoes, the magnet, and the backing plate while the hub is off. This is the only time you can see them, so do it now.",
    ],
    specs: [
      ["Grease", "NLGI #2 lithium complex, wheel bearing rated"],
      ["Interval", "12,000 miles or 12 months, whichever comes first"],
      ["Seal", "New every time, no exceptions"],
    ],
    watch: [
      "Trailer mileage in this system is an estimate of towed miles, so lean on the 12 month trigger rather than the 12,000 mile one.",
      "If the axles are EZ-Lube style with a zerk, pumping grease in is not a substitute for a repack. It pushes new grease in without removing the old and it can blow the rear seal.",
      "This is the one item on the list where a failure strands you on a shoulder and can take out the fender and sidewall with it.",
    ],
    shop: true,
  },

  "check-brake-amp-draw-shoe-wear-and-adjustment": {
    lube: ["none"],
    avoid: "Nothing goes on the brake drum surface or the shoe friction material. Not lube, not cleaner residue, nothing.",
    time: "2 hours, or bundle it with the bearing repack",
    tools: ["Clamp meter", "Brake adjustment spoon", "Jack and stands", "Brake cleaner", "Flashlight"],
    steps: [
      "With the trailer connected and the brakes applied, measure current draw on the brake circuit with a clamp meter.",
      "Compare against the magnet spec for the axles. Low draw on one wheel usually means a failing magnet or a bad ground.",
      "Pull each drum and measure or eyeball shoe thickness. Look for uneven wear side to side, which points to an adjustment or magnet problem.",
      "Check the magnet face for wear, scoring, or a worn spot that no longer sits flat against the armature surface.",
      "Adjust each brake through the slot in the backing plate: tighten until the wheel just drags, then back off until it turns freely with a light drag.",
      "Test the controller gain on a gravel or empty lot before hitting the road.",
    ],
    specs: [
      ["Adjustment", "Tighten to drag, back off to a light free spin"],
      ["Wear pattern", "Should be even across the shoe and matched side to side"],
    ],
    watch: [
      "This is the item that matters on a long grade with 30 feet of trailer behind you. Do not let it slide.",
      "Grease on a shoe from a failed inner seal means that brake is done. Replace the shoes, do not try to clean them.",
    ],
    shop: true,
  },

  "have-brakes-and-hubs-inspected-by-certified-rv-technician": {
    lube: ["none"],
    time: "Shop visit",
    tools: ["Shop job"],
    steps: [
      "Book this together with the bearing repack. Same teardown, so paying for it twice is wasted money.",
      "Ask specifically for magnet condition, drum condition and out-of-round measurement, shoe thickness, and backing plate hardware.",
      "Ask them to confirm the brake wiring and grounds at each backing plate. A bad ground presents exactly like a bad magnet.",
      "Get measured shoe thickness written on the invoice so you can trend it rather than guessing next year.",
    ],
    specs: [],
    watch: [
      "Full-timing means these brakes see far more duty cycles than the annual interval assumes. Once a year is a floor, not a ceiling.",
    ],
    shop: true,
  },

  "clean-and-lube-axle-and-suspension-moving-parts": {
    lube: ["dry-ptfe", "white-lithium"],
    avoid: "No wet grease on anything that sits in the road spray path unless it is inside a bushing housing. It becomes a grit magnet.",
    time: "1 hour",
    tools: ["Dry PTFE aerosol", "White lithium or a grease gun if there are zerks", "Wire brush", "Creeper", "Torque wrench"],
    steps: [
      "Clean the equalizer, the shackle links, the spring eyes, and the hanger brackets before applying anything.",
      "If the suspension has grease zerks, which it does on wet bolt or MORryde style kits, hit each one with a grease gun until you see fresh grease at the joint.",
      "If there are no zerks, dry PTFE on the shackle pivots and the equalizer pivot.",
      "Check every shackle bolt and hanger bolt for looseness and for elongation of the hole. Elongated holes are a real finding.",
      "Look at the leaf springs for cracked or shifted leaves and at the center bolt.",
      "Check the shock mounts if the rig has shocks.",
    ],
    specs: [],
    watch: [
      "Wet bolt kits need grease on a schedule or the bushings wear out and the axles start to misalign, which shows up as feathered tire wear.",
      "Feathered or scalloped tire wear traces back here almost every time. If you see it on the tires, look at the suspension.",
    ],
  },

  "wash-axles-and-suspension": {
    lube: ["none"],
    time: "30 min",
    tools: ["Hose", "Degreaser", "Brush", "Creeper"],
    steps: [
      "Rinse the underside, concentrating on the axles, spring hangers, shackles, and the brake backing plates.",
      "Degreaser on the built-up road film, then rinse.",
      "Keep the pressure moderate. Do not blast water directly at a wheel bearing seal or into a backing plate.",
      "Let everything dry and then look for fresh rust or grease weeping past a seal. Clean metal shows problems that dirty metal hides.",
    ],
    specs: [],
    watch: [
      "This matters most after road salt. If you have been running winter roads, do it sooner than the six month interval.",
      "This should immediately precede the axle and suspension lube task. Clean first, then lube.",
    ],
  },

  // ======================= TIRES =======================

  "check-tire-inflation-pressure": {
    lube: ["none"],
    time: "15 min",
    tools: ["Quality dial or digital gauge reading to at least 100 psi", "Compressor or a station with a high pressure line", "Valve extenders if the inner sidewalls are hard to reach"],
    steps: [
      "Check cold. Cold means the rig has not moved for at least three hours and has not been sitting in direct sun on that side.",
      "Set to the cold pressure on the federal certification placard, not the number molded into the sidewall. The sidewall number is the maximum, not the target.",
      "Check all four trailer tires plus the spare. The spare is the one everybody skips and then finds flat when they need it.",
      "Inspect the valve stems for cracking at the base while you are down there.",
      "Recheck the spare pressure every time. It loses pressure sitting just like the others.",
    ],
    specs: [
      ["Target", "The cold psi on the trailer placard. On load range E ST tires this is typically 80 psi, but confirm against your own placard"],
      ["Timing", "Cold only. Hot pressure reads 5 to 10 psi high and bleeding it down leaves you underinflated"],
    ],
    watch: [
      "Underinflation is the number one cause of trailer tire failure, ahead of age and ahead of load. Heat builds in a flexing sidewall and the tire comes apart.",
      "If you run a TPMS, still verify with a gauge monthly. Sensors drift.",
      "Elevation and big temperature swings both move pressure. Recheck when the weather turns or you change altitude significantly.",
    ],
  },

  "inspect-tires-for-wear-and-damage": {
    lube: ["none"],
    time: "20 min",
    tools: ["Flashlight", "Tread depth gauge", "Chalk or a marker"],
    steps: [
      "Read the DOT date code on each tire. The last four digits are week and year of manufacture.",
      "Look at the tread pattern across the full width. Even wear is fine. Center wear means overinflation, shoulder wear means underinflation, and feathering or scalloping means a suspension or alignment issue.",
      "Check both sidewalls, including the inner ones, for cracking, bulges, cuts, and any deformation.",
      "Run a hand around the tread for flat spots and belt separation, which you feel before you see.",
      "Note the tread depth and compare against last time so you can trend it.",
      "Look at the wheel itself for cracks around the lug holes and at the bead.",
    ],
    specs: [
      ["Age limit", "ST trailer tires are commonly retired at 5 to 7 years regardless of tread depth"],
      ["Replace at", "2/32 inch tread minimum, but any sidewall bulge or cord showing means replace now"],
    ],
    watch: [
      "Trailer tires almost always time out before they wear out. Date code is the more useful number.",
      "A bulge in a sidewall means the tire is coming apart internally. That is a park-it-now finding, not a watch-it finding.",
      "Uneven wear side to side on the same axle points at the suspension or an axle alignment issue, not at the tires.",
    ],
  },

  "re-torque-lug-nuts": {
    lube: ["none"],
    avoid: "Never put anti-seize, oil, or grease on wheel studs. Torque specs are for clean dry threads and lubricated studs will be badly overtightened at the same wrench reading.",
    time: "20 min",
    tools: ["Torque wrench that covers the range", "Correct deep socket", "Chock"],
    steps: [
      "Confirm the torque spec from the Brinkley documentation or the sticker in the rig. Do not guess from a generic chart.",
      "Torque in a star pattern, never around the circle.",
      "Come up in stages rather than going straight to final: roughly a quarter, then half, then full.",
      "Do all four wheels, then go around a second time to confirm nothing moved.",
      "Reset the reminder any time a wheel comes off for any reason.",
    ],
    specs: [
      ["Pattern", "Star, in three staged passes"],
      ["Typical range", "Trailer wheels with 1/2 inch studs are commonly 90 to 120 lb-ft, 9/16 inch studs 120 to 140 lb-ft. Confirm yours"],
      ["After a wheel comes off", "Re-torque at 10, 25, and 50 miles"],
    ],
    watch: [
      "New wheels and any wheel that has been removed need re-torquing within the first 50 miles. This is the most common cause of a lost wheel on a trailer.",
      "Do not use an impact gun to final tighten. Snug with the gun if you like, but the final number comes off a torque wrench.",
    ],
  },

  // ======================= PLUMBING & WATER =======================

  "sanitize-fresh-water-system": {
    lube: ["none"],
    time: "Half a day including the dwell",
    tools: ["Unscented household bleach", "Measuring cup", "Funnel", "Fresh water hose dedicated to potable use", "Spare inline filter"],
    steps: [
      "Drain the fresh tank and the water heater, and bypass or remove any inline and canister filters. Bleach destroys carbon filter media.",
      "Mix a quarter cup of unscented household bleach per 15 gallons of fresh tank capacity into a bucket of water first. Never pour bleach straight into the tank.",
      "Pour the diluted solution into the fresh tank, then fill the tank completely with potable water.",
      "Run every fixture, hot and cold, until you smell chlorine at each one. That includes the outside shower, the toilet, the ice maker line if fitted, and the washer hookup if there is one.",
      "Let it sit at least four hours. Overnight is better.",
      "Drain everything completely, then refill and flush until the chlorine smell is gone. Usually two to three full tank flushes.",
      "Reinstall fresh filters after the final flush, not before.",
    ],
    specs: [
      ["Ratio", "1/4 cup unscented bleach per 15 gallons of tank capacity"],
      ["Dwell", "4 hours minimum, overnight preferred"],
      ["Filters", "Removed or bypassed during the process, replaced after"],
    ],
    watch: [
      "Never use scented or splashless bleach. The additives are not meant to go through a potable system.",
      "Full-timing on varied and sometimes questionable water sources is an argument for doing this more than annually, especially after a stay where the water tasted or smelled off.",
      "Bleach and a hot water heater anode do not get along. Drain the heater and pull or bypass the anode if the rig has one.",
    ],
  },

  "water-heater-anode-rod-check": {
    lube: ["ptfe-tape"],
    time: "45 min",
    tools: ["Socket for the anode, commonly 1-1/16 inch", "PTFE thread tape", "Tank flush wand", "Bucket"],
    steps: [
      "First, confirm the i275 actually has an anode. Suburban tank heaters have a steel tank and an anode rod. Atwood and Dometic aluminum tanks do not, and tankless units like the Furrion or the Truma AquaGo have nothing to check here. If yours is tankless, mark this task not applicable and stop.",
      "Turn the heater off, both gas and electric, and let the tank cool completely. Scalding is a real risk here.",
      "Kill the water supply and open a hot tap plus the pressure relief valve to break the vacuum.",
      "Remove the anode and let the tank drain fully.",
      "Flush the tank with a wand until the water runs clear. Sediment is what kills heating elements.",
      "Inspect the rod. Replace it when it is down to roughly half its original diameter or the steel core wire is exposed.",
      "Wrap the threads with PTFE tape and reinstall. Snug, not gorilla tight.",
      "Refill with the heater off, purge air at a hot tap until it runs steady, and only then turn the heater back on. Firing a dry element destroys it instantly.",
    ],
    specs: [
      ["Replace at", "Roughly 50 percent consumed or core wire showing"],
      ["Thread sealing", "PTFE tape, 3 to 4 wraps"],
    ],
    watch: [
      "Never turn the heater on before you have confirmed the tank is full and purged. This is the most common way people destroy a water heater.",
      "Soft water and heavily chlorinated water both eat an anode faster. Check more often if you have been on either.",
    ],
  },

  "check-hoses-fittings-and-pipes-for-leaks": {
    lube: ["none"],
    time: "45 min",
    tools: ["Flashlight", "Dry paper towel", "Basin wrench or crescent wrench", "PTFE tape"],
    steps: [
      "Pressurize the system, either on city water or with the pump running and everything closed.",
      "Watch the pump. If it cycles with no fixture open, there is a leak or a check valve issue somewhere.",
      "Work every accessible connection with a dry paper towel rather than your eye. Paper finds seepage that a flashlight misses.",
      "Cover the pump inlet and outlet, the water heater connections, every fixture supply, the toilet supply, the outside shower, the city water inlet, and the low point drains.",
      "Look at the PEX crimp rings for corrosion or a ring that has slid.",
      "Check the underbelly access points and the belly itself for staining or drips, which is where a hidden leak shows up.",
      "Snug fittings that weep. Do not overtighten plastic fittings, they crack.",
    ],
    specs: [],
    watch: [
      "A pump that cycles at night with everything off is the earliest warning you get of a leak. Pay attention to it.",
      "Freeze damage shows up as a split that only leaks under pressure. If the rig has ever been below freezing without being protected, check harder.",
    ],
  },

  // ======================= APPLIANCES =======================

  "clean-ac-filters-and-inspect-coils": {
    lube: ["none"],
    time: "30 min",
    tools: ["Vacuum with a brush attachment", "Mild soap and water", "Fin comb", "Coil cleaner", "Ladder"],
    steps: [
      "Pull the return air filters from the ceiling assembly. On a ducted Chill Cube these come out at the return grille.",
      "Vacuum the loose dust off, then wash in mild soapy water, rinse, and let dry completely before reinstalling. A damp filter grows mold.",
      "Twice a year, get on the roof, pull the shroud, and look at the condenser coil. Vacuum the debris out and straighten bent fins with a fin comb.",
      "Confirm the condensate drains are clear. A blocked drain pan overflows into the ceiling.",
      "Check the shroud for cracks. UV makes them brittle and they come apart at highway speed.",
    ],
    specs: [
      ["Filter cleaning", "Monthly, more often in dusty conditions"],
      ["Coil inspection", "Twice a year"],
    ],
    watch: [
      "A dirty filter is the number one cause of an AC that will not keep up. Before troubleshooting anything else, check the filter.",
      "The Chill Cube is a heat pump, so the same coil is working in heating mode too. Dirty coils hurt both directions.",
    ],
  },

  "check-burner-tubes-and-vents-are-clear": {
    lube: ["none"],
    time: "30 min",
    tools: ["Flashlight", "Compressed air", "Small brush", "Mirror"],
    steps: [
      "This applies to the furnace, the water heater, and the range. Not the fridge. The i275 has a Furrion compressor fridge, which has no burner at all.",
      "Look into the furnace and water heater burner compartments for insect nests, spider webs, and rust flakes. Mud daubers in a burner tube is the classic and it causes a yellow lazy flame or a no-light condition.",
      "Blow the tubes clear with compressed air, working from the burner end outward.",
      "Check the exhaust vents outside for obstruction and for a bird nest.",
      "Light each appliance and watch the flame. It should be crisp and blue. Yellow, lifting, or lazy means a restriction or an air adjustment issue.",
      "Confirm the range burner ports are clear and the flame is even all the way around.",
    ],
    specs: [
      ["Good flame", "Crisp blue, stable, not lifting off the port"],
      ["Bad flame", "Yellow, sooting, lazy, or lifting"],
    ],
    watch: [
      "A restricted burner is a carbon monoxide risk, not just an efficiency issue. Do not run an appliance with a yellow flame.",
      "If you have been parked for a while, especially in the south, expect insects. This is not a rare failure.",
    ],
  },

  "clean-and-sanitize-appliances": {
    lube: ["none"],
    time: "2 hours",
    tools: ["Baking soda", "White vinegar", "Mild dish soap", "Microfiber cloths", "Vacuum"],
    steps: [
      "Fridge: empty it, wash the interior with a baking soda solution, and clean the door gasket. On the Furrion Arctic compressor unit, also pull the exterior vent cover and clear the condenser and the fan of dust, which is what causes poor cooling on a compressor fridge.",
      "Confirm the fridge drain is clear so condensate is not pooling in the bottom of the box.",
      "Microwave and oven: clean per the manual, and check the microwave vent filter.",
      "Range: pull the grates, clean the burner caps, and confirm the ports are clear.",
      "Washer and dryer if fitted: clean the lint trap thoroughly and check the vent run.",
      "Vacuum behind and under everything you can access. Dust behind an appliance is a fire load.",
    ],
    specs: [],
    watch: [
      "The Furrion Arctic is a compressor fridge, not absorption. It does not need to be level to operate and it does not have a boiler, but it does depend entirely on airflow across the condenser. Dust there is the usual cause of a fridge that will not hold temperature.",
    ],
  },

  "check-appliance-settings-and-adjustments-per-manufacturer-guide": {
    lube: ["none"],
    time: "1 hour",
    tools: ["The manuals", "Notepad"],
    steps: [
      "Work through each appliance manual's annual checks rather than treating this as a vague catch-all.",
      "Furnace: confirm the thermostat calls correctly, the blower spins up before ignition, and it cycles cleanly rather than short cycling.",
      "Water heater: verify the thermostat setting and test the pressure relief valve by lifting the lever and confirming it reseats.",
      "Chill Cube: confirm it responds correctly in COOL, DRY, FAN, and AUTO, and that heat pump operation engages when the setpoint is above room temperature. Verify the GEAR current limit setting is where you want it for the pedestals you use.",
      "Fridge: confirm the setpoint and that it holds temperature with a separate thermometer, not just the display.",
      "Note anything that has drifted from where you set it. Control boards do reset themselves.",
    ],
    specs: [],
    watch: [
      "The heat pump on the Chill Cube is effective down to roughly 40 to 45°F ambient. Below that, the propane furnace is the right answer and the heat pump is just running expensive resistance-adjacent cycles.",
    ],
  },

  // ======================= ELECTRICAL & BATTERY =======================

  "check-and-service-batteries": {
    lube: ["dielectric"],
    avoid: "No water to add and no equalization charge. This is a lithium bank, not flooded lead acid. Running a lead acid equalize cycle on LiFePO4 can damage cells.",
    time: "45 min",
    tools: ["Torque wrench or a good ratchet", "Wire brush", "Dielectric grease", "Multimeter", "The Vatrer app"],
    steps: [
      "Open the Vatrer app and record state of charge, pack voltage, and individual cell voltages for each battery in the bank.",
      "Look at cell delta specifically. Cells drifting apart is the earliest sign of a balancing problem, and it is invisible from the pack voltage alone.",
      "Confirm each battery's BMS is reporting no faults and check the temperature readings.",
      "Physically inspect every terminal for corrosion and every cable for chafe, discoloration, or a loose lug.",
      "Torque the terminal bolts to the Vatrer spec. Loose lithium terminals get hot, and hot terminals are how battery fires start.",
      "Clean any corrosion with a wire brush, then apply dielectric grease over the outside of the connection.",
      "Verify the Renogy MPPT charge profile is still set to LiFePO4 with the correct absorption and float voltages, and confirm the converter is on its lithium setting rather than lead acid.",
      "Check the shunt or monitor connections while you are in there.",
    ],
    specs: [
      ["Bank", "460Ah Vatrer LiFePO4"],
      ["Do not", "Add water, equalize, or leave it on a lead acid charge profile"],
      ["Terminal torque", "Per the Vatrer manual, and it matters more than on lead acid"],
    ],
    watch: [
      "The converter's lithium versus lead acid selector is worth reconfirming every time. If it gets bumped to lead acid, the float voltage sits inside LFP's resting range and the bank slowly discharges under standby loads overnight.",
      "Below freezing, LiFePO4 must not accept charge current unless the batteries have internal heating and it is active. Confirm low temperature charge protection is working before winter.",
    ],
  },

  "test-all-gfci-outlets": {
    lube: ["none"],
    time: "15 min",
    tools: ["GFCI outlet tester with a test button", "Flashlight"],
    steps: [
      "Identify the GFCI head outlet and everything downstream of it. In most rigs a single GFCI protects the bath, the kitchen, the exterior outlets, and sometimes the bedroom.",
      "Press the TEST button on the GFCI itself. It should trip immediately and kill power to itself and everything downstream.",
      "Confirm the downstream outlets are actually dead with a tester. If any downstream outlet still has power, the wiring is wrong and that is a real finding.",
      "Press RESET and confirm power returns everywhere.",
      "Then use a plug-in tester with a test button at each downstream outlet and confirm each one trips the GFCI.",
      "Check the exterior outlet covers are intact and sealing.",
    ],
    specs: [
      ["Must trip", "From the GFCI's own test button and from a plug-in tester at every downstream outlet"],
    ],
    watch: [
      "A GFCI that will not reset usually means an actual ground fault somewhere, not a bad GFCI. Do not just replace it and move on.",
      "Running off the inverter, GFCI behavior can differ depending on how the inverter bonds neutral to ground. Test both on shore power and on inverter so you know how each behaves.",
    ],
  },

  "clean-solar-panels": {
    lube: ["none"],
    time: "30 min",
    tools: ["Soft brush or wash mitt on an extension pole", "Mild soap", "Hose", "Squeegee", "Ladder"],
    steps: [
      "Do it early morning or evening. Cold water on hot glass can crack a panel.",
      "Rinse first to float the grit off before anything touches the glass.",
      "Wash with mild soap and a soft mitt. Nothing abrasive and no ammonia based glass cleaner, which degrades the anti-reflective coating.",
      "Rinse and squeegee. Water spots and mineral film cut output.",
      "While you are up there, check the mounting hardware, the sealant around each foot, and the wiring for UV damage or chafe.",
      "Note the Renogy controller output before and after. It is a useful before-and-after and tells you whether cleaning is worth doing more often at your current parking spots.",
    ],
    specs: [],
    watch: [
      "Bird droppings and tree sap cause hard shading, which knocks out a whole string rather than just dimming it. Those come off promptly, not on the quarterly schedule.",
      "The solar mounts are penetrations in the roof. Every time you clean the panels, look at their sealant.",
    ],
  },

  "exercise-generator-under-load": {
    lube: ["none"],
    time: "45 min",
    tools: ["The Champion 4000W", "Fresh fuel or a propane bottle", "A real load, such as the AC"],
    steps: [
      "Run it outside, well away from the rig, with the exhaust pointed away and never under an awning or into an open window.",
      "Start and let it warm up for a few minutes at no load.",
      "Apply a real load. Running an inverter generator unloaded does not accomplish the thing this task exists for. The AC compressor is the honest test.",
      "Run it under load for at least 30 minutes. This burns off moisture in the crankcase and keeps the carburetor circuits wet.",
      "Listen for surging, hunting, or a rough note under load. Those are the early symptoms.",
      "If you have been running gasoline, either run the carb dry before shutdown or make sure the fuel is stabilized.",
      "Log the runtime hours. The service intervals on the Champion are hour based, not calendar based.",
    ],
    specs: [
      ["Load", "Real load, ideally the AC. Unloaded running does not count"],
      ["Duration", "30 minutes minimum"],
    ],
    watch: [
      "Carbon monoxide kills people doing exactly this. Distance and exhaust direction are not optional.",
      "Running on propane avoids the stale fuel and gummed carburetor problem entirely. If the generator mostly sits, propane is the better default fuel for it.",
    ],
  },

  "service-generator-per-manufacturer-manual": {
    lube: ["none"],
    time: "1 hour",
    tools: ["10W-30 engine oil", "Oil drain pan", "Funnel", "New spark plug", "Air filter", "Spark plug socket", "Feeler gauge"],
    steps: [
      "Warm the engine briefly so the oil flows, then shut it down and let it cool enough to handle safely.",
      "Drain the oil and refill to the dipstick. Verify the capacity and the exact oil grade against the Champion manual for your model rather than assuming.",
      "Clean or replace the air filter. A foam element gets washed, dried, and lightly oiled. A paper element gets replaced.",
      "Pull the spark plug, check the gap and the electrode condition, and replace it if it is worn or fouled.",
      "Inspect the fuel line and the propane hose and regulator for cracking.",
      "Clean the cooling air intake screens. An inverter generator that overheats usually does it because the intake is packed with dust.",
      "Start it and confirm it runs clean under load after the service.",
    ],
    specs: [
      ["Oil", "10W-30 for typical operating temperatures, but confirm against the Champion manual"],
      ["First service", "Initial oil change is much earlier than the ongoing interval, typically around 20 hours on a new unit"],
      ["Ongoing", "Hour based, commonly 100 hours or annually"],
    ],
    watch: [
      "This unit shows as never logged on purpose. It was bought new and separately from the trailer, so its clock does not start with the trailer baseline. Log the first real service and the interval starts from there.",
      "Track engine hours, not just dates. A generator that runs hard boondocking hits 100 hours far faster than the annual interval implies.",
    ],
  },

  // ======================= SAFETY =======================

  "check-detector-operation-and-replace-batteries": {
    lube: ["none"],
    time: "20 min",
    tools: ["Fresh batteries", "Step stool", "Marker"],
    steps: [
      "Test the smoke detector with its test button and confirm it is loud enough to wake you from the bedroom with the door closed. Test it, do not assume.",
      "Test the LP and CO detector the same way. These have a hard end-of-life date, usually 5 to 7 years from manufacture, after which they stop working reliably regardless of battery.",
      "Check the manufacture date printed on the back of each detector. Replace any that are past their service life. This is not optional and it is not a battery issue.",
      "Replace the batteries even if the unit has not chirped. Do it on schedule.",
      "Write the replacement date on the detector with a marker.",
      "The LP detector mounts low because propane is heavier than air. Confirm nothing has been stacked in front of it.",
    ],
    specs: [
      ["Detector life", "5 to 7 years from date of manufacture, then replace the unit"],
      ["Battery", "Replace on the 6 month schedule, not when it chirps"],
    ],
    watch: [
      "An expired LP detector often still lights up and still passes its test button while having lost sensitivity to actual propane. The date on the back is the number that matters.",
      "The LP detector is powered from the 12V system. If the house bank goes flat, it is not protecting you.",
    ],
  },

  "fire-extinguisher-check": {
    lube: ["none"],
    time: "10 min",
    tools: ["The extinguishers"],
    steps: [
      "Confirm the gauge needle is in the green on every unit.",
      "Check the pin is in place and the tamper seal is intact.",
      "Invert each dry chemical extinguisher and shake or tap it to break up settled powder. Compacted powder is why an extinguisher discharges as a useless puff.",
      "Inspect the hose or nozzle for cracks and blockage.",
      "Check the mounting bracket is secure and the extinguisher is where you can actually reach it in a hurry, not buried behind gear.",
      "Confirm the inspection or manufacture date. Disposable units have a service life even unused.",
      "Make sure Tess knows where every one of them is and how to use it.",
    ],
    specs: [
      ["Gauge", "Needle in the green"],
      ["Powder", "Inverted and tapped every 6 months to prevent caking"],
    ],
    watch: [
      "The factory extinguisher in most RVs is the smallest legal unit. A second larger one near the exit and one in the truck is cheap insurance.",
    ],
  },

  "open-close-and-confirm-emergency-egress-windows-function": {
    lube: ["dry-ptfe", "dry-silicone"],
    avoid: "Nothing wet or sticky on the latches. An egress latch that has gummed up is worse than one that squeaks.",
    time: "10 min",
    tools: ["Dry PTFE", "Silicone conditioner", "Rag"],
    steps: [
      "Actually open each egress window fully. Do not just work the latch.",
      "Confirm the window swings clear and stays open on its own rather than falling back.",
      "Check that nothing outside blocks the exit path and nothing inside blocks access to it.",
      "Dry PTFE on the latch mechanism and the hinge, wiping the excess.",
      "Silicone conditioner on the window seal.",
      "Close it and confirm it seals and latches properly. An egress window that has been opened and not reseated correctly leaks.",
      "Walk Tess through opening it. In an actual fire nobody is reading a decal.",
    ],
    specs: [],
    watch: [
      "This is a five minute task with an outsized consequence if it is skipped. The failure mode is a window that is painted, sealed, or corroded shut, and you find out at the worst possible time.",
    ],
  },

  "have-lp-system-leak-and-pressure-tested-by-qualified-dealer": {
    lube: ["none"],
    time: "Shop visit",
    tools: ["Shop job"],
    steps: [
      "This one genuinely needs a manometer and someone who does it regularly. It is not a soap bubble check.",
      "Ask for both a timed pressure drop test on the system and a regulator lock-up and delivery pressure test.",
      "Ask them to verify delivery pressure is at spec at the appliances, not just at the regulator.",
      "Have them inspect the regulator, the pigtails, and the hose condition. Rubber pigtails have a service life.",
      "Get the measured numbers written on the invoice, not just a pass.",
    ],
    specs: [
      ["Typical delivery", "11 inches water column, but confirm against the system spec"],
      ["Regulator life", "Regulators are commonly replaced on a schedule regardless of apparent condition"],
    ],
    watch: [
      "Between annual tests, a soapy water check at the tank connections after every bottle swap costs nothing and catches the most common leak point.",
      "If you ever smell propane, shut the tanks off at the valve and ventilate before doing anything else. Do not chase the leak with the system live.",
    ],
    shop: true,
  },

  // ======================= TRUCK: ENGINE & DRIVETRAIN =======================

  "engine-oil-and-filter-change": {
    lube: ["none"],
    time: "1 hour, or a shop visit",
    tools: ["15W-40 CK-4 diesel oil", "Mopar or Fleetguard oil filter", "Filter wrench", "Drain pan of adequate capacity", "Torque wrench", "New drain plug gasket"],
    steps: [
      "Warm the engine so the oil drains fully, then shut it down and let it sit a few minutes.",
      "Drain, replace the drain plug gasket, and torque the plug to spec. Overtightening a Cummins oil pan plug is an expensive mistake.",
      "Change the filter. Prefill it if the orientation allows and lubricate the gasket with clean oil.",
      "Refill, run for a minute, shut down, wait, and recheck the level on the dipstick rather than trusting the capacity number.",
      "Reset the oil life monitor.",
      "Log the odometer in the Service Log so the next interval calculates correctly.",
    ],
    specs: [
      ["Capacity", "Approximately 12 quarts with filter on the 6.7L Cummins. Verify on the dipstick"],
      ["Oil", "15W-40 API CK-4. 5W-40 full synthetic is the better choice for cold weather starting"],
      ["Interval", "7,500 miles or 6 months. This is the severe duty number and it is the right one for a truck towing near capacity"],
    ],
    watch: [
      "This truck tows near capacity continuously. Severe duty is not a conservative choice here, it is the correct schedule.",
      "Never let it run past the interval on the theory that the oil life monitor knows better. The monitor does not know how hard you are towing.",
      "Log the odometer every time. Everything mileage based on the truck depends on this number being current.",
    ],
    shop: true,
  },

  "fuel-filters-primary-and-secondary": {
    lube: ["none"],
    time: "1 to 2 hours, or a shop visit",
    tools: ["Correct filter kit for a 2018 6.7L Cummins", "Filter wrench or cap socket", "Drain pan", "Clean rags", "Nitrile gloves"],
    steps: [
      "Both filters get changed together. The engine mounted filter and the frame mounted water separator are a set on this truck.",
      "Cleanliness is the whole job. Common rail injection runs at extreme pressure and a speck of dirt introduced during the change will take out injectors.",
      "Drain the water separator bowl before removing anything.",
      "Change both elements, lubricating the new O-rings with clean diesel, never with oil or grease.",
      "Prime the system per the procedure. Cranking a dry system to prime it is hard on the lift pump.",
      "Start, let it idle, and check for leaks at both housings before driving.",
    ],
    specs: [
      ["Interval", "15,000 miles severe duty"],
      ["Parts", "Use the correct kit for a 2018 6.7L. Confirm the part number against your VIN rather than a generic listing"],
      ["Priming", "Follow the factory procedure, do not crank it dry"],
    ],
    watch: [
      "Drain the water separator whenever the light comes on, regardless of where you are in the interval. Water in a common rail system destroys injectors.",
      "Fuel quality varies a lot on the road. Hot Shot's EDT at every fillup helps with lubricity and water, but it does not replace filter changes.",
      "This is a job where a shop is defensible purely on cleanliness grounds if you are working in a dusty campsite.",
    ],
    shop: true,
  },

  "engine-air-filter-inspection": {
    lube: ["none"],
    time: "20 min",
    tools: ["Flashlight", "Replacement filter if needed"],
    steps: [
      "Open the airbox and pull the filter.",
      "Hold a light behind it. If light does not come through evenly, it is done.",
      "Look at the sealing surface and the airbox for dust that has bypassed the filter. Dust downstream of the filter means the seal has failed and that is a real finding.",
      "Wipe the airbox out with a damp rag, working carefully so nothing falls into the intake.",
      "Reinstall making sure the filter seats completely and the box latches fully.",
      "Do not tap or blow out a paper filter to extend its life. It damages the media.",
    ],
    specs: [
      ["Interval", "Inspect every 15,000 miles, replace as condition dictates"],
      ["Dusty conditions", "Inspect far more often. Desert and gravel road running loads a filter fast"],
    ],
    watch: [
      "The Active Air intake on this truck pulls from a different location depending on conditions. Worth confirming the system is functioning correctly while you are in there, given the history with the link arm and the P2280 and P0402 codes.",
      "A restricted filter on a towing diesel shows up as reduced power and higher EGTs before it shows up as a code.",
    ],
    shop: true,
  },

  "coolant-inspection": {
    lube: ["none"],
    time: "20 min",
    tools: ["Refractometer or coolant test strips", "Flashlight", "Correct OAT coolant for top-up"],
    steps: [
      "Check the level in the degas bottle cold, not hot. Never open a hot cooling system.",
      "Test the freeze point with a refractometer. Test strips are acceptable but less precise.",
      "Look at the color and clarity. Cloudy, rusty, or oily coolant is a finding, not a top-up.",
      "Inspect the hoses by squeezing them. Soft, spongy, or rock hard all mean the hose is due.",
      "Look at the radiator, the charge air cooler, and the AC condenser for bugs and debris packed in the fins. On a towing truck this directly drives coolant temperature.",
      "Check the cap and the overflow for leaks and residue.",
    ],
    specs: [
      ["Coolant", "Use the correct OAT formulation for this engine. Mixing coolant chemistries causes gelling"],
      ["Test", "Freeze point by refractometer, plus visual condition"],
    ],
    watch: [
      "Heavy towing runs the cooling system hard. Debris in the front of the stack is worth clearing before a long grade day, not just annually.",
      "Oily film in the coolant on a Cummins is a serious finding. Do not top it up and drive on it.",
    ],
  },

  "transmission-fluid-and-filter": {
    lube: ["none"],
    time: "Shop visit",
    tools: ["Shop job"],
    steps: [
      "Confirm which transmission the truck has before booking, since the fluid spec and the service procedure differ.",
      "Ask for the correct factory-spec fluid by name. Universal fluids are a common shortcut and a bad one on these transmissions.",
      "Ask for both filters if the transmission takes two, and for the pan to be cleaned and the magnet inspected.",
      "Ask what was on the magnet. Fine paste is normal. Chunks or bearing material are not.",
      "Get the fluid brand and quantity written on the invoice.",
    ],
    specs: [
      ["Interval", "60,000 miles severe duty"],
      ["Fluid", "Factory specification only. Confirm against the owner's manual for your transmission"],
    ],
    watch: [
      "Towing near capacity is the definition of severe duty for a transmission. 60,000 is the number, not 120,000.",
      "A transmission temperature gauge is the best early warning you can have on a towing truck. If the truck does not display it, it is worth adding.",
    ],
    shop: true,
  },

  "front-and-rear-differential-fluid": {
    lube: ["none"],
    time: "2 hours, or a shop visit",
    tools: ["Correct gear oil for each differential", "Friction modifier if limited slip", "Fluid pump", "Drain pan", "Torque wrench", "RTV or a new cover gasket"],
    steps: [
      "Front and rear take different fluid specifications and different capacities. Confirm each separately.",
      "If the rear is a limited slip, it needs friction modifier or the correct fluid that already contains it. Skipping this causes chatter in turns.",
      "Drain, clean the magnet, and inspect what came off it. Metallic paste is normal, flakes are not.",
      "If the cover comes off, clean both sealing surfaces completely and use the correct sealant or a new gasket.",
      "Refill to the correct level, which is at the bottom of the fill hole, not to a quantity.",
      "Torque the fill and drain plugs to spec.",
    ],
    specs: [
      ["Interval", "60,000 miles severe duty"],
      ["Fill level", "To the bottom of the fill plug hole"],
      ["Limited slip", "Requires friction modifier if the fluid does not already contain it"],
    ],
    watch: [
      "Towing loads the rear differential hard and heat is what degrades the fluid. The severe duty interval is not conservative here.",
      "Check the axle vent tubes while you are there. A blocked vent pushes fluid out past the seals.",
    ],
    shop: true,
  },

  "tire-rotation": {
    lube: ["none"],
    avoid: "No anti-seize or lubricant on the wheel studs. Torque specs assume clean dry threads.",
    time: "1 hour, or a shop visit",
    tools: ["Torque wrench", "Jack rated for the truck", "Jack stands", "Correct socket"],
    steps: [
      "Use the rotation pattern in the owner's manual for a dual rear wheel or single rear wheel configuration as applicable.",
      "Check the tread depth and wear pattern on each tire as it comes off and note it.",
      "Torque in a star pattern to the Ram spec.",
      "Re-torque after 50 to 100 miles. This matters and it is the step people skip.",
      "Reset the TPMS if the system requires it after a rotation.",
    ],
    specs: [
      ["Interval", "10,000 miles"],
      ["Lug torque", "140 lb-ft on the 2500. Confirm against the owner's manual for your wheel type"],
      ["Pattern", "Star pattern, staged"],
    ],
    watch: [
      "Uneven wear front to rear on a towing truck is normal, which is exactly why rotation matters more here than on a commuter.",
      "Cupping or feathering on the front points at alignment or worn steering components, and this truck has a history there with the steering dampener.",
    ],
    shop: true,
  },

  "front-end-alignment": {
    lube: ["none"],
    time: "Shop visit",
    tools: ["Shop job"],
    steps: [
      "Book this whenever tire wear turns uneven, after any steering or suspension component replacement, or annually as a baseline.",
      "Ask for the before and after readings on the printout, not just a confirmation that it was aligned.",
      "Ask them to inspect the ball joints, tie rod ends, drag link, track bar, and the steering dampener before aligning. Aligning a truck with worn components is wasted money.",
      "Tell them the truck tows near capacity so they set it up accordingly.",
    ],
    specs: [
      ["Interval", "Annually, or whenever wear or handling changes"],
    ],
    watch: [
      "This truck has had steering dampener work. Death wobble on a solid front axle Ram traces to track bar, ball joints, and steering linkage, and an alignment alone will not fix it.",
      "Any change in how the truck tracks while towing is worth investigating before the annual interval comes around.",
    ],
    shop: true,
  },

  "truck-brake-inspection": {
    lube: ["none"],
    avoid: "Nothing on the friction surfaces. Caliper slide pins take the specified caliper grease only, never chassis grease.",
    time: "1 hour, or a shop visit",
    tools: ["Jack and stands", "Brake cleaner", "Caliper grease", "Torque wrench", "Flashlight"],
    steps: [
      "Measure pad thickness at all four corners and note it so you can trend the wear rather than guessing.",
      "Inspect the rotors for scoring, heat checking, blue discoloration, and lip at the outer edge.",
      "Check the caliper slide pins move freely and re-lubricate them with the correct caliper grease.",
      "Look at the flex hoses for cracking, bulging, or chafe.",
      "Check the brake fluid level and condition. Dark fluid means it has absorbed moisture and it is due for a flush.",
      "Confirm the trailer brake controller settings and that it is applying correctly with the trailer connected.",
    ],
    specs: [
      ["Interval", "15,000 miles or 12 months severe duty"],
      ["Fluid", "Moisture content matters more than mileage on brake fluid. Test it or flush it on a schedule"],
    ],
    watch: [
      "Towing 30 feet of trailer down a grade is what these brakes are actually being asked to do. Inspect on the severe duty interval, not the normal one.",
      "If the trailer brakes are out of adjustment, the truck brakes take the whole load and wear accordingly. The two tasks are connected.",
    ],
    shop: true,
  },
};

// ---------------------------------------------------------------------------
// Lookup
// ---------------------------------------------------------------------------

export function guidanceFor(title) {
  const g = GUIDANCE[slugify(title)];
  if (!g) return null;
  return {
    ...g,
    lube: (g.lube || [])
      .filter((id) => LUBE[id] && id !== "none")
      .map((id) => ({ id, ...LUBE[id] })),
  };
}

export const GUIDANCE_COUNT = Object.keys(GUIDANCE).length;
