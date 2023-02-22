import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig={
  testMatch:["tests/Logintest.ts"],

  reporter:[["dot"],["json", {
    outputFile:"jsonReports/jsonReport.json"
  }],["html",{
    open:"always"


  }],["html",{open:"never"}]]
};

export default config;
