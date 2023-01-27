import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [product, setProduct] = useState([]);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8090/").then((res) => {
      // console.log(res.data);
      setProduct(res.data.products);
    });
  }, []);
  console.log(product);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="input-group border rounded w-50 bg-secondary px-2 py-2 gap-5">
        <input className="border rounded w-50" />
        <button className="border border-secondary bg-secondary  ">
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div className="check d-flex">
        <input
          type="checkbox"
          onChange={() => {
            setCheck(!check);
          }}
        />
        <h5>Stock</h5>
      </div>
      {check ? (
        <div>
          {product.map((e) => {
            if (e.isStock == true) {
              return (
                <div className="py-3">
                  <h3>{e.categoryName}</h3>
                  {product.map((a) => {
                    if (
                      a.categoryName == e.categoryName &&
                      a.categoryId == e.categoryId
                    ) {
                      return (
                        <div className="d-flex gap-5">
                          <h5>{a.productName}</h5>
                          {a.isStock ? (
                            <h5 className="text-success">IN STOCK</h5>
                          ) : (
                            ""
                          )}
                          <h5>{a.price}</h5>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div>
          {product.map((e) => {
            return (
              <div className="py-3">
                <h3>{e.categoryName}</h3>
                {product.map((a) => {
                  if (
                    a.categoryName == e.categoryName &&
                    a.categoryId == e.categoryId
                  ) {
                    return (
                      <div className="d-flex gap-5">
                        <h5>{a.productName}</h5>
                        {a.isStock ? (
                          <h5 className="text-success">IN STOCK</h5>
                        ) : (
                          <h5 className="text-danger">OUT OF STOCK</h5>
                        )}
                        <h5>{a.price}</h5>
                      </div>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default App;
