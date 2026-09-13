/**
 * PYNN 54 - Paper Mario Nintendo Style Construction & QC Sticker Icons
 * High-fidelity 2.5D die-cut papercraft sticker image assets
 */

const createImgTag = (name) => 
  `<img src="/icons/${name}.png" alt="${name}" class="w-full h-full object-contain pynn-icon-img" loading="eager" />`;

const icons = {
  // 1. หมวด WETWORK (งานโครงสร้างและงานเปียก - สไตล์ Paper Mario Sticker)
  skimAndPaint: createImgTag("skimAndPaint"),
  topping: createImgTag("topping"),
  ceiling: createImgTag("ceiling"),
  texcaWall: createImgTag("texcaWall"),
  waterproofing: createImgTag("waterproofing"),
  tiling: createImgTag("tiling"),
  aluminum: createImgTag("aluminum"),
  wetWork: createImgTag("wetWork"),

  // 2. หมวด END PRODUCT (งานสถาปัตย์และงานตกแต่งภายใน - สไตล์ Paper Mario Sticker)
  furniture: createImgTag("furniture"),
  laminate: createImgTag("laminate"),
  door: createImgTag("door"),
  showerScreen: createImgTag("showerScreen"),
  paintOnly: createImgTag("paintOnly"),
  aluminumPaint: createImgTag("aluminumPaint"),
  cleaning: createImgTag("cleaning"),
  endProduct: createImgTag("endProduct"),

  // 3. หมวด ส่วนกลาง (พื้นที่ส่วนกลาง - ตึกคอนโด Cozy Condos)
  common: createImgTag("common"),

  // Auxiliary Systems
  electrical: `
    <svg viewBox="0 0 64 64" class="nintendo-work-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" fill="#FEF08A" stroke="#241E38" stroke-width="2.8"/>
      <path d="M35 12L20 34H33L29 52L46 28H32L35 12Z" fill="#FACC15" stroke="#241E38" stroke-width="2.8" stroke-linejoin="round"/>
    </svg>
  `,
  plumbing: `
    <svg viewBox="0 0 64 64" class="nintendo-work-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 20H28V36H50V50H14V20Z" fill="#38BDF8" stroke="#241E38" stroke-width="2.8" stroke-linejoin="round"/>
      <circle cx="44" cy="24" r="4" fill="#0284C7" stroke="#241E38" stroke-width="2"/>
    </svg>
  `,
  airCon: `
    <svg viewBox="0 0 64 64" class="nintendo-work-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="44" height="24" rx="4" fill="#E0F2FE" stroke="#241E38" stroke-width="2.8"/>
      <line x1="16" y1="36" x2="48" y2="36" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M22 46C24 49 28 49 30 46M34 46C36 49 40 49 42 46" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `
};

// Aliases for full compatibility
icons.rustPaint = icons.skimAndPaint;
icons.texca = icons.texcaWall;
icons.waterproof = icons.waterproofing;
icons.tile = icons.tiling;
icons.electricalRoughIn = icons.electrical;
icons.plumbingRoughIn = icons.plumbing;
icons.airConRoughIn = icons.airCon;

export const nintendoWorkIcons = icons;

if (typeof window !== "undefined") {
  window.nintendoWorkIcons = nintendoWorkIcons;
}

export default nintendoWorkIcons;
