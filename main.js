const os = require('os');
function getSystemInfo(){
    const info = {
        os:{
            type: os.type(),
            architecture: os.arch(),
            platform: os.platform(),
            release: os.release(),
            uptime: os.uptime(),
            hostname: os.hostname()
        },
        user:{
            username: os.userInfo().username,
            homedir: os.homedir(),
            tempdir: os.tmpdir()
        },
        memory:{
            total: os.totalmem(),
            free: os.freemem(),
            usage: `${((1 - os.freemem() / os.totalmem()) * 100).toFixed(2)}%`
        },
        cpu:{
            model: os.cpus()[0].model,
            cores: os.cpus().length,
            speed: `${os.cpus()[0].speed}MHz`
        }
    };
    return info;
}

function formatUptime(seconds){
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = Math.floor(seconds % 60);

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

function formatBytes(bytes){
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

const systemInfo = getSystemInfo();
console.log('\n ====== System Information Dashboard ======');
console.log(JSON.stringify(systemInfo, null, 2));   


console.log('\n======= FORMATTED SYSTEM INFORMATION =======');
console.log(`OS: ${systemInfo.os.type} ${systemInfo.os.platform}`);
console.log(`Version: ${systemInfo.os.release}`);
console.log(`Hostname: ${systemInfo.os.hostname}`);
console.log(`Uptime: ${systemInfo.os.uptime}`);
console.log(`User: ${systemInfo.user.username}`);
console.log(`Home Directory: ${systemInfo.user.homedir}`);
console.log(`Temporary Directory: ${systemInfo.user.tmpdir}`);
console.log(`CPU: ${systemInfo.cpu.model}`);
console.log(`Cores: ${systemInfo.cpu.cores}`);
console.log(`Speed: ${systemInfo.cpu.speed}`);
console.log(`Memory Total: ${systemInfo.memory.total}`);
console.log(`Memory free: ${systemInfo.memory.free}`);
console.log(`Memory Usage: ${systemInfo.memory.usage}`);