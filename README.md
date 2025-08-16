# Doctor Booking System with AI Voice Assistant  
**Technology Stack:** MERN (MongoDB, Express, React, Node.js) + Twilio Voice & WhatsApp + OpenAI Realtime API + Google Calendar API

## 📌 Project Overview
This project is a **full-stack doctor booking platform** built using the **Prescripto MERN Tutorial** as a base, enhanced with:
- Google Calendar integration for real-time doctor availability
- AI-powered voice booking assistant via Twilio Voice + OpenAI Realtime
- WhatsApp appointment confirmations
- Optional outbound AI booking calls

The development is done **phase-by-phase**:  
Each phase is developed, tested, validated, and then merged into the stable branch with a version tag.

---

## 🛠 Tech Stack & Integrations
- **Frontend:** React.js (from Prescripto tutorial)
- **Backend:** Node.js + Express.js
- **Database:** MongoDB Atlas / Local MongoDB
- **Voice AI:** Twilio Voice (Media Streams) + OpenAI Realtime API
- **Calendar:** Google Calendar API (OAuth for each doctor)
- **Messaging:** Twilio WhatsApp API

---

## 📂 Git Branch Structure
- `main` → Stable production-ready version
- `dev` → Ongoing development branch
- `phase-x-*` → Feature branches for each incremental phase

**Example Phase Branches:**


**Workflow:**


---

## 🚀 Incremental Development Plan

### **Phase 0 — Setup & Planning**
**Goal:** Set up environment, accounts, and app structure.

**Tasks:**
1. Initialize Git repo.
2. Create `.env` template with:
   - `MONGO_URI`
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`
   - `OPENAI_API_KEY`
3. Create accounts: MongoDB Atlas, Twilio (Voice & WhatsApp enabled), Google Cloud Console (Calendar API enabled).
4. Install tools: Node.js LTS, npm/yarn, ngrok.

**Test Cases:**
- Can commit/push code to GitHub without exposing secrets.
- `.env` variables load correctly in backend.

---

### **Phase 1 — Base Prescripto MERN App**
**Goal:** Full web booking flow as per tutorial.

**Tasks:**
- Follow Prescripto MERN YouTube tutorial.
- Implement patient, doctor, admin dashboards.
- Enable web booking & payment.

**Test Cases:**
- Patient signup/login works.
- Doctor signup/login works.
- Admin dashboard accessible.
- Booking appears in MongoDB and in both doctor & patient dashboards.
- Payment flow works in test mode.

---

### **Phase 2 — Google Calendar Integration**
**Goal:** Bookings sync with doctors’ Google Calendars.

**Tasks:**
- Add "Connect Google Calendar" in doctor dashboard.
- Implement Google OAuth & store refresh tokens.
- API endpoints for:
  - `check-availability`
  - `book` → Create calendar event + Mongo entry.
- Modify web booking to also create Google Calendar event.

**Test Cases:**
- Doctor can connect calendar & select it.
- Web booking → Calendar event created.
- Double booking prevented if slot is taken.

---

### **Phase 3 — Voice Assistant (Inbound Calls)**
**Goal:** Book via AI-powered voice calls.

**Tasks:**
- Set up Twilio number & webhook.
- Implement Twilio -> OpenAI Realtime bridge.
- Define tool calls:
  1. `find_doctors_by_specialty_and_area`
  2. `check_doctor_availability`
  3. `book_appointment`
  4. `send_whatsapp_confirmation`
- Train assistant with booking flow prompt.

**Test Cases:**
- Call Twilio number → AI greets & asks specialty.
- AI lists doctors from DB.
- AI checks Google Calendar before booking.
- Successful booking appears in MongoDB & Calendar.

---

### **Phase 4 — WhatsApp Confirmation**
**Goal:** Send appointment details via WhatsApp for web & voice bookings.

**Tasks:**
- Enable Twilio WhatsApp sandbox/live.
- Trigger WhatsApp message after successful booking with:
  - Doctor name, specialty
  - Date/time
  - Location (with Google Maps link)

**Test Cases:**
- Booking from web → WhatsApp message sent.
- Booking from voice → WhatsApp message sent.

---

### **Phase 5 — Outbound Calls (Optional)**
**Goal:** Initiate AI booking via call from website.

**Tasks:**
- Add “Confirm via Voice Call” button.
- Trigger Twilio outbound call API.
- AI completes same booking flow.

**Test Cases:**
- Website button triggers outbound AI call.
- AI handles conflicts & re-scheduling.

---

### **Phase 6 — Admin Tools & Logs**
**Goal:** Provide visibility for voice bookings & error tracking.

**Tasks:**
- Add `channel` field to bookings ("web" or "voice").
- Admin dashboard shows voice bookings separately.
- Store call transcripts & logs.

**Test Cases:**
- Voice bookings display with tag.
- AI/Twilio errors logged for debugging.

---

## 💡 Workflow Advice
- **Test after every phase** before merging to `main`.
- Use **tags** for stable releases:


