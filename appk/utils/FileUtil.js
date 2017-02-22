export function toMB(size) {
	return size / (1000 * 1000)
}
export function extractPreviewId(preview) {
	//blob:http%3A//localhost%3A8888/dd079315-54c6-4a7f-8188-7be0c6f0e6f4
	return preview.substr(preview.lastIndexOf('/') + 1)
}
