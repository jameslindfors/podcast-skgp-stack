import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	// const res = await fetch(`https://api.spotify.com/v1/browse/new-releases`, {
	//   headers: {
	//     Authorization:
	//       // Bearer token
	//   }
	// });
	// const data1 = res.json();
	//
	// const res2 = await fetch(`https://api.spotify.com/v1/me/top/artists`, {
	//   headers: {
	//     Authorization:
	//       // Bearer token
	//   }
	// });
	// const data2 = res2.json();

	return {
		data: {
			// f1: await data1,
			// f2: await data2
		}
	};
};
