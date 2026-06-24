import { memo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

// Memoize the node to optimize rendering performance
export default memo(({ data }: any) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div 
    onClick={() => setIsClicked(!isClicked)}
    style={{      
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: isClicked ? 'green' : 'gray',
      border: '1px solid #ddd',
      textAlign: 'center'
    }}>
      {/* Target handle so other nodes can connect to this one */}
      <Handle type="target" position={Position.Top} />
      
      {/* Render the image dynamically via data props */}
      <img 
        src={data.imageUrl} 
        alt={data.label || 'Node Image'} 
        style={{ 
          width: '50px', 
          height: '50px',
          borderRadius: '4px',
          display: 'block',
          margin: '0 auto 8px auto'
        }} 
      />
      
      {/* Optional Label */}
      {data.label && <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{data.label}</div>}
      
      {/* Source handle so this node can connect to others */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});