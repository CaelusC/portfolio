export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio/_app",
	assets: new Set(["Karlis Varslavovs-3 copy.pdf","favicon.svg","resume.pdf"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BlumZg3Y.js",app:"_app/immutable/entry/app.DKMujNw0.js",imports:["_app/immutable/entry/start.BlumZg3Y.js","_app/immutable/chunks/W5wyHjy1.js","_app/immutable/chunks/m0JQ7l-V.js","_app/immutable/chunks/mGKLe2DE.js","_app/immutable/entry/app.DKMujNw0.js","_app/immutable/chunks/m0JQ7l-V.js","_app/immutable/chunks/BFiXSvb-.js","_app/immutable/chunks/Ci9khyoE.js","_app/immutable/chunks/DGGEHYBM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
