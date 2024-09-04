
function ResumeDownload() {

    function downloadPDF() {
        const pdfUrl = "https://moccasin-cassaundra-3.tiiny.site/";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    return <button onClick={downloadPDF}>
        Resume
    </button>
}


export default ResumeDownload