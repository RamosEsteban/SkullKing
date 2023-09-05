import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.skullking.score',
  appName: 'Skull King Scoreboard',
  webDir: './src/',
  server: {
    androidScheme: 'https'
  }
};

export default config;
