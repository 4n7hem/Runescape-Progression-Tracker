import { useState, useCallback, useEffect } from "react";
import { ReactFlow, addEdge, MarkerType, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ImageNode from './ImageNode.tsx';



export default (() => {

  
    const nodeTypes = {
        imageNode: ImageNode,
    };


const initialNodes = [
  { id: 'mage_n1', type: 'imageNode', position: { x: 0, y: 0 }, data: { imageUrl: 'https://runescape.wiki/images/Mystic_robe_top.png?a28d0', label: 'Mystic Clothing' } },
  { id: 'mage_n2', type: 'imageNode', position: { x: -200, y: 200 }, data: { imageUrl: 'https://runescape.wiki/images/Skeletal_top.png?1d0c5', label: 'Skeletal Set' } },
  { id: 'mage_n3', type: 'imageNode', position: { x: 0, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Lunar_torso.png?eaac9', label: 'Lunar equipment' } },
  { id: 'mage_n4', type: 'imageNode', position: { x: 0, y: 600 }, data: { imageUrl: 'https://runescape.wiki/images/Guthix_staff.png?e511c', label: 'God Staff' } },
  { id: 'mage_n5', type: 'imageNode', position: { x: 150, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Grifolic_poncho.png?f5432', label: 'Grifolic Gear' } },
  { id: 'mage_n6', type: 'imageNode', position: { x: -100, y: 800 }, data: { imageUrl: 'https://runescape.wiki/images/Ganodermic_poncho.png?27b22', label: 'Ganodermic Gear' } },
  { id: 'mage_n7', type: 'imageNode', position: { x: 100, y: 800 }, data: { imageUrl: 'https://runescape.wiki/images/Garb_of_subjugation.png?2ec63', label: 'Robes of Subjugation' } },
  { id: 'mage_n8', type: 'imageNode', position: { x: 150, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Abyssal_wand.png?7fd17', label: 'Abyssal Wand/Orb' } },
  { id: 'mage_n9', type: 'imageNode', position: { x: -150, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Crystal_staff.png?58671', label: 'Crystal Staff' } },
  { id: 'mage_n10', type: 'imageNode', position: { x: -300, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Blisterwood_staff.png?5f23a', label: 'Blisterwood Staff' } },
  { id: 'mage_n11', type: 'imageNode', position: { x: -300, y: 1200 }, data: { imageUrl: 'https://runescape.wiki/images/Sunspear_%28magic%29.png?3bc03', label: 'Sunspear' } },
  { id: 'mage_n12', type: 'imageNode', position: { x:  300, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Vanquish_%28magic%29.png?231e5', label: 'Vanquish' } },
  { id: 'mage_n13', type: 'imageNode', position: { x:  0, y: 1000 }, data: { imageUrl: 'https://runescape.wiki/images/Polypore_staff.png?20491', label: 'Polypore Staff' } },
  { id: 'mage_n14', type: 'imageNode', position: { x:  100, y: 1400 }, data: { imageUrl: 'https://runescape.wiki/images/Seasinger%27s_robe_top.png?bd322', label: 'Seasinger Gear' } },
  { id: 'mage_n15', type: 'imageNode', position: { x:  250, y: 1400 }, data: { imageUrl: 'https://runescape.wiki/images/Anima_core_body_of_Seren.png?4670e', label: 'Anima Core of Seren Gear' } },
  { id: 'mage_n16', type: 'imageNode', position: { x:  -100, y: 1400 }, data: { imageUrl: 'https://runescape.wiki/images/Anima_core_body_of_Sliske.png?6c173', label: 'Anima Core of Sliske Gear' } },
  { id: 'mage_n17', type: 'imageNode', position: { x:  -250, y: 1400 }, data: { imageUrl: 'https://runescape.wiki/images/Virtus_robe_top.png?b64c8', label: 'Virtus Gear' } },
  { id: 'mage_n18', type: 'imageNode', position: { x:  280, y: 1730 }, data: { imageUrl: 'https://runescape.wiki/images/Hazelmere%27s_signet_ring.png?38ffa', label: 'If you\'re really lucky' } },
  { id: 'mage_n19', type: 'imageNode', position: { x:  120, y: 1560 }, data: { imageUrl: 'https://runescape.wiki/images/Legatus%27s_Emberstaff.png?7d072', label: 'Legatus\' Emberstaff' } },
  { id: 'mage_n20', type: 'imageNode', position: { x:  -220, y: 2070 }, data: { imageUrl: 'https://runescape.wiki/images/Noxious_staff.png?aa951', label: 'Noxious Staff' } },
  { id: 'mage_n21', type: 'imageNode', position: { x:  -340, y: 1730 }, data: { imageUrl: 'https://cdn.discordapp.com/emojis/1004109547427876896.webp?size=44', label: 'Don\'t' } },
  { id: 'mage_n22', type: 'imageNode', position: { x:  -310, y: 1560 }, data: { imageUrl: 'https://runescape.wiki/images/Eternal_magic_wand_%28meagre%29.png?b1674', label: 'Crafted Eternal Magic Weapons' } },
  { id: 'mage_n23', type: 'imageNode', position: { x:  -350, y: 1920 }, data: { imageUrl: 'https://runescape.wiki/images/Ruinous_staff.png?ce20e', label: 'Ruinous Staff' } },
  { id: 'mage_n24', type: 'imageNode', position: { x:  -540, y: 1680 }, data: { imageUrl: 'https://runescape.wiki/images/Seismic_wand.png?11b4c', label: 'Vorago Wand/Orb' } },
  { id: 'mage_n25', type: 'imageNode', position: { x:  -540, y: 1860 }, data: { imageUrl: 'https://runescape.wiki/images/Wand_of_the_praesul.png?05065', label: 'Praesul Wand/Orb' } },
  { id: 'mage_n26', type: 'imageNode', position: { x:  275, y: 1900 }, data: { imageUrl: 'https://runescape.wiki/images/Wand_of_the_Cywir_elders.png?6d9f6', label: 'Wand/Orb of the Cywir Elders' } },
  { id: 'mage_n27', type: 'imageNode', position: { x:  110, y: 2100 }, data: { imageUrl: 'https://runescape.wiki/images/Seasinger_kiba.png?7ee82', label: 'Seasinger Kiba/Makigai' } },
  { id: 'mage_n28', type: 'imageNode', position: { x:  0, y: 1800 }, data: { imageUrl: 'https://runescape.wiki/images/Giant_prismatic_fallen_star.png?b97f5', label: 'Pick ONE' } },
  { id: 'mage_n29', type: 'imageNode', position: { x:  550, y: 1860 }, data: { imageUrl: 'https://runescape.wiki/images/Camel_staff.png?d84ca', label: 'Camel Staff' } },
  { id: 'mage_n30', type: 'imageNode', position: { x:  550, y: 1660 }, data: { imageUrl: 'https://runescape.wiki/images/Obliteration.png?e366a', label: 'Obliteration' } },
  { id: 'mage_n31', type: 'imageNode', position: { x:  -50, y: 2600 }, data: { imageUrl: 'https://runescape.wiki/images/Roar_of_Awakening.png?02126', label: 'Nakatra\'s Dual Weapons' } },
  { id: 'mage_n32', type: 'imageNode', position: { x:  -25, y: 2800 }, data: { imageUrl: 'https://runescape.wiki/images/Cryptbloom_top.png?29f85', label: 'Cryptbloom Gear' } },
  { id: 'mage_n33', type: 'imageNode', position: { x:  -250, y: 2800 }, data: { imageUrl: 'https://runescape.wiki/images/Masterwork_magic_robe_top.png?7ce8e', label: 'Masterwork Magic Gear' } },
  { id: 'mage_n34', type: 'imageNode', position: { x:  150, y: 2800 }, data: { imageUrl: 'https://runescape.wiki/images/Robe_top_of_Tumeken%27s_resplendence.png?0e308', label: 'Tumeken\'s Resplandence Gear' } },
  { id: 'mage_n35', type: 'imageNode', position: { x:  -50, y: 3000 }, data: { imageUrl: 'https://runescape.wiki/images/Fractured_Staff_of_Armadyl.png?50e28', label: 'Fractured Staff of Armadyl' } },
    
  ];

   const initialEdges = [{ id: 'mage_n1-mage_n2', source: 'mage_n1', target: 'mage_n2' },
    { id: 'mage_n1-mage_n2', source: 'mage_n1', target: 'mage_n2' },
    { id: 'mage_n2-mage_n3', source: 'mage_n2', target: 'mage_n3' },
    { id: 'mage_n1-mage_n3', source: 'mage_n1', target: 'mage_n3' },
    { id: 'mage_n1-mage_n5', source: 'mage_n1', target: 'mage_n5' },
    { id: 'mage_n3-mage_n4', source: 'mage_n3', target: 'mage_n4' },
    { id: 'mage_n5-mage_n4', source: 'mage_n5', target: 'mage_n4' },
    { id: 'mage_n4-mage_n7', source: 'mage_n4', target: 'mage_n7' },
    { id: 'mage_n4-mage_n6', source: 'mage_n4', target: 'mage_n6' },
    { id: 'mage_n6-mage_n8', source: 'mage_n6', target: 'mage_n8' },
    { id: 'mage_n6-mage_n9', source: 'mage_n6', target: 'mage_n9' },
    { id: 'mage_n6-mage_n10', source: 'mage_n6', target: 'mage_n10' },
    { id: 'mage_n6-mage_n12', source: 'mage_n6', target: 'mage_n12' },
    { id: 'mage_n6-mage_n13', source: 'mage_n6', target: 'mage_n13' },
    { id: 'mage_n7-mage_n8', source: 'mage_n7', target: 'mage_n8' },
    { id: 'mage_n7-mage_n9', source: 'mage_n7', target: 'mage_n9' },
    { id: 'mage_n7-mage_n10', source: 'mage_n7', target: 'mage_n10' },
    { id: 'mage_n7-mage_n12', source: 'mage_n7', target: 'mage_n12' },
    { id: 'mage_n7-mage_n13', source: 'mage_n7', target: 'mage_n13' },
    { id: 'mage_n10-mage_n11', source: 'mage_n10', target: 'mage_n11' },
    { id: 'mage_n8-mage_n14', source: 'mage_n8', target: 'mage_n14' },
    { id: 'mage_n9-mage_n14', source: 'mage_n9', target: 'mage_n14' },
    { id: 'mage_n11-mage_n14', source: 'mage_n11', target: 'mage_n14' },
    { id: 'mage_n12-mage_n14', source: 'mage_n12', target: 'mage_n14' },
    { id: 'mage_n13-mage_n14', source: 'mage_n13', target: 'mage_n14' },
    { id: 'mage_n8-mage_n15', source: 'mage_n8', target: 'mage_n15' },
    { id: 'mage_n9-mage_n15', source: 'mage_n9', target: 'mage_n15' },
    { id: 'mage_n11-mage_n15', source: 'mage_n11', target: 'mage_n15' },
    { id: 'mage_n12-mage_n15', source: 'mage_n12', target: 'mage_n15' },
    { id: 'mage_n13-mage_n15', source: 'mage_n13', target: 'mage_n15' },
    { id: 'mage_n8-mage_n16', source: 'mage_n8', target: 'mage_n16' },
    { id: 'mage_n9-mage_n16', source: 'mage_n9', target: 'mage_n16' },
    { id: 'mage_n11-mage_n16', source: 'mage_n11', target: 'mage_n16' },
    { id: 'mage_n12-mage_n16', source: 'mage_n12', target: 'mage_n16' },
    { id: 'mage_n13-mage_n16', source: 'mage_n13', target: 'mage_n16' },
    { id: 'mage_n8-mage_n17', source: 'mage_n8', target: 'mage_n17' },
    { id: 'mage_n9-mage_n17', source: 'mage_n9', target: 'mage_n17' },
    { id: 'mage_n11-mage_n17', source: 'mage_n11', target: 'mage_n17' },
    { id: 'mage_n12-mage_n17', source: 'mage_n12', target: 'mage_n17' },
    { id: 'mage_n13-mage_n17', source: 'mage_n13', target: 'mage_n17' },
    { id: 'mage_n14-mage_n28', source: 'mage_n14', target: 'mage_n28' },
    { id: 'mage_n15-mage_n28', source: 'mage_n15', target: 'mage_n28' },
    { id: 'mage_n16-mage_n28', source: 'mage_n16', target: 'mage_n28' },
    { id: 'mage_n17-mage_n28', source: 'mage_n17', target: 'mage_n28' },
    { id: 'mage_n28-mage_n19', source: 'mage_n28', target: 'mage_n19' },
    { id: 'mage_n28-mage_n20', source: 'mage_n28', target: 'mage_n20' },
    { id: 'mage_n28-mage_n21', source: 'mage_n28', target: 'mage_n21' },
    { id: 'mage_n28-mage_n22', source: 'mage_n28', target: 'mage_n22' },
    { id: 'mage_n28-mage_n23', source: 'mage_n28', target: 'mage_n23' },
    { id: 'mage_n28-mage_n26', source: 'mage_n28', target: 'mage_n26' },
    { id: 'mage_n28-mage_n27', source: 'mage_n28', target: 'mage_n27' },
    { id: 'mage_n28-mage_n18', source: 'mage_n28', target: 'mage_n18' },
    { id: 'mage_n18-mage_n29', source: 'mage_n18', target: 'mage_n29' },
    { id: 'mage_n18-mage_n30', source: 'mage_n18', target: 'mage_n30' },
    { id: 'mage_n21-mage_n24', source: 'mage_n21', target: 'mage_n24' },
    { id: 'mage_n21-mage_n25', source: 'mage_n21', target: 'mage_n25' },
    { id: 'mage_n19-mage_n31', source: 'mage_n19', target: 'mage_n31' },
    { id: 'mage_n20-mage_n31', source: 'mage_n20', target: 'mage_n31' },
    { id: 'mage_n21-mage_n31', source: 'mage_n21', target: 'mage_n31' },
    { id: 'mage_n22-mage_n31', source: 'mage_n22', target: 'mage_n31' },
    { id: 'mage_n23-mage_n31', source: 'mage_n23', target: 'mage_n31' },
    { id: 'mage_n26-mage_n31', source: 'mage_n26', target: 'mage_n31' },
    { id: 'mage_n27-mage_n31', source: 'mage_n27', target: 'mage_n31' },
    { id: 'mage_n18-mage_n31', source: 'mage_n18', target: 'mage_n31' },
    { id: 'mage_n31-mage_n32', source: 'mage_n31', target: 'mage_n32' },
    { id: 'mage_n31-mage_n33', source: 'mage_n31', target: 'mage_n33' },
    { id: 'mage_n31-mage_n34', source: 'mage_n31', target: 'mage_n34' },
    { id: 'mage_n32-mage_n35', source: 'mage_n32', target: 'mage_n35' },
    { id: 'mage_n33-mage_n35', source: 'mage_n33', target: 'mage_n35' },
    { id: 'mage_n34-mage_n35', source: 'mage_n34', target: 'mage_n35' },
  ];

    const savedNodes = JSON.parse(localStorage.getItem("mage_nodes") || "null") || initialNodes;
    const savedEdges = JSON.parse(localStorage.getItem("mage_edges") || "null") || initialEdges;
  
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
      localStorage.setItem("mage_nodes", JSON.stringify(nodes));
    }, [nodes]);
  
    useEffect(() => {
      localStorage.setItem("mage_edges", JSON.stringify(edges));
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
