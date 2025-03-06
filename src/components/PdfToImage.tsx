import React, { useState, useEffect } from 'react';

interface PdfViewerProps {
    pdfFile: string;
}

const PdfToImage: React.FC<PdfViewerProps> = ({ pdfFile }) => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check if the PDF exists
    useEffect(() => {
        const checkPdfExists = async () => {
            try {
                const response = await fetch(pdfFile);
                if (!response.ok) {
                    throw new Error(`Failed to load PDF: ${response.statusText}`);
                }
                setIsLoading(false);
            } catch (err) {
                console.error("Error loading PDF:", err);
                setError(err instanceof Error ? err.message : "Failed to load PDF");
                setIsLoading(false);
            }
        };

        checkPdfExists();
    }, [pdfFile]);

    return (
        <div className="flex flex-col items-center justify-center w-full p-4">
            {isLoading && <div className="text-blue-500 mb-4">Loading PDF...</div>}

            {error ? (
                <div className="text-red-500 mb-4">{error}</div>
            ) : (
                <div className="w-full max-w-4xl shadow-xl rounded-lg border border-gray-200 overflow-hidden">
                    <iframe
                        src={`${pdfFile}#toolbar=0&navpanes=0`}
                        className="w-full h-screen"
                        title="PDF Viewer"
                        style={{ border: 'none' }}
                    />
                </div>
            )}
        </div>
    );
};

export default PdfToImage;