const { exec, execSync, spawn, spawnSync } = require("child_process");
const { join } = require("path");

/**
 * @param {string} scriptName
 * @param {(error: ExecException, stdout: string, stderr: string) => void} callback
 * @param {string} args
 */
const runScript = (scriptName, callback, args) => {
    spawn(
        `python3 "${join(__dirname, "..", "scripts", scriptName)}" ${args}`,
        callback
    );
};

/**
 * @param {string} scriptName
 * @param {string} args
 */
const runScriptSync = (scriptName, args) => {
    return spawnSync(`python3`, [
        join(__dirname, "..", "scripts", scriptName),
        args,
    ]);
};

module.exports = { runScript, runScriptSync };