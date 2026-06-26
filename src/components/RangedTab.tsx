import { useState, useCallback } from "react";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ImageNode from './ImageNode.tsx';


export default (() => {
    const nodeTypes = {
        imageNode: ImageNode,
    };


const initialNodes = [
  { id: 'n1', type: 'imageNode', position: { x: 0, y: 0 }, data: { imageUrl: 'https://runescape.wiki/images/Blue_dragonhide_body.png?306e1', label: 'Blue Dragonhide Gear' } },
  { id: 'n27', type: 'imageNode', position: { x: -200, y: 200 }, data: { imageUrl: 'https://runescape.wiki/images/Spined_body.png?9aa75', label: 'Spined Set' } },
  { id: 'n2', type: 'imageNode', position: { x: 0, y: 200 }, data: { imageUrl: 'https://runescape.wiki/images/Royal_dragonhide_body.png?31b11', label: 'Royal Dragonhide Gear' } },
  { id: 'n3', type: 'imageNode',position: { x: -150, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Undead_dragonhide_body.png?aee40', label: 'Undead Dragonhide Gear' } },
  { id: 'n4', type: 'imageNode', position: { x: 150, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Armadyl_chestplate.png?2f16f', label: 'Armadyl Gear' } },
  { id: 'n5', type: 'imageNode', position: { x: 0, y: 700 }, data: { imageUrl: 'https://runescape.wiki/images/Sunspear_%28melee%29.png?cd16b', label: 'Sunspear' }},
  { id: 'n6', type: 'imageNode', position: { x: 300, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Armadyl_crossbow.png?b0bfe', label: 'Armadyl Crossbows' }},
  { id: 'n7', type: 'imageNode', position: { x: 350, y: 250 }, data: { imageUrl: 'https://runescape.wiki/images/Elder_shortbow.png?841e1', label: 'Elder Shortbow' }},
  { id: 'n8', type: 'imageNode', position: { x: 150, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Crystal_bow.png?5a50c', label: 'Crystal Bow' }},
  { id: 'n9', type: 'imageNode', position: { x: -150, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Vanquish_%28ranged%29.png?8f72c', label: 'Vanquish' }},
  { id: 'n10', type: 'imageNode', position: { x: 0, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Blisterwood_stake.png?41c30', label: 'Blisterwood Stakes' }},
  { id: 'n11', type: 'imageNode',position: { x: -250, y: 850 }, data: { imageUrl: 'https://runescape.wiki/images/Superior_Death_Lotus_chestplate.png?90057', label: 'Superior Death Lotus Gear' } },
  { id: 'n12', type: 'imageNode', position: { x: 200, y: 850 }, data: { imageUrl: 'https://runescape.wiki/images/Anima_core_body_of_Zamorak.png?6145d', label: 'Anima Core of Zamorak Gear' } },
  { id: 'n13', type: 'imageNode', position: { x: 0, y: 850 }, data: { imageUrl: 'https://runescape.wiki/images/Pernix_body.png?604ae', label: 'Pernix Gear' } },
  { id: 'n14', type: 'imageNode', position: { x: 300, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Shadow_glaive.png?e1c4d', label: 'Shadow Glaives' }},
  { id: 'n15', type: 'imageNode', position: { x: -300, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Chaotic_crossbow.png?1b694', label: 'Chaotic Crossbows' }},
  { id: 'n16', type: 'imageNode', position: { x: -150, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Decimation.png?d243c', label: 'Decimation' }},
  { id: 'n17', type: 'imageNode', position: { x: 150, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Royal_crossbow.png?2d0d3', label: 'Royal Crossbow' }},
  { id: 'n18', type: 'imageNode', position: { x: 0, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Zaryte_bow.png?20ab0', label: 'Zaryte Bow' }},
  { id: 'n19', type: 'imageNode', position: { x: -150, y: 1150 }, data: { imageUrl: 'https://runescape.wiki/images/Gloomfire_bow.png?10201', label: 'Gloomfire Bow' }},
  { id: 'n20', type: 'imageNode', position: { x: 150, y: 1150 }, data: { imageUrl: 'https://runescape.wiki/images/Noxious_longbow.png?d4e2c', label: 'Noxious Longbow' }},
  { id: 'n21', type: 'imageNode', position: { x: 150, y: 1300 }, data: { imageUrl: 'https://runescape.wiki/images/Masterwork_ranged_body.png?9f8d0', label: 'Masterwork Ranged Gear' }},
  { id: 'n22', type: 'imageNode', position: { x: -150, y: 1300 }, data: { imageUrl: 'https://runescape.wiki/images/Dracolich_hauberk.png?49138', label: 'Dracolich Gear' }},
  { id: 'n23', type: 'imageNode', position: { x: 0, y: 1300 }, data: { imageUrl: 'https://runescape.wiki/images/Sirenic_hauberk.png?00334', label: 'Sirenic Gear' }},
  { id: 'n24', type: 'imageNode', position: { x: 0, y: 1500 }, data: { imageUrl: 'https://runescape.wiki/images/Bow_of_the_Last_Guardian.png?3590a', label: 'Bow of the Last Guardian' }},
  { id: 'n25', type: 'imageNode', position: { x: 200, y: 1500 }, data: { imageUrl: 'https://runescape.wiki/images/Eldritch_crossbow.png?1c815', label: 'Eldritch Crossbow' }},
  { id: 'n26', type: 'imageNode', position: { x: -150, y: 1500 }, data: { imageUrl: 'https://runescape.wiki/images/Seren_godbow.png?0d234', label: 'Seren Godbow' }},
  

  
  ];

  const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' },
    { id: 'n1-n27', source: 'n1', target: 'n27' },
    { id: 'n27-n3', source: 'n27', target: 'n3' },
    { id: 'n27-n4', source: 'n27', target: 'n4' },
    { id: 'n2-n3', source: 'n2', target: 'n3' },
    { id: 'n2-n4', source: 'n2', target: 'n4' },
    { id: 'n2-n7', source: 'n2', target: 'n7' },
    { id: 'n4-n6', source: 'n4', target: 'n6' },
    { id: 'n4-n8', source: 'n4', target: 'n8' },
    { id: 'n4-n6', source: 'n4', target: 'n6' },    
    { id: 'n3-n8', source: 'n3', target: 'n8' },
    { id: 'n3-n6', source: 'n3', target: 'n6' },    
    { id: 'n3-n9', source: 'n3', target: 'n9' },
    { id: 'n4-n9', source: 'n4', target: 'n9' },
    { id: 'n9-n5', source: 'n9', target: 'n5' },
    { id: 'n5-n11', source: 'n5', target: 'n11' },
    { id: 'n5-n12', source: 'n5', target: 'n12' },
    { id: 'n5-n13', source: 'n5', target: 'n13' },
    { id: 'n6-n11', source: 'n6', target: 'n11' },
    { id: 'n6-n12', source: 'n6', target: 'n12' },
    { id: 'n6-n13', source: 'n6', target: 'n13' },
    { id: 'n8-n11', source: 'n8', target: 'n11' },
    { id: 'n8-n12', source: 'n8', target: 'n12' },
    { id: 'n8-n13', source: 'n8', target: 'n13' },
    { id: 'n9-n11', source: 'n9', target: 'n11' },
    { id: 'n9-n12', source: 'n9', target: 'n12' },
    { id: 'n9-n13', source: 'n9', target: 'n13' },
    { id: 'n10-n5', source: 'n10', target: 'n5' },
    { id: 'n11-n14', source: 'n11', target: 'n14' },
    { id: 'n12-n14', source: 'n12', target: 'n14' },
    { id: 'n13-n14', source: 'n13', target: 'n14' },
    { id: 'n11-n15', source: 'n11', target: 'n15' },
    { id: 'n12-n15', source: 'n12', target: 'n15' },
    { id: 'n13-n15', source: 'n13', target: 'n15' },
    { id: 'n11-n16', source: 'n11', target: 'n16' },
    { id: 'n12-n16', source: 'n12', target: 'n16' },
    { id: 'n13-n16', source: 'n13', target: 'n16' },
    { id: 'n11-n17', source: 'n11', target: 'n17' },
    { id: 'n12-n17', source: 'n12', target: 'n17' },
    { id: 'n13-n17', source: 'n13', target: 'n17' },
    { id: 'n11-n18', source: 'n11', target: 'n18' },
    { id: 'n12-n18', source: 'n12', target: 'n18' },
    { id: 'n13-n18', source: 'n13', target: 'n18' },
    { id: 'n14-n19', source: 'n14', target: 'n19' },
    { id: 'n15-n19', source: 'n15', target: 'n19' },
    { id: 'n16-n19', source: 'n16', target: 'n19' },
    { id: 'n17-n19', source: 'n17', target: 'n19' },
    { id: 'n18-n19', source: 'n18', target: 'n19' },
    { id: 'n14-n20', source: 'n14', target: 'n20' },
    { id: 'n15-n20', source: 'n15', target: 'n20' },
    { id: 'n16-n20', source: 'n16', target: 'n20' },
    { id: 'n17-n20', source: 'n17', target: 'n20' },
    { id: 'n18-n20', source: 'n18', target: 'n20' },
    { id: 'n19-n21', source: 'n19', target: 'n21' },
    { id: 'n19-n22', source: 'n19', target: 'n22' },
    { id: 'n19-n23', source: 'n19', target: 'n23' },
    { id: 'n20-n21', source: 'n20', target: 'n21' },
    { id: 'n20-n22', source: 'n20', target: 'n22' },
    { id: 'n20-n23', source: 'n20', target: 'n23' },
    { id: 'n21-n24', source: 'n21', target: 'n24' },
    { id: 'n22-n24', source: 'n22', target: 'n24' },
    { id: 'n23-n24', source: 'n23', target: 'n24' },
    { id: 'n24-n25', source: 'n24', target: 'n25' },
    { id: 'n24-n26', source: 'n24', target: 'n26' },
    
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );


  return <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
}
  );
