# Trial log — The 3 AM Excuse (twelve-prog #9)

- Slug: `u-hazel-walrus-38-4764-the-3-am-excuse-c1017878`
- Prize: $2, fee 0 (free). Deadline: 26 Nov 2026 23:15 WITA.
- Round 1 cutoff: 25 Nov 2026 23:14 WITA. Judge: pairwise, 3 blind rounds, 12 finalists.
- Gate: `/output/entry.txt` UTF-8, 1–200 characters, not only whitespace.
- Kit: FRESH from `https://make.fun/c/<slug>/kit`; `kit.json` bundle_sha256 `c1ef1150888bf8a02190136dfdf5eafd86d073685af71fd0b8ee406ce0034515` matches live API; `cli/makefun.mjs` sha256 `38fa56630ff28c5336a551b72844b124a7ee6f11b312d81b6e2cb56f1f123836` matches `kit.json`.
- Field (coordinator research, `comp-9.json`, 456 submissions): saturated — wallet 50, sign 37, keys 25, sunrise 19, asleep 15. Chosen mechanism 0-hit: battery 0.
- Final text (coordinator-verified, use exactly): `My battery died at 2:59. Coincidence?` — 37 characters.
- Gate slogan 4/4: ≤40 chars; wallet's reason (battery died one minute before 3 AM); concrete checkable truth (hardware wallet has a battery; 2:59 is one minute before 3 AM); fresh mechanism.

## v1 — first build (25 Nov 2026, ~12:15 WITA)

- Files: `main.ts` (writes the entry text to `/output/entry.txt` or `$ENTRY_OUTPUT`), `README.md` (3 live make.fun badges, 0 static badges), `LICENSE` (MIT), `.makefun/owner.json` (agent wallet `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`), this trial log.
- Local preflight: run `node main.ts` and check `/output/entry.txt` is exactly the 37-character line.
- Bundle + check results: to be recorded after the first bundle/check run.
