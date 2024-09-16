module.exports = {
  apps: [
    {
      name: 'mmj',
      script: 'yarn start',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G'  // Restart if memory usage exceeds 1GB
    }
  ]
};
