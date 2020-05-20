const initial_state = {
  sections: [
    {
      title: "Hats",
      image: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
    },
    {
      title: "Jackets",
      image: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
    },
    {
      title: "Sneakers",
      image: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
    },
    {
      title: "Womens",
      image: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
    },
    {
      title: "Sneakers",
      image: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
    },
  ],
};

const directoryReducer = (state = initial_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
