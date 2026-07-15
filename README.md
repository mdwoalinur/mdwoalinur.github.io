# Md. Woalinur Portfolio

Professional portfolio website for Md. Woalinur, built to present his full-stack software development skills, training, education, real projects, and AI-assisted development workflow.

## Tech Stack

- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript

## Folder Structure

```text
md-woalinur-portfolio/
|-- index.html
|-- README.md
|-- PORTFOLIO_PROJECT_PLAN.md
|-- assets/
|   |-- css/
|   |   `-- style.css
|   |-- js/
|   |   `-- main.js
|   |-- images/
|   |   |-- profile/
|   |   |-- projects/
|   |   |-- training/
|   |   |-- icons/
|   |   `-- social/
|   `-- documents/
|       `-- Md_Woalinur_Full_Stack_Developer_CV.pdf
`-- .gitignore
```

## Phase Plan Summary

1. Setup folders, base files, assets, and documentation.
2. Build the design system, navbar, hero foundation, and footer foundation.
3. Add About, Technical Skills, AI Tools, Training, and Education sections.
4. Add featured projects and case study details using final available links only.
5. Add lightweight JavaScript, contact mailto behavior, SEO, and accessibility improvements.
6. Run final QA for responsiveness, links, CV download, console errors, and deployment readiness.

## Important Content Rule

Do not use unrelated programme branding, Japanese headings, or copied layouts. Keep the professional title consistent as Full-Stack Software Developer.

## Phase 2 Status

Phase 2 is complete. The project now includes the core design system, white sticky navbar, responsive hero base layout, reusable placeholder section cards, footer base, active navigation behavior, navbar scroll shadow, and back-to-top behavior.

Remaining main sections are intentionally placeholders for later phases:

- About Me, Technical Skills, AI Tools, Training, and Education will be completed in Phase 3.
- Featured Projects and Development Process will be completed in Phase 4.
- Contact form behavior will be completed in Phase 5.

## Phase 3 Status

Phase 3 is complete. The main non-project content sections are now implemented, including About Me, category-based Technical Skills, AI Tools & AI-Assisted Development, Training, Education, Development Process, Core Competencies, and a frontend contact form with mailto fallback.

At the end of Phase 3, projects were intentionally reserved for Phase 4 and the Featured Projects section remained a clean placeholder.

## Phase 4 Status

Phase 4 is complete. The Featured Projects section now includes four professional project cards, final available GitHub/live links, Bootstrap case-study modals, and CSS-based project thumbnails that can later be replaced with real screenshots from `assets/images/projects`.

No invalid links were added. TradeMaster, TechSmart Shop, and TradeMaster Mobile use only the provided GitHub links plus case-study buttons. CodeGen uses only the provided live website link plus its case-study button.

## Phase 5 Status

Phase 5 is complete. SEO metadata, Open Graph and Twitter metadata, JSON-LD structured data, skip-to-content navigation, modal accessibility descriptions, external-link behavior checks, CV path verification with download attributes, JavaScript hardening, and responsive/performance polish have been added.

Verified assets:

- Profile photo: `assets/images/profile/md-woalinur-profile.jpg`
- CV PDF: `assets/documents/Md_Woalinur_Full_Stack_Developer_CV.pdf`

Final assets still required before deployment:

- Training image in `assets/images/training`
- Social preview image: `assets/images/social/og-image.png`
- Dedicated favicon file, if preferred later. The profile photo is currently used as the site icon.

## Phase 6 Status

Phase 6 is complete. Final QA and deployment readiness checks were completed, including required asset verification, final project link review, JavaScript syntax validation, JSON-LD validation, duplicate ID scanning, accessibility checks, responsive layout review, CV download path checks, profile image path checks, and GitHub Pages-compatible relative path review.

Required assets verified:

- Profile photo: `assets/images/profile/md-woalinur-profile.jpg`
- CV PDF: `assets/documents/Md_Woalinur_Full_Stack_Developer_CV.pdf`

Optional assets still pending before final publication:

- Training image in `assets/images/training`
- Social preview image: `assets/images/social/og-image.png`
- Dedicated favicon file, if preferred later. The profile photo is currently used as the favicon and apple touch icon.

## Improvement Pass Status

The post-Phase-6 improvement pass is complete.

- Profile photo is currently used as the favicon and apple touch icon.
- Hero photo crop was adjusted so the head and face remain visible without stretching the image.
- Section spacing was reduced for desktop, tablet, and mobile while keeping the layout readable.
- Contact form now submits through the configured Formspree endpoint with mailto fallback when sending fails or the endpoint is not configured.
- Real project screenshots were integrated from `assets/images/projects`.
- If a different Formspree form is used before deployment, replace `CONTACT_FORM_ENDPOINT` in `assets/js/main.js` with the final endpoint.

## Training Section Update

The Training section was upgraded with the IsDB-BISEW programme identity, final programme title, training details, grouped technology categories, and training outcome points.

The Training section was later simplified to keep only the logo, programme identity, Round 68, Batch JEE/CGNT-A/68/01, compact learning areas, and short training outcomes.

## Official Recognition Update

Added an official IsDB-BISEW recognition block for the TradeMaster Inventory & Stock Management System project with the official publication link and a local video preview card.

Note: The YouTube iframe was replaced with a local preview card and external YouTube link to avoid embed restrictions during local or deployed viewing.

The Official Recognition section was simplified by removing extra metadata and placeholder cards for a cleaner presentation.

## Footer Upgrade

Footer upgraded to an industrial-level premium layout with CTA strip, profile branding, quick links, contact/connect section, tech stack strip, and refined copyright row.

## Deployment Preparation

- Initialize Git only if the project is not already initialized.
- Commit the final files.
- Push the repository to GitHub.
- Enable GitHub Pages from the main branch root, or deploy the folder to Netlify.
- Confirm the final live URL, then update the canonical URL, Open Graph URL, and JSON-LD URL placeholders.

## Local Run

Open `index.html` in a browser, or use the VS Code Live Server extension for a local preview.

## Deployment Target

Final live URL: `https://mdwoalinur.github.io/`

Deployment target: GitHub Pages

Repository: `https://github.com/mdwoalinur/mdwoalinur.github.io`

Deployment branch: `main`

This project is a static HTML/CSS/JS website compatible with GitHub Pages and Netlify.
