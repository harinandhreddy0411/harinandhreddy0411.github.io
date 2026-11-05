import { useMemo } from 'react';
import { motion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { signature } from '../signature';

interface ScrollStrokeProps {
  d: string;
  from: number;
  to: number;
  progress: MotionValue<number>;
}

function ScrollStroke({ d, from, to, progress }: ScrollStrokeProps) {
  const pathLength = useTransform(progress, [from, to], [0, 1], { clamp: true });
  const opacity = useTransform(pathLength, (value) => (value > 0 ? 1 : 0));
  return <motion.path d={d} style={{ pathLength, opacity }} />;
}

interface ScrollSignatureProps {
  progress: MotionValue<number>;
  className?: string;
}

export function ScrollSignature({ progress, className = 'signature' }: ScrollSignatureProps) {
  const ranges = useMemo(() => {
    const { strokes } = signature;
    const total = strokes.reduce((sum, stroke) => sum + stroke.length, 0);
    let travelled = 0;
    return strokes.map((stroke) => {
      const from = 0.08 + 0.72 * (travelled / total);
      travelled += stroke.length;
      const to = 0.08 + 0.72 * (travelled / total);
      return { from, to };
    });
  }, []);

  return (
    <svg className={className} viewBox={signature.viewBox} aria-hidden="true">
      {signature.strokes.map((stroke, index) => (
        <ScrollStroke key={index} d={stroke.d} from={ranges[index].from} to={ranges[index].to} progress={progress} />
      ))}
    </svg>
  );
}

export function SignatureMark({ className = 'signature-mark' }: { className?: string }) {
  return (
    <svg className={className} viewBox={signature.viewBox} aria-hidden="true">
      {signature.strokes.map((stroke, index) => (
        <path key={index} d={stroke.d} />
      ))}
    </svg>
  );
}
