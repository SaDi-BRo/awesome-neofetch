const os = require('node:os');

let data = {
  username: null,
  hostname: null,
  distro: null,
  kernel: null,
  uptime: null,
  shell: null,
  cpu: null,
};

(() => {
  data.username = os.userInfo().username;
  data.hostname = os.hostname();
  data.distro = os.version() + ' ' + os.machine();
  data.kernel = os.release();
  data.uptime = os.uptime();
  data.shell = os.userInfo().shell;
  data.cpu = os.cpus()[0].model;
})();

console.log(data.username + '@' + data.hostname);
console.log('-------------------');
console.log('OS: ' + data.distro);
console.log('Kernel: ' + data.kernel);
console.log('Uptime: ' + data.uptime);
console.log('Shell: ' + data.shell);
console.log('CPU: ' + data.cpu);
