import React from 'react';
import styles from './page.module.css';
import StepCard from '@/components/StepCard';
import CodeSnippet from '@/components/CodeSnippet';

export default function Home() {
  return (
    <main className="container">
      <section className={styles.hero}>
        <h1>NemoClaw Setup</h1>
        <p>The definitive guide to standing up a truly local, secure OpenShell-backed agent sandbox using NemoClaw.</p>
      </section>

      <section className={styles.stepsContainer}>
        <StepCard stepNumber={1} title="Check Prerequisites">
          <p style={{ marginBottom: '1rem' }}>Before installing, ensure your host machine is prepared for a local model environment:</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            <li><strong>OS:</strong> Windows 10/11 with WSL2 enabled.</li>
            <li><strong>Memory:</strong> 16GB RAM Minimum.</li>
            <li><strong>Compute:</strong> Dedicated GPU (e.g., RTX series) for responsive local LLM inference.</li>
            <li><strong>Docker:</strong> Docker Desktop installed and integrated with your WSL distribution.</li>
          </ul>
        </StepCard>

        <StepCard stepNumber={2} title="Install WSL & Ubuntu">
          <p style={{ marginBottom: '1rem' }}>You must run NemoClaw in a Linux environment. Open PowerShell as Administrator and run:</p>
          <CodeSnippet code={`wsl --install -d Ubuntu`} />
          <p style={{ marginTop: '1rem' }}>This installs Ubuntu (latest LTS). Once complete, set up your UNIX username and password in the terminal that opens.</p>
        </StepCard>

        <StepCard stepNumber={3} title="Install Base NemoClaw Stack">
          <p style={{ marginBottom: '1rem' }}>NVIDIA provides an official script to set up the baseline OpenClaw orchestration layer and NemoClaw CLI locally. Inside your Ubuntu WSL terminal, run:</p>
          <CodeSnippet code={`curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash`} />
          <p style={{ marginTop: '1rem' }}>This automatically provisions Node.js, the CLI, and required dependencies.</p>
        </StepCard>

        <StepCard stepNumber={4} title="Onboard and Configure">
          <p style={{ marginBottom: '1rem' }}>You must configure your agent sandbox environment and local LLM endpoints. Run the onboarding wizard:</p>
          <CodeSnippet code={`nemoclaw onboard`} />
          <p style={{ marginTop: '1rem' }}>During the wizard, select <strong>Local Model</strong> as your inference provider to keep data on-device.</p>
        </StepCard>

        <StepCard stepNumber={5} title="Start Chatting">
          <p style={{ marginBottom: '1rem' }}>With NemoClaw set up, connect to the agent framework locally and open the terminal UI:</p>
          <CodeSnippet code={`nemoclaw my-assistant connect\nopenclaw tui`} />
          <p style={{ margin: '1rem 0' }}>Alternatively, send a single prompt from the command line:</p>
          <CodeSnippet code={`openclaw agent --agent main --local -m "hello" --session-id test`} />
        </StepCard>

      </section>
    </main>
  );
}
