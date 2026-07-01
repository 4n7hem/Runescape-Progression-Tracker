import { useState, useCallback, useEffect } from "react";
import { ReactFlow, addEdge, MarkerType, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ImageNode from './ImageNode.tsx';


export default (() => {
    const nodeTypes = {
        imageNode: ImageNode,
    };


  const initialNodes = [
  { id: 'melee_n1', type: 'imageNode', position: { x: -100, y: 0 }, data: { imageUrl: 'https://runescape.wiki/images/Rune_platebody.png?ba086', label: 'Rune Gear' } },
  { id: 'melee_n2', type: 'imageNode', position: { x: 100, y: 200 }, data: { imageUrl: 'https://runescape.wiki/images/Orikalkum_platebody_%2B_3.png?08ef2', label: 'Orikalkum Gear' } },
  { id: 'melee_n3', type: 'imageNode',position: { x: -100, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Necronium_platebody_%2B_4.png?7ae1c', label: 'Necronium Gear' } },
  { id: 'melee_n4', type: 'imageNode', position: { x: 100, y: 750 }, data: { imageUrl: 'https://runescape.wiki/images/Bane_platebody_%2B_4.png?88370', label: 'Bane Gear' } },
  { id: 'melee_n5', type: 'imageNode', position: { x: -100, y: 1100 }, data: { imageUrl: 'https://runescape.wiki/images/Elder_rune_platebody_%2B_5.png?aa6cf', label: 'Elder Rune Gear' } },
  { id: 'melee_n6', type: 'imageNode', position: { x: 100, y: 1450 }, data: { imageUrl: 'https://runescape.wiki/images/Masterwork_melee_platebody.png?879ba', label: 'Masterwork Melee Gear' } },
  { id: 'melee_n7', type: 'imageNode', position: { x: -100, y: 1800 }, data: { imageUrl: 'https://runescape.wiki/images/Vestments_of_havoc_robe_top.png?b399a', label: 'Vestments of Havoc Gear' }},
  { id: 'melee_n8', type: 'imageNode', position: { x: -400, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Sunspear_%28melee%29.png?cd16b', label: 'Sunspear' }},
  { id: 'melee_n9', type: 'imageNode', position: { x: 400, y: 900 }, data: { imageUrl: 'https://runescape.wiki/images/Abyssal_bane_2h_sword.png?b38ef', label: 'Abyssal bane 2h sword' }},
  { id: 'melee_n10', type: 'imageNode', position: { x: -450, y: 2000 }, data: { imageUrl: 'https://runescape.wiki/images/Ek-ZekKil.png?7f634', label: 'Ek-Zekkil' }},
  { id: 'melee_n11', type: 'imageNode', position: { x: 300, y: 2000 }, data: { imageUrl: 'https://runescape.wiki/images/Dragon_battleaxe.png?3b357', label: 'Dragon Battleaxe' }},  
  { id: 'melee_n13', type: 'imageNode', position: { x: -300, y: 900 }, data: { imageUrl: 'https://runescape.wiki/images/Dragon_Rider_lance.png?24766', label: 'Dragon Rider Lance' }},
  { id: 'melee_n14', type: 'imageNode', position: { x: 350, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Saradomin_godsword.png?421d4', label: 'Any Godsword' }},
  { id: 'melee_n15', type: 'imageNode', position: { x: 350, y: 250 }, data: { imageUrl: 'https://runescape.wiki/images/Dragon_halberd.png?ca28d', label: 'Dragon Halberd' }},
  { id: 'melee_n16', type: 'imageNode', position: { x: 0, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Crystal_halberd.png?2d4c2', label: 'Crystal Halberd' }},
  { id: 'melee_n17', type: 'imageNode', position: { x: 0, y: 900 }, data: { imageUrl: 'https://runescape.wiki/images/Annihilation.png?d3daf', label: 'Annihilation' }},
  { id: 'melee_n18', type: 'imageNode', position: { x: -100, y: 1250 }, data: { imageUrl: 'https://runescape.wiki/images/Noxious_scythe.png?a250c', label: 'Noxious Scythe' }},
  { id: 'melee_n19', type: 'imageNode', position: { x: 100, y: 1250 }, data: { imageUrl: 'https://runescape.wiki/images/Ruinous_rapier.png?c984d', label: 'Ruinous Weaponry' }},
  { id: 'melee_n20', type: 'imageNode', position: { x: 300, y: 1250 }, data: { imageUrl: 'https://runescape.wiki/images/Drygore_longsword.png?e9aa7', label: 'Drygore Weaponry' }},
  { id: 'melee_n21', type: 'imageNode', position: { x: -300, y: 1250 }, data: { imageUrl: 'https://runescape.wiki/images/Varanus%27s_Mercy.png?7e88a', label: 'Varanus Mercy' }},
  { id: 'melee_n12', type: 'imageNode', position: { x: 350, y: 1450 }, data: { imageUrl: 'https://runescape.wiki/images/Masterwork_Spear_of_Annihilation.png?24f33', label: 'Masterwork Spear of Annihilation' }},
  { id: 'melee_n22', type: 'imageNode', position: { x: 350, y: 1600 }, data: { imageUrl: 'https://runescape.wiki/images/Terrasaur_maul.png?154a5', label: 'Terrasaur Maul' }},
  { id: 'melee_n23', type: 'imageNode', position: { x: 0, y: 2000 }, data: { imageUrl: 'https://cdn.discordapp.com/emojis/1004109547427876896.webp?size=44', label: 'Don\'t' }},
  { id: 'melee_n24', type: 'imageNode', position: { x: -100, y: 2200 }, data: { imageUrl: 'https://runescape.wiki/images/Dark_Shard_of_Leng.png?15f0f', label: 'Leng Dual Swords' }},
  { id: 'melee_n25', type: 'imageNode', position: { x: 100, y: 2200 }, data: { imageUrl: 'https://runescape.wiki/images/Zaros_godsword.png?3dc0b', label: 'Zaros Godsword' }},
  { id: 'melee_n26', type: 'imageNode', position: { x: 350, y: 1750 }, data: { imageUrl: 'https://runescape.wiki/images/Masterwork_2h_sword.png?ccbdc', label: 'Masterwork 2h sword' }},
  { id: 'melee_n27', type: 'imageNode', position: { x: -300, y: 2000 }, data: { imageUrl: 'https://runescape.wiki/images/Tumeken%27s_Light.png?7b1f1', label: 'Tumeken\'s Light' }}
  ];

  const initialEdges = [{ id: 'melee_n1-melee_n2', source: 'melee_n1', target: 'melee_n2' },
    { id: 'melee_n2-melee_n3', source: 'melee_n2', target: 'melee_n3' },     
    { id: 'melee_n6-melee_n7', source: 'melee_n6', target: 'melee_n7' },
    { id: 'melee_n3-melee_n8', source: 'melee_n3', target: 'melee_n8' },    
    { id: 'melee_n7-melee_n10', source: 'melee_n7', target: 'melee_n10' },
    { id: 'melee_n7-melee_n11', source: 'melee_n7', target: 'melee_n11' },
    { id: 'melee_n6-melee_n12', source: 'melee_n6', target: 'melee_n12' },
    { id: 'melee_n3-melee_n16', source: 'melee_n3', target: 'melee_n16' },
    { id: 'melee_n3-melee_n14', source: 'melee_n3', target: 'melee_n14' },
    { id: 'melee_n8-melee_n4', source: 'melee_n8', target: 'melee_n4' },
    { id: 'melee_n16-melee_n4', source: 'melee_n16', target: 'melee_n4' },
    { id: 'melee_n14-melee_n4', source: 'melee_n14', target: 'melee_n4' },
    { id: 'melee_n2-melee_n15', source: 'melee_n2', target: 'melee_n15' },
    { id: 'melee_n4-melee_n13', source: 'melee_n4', target: 'melee_n13' },
    { id: 'melee_n4-melee_n17', source: 'melee_n4', target: 'melee_n17' },    
    { id: 'melee_n4-melee_n9', source: 'melee_n4', target: 'melee_n9' },
    { id: 'melee_n13-melee_n5', source: 'melee_n13', target: 'melee_n5' },
    { id: 'melee_n17-melee_n5', source: 'melee_n17', target: 'melee_n5' },    
    { id: 'melee_n9-melee_n5', source: 'melee_n9', target: 'melee_n5' },
    { id: 'melee_n5-melee_n18', source: 'melee_n5', target: 'melee_n18' },
    { id: 'melee_n5-melee_n19', source: 'melee_n5', target: 'melee_n19' },
    { id: 'melee_n5-melee_n20', source: 'melee_n5', target: 'melee_n20' },
    { id: 'melee_n5-melee_n21', source: 'melee_n5', target: 'melee_n21' },
    { id: 'melee_n18-melee_n6', source: 'melee_n18', target: 'melee_n6' },
    { id: 'melee_n19-melee_n6', source: 'melee_n19', target: 'melee_n6' },
    { id: 'melee_n20-melee_n6', source: 'melee_n20', target: 'melee_n6' },
    { id: 'melee_n21-melee_n6', source: 'melee_n21', target: 'melee_n6' },
    { id: 'melee_n6-melee_n22', source: 'melee_n6', target: 'melee_n22' },
    { id: 'melee_n7-melee_n23', source: 'melee_n7', target: 'melee_n23' },
    { id: 'melee_n23-melee_n24', source: 'melee_n23', target: 'melee_n24' },
    { id: 'melee_n23-melee_n25', source: 'melee_n23', target: 'melee_n25' },
    { id: 'melee_n6-melee_n26', source: 'melee_n6', target: 'melee_n26' },
    { id: 'melee_n7-melee_n27', source: 'melee_n7', target: 'melee_n27' }
  ];

  const savedNodes = JSON.parse(localStorage.getItem("melee_nodes") || "null") || initialNodes;
  const savedEdges = JSON.parse(localStorage.getItem("melee_edges") || "null") || initialEdges;

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
    localStorage.setItem("melee_nodes", JSON.stringify(nodes));
  }, [nodes]);

  useEffect(() => {
    localStorage.setItem("melee_edges", JSON.stringify(edges));
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
