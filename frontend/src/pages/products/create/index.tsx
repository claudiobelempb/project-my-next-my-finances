import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import Link from 'next/link';

import { useCreateService, useFindByIdService, useUpdateService } from '@/services/index';
import { Product } from '@/types/product';

import { FaChevronLeft } from 'react-icons/fa';

import { LayoutDashboard } from '@/components/LayoutDashboard';
import { MainHeaderDashboard } from '@/components/LayoutDashboard/MainHeaderDashboard';
import { InputDefault } from '@/common/InputDefault';
import { ButtonDefault } from '@/common/ButtonDefault';
import { convertMaskPrice, maskPrice, maskValor } from 'app/utils/mask';
import { formatDate } from 'app/utils/formtDate';
import { toast } from 'react-toastify';
import { formatPrice } from 'app/utils/formatPrice';

const validationSchema = yup.object().shape({
  code: yup.string().required('código é um campo obrigatório'),
  name: yup.string().required('name é um campo obrigatório'),
  price: yup.string().required('preço é um campo obrigatório'),
  description: yup.string().required('descrição é um campo obrigatório'),
});

const CreateProductPage: React.FC = () => {
  const { create } = useCreateService();
  const { onUpdate } = useUpdateService();
  const { findById } = useFindByIdService();

  const [id, setId] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [createdAt, setCreatedAt] = useState<string>('');
  const router = useRouter();
  const { id: queryId } = router.query;

  useEffect(() => {
    if (queryId) {
      findById(`${queryId}`).then((response) => {
        setId(response.id || '');
        setCode(response.code || '');
        setName(response.name || '');
        setPrice(maskPrice(`${response.price || ''}`));
        setCreatedAt(formatDate(`${response.createdAt || ''}`));
        setDescription(response.description || '');
      });
    }
  }, [queryId]);

  const handleCreateProduct = () => {
    const product: Product = {
      id,
      code,
      price,
      name,
      description,
    };

    validationSchema
      .validate(product)
      .then((obj) => {
        if (id) {
          onUpdate(product).then();
        } else {
          create(product).then((response) => {
            setId(response.id || '');
            setCreatedAt(formatDate(response.createdAt || ''));
          });
        }
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };

  return (
    <LayoutDashboard title={!id ? 'Created | Product' : 'Update | Product'}>
      <MainHeaderDashboard title={!id ? 'Created Product' : 'Update Product'} />
      <Link href="/products">
        <a className="btn btn-primary text-white mb-2">
          <FaChevronLeft />
        </a>
      </Link>
      <h2 className="text-secondary">{!id ? 'Created Product' : 'Update Product'}</h2>
      <form action="">
        <div className="row text-secondary">
          {id && (
            <>
              <InputDefault type="text" id="id" value={id} className={'col-6'} isDisabled />

              <InputDefault type="text" id="createdAt" value={createdAt} className={'col-6'} isDisabled />
            </>
          )}

          <InputDefault
            type="text"
            label="CÒDIGO: *"
            placeholder={'Código'}
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={'col-6'}
          >
            <div className="invalid-feedback">Please choose a username.</div>
          </InputDefault>

          <InputDefault
            type="text"
            label="Preço: *"
            id="price"
            value={maskValor(price)}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={'Preço'}
            className={'col-6'}
            maxLength={16}
          />

          <InputDefault
            type="text"
            label="Name: *"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={'Name'}
            className={'col-12'}
          />

          <InputDefault
            inputType="textarea"
            label="Descrição: *"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={'Descrição'}
            className={'col-12'}
          />

          <div className="d-grid gap-2 d-md-block py-3 ">
            {!id ? (
              <ButtonDefault
                label="Salvar"
                className="btn"
                background={'btn-success'}
                color={'text-white'}
                type="button"
                onClick={handleCreateProduct}
              />
            ) : (
              <ButtonDefault
                label="Editar"
                className="btn"
                background={'btn-success'}
                color={'text-white'}
                type="button"
                onClick={handleCreateProduct}
              />
            )}

            <ButtonDefault
              href="/products"
              buttonType="link"
              className="ms-md-3"
              background="btn-danger"
              color="text-white"
              label="Cancelar"
            />
          </div>
        </div>
      </form>
    </LayoutDashboard>
  );
};

export default CreateProductPage;
