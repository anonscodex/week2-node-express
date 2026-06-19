 'use strict'
    (function() {
      let count = 0;
      const display = document.getElementById('countDisplay');
      const msgText = document.getElementById('msgText');
      const timeStamp = document.getElementById('timeStamp');

      document.getElementById('incBtn').addEventListener('click', function() {
        count++;
        display.textContent = count;
        msgText.textContent = '✅ clicked! total ' + count;
        timeStamp.textContent = '⏱ ' + new Date().toLocaleTimeString();
      });

      document.getElementById('resetBtn').addEventListener('click', function() {
        count = 0;
        display.textContent = '0';
        msgText.textContent = '↺ reset to zero';
        timeStamp.textContent = '⏱ ' + new Date().toLocaleTimeString();
      });

      // initial timestamp
      timeStamp.textContent = '⏱ ' + new Date().toLocaleTimeString();
    })();
  