import type { Action } from '@sveltejs/kit';

export const POST: Action = async ({ request }) => {
	const data = await request.formData();

	const audio: FormDataEntryValue | null = data.get('audio') as File;

	const audioBuffer: ArrayBuffer = await audio.arrayBuffer();
	const audioBufferView: Uint8Array = new Uint8Array(audioBuffer);
	const audioBase64 = Buffer.from(audioBufferView).toString('base64');
	const audioUrl = `data:audio/wav;base64,${audioBase64}`;
	return new Response(audioUrl);
};
