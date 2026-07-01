import { memo } from 'react';
import { BaseEdge, getBezierPath } from '@xyflow/react';

export default memo(({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style, markerEnd, data }) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{
        stroke: data?.isActive ? 'green' : '#999',
        strokeWidth: 2,
        strokeDasharray: data?.isActive ? '6 4' : '0',
        animation: data?.isActive ? 'pulseStroke 1.5s infinite' : 'none',
        ...style,
      }}
      markerEnd={markerEnd}
    />
  );
});

// Add CSS animation globally
const styleEl = document.createElement('style');
styleEl.innerHTML = `
@keyframes pulseStroke {
  0% { stroke-dashoffset: 0; opacity: 1; }
  50% { stroke-dashoffset: 10; opacity: 0.5; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}`;
document.head.appendChild(styleEl);
