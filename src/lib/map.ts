/** Power House Roppongi — 〒106-0032 港区六本木7丁目12-3 */
export const shopLocation = {
  name: "Power House Roppongi",
  addressJa: "東京都港区六本木7丁目12-3",
  addressEn: "7-12-3 Roppongi, Minato City, Tokyo 106-0032",
  lat: 35.664404,
  lng: 139.730583,
} as const;

/** Standard Google Maps road map (地図表示) — no API key required */
export const googleMapsEmbedSrc = `https://maps.google.com/maps?q=${shopLocation.lat},${shopLocation.lng}&hl=ja&z=17&t=m&output=embed`;

/** Open full Google Maps app / site */
export const googleMapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${shopLocation.name} ${shopLocation.addressJa}`
)}`;
