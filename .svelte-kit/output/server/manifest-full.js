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
		client: {start:"_app/immutable/entry/start.CyQqdPDy.js",app:"_app/immutable/entry/app.D-IXT7K-.js",imports:["_app/immutable/entry/start.CyQqdPDy.js","_app/immutable/chunks/C90COmus.js","_app/immutable/chunks/sOxY5rI7.js","_app/immutable/entry/app.D-IXT7K-.js","_app/immutable/chunks/sOxY5rI7.js","_app/immutable/chunks/ALMxJaKa.js","_app/immutable/chunks/CncaVaIp.js","_app/immutable/chunks/BOJek5yg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
