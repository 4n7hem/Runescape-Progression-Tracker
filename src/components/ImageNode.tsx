import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

export default memo(({ data }) => {
  return (
    <div
      style={{
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: data.isClicked ? 'green' : 'gray',
        border: '1px solid #ddd',
        textAlign: 'center',
      }}
    >
      <Handle type="target" position={Position.Top} />
      <img
        src={data.imageUrl}
        alt={data.label || 'Node Image'}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '4px',
          display: 'block',
          margin: '0 auto 8px auto',
        }}
      />
      {data.label && (
        <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{data.label}</div>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});