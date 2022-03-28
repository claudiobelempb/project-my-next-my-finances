import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { AxiosResponse } from 'axios';

import { FaPlus } from 'react-icons/fa';

import { LayoutDashboard } from '@/components/LayoutDashboard';
import { MainHeaderDashboard } from '@/components/LayoutDashboard/MainHeaderDashboard';

import { Product } from '@/types/product';
import { httpClient } from '@/http/index';
import { LoaderDefault } from '@/common/LoaderDefault';
import { useDeleteService } from '@/services/products/delete.service';
import { TableDashboard } from '@/components/LayoutDashboard/TableDashboard';

export type ProductPros = {
  content?: Product[];
  products?: Array<Product>;
};

const Procucts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { onDelete } = useDeleteService();

  const { data: result, error } = useSWR<AxiosResponse<ProductPros>>(
    '/api/products',
    url => httpClient.get(url)
  );

  useEffect(() => {
    setProducts(result?.data.content || []);
  }, [result]);

  const handleDeleteProduct = (product: Product) => {
    onDelete(product.id || '');
    const newList: Product[] = products.filter(p => p.id !== product.id);
    setProducts(newList);
  };

  if (!result?.data.content) {
    return <LoaderDefault show={!result?.data.content} />;
  }

  return (
    <LayoutDashboard title='Products'>
      <MainHeaderDashboard title='Products' />
      <Link href='/products/create'>
        <a className='btn btn-primary text-white mb-2'>
          <FaPlus />
        </a>
      </Link>
      <h2>Lists Products</h2>

      <TableDashboard products={products} onDelete={handleDeleteProduct} />
    </LayoutDashboard>
  );
};

export default Procucts;
