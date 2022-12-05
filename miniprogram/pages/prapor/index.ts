// index.ts
// 获取应用实例
Page({
  data: {
    // [36, 31, 7, 28,
    //  38, 40, 31, 44]
    questListData: [
      {
        // name: '首秀 Debut',
        name: 'Debut',
        location: undefined,
        objectives: [ "杀 5 个 scav", "上交 2 把 mp-133" ],
        prerequisites: undefined,
        rewards: {
          exp: 1700,
          reps: [
            { merchant: 'Prapor', value: +0.02 },
            { merchant: 'Jaeger', value: +0.01 },
          ],
          unlocks: [
            { merchant: 'Prapor', repLevel: 1, item: 'AKS-74U', method: 'purchase' }
          ],
          skills: undefined,
          items: undefined,
        },
        tips: [
          "直接跟黑商买 mp-133",
          "解锁耶格尔后跟他购买 mp-133"
        ],
      },
      

      {
        // name: '搜寻任务 Search Mission',
        name: 'Search Mission',
        location: '森林',
        objectives: [ "找到失踪车队", "找到 USEC 营地", "幸存并撤离" ],
        prerequisites: ['lv 5', 'finish $Debut$'],
        rewards: {
          exp: 2800,
          reps: [
            { merchant: 'Prapor', value: +0.02 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: ['wood map', 'compass']
        },
        tips: undefined,
      },


      {
        // name: '考验 Checking',
        name: 'Checking',
        location: '海关',
        objectives: ["Obtain the Bronze pocket watch", "Hand over to Prapor"],
        prerequisites: ['lv 2', 'finish $Debut$'],
        rewards: {
          exp: 1800,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },

      
      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'Shootout Picnic',
        location: '森林',
        objectives: ["Eliminate 15 Scavs"],
        prerequisites: ['lv 3', 'finish $Checking$'],
        rewards: {
          exp: 2000,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
            { merchant: 'Jaeger', value: +0.01 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'Delivery from the Past',
        location: '海关 工厂',
        objectives: [
          "Obtain folder in Customs Director's office",
          "Stash the package in the Factory break room (2nd floor near Gate 3)",
          "Survive and extract from Factory"
        ],
        prerequisites: ['lv 5', 'finish $Checking$'],
        rewards: {
          exp: 4000,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
          ],
          unlocks: [
            { merchant: 'Prapor', repLevel: 1, item: '5.45x39mm PS gs', method: 'purchase' }
          ],
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'BP Depot',
        location: '海关',
        objectives: [
          "Mark fuel tank 1 with MS2000 Marker",
          "Mark fuel tank 2 with MS2000 Marker",
          "Mark fuel tank 3 with MS2000 Marker",
          "Mark fuel tank 4 with MS2000 Marker",
          "Survive and extract from custom"
        ],
        prerequisites: ['lv 5', 'finish $Delivery from the Past$'],
        rewards: {
          exp: 2800,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
            { merchant: 'Jaeger', value: -0.01 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: [ "Expeditionary fuel tank * 2" ],
        },
        tips: undefined,
      },

      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'The Bunker - Part 1',
        location: '储备站',
        objectives: [
          "Find the underground bunker",
          "Locate the control room in the underground bunker",
          "Survive and extract from reserve"
        ],
        prerequisites: ['lv 10', 'finish $BP Depot$'],
        rewards: {
          exp: 5700,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'The Bunker - Part 2',
        location: '储备站',
        objectives: [
          "Locate the hermetic door leading to the hospital (white bishop)",
          "Locate one of two hermetic doors leading to the academy building (black bishop)",
          "Locate one of two hermetic doors leading to barracks №1 (black pawn)",
          "Locate one of two hermetic doors leading to barracks №2 (white pawn)",
          "Locate the hermetic door leading to the building of the air control center (white king)",
          "Survive and extract from reserve"
        ],
        prerequisites: ['lv 11', 'finish $The Bunker - Part 1$'],
        rewards: {
          exp: 9200,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'No Place for Renegades',
        location: '储备站',
        objectives: [ "kill 5 Raiders in the command bunker" ],
        prerequisites: ['lv 12', 'finish $Ice Cream Cones$', 'finish $The Bunker - Part 2$'],
        rewards: {
          exp: 8500,
          reps: [{ merchant: 'Prapor', value: +0.03 }],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },

      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'Documents',
        location: '储备站',
        objectives: [
          "Obtain Military documents 1",
          "Hand over documents 1 to Prapor",
          "Obtain Military documents 2",
          "Hand over documents 2 to Prapor",
          "Obtain Military documents 3",
          "Hand over documents 3 to Prapor",
        ],
        prerequisites: ['finish $No Place for Renegades$'],
        rewards: {
          exp: 7800,
          reps: [{ merchant: 'Prapor', value: +0.04 }],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'Bad Rep Evidence',
        location: '海关',
        objectives: [
          "Obtain Folder in a bunkhouse",
          "Hand over the Folder to Prapor",
        ],
        prerequisites: ['lv 6', 'finish $BP Depot$'],
        rewards: {
          exp: 4100,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
          ],
          unlocks: [
            { merchant: 'Prapor', repLevel: 2, item: 'BelOMO PSO-1M2-1 4x24 scope', method: 'purchase' }
          ],
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'Ice Cream Cones',
        location: undefined,
        objectives: [
          "Hand over 3 AK-74 5.45x39 6L31 60-round magazine $FIR$ to Prapor",
        ],
        prerequisites: ['lv 9', 'finish $Bad Rep Evidence$'],
        rewards: {
          exp: 5200,
          reps: [
            { merchant: 'Prapor', value: +0.02 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'Postman Pat - Part 1',
        location: '工厂',
        objectives: [
          "Obtain the letter on the messenger's body",
          "Hand over the letter to Therapist",
        ],
        prerequisites: ['lv 10', 'finish $Ice Cream Cones$'],
        rewards: {
          exp: 5900,
          reps: [{ merchant: 'Prapor', value: +0.02 }],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },

      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'Ice Cream Cones',
        location: undefined,
        objectives: [
          "Hand over 3 AK-74 5.45x39 6L31 60-round magazine $FIR$ to Prapor",
        ],
        prerequisites: ['lv 9', 'finish $Bad Rep Evidence$'],
        rewards: {
          exp: 5200,
          reps: [
            { merchant: 'Prapor', value: +0.02 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'Shaking up the Teller',
        location: '海关',
        objectives: [
          "Obtain the valuable item in dorm room 203",
          "Hand over the valuable item to Prapor",
        ],
        prerequisites: ['Obtain level 2 loyalty with Prapor', 'finish $Ice Cream Cones$'],
        rewards: {
          exp: 5900,
          reps: [
            { merchant: 'Prapor', value: +0.02 },
          ],
          unlocks: [
            { merchant: 'Prapor', repLevel: 2, item: 'Hexagon 12K 12ga sound suppressor', method: 'purchase' },
            { merchant: 'Prapor', repLevel: 3, item: 'AKS-74U PBS-4 5.45x39 sound suppressor', method: 'purchase' }
          ],
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'The Punisher - Part 1',
        location: '海岸线',
        objectives: [ "Eliminate 15 Scavs while using AKM weapon" ],
        prerequisites: ['lv 17', 'finish $Shaking up the Teller$'],
        rewards: {
          exp: 10200,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
          ],
          unlocks: [
            { merchant: 'Prapor', repLevel: 3, item: 'SV-98 7.62x54R bolt-action sniper rifle', method: 'purchase' }
          ],
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'The Punisher - Part 2',
        location: '海岸线',
        objectives: [ "Eliminate 12 Scavs while using a suppressed weapon", "Hand over 7 Lower half-masks $FIR$ to Prapor"],
        prerequisites: ['lv 18', 'finish $The Punisher - Part 1$'],
        rewards: {
          exp: 13100,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },



      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'The Punisher - Part 3',
        location: '海关',
        objectives: [ "Eliminate 25 Scavs while using an AKS-74U"],
        prerequisites: ['lv 19', 'finish $The Punisher - Part 2$'],
        rewards: {
          exp: 11700,
          reps: [
            { merchant: 'Prapor', value: +0.04 },
            { merchant: 'Skier', value: +0.02 },
          ],
          unlocks: [
            { merchant: 'Prapor', repLevel: 4, item: '7.62x54mm R BT gzh', method: 'purchase' }
          ],
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'The Punisher - Part 4',
        location: '海岸线，森林',
        objectives: [
          "Hand over 5 Bars A-2607 95H18 knives $FIR$ to Prapor",
          "Eliminate 10 Scavs on Woods while using a 12 gauge shotgun",
          "Eliminate 10 PMCs on Shoreline while wearing a balaclava (any type) and Scav Vest",
        ],
        prerequisites: ['lv 20', 'finish $The Punisher - Part 3$'],
        rewards: {
          exp: 18000,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
          ],
          unlocks: [
            { merchant: 'Prapor', repLevel: 3, item: '5.45x39mm BT gs', method: 'purchase' }
          ],
          skills: undefined,
          items: undefined,
        },
        tips: undefined,
      },


      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'The Punisher - Part 5',
        location: undefined,
        objectives: [
          "Hand over 1 AK-74N assault rifle $FIR$ to Prapor",
          "Hand over 1 M4A1 assault rifle $FIR$ to Prapor",
          "Hand over 2 PM 9x18PM pistols $FIR$ to Prapor",
          "Eliminate 10 PMCs while wearing a PACA body armor and 6B47 helmet"
        ],
        prerequisites: ['lv 20', 'finish $The Punisher - Part 4$'],
        rewards: {
          exp: 18200,
          reps: [
            { merchant: 'Prapor', value: +0.03 },
          ],
          unlocks: [
            { merchant: 'Prapor', repLevel: 4, item: '12.7x55mm PS12B', method: 'purchase' }
          ],
          skills: undefined,
          items: ["Colt M4A1 5.56x45 assault rifle"],
        },
        tips: undefined,
      },

      {
        // name: '硝烟野餐 Shootout Picnic',
        name: 'The Punisher - Part 6',
        location: '工厂除外',
        objectives: [ "Eliminate 15 PMCs while using SVD rifle"],
        prerequisites: ['lv 21', 'finish $The Punisher - Part 5$'],
        rewards: {
          exp: 19400,
          reps: [
            { merchant: 'Prapor', value: +0.04 },
            { merchant: 'Therapist', value: +0.05 },
            { merchant: 'Skier', value: +0.01 },
          ],
          unlocks: undefined,
          skills: undefined,
          items: ["Secure container Epsilon"],
        },
        tips: undefined,
      },

    ],
  },
  onLoad() {

  },
});
