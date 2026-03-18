export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","resume.pdf"]),
	mimeTypes: {".svg":"image/svg+xml",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.CuT2buzA.js",app:"_app/immutable/entry/app.Yyk6ZGfl.js",imports:["_app/immutable/entry/start.CuT2buzA.js","_app/immutable/chunks/B6oLH-i6.js","_app/immutable/chunks/sOxY5rI7.js","_app/immutable/entry/app.Yyk6ZGfl.js","_app/immutable/chunks/sOxY5rI7.js","_app/immutable/chunks/ALMxJaKa.js","_app/immutable/chunks/CncaVaIp.js","_app/immutable/chunks/BOJek5yg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
