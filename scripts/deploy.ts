const PROJECT_NAME = process.env.CLOUDFLARE_PROJECT_NAME;

if (!PROJECT_NAME) throw new Error('CLOUDFLARE_PROJECT_NAME is not set in .env');

const result = Bun.spawnSync(
  ['bunx', 'wrangler', 'pages', 'deploy', 'dist', `--project-name=${PROJECT_NAME}`],
  { stdio: ['inherit', 'inherit', 'inherit'] },
);

process.exit(result.exitCode);
