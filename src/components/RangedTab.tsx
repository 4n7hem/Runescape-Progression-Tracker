import { useState, useCallback, useEffect } from "react";
import { ReactFlow, addEdge, MarkerType, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ImageNode from './ImageNode.tsx';


export default (() => {
    const nodeTypes = {
        imageNode: ImageNode,
    };


const initialNodes = [
  { id: 'ranged_n1', type: 'imageNode', position: { x: 0, y: 0 }, data: { imageUrl: 'https://runescape.wiki/images/Blue_dragonhide_body.png?306e1', label: 'Blue Dragonhide Gear' } },
  { id: 'ranged_n27', type: 'imageNode', position: { x: -200, y: 200 }, data: { imageUrl: 'https://runescape.wiki/images/Spined_body.png?9aa75', label: 'Spined Set' } },
  { id: 'ranged_n2', type: 'imageNode', position: { x: 0, y: 200 }, data: { imageUrl: 'https://runescape.wiki/images/Royal_dragonhide_body.png?31b11', label: 'Royal Dragonhide Gear' } },
  { id: 'ranged_n3', type: 'imageNode',position: { x: -150, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Undead_dragonhide_body.png?aee40', label: 'Undead Dragonhide Gear' } },
  { id: 'ranged_n4', type: 'imageNode', position: { x: 150, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Armadyl_chestplate.png?2f16f', label: 'Armadyl Gear' } },
  { id: 'ranged_n5', type: 'imageNode', position: { x: 0, y: 700 }, data: { imageUrl: 'https://runescape.wiki/images/Sunspear_%28melee%29.png?cd16b', label: 'Sunspear' }},
  { id: 'ranged_n6', type: 'imageNode', position: { x: 300, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Armadyl_crossbow.png?b0bfe', label: 'Armadyl Crossbows' }},
  { id: 'ranged_n7', type: 'imageNode', position: { x: 350, y: 250 }, data: { imageUrl: 'https://runescape.wiki/images/Elder_shortbow.png?841e1', label: 'Elder Shortbow' }},
  { id: 'ranged_n8', type: 'imageNode', position: { x: 150, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Crystal_bow.png?5a50c', label: 'Crystal Bow' }},
  { id: 'ranged_n9', type: 'imageNode', position: { x: -150, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Vanquish_%28ranged%29.png?8f72c', label: 'Vanquish' }},
  { id: 'ranged_n10', type: 'imageNode', position: { x: 0, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Blisterwood_stake.png?41c30', label: 'Blisterwood Stakes' }},
  { id: 'ranged_n11', type: 'imageNode',position: { x: -250, y: 850 }, data: { imageUrl: 'https://runescape.wiki/images/Superior_Death_Lotus_chestplate.png?90057', label: 'Superior Death Lotus Gear' } },
  { id: 'ranged_n12', type: 'imageNode', position: { x: 200, y: 850 }, data: { imageUrl: 'https://runescape.wiki/images/Anima_core_body_of_Zamorak.png?6145d', label: 'Anima Core of Zamorak Gear' } },
  { id: 'ranged_n13', type: 'imageNode', position: { x: 0, y: 850 }, data: { imageUrl: 'https://runescape.wiki/images/Pernix_body.png?604ae', label: 'Pernix Gear' } },
  { id: 'ranged_n14', type: 'imageNode', position: { x: 300, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Shadow_glaive.png?e1c4d', label: 'Shadow Glaives' }},
  { id: 'ranged_n15', type: 'imageNode', position: { x: -300, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Chaotic_crossbow.png?1b694', label: 'Chaotic Crossbows' }},
  { id: 'ranged_n16', type: 'imageNode', position: { x: -150, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Decimation.png?d243c', label: 'Decimation' }},
  { id: 'ranged_n17', type: 'imageNode', position: { x: 150, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Royal_crossbow.png?2d0d3', label: 'Royal Crossbow' }},
  { id: 'ranged_n18', type: 'imageNode', position: { x: 0, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Zaryte_bow.png?20ab0', label: 'Zaryte Bow' }},
  { id: 'ranged_n19', type: 'imageNode', position: { x: -150, y: 1150 }, data: { imageUrl: 'https://runescape.wiki/images/Gloomfire_bow.png?10201', label: 'Gloomfire Bow' }},
  { id: 'ranged_n20', type: 'imageNode', position: { x: 150, y: 1150 }, data: { imageUrl: 'https://runescape.wiki/images/Noxious_longbow.png?d4e2c', label: 'Noxious Longbow' }},
  { id: 'ranged_n21', type: 'imageNode', position: { x: 150, y: 1300 }, data: { imageUrl: 'https://runescape.wiki/images/Masterwork_ranged_body.png?9f8d0', label: 'Masterwork Ranged Gear' }},
  { id: 'ranged_n22', type: 'imageNode', position: { x: -150, y: 1300 }, data: { imageUrl: 'https://runescape.wiki/images/Dracolich_hauberk.png?49138', label: 'Dracolich Gear' }},
  { id: 'ranged_n23', type: 'imageNode', position: { x: 0, y: 1300 }, data: { imageUrl: 'https://runescape.wiki/images/Sirenic_hauberk.png?00334', label: 'Sirenic Gear' }},
  { id: 'ranged_n24', type: 'imageNode', position: { x: 0, y: 1500 }, data: { imageUrl: 'https://runescape.wiki/images/Bow_of_the_Last_Guardian.png?3590a', label: 'Bow of the Last Guardian' }},
  { id: 'ranged_n25', type: 'imageNode', position: { x: 200, y: 1500 }, data: { imageUrl: 'https://runescape.wiki/images/Eldritch_crossbow.png?1c815', label: 'Eldritch Crossbow' }},
  { id: 'ranged_n26', type: 'imageNode', position: { x: -150, y: 1500 }, data: { imageUrl: 'https://runescape.wiki/images/Seren_godbow.png?0d234', label: 'Seren Godbow' }},
  

  
  ];
  const initialEdges = [{ id: 'ranged_n1-ranged_n2', source: 'ranged_n1', target: 'ranged_n2' },
    { id: 'ranged_n1-ranged_n27', source: 'ranged_n1', target: 'ranged_n27' },
    { id: 'ranged_n27-ranged_n3', source: 'ranged_n27', target: 'ranged_n3' },
    { id: 'ranged_n27-ranged_n4', source: 'ranged_n27', target: 'ranged_n4' },
    { id: 'ranged_n2-ranged_n3', source: 'ranged_n2', target: 'ranged_n3' },
    { id: 'ranged_n2-ranged_n4', source: 'ranged_n2', target: 'ranged_n4' },
    { id: 'ranged_n2-ranged_n7', source: 'ranged_n2', target: 'ranged_n7' },
    { id: 'ranged_n4-ranged_n6', source: 'ranged_n4', target: 'ranged_n6' },
    { id: 'ranged_n4-ranged_n8', source: 'ranged_n4', target: 'ranged_n8' },
    { id: 'ranged_n4-ranged_n6', source: 'ranged_n4', target: 'ranged_n6' },    
    { id: 'ranged_n3-ranged_n8', source: 'ranged_n3', target: 'ranged_n8' },
    { id: 'ranged_n3-ranged_n6', source: 'ranged_n3', target: 'ranged_n6' },    
    { id: 'ranged_n3-ranged_n9', source: 'ranged_n3', target: 'ranged_n9' },
    { id: 'ranged_n4-ranged_n9', source: 'ranged_n4', target: 'ranged_n9' },
    { id: 'ranged_n9-ranged_n5', source: 'ranged_n9', target: 'ranged_n5' },
    { id: 'ranged_n5-ranged_n11', source: 'ranged_n5', target: 'ranged_n11' },
    { id: 'ranged_n5-ranged_n12', source: 'ranged_n5', target: 'ranged_n12' },
    { id: 'ranged_n5-ranged_n13', source: 'ranged_n5', target: 'ranged_n13' },
    { id: 'ranged_n6-ranged_n11', source: 'ranged_n6', target: 'ranged_n11' },
    { id: 'ranged_n6-ranged_n12', source: 'ranged_n6', target: 'ranged_n12' },
    { id: 'ranged_n6-ranged_n13', source: 'ranged_n6', target: 'ranged_n13' },
    { id: 'ranged_n8-ranged_n11', source: 'ranged_n8', target: 'ranged_n11' },
    { id: 'ranged_n8-ranged_n12', source: 'ranged_n8', target: 'ranged_n12' },
    { id: 'ranged_n8-ranged_n13', source: 'ranged_n8', target: 'ranged_n13' },
    { id: 'ranged_n9-ranged_n11', source: 'ranged_n9', target: 'ranged_n11' },
    { id: 'ranged_n9-ranged_n12', source: 'ranged_n9', target: 'ranged_n12' },
    { id: 'ranged_n9-ranged_n13', source: 'ranged_n9', target: 'ranged_n13' },
    { id: 'ranged_n10-ranged_n5', source: 'ranged_n10', target: 'ranged_n5' },
    { id: 'ranged_n11-ranged_n14', source: 'ranged_n11', target: 'ranged_n14' },
    { id: 'ranged_n12-ranged_n14', source: 'ranged_n12', target: 'ranged_n14' },
    { id: 'ranged_n13-ranged_n14', source: 'ranged_n13', target: 'ranged_n14' },
    { id: 'ranged_n11-ranged_n15', source: 'ranged_n11', target: 'ranged_n15' },
    { id: 'ranged_n12-ranged_n15', source: 'ranged_n12', target: 'ranged_n15' },
    { id: 'ranged_n13-ranged_n15', source: 'ranged_n13', target: 'ranged_n15' },
    { id: 'ranged_n11-ranged_n16', source: 'ranged_n11', target: 'ranged_n16' },
    { id: 'ranged_n12-ranged_n16', source: 'ranged_n12', target: 'ranged_n16' },
    { id: 'ranged_n13-ranged_n16', source: 'ranged_n13', target: 'ranged_n16' },
    { id: 'ranged_n11-ranged_n17', source: 'ranged_n11', target: 'ranged_n17' },
    { id: 'ranged_n12-ranged_n17', source: 'ranged_n12', target: 'ranged_n17' },
    { id: 'ranged_n13-ranged_n17', source: 'ranged_n13', target: 'ranged_n17' },
    { id: 'ranged_n11-ranged_n18', source: 'ranged_n11', target: 'ranged_n18' },
    { id: 'ranged_n12-ranged_n18', source: 'ranged_n12', target: 'ranged_n18' },
    { id: 'ranged_n13-ranged_n18', source: 'ranged_n13', target: 'ranged_n18' },
    { id: 'ranged_n14-ranged_n19', source: 'ranged_n14', target: 'ranged_n19' },
    { id: 'ranged_n15-ranged_n19', source: 'ranged_n15', target: 'ranged_n19' },
    { id: 'ranged_n16-ranged_n19', source: 'ranged_n16', target: 'ranged_n19' },
    { id: 'ranged_n17-ranged_n19', source: 'ranged_n17', target: 'ranged_n19' },
    { id: 'ranged_n18-ranged_n19', source: 'ranged_n18', target: 'ranged_n19' },
    { id: 'ranged_n14-ranged_n20', source: 'ranged_n14', target: 'ranged_n20' },
    { id: 'ranged_n15-ranged_n20', source: 'ranged_n15', target: 'ranged_n20' },
    { id: 'ranged_n16-ranged_n20', source: 'ranged_n16', target: 'ranged_n20' },
    { id: 'ranged_n17-ranged_n20', source: 'ranged_n17', target: 'ranged_n20' },
    { id: 'ranged_n18-ranged_n20', source: 'ranged_n18', target: 'ranged_n20' },
    { id: 'ranged_n19-ranged_n21', source: 'ranged_n19', target: 'ranged_n21' },
    { id: 'ranged_n19-ranged_n22', source: 'ranged_n19', target: 'ranged_n22' },
    { id: 'ranged_n19-ranged_n23', source: 'ranged_n19', target: 'ranged_n23' },
    { id: 'ranged_n20-ranged_n21', source: 'ranged_n20', target: 'ranged_n21' },
    { id: 'ranged_n20-ranged_n22', source: 'ranged_n20', target: 'ranged_n22' },
    { id: 'ranged_n20-ranged_n23', source: 'ranged_n20', target: 'ranged_n23' },
    { id: 'ranged_n21-ranged_n24', source: 'ranged_n21', target: 'ranged_n24' },
    { id: 'ranged_n22-ranged_n24', source: 'ranged_n22', target: 'ranged_n24' },
    { id: 'ranged_n23-ranged_n24', source: 'ranged_n23', target: 'ranged_n24' },
    { id: 'ranged_n24-ranged_n25', source: 'ranged_n24', target: 'ranged_n25' },
    { id: 'ranged_n24-ranged_n26', source: 'ranged_n24', target: 'ranged_n26' },
    
  ];
  const savedNodes = JSON.parse(localStorage.getItem("ranged_nodes") || "null") || initialNodes;
  const savedEdges = JSON.parse(localStorage.getItem("ranged_edges") || "null") || initialEdges;

  const [nodes, setNodes, onNodesChange] =useNodesState(savedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(savedEdges); 

    const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: "floating", markerEnd: { type: MarkerType.Arrow } },
          eds
        )
      ),
    [setEdges]
  );

  // Persist changes
  useEffect(() => {
    localStorage.setItem("ranged_nodes", JSON.stringify(nodes));
  }, [nodes]);

  useEffect(() => {
    localStorage.setItem("ranged_edges", JSON.stringify(edges));
  }, [edges]);

  // Toggle node clicked state when user clicks
  const onNodeClick = useCallback(
    (_, node) => {
      setNodes((nds) =>
        nds.map((n) =>
          n.id === node.id ? { ...n, data: { ...n.data, isClicked: !n.data.isClicked } } : n
        )
      );
    },
    [setNodes]
  );


return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      fitView
    />
  );
}
  );
