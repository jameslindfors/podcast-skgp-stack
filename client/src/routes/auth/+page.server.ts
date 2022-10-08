export const actions = {
	login: async ({ request, cookies }: RequestHandler) => {
		const formData = await request.formData();
		const email = formData.get('email');

		const res = await fetch(`http://localhost:4000/auth/magiclogin`, {
			method: `POST`,
			body: JSON.stringify({ destination: email, name: 'UpdatedFrontendUsername?' }),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await res.json();
		cookies.set('code', data.code);
	}
};
