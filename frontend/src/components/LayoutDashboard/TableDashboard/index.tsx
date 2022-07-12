import { useState } from 'react';

import { Product } from '@/types/product';
import { FaRegEdit, FaRegTrashAlt, FaRegEye, FaCheck, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { formatDate } from 'app/utils/formtDate';
import { formatPrice, formatValue } from 'app/utils/formatPrice';

type TableDashboardProps = {
  products: Array<Product>;
  onDelete: (product: Product) => void;
};

const TableDashboard: React.FC<TableDashboardProps> = ({
  products,

  onDelete,
}) => {
  return (
    <table className="table table-responsive">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Código</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Cadastro</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {console.log('Products: ', products)}
        {products.map((product) => {
          console.log('Product ', product);
          return <TableDashboardRow key={product.id} product={product} onDelete={onDelete} />;
        })}
      </tbody>
    </table>
  );
};

type TableDashboardRowProps = {
  product: Product;
  onDelete: (product: Product) => void;
};

const TableDashboardRow: React.FC<TableDashboardRowProps> = ({ product, onDelete }) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const handleProductIsDelete = (product: Product) => {
    if (isDelete) {
      onDelete(product);
      setIsDelete(false);
    } else {
      setIsDelete(true);
    }
  };

  const handleProductNotDelete = () => setIsDelete(false);

  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>{product.code}</td>
      <td>{product.name}</td>
      <td>{formatPrice(parseFloat(product.price || ''))}</td>
      <td>{formatDate(`${product.createdAt}`)}</td>
      <th>
        {!isDelete && (
          <>
            <Link href="/products/create">
              <a className="btn btn-sm">
                <FaRegEye className="text-info" />
              </a>
            </Link>
            <Link href={`/products/create?id=${product.id}`}>
              <a className="btn btn-sm">
                <FaRegEdit className="text-warning" />
              </a>
            </Link>
          </>
        )}

        <button className="btn btn-sm" onClick={() => handleProductIsDelete(product)}>
          {isDelete ? <FaCheck className="text-success" /> : <FaRegTrashAlt className="text-danger" />}
        </button>

        {isDelete && (
          <button className="btn btn-sm" onClick={handleProductNotDelete}>
            <FaTimes className="text-danger" />
          </button>
        )}
      </th>
    </tr>
  );
};

export { TableDashboard };
