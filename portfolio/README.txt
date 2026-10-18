KARAN'S PORTFOLIO WEBSITE
==========================

HOW TO OPEN
-----------
1. Unzip this folder anywhere on your PC.
2. Double-click "index.html" — it opens in your browser. That's it, no server needed.

FOLDER STRUCTURE
----------------
index.html        -> the whole site (About, Skills, Portfolio, Contact)
css/style.css     -> all the styling (colors, fonts, layout)
js/script.js      -> the interactive bits (tab switching, skill bar animation,
                     project filtering, contact form validation, mobile menu)
images/profile.jpg -> placeholder profile photo

WHAT'S ALREADY BUILT IN
------------------------
- Dark theme with a dark-orange accent, matching your reference design
- Sidebar with your name, role, contact info, and social icons
- 4 tabs: About / Skills / Portfolio / Contact, with a sliding pill indicator
- Animated skill progress bars (they fill in when you open the Skills tab)
- Filterable project cards (All / Web Dev / DSA / Python)
- A working contact form with front-end validation (shows an error if a
  field is empty or the email is invalid, and a success message on submit —
  note: it doesn't actually send an email yet, see below)
- Fully responsive: on phones/tablets the sidebar collapses into a slide-out
  menu you open with the button top-right
- Built with HTML, CSS and Bootstrap 5 (loaded from a CDN), plus small
  amounts of vanilla JavaScript for interactivity

THINGS TO PERSONALIZE
----------------------
1. Profile photo: replace images/profile.jpg with your own photo (keep the
   same filename, or update the "src" in index.html under the avatar-wrap div).
2. Social links: in index.html, search for "social-btn" and put your real
   Instagram / LinkedIn / Discord / GitHub URLs in the href="#" spots.
3. Projects: in the Portfolio section of index.html, swap in your own project
   titles, descriptions, and GitHub/live links (search for "project-item").
4. Resume: the "Download CV" button currently points to "#". Add a PDF (e.g.
   resume.pdf) to the folder and set href="resume.pdf" on the .btn-resume link.
5. Contact form: this is front-end only right now (for the assignment, that's
   normally enough). If you later want it to actually email you, the easiest
   options are Formspree or EmailJS — both just need a small tweak to the
   <form> tag, no backend required.

MAKING CHANGES
---------------
- Colors: open css/style.css and edit the values at the very top under ":root"
  (--accent and --accent-bright control the orange shade).
- Fonts: the two Google Fonts used are "Space Grotesk" (headings) and
  "Inter" (body text) — loaded via <link> tags at the top of index.html.

Good luck with the assignment!
