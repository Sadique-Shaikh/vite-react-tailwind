import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();
    
    return (
        <Html center>
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center",
                textAlign: "center",
                color: "#f1f1f1"
            }}>
                <span className='canvas-loader' />
                <p style={{ fontSize: 14, fontWeight: 800, marginTop: 40 }}>
                    {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
                </p>
            </div>
        </Html>
    );
}

export default CanvasLoader;
