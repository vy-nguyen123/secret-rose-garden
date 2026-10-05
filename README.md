# The Secret Rose Garden

Assignment A2 — Build a Scroll World/Story.

A visitor scrolls through a fictional classical European garden: an iron gate, a quiet pond, a red rose walk and a forgotten villa. Scrolling forward moves through the film; scrolling backward retraces the journey.

## Run

Open `index.html` in a browser, or use VS Code Live Server. No build step, packages, backend or database are required. Keep the `assets` folder beside the HTML file.

## Links

- GitHub repository: [secret-rose-garden](https://github.com/vy-nguyen123/secret-rose-garden)
- Live website: [The Secret Rose Garden](https://vy-nguyen123.github.io/secret-rose-garden/)

## Concept and visual direction

- Subject: an imagined European rose garden.
- Purpose: invite slow exploration through a connected camera journey.
- Audience: visitors who enjoy nature, art and visual storytelling.
- Core message: some places are discovered slowly through atmosphere and movement.
- Palette: crimson red roses, deep garden green `#14291f`, cream `#fff5e6`, dusty rose `#e7b7b0`, lavender accents and soft blue sky.
- Lighting: consistent soft late-afternoon sunlight, restrained yellow cast.
- Materials: painterly oil texture, aged cream stone, wrought iron, water and soft fabric.
- Typography: Georgia serif, large scene titles and short readable captions.
- Camera: eye-level forward travel with gentle sideways movement beside the pond; settle outside the villa.

## Technical approach

Vanilla HTML, CSS and JavaScript. One merged MP4 provides the complete visual timeline. JavaScript computes `scrollY / (pageHeight - viewportHeight)` and maps that value to the video's duration. It pauses normal playback and updates `currentTime`, using requestAnimationFrame and waiting for seeking to finish. The last target is slightly before the exact video end to avoid an empty terminal frame.

The full video uses `preload="auto"` when motion is enabled. A JPEG poster appears while loading or if the video fails. System reduced-motion preferences initially select still-image mode and avoid loading the MP4. Each of the four story sections displays its own garden image in this mode. Visitors can also select still-image mode manually. Text remains available without JavaScript. The landscape film uses cover cropping on small screens; a separate portrait film has not been generated.

The page has four story sections, a scroll hint, a keyboard-accessible motion control, a skip link and an ending link to explore again.

## Media production and adaptation

Images were produced with Codex image generation. Video clips were generated in Magnific using Kling 3.0, 1080p, 16:9 and supplied first/last images. An actual final frame of the preceding clip was extracted for the next start frame. The entrance and pond connector were tried before the remaining journey. The final clips were joined in Magnific Video Project Editor.

The reference workflow's frame continuity and scroll-to-video approach were adapted to this project. Higgsfield/Monid generation calls were replaced with the Magnific browser workflow; no Higgsfield or Hermes was used. **Magnific was connected to Codex through its plugin. However, its MCP generation tools were unavailable in this session, so the videos were generated through the Magnific web interface with Codex assistance. MCP generation has not been demonstrated.**

The final film contains five generated clips, approximately 46 seconds: entrance, gate-to-pond connector, pond approach, pond-to-rose-walk travel, and rose-walk-to-villa travel. It presents four named locations, but a separate seven-clip production chain (four scene clips plus three connectors) has not been generated. See `docs/production.md` for the distinction.

## Research

See `docs/research.md` for the reference repository and four linked website/story references, with design takeaways and the limits of the research performed.

## Verification

During development the author confirmed the complete film could be scrubbed through the journey. Final checks should include forward/backward scroll, fast scroll, resize, mobile layout, still-image mode, reduced-motion settings, loading/failure fallback and all scene joins. Do not treat the presence of a clip boundary as proof of a seamless join.

## AI and authorship

AI assisted with concept discussion, images, prompts, code and debugging. The author selected the red-rose direction, statues, swans, woman and camera movement, reviewed clips, and remains responsible for the final quality and understanding of the implementation.
