# Milk Khata — Android-ready PWA package

This package prepares the prototype for installation as a Progressive Web App (PWA).

## Included
- `index.html`: Milk Khata v2.1 prototype with your current base prices
- `manifest.json`: install metadata and 192px/512px app icons
- `sw.js`: basic app-shell offline caching
- `icons/`: app icons
- `README.md`: setup guide

## Important: hosting is still required
A local `file://` HTML page from Downloads is not enough for reliable PWA installation or service-worker offline support. Host the files on a secure HTTPS website first.

## Install on Android
1. Upload the contents of this ZIP to a static HTTPS host (for example, GitHub Pages, Netlify, or Vercel).
2. Open the resulting HTTPS URL in Chrome on Android.
3. Open Chrome's three-dot menu and choose **Install app** or **Add to Home screen** (wording may vary).
4. Launch Milk Khata from its new home-screen icon.
5. Open it once while online so the app shell is cached before relying on it offline.

## Implemented
- Your configured base prices: Gold ₹34, Bachhe ₹9, Pili ₹25, 1 Liter Gold ₹68, Chaanch ₹14, Namkeen Chaanch ₹9, Dahi ₹9.
- Household surcharge and per-customer/per-product price adjustments.
- Order entry, local order history, balance display, WhatsApp share, local backup/restore.
- PWA manifest with icons and basic service-worker caching.

## Not implemented
- Cloud sync or multi-device sync.
- Native Android APK / Play Store release.
- Production-grade audit history, transaction reversal, or guaranteed data recovery.

## Data warning
Data is stored in the browser's local storage on this device and origin. Clearing site data or losing the device can remove it. Export backups regularly. Test accounting with sample transactions before relying on it for real business.
