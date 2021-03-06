import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../components/collection/collection-preview.component";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...ortherCollectionProps }) => (
          <CollectionPreview key={id} {...ortherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
