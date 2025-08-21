'use client';

import { TextAnimate } from '@gfazioli/mantine-text-animate';
import { IconBrandLinktree, IconExternalLink } from '@tabler/icons-react';
import { Anchor, Button, Center, Paper, Text, Title } from '@mantine/core';
import { useEffect, useRef } from 'react';
import classes from './Welcome.module.css';

export function Welcome() {
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when content changes using MutationObserver
  useEffect(() => {
    if (!terminalRef.current) {
      return;
    }

    const observer = new MutationObserver(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    });

    // Observe changes to the terminal content
    observer.observe(terminalRef.current, {
      childList: true,
      subtree: true,
      characterData: true
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Center my={64} />
      <Title 
        maw="95vw" 
        mx="auto" 
        className={classes.title} 
        ta="center"
        style={{ 
          minHeight: 'auto',
          lineHeight: 1.1
        }}
      >
        Coming soon!
        <TextAnimate
          animate="in"
          by="character"
          inherit
          variant="gradient"
          component="span"
          segmentDelay={0.2}
          duration={2}
          animation="scale"
          animateProps={{
            scaleAmount: 3,
          }}
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          UNDERSERVED.AI
        </TextAnimate>
      </Title>

      <Text c="dimmed" ta="center" size="xl" maw={580} mx="auto" mt="sm">
        To learn more about Underserved.AI and mint your own NFT, please visit the {' '}
        <Anchor href="https://linktr.ee/underservedai/">linktree</Anchor>. 
      </Text>

      <Center>
        <Button
          href="https://linktr.ee/underservedai"
          component="a"
          rightSection={<IconExternalLink />}
          leftSection={<IconBrandLinktree />}
          variant="outline"
          px={32}
          radius={256}
          size="lg"
          mx="auto"
          mt="xl"
        >
          UNDERSERVED.AI Linktree
        </Button>
      </Center>

      <Paper 
        ref={terminalRef}
        shadow="xl" 
        p={8} 
        h={400} 
        my={32} 
        bg="dark.9" 
        mx="auto" 
        radius={8}
        style={{ 
          overflow: 'auto',
          scrollBehavior: 'smooth'
        }}
      >
        <TextAnimate.Typewriter
          inherit
          fz={11}
          c="green.5"
          ff="monospace"
          multiline
          delay={100}
          loop={false}
          value={[
            ">> CONNECTING TO UNDERSERVED MINDSHARE ANALYTICS NODE...",
            ">> ACCESS GRANTED. INITIATING AGENTIC ULCM OVERLAY...",
            "",
            "=== | UNDERSERVED.AI // MISSION FEED | ===",
            "",
            "[BOOT] // DECRYPTING AGENT LOGS ...",
            "",
            "> 500M+ voices silenced by language barriers. Crypto's brightest niches—AI Agents, InfoFi, Virtuals Protocol—remain hidden to billions outside the English matrix.",
            "",
            "> Dataset: Spanish, French, German, Portuguese... ZERO technical content. ZERO business alpha. ZERO localized education.",
            "> Result: Their market cap? << negligible. Mindshare = ghost mode.",
            "",
            "> UNDERSERVED AGENT ONLINE:",
            "   • AI-powered mindshare analytics decoding ULCM intel signals—\"Underserved Linguistic Crypto Markets.\"",
            "   • Deep scans measure project influence, sentiment fractals, cross-community spikes.",
            "",
            "> PHASE 1/3 /// Operation: Content Bootstrap",
            "   - $UMINDSHARE token genesis.",
            "   - NFT mint slingshot.",
            "   - Analytics engine goes live.",
            "   - First deployment: Virtuals Protocol, Spanish community.",
            "",
            "> PHASE 2/3 /// AI Agents Unleashed",
            "   - Terminal open access.",
            "   - Automated cross-pollination: Translate, amplify, adapt FOMO flows.",
            "   - Top ULCM creators onboard, reach amplified via Creator Boost + AI syndication.",
            "",
            "> PHASE 3/3 /// Expansion, Refinement, BOARDING ALL LINQUISTIC FLEETS",
            "   - Terminal AI refinement.",
            "   - Global expansion across blockchain's deepest alpha pools.",
            "",
            "> TOKEN UTILITIES ENGAGED:",
            "   - $UMIND (Base): Unlocks the full platform at 50K",
            "   - $UMIND NFT: Access Creator Boost Program, turbo-charge influence ops.",
            "",
            "> REDISTRIBUTING ALPHA...",
            "   - Mindshare Analytics.",
            "   - AI-Generated, localized content \"ready-to-post.\"",
            "   - NFT-gated terminal: exclusive insights for creators, power-users, protocol strategists.",
            "",
            "== UNDER-REPRESENTED? NOT ANYMORE. ==",
            "",
            ">> If your language isn't \"default crypto,\" plug in.",
            ">> If your market needs presence, boot up.",
            ">> UNDERSERVED.AI is bringing mindshare online—one ULCM at a time."
            ]
          }
        />
      </Paper>
    </>
  );
}
