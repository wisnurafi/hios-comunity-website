import { Crown, Shield, Zap, Bot, UserCog, UserPlus } from "lucide-react";
import {
  ComicPanel,
  ComicChip,
  SectionHeading,
  StatusDot,
  accentBg,
} from "@/components/brand/comic-panel";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/motion-primitives";
import { MEMBERS, type Member } from "@/lib/data";

const tierIcon: Record<Member["tier"], React.ReactNode> = {
  LEADER: <Crown className="size-3.5" />,
  "CO-LEADER": <Crown className="size-3.5" />,
  MODS: <Shield className="size-3.5" />,
  STAFFS: <UserCog className="size-3.5" />,
  MEMBERS: <Zap className="size-3.5" />,
  GUESTS: <UserPlus className="size-3.5" />,
  BOTS: <Bot className="size-3.5" />,
};

const tierAccent: Record<Member["tier"], "yellow" | "red" | "blue" | "cream"> = {
  LEADER: "yellow",
  "CO-LEADER": "yellow",
  MODS: "red",
  STAFFS: "blue",
  MEMBERS: "cream",
  GUESTS: "cream",
  BOTS: "cream",
};

export function MembersSection() {
  return (
    <section id="members" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionReveal>
          <SectionHeading
            eyebrow="TAMPILAN ANGGOTA"
            title="WAJAH-WAJAH PENGHUNI SERVER."
            variant="light"
            description="Mereka yang paling sering kedengaran di voice chat jam 2 pagi. Ada admin, mod, veteran, dan satu bot yang lebih aktif dari manusia."
          />
        </MotionReveal>

        <MotionStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((m) => (
            <MotionStaggerItem key={m.name}>
              <MemberCard member={m} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <ComicPanel
      accent={member.accent}
      className="group relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:-rotate-[0.6deg] hover:shadow-comic-lg"
    >
      <div className="flex items-start justify-between">
        <ComicChip accent={tierAccent[member.tier]}>
          {tierIcon[member.tier]} {member.tier}
        </ComicChip>
        <StatusDot status={member.status} />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="relative">
          <div
            className={`flex size-16 items-center justify-center rounded-2xl border-comic-lg ${accentBg[member.accent === "cream" ? "blue" : "cream"]} font-heading text-2xl font-black shadow-comic`}
          >
            {member.avatar}
          </div>
          <div
            aria-hidden
            className="absolute -bottom-2 -right-2 rounded-full border-comic bg-hios-yellow px-2 py-0.5 font-mono text-[9px] font-black uppercase tracking-widest text-hios-black shadow-[2px_2px_0_var(--hios-black)]"
          >
            #{member.avatar}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate font-heading text-xl font-black uppercase tracking-tight">
            {member.name}
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest opacity-80">
            {member.role}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t-2 border-dashed border-current/30 pt-4 font-mono text-[10px] uppercase tracking-widest">
        <span className="opacity-70">status</span>
        <span className="flex items-center gap-1.5">
          <StatusDot status={member.status} />
          {member.status}
        </span>
      </div>

      {/* halftone corner */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-halftone opacity-30 mix-blend-multiply"
      />
    </ComicPanel>
  );
}
