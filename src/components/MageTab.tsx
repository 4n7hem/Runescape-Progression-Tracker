import { useState, useCallback } from "react";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ImageNode from './ImageNode.tsx';


export default (() => {
    const nodeTypes = {
        imageNode: ImageNode,
    };


const initialNodes = [
  { id: 'n1', type: 'imageNode', position: { x: 0, y: 0 }, data: { imageUrl: 'https://runescape.wiki/images/Mystic_robe_top.png?a28d0', label: 'Mystic Clothing' } },
  { id: 'n2', type: 'imageNode', position: { x: -200, y: 200 }, data: { imageUrl: 'https://runescape.wiki/images/Skeletal_top.png?1d0c5', label: 'Skeletal Set' } },
  { id: 'n3', type: 'imageNode', position: { x: 0, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Lunar_torso.png?eaac9', label: 'Lunar equipment' } },
  { id: 'n4', type: 'imageNode', position: { x: 0, y: 600 }, data: { imageUrl: 'https://runescape.wiki/images/Guthix_staff.png?e511c', label: 'God Staff' } },
  { id: 'n5', type: 'imageNode', position: { x: 150, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Grifolic_poncho.png?f5432', label: 'Grifolic Gear' } },
  { id: 'n6', type: 'imageNode', position: { x: -100, y: 800 }, data: { imageUrl: 'https://runescape.wiki/images/Ganodermic_poncho.png?27b22', label: 'Ganodermic Gear' } },
  { id: 'n7', type: 'imageNode', position: { x: 100, y: 800 }, data: { imageUrl: 'https://runescape.wiki/images/Garb_of_subjugation.png?2ec63', label: 'Robes of Subjugation' } },
  { id: 'n8', type: 'imageNode', position: { x: 150, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Abyssal_wand.png?7fd17', label: 'Abyssal Wand/Orb' } },
  { id: 'n9', type: 'imageNode', position: { x: -150, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Crystal_staff.png?58671', label: 'Crystal Staff' } },
  { id: 'n10', type: 'imageNode', position: { x: -300, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Blisterwood_staff.png?5f23a', label: 'Blisterwood Staff' } },
  { id: 'n11', type: 'imageNode', position: { x: -300, y: 1200 }, data: { imageUrl: 'https://runescape.wiki/images/Sunspear_%28magic%29.png?3bc03', label: 'Sunspear' } },
  { id: 'n12', type: 'imageNode', position: { x:  300, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Vanquish_%28magic%29.png?231e5', label: 'Vanquish' } },
  { id: 'n13', type: 'imageNode', position: { x:  0, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Polypore_staff.png?20491', label: 'Polypore Staff' } },
  { id: 'n14', type: 'imageNode', position: { x:  100, y: 1400 }, data: { imageUrl: 'https://runescape.wiki/images/Seasinger%27s_robe_top.png?bd322', label: 'Seasinger Gear' } },
  { id: 'n15', type: 'imageNode', position: { x:  250, y: 1400 }, data: { imageUrl: 'https://runescape.wiki/images/Anima_core_body_of_Seren.png?4670e', label: 'Anima Core of Seren Gear' } },
  { id: 'n16', type: 'imageNode', position: { x:  -100, y: 1400 }, data: { imageUrl: 'https://runescape.wiki/images/Anima_core_body_of_Sliske.png?6c173', label: 'Anima Core of Sliske Gear' } },
  { id: 'n17', type: 'imageNode', position: { x:  -250, y: 1400 }, data: { imageUrl: 'https://runescape.wiki/images/Virtus_robe_top.png?b64c8', label: 'Virtus Gear' } },
  { id: 'n18', type: 'imageNode', position: { x:  280, y: 1730 }, data: { imageUrl: 'https://runescape.wiki/images/Hazelmere%27s_signet_ring.png?38ffa', label: 'If you\'re really lucky' } },
  { id: 'n19', type: 'imageNode', position: { x:  70, y: 1560 }, data: { imageUrl: 'https://runescape.wiki/images/Legatus%27s_Emberstaff.png?7d072', label: 'Legatus\' Emberstaff' } },
  { id: 'n20', type: 'imageNode', position: { x:  -220, y: 2070 }, data: { imageUrl: 'https://runescape.wiki/images/Noxious_staff.png?aa951', label: 'Noxious Staff' } },
  { id: 'n21', type: 'imageNode', position: { x:  -340, y: 1730 }, data: { imageUrl: 'https://cdn.discordapp.com/emojis/1004109547427876896.webp?size=44', label: 'Don\'t' } },
  { id: 'n22', type: 'imageNode', position: { x:  -310, y: 1560 }, data: { imageUrl: 'https://runescape.wiki/images/Eternal_magic_wand_%28meagre%29.png?b1674', label: 'Crafted Eternal Magic Weapons' } },
  { id: 'n23', type: 'imageNode', position: { x:  -350, y: 1920 }, data: { imageUrl: 'https://runescape.wiki/images/Ruinous_staff.png?ce20e', label: 'Ruinous Staff' } },
  { id: 'n24', type: 'imageNode', position: { x:  -540, y: 1680 }, data: { imageUrl: 'https://runescape.wiki/images/Seismic_wand.png?11b4c', label: 'Vorago Wand/Orb' } },
  { id: 'n25', type: 'imageNode', position: { x:  -540, y: 1860 }, data: { imageUrl: 'https://runescape.wiki/images/Wand_of_the_praesul.png?05065', label: 'Praesul Wand/Orb' } },
  { id: 'n26', type: 'imageNode', position: { x:  275, y: 1900 }, data: { imageUrl: 'https://runescape.wiki/images/Wand_of_the_Cywir_elders.png?6d9f6', label: 'Wand/Orb of the Cywir Elders' } },
  { id: 'n27', type: 'imageNode', position: { x:  110, y: 2100 }, data: { imageUrl: 'https://runescape.wiki/images/Seasinger_kiba.png?7ee82', label: 'Seasinger Kiba/Makigai' } },
  { id: 'n28', type: 'imageNode', position: { x:  0, y: 1800 }, data: { imageUrl: 'https://runescape.wiki/images/Giant_prismatic_fallen_star.png?b97f5', label: 'Pick ONE' } },
  { id: 'n29', type: 'imageNode', position: { x:  550, y: 1860 }, data: { imageUrl: 'https://runescape.wiki/images/Camel_staff.png?d84ca', label: 'Camel Staff' } },
  { id: 'n30', type: 'imageNode', position: { x:  550, y: 1660 }, data: { imageUrl: 'https://runescape.wiki/images/Obliteration.png?e366a', label: 'Obliteration' } },
  { id: 'n31', type: 'imageNode', position: { x:  0, y: 2400 }, data: { imageUrl: 'https://runescape.wiki/images/Roar_of_Awakening.png?02126', label: 'Nakatra\'s Dual Weapons' } },
  
  

  
  ];

  const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' },
    { id: 'n1-n2', source: 'n1', target: 'n2' },
    { id: 'n2-n3', source: 'n2', target: 'n3' },
    { id: 'n1-n3', source: 'n1', target: 'n3' },
    { id: 'n28-n19', source: 'n28', target: 'n19' },
    { id: 'n28-n20', source: 'n28', target: 'n20' },
    { id: 'n28-n21', source: 'n28', target: 'n21' },
    { id: 'n28-n22', source: 'n28', target: 'n22' },
    { id: 'n28-n23', source: 'n28', target: 'n23' },
    { id: 'n28-n26', source: 'n28', target: 'n26' },
    { id: 'n28-n27', source: 'n28', target: 'n27' },
    { id: 'n28-n18', source: 'n28', target: 'n18' },
    { id: 'n18-n29', source: 'n18', target: 'n29' },
    { id: 'n18-n30', source: 'n18', target: 'n30' },
    { id: 'n21-n24', source: 'n21', target: 'n24' },
    { id: 'n21-n25', source: 'n21', target: 'n25' },
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
