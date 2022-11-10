// index.ts
// 获取应用实例
Page({
  data: {
    merchants: [
      { name: "Prapor", questAmount: 39, avatar: "../../assets/merchants/avatars/Prapor_Portrait.png" },
      { name: "Therapist", questAmount: 39, avatar: "../../assets/merchants/avatars/Therapist_Portrait.png" },
      { name: "Fence", questAmount: 39, avatar: "../../assets/merchants/avatars/Fence_Portrait.png" },
      { name: "Skier", questAmount: 39, avatar: "../../assets/merchants/avatars/Skier_Portrait.png" },
      { name: "Peacekeeper", questAmount: 39, avatar: "../../assets/merchants/avatars/Peacekeeper_Portrait.png" },
      { name: "Mechanic", questAmount: 39, avatar: "../../assets/merchants/avatars/Mechanic_Portrait.png" },
      { name: "Ragman", questAmount: 39, avatar: "../../assets/merchants/avatars/Ragman_Portrait.png" },
      { name: "Jaeger", questAmount: 39, avatar: "../../assets/merchants/avatars/Jaeger_Portrait.png" },
    ],

    prapor: [
      { name: 'Debut', requires: ['2 mp-133', '5 scav'] },
      { name: 'Debut', requires: ['2 mp-133', '5 scav'] },
      { name: 'Debut', requires: ['2 mp-133', '5 scav'] },
      { name: 'Debut', requires: ['2 mp-133', '5 scav'] },
      { name: 'Debut', requires: ['2 mp-133', '5 scav'] },
      { name: 'Debut', requires: ['2 mp-133', '5 scav'] },
      [
        { "name": "Debut" },
        { "name": "Search Mission" },
        { "name": "Checking" },
        { "name": "Shootout Picnic" },
        { "name": "Delivery from the Past" },
        { "name": "BP Depot" },
        { "name": "The Bunker - Part 1" },
        { "name": "The Bunker - Part 2" },
        { "name": "Bad Rep Evidence" },
        { "name": "Ice Cream Cones" },
        { "name": "No Place for Renegades" },
        { "name": "Documents" },
        { "name": "Postman Pat - Part 1" },
        { "name": "Shaking up the Teller" },
        { "name": "The Punisher - Part 1" },
        { "name": "The Punisher - Part 2" },
        { "name": "The Punisher - Part 3" },
        { "name": "The Punisher - Part 4" },
        { "name": "The Punisher - Part 5" },
        { "name": "The Punisher - Part 6" },
        { "name": "Anesthesia" },
        { "name": "Grenadier" },
        { "name": "Insomnia" },
        { "name": "Test Drive - Part 1" },
        { "name": "Perfect Mediator" },
        { "name": "Polikhim Hobo" },
        { "name": "Regulated Materials" },
        { "name": "Big Customer" },
        { "name": "No Offence" },
        { "name": "Capturing Outposts" },
        { "name": "Intimidator" },
        { "name": "Escort" },
        { "name": "Easy Job - Part 1" },
        { "name": "Easy Job - Part 2" },
        { "name": "Our Own Land" },
        { "name": "Reconnaissance" }
    ]
    ]
  },
  onLoad() {},
});
