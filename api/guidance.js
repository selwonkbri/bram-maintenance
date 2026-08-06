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
  "303-wash": {
    name: "303 RV Wash & Seal",
    form: "White one-gallon jug, purple label with a mountain logo",
    where: "Washing the outside walls, the nose, and the back",
    examples: "Mix per the jug into a bucket of water",
    note: "pH neutral, so it cleans without stripping the sealant already on the paint.",
  },
  "303-sealant": {
    name: "303 Touchless SiO2 Sealant",
    form: "Dark blue 32 oz spray bottle with a trigger",
    where: "Over the whole outside after every wash",
    examples: "Spray on wet, then rinse. No wiping, no buffing",
    note: "Water activated. It beads up the moment it lands, so you can see exactly where you have already sprayed.",
  },
  "simple-green": {
    name: "Simple Green All Purpose Cleaner",
    form: "Green one-gallon jug, concentrate",
    where: "The roof only",
    examples: "6 oz of cleaner into 64 oz of cold water",
    note: "Always mix it with water. Work one small section at a time and rinse that section before it dries.",
  },
  "wash-brush": {
    name: "Libman Telescoping Wash Brush",
    form: "Blue and white brush head on a silver pole, hose screws into the handle",
    where: "Washing the walls and the roof",
    examples: "Extends to 6.5 ft, water runs through the handle",
    note: "There is a shut-off valve on the handle so you can stop the water without walking back to the spigot.",
  },
  "seal-conditioner": {
    name: "3-IN-ONE RV Care Rubber Seal Conditioner",
    form: "Orange and black spray can with a red flip-up cap, 11 oz",
    where: "Every rubber seal: slide seals, door seals, window seals, baggage door seals",
    examples: "Thin coat on a clean dry seal, wipe off the extra",
    note: "Keeps the rubber soft so it wipes clean instead of grabbing and rolling under.",
  },
  "slide-lube": {
    name: "3-IN-ONE RV Care Slide-Out Silicone Lube",
    form: "Green spray can with a red flip-up cap, 11 oz",
    where: "The rubber seals around the slide-out",
    examples: "Light pass along the seal after cleaning",
    note: "Dries clear and does not stay sticky.",
  },
  "hitch-gel": {
    name: "3-IN-ONE Trailer Hitch Gel Lube",
    form: "Green and orange can",
    where: "The coupler and the hitch ball",
    examples: "Coat the inside of the coupler and the ball itself",
    note: "Gel, so it stays where you put it instead of running off.",
  },
  "dry-lube": {
    name: "B'laster Dry Lube",
    form: "Blue and white can with a yellow cap, 9.3 oz",
    where: "Entry step legs and hinges, door hinges, latches, any metal part that moves",
    examples: "Spray, wait for it to dry, then work the part",
    note: "Goes on wet and dries to a dry film, so road dust does not stick to it. Let it dry before moving the part.",
  },
  "graphite": {
    name: "Hillman Graphite Tube",
    form: "Small white squeeze tube with a black pointed tip",
    where: "Key locks only: baggage door locks, entry door lock",
    examples: "Tip into the keyhole, one short squeeze",
    note: "Powder, not liquid. One squeeze is plenty, then work the key in and out a few times.",
  },
  "wd40": {
    name: "WD-40",
    form: "Blue and yellow can with the red straw, 14.4 oz",
    where: "Freeing something stuck or rusted, and pushing water out of an electrical connector",
    examples: "Short bursts with the straw",
    note: "For loosening things, not for long-term lubrication.",
  },
  "mineral-oil": {
    name: "3-IN-ONE Mineral Oil",
    form: "Small clear bottle with a black drip spout",
    where: "The crank and gear mechanism inside the roof vents",
    examples: "A few drops on the moving gears",
    note: "Reach it from inside the trailer with the vent open.",
  },
  "everbond": {
    name: "Everbond RV Roof Lap Sealant",
    form: "Blue and orange caulk tube, white sealant, 10.1 oz",
    where: "Cracks or gaps in the sealant on the roof",
    examples: "1/4 to 3/8 inch bead from a caulk gun",
    note: "Self-leveling, so it spreads itself flat. Use it on flat roof surfaces.",
  },
  "dicor-black": {
    name: "Dicor Black Cap Sealant",
    form: "Blue caulk tube with a black label, 10 oz",
    where: "Around the outside of windows, doors, and corner trim",
    examples: "Thin bead where the old black sealant has cracked",
    note: "Non-sag, so it stays put on a vertical wall instead of running down.",
  },
  "ge-silicone": {
    name: "GE All Purpose Silicone",
    form: "White and blue caulk tube",
    where: "Inside the trailer, around the sink and shower",
    examples: "Thin bead",
    note: "Interior use.",
  },
  "gorilla-adhesive": {
    name: "Gorilla Heavy Duty Construction Adhesive",
    form: "Orange caulk tube, white adhesive, 9 oz",
    where: "Re-attaching trim or a bracket that has come loose",
    examples: "Dabs on the back of the piece, then press and hold",
    note: "This is glue, not a weather seal.",
  },
  "rustoleum": {
    name: "Rust-Oleum Professional Enamel",
    form: "Tall spray paint can",
    where: "Chipped paint on the frame underneath",
    examples: "Wire brush the rust off first, then two light coats",
    note: "Let the first coat dry before the second.",
  },
  "trim-shine": {
    name: "Stoner Trim Shine",
    form: "Black aerosol can",
    where: "Black plastic and rubber trim on the outside",
    examples: "Spray on, walk away",
    note: "Brings faded black trim back and adds UV protection.",
  },
  "glass-cleaner": {
    name: "Chemical Guys Glass Cleaner",
    form: "Dark bottle with a trigger sprayer",
    where: "All the windows, inside and out",
    examples: "Spray on a microfiber towel, not on the glass",
    note: "Streak free. Spraying the towel instead of the glass keeps it off the paint and seals.",
  },
  "rainx": {
    name: "Rain-X 2-in-1 Glass Cleaner",
    form: "Yellow bottle with a trigger sprayer",
    where: "Outside of the windows",
    examples: "Spray and wipe with a microfiber towel",
    note: "Cleans and leaves a rain repellent coating.",
  },
  "chassis-grease": {
    name: "GC-LB chassis grease",
    form: "Grease cartridge that loads into the grease gun",
    where: "Suspension wet bolts",
    examples: "Look for NLGI #2 and the letters GC-LB printed on the tube",
    note: "Loads into the Lock-n-Load lever action grease gun.",
  },
  "grease-gun": {
    name: "Lock-n-Load Lever Action Grease Gun",
    form: "Grey and black gun with a squeeze lever and a slide latch on the side, from Tractor Supply",
    where: "Suspension wet bolts",
    examples: "Grease cartridge slides straight into the barrel, no unscrewing",
    note: "There is a latch on the side marked Lock-n-Load. Slide it to open the barrel, and slide it back to lock it shut.",
  },
  "fin-comb": {
    name: "AC Fin Comb",
    form: "Small plastic comb tool, comes as a set of two",
    where: "The air conditioner fins on the roof",
    examples: "Comb straight down through bent fins",
    note: "Straightens fins that have been flattened so air can move through again.",
  },
  "antifreeze-pump": {
    name: "Camco Antifreeze Hand Pump Kit",
    form: "Hand pump with hoses, Camco part 36003",
    where: "Winterizing the water lines",
    examples: "Pumps RV antifreeze straight into the plumbing",
    note: "Screws onto an antifreeze jug.",
  },
};

// ---------------------------------------------------------------------------
// Rig facts that several tasks lean on
// ---------------------------------------------------------------------------

export const RIG = {
  trailer:
    "2025 Brinkley Model I 275 travel trailer, bumper pull, 30.8 ft hitch to bumper, tandem axle. MODEL YEAR MATTERS ON THE FRONT END: this is a 2025 build, which uses a composite and aluminum lower nose with a metal TuffCoat section. Brinkley switched to a fully molded fiberglass front cap on late 2026 and 2026.5 units built after late summer 2025, and that same change swapped the front window shade from accordion to a flat roller. This rig has the accordion shade, which is the quick way to confirm it is the earlier front end. Do not apply fiberglass or gelcoat guidance to this nose. Euramax StrongLite laminated aluminum walls over Azdel with automotive-grade paint. Alpha Systems low-maintenance roof, walkable reinforced slide roof. Lippert Road Armor equalizer, greaseable wet bolts, tandem 5,100 lb axles, Hankook Vantra 225/75 LRE 10-ply on 15 in aluminum wheels, ABS with anti-sway. Demco EZ Latch coupler. Single flush-floor rack and pinion slide with topper. Tankless on-demand water heater, no anode rod. MORryde StepAbove entry steps, swing-out screen door with a Lippert Screen Shot closer. 460Ah Vatrer LiFePO4 house bank, Renogy MPPT solar controller, Furrion Arctic compressor fridge, Furrion Chill Cube 18K variable speed AC with heat pump, Champion 4000W dual fuel inverter generator. GVWR 9,600 lbs, UVW 7,485 lbs, hitch weight 705 lbs. Fresh 55 gal, gray 75 gal, black 40 gal.",
  truck:
    "2018 Ram 2500 with the 6.7L Cummins turbodiesel. Tows near capacity continuously, so every Ram interval on this list is the severe duty number, not the normal one. Hot Shot's Secret EDT goes in at every fillup.",
};

// ---------------------------------------------------------------------------
// Task guidance
// ---------------------------------------------------------------------------

export const GUIDANCE = {
  // ======================= EXTERIOR =======================

  "lube-entry-door-hinges": {
    lube: ["dry-lube"],
    time: "10 min",
    tools: ["B'laster Dry Lube", "Rag"],
    steps: [
      "Wipe the hinges down with a rag first to get the dirt off.",
      "Spray B'laster Dry Lube into each hinge. That is the blue and white can with the yellow cap.",
      "Wait a minute for it to dry. It goes on wet and dries to a dry film.",
      "Swing the door open and closed several times to work it in.",
      "Wipe any drips off the door skin and the wall.",
      "Do the same for the screen door hinge.",
    ],
    specs: [
      ["Product", "B'laster Dry Lube, blue and white can with yellow cap"],
    ],
    watch: [
      "Wipe drips off the paint promptly.",
    ],
  },

  "spray-baggage-door-lock-tumblers-with-dry-graphite": {
    lube: ["graphite"],
    time: "10 min",
    tools: ["Hillman graphite tube", "Keys"],
    steps: [
      "Use the Hillman graphite tube, the small white squeeze tube with the black pointed tip.",
      "Put the tip into the keyhole and give it one short squeeze. It puffs out a dry powder.",
      "Slide the key in and out five or six times and turn the lock both ways to work the powder through.",
      "Do every baggage door lock and the entry door lock.",
      "Wipe any loose powder off the door around the lock.",
    ],
    specs: [
      ["Product", "Hillman graphite tube, white squeeze tube with black tip"],
      ["Amount", "One short squeeze per lock"],
    ],
    watch: [
      "One squeeze is plenty. More does not help and just makes a mess on the door.",
    ],
  },

  "clean-and-lube-awning-moving-parts": {
    lube: ["slide-lube"],
    time: "45 min",
    tools: ["3-IN-ONE RV Care Slide-Out Silicone Lube", "Bucket of mild soap and water", "Soft brush", "Step stool"],
    steps: [
      "This is a Lippert Solera 3000 Series power awning. It has a drive arm and an idler arm, each with a pitch elbow joint, supporting a roll tube that the fabric wraps around, and it opens and closes on a direct drive motor at the push of a button.",
      "Extend the awning fully on a dry day with no wind in the forecast.",
      "Wash the arms, the roller tube ends, and the fabric with mild soap. Rinse and let everything dry completely.",
      "Spray the 3-IN-ONE Slide-Out Silicone Lube, the green can with the red flip cap, into the awning rail channel on the sidewall where the roll tube slides in and out.",
      "Spray it into both pitch elbow joints on the arms, and onto the roller tube end caps at the drive head and idler head.",
      "Retract and extend three full cycles to work the lube through the travel.",
      "Check the arm mounting screws into the sidewall and the lag bolts at the top rail. These loosen from tow vibration.",
      "Inspect the fabric hem and the roller tube spring tension. Slack fabric on the road is what tears an awning off.",
    ],
    specs: [
      ["Awning", "Lippert Solera 3000 Series, direct drive motor, manual override available"],
      ["Lubricant", "3-IN-ONE RV Care Slide-Out Silicone Lube, green can"],
    ],
    watch: [
      "Never retract a wet awning and leave it. Mildew on the fabric is permanent.",
      "The drive motor at the drive head is sealed. Do not spray anything into the motor housing itself, only the rail channel, the joints, and the end caps.",
    ],
  },

  "wash-exterior-fiberglass-and-metal": {
    lube: ["303-wash", "wash-brush"],
    time: "2 to 3 hours",
    tools: ["303 RV Wash & Seal", "Libman telescoping wash brush", "Two buckets", "Microfiber drying towels"],
    steps: [
      "Do this in the shade or early in the morning. Soap that dries on hot paint leaves streaks.",
      "Fill one bucket with water and 303 RV Wash & Seal mixed per the jug. Fill the second bucket with plain water. The second bucket is for rinsing the brush: after each section, swish the brush in the plain water first so you are not dragging grit back onto the paint.",
      "Screw the hose onto the Libman brush handle. Water runs up through the pole and out the bristles, and the valve on the handle shuts it off between sections.",
      "Rinse the whole trailer top to bottom first, before any brush touches it. This carries the loose grit off.",
      "Dip the brush in the soap bucket and wash one section at a time, working top to bottom. Rinse each section with the hose before moving on.",
      "On the nose, let the soap sit on the bugs for a minute and rinse them off rather than scrubbing at them.",
      "Rinse the wheels and the metal shields above them.",
      "Dry the flat surfaces with a microfiber towel so they do not water spot.",
      "Move straight on to the sealant task while the trailer is still wet.",
    ],
    specs: [
      ["Soap", "303 RV Wash & Seal, white gallon jug with the purple mountain label"],
      ["Brush", "Libman telescoping, extends to 6.5 ft"],
    ],
    watch: [
      "While you are close to the walls, look along every line of sealant around the windows and doors. Any crack or gap is worth a photo and a note.",
      "Keep the brush flat against the wall rather than scrubbing at the edges of the graphics.",
    ],
  },

  "apply-spray-on-sealant-to-exterior": {
    lube: ["303-sealant"],
    time: "About an hour, faster with two people",
    tools: ["303 Touchless SiO2 Sealant", "Garden hose"],
    steps: [
      "Do this right after the wash, while the trailer is still wet and still cool.",
      "Work about 4 feet of the trailer at a time.",
      "Spray the 303 Touchless Sealant over that section, then rinse it with the hose. That is the whole process. There is no wiping and no buffing.",
      "The surface beads up water immediately where the sealant has landed, so you can see any spot you missed and go back over it.",
      "Keep going section by section until you have been all the way around, including the back and the black panels.",
    ],
    specs: [
      ["Product", "303 Touchless SiO2 Sealant, dark blue 32 oz spray bottle"],
      ["Lasts", "About 4 to 5 months"],
      ["When", "Every wash"],
    ],
    watch: [
      "Two people is much quicker: one sprays, the other follows with the hose.",
      "The graphics and the black panels are what this is really protecting, so do not skip the back of the trailer.",
    ],
  },

  "inspect-roof-seams-and-sealants": {
    lube: ["everbond", "dicor-black"],
    time: "1 to 2 hours",
    tools: ["Everbond RV Roof Lap Sealant", "Dicor black cap sealant", "Caulk gun", "Plastic scraper", "Denatured alcohol", "Flashlight"],
    steps: [
      "Go up on a dry roof. Do this at the same time as cleaning the roof.",
      "Walk the whole outside edge of the roof first, then check around everything that comes through it: both fans, the air conditioners, the antenna, the solar panel mounts, and the front and back seams.",
      "You are looking for cracks in the sealant, edges lifting up, small holes, or places where the sealant has pulled away from the surface.",
      "For a crack on a flat part of the roof, use the Everbond RV Roof Lap Sealant. It is the blue and orange tube with white sealant, and it levels itself out flat. Run a bead about a quarter inch wide over the crack.",
      "For a crack around a window, a door, or the corner trim on the side walls, use the Dicor black cap sealant. It is the blue tube with the black label and it stays put on a vertical surface.",
      "Before either one, scrape any loose crumbling sealant away with the plastic scraper, then wipe the spot with denatured alcohol and let it dry.",
      "Do not try to remove the good sealant. Only the loose material comes off.",
    ],
    specs: [
      ["Flat roof cracks", "Everbond RV Roof Lap Sealant, white, blue and orange tube"],
      ["Windows, doors, side trim", "Dicor black cap sealant, blue tube with black label"],
      ["Bead size", "1/4 to 3/8 inch"],
    ],
    watch: [
      "This is the most important item on the whole list. Water getting in is what destroys trailers, and it does it slowly and out of sight.",
      "The solar panel mounts were added after the trailer was built, so give those extra attention.",
      "Photograph anything that looks like more than a hairline crack before sealing over it.",
    ],
  },

  "clean-roof": {
    lube: ["simple-green", "wash-brush"],
    time: "2 hours",
    tools: ["Simple Green All Purpose Cleaner", "Libman telescoping wash brush", "Bucket", "Garden hose"],
    steps: [
      "Go up dry. The roof gets slippery once it is wet.",
      "Sweep or blow the loose leaves and debris off first.",
      "Mix 6 oz of Simple Green into 64 oz of cold water in the bucket. It always gets mixed with water, never used straight.",
      "Wet the side walls with the hose before you start. Whatever runs off the roof will run down the walls, and wet walls stop it from streaking.",
      "Scrub one small section of roof at a time with the Libman brush, then rinse that section right away with the hose. Do not let the cleaner dry on the roof.",
      "Work your way across the roof section by section.",
      "When the roof is done, rinse the entire roof again and then rinse both side walls thoroughly, top to bottom.",
    ],
    specs: [
      ["Cleaner", "Simple Green, green gallon jug"],
      ["Mix", "6 oz cleaner to 64 oz cold water"],
    ],
    watch: [
      "Stains that do not come out are cosmetic. The roof does not need to look perfect, and scrubbing harder is worse than leaving a mark.",
      "While you are up there, do the roof seam and sealant check. Same trip.",
      "The slide roof is built to be walked on.",
    ],
  },

  "clean-and-lube-roof-vent-mechanisms": {
    lube: ["mineral-oil", "seal-conditioner"],
    time: "30 min",
    tools: ["3-IN-ONE Mineral Oil", "3-IN-ONE RV Care Rubber Seal Conditioner", "Soft brush", "Screwdriver", "Ladder"],
    steps: [
      "Open each vent fully from inside and brush the dust out of the crank and gear mechanism.",
      "A few drops of the 3-IN-ONE Mineral Oil, the small clear bottle with the black drip spout, onto the crank gears and the scissor arm pivots. Reach it from inside with the vent open.",
      "Turn the crank a few times to spread the oil through the gears.",
      "Spray the 3-IN-ONE Rubber Seal Conditioner onto the vent lid gasket where it meets the roof flange, from up on the roof.",
      "Cycle each vent five times and confirm it seats flat and even when closed.",
      "On the powered fan, wipe the blade clean and check the lid support arms for cracking. Sun is what breaks those arms down.",
    ],
    specs: [
      ["Gears and crank", "3-IN-ONE Mineral Oil, clear bottle with black drip spout"],
      ["Lid gasket", "3-IN-ONE RV Care Rubber Seal Conditioner, orange and black can"],
    ],
    watch: [
      "A vent lid that does not seat flat is a slow leak that shows up as a stained ceiling panel months later.",
      "If you have vent covers installed, check the cover mounting screws have not backed out.",
    ],
  },

  // ======================= CHASSIS =======================

  "check-and-clean-all-slide-seals": {
    lube: ["seal-conditioner", "slide-lube"],
    time: "45 min",
    tools: ["3-IN-ONE RV Care Rubber Seal Conditioner", "3-IN-ONE Slide-Out Silicone Lube", "Bucket of soapy water", "Rags"],
    steps: [
      "Run the slide all the way out so you can reach the seals all the way around.",
      "Wash the rubber seals with soapy water and a rag, all the way around the opening. Get the top, both sides, and the bottom.",
      "Dry the seals with a clean rag.",
      "Spray the 3-IN-ONE Rubber Seal Conditioner along every seal, in a thin coat. That is the orange and black can with the red flip cap.",
      "Wipe off whatever does not soak in.",
      "Give the seals a light pass with the 3-IN-ONE Slide-Out Silicone Lube, the green can with the red flip cap.",
      "Run the slide in and back out once to spread it evenly.",
    ],
    specs: [
      ["Seal conditioner", "3-IN-ONE RV Care Rubber Seal Conditioner, orange and black can"],
      ["Slide lube", "3-IN-ONE Slide-Out Silicone Lube, green can"],
    ],
    watch: [
      "Look at the corners of the seals specifically. That is where they tear or fold under first.",
      "The metal toothed bar underneath the slide is cleaned with soapy water only. Nothing gets sprayed on it.",
      "Keep the slide closed when the trailer is sitting unused for a long stretch.",
    ],
  },

  "check-hitch-and-coupler-clean-and-lubricate": {
    lube: ["hitch-gel"],
    time: "20 min",
    tools: ["3-IN-ONE Trailer Hitch Gel Lube", "Rags", "Wire brush"],
    steps: [
      "The coupler is the part at the front of the trailer that drops over the ball on the truck. It is a Demco EZ Latch.",
      "Wipe the old grease out of the inside of the coupler with a rag.",
      "Wire brush any rust off the ball and the coupler.",
      "Work the latch handle open and closed a few times and check it moves freely and locks.",
      "Coat the inside of the coupler and the ball itself with 3-IN-ONE Trailer Hitch Gel Lube. It is a gel so it stays put.",
      "Check the safety chains and the coiled breakaway cable for damage, and check the breakaway switch pin pulls out and reseats.",
      "Run the power tongue jack all the way up and all the way down.",
    ],
    specs: [
      ["Product", "3-IN-ONE Trailer Hitch Gel Lube"],
      ["Coupler", "Demco EZ Latch"],
    ],
    watch: [
      "A dry coupler squeaks and groans on turns. That noise is the cue this is overdue.",
    ],
  },

  "check-frame-for-chipped-paint-and-rust": {
    lube: ["rustoleum"],
    time: "45 min",
    tools: ["Rust-Oleum Professional enamel spray", "Wire brush", "Rags", "Flashlight"],
    steps: [
      "Look along the steel frame rails underneath with a flashlight, front to back on both sides.",
      "You are looking for places where the black coating has chipped off and bare metal or orange rust is showing.",
      "Wire brush each spot until the loose rust is gone and the metal is clean.",
      "Wipe the spot with a rag so it is dry and dust free.",
      "Spray two light coats of the Rust-Oleum Professional enamel, letting the first dry before the second.",
      "Check the colour on the can cap matches the frame before spraying a large area.",
    ],
    specs: [
      ["Paint", "Rust-Oleum Professional High Performance Enamel"],
      ["Frame", "Steel, triple powder coated from the factory"],
    ],
    watch: [
      "Small chips are normal from road debris. Catching them early is the whole point.",
      "Rust running down from a weld or a bracket is worth photographing and flagging rather than just painting over.",
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

  "grease-suspension-wet-bolts": {
    lube: ["chassis-grease", "grease-gun"],
    time: "45 min",
    tools: ["Lock-n-Load lever action grease gun", "GC-LB grease cartridge", "Rags", "Flashlight"],
    steps: [
      "Wet bolts are the pivot bolts that hold the leaf springs to the frame. Each one has a small grease nipple on its head. Pumping grease in keeps the bushing inside from wearing out.",
      "There are about 14 of them, seven on each side. Count them all before you start, because several sit behind the tires and are easy to miss.",
      "Slide the latch on the side of the gun marked Lock-n-Load to open the barrel, drop the grease cartridge in, and slide the latch back to lock it shut. The gun bleeds the air out on its own as you lock the barrel back on, so there is no separate priming step.",
      "Squeeze the lever a couple of times to confirm grease is flowing before you go under the trailer.",
      "Wipe the nozzle and each grease nipple clean before connecting. Dirt pushed into the bushing does more harm than no grease.",
      "Push the hose end onto the nipple.",
      "Squeeze the lever repeatedly. Keep going until you see fresh grease squeeze out around the edge of the bushing. That is the signal it worked. Stopping because your hand is tired is not enough.",
      "Wipe the excess off and move to the next one.",
      "While you are under there, shine the light on the bolts and look for any that sit crooked or look worn.",
    ],
    specs: [
      ["Grease", "NLGI #2 lithium complex EP, marked GC-LB on the tube"],
      ["Gun", "Lock-n-Load lever action grease gun, Tractor Supply"],
      ["Fittings", "About 14, seven per side"],
      ["Interval", "3,000 miles or 3 months"],
    ],
    watch: [
      "If a fitting will not take grease, do not force it. The weight of the trailer is squeezing the bushing shut. Jack the frame up to take the weight off the suspension and try again.",
      "If a bolt spins freely instead of tightening, it is broken. Stop and get it replaced before towing.",
      "If grease starts weeping out around the latch on the gun itself rather than out the hose, the barrel is not fully locked. Slide the latch open, reseat the cartridge, and lock it again.",
      "At the miles this trailer covers, the 3 month timer is what will come due, not the 3,000 miles.",
    ],
  },

  "clean-and-lube-axle-and-suspension-moving-parts": {
    lube: ["none"],
    time: "45 min",
    tools: ["Flashlight", "Creeper or mat", "Torque wrench"],
    steps: [
      "This is the twice-a-year look over the suspension. Greasing the wet bolts is its own separate job on a shorter schedule.",
      "Look at the leaf springs on both sides. Compare left to right. One side sitting visibly lower, or a cracked or shifted leaf, needs a shop.",
      "Look at the equalizer, the metal link between the front and rear springs on each side, for cracks or a rubber pad that has squashed flat.",
      "Look at the shackles, the flat plates connecting the springs, for bent plates or bolt holes that have worn oval.",
      "Check the U-bolts and the welded hangers that hold everything to the frame for cracks.",
      "Look at the wires running to each wheel for anything rubbing, pinched, or hanging loose.",
    ],
    specs: [
      ["Axles", "Tandem, 5,100 lbs each"],
      ["Suspension", "Lippert Road Armor equalizer"],
      ["Lug nut torque", "115 ft-lbs"],
    ],
    watch: [
      "Photograph anything that looks wrong rather than trying to judge it underneath the trailer.",
      "Best done at the same time as the wheel bearing repack, since the trailer is already jacked up.",
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

  "descale-tankless-water-heater": {
    lube: ["none"],
    time: "2 hours, most of it setup",
    tools: ["3 to 4 gallons white vinegar", "Transfer pump", "5 gallon bucket", "Two washing machine hoses"],
    steps: [
      "The water heater is a Furrion FWH09AFA. It heats water on demand and has no tank inside it.",
      "Minerals from campground water build up inside it over time and slowly choke it. Running vinegar through it dissolves them out.",
      "You need to reach both the front and the back of the unit. The back is behind the utility panel in the pass-through storage, and the retractable water hose reel sits in the way. Expect to move the reel temporarily. Take photos before you disconnect anything.",
      "Switch the water heater off at the unit.",
      "Close the cold water inlet valve, the hot water outlet valve, and the gas valve.",
      "Take off the outside door and the baffle behind it.",
      "Disconnect the hot and cold lines at the heater and connect the two pump hoses in their place.",
      "Put the vinegar in the bucket and run the pump for about an hour, circulating it through the heater.",
      "Flush it through with fresh water until you cannot smell vinegar at a hot tap inside.",
      "Reconnect the water lines and tighten them carefully. Open the cold valve, then the hot, then the gas. Switch the power back on. Put the baffle and door back.",
      "Check every connection for drips before you walk away.",
      "Clean or replace the inlet water filter screen while you are in there.",
    ],
    specs: [
      ["Unit", "Furrion FWH09AFA"],
      ["Solution", "White vinegar, 3 to 4 gallons"],
      ["Circulate", "About 1 hour"],
      ["Manuals", "support.lci1.com/waterheater"],
    ],
    watch: [
      "A rotten egg smell from the hot water only, with clean cold water, means do this sooner rather than waiting.",
      "When winterizing, the water heater does not drain through the low point drains. It has to be drained separately or it can freeze and split.",
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
    lube: ["dry-lube", "seal-conditioner"],
    time: "10 min",
    tools: ["B'laster Dry Lube", "3-IN-ONE RV Care Rubber Seal Conditioner", "Rag"],
    steps: [
      "Actually open each egress window fully. Do not just work the latch.",
      "Confirm the window swings clear and stays open on its own rather than falling back.",
      "Check that nothing outside blocks the exit path and nothing inside blocks access to it.",
      "Spray B'laster Dry Lube on the latch mechanism and the hinge, wipe the excess.",
      "Spray 3-IN-ONE Rubber Seal Conditioner on the window seal.",
      "Close it and confirm it seals and latches properly. An egress window that has been opened and not reseated correctly leaks.",
      "Walk Tess through opening it. In an actual fire nobody is reading a decal.",
    ],
    specs: [
      ["Latch and hinge", "B'laster Dry Lube"],
      ["Window seal", "3-IN-ONE RV Care Rubber Seal Conditioner"],
    ],
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
