var spawn = require('child_process').spawn;
var promisify = require('node-promisify');
var fs = require('fs');
var co = require('co');

function run(command, args, stdin, timeout) {
	return new Promise((resolve, reject) => {
		var settled = false;
		var p = spawn(command, args);
		var stdout = '';
		var err;
		p.on('exit', code => {
			if (settled) {
				return;
			}
			settled = true;
			if (code === 0) {
				resolve(splitLines(stdout));
			} else {
				reject({
					code: code,
					err: err,
					stdout: stdout
				});
			}
		});
		p.on('error', _err => {
			err = (err || "") + _err;
		});
		p.stdout.setEncoding('utf-8');
		p.stdout.on('data', data => {
			stdout += data;
		});
		if (stdin) {
			p.stdin.setEncoding('utf-8');
			p.stdin.write(stdin);
			p.stdin.end();
		}
		timeout = timeout || 5000; // mocha のタイムアウトよりも短いこと
		setTimeout(() => {
			if (settled) {
				return;
			}
			settled = true;
			killTree(p.pid);
			reject(`Timeout ${timeout} milliseconds`);
		}, timeout);
	});
}

function killTree(pid) {
	return run("sh", ["-c", `pstree -pha ${pid} | grep "," | sed -e "s/^[^,]*,//g" -e "s/[^0-9].*$//g" | xargs -n 1 kill -KILL`]);
}

function splitLines(str) {
	let result = str.split('\n');
	if (result[result.length - 1].length === 0) {
		result.pop();
	}
	return result;
}

function timeout(promise, milliseconds) {
	let fulfilled = false;
	milliseconds = milliseconds || 5000;
	return new Promise((resolve, reject) => {
		promise.then(
			(val) => {
				if (!fulfilled) {
					fulfilled = true;
					resolve(val);
				}
			},
			(err) => {
				if (!fulfilled) {
					fulfilled = true;
					reject(err);
				}
			}
		);
		setTimeout(() => {
			if (!fulfilled) {
				fulfilled = true;
				reject(new Error(`Timeout ${milliseconds} ms`));
			}
		}, milliseconds);
	});
}

module.exports = {
	run: run,
};
