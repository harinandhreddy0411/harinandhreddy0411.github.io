import type { ArtKind } from '../data';

function NovusArt() {
  const cx = 200;
  const cy = 170;
  const r = 110;
  const axes = [
    { label: 'Correctness', angle: -90 },
    { label: 'Communication', angle: 30 },
    { label: 'Composure', angle: 150 },
  ];
  const point = (angle: number, scale: number) => {
    const rad = (angle * Math.PI) / 180;
    return [cx + Math.cos(rad) * r * scale, cy + Math.sin(rad) * r * scale] as const;
  };
  const ring = (scale: number) => axes.map((axis) => point(axis.angle, scale).join(',')).join(' ');
  const shape = axes.map((axis, i) => point(axis.angle, [0.82, 0.62, 0.9][i]).join(',')).join(' ');

  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="A three-axis radar: correctness, communication, composure">
      {[0.33, 0.66, 1].map((scale) => (
        <polygon key={scale} points={ring(scale)} className="art-ring" />
      ))}
      {axes.map((axis) => {
        const [x, y] = point(axis.angle, 1);
        return <line key={axis.label} x1={cx} y1={cy} x2={x} y2={y} className="art-ring" />;
      })}
      <polygon points={shape} className="art-fill" />
      {axes.map((axis, i) => {
        const [x, y] = point(axis.angle, [0.82, 0.62, 0.9][i]);
        return <circle key={axis.label} cx={x} cy={y} r="5" className="art-dot" />;
      })}
      <text x={cx} y="26" textAnchor="middle" className="art-text">
        Correctness
      </text>
      <text x="390" y="262" textAnchor="end" className="art-text">
        Communication
      </text>
      <text x="10" y="262" textAnchor="start" className="art-text">
        Composure
      </text>
    </svg>
  );
}

function BotArt() {
  const recruits = Array.from({ length: 12 }, (_, i) => ({ x: 40, y: 40 + i * 24 }));
  const seconds = Array.from({ length: 10 }, (_, i) => ({ x: 250, y: 40 + i * 26 }));
  const thirds = Array.from({ length: 5 }, (_, i) => ({ x: 340, y: 70 + i * 50 }));

  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Recruits flowing to ten second-year mentors, with a remainder to five third-year mentors">
      {recruits.map((recruit, i) => {
        const target = seconds[i % seconds.length];
        return <line key={i} x1={recruit.x} y1={recruit.y} x2={target.x} y2={target.y} className="art-line" />;
      })}
      {recruits.map((recruit, i) => (
        <circle key={i} cx={recruit.x} cy={recruit.y} r="6" className="art-dot-soft" />
      ))}
      {seconds.map((mentor, i) => (
        <circle key={i} cx={mentor.x} cy={mentor.y} r="9" className="art-dot" />
      ))}
      {thirds.map((mentor, i) => (
        <circle key={i} cx={mentor.x} cy={mentor.y} r="9" className="art-ring-dot" />
      ))}
      <text x="40" y="326" textAnchor="middle" className="art-text">
        Recruits
      </text>
      <text x="250" y="326" textAnchor="middle" className="art-text">
        Year 2
      </text>
      <text x="340" y="326" textAnchor="middle" className="art-text">
        Year 3
      </text>
    </svg>
  );
}

function CtfArt() {
  const lines = [
    { text: '$ apktool d challenge.apk', tone: 'cmd' },
    { text: '$ jadx -d out challenge.apk', tone: 'cmd' },
    { text: '$ adb logcat | grep -i flag', tone: 'cmd' },
    { text: '', tone: 'cmd' },
    { text: 'flag{...}', tone: 'flag' },
  ];
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="A terminal showing Android reverse-engineering commands">
      <rect x="20" y="30" width="360" height="280" rx="14" className="art-panel" />
      <circle cx="46" cy="56" r="5" className="art-dot-soft" />
      <circle cx="64" cy="56" r="5" className="art-dot-soft" />
      <circle cx="82" cy="56" r="5" className="art-dot-soft" />
      {lines.map((line, i) => (
        <text key={i} x="44" y={110 + i * 34} className={line.tone === 'flag' ? 'art-flag' : 'art-mono'}>
          {line.text}
        </text>
      ))}
      <g transform="translate(44 282)">
        <rect width="62" height="22" rx="11" className="art-chip" />
        <text x="31" y="15" textAnchor="middle" className="art-chip-text">
          Easy
        </text>
        <rect x="72" width="76" height="22" rx="11" className="art-chip" />
        <text x="110" y="15" textAnchor="middle" className="art-chip-text">
          Medium
        </text>
        <rect x="158" width="76" height="22" rx="11" className="art-chip" />
        <text x="196" y="15" textAnchor="middle" className="art-chip-text">
          Medium
        </text>
      </g>
    </svg>
  );
}

export function ProjectArt({ kind }: { kind: ArtKind }) {
  if (kind === 'novus') return <NovusArt />;
  if (kind === 'bot') return <BotArt />;
  if (kind === 'ctf') return <CtfArt />;
  return null;
}
