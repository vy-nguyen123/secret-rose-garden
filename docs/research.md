# Research and planning notes

These notes were assembled during completion of the project with Codex assistance. Linked source material was reviewed; full browser interaction on all four external sites was not recorded. The author should open and explore each reference personally before submission. Do not describe these notes as a pre-production research log.

## Reference skill

- https://github.com/oso95/scroll-world
- https://github.com/oso95/scroll-world/blob/main/skills/scroll-world/SKILL.md

The workflow connects scene clips through actual boundary frames and provides a vanilla JavaScript scrub engine. The transferable ideas are consistent art direction, validating one transition first, frame extraction, and mapping scrolling to camera time. This project uses a single merged film and a smaller custom scrub engine. Its production path used Magnific UI rather than the reference's Higgsfield/Monid calls.

## Four website/story references

1. **Porsche Motorsport** — https://racing.porsche.com/en-US
   Branded motorsport storytelling and strong imagery. Project takeaway: keep a distinct identity and concise text alongside the visual journey. No claim is made that this project uses Porsche's implementation.
2. **Apple AirPods Pro** — https://www.apple.com/airpods-pro/
   Product presentation arranged around large visuals and feature sections. Project takeaway: focus each section on one message and give media room to breathe. The current page may differ from older scroll-animation examples.
3. **Emons** — https://www.emons.de/ and creator case study https://www.blueworld.studio/cases/emons
   The reference repository identifies Emons as an inspiration for connected travel through a world. The creator's case study documents the visual identity and web work. Project takeaway: keep the journey coherent and the world stylistically consistent. The case study alone does not verify every live scroll interaction.
4. **The Guardian: Firestorm** — https://www.theguardian.com/world/interactive/2013/may/26/firestorm-bushfire-dunalley-holmes-family
   An interactive story reference. Project takeaway: organise the experience into narrative stages and balance visual atmosphere with readable text. Only limited text was available to the research tool; detailed interaction analysis remains to be completed by the author.

## Project decisions

The garden uses a grounded forward camera journey instead of the reference's miniature world look. Red roses repeat across locations. Captions were shortened after testing because long paragraphs covered the scenery. The original 45% black overlay was reduced; final CSS uses stronger shading near text and lighter shading elsewhere. A static fallback supports visitors who prefer reduced motion.
