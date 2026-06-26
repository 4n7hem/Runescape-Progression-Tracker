import { useState, useCallback } from "react";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ImageNode from './ImageNode.tsx';


export default (() => {
    const nodeTypes = {
        imageNode: ImageNode,
    };


  const initialNodes = [
  { id: 'n1', type: 'imageNode', position: { x: -100, y: 0 }, data: { imageUrl: 'https://runescape.wiki/images/Rune_platebody.png?ba086', label: 'Rune Gear' } },
  { id: 'n2', type: 'imageNode', position: { x: 100, y: 200 }, data: { imageUrl: 'https://runescape.wiki/images/Orikalkum_platebody_%2B_3.png?08ef2', label: 'Orikalkum Gear' } },
  { id: 'n3', type: 'imageNode',position: { x: -100, y: 400 }, data: { imageUrl: 'https://runescape.wiki/images/Necronium_platebody_%2B_4.png?7ae1c', label: 'Necronium Gear' } },
  { id: 'n4', type: 'imageNode', position: { x: 100, y: 750 }, data: { imageUrl: 'https://runescape.wiki/images/Bane_platebody_%2B_4.png?88370', label: 'Bane Gear' } },
  { id: 'n5', type: 'imageNode', position: { x: -100, y: 1100 }, data: { imageUrl: 'https://runescape.wiki/images/Elder_rune_platebody_%2B_5.png?aa6cf', label: 'Elder Rune Gear' } },
  { id: 'n6', type: 'imageNode', position: { x: 100, y: 1450 }, data: { imageUrl: 'https://runescape.wiki/images/Masterwork_melee_platebody.png?879ba', label: 'Masterwork Melee Gear' } },
  { id: 'n7', type: 'imageNode', position: { x: -100, y: 1800 }, data: { imageUrl: 'https://runescape.wiki/images/Vestments_of_havoc_robe_top.png?b399a', label: 'Vestments of Havoc Gear' }},
  { id: 'n8', type: 'imageNode', position: { x: -400, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Sunspear_%28melee%29.png?cd16b', label: 'Sunspear' }},
  { id: 'n9', type: 'imageNode', position: { x: 400, y: 900 }, data: { imageUrl: 'https://runescape.wiki/images/Abyssal_bane_2h_sword.png?b38ef', label: 'Abyssal bane 2h sword' }},
  { id: 'n10', type: 'imageNode', position: { x: -450, y: 2000 }, data: { imageUrl: 'https://runescape.wiki/images/Ek-ZekKil.png?7f634', label: 'Ek-Zekkil' }},
  { id: 'n11', type: 'imageNode', position: { x: 300, y: 2000 }, data: { imageUrl: 'https://runescape.wiki/images/Dragon_battleaxe.png?3b357', label: 'Dragon Battleaxe' }},  
  { id: 'n13', type: 'imageNode', position: { x: -300, y: 900 }, data: { imageUrl: 'https://runescape.wiki/images/Dragon_Rider_lance.png?24766', label: 'Dragon Rider Lance' }},
  { id: 'n14', type: 'imageNode', position: { x: 350, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Saradomin_godsword.png?421d4', label: 'Any Godsword' }},
  { id: 'n15', type: 'imageNode', position: { x: 350, y: 250 }, data: { imageUrl: 'https://runescape.wiki/images/Dragon_halberd.png?ca28d', label: 'Dragon Halberd' }},
  { id: 'n16', type: 'imageNode', position: { x: 0, y: 550 }, data: { imageUrl: 'https://runescape.wiki/images/Crystal_halberd.png?2d4c2', label: 'Crystal Halberd' }},
  { id: 'n17', type: 'imageNode', position: { x: 0, y: 900 }, data: { imageUrl: 'https://runescape.wiki/images/Annihilation.png?d3daf', label: 'Annihilation' }},
  { id: 'n18', type: 'imageNode', position: { x: -100, y: 1250 }, data: { imageUrl: 'https://runescape.wiki/images/Noxious_scythe.png?a250c', label: 'Noxious Scythe' }},
  { id: 'n19', type: 'imageNode', position: { x: 100, y: 1250 }, data: { imageUrl: 'https://runescape.wiki/images/Ruinous_rapier.png?c984d', label: 'Ruinous Weaponry' }},
  { id: 'n20', type: 'imageNode', position: { x: 300, y: 1250 }, data: { imageUrl: 'https://runescape.wiki/images/Drygore_longsword.png?e9aa7', label: 'Drygore Weaponry' }},
  { id: 'n21', type: 'imageNode', position: { x: -300, y: 1250 }, data: { imageUrl: 'https://runescape.wiki/images/Varanus%27s_Mercy.png?7e88a', label: 'Varanus Mercy' }},
  { id: 'n12', type: 'imageNode', position: { x: 350, y: 1450 }, data: { imageUrl: 'https://runescape.wiki/images/Masterwork_Spear_of_Annihilation.png?24f33', label: 'Masterwork Spear of Annihilation' }},
  { id: 'n22', type: 'imageNode', position: { x: 350, y: 1600 }, data: { imageUrl: 'https://runescape.wiki/images/Terrasaur_maul.png?154a5', label: 'Terrasaur Maul' }},
  { id: 'n23', type: 'imageNode', position: { x: 0, y: 2000 }, data: { imageUrl: 'https://cdn.discordapp.com/emojis/1004109547427876896.webp?size=44', label: 'Don\'t' }},
  { id: 'n24', type: 'imageNode', position: { x: -100, y: 2200 }, data: { imageUrl: 'https://runescape.wiki/images/Dark_Shard_of_Leng.png?15f0f', label: 'Leng Dual Swords' }},
  { id: 'n25', type: 'imageNode', position: { x: 100, y: 2200 }, data: { imageUrl: 'https://runescape.wiki/images/Zaros_godsword.png?3dc0b', label: 'Zaros Godsword' }},
  { id: 'n26', type: 'imageNode', position: { x: 350, y: 1750 }, data: { imageUrl: 'https://runescape.wiki/images/Masterwork_2h_sword.png?ccbdc', label: 'Masterwork 2h sword' }},
  { id: 'n27', type: 'imageNode', position: { x: -300, y: 2000 }, data: { imageUrl: 'https://runescape.wiki/images/Tumeken%27s_Light.png?7b1f1', label: 'Tumeken\'s Light' }}
  ];

  const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' },
    { id: 'n2-n3', source: 'n2', target: 'n3' },     
    { id: 'n6-n7', source: 'n6', target: 'n7' },
    { id: 'n3-n8', source: 'n3', target: 'n8' },    
    { id: 'n7-n10', source: 'n7', target: 'n10' },
    { id: 'n7-n11', source: 'n7', target: 'n11' },
    { id: 'n6-n12', source: 'n6', target: 'n12' },
    { id: 'n3-n8', source: 'n3', target: 'n8' },
    { id: 'n3-n16', source: 'n3', target: 'n16' },
    { id: 'n3-n14', source: 'n3', target: 'n14' },
    { id: 'n8-n4', source: 'n8', target: 'n4' },
    { id: 'n16-n4', source: 'n16', target: 'n4' },
    { id: 'n14-n4', source: 'n14', target: 'n4' },
    { id: 'n2-n15', source: 'n2', target: 'n15' },
    { id: 'n4-n13', source: 'n4', target: 'n13' },
    { id: 'n4-n17', source: 'n4', target: 'n17' },    
    { id: 'n4-n9', source: 'n4', target: 'n9' },
    { id: 'n13-n5', source: 'n13', target: 'n5' },
    { id: 'n17-n5', source: 'n17', target: 'n5' },
    { id: 'n13-n5', source: 'n13', target: 'n5' },
    { id: 'n9-n5', source: 'n9', target: 'n5' },
    { id: 'n5-n18', source: 'n5', target: 'n18' },
    { id: 'n5-n19', source: 'n5', target: 'n19' },
    { id: 'n5-n20', source: 'n5', target: 'n20' },
    { id: 'n5-n21', source: 'n5', target: 'n21' },
    { id: 'n18-n6', source: 'n18', target: 'n6' },
    { id: 'n19-n6', source: 'n19', target: 'n6' },
    { id: 'n20-n6', source: 'n20', target: 'n6' },
    { id: 'n21-n6', source: 'n21', target: 'n6' },
    { id: 'n6-n22', source: 'n6', target: 'n22' },
    { id: 'n7-n23', source: 'n7', target: 'n23' },
    { id: 'n23-n24', source: 'n23', target: 'n24' },
    { id: 'n23-n25', source: 'n23', target: 'n25' },
    { id: 'n6-n26', source: 'n6', target: 'n26' },
    { id: 'n7-n27', source: 'n7', target: 'n27' }
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
