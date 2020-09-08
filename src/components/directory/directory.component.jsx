import React, { Component } from "react";
import MenuItems from "../menu-items/menu-items.component";
import "./directory.styles.scss";
import  SECTIONS_DATA from "../../data/sections.data";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, id, imageUrl, size, linkUrl }) => {
          return (
            <MenuItems
              title={title}
              key={id}
              imageUrl={imageUrl}
              size={size}
              linkUrl={linkUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;
