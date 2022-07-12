import { useEffect, useState } from 'react';
import Link from 'next/link';

import { FaPlus } from 'react-icons/fa';

import { LayoutDashboard } from '@/components/LayoutDashboard';
import { MainHeaderDashboard } from '@/components/LayoutDashboard/MainHeaderDashboard';

import { Product } from '@/types/product/Product';
import { LoaderDefault } from '@/common/LoaderDefault';
import { useDeleteService } from '@/services/products/delete.service';
import { TableDashboard } from '@/components/LayoutDashboard/TableDashboard';
import { useProductFindAll } from 'hooks/products/useProductFindAll';

export type ProductPros = {
  content?: Product[];
  products?: Array<Product>;
};

const Procucts: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  const { onDelete } = useDeleteService();

  useEffect(() => {
    useProductFindAll().then((response) => {
      setData(response.data.content);
      console.log('Users: ', response.data);
    });
  }, []);

  const handleDeleteProduct = (product: Product) => {
    onDelete(product.id || '');
    const newList: Product[] = data.filter((p) => p.id !== product.id);
    setData(newList);
  };

  // if (!result?.data.content) {
  //   return <LoaderDefault show={!result?.data.content} />;
  // }

  return (
    <LayoutDashboard title="Products">
      <MainHeaderDashboard title="Products" />
      <Link href="/products/create">
        <a className="btn btn-primary text-white mb-2">
          <FaPlus />
        </a>
      </Link>
      <h2>Lists Products</h2>

      <TableDashboard products={data} onDelete={handleDeleteProduct} />
    </LayoutDashboard>
  );
};

export default Procucts;
