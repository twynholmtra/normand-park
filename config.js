// ─────────────────────────────────────────────────────────────────────────────
//  Park Tree Map — configuration
//
//  This is the ONLY file you need to edit when setting up your map.
//  Replace the placeholder values below with the ones for your park.
//
//  See docs/04-configure-app.md for step-by-step instructions.
// ─────────────────────────────────────────────────────────────────────────────

// — Your park —
// PARK_NAME is just the park's name (e.g. 'Lillie Park'). The app appends
// " tree map" where it needs the full title.
const PARK_NAME        = 'Normand Park';
const PARK_DESCRIPTION = 'Normand Park is large busy open space in the east of the borough of Hammersmith & Fulham.';
// Optional. Leave as '' to hide the email contact from the Info panel
// and the feedback "Send email instead" link.
const CONTACT_EMAIL    = 'info@fulhamcemeteryfriends.org.uk';

// Optional. Your park or Friends-group website. Shown as a link in the
// Info panel. Leave as '' to hide.
const WEBSITE_URL      = 'https://parktreemap.org/';

// — Your Google Sheet —
// The long ID between /d/ and /edit in the spreadsheet URL.
const SHEET_ID         = '1ruSBKGYs5zJlq-mZjxgiU5nUh5CpJagl19gG-1SQbTU';
const SHEET_NAME       = 'Trees';

// — Your Apps Script Web App —
// The "/exec" URL you got after deploying the Apps Script.
const APPS_SCRIPT_URL  = 'https://script.google.com/macros/s/AKfycbzoJa1-xnixxZf6zF_wyhdquJptRZQVTr4IA7rWq1C45E92wzKTXBDdwF5hGmwgJ5SeMA/exec';

// — Your GitHub repository —
// "owner/repo" — used to fetch uploaded photos.
const GITHUB_REPO      = 'twynholmtra/normand-park';
const GITHUB_BRANCH    = 'main';

// — Fallback map view —
// Only used until your sheet has at least one tree. Once it does, the map
// auto-fits to your trees and these values are ignored.
const MAP_CENTER       = [51.484604, -0.206704]; // [latitude, longitude]
const MAP_ZOOM         = 17;

// — Trusted contributors —
// When true (default), the "+ Add a tree" button is hidden until a visitor
// enrols their device via a magic link — the standard recommended setup,
// so random visitors can't add trees or upload photos. Set to false if you
// instead want the map fully open (anyone with the URL can add trees).
// See docs/12-trusted-contributors.md.
const ENABLE_CONTRIBUTOR_GATE = true;
