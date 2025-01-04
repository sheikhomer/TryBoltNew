import { useRef, useEffect } from 'react';
import mermaid from 'mermaid';

export default function MermaidElement({ value }: { value: string }) {
    const mermaidRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mermaidRef.current) {
            mermaid.initialize({ startOnLoad: true });
            mermaid.run();
        }
    }, []);

    return (
        <div contentEditable={false}>
            <div ref={mermaidRef}>
                <pre className="mermaid">{value}</pre>
            </div>
        </div>
    );
}