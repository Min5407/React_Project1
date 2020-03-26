import React from "react";
import MenuItem from "../menu_item/menu-item.component";
import "./directory.style.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Hats",
          image: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1
        },
        {
          title: "Jackets",
          image: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2
        },
        {
          title: "Sneakers",
          image: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3
        },
        {
          title: "Womens",
          image: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4
        },
        {
          title: "Sneakers",
          image: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionsProbs }) => (
          <MenuItem key={id} {...sectionsProbs} />
        ))}
      </div>
    );
  }
}

export default Directory;
