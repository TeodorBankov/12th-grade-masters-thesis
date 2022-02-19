const { exec, execSync } = require('child_process');
const { join } = require('path');

/**
 * @param {string} scriptName
 * @param {(error: ExecException, stdout: string, stderr: string) => void} callback
 * @param {string} args
 */
const runScript = (scriptName, callback, args) => {
    exec(`python "${join(__dirname, '..', 'scripts', scriptName)}" ${args}`, callback);
}

/**
 * @param {string} scriptName
 * @param {string} args
 */
const runScriptSync = (scriptName, args) => {
    return execSync(`python "${join(__dirname, "..", "scripts", scriptName)}" ${args}`).toString();
}

// maj shte e dobre da napravq sync ekvivalent
// moje da se overloadne s class IM GENIUS

module.exports = { runScript, runScriptSync };

// interesen vupros
// IM ALL EARS 
// no idea
// davaj
// 1 minuta da pikaja brb xd