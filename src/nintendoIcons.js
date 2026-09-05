// Nintendo-style Hand-Crafted Vector Work Pictograms
// High contrast, chunky outlines (#253047), vibrant playful Nintendo cel colors, and soft tactile badges

export const nintendoWorkIcons = {
  skimAndPaint: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Pail Body -->
      <path d="M12 18 L15 41 C15.2 42.6 16.6 44 18.2 44 L29.8 44 C31.4 44 32.8 42.6 33 41 L36 18 Z" fill="#E2E8F0" stroke="#253047" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M15 18 L17 38 C17.2 39.5 18.5 40.5 20 40.5 L28 40.5 C29.5 40.5 30.8 39.5 31 38 L33 18 Z" fill="#F8FAFC"/>
      <!-- Paint Inside & Dripping -->
      <ellipse cx="24" cy="18" rx="12" ry="3.8" fill="#E96861" stroke="#253047" stroke-width="2.2"/>
      <path d="M18 19 C18 24 20.5 26 20.5 30 C20.5 31.5 19.2 32.5 18 32.5 C16.8 32.5 16 31.5 16 30 L15.5 19" fill="#E96861"/>
      <path d="M28 19 C28 22 29.5 24 29.5 27 C29.5 28.2 28.7 29 27.8 29 C27 29 26.3 28.2 26.3 27 L26 19" fill="#E96861"/>
      <!-- Metal Bail Handle -->
      <path d="M12 18 C12 7 36 7 36 18" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="18" r="2.2" fill="#253047"/>
      <circle cx="36" cy="18" r="2.2" fill="#253047"/>
      <!-- Angled Paintbrush -->
      <g transform="rotate(22 30 13)">
        <rect x="28" y="-4" width="4.8" height="15" rx="2" fill="#D97706" stroke="#253047" stroke-width="1.8"/>
        <rect x="27" y="10" width="6.8" height="4" rx="1" fill="#94A3B8" stroke="#253047" stroke-width="1.6"/>
        <path d="M27 14 L27 20 C27 21.5 28.5 22.5 30.5 22.5 C32.5 22.5 34 21.5 34 20 L34 14 Z" fill="#38BDF8" stroke="#253047" stroke-width="1.8"/>
        <circle cx="28" cy="25" r="1.5" fill="#38BDF8"/>
      </g>
      <!-- Sparkle -->
      <path d="M8 12 L9.5 7 L11 12 L16 13.5 L11 15 L9.5 20 L8 15 L3 13.5 Z" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
    </svg>
  `,

  topping: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- 3D Slab Layers (Isometric) -->
      <!-- Bottom Structural Slab -->
      <path d="M6 31 L24 40 L42 31 L24 22 Z" fill="#64748B" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      <path d="M6 31 L6 35 L24 44 L24 40 Z" fill="#475569" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      <path d="M24 40 L24 44 L42 35 L42 31 Z" fill="#334155" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      
      <!-- Middle Aggregate Concrete -->
      <path d="M7 27 L24 35.5 L41 27 L24 18.5 Z" fill="#CBD5E1" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      <path d="M7 27 L7 31 L24 39.5 L24 35.5 Z" fill="#94A3B8" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      <path d="M24 35.5 L24 39.5 L41 31 L41 27 Z" fill="#64748B" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>

      <!-- Smooth Topping Finish (Top) -->
      <path d="M8 22 L24 30 L40 22 L24 14 Z" fill="#F8FAFC" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      <path d="M8 22 L8 26 L24 34 L24 30 Z" fill="#E2E8F0" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      <path d="M24 30 L24 34 L40 26 L40 22 Z" fill="#CBD5E1" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      
      <!-- Concrete Finish Sheen Lines -->
      <path d="M16 20 L28 26" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M24 17 L34 22" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round"/>

      <!-- Hand Screed / Trowel -->
      <g transform="translate(18, 6) rotate(-15)">
        <polygon points="4,12 18,12 16,16 2,16" fill="#FACC15" stroke="#253047" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M10 12 L10 8 L14 8" stroke="#D97706" stroke-width="2" stroke-linecap="round"/>
        <rect x="13" y="6" width="6" height="4" rx="1.5" fill="#B45309" stroke="#253047" stroke-width="1.5"/>
      </g>
      <circle cx="38" cy="12" r="2" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
    </svg>
  `,

  ceiling: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Suspended Ceiling Hangers -->
      <line x1="12" y1="4" x2="12" y2="18" stroke="#64748B" stroke-width="2" stroke-dasharray="2 2" stroke-linecap="round"/>
      <line x1="36" y1="4" x2="36" y2="18" stroke="#64748B" stroke-width="2" stroke-dasharray="2 2" stroke-linecap="round"/>
      <circle cx="12" cy="7" r="2.2" fill="#FACC15" stroke="#253047" stroke-width="1.5"/>
      <circle cx="36" cy="7" r="2.2" fill="#FACC15" stroke="#253047" stroke-width="1.5"/>

      <!-- T-Bar Framework Grid -->
      <path d="M6 24 L42 24" stroke="#253047" stroke-width="3" stroke-linecap="round"/>
      <path d="M6 23 L42 23" stroke="#94A3B8" stroke-width="1.8" stroke-linecap="round"/>
      
      <line x1="14" y1="18" x2="14" y2="38" stroke="#253047" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="34" y1="18" x2="34" y2="38" stroke="#253047" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Ceiling Tile Panel being fitted -->
      <g transform="rotate(-12 24 27)">
        <rect x="14" y="21" width="20" height="15" rx="1.5" fill="#F8FAFC" stroke="#253047" stroke-width="2"/>
        <!-- Acoustic perforations / texture -->
        <circle cx="18" cy="25" r="1" fill="#94A3B8"/>
        <circle cx="24" cy="25" r="1" fill="#94A3B8"/>
        <circle cx="30" cy="25" r="1" fill="#94A3B8"/>
        <circle cx="21" cy="30" r="1" fill="#94A3B8"/>
        <circle cx="27" cy="30" r="1" fill="#94A3B8"/>
      </g>

      <!-- Spirit Level Tool -->
      <rect x="12" y="38" width="24" height="6" rx="2" fill="#FACC15" stroke="#253047" stroke-width="2"/>
      <rect x="21" y="39.5" width="6" height="3" rx="1" fill="#22C55E" stroke="#253047" stroke-width="1"/>
      <circle cx="24" cy="41" r="1" fill="#FFFFFF"/>
    </svg>
  `,

  texcaWall: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Super Mario Style Precast Wall Blocks -->
      <!-- Bottom Layer -->
      <rect x="6" y="28" width="17" height="13" rx="2" fill="#FB923C" stroke="#253047" stroke-width="2.2"/>
      <rect x="7.5" y="29.5" width="14" height="2" fill="#FED7AA"/>
      <circle cx="10" cy="35" r="1" fill="#EA580C"/>
      <circle cx="19" cy="37" r="1" fill="#EA580C"/>

      <rect x="25" y="28" width="17" height="13" rx="2" fill="#F97316" stroke="#253047" stroke-width="2.2"/>
      <rect x="26.5" y="29.5" width="14" height="2" fill="#FED7AA"/>
      <circle cx="29" cy="35" r="1" fill="#C2410C"/>
      <circle cx="38" cy="36" r="1" fill="#C2410C"/>

      <!-- Top Center Block -->
      <rect x="15" y="14" width="18" height="13" rx="2" fill="#FDBA74" stroke="#253047" stroke-width="2.2"/>
      <rect x="16.5" y="15.5" width="15" height="2" fill="#FFF7ED"/>
      <circle cx="19" cy="21" r="1" fill="#EA580C"/>
      <circle cx="28" cy="22" r="1" fill="#EA580C"/>

      <!-- Mortar Joint Lines -->
      <path d="M6 28 L42 28" stroke="#F1F5F9" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="24" y1="28" x2="24" y2="41" stroke="#F1F5F9" stroke-width="2" stroke-linecap="round"/>

      <!-- Pointed Bricklayer Trowel -->
      <g transform="translate(26, 4) rotate(25)">
        <polygon points="0,14 14,14 7,3" fill="#E2E8F0" stroke="#253047" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M7 14 L7 18 L10 18" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>
        <rect x="9" y="17" width="8" height="4" rx="1.5" fill="#D97706" stroke="#253047" stroke-width="1.5"/>
      </g>
      <!-- Sparkle -->
      <path d="M10 12 L11 9 L12 12 L15 13 L12 14 L11 17 L10 14 L7 13 Z" fill="#FACC15"/>
    </svg>
  `,

  waterproofing: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Curved Shield Barrier Membrane -->
      <path d="M8 32 C12 36 20 38 24 38 C28 38 36 36 40 32 L40 36 C36 41 28 43 24 43 C20 43 12 41 8 36 Z" fill="#1E293B" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      <path d="M8 28 C12 33 20 35 24 35 C28 35 36 33 40 28 L40 32 C36 37 28 39 24 39 C20 39 12 37 8 32 Z" fill="#0284C7" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      <path d="M8 24 C12 29 20 31 24 31 C28 31 36 29 40 24 L40 28 C36 33 28 35 24 35 C20 35 12 33 8 28 Z" fill="#38BDF8" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>

      <!-- Water Ripple Rings -->
      <ellipse cx="24" cy="27" rx="12" ry="4" stroke="#BAE6FD" stroke-width="1.5" stroke-dasharray="2 3"/>

      <!-- Friendly Chunky Water Droplet Character -->
      <path d="M24 6 C24 6 14 18 14 23 C14 28.5 18.5 33 24 33 C29.5 33 34 28.5 34 23 C34 18 24 6 24 6 Z" fill="#38BDF8" stroke="#253047" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M24 8 C24 8 16 19 16 23 C16 27.4 19.6 31 24 31 C25.2 31 26.3 30.7 27.3 30.2 C24.5 29.5 22.5 27 22.5 24 C22.5 20.5 25 18 27.5 15 C26 12 24 8 24 8 Z" fill="#0EA5E9"/>
      <!-- Specular Highlight -->
      <ellipse cx="20" cy="20" rx="2.5" ry="5" transform="rotate(-25 20 20)" fill="#FFFFFF"/>
      <circle cx="21" cy="27" r="1.5" fill="#FFFFFF"/>

      <!-- Protection Stars -->
      <path d="M37 12 L38 9 L39 12 L42 13 L39 14 L38 17 L37 14 L34 13 Z" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
      <circle cx="10" cy="18" r="1.5" fill="#38BDF8"/>
    </svg>
  `,

  tiling: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- 2x2 Ceramic Tiles Grid -->
      <!-- Tile Top-Left (Mint) -->
      <rect x="8" y="8" width="14.5" height="14.5" rx="2" fill="#2DD4BF" stroke="#253047" stroke-width="2.2"/>
      <path d="M9.5 9.5 L21 9.5 L9.5 21 Z" fill="#5EEAD4" opacity="0.6"/>
      <line x1="11" y1="12" x2="18" y2="19" stroke="#CCFBF1" stroke-width="1.8" stroke-linecap="round"/>

      <!-- Tile Top-Right (Sky) -->
      <rect x="25.5" y="8" width="14.5" height="14.5" rx="2" fill="#38BDF8" stroke="#253047" stroke-width="2.2"/>
      <path d="M27 9.5 L38.5 9.5 L27 21 Z" fill="#7DD3FC" opacity="0.6"/>
      <line x1="28" y1="12" x2="35" y2="19" stroke="#E0F2FE" stroke-width="1.8" stroke-linecap="round"/>

      <!-- Tile Bottom-Left (Sky) -->
      <rect x="8" y="25.5" width="14.5" height="14.5" rx="2" fill="#38BDF8" stroke="#253047" stroke-width="2.2"/>
      <path d="M9.5 27 L21 27 L9.5 38.5 Z" fill="#7DD3FC" opacity="0.6"/>

      <!-- Tile Bottom-Right (Mint) -->
      <rect x="25.5" y="25.5" width="14.5" height="14.5" rx="2" fill="#2DD4BF" stroke="#253047" stroke-width="2.2"/>
      <path d="M27 27 L38.5 27 L27 38.5 Z" fill="#5EEAD4" opacity="0.6"/>

      <!-- Tile Cross Spacer in Center (+) -->
      <g transform="translate(24, 24)">
        <rect x="-1" y="-4" width="2" height="8" rx="0.5" fill="#FFFFFF" stroke="#253047" stroke-width="1"/>
        <rect x="-4" y="-1" width="8" height="2" rx="0.5" fill="#FFFFFF" stroke="#253047" stroke-width="1"/>
      </g>

      <!-- Sparkle Stars -->
      <path d="M37 6 L38.5 2 L40 6 L44 7.5 L40 9 L38.5 13 L37 9 L33 7.5 Z" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
      <path d="M12 36 L13 33 L14 36 L17 37 L14 38 L13 41 L12 38 L9 37 Z" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
    </svg>
  `,

  aluminum: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Outer Aluminum Frame -->
      <rect x="6" y="8" width="36" height="32" rx="3" fill="#E2E8F0" stroke="#253047" stroke-width="2.5"/>
      <rect x="8" y="10" width="32" height="28" rx="1.5" fill="#94A3B8" stroke="#253047" stroke-width="1.5"/>

      <!-- Left Sliding Pane -->
      <rect x="9.5" y="11.5" width="15.5" height="25" rx="1.5" fill="#38BDF8" stroke="#253047" stroke-width="2"/>
      <path d="M11 13 L23.5 13 L11 25.5 Z" fill="#7DD3FC" opacity="0.6"/>
      <line x1="12" y1="20" x2="21" y2="29" stroke="#E0F2FE" stroke-width="2" stroke-linecap="round"/>
      <line x1="15" y1="16" x2="22" y2="23" stroke="#E0F2FE" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Right Sliding Pane (Overlap) -->
      <rect x="23" y="11.5" width="15.5" height="25" rx="1.5" fill="#0EA5E9" stroke="#253047" stroke-width="2"/>
      <path d="M24.5 13 L37 13 L24.5 25.5 Z" fill="#38BDF8" opacity="0.6"/>
      <line x1="26" y1="20" x2="35" y2="29" stroke="#E0F2FE" stroke-width="2" stroke-linecap="round"/>

      <!-- Center Sash & Modern Handle -->
      <rect x="22" y="11" width="3" height="26" fill="#CBD5E1" stroke="#253047" stroke-width="1.8"/>
      <rect x="21" y="21" width="2" height="6" rx="1" fill="#1E293B"/>

      <!-- Corner Sparkle -->
      <path d="M40 7 L41 4 L42 7 L45 8 L42 9 L41 12 L40 9 L37 8 Z" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
    </svg>
  `,

  wetWork: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Golden Clipboard Board -->
      <rect x="10" y="8" width="28" height="34" rx="3" fill="#F59E0B" stroke="#253047" stroke-width="2.5"/>
      <rect x="12" y="12" width="24" height="28" rx="1.5" fill="#FFFBEB"/>

      <!-- Clipboard Top Metal Clip -->
      <rect x="18" y="5" width="12" height="6" rx="2" fill="#94A3B8" stroke="#253047" stroke-width="2"/>
      <circle cx="24" cy="8" r="1.5" fill="#253047"/>

      <!-- Checklist Rows -->
      <line x1="16" y1="18" x2="32" y2="18" stroke="#E2E8F0" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="16" y1="24" x2="26" y2="24" stroke="#E2E8F0" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="16" y1="30" x2="24" y2="30" stroke="#E2E8F0" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Triumphant Rosette Ribbon & Star Medal -->
      <!-- Red Ribbon tails -->
      <path d="M30 28 L27 41 L32 38 L37 41 L34 28 Z" fill="#E96861" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      <!-- Golden Star Rosette Badge -->
      <circle cx="32" cy="28" r="8" fill="#FACC15" stroke="#253047" stroke-width="2.2"/>
      <circle cx="32" cy="28" r="6" fill="#FDE047"/>
      <!-- Bold Checkmark inside Star Badge -->
      <path d="M28.5 28 L31 30.5 L35.5 25" stroke="#15803D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      
      <!-- Sparkle -->
      <path d="M8 16 L9.5 12 L11 16 L15 17.5 L11 19 L9.5 23 L8 19 L4 17.5 Z" fill="#FACC15"/>
    </svg>
  `,

  furniture: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Animal Crossing Style Wooden Wardrobe / Cabinet -->
      <!-- Legs -->
      <rect x="11" y="38" width="4" height="4" rx="1" fill="#92400E" stroke="#253047" stroke-width="2"/>
      <rect x="33" y="38" width="4" height="4" rx="1" fill="#92400E" stroke="#253047" stroke-width="2"/>

      <!-- Main Body -->
      <rect x="9" y="11" width="30" height="28" rx="2.5" fill="#F59E0B" stroke="#253047" stroke-width="2.5"/>
      <rect x="11" y="13" width="13" height="17" rx="1" fill="#FDE68A" stroke="#253047" stroke-width="1.8"/>
      <rect x="24" y="13" width="13" height="17" rx="1" fill="#FDE68A" stroke="#253047" stroke-width="1.8"/>

      <!-- Pull Knobs -->
      <circle cx="21" cy="22" r="1.5" fill="#D97706" stroke="#253047" stroke-width="1"/>
      <circle cx="27" cy="22" r="1.5" fill="#D97706" stroke="#253047" stroke-width="1"/>

      <!-- Bottom Drawers -->
      <rect x="11" y="31" width="26" height="6.5" rx="1" fill="#FBBF24" stroke="#253047" stroke-width="1.8"/>
      <rect x="22" y="33" width="4" height="2" rx="0.5" fill="#92400E"/>

      <!-- Cute Potted Succulent Plant on top -->
      <polygon points="21,11 27,11 26,7 22,7" fill="#F97316" stroke="#253047" stroke-width="1.5"/>
      <path d="M24 7 C22 3 20 4 20 6 C20 8 23 8 24 7 Z" fill="#22C55E" stroke="#253047" stroke-width="1.2"/>
      <path d="M24 7 C26 3 28 4 28 6 C28 8 25 8 24 7 Z" fill="#16A34A" stroke="#253047" stroke-width="1.2"/>
      <path d="M24 7 C24 2 24 2 24 4 C24 6 24 7 24 7 Z" fill="#4ADE80" stroke="#253047" stroke-width="1"/>

      <circle cx="36" cy="8" r="1.5" fill="#FACC15"/>
    </svg>
  `,

  laminate: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- 3 Staggered Interlocking Laminate Wood Planks -->
      <!-- Plank 1 (Top) -->
      <g transform="rotate(-15 24 24)">
        <rect x="6" y="10" width="34" height="8" rx="1.5" fill="#FBBF24" stroke="#253047" stroke-width="2"/>
        <line x1="12" y1="13" x2="26" y2="13" stroke="#D97706" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="20" y1="15" x2="34" y2="15" stroke="#D97706" stroke-width="1.2" stroke-linecap="round"/>

        <!-- Plank 2 (Middle) -->
        <rect x="10" y="19" width="34" height="8" rx="1.5" fill="#F59E0B" stroke="#253047" stroke-width="2"/>
        <line x1="16" y1="22" x2="30" y2="22" stroke="#B45309" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="24" y1="24" x2="38" y2="24" stroke="#B45309" stroke-width="1.2" stroke-linecap="round"/>

        <!-- Plank 3 (Bottom) -->
        <rect x="4" y="28" width="34" height="8" rx="1.5" fill="#FBBF24" stroke="#253047" stroke-width="2"/>
        <line x1="10" y1="31" x2="22" y2="31" stroke="#D97706" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="18" y1="33" x2="32" y2="33" stroke="#D97706" stroke-width="1.2" stroke-linecap="round"/>
      </g>

      <!-- Rubber Installation Mallet Hammer -->
      <g transform="translate(24, 6) rotate(30)">
        <rect x="10" y="1" width="8" height="12" rx="2.5" fill="#1E293B" stroke="#253047" stroke-width="2"/>
        <rect x="13" y="11" width="2.5" height="16" rx="1" fill="#D97706" stroke="#253047" stroke-width="1.8"/>
      </g>

      <!-- Sparkle -->
      <path d="M40 32 L41 29 L42 32 L45 33 L42 34 L41 37 L40 34 L37 33 Z" fill="#FACC15"/>
    </svg>
  `,

  door: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Sturdy Door Frame -->
      <path d="M10 42 L10 9 C10 7.3 11.3 6 13 6 L35 6 C36.7 6 38 7.3 38 9 L38 42" stroke="#253047" stroke-width="3" stroke-linecap="round"/>
      <rect x="8" y="41" width="32" height="3" rx="1.5" fill="#64748B" stroke="#253047" stroke-width="2"/>

      <!-- Door Panel (Warm Cedar) -->
      <rect x="12" y="8" width="24" height="33" rx="2" fill="#F97316" stroke="#253047" stroke-width="2.2"/>
      
      <!-- 4 Molded Inset Panels -->
      <rect x="15" y="11" width="8" height="11" rx="1.5" fill="#FB923C" stroke="#C2410C" stroke-width="1.5"/>
      <rect x="25" y="11" width="8" height="11" rx="1.5" fill="#FB923C" stroke="#C2410C" stroke-width="1.5"/>
      
      <rect x="15" y="25" width="8" height="13" rx="1.5" fill="#FB923C" stroke="#C2410C" stroke-width="1.5"/>
      <rect x="25" y="25" width="8" height="13" rx="1.5" fill="#FB923C" stroke="#C2410C" stroke-width="1.5"/>

      <!-- Polished Brass Lever Handle -->
      <rect x="30" y="22.5" width="4" height="2" rx="1" fill="#FACC15" stroke="#253047" stroke-width="1.5"/>
      <circle cx="30.5" cy="23.5" r="2" fill="#FACC15" stroke="#253047" stroke-width="1.2"/>
      <circle cx="30.5" cy="27" r="1" fill="#253047"/>

      <!-- Sparkle -->
      <path d="M37 12 L38 9 L39 12 L42 13 L39 14 L38 17 L37 14 L34 13 Z" fill="#FACC15"/>
    </svg>
  `,

  showerScreen: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Frameless Shower Glass Enclosure -->
      <!-- Chrome Top Header Bar -->
      <rect x="8" y="7" width="32" height="3" rx="1" fill="#CBD5E1" stroke="#253047" stroke-width="2"/>
      <circle cx="14" cy="8.5" r="1.5" fill="#64748B"/>
      <circle cx="34" cy="8.5" r="1.5" fill="#64748B"/>

      <!-- Tempered Glass Screen -->
      <rect x="10" y="9" width="28" height="32" rx="2" fill="#E0F2FE" stroke="#253047" stroke-width="2.2"/>
      <rect x="10" y="9" width="13" height="32" fill="#BAE6FD" opacity="0.5"/>

      <!-- Diagonal Glass Gloss Sheens -->
      <line x1="14" y1="13" x2="34" y2="33" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="20" y1="13" x2="34" y2="27" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Vertical Chrome D-Handle -->
      <rect x="31" y="20" width="3" height="12" rx="1.5" fill="#F8FAFC" stroke="#253047" stroke-width="1.8"/>
      <rect x="32" y="23" width="1" height="6" fill="#94A3B8"/>

      <!-- Water Droplets & Bubbles -->
      <circle cx="16" cy="24" r="2" fill="#38BDF8" stroke="#253047" stroke-width="1"/>
      <circle cx="21" cy="31" r="1.5" fill="#38BDF8" stroke="#253047" stroke-width="1"/>
      <circle cx="18" cy="35" r="1" fill="#38BDF8"/>

      <!-- Sparkles -->
      <path d="M37 6 L38.5 2 L40 6 L44 7.5 L40 9 L38.5 13 L37 9 L33 7.5 Z" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
    </svg>
  `,

  paintOnly: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Fresh Paint Stripe on Wall -->
      <path d="M12 8 L36 8 L36 26 C36 29 33 31 30 31 L18 31 C15 31 12 29 12 26 Z" fill="#FFE4E6"/>
      <path d="M14 8 L34 8 L34 22 C34 24 32 26 30 26 L18 26 C16 26 14 24 14 22 Z" fill="#FDA4AF"/>
      <circle cx="21" cy="33" r="2" fill="#E96861"/>
      <circle cx="27" cy="30" r="1.5" fill="#E96861"/>

      <!-- Chunky Paint Roller -->
      <!-- Roller Cylinder -->
      <rect x="12" y="11" width="24" height="11" rx="4" fill="#E96861" stroke="#253047" stroke-width="2.5"/>
      <rect x="14" y="13" width="20" height="3" rx="1.5" fill="#FCA5A5"/>
      <circle cx="12" cy="16.5" r="2" fill="#B91C1C"/>
      <circle cx="36" cy="16.5" r="2" fill="#B91C1C"/>

      <!-- Metal Rod Frame -->
      <path d="M36 16.5 L40 16.5 L40 29 L26 29 L26 35" stroke="#64748B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36 16.5 L40 16.5 L40 29 L26 29 L26 35" stroke="#253047" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Wooden / Rubber Handle Grip -->
      <rect x="23" y="34" width="6" height="11" rx="2.5" fill="#F59E0B" stroke="#253047" stroke-width="2.2"/>
      <line x1="24" y1="37" x2="28" y2="37" stroke="#B45309" stroke-width="1.5"/>
      <line x1="24" y1="41" x2="28" y2="41" stroke="#B45309" stroke-width="1.5"/>

      <!-- Sparkle -->
      <path d="M8 12 L9.5 8 L11 12 L15 13.5 L11 15 L9.5 19 L8 15 L4 13.5 Z" fill="#FACC15"/>
    </svg>
  `,

  aluminumPaint: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Aluminum Frame Corner Joint -->
      <path d="M8 8 L32 8 L32 18 L18 18 L18 38 L8 38 Z" fill="#94A3B8" stroke="#253047" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M10 10 L30 10 L30 16 L16 16 L16 36 L10 36 Z" fill="#CBD5E1"/>
      <line x1="8" y1="8" x2="18" y2="18" stroke="#253047" stroke-width="2"/>

      <!-- Glass Pane inside -->
      <rect x="18" y="18" width="22" height="20" rx="1.5" fill="#BAE6FD" stroke="#253047" stroke-width="2"/>
      <line x1="22" y1="22" x2="34" y2="34" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>

      <!-- Artist Detail Touch-up Paintbrush -->
      <g transform="translate(18, 12) rotate(-35)">
        <rect x="14" y="-8" width="3.5" height="22" rx="1.5" fill="#D97706" stroke="#253047" stroke-width="1.8"/>
        <rect x="13.5" y="12" width="4.5" height="5" rx="1" fill="#94A3B8" stroke="#253047" stroke-width="1.5"/>
        <path d="M13.5 17 C13.5 20 15 22 15.7 23 C16.5 22 18 20 18 17 Z" fill="#38BDF8" stroke="#253047" stroke-width="1.5"/>
      </g>

      <!-- Precision Touchup Stars -->
      <path d="M30 14 L31 11 L32 14 L35 15 L32 16 L31 19 L30 16 L27 15 Z" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
      <circle cx="36" cy="12" r="1.5" fill="#38BDF8"/>
    </svg>
  `,

  cleaning: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Sky Blue Dustpan -->
      <path d="M16 28 L28 28 L30 40 L14 40 Z" fill="#38BDF8" stroke="#253047" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M17 29 L27 29 L28.5 38 L15.5 38 Z" fill="#7DD3FC"/>
      <rect x="21" y="40" width="4" height="4" rx="1" fill="#FACC15" stroke="#253047" stroke-width="1.5"/>

      <!-- Straw Broom -->
      <g transform="translate(6, 0) rotate(18 24 24)">
        <rect x="22" y="2" width="3.5" height="26" rx="1.5" fill="#D97706" stroke="#253047" stroke-width="2"/>
        <!-- Broom Tied Bristles -->
        <path d="M20 25 L27 25 L31 38 C31 40 28 41 23.5 41 C19 41 16 40 16 38 Z" fill="#FBBF24" stroke="#253047" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Red Binding Ribbon -->
        <rect x="19" y="27" width="9" height="3" rx="1" fill="#E96861" stroke="#253047" stroke-width="1.5"/>
        <line x1="20" y1="34" x2="27" y2="34" stroke="#D97706" stroke-width="1.2"/>
      </g>

      <!-- Spray Bottle & Mist Bubbles -->
      <g transform="translate(2, 6)">
        <circle cx="10" cy="16" r="2" fill="#BAE6FD" stroke="#253047" stroke-width="1"/>
        <circle cx="7" cy="22" r="1.5" fill="#BAE6FD"/>
      </g>

      <!-- Bright Twinkling Cleaning Stars -->
      <path d="M38 12 L39.5 8 L41 12 L45 13.5 L41 15 L39.5 19 L38 15 L34 13.5 Z" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
      <path d="M12 10 L13 7 L14 10 L17 11 L14 12 L13 15 L12 12 L9 11 Z" fill="#FACC15" stroke="#253047" stroke-width="0.8"/>
    </svg>
  `,

  endProduct: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Zelda / Mario Royal Knight Shield -->
      <!-- Outer Golden Rim -->
      <path d="M24 5 C34 5 40 8 40 18 C40 31 24 43 24 43 C24 43 8 31 8 18 C8 8 14 5 24 5 Z" fill="#FACC15" stroke="#253047" stroke-width="2.8" stroke-linejoin="round"/>
      
      <!-- Inner Emerald Shield Plate -->
      <path d="M24 8 C32 8 37 10.5 37 18 C37 29 24 39.5 24 39.5 C24 39.5 11 29 11 18 C11 10.5 16 8 24 8 Z" fill="#10B981" stroke="#253047" stroke-width="2" stroke-linejoin="round"/>
      
      <!-- Shield Sheen Highlight -->
      <path d="M24 9 C30 9 35 11 35 18 C35 25 27 33 24 36 C24 36 24 16 24 9 Z" fill="#34D399" opacity="0.6"/>

      <!-- Golden Winged Crest / Ribbon -->
      <path d="M15 17 C19 19 24 16 24 16 C24 16 29 19 33 17 C31 21 27 22 24 20 C21 22 17 21 15 17 Z" fill="#FDE047" stroke="#253047" stroke-width="1.5"/>

      <!-- Triumphant White Checkmark -->
      <path d="M17 23 L22 28 L31 18" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 23 L22 28 L31 18" stroke="#253047" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Crown Diamond Star -->
      <path d="M24 2 L26 5 L24 8 L22 5 Z" fill="#FDE047" stroke="#253047" stroke-width="1"/>
      <circle cx="8" cy="14" r="1.5" fill="#FACC15"/>
      <circle cx="40" cy="14" r="1.5" fill="#FACC15"/>
    </svg>
  `,

  common: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Sunny Cloud Overhead -->
      <path d="M28 7 C28 5 30 3.5 32 3.5 C34 3.5 35.5 5 35.5 6.5 C37 6.5 38 7.5 38 9 C38 10.5 37 11.5 35.5 11.5 L28 11.5 C26.5 11.5 25.5 10.5 25.5 9 C25.5 7.5 26.5 7 28 7 Z" fill="#FFFFFF" stroke="#253047" stroke-width="1.2"/>

      <!-- Condominium Clubhouse Building -->
      <!-- Ground Lawn -->
      <rect x="4" y="38" width="40" height="5" rx="2.5" fill="#4ADE80" stroke="#253047" stroke-width="2"/>
      
      <!-- Tower Body -->
      <rect x="13" y="13" width="22" height="26" rx="2.5" fill="#F8FAFC" stroke="#253047" stroke-width="2.5"/>
      <rect x="14" y="10" width="20" height="4" rx="1.5" fill="#68AEDA" stroke="#253047" stroke-width="2"/>

      <!-- Windows (2x3 Grid) -->
      <rect x="16" y="16" width="6.5" height="5" rx="1" fill="#38BDF8" stroke="#253047" stroke-width="1.5"/>
      <rect x="25.5" y="16" width="6.5" height="5" rx="1" fill="#38BDF8" stroke="#253047" stroke-width="1.5"/>
      
      <rect x="16" y="23" width="6.5" height="5" rx="1" fill="#38BDF8" stroke="#253047" stroke-width="1.5"/>
      <rect x="25.5" y="23" width="6.5" height="5" rx="1" fill="#38BDF8" stroke="#253047" stroke-width="1.5"/>

      <!-- Entrance Door & Coral Awning -->
      <rect x="20.5" y="31" width="7" height="8" rx="1" fill="#253047"/>
      <path d="M19 31 C19 29.5 29 29.5 29 31 Z" fill="#E96861" stroke="#253047" stroke-width="1.8"/>

      <!-- Left Round Puff Tree -->
      <circle cx="9" cy="33" r="5.5" fill="#22C55E" stroke="#253047" stroke-width="2"/>
      <circle cx="8" cy="31" r="1.2" fill="#FEF08A"/>
      <rect x="8" y="37" width="2" height="3" fill="#92400E"/>

      <!-- Right Round Puff Tree -->
      <circle cx="39" cy="33" r="5.5" fill="#16A34A" stroke="#253047" stroke-width="2"/>
      <circle cx="40" cy="31" r="1.2" fill="#FEF08A"/>
      <rect x="38" y="37" width="2" height="3" fill="#92400E"/>

      <!-- Sparkle -->
      <path d="M10 14 L11 11 L12 14 L15 15 L12 16 L11 19 L10 16 L7 15 Z" fill="#FACC15"/>
    </svg>
  `,

  electrical: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Mario Thunder Lightning Bolt -->
      <path d="M26 4 L12 24 L22 24 L18 44 L36 20 L24 20 Z" fill="#FACC15" stroke="#253047" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M25 7 L15 23 L22 23 L19 40 L33 21 L24 21 Z" fill="#FEF08A"/>
      <!-- Electrical Sparks -->
      <path d="M8 12 L9.5 8 L11 12 L15 13.5 L11 15 L9.5 19 L8 15 L4 13.5 Z" fill="#F59E0B"/>
      <path d="M38 32 L39.5 28 L41 32 L45 33.5 L41 35 L39.5 39 L38 35 L34 33.5 Z" fill="#F59E0B"/>
    </svg>
  `,

  electricalRoughIn: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Mario Thunder Lightning Bolt -->
      <path d="M26 4 L12 24 L22 24 L18 44 L36 20 L24 20 Z" fill="#FACC15" stroke="#253047" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M25 7 L15 23 L22 23 L19 40 L33 21 L24 21 Z" fill="#FEF08A"/>
      <!-- Electrical Sparks -->
      <path d="M8 12 L9.5 8 L11 12 L15 13.5 L11 15 L9.5 19 L8 15 L4 13.5 Z" fill="#F59E0B"/>
      <path d="M38 32 L39.5 28 L41 32 L45 33.5 L41 35 L39.5 39 L38 35 L34 33.5 Z" fill="#F59E0B"/>
    </svg>
  `,

  plumbing: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- Super Mario Green Water Pipe -->
      <rect x="8" y="18" width="16" height="22" rx="2" fill="#22C55E" stroke="#253047" stroke-width="2.5"/>
      <rect x="6" y="14" width="20" height="6" rx="2" fill="#4ADE80" stroke="#253047" stroke-width="2.5"/>
      <!-- Pipe Shine -->
      <rect x="9" y="20" width="3" height="18" fill="#86EFAC"/>
      <!-- Brass Valve Wheel -->
      <rect x="24" y="26" width="12" height="6" rx="1.5" fill="#F59E0B" stroke="#253047" stroke-width="2"/>
      <circle cx="36" cy="29" r="6" fill="#FACC15" stroke="#253047" stroke-width="2"/>
      <circle cx="36" cy="29" r="2" fill="#B45309"/>
      <!-- Water Droplet -->
      <path d="M16 6 C16 6 11 12 11 14.5 C11 17 13.2 19 16 19 C18.8 19 21 17 21 14.5 C21 12 16 6 16 6 Z" fill="#38BDF8" stroke="#253047" stroke-width="1.8"/>
    </svg>
  `,

  airCon: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="nintendo-work-svg">
      <!-- AC Indoor Unit -->
      <rect x="6" y="10" width="36" height="18" rx="3" fill="#F8FAFC" stroke="#253047" stroke-width="2.5"/>
      <line x1="10" y1="22" x2="38" y2="22" stroke="#CBD5E1" stroke-width="2"/>
      <circle cx="37" cy="15" r="1.5" fill="#22C55E"/>
      <rect x="10" y="24" width="28" height="3" rx="1" fill="#38BDF8"/>
      <!-- Cool Breeze Wind Gusts -->
      <path d="M12 32 C16 32 18 36 22 36 C26 36 28 32 32 32" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
      <path d="M16 38 C20 38 22 41 26 41 C30 41 32 38 36 38" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
      <!-- Snowflake -->
      <g transform="translate(34, 30)">
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#0284C7" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="-4" y1="0" x2="4" y2="0" stroke="#0284C7" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="-3" y1="-3" x2="3" y2="3" stroke="#0284C7" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="3" y1="-3" x2="-3" y2="3" stroke="#0284C7" stroke-width="1.2" stroke-linecap="round"/>
      </g>
    </svg>
  `
};

if (typeof window !== "undefined") {
  window.nintendoWorkIcons = nintendoWorkIcons;
}
