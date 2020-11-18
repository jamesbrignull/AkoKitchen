const INITIAL_STATE = {
  sections: [
    {
      title: "starters",
      imageUrl: "https://i.ibb.co/C8zT6cX/Beauty-Shotbeauty-Template.jpg",
      id: 1,
      linkUrl: "shop/starters",
    },
    {
      title: "mains",
      imageUrl: "https://i.ibb.co/7v0rTxy/Filipino-Chicken-Adobo-6.jpg",
      id: 2,
      linkUrl: "shop/mains",
    },
    {
      title: "desserts",
      imageUrl:
        "https://i.ibb.co/S7xPTm7/spotmanginasalhalo2spot-brand-mainimage640x360.jpg",
      id: 3,
      linkUrl: "shop/desserts",
    },
    {
      title: "specials",
      imageUrl:
        "https://i.ibb.co/j8n47B6/f5717bff-ee8e-424d-b2aa-5b1ab5b98d90-Filipino-Food-Kamayan-Table-SQ.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/specials",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
