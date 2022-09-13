import {
  ipcMain,
  app,
  shell,
  BrowserWindow
} from 'electron';
import fs from 'fs';
import os from 'os';
import {
  exec,
  execSync
} from 'child_process';
import https from 'https';
const PATH = require('path');

export const SomeService = {

  test: async (e,data)=>{
    console.log(data);
    return data;
  },

  init: async () => {
    ipcMain.handle('SomeService_test', SomeService.test);
  }

};
