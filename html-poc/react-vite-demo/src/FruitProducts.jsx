export default function FruitProducts() {
    const products = [
        {title:'Cabbage', isFruit:false, id:1},
        {title:'Garlic', isFruit:false, id:2},
        {title:'Apple', isFruit:true, id:3},
    ];
    const productList = products.map((product) => (
      <li
        key={product.id}
        style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
      >
        {product.title}
      </li>
    ));
    return (
      <>
        <h1>Products</h1>
        <ul>{productList}</ul>
      </>
    );
}
