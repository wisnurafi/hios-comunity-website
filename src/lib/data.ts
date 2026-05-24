// Pusat data statis untuk komunitas HIOS (dummy content, bebas diganti).

export const HIOS_META = {
  name: "HIOS",
  fullName: "Himpunan Orang Selaw",
  tagline: "Kekuatan berasal dari pengetahuan itu sendiri",
  subTagline: "No tree can grow to heaven, unless its roots reach hell.",
  description:
    "Komunitas gamer bawah tanah. Kami nongkrong, main, ketawa, dan kadang ribut di Discord 24/7. Selaw selalu, grind tetap jalan.",
  discordUrl: "https://discord.gg/N8EJ4HmeKU",
  memberCount: "1,284",
  activeCount: "340+",
  founded: "2021",
} as const;

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "MEMBERS", href: "#members" },
  { label: "DISCORD", href: "#discord" },
  { label: "GAMES", href: "#games" },
  { label: "GALLERY", href: "#gallery" },
  { label: "STORY", href: "#story" },
] as const;

export type AccentKey = "blue" | "red" | "yellow" | "cream";

export type Member = {
  name: string;
  role: string;
  tier: "LEADER" | "CO-LEADER" | "MODS" | "STAFFS" | "MEMBERS" | "GUESTS" | "BOTS";
  status: "online" | "idle" | "dnd" | "offline";
  avatar: string;
  accent: AccentKey;
};

export const MEMBERS: Member[] = [
  { name: "Lil-Bah", role: "Otak & Pendiri", tier: "LEADER", status: "online", avatar: "LB", accent: "blue" },
  { name: "Ene", role: "Racist", tier: "CO-LEADER", status: "online", avatar: "EN", accent: "yellow" },
  { name: "chipchip", role: "GaG Lover", tier: "MODS", status: "dnd", avatar: "CP", accent: "red" },
  { name: "Brotusaurus", role: "Fucker", tier: "MODS", status: "online", avatar: "BR", accent: "cream" },
  { name: "Abayyy", role: "Jarang Tidur", tier: "MODS", status: "idle", avatar: "AB", accent: "blue" },
  { name: "Ayayuy", role: "Selalu AFK", tier: "MEMBERS", status: "offline", avatar: "AYY", accent: "red" },
  { name: "Hanaaa", role: "Petani Sawit", tier: "STAFFS", status: "online", avatar: "HA", accent: "yellow" },
  { name: "HIOS-BOT", role: "Informan", tier: "BOTS", status: "online", avatar: "HB", accent: "blue" },
];

export type Game = {
  title: string;
  genre: string;
  players: string;
  vibe: string;
  accent: "blue" | "red" | "yellow";
};

export const GAMES: Game[] = [
  { title: "VALORANT", genre: "Tactical FPS", players: "5v5", vibe: "Clutch or cry.", accent: "red" },
  { title: "MOBILE LEGENDS", genre: "MOBA", players: "5v5", vibe: "Rank push sampai subuh.", accent: "blue" },
  { title: "MINECRAFT", genre: "Sandbox", players: "Server Private", vibe: "Bangun kerajaan, ribut batu bara.", accent: "yellow" },
  { title: "GENSHIN IMPACT", genre: "Action RPG", players: "Co-op", vibe: "Pull limited, nangis bareng.", accent: "blue" },
  { title: "APEX LEGENDS", genre: "Battle Royale", players: "Trio", vibe: "Sliding jumping screaming.", accent: "red" },
  { title: "AMONG US", genre: "Social Deduction", players: "10", vibe: "Pertemanan hancur dalam 15 menit.", accent: "yellow" },
];

export type GalleryItem = {
  title: string;
  caption: string;
  tag: string;
  image: string;
  tilt: "left" | "right" | "none";
  accent: AccentKey;
};

export const GALLERY: GalleryItem[] = [
  { title: "GAME NIGHT #42", caption: "Kita menang 1, kalah 17. Tetap tertawa.", tag: "EVENT", tilt: "left", accent: "yellow", image: "/gallery/GAME-HIOS.png" },
  { title: "PARA ELITIS HIOS", caption: "Para petinggi - petinggi HIOS", tag: "IRL", tilt: "right", accent: "cream", image: "/gallery/ELITIS-HIOS.png" },
  { title: "MEET UP HIOS-1", caption: "Akhirnya ketemu di real life", tag: "IRL", tilt: "left", accent: "yellow", image: "/gallery/MEET-UP-HIOS-1.png" },
  { title: "MEET UP HIOS-2", caption: "Ketemu lagi, bosen anjir", tag: "IRL", tilt: "right", accent: "blue", image: "/gallery/MEET-UP-HIOS-2.png" },
];

export type StoryEvent = {
  year: string;
  title: string;
  description: string;
  tag: string;
};

export const STORY: StoryEvent[] = [
  { year: "2021", title: "Lahir di bapeng (tempat nongkrong)", description: "Empat orang bosan, satu grup WhatsApp, lalu Discord dibuat jam 3 pagi.", tag: "ORIGIN" },
  { year: "2022", title: "50", description: "Dari mulut ke mulut, Discord berisi. Voice channel 24 jam tidak pernah kosong.", tag: "GROWTH" },
  { year: "2023", title: "Event perdana", description: "Game night mingguan, turnamen internal, dan meme contest jadi budaya.", tag: "CULTURE" },
  { year: "2024", title: "Identitas resmi", description: "Logo otak petir diluncurkan. HIOS = Himpunan Orang Selaw.", tag: "BRAND" },
  { year: "2025", title: "Tembus 1.000 anggota", description: "Ekspansi ke Twitter, TikTok, turnamen regional. Underground tetap underground.", tag: "MILESTONE" },
  { year: "2026", title: "Sekarang", description: "Kamu baca halaman ini. Masuklah. Selaw sudah menunggu.", tag: "NOW" },
];

export type Quote = { text: string; author: string };

export const QUOTES: Quote[] = [
  { text: "Selaw dulu, menang belakangan.", author: "Abayyy" },
  { text: "Gue udah tidur kok. Cuma matanya aja yang melek.", author: "Chipchip" },
  { text: "Rank bukan segalanya. Tapi kekalahan? Ga akan gue lupain.", author: "Ene" },
  { text: "Kalau meme gue jelek, berarti lo yang ga gaul.", author: "Ayayuy" },
  { text: "AFK itu bukan pilihan. Itu panggilan jiwa.", author: "Alippp" },
  { text: "Kita bukan toxic, kita cuma jujur di voice chat.", author: "Billiboy" },
  { text: "Server dimana lag disambut dengan tepuk tangan.", author: "Haris" },
  { text: "Pengetahuan itu otak petir. Listriknya gratis.", author: "HIOS-BOT" },
];

export type DiscordChannel = {
  name: string;
  type: "text" | "voice" | "announcement";
  unread?: number;
  listeners?: number;
};

export const DISCORD_CHANNELS: DiscordChannel[] = [
  { name: "announcements", type: "announcement", unread: 3 },
  { name: "general", type: "text", unread: 12 },
  { name: "share-links", type: "text", unread: 47 },
  { name: "request music", type: "text", unread: 2 },
  { name: "Voice General 1", type: "voice", listeners: 8 },
  { name: "Nobar", type: "voice", listeners: 5 },
  { name: "AFK", type: "voice", listeners: 12 },
];

export type DiscordMessage = {
  author: string;
  avatar: string;
  accent: AccentKey;
  content: string;
  time: string;
};

export const DISCORD_MESSAGES: DiscordMessage[] = [
  { author: "Brotusaurus", avatar: "BR", accent: "blue", content: "Yang mau ranked malam ini ngumpul di Voice ya", time: "21:04" },
  { author: "Lil-Bah", avatar: "LB", accent: "yellow", content: "Males jir mending mancing", time: "21:05" },
  { author: "Chipchip", avatar: "CP", accent: "cream", content: "Gw lagi makan", time: "21:07" },
  { author: "Abayyy", avatar: "AB", accent: "red", content: "Gassss", time: "21:08" },
  { author: "HIOS-BOT", avatar: "BT", accent: "blue", content: "Announcement: Saya Akan Lawan!!!", time: "21:10" },
];

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
};

export const SOCIALS: SocialLink[] = [
  { label: "Discord", handle: "discord.gg/hios", href: "https://discord.gg/N8EJ4HmeKU" },
  { label: "Twitter", handle: "@hios_", href: "https://twitter.com" },
  { label: "Instagram", handle: "@hios_", href: "https://instagram.com" },
  { label: "TikTok", handle: "@hios_", href: "https://tiktok.com" },
  { label: "YouTube", handle: "HIOS TV", href: "https://youtube.com" },
];

export type Stat = { label: string; value: string; caption: string };

export const STATS: Stat[] = [
  { label: "ANGGOTA", value: "1,284", caption: "dan terus tumbuh" },
  { label: "ONLINE", value: "340+", caption: "setiap saat" },
  { label: "CHANNEL", value: "24", caption: "text & voice" },
  { label: "TAHUN", value: "5", caption: "sejak 2021" },
];
