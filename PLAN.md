# Alpharetta CS Discovery & Mentorship — Site Plan

## Team Gallery

The team section (`#team`) is split into two labeled groups to distinguish session-running members from logistical support members.

### Session Leaders
Students who plan and lead the coding sessions. Cards display at full size (max-width: 220px) with a blue "Session Leader" badge.

| Name   | Photo              | Bio    | Status         |
|--------|--------------------|--------|----------------|
| Brian  | brian-portrait.png | ✅ Done | Live           |
| Vihaan | *(placeholder)*    | *(TBA)*| Pending photo & bio |
| David  | david-portrait.jpg | *(TBA)*| Pending bio    |

### Support Team
Students handling logistics (scheduling, outreach, admin). Cards display at slightly smaller size (max-width: 180px) with a gray "Support" badge and a muted placeholder treatment.

| Name        | Photo           | Bio       | Status              |
|-------------|-----------------|-----------|---------------------|
| *(TBA × 3)* | *(placeholder)* | *(TBA)*   | Pending name/photo/bio |

> Currently 3 placeholder cards. Add a 4th by duplicating a `.team-member--placeholder` block in `index.html`.

### Pending Actions
- [ ] Replace `david-portrait.jpg` placeholder on Vihaan's card with `vihaan-portrait.png` (or actual photo) once available
- [ ] Fill in Vihaan's and David's bio text in their `<small>` tags and bio modals (`#vihaanBioModal`, `#davidBioModal`)
- [ ] Replace placeholder cards with real names, photos, and bios as each support team member is confirmed
- [ ] Remove `.team-member--placeholder` class and `filter`/`opacity` treatment from each card once its real photo is uploaded

---

## Firebase Hosting
- Config: `firebase.json`
- Public directory: `public/`
- Deploy: `firebase deploy`
