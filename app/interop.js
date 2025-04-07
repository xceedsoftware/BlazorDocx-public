window.BlazorDocx = {
    /**
     * Triggers client side download 
     * @param {any} arrayBuffer
     * @param {any} fileName
     */
    async downloadStream(arrayBuffer, fileName) {
        const blob = new Blob([arrayBuffer]);
        const url = URL.createObjectURL(blob);

        const anchorElement = document.createElement('a');
        anchorElement.href = url;
        anchorElement.download = fileName ?? '';
        anchorElement.click();
        anchorElement.remove();
        URL.revokeObjectURL(url);
    },
    /**
     * 
     * @param {File} browserFile
     */
    async getImageDataUrl(browserFile) {
        if (browserFile) {
            return new Promise((res, rej) => {
                let fileReader = new FileReader();
                fileReader.addEventListener('load', function () {
                    res(fileReader.result);
                }, false);
                fileReader.addEventListener('error', function (error) {
                    rej(error);
                }, false);
                fileReader.readAsDataURL(browserFile);
            });
        }
        return null;
    }
}