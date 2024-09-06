import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import {Typography} from '@mui/material';
import type {CSSProperties, ReactNode} from 'react';
import {useEffect} from 'react';
import type {OverridableStringUnion} from "@mui/types";
import type {Variant} from "@mui/material/styles/createTypography";
import type {TypographyPropsVariantOverrides} from "@mui/material/Typography/Typography";

export function InfinityText({color, texts, variant}: {
  color: CSSProperties['color'],
  texts: string[],
  variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>
}): ReactNode {
  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises -- according to docs this is fine
    animate(count, 60, {
      type: "tween",
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() && latest > 0) {
          updatedThisRound.set(false);
        } else if (!updatedThisRound.get() && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
  }, [count, textIndex, texts.length, updatedThisRound]);

  return (
    <Typography sx={{color, height: '24px'}} variant={variant}>
      <motion.div className='inline'>{displayText}</motion.div>
    </Typography>
  )
}
