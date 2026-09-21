/**
 * Validation fixture for @bbettr/motion.
 *
 * Run: `npm run validate`
 *
 * This is not a unit-test suite. It asserts the guarantees the Motion System
 * claims — the ones that failed silently in production and cannot be verified by
 * reading code. Every assertion maps to a rule in
 * SYSTEM/DESIGN-LANGUAGE/02-MOTION-SYSTEM.md.
 */

import { renderToStaticMarkup } from "react-dom/server";
import { CountUp } from "./CountUp";
import { NOSCRIPT_FALLBACK, Reveal } from "./Reveal";
import { heroStack } from "./hero";
import { fadeUp, fadeUpItem, imageReveal, scaleIn } from "./presets";
import { EASE, STAGGER_CAP, staggerDelay } from "./tokens";

let failures = 0;
let checks = 0;

function check(name: string, condition: boolean, detail = "") {
  checks += 1;
  if (condition) {
    console.log(`  ok   ${name}`);
  } else {
    failures += 1;
    console.error(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

function section(title: string) {
  console.log(`\n${title}`);
}

// ─── 1. Reduced motion ──────────────────────────────────────────────────────
section("Reduced motion (§7)");
{
  const r = fadeUp({ reduced: true });
  check("fadeUp collapses to the final state", r.initial.opacity === 1 && r.initial.y === 0);
  check("fadeUp removes the transition", r.transition.duration === 0);
  check("fadeUp does not scroll-trigger when reduced", r.whileInView === undefined);

  const s = scaleIn({ reduced: true });
  check("scaleIn collapses to full scale", s.initial.scale === 1 && s.initial.opacity === 1);

  const i = imageReveal({ reduced: true });
  check("imageReveal collapses to natural scale", i.initial.scale === 1);
}

// ─── 2. LCP protection ──────────────────────────────────────────────────────
section("LCP protection (§5)");
{
  const hero = heroStack({ character: "considered" });
  check("heroStack.lcp carries no animation props", Object.keys(hero.lcp).length === 0);
  check("heroStack.lcp is frozen", Object.isFrozen(hero.lcp));
  check("hero steps are always eager", hero.step(0).eager === true && hero.step(3).eager === true);
  check("hero step delays increase", hero.step(0).delay < hero.step(1).delay);
  check("hero duration is capped at 1s", hero.duration <= 1);

  const img = imageReveal();
  check(
    "imageReveal never animates opacity (preserves priority preload)",
    !("opacity" in img.initial) && !("opacity" in (img.whileInView ?? {})),
  );
}

// ─── 3. Above-the-fold trigger ──────────────────────────────────────────────
section("Above-the-fold trigger (§5)");
{
  const eager = fadeUp({ eager: true });
  check("eager uses mount animation", eager.animate !== undefined);
  check("eager does not use whileInView", eager.whileInView === undefined);
  check("eager has no viewport observer", eager.viewport === undefined);

  const lazy = fadeUp();
  check("default is scroll-triggered", lazy.whileInView !== undefined);
  check("default reveals once only", lazy.viewport?.once === true);
}

// ─── 4. Stagger discipline ──────────────────────────────────────────────────
section("Stagger discipline (§4)");
{
  check(`delay stops growing past index ${STAGGER_CAP}`, staggerDelay(50) === staggerDelay(STAGGER_CAP));
  check("delay is monotonic below the cap", staggerDelay(1) < staggerDelay(3));
  check("negative index is clamped to zero", staggerDelay(-5) === 0);

  const last = fadeUpItem({ index: 40 });
  check("a 40-item list never strands its tail beyond 1s", (last.transition.delay ?? 0) <= 1);
}

// ─── 5. One easing, one vocabulary ──────────────────────────────────────────
section("Single source of easing (§3)");
{
  const presets = [fadeUp(), fadeUpItem({ index: 2 }), scaleIn(), imageReveal()];
  check(
    "every preset uses the house curve",
    presets.every((p) => p.transition.ease === EASE),
  );
  check(
    "no preset exceeds the duration ceiling",
    presets.every((p) => p.transition.duration <= 1),
  );
}

// ─── 6. Server-rendered visibility ──────────────────────────────────────────
section("Server-rendered visibility (§8)");
{
  const heroHtml = renderToStaticMarkup(
    <Reveal eager>
      <h1>Precision-engineered curtains</h1>
    </Reveal>,
  );
  check("above-fold content is not hidden in SSR HTML", !/opacity:\s*0/.test(heroHtml), heroHtml);
  check("hero copy is present in SSR HTML", heroHtml.includes("Precision-engineered curtains"));

  const belowHtml = renderToStaticMarkup(
    <Reveal>
      <p>Below the fold</p>
    </Reveal>,
  );
  check("below-fold content is still in the SSR DOM (text present)", belowHtml.includes("Below the fold"));
  check("below-fold reveal is tagged for the no-JS fallback", belowHtml.includes("data-reveal"));
  check("no-JS fallback rule targets that hook", NOSCRIPT_FALLBACK.includes("[data-reveal]"));

  const statHtml = renderToStaticMarkup(<CountUp value={15200} format="compact" suffix="+" />);
  check("CountUp server-renders the real figure, not 0", /15\.2K/.test(statHtml), statHtml);
  check("CountUp exposes the figure to assistive tech", statHtml.includes("aria-label"));
  check("CountUp hides the ticking text from screen readers", statHtml.includes('aria-hidden="true"'));
}

// ─── Result ─────────────────────────────────────────────────────────────────
console.log(
  `\n${failures === 0 ? "PASS" : "FAIL"} — ${checks - failures}/${checks} checks passed\n`,
);
process.exit(failures === 0 ? 0 : 1);
