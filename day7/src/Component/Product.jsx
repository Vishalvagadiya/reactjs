import { useState } from "react";
import Swal from 'sweetalert2';

function Tryg() {
    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(""); 
    const [productCategory, setProductCategory] = useState(""); 
    const [productStock, setProductStock] = useState(""); 
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(false);

    const addProduct = () => {
        const product = {
            name: productName,
            image: productImage,
            description: productDescription,
            price: productPrice,
            category: productCategory,
            stock: productStock
        };
        setProducts([...products, product]);
        setProductName('');
        setProductImage('');
        setProductDescription('');
        setProductPrice(''); 
        setProductCategory(''); 
        setProductStock(''); 
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const toggleShowProducts = () => {
        setShowProducts(!showProducts); 
    };


    return (
        <div>
            <div className="product-add">
                <p className="sign" align="center">Add Product</p>
                <input className="product-name" type="text" align="center" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} /> <br/>
                <input className="product-image" type="text" align="center" placeholder="Product Image URL" value={productImage} onChange={(e) => setProductImage(e.target.value)} /> <br/>
                <input className="product-description" type="text" align="center" placeholder="Product Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} /> <br/>
                <input className="product-price" type="number" align="center" placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} /> <br/>
                <input className="product-category" type="text" align="center" placeholder="Product Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} /> <br/>
                <input className="product-stock" type="number" align="center" placeholder="Product Stock" value={productStock} onChange={(e) => setProductStock(e.target.value)} /><br/>
                <button className="productsubmit" align="center" onClick={addProduct}>Add Product</button>
                <button className="toggle-show-products" align="center" onClick={toggleShowProducts}>
                    {showProducts ? "Hide Products" : "Show Products"}
                </button>
            </div>
            {showProducts && products.length > 0 && (
                <div className="product-table">
                    <h2 align="center">Product List</h2>
                    <table align="center" border="1">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product Description</th>
                                <th>Product Price</th>
                                <th>Product Category</th>
                                <th>Product Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td><img src={product.image} alt={product.name} width="100" height="100" /></td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    
                </div>
            )}
        </div>
    )
}

export default Tryg;
