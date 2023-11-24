var upperlang = [];
var langs = [
  {
    id: 1,
    name: "Java",
    isActive: true,
    likes: 100,
  },
  {
    id: 2,
    name: "Python",
    isActive: true,
    likes: 200,
  },

  {
    id: 3,
    name: "Ruby",
    isActive: false,
    likes: 30,
  },
];

// for(let i=0;i<langs.length;i++){

//     upperlang.push(
//     {
//         _id:langs[i].id,
//         name:langs[i].name.toUpperCase(),
//         isActive:langs[i].isActive,
//         likes:langs[i].likes
//     })

// }

upperlang = langs.map((l) => {
  return {
    _id: l.id,
    name: l.name.toUpperCase(),
    isActive: l.isActive,
    likes: l.likes,
  };
});

console.log(upperlang);
